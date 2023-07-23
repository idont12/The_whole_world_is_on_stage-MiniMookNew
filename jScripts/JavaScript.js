const foundUrl = window.location.search;
const urlParameter = new URLSearchParams(foundUrl);
console.log(urlParameter.get('page'))

function akordionClick(AcordionNum) {
    document.getElementsByClassName("akordionGroup")[AcordionNum].classList.toggle("hide");
}

const isButtonsClick = [false, false];

function ScrollToTop() {
    let but = document.getElementsByClassName("buttonSwichFinder");
    for (i = 0; i < but.length; i++) {
        if (but[i].classList.contains("offMode")) {
            ChangeIframe(i);
            document.getElementById("hereTop").scrollIntoView();
            break;
        }
    }
}

function ChangeIframe(iframePick) {
    let iframeList = document.getElementsByClassName("TabContent");
    document.getElementsByClassName("superMasterPopicButton")[0].classList.remove("hidden");

    if (iframeList[iframePick].classList.contains("hidden")) {
        for (i = 0; i < iframeList.length; i++) {
            if (!iframeList[i].classList.contains("hidden")) {
                iframeList[i].classList.add("hidden");
            }
            document.getElementsByClassName("buttonSwichFinder")[i].classList.add("offMode");
        }
        document.getElementsByClassName("buttonSwichFinder")[iframePick].classList.remove("offMode");
        iframeList[iframePick].classList.remove("hidden");

        isButtonsClick[iframePick] = true;

        if (isButtonsClick[0] && isButtonsClick[1]) {
            document.getElementById("TempWhileLock").classList.add("hidden");
            document.getElementById("PageConcotion").classList.remove("hidden");
        }
    }
}


const AllAudioLinks = [new Audio("https://github.com/idont12/MoodelMook/assets/103817918/8c7ddd55-b2ab-4647-b8cd-b647e8824554"), new Audio("https://github.com/idont12/MoodelMook/assets/103817918/20979d74-723f-48c6-ba21-ca53c4321227"), new Audio("https://github.com/idont12/MoodelMook/assets/103817918/20daebde-3c27-496e-a1e6-faca07d8876d")];

function ActiveSound() {
    for (i = 0; i < AllAudioLinks.length; i++) {
        AllAudioLinks[i].pause();
        AllAudioLinks[i].currentTime = 0;
    }
    AllAudioLinks[SelectedOne].play();
}

var SelectedOne = 0;
function PickWord(WordCount) {
    let WordClass = document.getElementsByClassName("Word");
    let TempCharClass = document.getElementsByClassName("TempChar");

    WordClass[SelectedOne].classList.remove("Selected");
    TempCharClass[SelectedOne].ariaHidden = "true";

    WordClass[WordCount].classList.add("Selected");
    TempCharClass[WordCount].ariaHidden = "false";
    SelectedOne = WordCount;
}

function SwitchClass(IdElement, ClassChack) {
    var chackElemnt = document.getElementById(IdElement);
    if (chackElemnt.classList.contains(ClassChack)) {
        chackElemnt.classList.remove(ClassChack);
    }
    else {
        chackElemnt.classList.add(ClassChack);
    }
}