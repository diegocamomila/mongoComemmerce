db.produtos.find({ nome: { $regex: /.*mc.*/i } }).count();

// db.produtos.count({ nome: /Mc/i });