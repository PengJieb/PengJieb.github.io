var posts=["1970/01/01/hello-world/","2025/02/06/omg-dataset/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };