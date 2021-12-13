const express = require('express')
const router = express.Router()

const sns = require('../mongo/sns')


router.use(express.static('views'))

router.get('/', (req, res, next) => {
    try {
        res.render('index.html')
    } catch (err) {
        console.error(err)
        next(err)
    }
})

router.get('/about', (req, res, next) => {
    try {
        res.render('about.html')
    } catch (err) {
        console.error(err)
        next(err)
    }
})

router.get('/faq', (req, res, next) => {
    try {
        res.render('faq.html')
    } catch (err) {
        console.error(err)
        next(err)
    }
})


router.get('/SNS', (req, res) => {
    sns.sns.find(function (err, sns) {
        try {
            res.render('SNS_main.html', {data: sns})
        } catch(err) {
            res.render(err)
        }
    })
})

router.get("/thelastman", (req, res) => {
    sns.sns.find({ tag:"더라스트맨"}, (err, sns) => {
        try {
            res.render('sns_html/thelastman.html', { data: sns })
        } catch (err) {
            res.render(Error)
        }
    })
})

router.get("/thedevil", (req, res) => {
    sns.sns.find({ tag:"더데빌"}, (err, sns) => {
        try {
            res.render('sns_html/thedevil.html', { data: sns })
        } catch (err) {
            res.render(Error)
        }
    })
})

router.get("/goldmunt", (req, res) => {
    sns.sns.find({ tag:"나르치스와_골드문트"}, (err, sns) => {
        try {
            res.render('sns_html/goldmunt.html', { data: sns })
        } catch (err) {
            res.render(Error)
        }
    })
})

router.get("/elphsng", (req, res) => {
    sns.sns.find({ tag:"엘리펀트송"}, (err, sns) => {
        try {
            res.render('sns_html/elephantsong.html', { data: sns })
        } catch (err) {
            res.render(Error)
        }
    })
})

router.get("/kuroimen", (req, res) => {
    sns.sns.find({ tag:"쿠로이저택엔누가살고있을까"}, (err, sns) => {
        try {
            res.render('sns_html/kuroimension.html', { data: sns })
        } catch (err) {
            res.render(Error)
        }
    })
})

router.get("/sshorts", (req, res) => {
    sns.sns.find({ tag:"난쟁이들"}, (err, sns) => {
        try {
            res.render('sns_html/shorts.html', { data: sns })
        } catch (err) {
            res.render(Error)
        }
    })
})

router.get("/gotmr", (req, res) => {
    sns.sns.find({ tag:"곤투모로우"}, (err, sns) => {
        try {
            res.render('sns_html/gonetomorrow.html', { data: sns })
        } catch (err) {
            res.render(Error)
        }
    })
})

router.get("/themmt", (req, res) => {
    sns.sns.find({ tag:"더모먼트"}, (err, sns) => {
        try {
            res.render('sns_html/themoment.html', { data: sns })
        } catch (err) {
            res.render(Error)
        }
    })
})

router.get("/luckyseven", (req, res) => {
    sns.sns.find({ tag:"칠칠"}, (err, sns) => {
        try {
            res.render('sns_html/sevenseven.html', { data: sns })
        } catch (err) {
            res.render(Error)
        }
    })
})

router.get("/fanlttr", (req, res) => {
    sns.sns.find({ tag:"팬레터"}, (err, sns) => {
        try {
            res.render('sns_html/fanletter.html', { data: sns })
        } catch (err) {
            res.render(Error)
        }
    })
})

router.get("/kingsman", (req, res) => {
    sns.sns.find({ tag:"젠틀맨스가이드"}, (err, sns) => {
        try {
            res.render('sns_html/gentlemansguide.html', { data: sns })
        } catch (err) {
            res.render(Error)
        }
    })
})

router.get("/jklhyd", (req, res) => {
    sns.sns.find({ tag:"지킬앤하이드"}, (err, sns) => {
        try {
            res.render('sns_html/jekyllandhyde.html', { data: sns })
        } catch (err) {
            res.render(Error)
        }
    })
})

router.get("/endnote", (req, res) => {
    sns.sns.find({ tag:"엔딩노트"}, (err, sns) => {
        try {
            res.render('sns_html/endingnote.html', { data: sns })
        } catch (err) {
            res.render(Error)
        }
    })
})

router.get("/billy", (req, res) => {
    sns.sns.find({ tag:"빌리"}, (err, sns) => {
        try {
            res.render('sns_html/billyeliet.html', { data: sns })
        } catch (err) {
            res.render(Error)
        }
    })
})

router.get("/silver999", (req, res) => {
    sns.sns.find({ tag:"은하철도의"}, (err, sns) => {
        try {
            res.render('sns_html/999night.html', { data: sns })
        } catch (err) {
            res.render(Error)
        }
    })
})

router.get("/vmpoth", (req, res) => {
    sns.sns.find({ tag:"뱀파이어아더"}, (err, sns) => {
        try {
            res.render('sns_html/vampireother.html', { data: sns })
        } catch (err) {
            res.render(Error)
        }
    })
})

module.exports = router
