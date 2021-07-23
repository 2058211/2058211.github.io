function quiz(no)
{
    var your_ans = '';
    var result = '';

    if(no == 1)
    {
        your_ans = "あなたの答え：本座";
    }
    else if(no == 2)
    {
        your_ans = "あなたの答え：的の前";
    }
    else if(no == 3)
    {
        your_ans = "あなたの答え：射位";
    }
    else if(no == 4)
    {
        your_ans = "あなたの答え：矢道";
    }
    else
    {
        your_ans = "想定されていない引数です";
    }

    var html_ansMessage = document.getElementById("ans");
    html_ansMessage.innerHTML = your_ans;

    if(no == 3)
    {
        result = '正解です！';
    }
    else
    {
        result = '不正解です...';
    }

    alert(result);
    
}