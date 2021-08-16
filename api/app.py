from flask import Flask, request
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask_restful import Api, Resource
from flask_cors import CORS

app = Flask(__name__)
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///books.db'
db = SQLAlchemy(app)
ma = Marshmallow(app)
api = Api(app)
CORS(app, resources={r'/*': {'origins': '*'}})


class Book(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255))
    author = db.Column(db.String(255))
    read = db.Column(db.Boolean)


class BookSchema(ma.Schema):
    class Meta:
        fields = ('id', 'title', 'author', 'read')
        model = Book


book_schema = BookSchema()
books_schema = BookSchema(many=True)


class BookListResource(Resource):
    def get(self):
        books = Book.query.all()
        return books_schema.dump(books)

    def post(self):
        new_book = Book(
            title=request.json['title'],
            author=request.json['author'],
            read=request.json['read'],
        )
        db.session.add(new_book)
        db.session.commit()
        return book_schema.dump(new_book), 201


class BookResource(Resource):
    def get(self, book_id):
        book = Book.query.get_or_404(book_id)
        return book_schema.dump(book)

    def put(self, book_id):
        book = Book.query.get_or_404(book_id)

        if 'title' in request.json:
            book.title = request.json['title']
        if 'author' in request.json:
            book.author = request.json['author']
        if 'read' in request.json:
            book.read = request.json['read']

        db.session.commit()
        return book_schema.dump(book), 201

    def delete(self, book_id):
        book = Book.query.get_or_404(book_id)
        db.session.delete(book)
        db.session.commit()
        return '', 204


api.add_resource(BookListResource, '/books')
api.add_resource(BookResource, '/books/<int:book_id>')

if __name__ == '__main__':
    app.run(debug=True)
