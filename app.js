    
    // Book Constructor
        function Book(title, author, isbn) {

            this.title = title;
            this.author= author;
            this.isbn = isbn;
        
        }
    
        //UI Contructor
        function UI( ) {  }

        //Add Book to List
        UI.prototype.addBookToList = function(book){

        // create the list
        const list = document.getElementById('book-list');

        // Create tr element
        const row = document.createElement('tr');

        //Insert Col by using template literals
        row.innerHTML = `
        
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="" class="delete">X</a></td>
        `;

        list.appendChild(row);

        }

        //Showalert 
        UI.prototype.showAlert = function(message, className) {
             
            // Create div 
            const div = document.createElement('div');
            // add classname
             div.className = ` alert ${className}`;
             //Add Text which we need to add a text node

            div.appendChild(document.createTextNode(message));

            //let insert into the document by Get the parent

            const container = document.querySelector('.container');

            //let put it right before the form

            //Get Form

            const form = document.querySelector('#book-form');

            //Insert alert

            container.insertBefore(div, form);

            // Timeout after 3 sec

            //Here we going to use windows object
            setTimeout(function(){

                document.querySelector('.alert').remove();
            }, 3000);
                    
        }


        // Delet Book
        UI.prototype.deleteBook = function (target) {
            if(target.className === 'delet') {
                target.parentElement.parentElement.remove();
            }

        }

        // clear Fields 

        UI.prototype.clearFields = function() {
            document.getElementById('title').value = '';
            document.getElementById('author').value = '';
            document.getElementById('isbn').value = '';

        }
        //Event Listening

        document.getElementById('book-form').addEventListener('submit',function(e){            
            //Get form values
            
            const title = document.getElementById('title').value;
            const author = document.getElementById('author').value;
            const isbn = document.getElementById('isbn').value;
                        
            const book = new Book(title, author, isbn);
          
            const ui = new UI();
            
            
            //Validate
            if(title === '' || author === '' || isbn === '') {
            
                //Error alert
            
                ui.showAlert('please fill in all fields', 'error');
            }
            else{
            
            //Add Book to list
            
            ui.addBookToList(book);

            //show success
            
            ui.showAlert('Book Added', 'success');
            
            // Clear Fields
            
            ui.clearFields();
            
            }
            
            e.preventDefault();

            })
            
            
            //Event listening for delete
            
            //here we going to use the parent of it i.e 
            
            document.getElementById('book-list').addEventListener('click', function(e){

            //Instantiate UL
            const ui = new UI();
            // Delete Book
            ui.deleteBook(e.target);
            
            //Show message
            
            ui.showAlert('Book Removed!', 'success');
            
            
            e.preventDefault();
            });





   
