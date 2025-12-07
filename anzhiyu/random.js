var posts=["2025/12/06/THE FIRST/","2025/12/06/hello-world/","2025/12/07/English/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };