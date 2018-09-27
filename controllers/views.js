exports.getFirstPage = (req, res) => {
    res.render("home", {
        layout: "main"
    });
};

exports.getProjetosComerciaisPage = (req, res) => {
    res.render("projetos-comerciais", {
        layout: "main"
    });
};
