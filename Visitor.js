/* Visitor Design Pattern */

/* is a behavioral design pattern that lets you separate algorithms from
 the objects on which they operate. */

// Element classes
class Paragraph {
  constructor(text) {
    this.content = text;
  }
  accept(visitor) {
    visitor.visitParagraph(this);
  }
}

class Heading {
  constructor(level) {
    this.level = level;
  }

  accept(visitor) {
    visitor.visitHeading(this);
  }
}

class Image {
  constructor(src, alt) {
    this.src = src;
    this.alt = alt;
  }

  accept(visitor) {
    visitor.visitImage(this);
  }
}

// Visitor interface
class DocumentVisitor {
  visitParagraph(paragraph) {}
  visitHeading(heading) {}
  visitImage(image) {}
}

// Concrete visitors for HTML and Markdown
class HTMLVisitor extends DocumentVisitor {
  visitParagraph(paragraph) {
    console.log(`<p>${paragraph.content}</p>`);
  }

  visitHeading(heading) {
    console.log(`<h${heading.level}>${heading.level}</h${heading.level}>`);
  }

  visitImage(image) {
    console.log(`<img src="${image.src}" alt="${image.alt}"/>`);
  }
}

class MarkdownVisitor extends DocumentVisitor {
  visitParagraph(paragraph) {
    console.log(paragraph.content);
  }

  visitHeading(heading) {
    console.log(`${"#".repeat(heading.level)} ${heading.level}`);
  }

  visitImage(image) {
    console.log(`![${image.alt}](${image.src})`);
  }
}

// Example usage
const documentElements = [
  new Paragraph("My paragraph content"),
  new Heading(1),
  new Image("image.jpg", "Example Image"),
];

const htmlVisitor = new HTMLVisitor();
const markdownVisitor = new MarkdownVisitor();

documentElements.forEach((element) => {
  element.accept(htmlVisitor);
  element.accept(markdownVisitor);
});
