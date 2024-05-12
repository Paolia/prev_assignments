// メインの処理
let count = 0;
let limit = 3;
let win = 0;
let lose = 0;
let even = 0;
let result, comp_hand;

$("#gu").on('click', function () {
    result = janken(1);
    count++;
    // あとでここを関数にしよう
    console.log(win, lose, even, comp_hand, result, count);
    $('#comp_hand').html(c_hand(comp_hand));
    setTimeout(function () {
        $('#comp_hand').html(show_result(result));
    }, 500);
    setTimeout(function () {
        $('#shuukei').html('<p>' + win + '勝' + lose + '負' + even + '引き分け</p>');
    }, 2000);
    setTimeout(function () {
        $('#comp_hand').html('<img src="img/machi.png" class="hand_comp">');
    }, 3500);
    setTimeout(function () {
        if ((limit - count) > 0) {
            $('#shuukei').html('<p>あと' + (limit - count) + '回</p>');
        }
    }, 4000);
    if (count >= limit) {
        $('#shuukei').html('<p>' + win + '勝' + lose + '負' + even + '引き分け</p>');
        setTimeout(function () {
            $('#shuukei').html('<p>おしまい。もう一度しますか？</p>');
            $('#shuukei').on('click', function () {
                count = 0; win = 0; lose = 0; even = 0;
                result = ''; comp_hand = '';
                console.log(win, lose, even, comp_hand, result, count);
            });
        }, 5000);
    }
    // ここまで関数化予定
});
$("#choki").on('click', function () {
    result = janken(2);
    count++;
    // あとでここを関数にしよう
    console.log(win, lose, even, comp_hand, result, count);
    $('#comp_hand').html(c_hand(comp_hand));
    setTimeout(function () {
        $('#comp_hand').html(show_result(result));
    }, 500);
    setTimeout(function () {
        $('#shuukei').html('<p>' + win + '勝' + lose + '負' + even + '引き分け</p>');
    }, 1000);
    setTimeout(function () {
        $('#comp_hand').html('<img src="img/machi.png" class="hand_comp">');
    }, 3000);
    setTimeout(function () {
        if ((limit - count) > 0) {
            $('#shuukei').html('<p>あと' + (limit - count) + '回</p>');
        }
    }, 3000);
    if (count >= limit) {
        $('#shuukei').html('<p>' + win + '勝' + lose + '負' + even + '引き分け</p>');
        setTimeout(function () {
            $('#shuukei').html('<p>おしまい。もう一度しますか？</p>');
            $('#shuukei').on('click', function () {
                count = 0; win = 0; lose = 0; even = 0;
                result = ''; comp_hand = '';
                console.log(win, lose, even, comp_hand, result, count);
            });
        }, 5000);
    }
    // ここまで関数化予定
});
$("#pah").on('click', function () {
    result = janken(3);
    count++;
    // あとでここを関数にしよう
    console.log(win, lose, even, comp_hand, result, count);
    $('#comp_hand').html(c_hand(comp_hand));
    setTimeout(function () {
        $('#comp_hand').html(show_result(result));
    }, 500);
    setTimeout(function () {
        $('#shuukei').html('<p>' + win + '勝' + lose + '負' + even + '引き分け</p>');
    }, 1000);
    setTimeout(function () {
        $('#comp_hand').html('<img src="img/machi.png" class="hand_comp">');
    }, 3000);
    setTimeout(function () {
        if ((limit - count) > 0) {
            $('#shuukei').html('<p>あと' + (limit - count) + '回</p>');
        }
    }, 3000);
    if (count >= limit) {
        $('#shuukei').html('<p>' + win + '勝' + lose + '負' + even + '引き分け</p>');
        setTimeout(function () {
            $('#shuukei').html('<p>おしまい。もう一度しますか？</p>');
            $('#shuukei').on('click', function () {
                count = 0; win = 0; lose = 0; even = 0;
                result = ''; comp_hand = '';
                console.log(win, lose, even, comp_hand, result, count);
            });
        }, 5000);
    }
    // ここまで関数化予定
});
// メインの処理ここまで

// じゃんけん関数
function janken(ply) {
    const comp = Math.ceil(Math.random() * 3);
    if (comp == 1) { comp_hand = 'グー'; } else if (comp == 2) { comp_hand = 'チョキ'; } else { comp_hand = 'パー'; }
    if (ply == comp) {
        even++;
        return 'aiko';
    } else if ((ply == 1 && comp == 2) || (ply == 2 && comp == 3) || (ply == 3 && comp == 1)) {
        win++;
        return 'kachi';
    } else {
        lose++;
        return 'make';
    }
}
// じゃんけん関数ここまで

// 画像名変換関数
function c_hand(hand) {
    if (hand == 'グー') {
        return '<img src="img/janken_gu.png" class="hand_comp">'
    } else if (hand = 'チョキ') {
        return '<img src="img/janken_choki.png" class="hand_comp">'
    } else {
        return '<img src="img/janken_pah.png" class="hand_comp">'
    }
}
// 画像名変換関数ここまで

// 勝敗表示関数
function show_result(hand) {
    if (hand == 'kachi') {
        return '<p><img src="img/kachi.png"  class="hand_comp"></p><p>あなたの勝ちです！</p>'
    } else if (hand == 'make') {
        return '<p><img src="img/make.png" class="hand_comp"></p><p>あなたの負けです。</p>'
    } else {
        return '<p><img src="img/aiko.png" class="hand_comp"></p><p>あいこです。</p>'
    }
}
// 勝敗表示関数ここまで