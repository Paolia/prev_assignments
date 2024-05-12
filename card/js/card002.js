function hand() {
    //二次元配列でトランプのデッキを作る
    let arr = [];

    for (let i = 1; i <= 4; i++) {
        arr[i] = [];
        for (let j = 1; j <= 13; j++) {
            arr[i][j] = i * 100 + j;
        }
    }

    // 乱数でシャッフルした一連のデッキを作る
    let deck = [];
    for (let k = 0; k <= 51; k++) {
        let P = Math.ceil(Math.random() * 4);
        let Q = Math.ceil(Math.random() * 13);
        W = arr[P][Q];
        if (!deck.includes(W)) {
            deck.push(W);
        } else {
            k--;
            // 上の既存条件で弾いた場合のループ回数補正
        }
    }
    return deck.pop();
}

// カードの数を返す関数
function suuchi(num) {
    let str = String(num);
    if (str[0] === 1 && str[1] === 0) {
        return "A";
    } else {
        let kaz = str[1] + str[2];
        return Number(kaz);
    }
}

// 初回の配布（2枚ずつ）
let pl = 0, pn = 0;
let px;
let pcon = 0;
let dl = 0, dn = 0;
let dx;
let dcon = 0;
let l = 0;
let calling;
let d_zero;
let win=0, lose=0, even=0;

// 開始ボタン
calling = document.querySelector("#call");
calling.style.display = "none";
let hit = document.querySelector("#hit");
hit.style.display = "none";
let stand = document.querySelector("#stand");
stand.style.display = "none";
let replay = document.querySelector("#replay");
replay.innerHTML = "Start";
replay.addEventListener('click', function () {
    game_play();
});

function game_play() {
    pcon = 0; dcon = 0;
    pl = 0; pn = 0;
    dl = 0; dn = 0;
    // ボタン表示
    replay.style.display = "none";
    hit.style.display = "block";
    stand.style.display = "block";
    // 初回配札

    for (l = 0; l <= 1; l++) {
        // プレイヤー
        pl = hand();
        px = document.querySelector("#p" + l);
        $(px).html('<img src="img/deck/' + pl + '.png" class="card">');
        pn = suuchi(pl);
        if (pn != "A") {
            pcon += pn;
        } else if (pcon <= 10) {
            pcon += 11;
        } else {
            pcon += 1;
        }
        if (pcon > 21) {
            calling.innerHTML = 'You lose.';
            lose++;
            break;
        }

        // ディーラー
        dl = hand();
        let dx = document.querySelector("#d" + l);
        if (l == 0) {
            $(dx).html('<img src="img/deck/back.png" class="card">');
            d_zero = dl;
        } else {
            $(dx).html('<img src="img/deck/' + dl + '.png" class="card">');
        }
        dn = suuchi(dl);
        if (dn != "A") {
            dcon += dn;
        } else if (dcon <= 10) {
            dcon += 11;
        } else {
            dcon += 1;
        }
    }
}

//HIT
let more = document.querySelector("#hit");
more.addEventListener('click', function () {
    pl = hand();
    px = document.querySelector("#p" + l);
    $(px).html('<img src="img/deck/' + pl + '.png" class="card">');
    pcon += suuchi(pl);
    if (pcon > 21) {
        dy = document.querySelector("#d0");
        $(dy).html('<img src="img/deck/' + d_zero + '.png" class="card">');
        hit.style.display = "none";
        calling.style.display = "block";
        calling.innerHTML = "You lose.";
        // 勝敗表示
        setTimeout(function () {
            calling.innerHTML = 'You won ' + win + ' times, lost ' + lose + ' times.';
        }, 1000);
        // 勝敗表示ここまで
        lose++;
        stand.style.display = "none";
        replay.style.display = "block";
        replay.innerHTML = "Replay";
        replay.addEventListener('click', function () {
            calling.style.display = "none";
            //画像消去
            for (let r = 0; r <= 5; r++) {
                px = document.querySelector("#p" + r);
                $(px).html('');
                dx = document.querySelector("#d" + r);
                $(dx).html('');
            }
            //画像消去ここまで
            game_play();
        });
    }
    l++;
});

//STAND
more = document.querySelector("#stand");
more.addEventListener('click', function () {
    dy = document.querySelector("#d0");
    $(dy).html('<img src="img/deck/' + d_zero + '.png" class="card">');
    if (dcon <= 16) {
        dl = hand();
        dcon += suuchi(dl);
        let dx = document.querySelector("#d2");
        $(dx).html('<img src="img/deck/' + dl + '.png" class="card">');
    }
    if (pcon > 21 || (pcon < dcon && dcon < 22)) {
        calling.innerHTML = 'You lose.';
        lose++;
    } else if (pcon == dcon) {
        calling.innerHTML = 'Push. Neither Wins.';
        even++;
    } else {
        calling.innerHTML = 'You win!';
        win++;
    }
    hit.style.display = "none";
    calling.style.display = "block";
    // 勝敗表示
    setTimeout(function () {
        calling.innerHTML = 'You won ' + win + ' times, lost ' +lose+' times. Even for '+even+' times.';
    }, 1000);
    // 勝敗表示ここまで
    stand.style.display = "none";
    replay.style.display = "block";
    replay.innerHTML = "Replay";
    replay.addEventListener('click', function () {
        calling.style.display = "none";
        //画像消去
        for (let r = 0; r <= 5; r++) {
            px = document.querySelector("#p" + r);
            $(px).html('');
            dx = document.querySelector("#d" + r);
            $(dx).html('');
        }
        //画像消去
        pcon = 0, dcon = 0;
        game_play();
    });
});


