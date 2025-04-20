import json
import os

class LibraryManager:
    def __init__(self):
        self.books = []
        self.filename = "library.txt"
        self.load_library()

    def load_library(self):
        if os.path.exists(self.filename):
            try:
                with open(self.filename, 'r') as file:
                    self.books = json.load(file)
            except:
                self.books = []

    def save_library(self):
        with open(self.filename, 'w') as file:
            json.dump(self.books, file)

    def add_book(self):
        book = {
            'title': input("Enter book title: "),
            'author': input("Enter author name: "),
            'publication_year': int(input("Enter publication year: ")),
            'genre': input("Enter genre: "),
            'read': input("Have you read this book? (yes/no): ").lower() == 'yes'
        }
        self.books.append(book)
        print("Book added successfully!")

    def remove_book(self):
        title = input("Enter the title of the book to remove: ")
        for book in self.books[:]:
            if book['title'].lower() == title.lower():
                self.books.remove(book)
                print("Book removed successfully!")
                return
        print("Book not found!")

    def search_book(self):
        search_term = input("Enter title or author to search: ").lower()
        found_books = [
            book for book in self.books
            if search_term in book['title'].lower() or search_term in book['author'].lower()
        ]
        if found_books:
            self.display_books(found_books)
        else:
            print("No books found!")

    def display_books(self, books_to_display=None):
        books_to_display = books_to_display or self.books
        if not books_to_display:
            print("No books in library!")
            return
        
        for book in books_to_display:
            print("\n" + "="*50)
            print(f"Title: {book['title']}")
            print(f"Author: {book['author']}")
            print(f"Year: {book['publication_year']}")
            print(f"Genre: {book['genre']}")
            print(f"Read: {'Yes' if book['read'] else 'No'}")

    def display_statistics(self):
        total_books = len(self.books)
        if total_books == 0:
            print("No books in library!")
            return
        
        read_books = sum(1 for book in self.books if book['read'])
        read_percentage = (read_books / total_books) * 100
        
        print(f"\nTotal books: {total_books}")
        print(f"Read books: {read_books}")
        print(f"Percentage read: {read_percentage:.1f}%")

    def run(self):
        while True:
            print("\n=== Library Manager ===")
            print("1. Add a book")
            print("2. Remove a book")
            print("3. Search for a book")
            print("4. Display all books")
            print("5. Display statistics")
            print("6. Exit")
            
            choice = input("\nEnter your choice (1-6): ")
            
            if choice == '1':
                self.add_book()
            elif choice == '2':
                self.remove_book()
            elif choice == '3':
                self.search_book()
            elif choice == '4':
                self.display_books()
            elif choice == '5':
                self.display_statistics()
            elif choice == '6':
                self.save_library()
                print("Goodbye!")
                break
            else:
                print("Invalid choice! Please try again.")

if __name__ == "__main__":
    library = LibraryManager()
    library.run()
