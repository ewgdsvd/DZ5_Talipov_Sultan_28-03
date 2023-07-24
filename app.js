const numbersArray = [3, 4, 5, 44, 55, 23, 34, 12, 26, 67, 77, 75, 98, 67];
const oddNumbers = numbersArray.filter((num) => num % 2 !== 0);
console.log(oddNumbers);

function customFilterWithY(bookTitles) {
    const booksWithY = [];
    const otherBooks = [];

  for (const title of bookTitles) {
    if (title.toLowerCase().includes('y')) {
      booksWithY.push(title);
    } else {
      otherBooks.push(title);
    }
  }

  return {
    booksWithY,
    otherBooks,
  };
}

const bookTitles = ["Down Yonder", "Thomas Flanagan", "The Great Gatsby(2001)", "To Kill a Mockingbird", "Brave New World"];

const result = customFilterWithY(bookTitles);
console.log("Books with 'y':", result.booksWithY);
console.log("Other books:", result.otherBooks);