window.onload = function () {
    var btn1 = document.getElementById("btn1");
    var btn2 = document.getElementById("btn2");
    var btn3 = document.getElementById("btn3");
    var imgs = document.getElementById("imgs");
    btn1.onclick = function () {
        imgs.src = "img/LA.jpg";
    }
    btn2.onclick = function () {
        imgs.src = "img/LB.jpg";
    }
    btn3.onclick = function () {
        imgs.src = "img/LC.jpg";
    }
    //按钮改变图片

    var regsiter = document.getElementById("register");
    var user = document.getElementById("user");
    var fork = document.getElementById("fork");
    var userbox = document.getElementById("userBox");
    var inputs = document.getElementById("inputs");
    var reg = document.getElementById("reg");
    var button = document.getElementById("button");
    var login = document.getElementById("login");
    var userboxa = document.getElementById("userBoxa");
    var forks = document.getElementById("forks");
    var regs = document.getElementById("regs");
    var buttons = document.getElementById("buttons");
    var inputss = document.getElementById("inputss");
    var ahref = document.getElementById("aherf");
    var ahreff = document.getElementById("ahreff");
    regsiter.onclick = function () {
        user.style.display = "block";
        userbox.style.display = "block";
    }
    fork.onclick = function () {
        user.style.display = "none";
    }
    reg.onclick = function () {
        inputs.style.display = "block";
        userbox.style.height = "430px";
    }
    button.onclick = function () {
        inputs.style.display = "none";
        userbox.style.height = "300px";
    }
    login.onclick = function () {
        user.style.display = "block"
        userboxa.style.display = "block";
        userbox.style.display = "none";
    }
    forks.onclick = function () {
        userboxa.style.display = "none";
        user.style.display = "none"
    }
    regs.onclick = function () {
        inputss.style.display = "block";
        userboxa.style.height = "430px";
    }
    buttons.onclick = function () {
        inputss.style.display = "none";
        userboxa.style.height = "300px";
    }
    ahref.onclick = function () {
        userboxa.style.display = "block";
        userbox.style.display = "none";
    }
    ahreff.onclick = function () {
        userboxa.style.display = "none";
        userbox.style.display = "block";
    }
    //登录注册

    var imgArr = ["img/LA.jpg", "img/LB.jpg", "img/LC.jpg"];
    for (index = 0; index < imgArr.length; index++) {
    }
    index = 0
    setInterval(function () {
        index++;
        if (index >= imgArr.length) {
            index = 0
        }
        imgs.src = imgArr[index];
    }, 3000);
    //定时器

    var timer = null;
    var speed = 0;
    var sign = true;
    var toptop = document.getElementById("toptop");
    var backTop = document.getElementById("backtop");
    var aa = document.getElementById("aa");
    window.onscroll = function () {
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;//吸顶菜单
        if (scrollTop > 200) {
            toptop.style.top = 0;
            aa.style.display = "block";
        } else {
            aa.style.display = "none";
            toptop.style.top = "-50px";
        }
        if (!sign) {
            clearInterval(timer);
        }
        sign = false;
    }
    backTop.onclick = function () {
        timer = setInterval(function () {
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            speed = scrollTop / 10;
            document.documentElement.scrollTop = document.body.scrollTop = scrollTop - speed;
            if (scrollTop == 0) {
                clearInterval(timer);
            }
            sign = true;
        }, 20)
    }
    //回到顶部
}
