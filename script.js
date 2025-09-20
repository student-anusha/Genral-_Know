const questions = {
  1: {q: "टिम्बकटू शहर किस देश में है?", a: "माली"},
  2: {q: "प्रसिद्ध पेंटिंग “भारत माता” किस कलाकार द्वारा चित्रित की गई थी?", a: "अवनिंद्रनाथ टैगोर"},
  3: {q: "सामुदायिक नेतृत्व में अपने योगदान के लिए रेमन मैग्सेसे पुरस्कार प्राप्त करने वाले पहले भारतीय कौन थे?", a: "आचार्य विनोबा भावे (1958)"},
  4: {q: "कनिष्क प्रथम के शासनकाल में दरबारी चिकित्सक कौन था? ", a: "चरक"},
  5: {q: "चीनी यात्री ह्वेनसांग किस राजा के शासन काल में भारत  आया था?", a: "सम्राट हर्षवर्धन"},
  6: {q: "प्रसिद्ध पेंटिंग लिबर्टी लीडिंग द पीपल का विषय किस क्रांति से जुड़ा है?", a: "फ्रांसीसी क्रांति"}, 
  7: {q: "वाटरलू का युद्ध हारने के बाद नेपोलियन बोनापार्ट को किस द्वीप पर निर्वासित किया गया था?", a: "सेंट हेलेना द्वीप "},
  8: {q: "भारत का एकमात्र तैरता हुआ झील कौन सा है?   ", a: "लोकटक झील (मणिपुर)"},
  9: {q: "विश्व का सबसे ऊँचा झरना कौन सा है?  ", a: "एंजेल फॉल्स (वेनेजुएला में)"},
  10: {q: "हाल ही में खबरों में रही दिबांग नदी किन राज्यों से होकर बहती है?  ", a: "अरुणाचल प्रदेश और असम"},
  11: {q: "भारत का पहला क्वांटम कंप्यूटिंग विलेज किस राज्य में स्थापित हो रहा है?", a: "आंध्र प्रदेश (अमरावती)"},
  12: {q: " अलास्का संयुक्त राज्य अमेरिका का सबसे बड़ा राज्य है, यह पहले किस देश का हिस्सा था?  ", a: " रूस"},
  13: {q: "सांता क्लॉज का असली नाम क्या है? ", a: "सेंट निकोलस"},
  14: {q: "पंडवानी किस प्रदेश का लोकनृत्य/ नाटक है?    ", a: "छत्तीसगढ़ "},
  15: {q: "किस मंदिर को ब्लैक पैगोडा कहा जाता है?    ", a: "कोणार्क का सूर्य मंदिर "},
  16: {q: "माइकल एंजेलो और लिओनार्डो द विन्ची किस देश के विश्वविख्यात चित्रकार थे?   ", a: "इटली"}
};

let currentCircle = null;

function openQuestion(num) {
  currentCircle = num;
  document.getElementById("home-page").style.display = "none";
  document.getElementById("question-page").style.display = "block";
  document.getElementById("question-text").innerText = questions[num].q;
  document.getElementById("answer-text").innerText = questions[num].a;
  document.getElementById("answer-text").classList.remove("show");
  document.querySelector(".close-btn").style.display = "none";
}

function showAnswer() {
  document.getElementById("answer-text").classList.add("show");
  document.querySelector(".close-btn").style.display = "inline-block";
}

function closeQuestion() {
  document.getElementById("home-page").style.display = "block";
  document.getElementById("question-page").style.display = "none";
  let circles = document.querySelectorAll(".circle");
  circles[currentCircle - 1].classList.add("visited");
}