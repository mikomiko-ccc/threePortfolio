function janken(myAnswer){
    console.log(myAnswer)
    const enemyAnswers=["グー","チョキ","パー"]
    const enemyAnswer=enemyAnswers[Math.floor(Math.random()*enemyAnswers.length)]

    console.log(`自分：${myAnswer}:相手${enemyAnswer}`)
    let tisResulit;

    if (myAnswer==enemyAnswer){
        thisResulit=`<p id="jankenReselt" >あいこ</p>`
    }else if ((myAnswer =="グー" && enemyAnswer=="チョキ") || (myAnswer =="チョキ" && enemyAnswer=="パー") || (myAnswer =="パー" && enemyAnswer=="グー")){
        thisResulit=`<p id="jankenReselt" >勝ち</p>`
    }else {
        thisResulit=`<p id="jankenReselt" >まけ</p>`
    }

    let result =document.getElementById("jankenReselt")
    result.remove()
    result=document.getElementById("jaken")
    result.insertAdjacentHTML("afterend",thisResulit)
}

