const qoutes = [
    [['(حضرت محمد (ص))'], ['کسی که نماز را از وقتش تأخیر بیندازد، (فردای قیامت) به شفاعت من نخواهدرسید.']],
    [['(حضرت محمد (ص))'], ['فرزند آدم وقتي تن تو سالم است و خاطرت آسوده است و قوت يك روز خويش راداري ، جهانگر مباش .']],
    [['(امام حسن مجتبی (ع))'], ['به یقین بدانید كه شما هرگز تقوا را نشناسید تا آن كه صفت هدایت را بشناسید، و هرگز به پیمان قرآن تمسّك پیدا نمىكنید تا كسانى را كه دورش انداختند بشناسید، و هرگز قرآن را چنان كه شایسته تلاوت است تلاوت نمىكنید تا آنها را كه تحریفش كردند بشناسید، هر گاه این را شناختید بدعتها و بر خود بستن ها را خواهید شناخت و دروغ بر خدا و تحریف را خواهید دانست و خواهید دید كه آن كه اهل هوى است چگونه سقوط خواهد كرد.']],
    [['(امام حسن مجتبی (ع))'], ['بین حقّ و باطل به اندازه چهار انگشت فاصله است، آنچه با چشمت بینى حقّ است و چه بسا با گوش خود سخن باطل بسیارى را بشنوى.']],
    [['(امام صادق (علیه السلام))'], ['منتظر ظهور امام دوازدهم مانند کسی است که در رکاب پیامبر خدا شمشیر کشیده است و از ایشان دفاع می کند.']],
    [['(امام رضا (ع))'], ['از نشانه های دین فهمی ، حلم و علم است ، و خاموشی دری از درهای حكمت است . خاموشی و سكوت ، دوستی آور و راهنمای هر كار خیری است.']],
    [['(حضرت محمد (ص))'], ['فرزند آدم ، آنچه حاجت تو را رفع كند در دسترس خود داري و در پي آنچه تو را به طغيان وا مي دارد روز ميگذاري ، به اندك قناعت نميكني و از بسيار سير نمي شوي']],
    [['(حضرت عیسی علیه السلام)'], ['خوشا آنان که پاسی از شب را به عبادت می گذرانند؛ آنان کسانی اند که نوری ماندگار به ارث می برند.']],
    [['امام رضا (ع)'], ['زمانی بر مردم خواهد آمد كه در آن عافیت ده جزء است ، كه نه جزء آن در كناره گیری از مردم ، و یك جزء آن در خاموشی است.']],
    [['امام حسن مجتبی (ع)'], ['هر كه گناهان را به خداوند نسبت دهد، به تحقیق، فاجر و نابكار است. خداوند به زور اطاعت نشود، و در نافرمانى مغلوب نگردد، او بندگان را مهمل و سرِخود در مملكت وجود رها نكرده، بلكه او مالك هر آنچه آنها را داده و قادر بر آنچه آنان را توانا كرده است مىباشد، آنان را فرمان داده تا به اختیار خودشان آن را بپذیرند و نهیشان نموده تا به اختیار خود بر حذر باشند.']],
    [['امام حسن مجتبی (ع)'], ['تقوا و پرهیزكارى سرآغاز هر توبه اى، و سرّ هر حكمتى، و شرف و بزرگى هر عملى است، و هر كه از با تقوایان كامیاب گشته به وسیله تقوا كامیاب شده است.']],
    [['امام رضا (ع)'], ['از امام رضا ( علیه السلام ) از حقیقت توكل سؤال شد . فرمود : این كه جز خدا از كسی نترسی.']],
    [['حضرت محمد (ص)'], ['هرکس آبروی مؤمنی را حفظ کند، بدون تردید بهشت بر او واجب شود.']],
    [['امام رضا (ع)'], ['بخیل را آسایشی نیست ، و حسود را خوشی و لذتی نیست ، و زمامدار را وفایی نیست ، و دروغگو را مروت و مردانگی نیست.']],
    [['امام حسن مجتبی (ع)'], ['خلافت فقط از آنِ كسى است كه به روش رسول خدا(صلى الله علیه وآله وسلم)برود، و به طاعتِ خدا عمل كند، و به جان خودم سوگند كه ما اهل بیت نشانه هاى هدایت و جلوه هاى پرفروغ پرهیزگارى هستیم.']],
    [['حضرت محمد (ص)'], ['از دنيا بپرهيزيد ، قسم به آن كس كه جان من در كف اوست كه دنيا ازهاروت و ماروت ساحرتر است .']],
    [['امام حسن مجتبی (ع)'], ['چون شخص پیروز در طلب مكوش، و چون انسان تسلیم شده به قَدَر اعتماد مكن [بلكه با تلاش پیگیر و اعتماد و توكّل به خداوند، كار كند.']],
    [['امام رضا (ع)'], ['ایمان چهار ركن است : توكل بر خدا ، رضا به قضای خدا ، تسلیم به امر خدا ، واگذاشتن كار به خدا.']],
    [['امام حسن مجتبی (ع)'], ['خـویشاونـد كسـى است كـه دوستـى و محبّت، او را نـزدیك كرده باشد و اگـر چـه نـژادش دور بـاشد.و بیـگانـه كسـى است كـه از دوستـى و محبّت به دور است و گرچه نژادش نزدیك باشد.']],
    [['حضرت محمد (ص)'], ['دو چيز را خداوند در اين جهان كيفر ميدهد : تعدي ، و ناسپاسي پدر و مادر .']],
    [['امام حسن مجتبی (ع)'], ['هر كه به نیك گزینى خداوند دلگرم باشد، آرزو نمىكند در وضعى جز آنچه خدا برایش برگزیده، باشد.']],
    [['امام رضا (ع)'], ['از حضرت امام رضا ( علیه السلام ) درباره خوشی دنیا سؤال شد . فرمود : وسعت منزل و زیادی دوستان.']],
    [['امام رضا (ع)'], ['هر كس اندوه و مشكلی را از مؤمنی برطرف نماید ، خداوند در روز قیامت اندوه را از قلبش برطرف سازد.']],
    [['حضرت محمد (ص)'], ['در طلب دنيا معتدل باشيد و حرص نزنيد ، زيرا به هر كس هر چه قسمت اوست مي رسد .']],
    [['حضرت محمد (ص)'], ['بهترين كارها در نزد خدا نماز به وقت است ، آنگاه نيكي به پدر و مادر ، آنگاه جنگ در راه خدا .']],
    [['امام حسن مجتبی (ع)'], ['به راستى هر كه عبادت را به خاطر عبادت طلب كند خود را تزكیه نمودهاست. هر گاه مستحبّات به واجبات زیان رساند آن را ترك كنید.']],
    [['امام رضا (ع)'], ['به دیدن یكدیگر روید تا یكدیگر را دوست داشته باشید و دست یكدیگر را بفشارید و به هم خشم نگیرید.']],
    [['امام رضا (ع)'], ['هر كس به رزق و روزی كم از خدا راضی باشد ، خداوند از عمل كم او راضی باشد.']],
    [['حضرت محمد (ص)'], ['همانا دینار و درهم پیشینیان شما را به هلاكت رساند و همین دو نیز هلاك كننده شماست.']],
    [['امام حسن مجتبی (ع)'], ['هر گاه یكى از شما برادر خود را ملاقات كند، باید كه محلّ نور پیشانى (یعنى محلّ سجده) او را ببوسد.']],
    [['امام رضا (ع)'], ['عبادت پر روزه داشتن و نماز خواندن نیست ، و همانا عبادت پر اندیشه كردن در امر خداست.']],
    [['امام حسن مجتبی (ع)'], ['امام به شخصى فرمود : مبادا مرا ستایش كنى، زیرا من خود را بهتر مىشناسم، یا مرا دروغگو شمارى، زیرا دروغگو اندیشه و عقیده [ثابتى] ندارد، یا كسى را نزد من بدگویى نمایى.']],
    [['حضرت محمد (ص)'], ['بهترين كارها در پيش خدا آن است كه بينوايي را سير كنند ، يا قرض او رابپردازند يا زحمتي را از او دفع نمايند .']],
    [['حضرت محمد (ص)'], ['بهترين كارها در پيش خدا نگهداري زبان است .']],
    [['امام حسن مجتبی (ع)'], ['شما را به پرهیزگارى و ترس از خدا و ادامه تفكّر و اندیشه سفارش مىكنم، زیرا كه تفكّر و اندیشه، پدر و مادر تمام خیرات است.']],
    [['امام رضا (ع)'], [' ریان از امام رضا علیه السلام پرسید : نظرتان راجع به قرآن چیست ؟ امام فرمود : قرآن سخن خداست ، فقط از قرآن هدایت بجویید و سراغ چیز دیگر نروید كه گمراه می شوید.']],
    [['امام رضا (ع)'], ['صدقه بده هرچند كم باشد ، زیرا هر كار كوچكی كه صادقانه برای خدا انجام شود بزرگ است.']],
    [['امام حسن مجتبی (ع)'], ['شستن دستها پیش از غذا، فقر را از بین مىبرد و بعد از غذا، غم و اندوه را مىزداید.']],
    [['حضرت محمد (ص)'], ['بهترين بازيها در پيش خدا اسب دواني و تيراندازي است.']],
    [['حضرت محمد (ص)'], ['چنان با مردم مصاحبت داشته باش كه خود دوست دارى به همان گونه با تو مصاحبت كنند.']],
    [['امام حسن مجتبی (ع)'], ['كسى كه عقل ندارد، ادب ندارد و كسى كه همّت ندارد، جوانمردى ندارد و كسى كه دین ندارد، حیا ندارد.']],
    [['امام رضا (ع)'], [' به خدا خوش گمان باشید ، زیرا خدای عزوجل می فرماید : من نزد گمان بنده مؤمن خویشم ، اگر گمان او خوب است ، رفتار من خوب و اگر بد است ، رفتار من هم بد باشد.']],
];
function javaS() {
    index = Math.floor(Math.random() * qoutes.length);
    var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857", '#4700b3', '#663300', '#009900', '#001a4d', '#b300b3', '#4d4d00', '#995c00'];
    var textArea = document.getElementById('text');
    const author = document.getElementById('author');
    var colorIndex = Math.floor(Math.random() * colors.length);
    textArea.innerText = qoutes[index][1];
    author.innerText = qoutes[index][0];
    var bOdy = document.getElementById('Body');
    bOdy.style.color = colors[colorIndex];
    bOdy.style.backgroundColor = colors[colorIndex];
    newQuote = document.getElementById('new-quote');
    newQuote.style.backgroundColor = colors[colorIndex];
}
function tweetGo() {
    open('https://twitter.com/intent/tweet?text="' + qoutes[index][1] + ' "' );
}