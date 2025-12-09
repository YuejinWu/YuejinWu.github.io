var posts=["2025/12/08/AIpiatform_技术栈/","2025/12/07/English/","2025/12/06/THE FIRST/","2025/12/06/hello-world/","2025/12/09/个人介绍/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };