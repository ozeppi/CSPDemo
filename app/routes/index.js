
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.demo1 = function(req, res){
    if (req.query.enableCSP) {
        if (req.query.reportOnly) {
            res.setHeader(
                'X-Content-Security-Policy-Report-Only',
                "allow 'self'; img-src 'self'; report-uri /report"
            );
            res.setHeader(
                'X-WebKit-CSP-Report-Only',
                "allow 'self'; img-src 'self'; report-uri /report"
            );
            res.render('demo1', {title: "report onlyなのでかわいいクドの画像が見放題だよ"});
        } else {
            res.setHeader(
                'X-Content-Security-Policy',
                "allow 'self'; img-src 'self'; report-uri /report"
            );
            res.setHeader(
                'X-WebKit-CSP',
                "allow 'self'; img-src 'self'; report-uri /report"
            );
            res.render('demo1', {title: "allow 'self'なのでかわいいクドの画像が見えないよ…"});
        }
    }
    res.render('demo1', {title: "CSPヘッダが無いのでかわいいクドの画像が見放題だよ"});
};

exports.demo2 = function(req, res){
    if (req.query.disableInline) {
        res.setHeader(
            'X-Content-Security-Policy',
            "allow 'self'; style-src 'self'; report-uri /report"
        );
        res.setHeader(
            'X-WebKit-CSP',
            "allow 'self'; style-src 'self'; report-uri /report"
        );
        res.render('demo2', {title: "inline styleが使えません"});
    } else {
        res.setHeader(
            'X-Content-Security-Policy',
            "allow 'self'; style-src 'self' 'unsafe-inline'; report-uri /report"
        );
        res.setHeader(
            'X-WebKit-CSP',
            "allow 'self'; style-src 'self' 'unsafe-inline'; report-uri /report"
        );
        res.render('demo2', {title: "inline styleが使えるよ"});
    }
};

exports.demo_script = function(req, res){
    if (req.query.disableAll) {
        res.setHeader(
            'X-Content-Security-Policy',
            "allow 'self'; script-src 'self'; report-uri /report"
        );
        res.setHeader(
            'X-WebKit-CSP',
            "allow 'self'; script-src 'self'; report-uri /report"
        );
        res.render('demo_script', {title: "inline script, evalが使えないよ"});
    } else {
        res.setHeader(
            'X-Content-Security-Policy',
            "allow 'self'; style-src 'self' 'unsafe-inline' 'unsafe-eval'; report-uri /report"
        );
        res.setHeader(
            'X-WebKit-CSP',
            "allow 'self'; style-src 'self' 'unsafe-inline'; report-uri /report"
        );
        res.render('demo_script', {title: "inline script, evalが使えるよ"});
    }
};

exports.report = function(req, res){
    res.send(200);
    console.log(req.param('csp-report'));
    console.log(req);
    return;
};
