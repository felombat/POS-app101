
// Register `phoneList` component, along with its associated controller and template
(function () {
angular.
    module('bookModule').
        component('bookList', {
            templateUrl: 'views/books.html', 
            
            controller: function BooksListController() {
                this.booklist = { "error": "0", "total": "39", "page": "1", "books": [{ "title": "Full Stack AngularJS for Java Developers", "subtitle": "Build a Full-Featured Web Application from Scratch Using AngularJS with Spring RESTful", "isbn13": "9781484231975", "price": "$35.85", "image": "https://itbook.store/img/books/9781484231975.png", "url": "https://itbook.store/books/9781484231975" }, { "title": "Learning AngularJS", "subtitle": "A Guide to AngularJS Development", "isbn13": "9781491916759", "price": "$29.69", "image": "https://itbook.store/img/books/9781491916759.png", "url": "https://itbook.store/books/9781491916759" }, { "title": "Dependency Injection with AngularJS", "subtitle": "Design, control, and manage your dependencies with AngularJS dependency injection", "isbn13": "9781782166566", "price": "$17.99", "image": "https://itbook.store/img/books/9781782166566.png", "url": "https://itbook.store/books/9781782166566" }, { "title": "AngularJS Web Application Development Cookbook", "subtitle": "Over 90 hands-on recipes to architect performant applications and implement best practices in AngularJS", "isbn13": "9781783283354", "price": "$22.64", "image": "https://itbook.store/img/books/9781783283354.png", "url": "https://itbook.store/books/9781783283354" }, { "title": "AngularJS by Example", "subtitle": "Learn AngularJS, and tackle the challenges of modern web development by creating your own applications with these practical examples you can use and adapt", "isbn13": "9781783553815", "price": "$24.99", "image": "https://itbook.store/img/books/9781783553815.png", "url": "https://itbook.store/books/9781783553815" }, { "title": "AngularJS Essentials", "subtitle": "Design and construct reusable, maintainable, and modular web applications with AngularJS", "isbn13": "9781783980086", "price": "$20.99", "image": "https://itbook.store/img/books/9781783980086.png", "url": "https://itbook.store/books/9781783980086" }, { "title": "AngularJS Services", "subtitle": "Design, build, and test services to create a foundation for your AngularJS applications", "isbn13": "9781783983568", "price": "$16.99", "image": "https://itbook.store/img/books/9781783983568.png", "url": "https://itbook.store/books/9781783983568" }, { "title": "AngularJS Testing Cookbook", "subtitle": "Eliminate volatile code by taking control and understanding how to test AngularJS applications", "isbn13": "9781783983742", "price": "$6.96", "image": "https://itbook.store/img/books/9781783983742.png", "url": "https://itbook.store/books/9781783983742" }, { "title": "Learning AngularJS Animations", "subtitle": "Enhance user experience with awesome animations in AngularJS using CSS and JavaScript", "isbn13": "9781783984428", "price": "$14.99", "image": "https://itbook.store/img/books/9781783984428.png", "url": "https://itbook.store/books/9781783984428" }, { "title": "AngularJS Directives Cookbook", "subtitle": "Extend the capabilities of AngularJS and build dynamic web applications by creating customized directives with this selection of more than 30 recipes", "isbn13": "9781784395896", "price": "$31.99", "image": "https://itbook.store/img/books/9781784395896.png", "url": "https://itbook.store/books/9781784395896" }] }
            }
        });
}());