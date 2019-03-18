exports.getBreadcrumb = function (req) {
    let urlArr = req.originalUrl.split('/');
    let breadcrumbArr = [];
    let i = 0, length = urlArr.length;
    for (i = 1; i < length; i++) {
        breadcrumbArr.push({
            path: '/' + urlArr[i],
            name: req.app.locals.breadcrumb[urlArr[i]]
        });
        if (urlArr[i] == 'new' || urlArr[i] == 'edit' || i > 2) {
            return breadcrumbArr;
        }
    }
    
    return breadcrumbArr;
}