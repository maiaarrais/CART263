window.onload = async function(){
    // 1. Load the data using FETCH API
fetch('data/iris.json')
.then(response => response.json())
.then(data => {
  const irisData = data; // Array of 150 objects

  // Object properties: sepalLength, sepalWidth, petalLength, petalWidth, species

  // 2. map(): Add a random color field
  let possibleColor = ["#5d3fd3", "#a73fd3", "#d33fb5", "#d35d3f", "#d3a73f"];
  const irisesWithColors = irisData.map(iris => ({
    ...iris,
    color: possibleColor[Math.floor(Math.random() * possibleColor.length)]
  }));

  // 3. filter(): Filter out sepalWidth >= 4
  const filteredIrises = irisesWithColors.filter(iris => iris.sepalWidth < 4);

  // 4. reduce(): Calculate average petalLength
  const totalPetalLength = irisesWithColors.reduce((sum, iris) => sum + iris.petalLength, 0);
  const avgPetalLength = totalPetalLength / irisesWithColors.length;

  // 5. find(): Find object with petalWidth > 1.0
  const foundIris = irisesWithColors.find(iris => iris.petalWidth > 1.0);

  // 6. some(): Any object with petalLength > 10?
  const hasPetalLengthGreaterThan10 = irisesWithColors.some(iris => iris.petalLength > 10);

  // 7. some(): Any object with petalLength == 4.2?
  const hasPetalLengthEqualTo4_2 = irisesWithColors.some(iris => iris.petalLength === 4.2);

  // 8. every(): All objects with petalWidth < 3?
  const allPetalWidthLessThan3 = irisesWithColors.every(iris => iris.petalWidth < 3);

  // 9. every(): All objects with sepalWidth > 1.2?
  const allSepalWidthGreaterThan1_2 = irisesWithColors.every(iris => iris.sepalWidth > 1.2);

  // 10. toSorted(): Sort by petalWidth ascending
  const irisesWithColorsSorted = irisesWithColors.toSorted((a, b) => a.petalWidth - b.petalWidth);

  // 11. Visualization
  class Iris {
    constructor(data) {
      Object.assign(this, data);
    }

    render(container) {
        const div = document.createElement('div');
      
        // Calculate bubble size
        const width = Math.max(this.petalLength * 15, 30); // Minimum width of 30px
        const height = Math.max(this.petalWidth * 15, 30); // Minimum height of 30px
      
        // Set styles for the bubble
        div.style.width = `${width}px`;
        div.style.height = `${height}px`;
        div.style.backgroundColor = this.color;
        div.style.position = 'absolute'; // Allow random positioning
        div.style.borderRadius = '50%';
        div.style.display = 'flex';
        div.style.alignItems = 'center';
        div.style.justifyContent = 'center';
        div.style.color = 'white'; // Ensure text is visible
        div.style.fontSize = `${Math.max(width / 5, 10)}px`; // Dynamic font size, minimum 10px
        div.style.textAlign = 'center';
        div.style.overflow = 'hidden'; // Prevent text overflow
        div.style.padding = '5px'; // Add padding for better text visibility
        div.title = `Species: ${this.species}\nPetal: ${this.petalLength} x ${this.petalWidth}`;
      
        // Calculate random positions while ensuring the bubble stays within the container
        const maxLeft = container.offsetWidth - width;
        const maxTop = container.offsetHeight - height;
        div.style.left = `${Math.random() * maxLeft}px`; // Random horizontal position within bounds
        div.style.top = `${Math.random() * maxTop}px`; // Random vertical position within bounds
      
        // Add text content inside the bubble
        div.textContent = this.species;
      
        // Interactive hover effect
        div.addEventListener('mouseover', () => {
          div.style.transform = 'scale(1.2)';
          div.style.zIndex = '10'; // Bring bubble to the front
        });
        div.addEventListener('mouseout', () => {
          div.style.transform = 'scale(1)';
          div.style.zIndex = '1'; // Reset z-index
        });
      
        container.appendChild(div);
      }
    }

// Create container
  const container = document.createElement('div');
  container.setAttribute('data-container', '');
  container.style.position = 'relative'; // Allow absolute positioning of bubbles
  container.style.width = '100vw'; // Full viewport width
  container.style.height = '100vh'; // Full viewport height
  container.style.overflow = 'hidden'; // Prevent overflow
  document.body.appendChild(container);

  // Render all irises
  irisesWithColorsSorted.forEach(irisObj => {
    const iris = new Iris(irisObj);
    iris.render(container);
  });

  // Log report values
  console.log("Filtered Irises (< 4 sepalWidth):", filteredIrises);
  console.log("Average Petal Length:", avgPetalLength);
  console.log("Found Iris (petalWidth > 1.0):", foundIris);
  console.log("Any Petal Length > 10:", hasPetalLengthGreaterThan10);
  console.log("Any Petal Length == 4.2:", hasPetalLengthEqualTo4_2);
  console.log("All Petal Widths < 3:", allPetalWidthLessThan3);
  console.log("All Sepal Widths > 1.2:", allSepalWidthGreaterThan1_2);
});


}