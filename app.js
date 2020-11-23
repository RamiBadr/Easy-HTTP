// Istantiate EasyHttp.
const http = new EasyHTTP();

// Get Posts.
console.log(http.get('https://jsonplaceholder.typicode.com/posts', function(err, response) {
    if(err) {
        console.log(err);
    } else {
        console.log(response); 
    }
}));

// Get Single Post.
http.get('https://jsonplaceholder.typicode.com/posts/1', function(err, response) {
    if(err) {
        console.log(err);
    } else {
        console.log(response); 
    }
});

const data = {
    userId: 20,
    title: 'Custom Post',
    body: ' Ramy Badr is the besttt'
}


// Create Post.
http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, response) {
    if(err) {
        console.log(err);
    } else {
        console.log(response);
    }
});


// Update Post.
http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(err, response) {
    if(err) {
        console.log(err);
    } else {
        console.log(response);
    }
});

// Delete Post 
http.delete('https://jsonplaceholder.typicode.com/posts/1', function(err, response) {
    if(err) {
        console.log(err);
    } else {
        console.log(response);
    }
})



