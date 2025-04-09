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
     div.style.width = `${this.petalLength * 15}px`;
     div.style.height = `${this.petalWidth * 15}px`;
     div.style.backgroundColor = this.color;
     div.style.margin = '5px';
     div.style.borderRadius = '50%';
     div.style.display = 'flex';
     div.style.alignItems = 'center';
     div.style.justifyContent = 'center';
     div.style.color = 'white'; // Adjust text color for visibility
     div.style.fontSize = '12px'; // Adjust font size as needed
     div.style.textAlign = 'center';
     div.title = `Species: ${this.species}\nPetal: ${this.petalLength} x ${this.petalWidth}`;

     // Add text content inside the bubble
     div.textContent = this.species;
     // Interactive hover
     div.addEventListener('mouseover', () => {
       div.style.transform = 'scale(1.2)';
     });
     div.addEventListener('mouseout', () => {
       div.style.transform = 'scale(1)';
    });

      container.appendChild(div);
    }
  }

  // Create container
  const container = document.createElement('div');
  container.setAttribute('data-container', '');
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