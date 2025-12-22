var posts=["2025/12/07/English/","2025/12/22/DB_SQL 语言简读/","2025/12/22/DB_关系模型简读/","2025/12/08/AIpiatform_技术栈/","2025/12/16/RNN笔记/","2025/12/06/hello-world/","2025/12/06/THE FIRST/","2025/12/10/闲言碎语2/","2025/12/16/self-attention简读/","2025/12/09/个人介绍/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };