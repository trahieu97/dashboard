// class Category { 
//     constructor(dao) {
//         this.dao = dao;
//     }
  
//     createTable() {
//         const sql = `
//         CREATE TABLE IF NOT EXISTS categories (
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             name VARCHAR(90),
//             urlPath VARCHAR(90),
//             status INTETER
//         )`;
//         return this.dao.runquery(sql);
//     }
// }