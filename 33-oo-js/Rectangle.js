class Rectangle {
	// static rectangles = []

	constructor(height, width) {
		this.height = height
		this.width = width
		// Rectangle.rectangles.push(this)
		// this.myFunction = this.myFunction.bind(this)

		this.element = document.createElement('div')
		this.element.addEventListener("click", this.increaseSize)
	}

	// increaseSize() {
	// 	console.log(this)
	// 	this.height = this.height * 2
	// 	this.width = this.width * 2
	// 	this.render()
	// }

	increaseSize = () => {
		console.log(this)
		this.height = this.height * 2
		this.width = this.width * 2
		this.render()
	}

	// myFunction() {
	// 	console.log(this)
	// }

	area() {
		// setTimeout(this.myFunction, 2000)
		return this.height * this.width
	}

	render() {
    this.element.style.height = `${this.height}px`;
    this.element.style.width = `${this.width}px`;
    this.element.style.marginBottom = "10px";
    this.element.style.borderStyle = "solid";
    return this.element;
  }

	static largestOf(rectangles) {
		let largest = rectangles[0]
		rectangles.forEach( rectangle => {
				if(largest.area() < rectangle.area()){
						largest = rectangle
				}
		})
		return largest
	}
}

// Rectangle.rectangles = []

class Square extends Rectangle {
	constructor(length) {
		super()
		this.height = length
		this.width = length
	}
}

const r1 = new Rectangle(5, 4)
const r2 = new Rectangle(5, 40)

const s1 = new Square(5)
// console.log(r1.area())

// console.log(Rectangle.largestOf([r1, r2]))

