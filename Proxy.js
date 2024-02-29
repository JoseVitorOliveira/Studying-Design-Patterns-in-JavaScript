/* Proxy Design Pattern */

/* is a structural design pattern that lets you provide a substitute or placeholder
 for another object. A proxy controls access to the original object, allowing you to 
 perform something either before or after the request gets through to the original object. */

// Proxy Pattern can be used to lazily load expensive resources.

 //Real Subject
class RealImage {
    constructor(filename) {
        this.filename = filename;
        this.loadImage();
    }

    loadImage() {
        console.log(`Loading image: ${this.filename}`);
    }

    display() {
        console.log(`Displaying image: ${this.filename}`);
    }
}

//Proxy
class ImageProxy {
    constructor(filename) {
        this.filename = filename;
        this.image = null;
    }

    display() {
        if (!this.image) {
            this.image = new RealImage(this.filename);
        }
        this.image.display();
    }
}

//Usage
const image1 = new ImageProxy("photo1.jpg");
const image2 = new ImageProxy("photo2.jpg");

image1.display();
image2.display();