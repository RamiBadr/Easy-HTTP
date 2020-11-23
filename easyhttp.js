// EasyHTTP Constructor.
function EasyHTTP() {
     this.http = new XMLHttpRequest();
}

// Get Post/Posts
EasyHTTP.prototype.get = function(url, callback) {
    const http = this.http;

    http.open('get', url, true);

    http.onload = function() {
        if(this.status == 200) {
            callback(null, this.responseText);
        } else {
            callback('Error: ' + this.status);
        }
    }

    http.send();
}

// Create Post
EasyHTTP.prototype.post = function(url, data, callback) {
    const http = this.http;

    http.open('post', url, true);

    http.setRequestHeader('content-type', 'application/json')

    http.onload = function() {
       callback(null, this.responseText);
    }

    http.send(JSON.stringify(data));
}

// Update Post.
EasyHTTP.prototype.put = function(url, data, callback) {
    const http = this.http;

    http.open('put', url, true);

    http.setRequestHeader('content-type', 'application/json');

    http.onload = function() {
        callback(null, http.responseText);
    }

    http.send(JSON.stringify(data));
}

// Delete Post.
EasyHTTP.prototype.delete = function(url, callback) {
    const http = this.http;

    http.open('delete', url, true);

    http.onload = function() {
        if(this.status == 200) {
            callback(null, 'Post Deleted');
        } else {
            callback(`Error: ${this.error}`);
        }
    }

    http.send();
}


