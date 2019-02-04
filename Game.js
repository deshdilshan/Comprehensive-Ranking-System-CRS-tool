const GameState = Object.freeze({
    ENDOFLINE : require('os').EOL,
    WELCOMING:   Symbol("welcoming"),
    FIRSTQUESION:  Symbol("firstquestion"),
    SECONDQUESION: Symbol("secondquesion"),
    THIRDQUESION: Symbol("thirdquesion"),
    FOURQUESION: Symbol("fourquesion"),
    FIVEQUESION: Symbol("fivequesion"),
    SIXQUESION: Symbol("sixquesion"),
    SEVENQUESION: Symbol("sevenquesion"),
    EIGHTQUESION: Symbol("ninequesion"),
    NINEQUESION: Symbol("yenquesion"),
    TENQUESION: Symbol("elevenquesion"),
    ELEVENQUESION: Symbol("twelvequesion"),
    TWELVEQUESION: Symbol("thirteenquesion"),
    THIRTEENQUESION: Symbol("fourteenquesion"),
    FOURTEENQUESION: Symbol("fifteenquesion"),
    FIFTEENQUESION: Symbol("sixteenquesion"),
    SIXTEENQUESION: Symbol("seventeenquesion"),
    SEVENTEENQUESION: Symbol("eighteenquesion"),
    EIGHTTEENQUESION: Symbol("nineteenquesion"),
    NINETEENQUESION: Symbol("twentyquesion"),
    TWENTYQUESION: Symbol("twentyquesion"),
    TWENTYONEQUESION: Symbol("twentyonequesion"),
    TWENTYTWOQUESION: Symbol("twentytwoquesion"),
    TWENTYTHREEQUESION: Symbol("twentythreequesion"),
    TWENTYFOURQUESION: Symbol("twentyfourquesion"),
    TWENTYFIVEQUESION: Symbol("twentyfivequesion"),
    TWENTYSIXQUESION: Symbol("twentysixquesion"),
    TWENTYSEVENQUESION: Symbol("twentysevenquesion"),
    TWENTYEIGHTQUESION: Symbol("twentyeightquesion"),
    TWENTYNINEQUESION: Symbol("twentyninequesion"),
    THRTYQUESION: Symbol("thrtytquesion"),
    FINAL : Symbol("final")
    
});
const Q1MARK = 40;
const Q2MARK = 43;
const Q3MARK = 41;
const Q4MARK = 40;
const Q5MARK = 50;
const Q6MARK = 47;
const Q7MARK = 50;
const Q8MARK = 50;
const Q9MARK = 50;
const Q10MARK = 50;
const Q11MARK = 50;
const Q12MARK = 50;
const Q13MARK = 44;
const Q14MARK = 45;
const Q15MARK = 46;
const Q16MARK = 47;
const Q17MARK = 48;
const Q18MARK = 49;
const Q19MARK = 45;
const Q20MARK = 47;
const Q21MARK = 50;
const Q22MARK = 30;
const Q23MARK = 50;
const Q24MARK = 50;
const Q25MARK = 50;
const Q26MARK = 50;
const Q27MARK = 50;
const Q28MARK = 46;
const Q29MARK = 47;
const Q30MARK = 48;
const Q31MARK = 49;
const Q32MARK = 50;
const Q33MARK = 50;
global.FINALMARK = 0;
export default class Game{
    constructor(){
        this.stateCur = GameState.WELCOMING;
    }
    
    makeAMove(sInput)
    {
        let sReply = "";
        let finalMark = 0;
        switch(this.stateCur){
            case GameState.WELCOMING:
                sReply = "Comprehensive Ranking System (CRS) tool: skilled immigrants (Express Entry)"+GameState.ENDOFLINE+""+GameState.ENDOFLINE+" This tool will help you calculate your Comprehensive Ranking System (CRS) score based on the answers you provide below. The CRS is a points-based system that we use to assess and score your profile and rank it in the Express Entry pool. It’s used to assess your: skills, education, language ability, work experience, other factors"+GameState.ENDOFLINE+"..........."+GameState.ENDOFLINE+" type the relavant roman number"+GameState.ENDOFLINE+"..........." +GameState.ENDOFLINE +" 1) What is your marital status?"+GameState.ENDOFLINE+"i) Annualed marriege"+GameState.ENDOFLINE+"ii) common-low"+GameState.ENDOFLINE+"iii)Divorced / Separated"+GameState.ENDOFLINE+"iv) Legally Separated"+GameState.ENDOFLINE+"v) Married"+GameState.ENDOFLINE+"vi) Never Married / Single";
                this.stateCur = GameState.FIRSTQUESION;
                break;
            case GameState.FIRSTQUESION:
                if(sInput.toLowerCase().match("i")){
                    FINALMARK = FINALMARK +  parseInt(Q1MARK);
                }else if(sInput.toLowerCase().match("ii")){
                    FINALMARK = FINALMARK +  parseInt(Q2MARK);
                }else if(sInput.toLowerCase().match("iii")){
                    FINALMARK = FINALMARK +  parseInt(Q3MARK);
                }else if(sInput.toLowerCase().match("iv")){
                    FINALMARK = FINALMARK +  parseInt(Q4MARK);
                }else if(sInput.toLowerCase().match("v")){
                    FINALMARK = FINALMARK +  parseInt(Q5MARK);
                }else if(sInput.toLowerCase().match("vi")){
                    FINALMARK = FINALMARK +  parseInt(Q6MARK);
                }
                sReply = " 2) How old are you? "+GameState.ENDOFLINE+"i) 17"+GameState.ENDOFLINE+"ii) 18"+GameState.ENDOFLINE+"iii)19"+GameState.ENDOFLINE+"iv) 20"+GameState.ENDOFLINE+"v) 21"+GameState.ENDOFLINE+"vi) 22";
                this.stateCur = GameState.SECONDQUESION;
                break;
            case GameState.SECONDQUESION:
                if(sInput.toLowerCase().match("i")){
                    FINALMARK = FINALMARK +  Q7MARK;
                }else if(sInput.toLowerCase().match("ii")){
                    FINALMARK = FINALMARK +  Q8MARK;
                }else if(sInput.toLowerCase().match("iii")){
                    FINALMARK = FINALMARK +  Q9MARK;
                }else if(sInput.toLowerCase().match("iv")){
                    FINALMARK = FINALMARK +  Q10MARK;
                }else if(sInput.toLowerCase().match("v")){
                    FINALMARK = FINALMARK +  Q11MARK;
                }else if(sInput.toLowerCase().match("vi")){
                    FINALMARK = FINALMARK +  Q12MARK;
                }
                sReply = "3) What is your level of education?"+GameState.ENDOFLINE+"i) None, or less than secondary (high school)"+GameState.ENDOFLINE+"ii) Secondary diploma (high school graduation)"+GameState.ENDOFLINE+"iii)One-year program at a university, college, trade or technical school, or other institute"+GameState.ENDOFLINE+"iv) Two-year program at a university, college, trade or technical school, or other institute"+GameState.ENDOFLINE+"v) Bachelor's degree (three or more year program at a university, college, trade or technical school, or other institute)"+GameState.ENDOFLINE+"vi) Two or more certificates, diplomas or degrees. One must be for a program of three or more years";
                this.stateCur = GameState.THIRDQUESION;
                break;
            case GameState.THIRDQUESION:
                if(sInput.toLowerCase().match("i")){
                    FINALMARK = FINALMARK +  Q13MARK;
                }else if(sInput.toLowerCase().match("ii")){
                    FINALMARK = FINALMARK +  Q14MARK;
                }else if(sInput.toLowerCase().match("iii")){
                    FINALMARK = FINALMARK +  Q15MARK;
                }else if(sInput.toLowerCase().match("iv")){
                    FINALMARK = FINALMARK +  Q16MARK;
                }else if(sInput.toLowerCase().match("v")){
                    FINALMARK = FINALMARK +  Q17MARK;
                }else if(sInput.toLowerCase().match("vi")){
                    FINALMARK = FINALMARK +  Q18MARK;
                }
                sReply = "4) Have you earned a Canadian degree, diploma or certificate??"+GameState.ENDOFLINE+"i) Yes"+GameState.ENDOFLINE+"ii) No";
                
                this.stateCur = GameState.FOURQUESION;
                break;
                case GameState.FOURQUESION:
                    if(sInput.toLowerCase().match("i")){
                        FINALMARK = FINALMARK +  Q19MARK;
                    }
                sReply = "5) Choose the best answer to describe this level of education."+GameState.ENDOFLINE+"i) Secondary (high school) or less"+GameState.ENDOFLINE+"ii) One- or two-year diploma or certificate"+GameState.ENDOFLINE+"iii) Degree, diploma or certificate of three years or longer OR a Master’s, professional or doctoral degree of at least one academic year";    
                this.stateCur = GameState.FIVEQUESION;
                break;
                case GameState.FIVEQUESION:
                    if(sInput.toLowerCase().match("i")){
                        FINALMARK = FINALMARK +  Q20MARK;
                    }else if(sInput.toLowerCase().match("ii")){
                        FINALMARK = FINALMARK +  Q21MARK;
                    }else if(sInput.toLowerCase().match("iii")){
                        FINALMARK = FINALMARK +  Q22MARK;
                    }
                sReply = "6) Official languages: Canada's official languages are English and French."+GameState.ENDOFLINE+"6(i) Are your test results less than two years old?"+GameState.ENDOFLINE+"i) Yes"+GameState.ENDOFLINE+"ii) No";    
                this.stateCur = GameState.SIXQUESION;
                break;
                case GameState.SIXQUESION:
                    if(sInput.toLowerCase().match("i")){
                        FINALMARK = FINALMARK +  Q23MARK;
                        sReply = "6(ii)) Which language test did you take for your first official language?"+GameState.ENDOFLINE+"i) CELPIP-G"+GameState.ENDOFLINE+"ii) IELTS"+GameState.ENDOFLINE+"iii) TEF Canada"+GameState.ENDOFLINE+"iv) TCF Canada";    
                        this.stateCur = GameState.SEVENQUESION;
                    }else{
                        sReply = "You are not qualified!";
                    }
                
                break;
                case GameState.SEVENQUESION:
                    if(sInput.toLowerCase().match("i")){
                        FINALMARK = FINALMARK +  Q24MARK;
                    }else if(sInput.toLowerCase().match("ii")){
                        FINALMARK = FINALMARK +  Q25MARK;
                    }else if(sInput.toLowerCase().match("iii")){
                        FINALMARK = FINALMARK +  Q26MARK;
                    }else if(sInput.toLowerCase().match("iv")){
                        FINALMARK = FINALMARK +  Q27MARK;
                    }
                sReply = " 7) Work Experience? "+GameState.ENDOFLINE+"i) 1 year"+GameState.ENDOFLINE+"ii) 2 year"+GameState.ENDOFLINE+"iii)3 year"+GameState.ENDOFLINE+"iv) 4 year"+GameState.ENDOFLINE+"v) 5 year"+GameState.ENDOFLINE+"vi) 6 or 6+ years";
                this.stateCur = GameState.FINAL;
                break;
                case GameState.FINAL:
                    if(sInput.toLowerCase().match("i")){
                        FINALMARK = FINALMARK +  Q28MARK;
                    }else if(sInput.toLowerCase().match("ii")){
                        FINALMARK = FINALMARK +  Q29MARK;
                    }else if(sInput.toLowerCase().match("iii")){
                        FINALMARK = FINALMARK +  Q30MARK;
                    }else if(sInput.toLowerCase().match("iv")){
                        FINALMARK = FINALMARK +  Q31MARK;
                    }else if(sInput.toLowerCase().match("v")){
                        FINALMARK = FINALMARK +  Q32MARK;
                    }else if(sInput.toLowerCase().match("vi")){
                        FINALMARK = FINALMARK +  Q33MARK;
                    }
                sReply = "Your Final Mark is " + FINALMARK;
                this.stateCur = GameState.FINAL;
                break;
                // case GameState.FINAL:
                // if(sInput.toLowerCase().match("three")){
                //     sReply = "question 4?";
                //     finalMark = finalMark + 1;
                // }else{
                //     sReply = "Wrong. The answer three.";
                    
                // }
                // this.stateCur = GameState.TENQUESION;
                // break;
                // case GameState.TENQUESION:
                // if(sInput.toLowerCase().match("three")){
                //     sReply = "question 4?";
                //     finalMark = finalMark + 1;
                // }else{
                //     sReply = "Wrong. The answer three.";
                    
                // }
                // this.stateCur = GameState.ELEVENQUESION;
                // break;
                // case GameState.ELEVENQUESION:
                // if(sInput.toLowerCase().match("three")){
                //     sReply = "question 4?";
                //     finalMark = finalMark + 1;
                // }else{
                //     sReply = "Wrong. The answer three.";
                    
                // }
                // this.stateCur = GameState.TWELVEQUESION;
                // break;
                // case GameState.TWELVEQUESION:
                // if(sInput.toLowerCase().match("three")){
                //     sReply = "question 4?";
                //     finalMark = finalMark + 1;
                // }else{
                //     sReply = "Wrong. The answer three.";
                    
                // }
                // this.stateCur = GameState.THIRTEENQUESION;
                // break;
                // case GameState.THIRTEENQUESION:
                // if(sInput.toLowerCase().match("three")){
                //     sReply = "question 4?";
                //     finalMark = finalMark + 1;
                // }else{
                //     sReply = "Wrong. The answer three.";
                    
                // }
                // this.stateCur = GameState.FOURTEENQUESION;
                // break;
                // case GameState.FOURTEENQUESION:
                // if(sInput.toLowerCase().match("three")){
                //     sReply = "question 4?";
                //     finalMark = finalMark + 1;
                // }else{
                //     sReply = "Wrong. The answer three.";
                    
                // }
                // this.stateCur = GameState.FIFTEENQUESION;
                // break;
                // case GameState.FIFTEENQUESION:
                // if(sInput.toLowerCase().match("three")){
                //     sReply = "question 4?";
                //     finalMark = finalMark + 1;
                // }else{
                //     sReply = "Wrong. The answer three.";
                    
                // }
                // this.stateCur = GameState.SIXTEENQUESION;
                // break;
                // case GameState.SIXTEENQUESION:
                // if(sInput.toLowerCase().match("three")){
                //     sReply = "question 4?";
                //     finalMark = finalMark + 1;
                // }else{
                //     sReply = "Wrong. The answer three.";
                    
                // }
                // this.stateCur = GameState.SEVENTEENQUESION;
                // break;
                // case GameState.SEVENTEENQUESION:
                // if(sInput.toLowerCase().match("three")){
                //     sReply = "question 4?";
                //     finalMark = finalMark + 1;
                // }else{
                //     sReply = "Wrong. The answer three.";
                    
                // }
                // this.stateCur = GameState.EIGHTTEENQUESION;
                // break;
                // case GameState.EIGHTTEENQUESION:
                // if(sInput.toLowerCase().match("three")){
                //     sReply = "question 4?";
                //     finalMark = finalMark + 1;
                // }else{
                //     sReply = "Wrong. The answer three.";
                    
                // }
                // this.stateCur = GameState.NINETEENQUESION;
                // break;
                // case GameState.NINETEENQUESION:
                // if(sInput.toLowerCase().match("three")){
                //     sReply = "question 4?";
                //     finalMark = finalMark + 1;
                // }else{
                //     sReply = "Wrong. The answer three.";
                    
                // }
                // this.stateCur = GameState.TWENTYQUESION;
                // break;
                // case GameState.TWENTYQUESION:
                // if(sInput.toLowerCase().match("three")){
                //     sReply = "question 4?";
                //     finalMark = finalMark + 1;
                // }else{
                //     sReply = "Wrong. The answer three.";
                    
                // }
                // this.stateCur = GameState.TWENTYONEQUESION;
                // break;
                // case GameState.TWENTYONEQUESION:
                // if(sInput.toLowerCase().match("three")){
                //     sReply = "question 4?";
                //     finalMark = finalMark + 1;
                // }else{
                //     sReply = "Wrong. The answer three.";
                    
                // }
                // this.stateCur = GameState.TWENTYTWOQUESION;
                // break;
                // case GameState.TWENTYTWOQUESION:
                // if(sInput.toLowerCase().match("three")){
                //     sReply = "question 4?";
                //     finalMark = finalMark + 1;
                // }else{
                //     sReply = "Wrong. The answer three.";
                    
                // }
                // this.stateCur = GameState.TWENTYTHREEQUESION;
                // break;
                // case GameState.TWENTYTHREEQUESION:
                // if(sInput.toLowerCase().match("three")){
                //     sReply = "question 4?";
                //     finalMark = finalMark + 1;
                // }else{
                //     sReply = "Wrong. The answer three.";
                    
                // }
                // this.stateCur = GameState.TWENTYFOURQUESION;
                // break;
                
                
        }
        return([sReply]);
    }
}