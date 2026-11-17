// EDIT ME: your reads, newest first (the page sorts by date anyway). Book reviews and reader responses; your own stories and words go in notes.js.
// Same fields as a note: date, title, slug, category (the genre of the book, shown above the title in the pop-up: Novel, Memoir, History, Poetry...), place, languages, prose: [[original paragraph, translation], ...] (add a third item "h" to make a pair a bold heading with a rule above it) (or blocks / poem / stanzas / body), photo, video.
// book: { cover: "file.jpg" (in assets/photos/), title, author, language (the edition read), country (where the book was first published, or a list), original (the language it was written in), lines: ["detail", ...] } is the book the response is about; the cover is what the Reads page shows. The Reads filter uses country (as a flag); original is kept for reference.
// sameAs: "other-slug" makes a read share another read's title and text (one response to two books); give it its own date, slug, book and place.
// slug: optional short link name (needed when the title isn't plain English letters).
window.READS = [
  {
    "date": "2019-11-24",
    "title": "Choosing Not to Repeat the Harm",
    "slug": "choosing-not-to-repeat-the-harm",
    "category": "Novel",
    "book": {
      "cover": "wuthering_heights.jpg",
      "title": "Wuthering Heights",
      "author": "Emily Brontë",
      "language": "English",
      "country": "United Kingdom",
      "original": "English",
      "lines": [
        "Novel · English original, first published 1847",
        "On the Yorkshire moors, an orphan from Liverpool and the Earnshaw daughter he loves, and the harm that passes to the next generation."
      ]
    },
    "place": "于加州圣克拉拉\nSanta Clara, CA",
    "languages": ["Chinese", "English"],
    "prose": [
      ["我一直觉得，《呼啸山庄》最令人不安的地方，是 Emily Brontë 从来没有试图让爱情变得美好。约克郡荒原上的狂风、潮湿的石墙、荒凉的山丘，以及两座彼此对望的庄园，构成了一个几乎与外部世界隔绝的空间。但这片看似远离文明的土地，实际上从未脱离英国社会的阶级秩序，甚至与大英帝国的殖民历史存在隐秘的联系。",
       "I have always felt that the most unsettling thing about *Wuthering Heights* is that Emily Brontë never tries to make love beautiful. The wind over the Yorkshire moors, the damp stone walls, the bleak hills, and two houses facing each other make up a space almost cut off from the outside world. But this land, which seems far from civilization, never escapes the class order of English society, and is even secretly tied to the colonial history of the British Empire."],
      ["小说主要发生在18世纪末至19世纪初，正值英国的商业扩张、工业化与大西洋奴隶贸易交织的时代。呼啸山庄与画眉田庄不仅是两处住所，更代表着土地、继承权与社会身份所构成的权力结构。在这里，一个人的价值往往不是由品格决定，而是由姓氏、出身、财产，以及是否被承认为家庭成员所决定。",
       "The novel takes place mainly between the end of the eighteenth century and the beginning of the nineteenth, an age in which Britain’s commercial expansion, industrialization and the Atlantic slave trade were intertwined. Wuthering Heights and Thrushcross Grange are not just two dwellings but a power structure built from land, inheritance and social standing. Here a person’s worth is often decided not by character but by surname, origin, property, and whether one is recognized as a member of the family."],
      ["希斯克利夫的身世尤其值得玩味。他并非出生于约克郡，而是被老恩肖从利物浦的街头带回。18世纪的利物浦是英国跨大西洋奴隶贸易的重要港口，来自非洲、加勒比地区、爱尔兰及其他地方的人群与帝国贸易在这里交汇。小说反复强调希斯克利夫深色的外貌、陌生的语言和无法确认的血统，却始终没有揭示他的真实来历。",
       "Heathcliff’s origins are especially worth pondering. He was not born in Yorkshire but brought back by old Mr. Earnshaw from the streets of Liverpool. In the eighteenth century Liverpool was a major port of Britain’s transatlantic slave trade, where people from Africa, the Caribbean, Ireland and elsewhere met imperial commerce. The novel repeatedly stresses Heathcliff’s dark appearance, his strange speech and his unverifiable blood, yet never reveals where he really came from."],
      ["我觉得这种身份上的空白并非无关紧要。希斯克利夫不仅是一个贫穷的弃儿，更是一个无法被英国乡村社会轻易归类的外来者。他可能与殖民贸易或其他移民历史有关，但小说拒绝给出确定答案。他被带进一个家庭，却从未真正获得平等的归属；被赋予名字，却没有能够证明自身来历的家族历史。",
       "I think this blank in his identity is not insignificant. Heathcliff is not only a poor foundling but an outsider that English rural society cannot easily classify. He may be connected to the colonial trade or to other histories of migration, but the novel refuses to give a definite answer. He is brought into a family but never truly gains equal belonging; he is given a name but no family history that can prove where he is from."],
      ["这种排斥不仅来自贫穷，也来自人们对陌生血统和社会身份的恐惧。老恩肖的庇护可以暂时保护他，但无法改变家庭内部的等级。老恩肖死后，辛德雷迅速将他降为仆役，剥夺教育，让他从一个可能成为家庭成员的孩子，变成依附于土地所有者的劳动力。",
       "The exclusion comes not only from poverty but from people’s fear of unfamiliar blood and social identity. Old Mr. Earnshaw’s protection can shield him for a time, but cannot change the hierarchy inside the family. After Mr. Earnshaw dies, Hindley quickly reduces him to a servant and deprives him of education, turning a child who might have become part of the family into labor dependent on the landowner."],
      ["而凯瑟琳与希斯克利夫的爱情，恰恰发生在这种不平等之中。两个人曾在荒原上奔跑，似乎可以暂时忘记姓氏、财产与社会身份。但当凯瑟琳进入画眉田庄，接触到林敦家的礼仪、服饰和生活方式之后，她逐渐意识到，爱情并不能替代阶级地位。",
       "And the love between Catherine and Heathcliff takes place precisely within this inequality. The two once ran across the moors and could seem, for a while, to forget surnames, property and social standing. But once Catherine enters Thrushcross Grange and encounters the manners, clothes and way of life of the Lintons, she gradually realizes that love cannot replace class position."],
      ["凯瑟琳的悲剧，不是她不够爱希斯克利夫，而是她无法想象一种既能保有这份爱、又不必放弃社会地位的生活。她认为嫁给希斯克利夫会降低自己的身份，却又觉得两人在本质上无法分离。阶级秩序已经深入到她理解爱情与自我的方式之中。",
       "Catherine’s tragedy is not that she does not love Heathcliff enough, but that she cannot imagine a life in which she keeps that love without giving up her social position. She thinks marrying Heathcliff would degrade her, yet feels the two are in essence inseparable. The class order has sunk into the very way she understands love and herself."],
      ["但希斯克利夫同样不是一个值得浪漫化的受害者。他后来通过来历不明的财富、债务和财产控制，逐步夺取两座庄园，并将自己曾经承受的羞辱施加到下一代身上。",
       "But Heathcliff is likewise not a victim to be romanticized. Later, through wealth of unknown origin, debts and control of property, he gradually takes both estates and inflicts the humiliation he once suffered on the next generation."],
      ["这里最令我不安的是，他没有推翻那个排斥自己的社会秩序，而是学会使用同样的规则，成为新的支配者。如果从殖民与阶级压迫的角度阅读，他的复仇甚至呈现出一种权力关系的倒转：曾经被视为外来者、被剥夺身份的人，最终通过占有财产和控制他人的生活，获得了原本拒绝接纳他的社会所认可的权力。",
       "What unsettles me most here is that he does not overthrow the social order that excluded him but learns to use the same rules and becomes the new master. Read through colonialism and class oppression, his revenge even looks like an inversion of power: the one once seen as an outsider and stripped of identity ends up, by owning property and controlling other people’s lives, with the kind of power recognized by the very society that refused to accept him."],
      ["这让我想到，压迫最顽固的地方，未必是它始终由同一群人掌握，而是即使受害者获得了权力，也可能继续相信支配与占有才是尊严的证明。",
       "This makes me think that the most stubborn thing about oppression is not necessarily that it is always held by the same group, but that even when victims gain power they may go on believing that domination and possession are the proof of dignity."],
      ["然而，这部小说最精妙的地方，还在于我们从来没有真正直接接触过这些人物的故事。",
       "Yet what is most ingenious about the novel is that we never actually come into direct contact with these characters’ stories."],
      ["整个故事由洛克伍德记录，而最重要的叙述者却是女管家耐莉。她熟悉两个家族的秘密，却并不是置身事外的观察者。她拥有自己的道德判断、阶级偏见和情感立场，有时甚至直接影响悲剧的发展。",
       "The whole story is recorded by Lockwood, but the most important narrator is the housekeeper Nelly. She knows the secrets of both families, yet is not a detached observer. She has her own moral judgments, class prejudices and emotional loyalties, and sometimes directly influences the course of the tragedy."],
      ["当凯瑟琳向耐莉解释自己为何选择嫁给埃德加时，希斯克利夫只听见了她认为嫁给自己有失身份的部分，便愤然离开。耐莉知道他曾在场，却没有及时阻止这场误解。",
       "When Catherine explains to Nelly why she has chosen to marry Edgar, Heathcliff hears only the part where she says that marrying him would degrade her, and leaves in anger. Nelly knows he was there, yet does not stop the misunderstanding in time."],
      ["耐莉究竟是在讲述一场她亲眼见证的悲剧，还是在将一场自己也参与促成的悲剧，整理成一个关于他人性格缺陷的故事？",
       "Is Nelly telling a tragedy she witnessed, or arranging a tragedy she helped bring about into a story about other people’s character flaws?"],
      ["我尤其在意耐莉所处的阶级位置。她是仆人，却长期生活在地主家庭内部；她没有主人的财产权力，却拥有解释主人行为的叙事权力。她赞赏体面、秩序与自我约束，对凯瑟琳的任性和希斯克利夫的激烈情感则经常流露出不满。",
       "I pay particular attention to Nelly’s class position. She is a servant who has lived long inside a landowning family; she has none of her masters’ property power, but she has the narrative power to interpret their behavior. She admires decency, order and self-restraint, and often shows displeasure at Catherine’s willfulness and Heathcliff’s intense emotions."],
      ["这种立场使她既能看见上层家庭的虚伪，也可能不自觉地维护它们的价值观。她对希斯克利夫的描述，是否也延续了英国社会将陌生外来者视为粗野、危险和难以理解之人的习惯？",
       "This position lets her see the hypocrisy of the upper-class families and may also lead her to defend their values unconsciously. Does her description of Heathcliff also continue English society’s habit of seeing unfamiliar outsiders as crude, dangerous and hard to understand?"],
      ["不可靠的叙述者最值得警惕的地方，往往不是故意隐瞒事实，而是真诚地相信自己的判断就是事实。而洛克伍德这个不断误读荒原生活的外来者，又为耐莉的故事增加了一层过滤。",
       "What is most worth guarding against in an unreliable narrator is often not deliberate concealment but sincerely believing that her judgment is the fact. And Lockwood, an outsider who keeps misreading life on the moors, adds another layer of filtering to Nelly’s story."],
      ["我们所认识的希斯克利夫，始终是通过别人的语言被塑造出来的。一个身世不明、无法为自己提供完整历史的人，最终连自己的故事都主要由那些曾经接纳、排斥或畏惧他的人讲述。",
       "The Heathcliff we know is always shaped through other people’s language. A person of unknown origin who cannot supply a full history of himself ends up with even his own story told mainly by those who once took him in, shut him out or feared him."],
      ["这也使《呼啸山庄》的殖民隐喻更加耐人寻味：被视为异类的人不仅难以决定自己的社会身份，甚至可能失去解释自身经历的权力。",
       "This makes the colonial metaphor in *Wuthering Heights* more intriguing: a person seen as other not only struggles to decide his own social identity but may lose the power to interpret his own experience."],
      ["但真正让我觉得《呼啸山庄》超越了一部爱情悲剧的，是第二代人的故事。",
       "But what really makes me feel *Wuthering Heights* goes beyond a love tragedy is the story of the second generation."],
      ["年轻的凯瑟琳与哈里顿几乎继承了上一代所有的伤害。哈里顿本应是呼啸山庄的继承人，却被希斯克利夫故意剥夺教育，养成粗鲁、羞怯而识字能力有限的青年；年轻的凯瑟琳虽然受过良好教育，却被迫困在呼啸山庄，失去自由与财产。",
       "Young Catherine and Hareton inherit almost all the harm of the previous generation. Hareton should have been the heir to Wuthering Heights, but Heathcliff deliberately deprives him of education, raising him as a rough, shy young man who can barely read; young Catherine, though well educated, is forced to stay trapped at Wuthering Heights, losing her freedom and her property."],
      ["起初，年轻的凯瑟琳嘲笑哈里顿的无知，就像当年辛德雷羞辱希斯克利夫一样。阶级偏见甚至不需要恶意就能延续，一个曾经受到伤害的人，也可能不经意地使用同样的方式伤害别人。",
       "At first young Catherine mocks Hareton’s ignorance, just as Hindley once humiliated Heathcliff. Class prejudice can continue without even needing malice; a person who has been hurt may carelessly use the same means to hurt someone else."],
      ["但这一次，故事没有重演。",
       "But this time, the story does not repeat itself."],
      ["年轻的凯瑟琳开始教哈里顿读书，两个人从误解与敌意中逐渐建立起尊重。这个看似平凡的细节，在我看来比第一代所有激烈的爱情宣言都更加重要。希斯克利夫通过剥夺教育维持权力，而凯瑟琳恰恰通过分享知识，开始修复这种伤害。",
       "Young Catherine begins to teach Hareton to read, and from misunderstanding and hostility the two gradually build respect. This seemingly ordinary detail seems to me more important than all the fierce declarations of love of the first generation. Heathcliff maintains power by withholding education, and Catherine begins to repair that harm precisely by sharing knowledge."],
      ["第一代试图通过占有对方来证明爱情，第二代却通过帮助对方成长来建立爱情。前者在既有的阶级秩序中相互伤害，后者则尝试放下身份上的优越感，重新认识彼此。",
       "The first generation tries to prove love by possessing the other; the second builds love by helping the other grow. The former hurt each other within the existing class order; the latter try to put down their sense of superior status and get to know each other anew."],
      ["当然，这种和解也有其局限。年轻的凯瑟琳与哈里顿最终能够建立新的生活，部分原因仍然是他们拥有继承财产的资格。小说并没有真正消除阶级制度，也没有为所有像希斯克利夫一样的外来者提供出路。第二代的幸福，依然发生在英国乡村地主阶层的内部。",
       "Of course, this reconciliation has its limits. Young Catherine and Hareton are able to build a new life partly because they are still entitled to inherit property. The novel does not truly abolish the class system, nor does it offer a way out for all outsiders like Heathcliff. The second generation’s happiness still takes place inside England’s rural landowning class."],
      ["而耐莉对这种结局明显抱有好感，也让我们不得不怀疑：她所赞美的和解，是否同样因为它恢复了她一直推崇的家庭秩序？",
       "And Nelly’s evident approval of this ending makes us wonder: is the reconciliation she praises also praised because it restores the family order she has always upheld?"],
      ["不过，这并不抹去第二代关系中真实发生的改变。我尤其喜欢 Brontë 把这种转折写得如此不浪漫：不是狂风中的誓言，不是生死相随的执念，而是一个人耐心地教另一个人认字，另一个人愿意放下自尊，重新学习。",
       "Still, this does not erase the change that really happens in the second generation’s relationship. I especially like how unromantically Brontë writes this turn: not vows in a gale, not an obsession of following each other through life and death, but one person patiently teaching another to read, and the other willing to put down his pride and learn again."],
      ["《呼啸山庄》最深刻的地方，或许是它让阶级、种族化的排斥与爱情中的占有欲呈现出相似的逻辑：人们试图通过定义、控制和支配他人，来确认自己的身份与价值。",
       "The deepest thing about *Wuthering Heights* may be that it makes class, racialized exclusion and possessiveness in love show a similar logic: people try to confirm their own identity and worth by defining, controlling and dominating others."],
      ["希斯克利夫的悲剧不仅在于他遭受了排斥，更在于他最终无法想象一种不依靠支配他人来证明自身尊严的生活。而第二代的转折，则提供了一种有限却珍贵的可能：不再把过去承受的羞辱，作为继续伤害别人的理由。",
       "Heathcliff’s tragedy lies not only in being excluded but in finally being unable to imagine a life that does not prove one’s dignity by dominating others. The second generation’s turn offers a limited but precious possibility: no longer treating past humiliation as a reason to keep hurting others."],
      ["真正的反抗，不是夺回权力后将曾经受到的伤害施加给别人，而是在自己拥有伤害他人的能力时，选择不再重复。",
       "Real resistance is not regaining power and then inflicting on others the harm one once suffered, but choosing not to repeat it when one has the ability to hurt others."],
      ["有些悲剧无法挽回，但它们未必需要被下一代继承。只是当我们合上小说时，仍然需要记得：这个关于仇恨终结的故事，最终也是由一个并不完全可靠的人讲述给我们的。",
       "Some tragedies cannot be undone, but they need not be inherited by the next generation. Only, when we close the novel, we should still remember that this story of hatred coming to an end was also told to us by someone not entirely reliable."]
    ]
  },
  {
    "date": "2023-10-23",
    "title": "A Gift Without a Way Out",
    "slug": "a-gift-without-a-way-out",
    "category": "Novel",
    "book": {
      "cover": "my_brilliant_friend.jpg",
      "title": "My Brilliant Friend",
      "author": "Elena Ferrante",
      "language": "English",
      "country": "Italy",
      "original": "Italian",
      "lines": [
        "Novel · Translated by Ann Goldstein, 2012",
        "Book one of the Neapolitan Novels: two girls grow up in a poor neighborhood of postwar Naples, and school sends them in different directions."
      ]
    },
    "place": "于加州库比蒂诺\nCupertino, CA",
    "languages": ["Chinese", "English"],
    "prose": [
      [
        "我喜欢 Ferrante 从战后那不勒斯一个贫穷街区写起。鞋匠、杂货商、放高利贷的人、楼梯间的争吵、父亲对孩子的殴打，构成了莉拉和莱农最早认识的世界。她们甚至住在那不勒斯，却从未真正见过大海。城市就在眼前，生活的边界却窄得令人窒息。",
        "I like that Ferrante begins in a poor neighborhood of postwar Naples. The shoemaker, the grocer, the moneylender, the quarrels on the stairwell, fathers beating their children: these make up the world Lila and Lenù first come to know. They live in Naples yet have never really seen the sea. The city is right before them, but the boundaries of their lives are suffocatingly narrow."
      ],
      [
        "理解这本书，需要理解意大利统一以来长期存在的“南方问题”（Questione Meridionale）。19世纪的国家统一，并没有消除南北之间的经济差距。到了二战之后，北方逐渐成为工业化的中心，南方许多家庭仍然依靠小手工业、零售、临时劳动和地方人情网络维持生活。所谓现代意大利，对不同阶级的人来说，从来不是同一个国家。",
        "To understand this book, one needs to understand the “Southern Question” (Questione Meridionale) that has lingered since Italian unification. Unification in the nineteenth century did not erase the economic gap between north and south. After the Second World War, the north gradually became the center of industry, while many southern families still lived on small crafts, retail, casual labor and local networks of obligation. So-called modern Italy was never the same country for people of different classes."
      ],
      [
        "这也解释了为什么两个女孩能否继续上学，会成为如此重大的命运分岔。莉拉拥有惊人的天赋，却必须回到父亲的鞋店；莱农虽然未必比她聪明，却因为家庭的妥协和老师的支持，得以继续接受教育。她们之间的差距，不是由智力决定的，而是由家庭能否承担教育成本、是否愿意让女儿继续读书决定的。",
        "This also explains why whether the two girls can keep going to school becomes such a fork in their fates. Lila has astonishing talent, yet must return to her father’s shoe shop; Lenù, though not necessarily cleverer, is able to continue her education thanks to her family’s compromise and her teacher’s support. The gap between them is not decided by intelligence but by whether a family can bear the cost of schooling and is willing to let a daughter keep reading."
      ],
      [
        "我尤其在意书中语言与阶级的关系。那不勒斯方言是她们争吵、恐惧、表达愤怒的语言，而学校教授的标准意大利语、拉丁语和古典文学，则是进入另一个社会阶层的通行证。莱农学会的不仅是知识，还有如何说话、如何克制自己的身体，以及如何让别人听不出自己的出身。",
        "What I notice most is the relationship between language and class in the book. The Neapolitan dialect is the language in which they quarrel, fear and vent anger, while the standard Italian, Latin and classical literature taught at school are passes into another social class. What Lenù learns is not only knowledge but how to speak, how to restrain her body, and how to keep others from hearing where she comes from."
      ],
      [
        "《我的天才女友》最残酷的地方，是它让我们看到，天赋并不天然属于能够实现它的人。莉拉被迫离开学校，莱农却终其一生都在追赶她。她们的友谊因此始终混杂着爱、嫉妒、羞耻与竞争。",
        "The cruelest thing about *My Brilliant Friend* is that it shows us talent does not naturally belong to the person who gets to realize it. Lila is forced to leave school, while Lenù spends her whole life chasing her. Their friendship is therefore always a mixture of love, envy, shame and rivalry."
      ],
      [
        "更令我难过的是，莱农后来越是成功，就越需要与童年的自己保持距离。教育让她有机会逃离贫穷，却也教会她把自己的口音、家庭和过去视为需要纠正的缺陷。",
        "What saddens me more is that the more successful Lenù becomes, the more she needs to keep her distance from her childhood self. Education gives her a chance to escape poverty, yet also teaches her to see her accent, her family and her past as flaws to be corrected."
      ],
      [
        "一个人向上流动的过程，有时也是她逐渐学会轻视自己来处的过程。而那个没有机会离开的天才，恰恰成了她一生无法摆脱的另一种可能。",
        "A person’s upward mobility is sometimes also the process of slowly learning to look down on where she came from. And the genius who never had the chance to leave becomes the other possibility Lenù can never shake off."
      ]
    ]
  },
  {
    "date": "2023-10-31",
    "title": "The Price of a New Name",
    "slug": "the-price-of-a-new-name",
    "category": "Novel",
    "book": {
      "cover": "story_of_a_new_name.jpg",
      "title": "The Story of a New Name",
      "author": "Elena Ferrante",
      "language": "English",
      "country": "Italy",
      "original": "Italian",
      "lines": [
        "Novel · Translated by Ann Goldstein, 2013",
        "Book two of the Neapolitan Novels: Lila marries into money, Lenù goes to university in Pisa, and each takes on a new social identity."
      ]
    },
    "place": "于葡萄牙里斯本\nLisbon, Portugal",
    "languages": ["Chinese", "English"],
    "prose": [
      [
        "到了第二部，意大利正在经历战后的经济奇迹。汽车、电视、家用电器和新的消费方式，逐渐改变人们对体面生活的想象。在那不勒斯的街区里，这种变化表现为鞋店的生意、崭新的汽车、昂贵的衣服，以及通过婚姻和商业关系积累财富的机会。",
        "In the second book, Italy is going through its postwar economic miracle. Cars, television, household appliances and new ways of consuming gradually change people’s idea of a respectable life. In the Naples neighborhood this shows up as the shoe business, brand-new cars, expensive clothes, and chances to accumulate wealth through marriage and commercial ties."
      ],
      [
        "莉拉嫁给斯特凡诺，似乎终于摆脱了鞋匠女儿的身份。然而婚礼上的背叛、丈夫的暴力，以及她亲手设计的鞋子被当成商品和家族生意的资本，让她很快发现，物质上的富裕并不意味着个人的自由。",
        "Lila marries Stefano and seems at last to shed her identity as a shoemaker’s daughter. But the betrayal at the wedding, her husband’s violence, and the way the shoes she designed herself are treated as merchandise and capital for the family business quickly show her that material wealth does not mean personal freedom."
      ],
      [
        "我觉得这里有一个非常尖锐的历史讽刺：意大利正在迅速现代化，但家庭内部的权力关系却远远没有跟上。一个女人可以穿上时髦的衣服、住进装修漂亮的公寓，却仍然被视为丈夫的附属品。消费社会为女性提供了新的形象，却未必赋予她们新的权利。",
        "I find a very sharp historical irony here: Italy is modernizing fast, but power relations inside the family are far from keeping up. A woman can wear fashionable clothes and live in a handsomely furnished apartment and still be treated as her husband’s appendage. The consumer society offers women new images, but not necessarily new rights."
      ],
      [
        "与此同时，莱农进入比萨的高等师范学校（Scuola Normale Superiore）。比萨在这里不仅是一座大学城，更代表着意大利中北部的精英教育体系。莱农第一次真正进入了一个由书籍、学术讨论、政治思想和文化修养构成的世界。",
        "Meanwhile, Lenù enters the Scuola Normale Superiore in Pisa. Pisa here is not only a university town but stands for the elite educational system of central and northern Italy. For the first time Lenù truly enters a world made of books, academic discussion, political ideas and cultural refinement."
      ],
      [
        "但她很快发现，读懂拉丁文和古典文学，并不意味着能够自然地融入知识阶层。她的南方口音、过分书面化的意大利语，以及面对富裕家庭时的拘谨，都不断提醒她：教育可以传授知识，却无法立即给予一个人从小在优越环境中养成的从容。",
        "But she soon finds that being able to read Latin and classical literature does not mean fitting naturally into the intellectual class. Her southern accent, her overly bookish Italian, and her stiffness in front of wealthy families keep reminding her: education can teach knowledge, but cannot instantly give the ease a person develops growing up in privileged surroundings."
      ],
      [
        "这让我想到，阶级差异最顽固的部分，往往不是财富，而是那些不需要被明确教授的生活习惯。有人从小就在餐桌上讨论文学与政治，有人则需要花费多年时间，才能学会在同样的场合不感到羞耻。",
        "This makes me think that the most stubborn part of class difference is often not wealth but the habits of life that never need to be explicitly taught. Some people discuss literature and politics at the dinner table from childhood; others need years to learn not to feel ashamed in the same setting."
      ],
      [
        "“新名字”因此具有双重讽刺。莉拉通过婚姻获得丈夫的姓氏，莱农则通过教育与写作逐渐建立自己的名字。一个进入商业家庭，一个进入文化精英阶层，但两个人都在努力使用新的社会身份，掩盖自己无法彻底摆脱的过去。",
        "The “new name” is therefore doubly ironic. Lila acquires her husband’s surname through marriage, while Lenù gradually builds a name of her own through education and writing. One enters a business family, the other the cultural elite, but both use their new social identities to cover a past they cannot fully shake off."
      ],
      [
        "我觉得 Ferrante 真正质疑的，不是社会流动是否可能，而是为什么一个人必须先改变自己的语言、举止甚至记忆，才能被另一个阶层承认。",
        "What I think Ferrante really questions is not whether social mobility is possible, but why a person must first change her language, manners and even memories before being accepted by another class."
      ]
    ]
  },
  {
    "date": "2023-11-04",
    "title": "Leaving Is Not Liberation",
    "slug": "leaving-is-not-liberation",
    "category": "Novel",
    "book": {
      "cover": "those_who_leave.jpg",
      "title": "Those Who Leave and Those Who Stay",
      "author": "Elena Ferrante",
      "language": "English",
      "country": "Italy",
      "original": "Italian",
      "lines": [
        "Novel · Translated by Ann Goldstein, 2014",
        "Book three of the Neapolitan Novels: through the upheavals of the late 1960s and 1970s, Lenù writes and raises children while Lila works in a sausage factory."
      ]
    },
    "place": "于意大利比萨\nPisa, Italy",
    "languages": ["Chinese", "English"],
    "prose": [
      [
        "到了第三部，Ferrante 将两个女人的命运放进了1960年代末至1970年代意大利激烈的社会变革之中。大学里的学生讨论马克思主义、资本主义和革命，工厂里的工人组织罢工，女性开始公开质疑婚姻、家庭和生育制度。整个国家似乎都在重新讨论什么是自由、平等与解放。",
        "In the third book, Ferrante places the two women’s fates inside the intense social change of Italy from the late 1960s through the 1970s. Students at universities discuss Marxism, capitalism and revolution, workers in factories organize strikes, and women begin to question marriage, family and motherhood in public. The whole country seems to be rediscussing what freedom, equality and liberation mean."
      ],
      [
        "但我最喜欢 Ferrante 的地方，是她始终让宏大的政治理想与琐碎的日常生活发生碰撞。",
        "But what I like most about Ferrante is that she keeps making grand political ideals collide with trivial everyday life."
      ],
      [
        "莱农已经进入知识阶层，嫁给了出身优越的彼得罗，能够在大学、出版社和知识分子的聚会中讨论社会革命。然而回到家，她仍然要照顾孩子、处理家务，并在丈夫的学术事业之外争取自己的写作时间。那些在公共场合谈论解放的男人，并不一定愿意在私人生活中放弃自己的特权。",
        "Lenù has entered the intellectual class and married Pietro, who comes from a privileged family, and she can discuss social revolution at universities, publishing houses and gatherings of intellectuals. Yet back home she still has to look after the children, handle the housework, and fight for time to write beside her husband’s academic career. The men who talk about liberation in public are not necessarily willing to give up their privileges in private life."
      ],
      [
        "与此同时，莉拉在肉类加工厂工作。工厂里的恶劣环境、对女性身体的羞辱、低廉的工资与管理者的权力，让她直接经历了知识分子在书本中讨论的阶级剥削。",
        "Meanwhile, Lila works in a meat-processing factory. The terrible conditions, the humiliation of women’s bodies, the low wages and the power of the managers let her experience firsthand the class exploitation that intellectuals discuss in books."
      ],
      [
        "这形成了一种令人不安的对照：莱农能够解释压迫，却未必能够摆脱它；莉拉每天承受压迫，却不需要通过理论才能认识它。",
        "This makes an unsettling contrast: Lenù can explain oppression but cannot necessarily escape it; Lila endures oppression every day and needs no theory to recognize it."
      ],
      [
        "这一时期的意大利尤其值得注意。1968年的学生运动和1969年的“火热之秋”让工人、学生与激进左翼力量走上街头，但阶级革命与女性解放并不天然一致。一个男人可以反对资本家剥削工人，却仍然认为妻子应该负责做饭、育儿和维持家庭。",
        "Italy in this period is especially worth noting. The student movement of 1968 and the “Hot Autumn” of 1969 brought workers, students and radical left forces into the streets, but class revolution and women’s liberation are not naturally aligned. A man can oppose capitalists exploiting workers and still believe his wife should be responsible for cooking, child-rearing and keeping the household going."
      ],
      [
        "我觉得 Ferrante 在这里提出了比阶级流动更尖锐的问题：当革命只改变公共领域的权力关系，却不触及家庭内部的劳动分配，它究竟解放了谁？",
        "I think Ferrante raises a sharper question here than class mobility: when a revolution changes only power relations in the public sphere and leaves the division of labor inside the home untouched, whom has it actually liberated?"
      ],
      [
        "而莱农与莉拉的分歧，也因此变得更加复杂。莱农通过教育离开了那不勒斯，却逐渐发现知识阶层同样存在虚荣、排斥和性别等级；莉拉留在街区，却比许多自称进步的人更清楚权力如何在日常生活中运作。",
        "The divergence between Lenù and Lila becomes more complicated as a result. Lenù left Naples through education but gradually finds that the intellectual class has its own vanity, exclusion and gender hierarchy; Lila stayed in the neighborhood yet understands how power works in daily life better than many who call themselves progressive."
      ],
      [
        "《离开的，留下的》最深刻的讽刺，是地理上的离开并不等于阶级上的解放，思想上的激进也不等于生活中的平等。",
        "The deepest irony of *Those Who Leave and Those Who Stay* is that leaving a place geographically is not liberation from class, and being radical in thought is not equality in life."
      ],
      [
        "我们往往以为，接受教育、拥有职业、进入更高的社会阶层，就意味着获得了自由。但 Ferrante 让人看到，真正难以摆脱的，往往是那些已经被我们内化的价值判断：对成功的渴望、对贫穷的羞耻、对男性认可的依赖，以及对失败的恐惧。",
        "We often assume that getting an education, having a career and entering a higher social class means gaining freedom. But Ferrante shows that what is truly hard to shake off are the value judgments we have already internalized: the craving for success, the shame of poverty, the dependence on men’s approval, and the fear of failure."
      ],
      [
        "离开那不勒斯的莱农，始终需要莉拉来确认自己是谁；留在那不勒斯的莉拉，却不断揭穿莱农试图相信的那个更文明、更自由的世界。",
        "Lenù, who left Naples, always needs Lila to confirm who she is; Lila, who stayed in Naples, keeps exposing the more civilized, freer world Lenù tries to believe in."
      ]
    ]
  },
  {
    "date": "2023-11-17",
    "title": "Who Gets to Tell the Story",
    "slug": "who-gets-to-tell-the-story",
    "category": "Novel",
    "book": {
      "cover": "story_of_the_lost_child.jpg",
      "title": "The Story of the Lost Child",
      "author": "Elena Ferrante",
      "language": "English",
      "country": "Italy",
      "original": "Italian",
      "lines": [
        "Novel · Translated by Ann Goldstein, 2015",
        "Book four and the last of the Neapolitan Novels: Lenù returns to Naples, the 1980 earthquake strikes, and a child disappears."
      ]
    },
    "place": "于意大利科莫\nComo, Italy",
    "languages": ["Chinese", "English"],
    "prose": [
      [
        "第四部里，莱农重新回到那不勒斯。她已经成为作家，见识过比萨、佛罗伦萨和意大利知识阶层的生活，却最终再次走进童年熟悉的街区。这里依然有索拉拉家族的权力、街坊之间的流言、商业利益与暴力。几十年过去，城市的外貌发生了变化，但许多支配人们生活的关系并没有真正消失。",
        "In the fourth book, Lenù returns to Naples. She has become a writer and has seen life in Pisa, Florence and among Italy’s intellectuals, yet she ends up walking once more into the neighborhood of her childhood. The power of the Solara family, gossip among neighbors, commercial interests and violence are all still here. Decades have passed and the face of the city has changed, but many of the relationships that govern people’s lives have not really gone away."
      ],
      [
        "1980年的大地震是我认为整部四部曲最重要的历史隐喻之一。房屋摇晃、墙壁开裂、熟悉的街道突然失去稳定，莉拉一直以来感受到的“边界消失”，在这一刻获得了近乎物质性的呈现。",
        "The 1980 earthquake is, I think, one of the most important historical metaphors in the whole tetralogy. Houses sway, walls crack, familiar streets suddenly lose their stability, and the “dissolving of boundaries” that Lila has always felt is given an almost physical form."
      ],
      [
        "这场灾难让我想到那不勒斯自身的历史：一座拥有辉煌古典遗产、丰富文化与漫长城市历史的地方，却长期承受着经济不平等、脆弱的公共治理与地方犯罪网络的影响。现代化并没有彻底消除旧有的权力结构，有时反而让它们以新的商业和政治形式延续。",
        "The disaster makes me think of Naples’s own history: a place with a splendid classical heritage, a rich culture and a long urban history, yet long burdened by economic inequality, fragile public governance and local criminal networks. Modernization did not wholly dissolve the old structures of power; sometimes it let them continue in new commercial and political forms."
      ],
      [
        "我尤其喜欢 Ferrante 没有把那不勒斯写成单纯落后的南方城市。它充满活力、语言、创造力和亲密的人际关系，同时也充满控制、暴力与无法逃脱的社会义务。人们依靠街区生存，也可能被街区吞没。",
        "I especially like that Ferrante does not write Naples as a merely backward southern city. It is full of vitality, language, creativity and intimate human ties, and also full of control, violence and social obligations one cannot escape. People survive by relying on the neighborhood, and may also be swallowed by it."
      ],
      [
        "蒂娜的失踪，将这种不安全感推向了最残酷的极端。一个孩子在熟悉的街区里突然消失，没有确定的解释，也没有能够真正结束的悲伤。莉拉曾经凭借聪明才智反抗家庭、婚姻和阶级的限制，却最终面对一种连她的智力都无法理解和控制的失去。",
        "Tina’s disappearance pushes this insecurity to its cruelest extreme. A child vanishes suddenly in a familiar neighborhood, with no definite explanation and no grief that can truly end. Lila once used her intelligence to resist the limits of family, marriage and class, but finally faces a loss that even her intellect cannot understand or control."
      ],
      [
        "我觉得“失踪的孩子”不仅指蒂娜，也指战后意大利曾经许诺却没有完全实现的未来。那个相信教育能够改变命运、经济增长能够消除贫困、政治运动能够创造平等社会的时代，最终留下了许多无法兑现的承诺。",
        "I think the “lost child” refers not only to Tina but also to the future postwar Italy once promised and did not fully deliver. That era, which believed education could change fate, economic growth could eliminate poverty and political movements could create an equal society, left behind many promises that could not be kept."
      ],
      [
        "而莱农的写作，使这种失去又多了一层复杂性。她通过讲述那不勒斯、莉拉和自己的生活获得文学上的成功，但莉拉始终抗拒被别人记录和定义。莱农能够离开街区，正是因为她学会了将自己的经历转化为文字；莉拉却越来越怀疑，文字究竟能否真正容纳一个人的生活。",
        "Lenù’s writing adds another layer of complexity to this loss. She achieves literary success by telling the story of Naples, Lila and her own life, but Lila always resists being recorded and defined by someone else. Lenù was able to leave the neighborhood precisely because she learned to turn her experience into words; Lila increasingly doubts whether words can truly hold a person’s life."
      ],
      [
        "小说最后，童年玩偶的重新出现，让我重新审视整部四部曲：我们读到的一切，始终只是莱农讲述的莉拉。那个被称为天才的女人，是否从来没有真正获得过属于自己的声音？",
        "At the end of the novel, the reappearance of the childhood dolls made me look again at the whole tetralogy: everything we read has always been Lila as told by Lenù. Has the woman called a genius never truly had a voice of her own?"
      ],
      [
        "莉拉最后的消失，或许不是失败，而是她对莱农、对读者，甚至对文学本身最后一次拒绝：你可以讲述我的故事，但你永远不能完全拥有我。",
        "Lila’s final disappearance may not be a failure but her last refusal, of Lenù, of the reader, even of literature itself: you may tell my story, but you can never fully own me."
      ],
      [
        "而这也让我觉得，Ferrante 写的不只是两个女人的友谊，更是历史如何被保存的问题。能够离开、接受教育、掌握语言的人，最终获得了讲述过去的权力；那些留在原地的人，即使拥有同样丰富的生命，也可能只能作为别人的故事被记住。",
        "This also makes me feel that Ferrante is writing not only about the friendship of two women but about how history gets preserved. Those who could leave, get educated and master language end up with the power to tell the past; those who stayed, even with equally rich lives, may only be remembered as someone else’s story."
      ],
      [
        "最令人不安的不是一个人最终消失，而是当她消失以后，我们才发现，自己对她一生的理解，始终来自另一个人的叙述。",
        "What is most unsettling is not that a person finally disappears, but that after she is gone we realize our understanding of her whole life has always come from another person’s narration."
      ],
      [
        "四部曲总评：一个国家的现代化，与两个女人无法完成的逃离",
        "On the whole tetralogy: a nation’s modernization, and the escape two women could not complete",
        "h"
      ],
      [
        "读完 Elena Ferrante 的“那不勒斯四部曲”，我越来越觉得，这并不只是一个关于女性友谊的故事，而是一部借由两个女人的生命，写下的战后意大利社会史。",
        "Having finished Elena Ferrante’s Neapolitan Novels, I increasingly feel this is not only a story about female friendship but a social history of postwar Italy written through the lives of two women."
      ],
      [
        "四本书几乎对应了意大利现代化的四个阶段：《我的天才女友》是战后贫困与阶级分化，《新名字的故事》是经济奇迹与消费社会，《离开的，留下的》是政治激进化与女性解放，《失踪的孩子》则是现代化承诺逐渐破裂之后的失落。",
        "The four books almost correspond to four stages of Italy’s modernization: *My Brilliant Friend* is postwar poverty and class division, *The Story of a New Name* is the economic miracle and consumer society, *Those Who Leave and Those Who Stay* is political radicalization and women’s liberation, and *The Story of the Lost Child* is the loss that follows once the promises of modernization gradually break."
      ],
      [
        "那不勒斯与比萨之间的距离，不仅是南方与中北部之间的地理距离，也是两种社会经验之间的距离。莱农通过教育进入精英阶层，学会标准意大利语、古典文学与知识分子的生活方式；莉拉留在那不勒斯，依靠自己的聪明、劳动和判断力，在地方社会的权力关系中艰难生存。",
        "The distance between Naples and Pisa is not only the geographic distance between south and center-north but the distance between two kinds of social experience. Lenù enters the elite through education and learns standard Italian, classical literature and the intellectual way of life; Lila stays in Naples and, relying on her intelligence, labor and judgment, survives with difficulty within the power relations of local society."
      ],
      [
        "但我最欣赏 Ferrante 的，是她拒绝把这两种人生写成成功与失败的对照。",
        "But what I admire most in Ferrante is that she refuses to write these two lives as a contrast between success and failure."
      ],
      [
        "莱农获得了社会认可，却不断怀疑自己的才华；莉拉没有得到同样的教育机会，却始终拥有令莱农不安的洞察力。一个通过写作获得了讲述世界的权力，另一个则始终拒绝被世界轻易解释。",
        "Lenù gains social recognition yet keeps doubting her talent; Lila never gets the same educational opportunity yet always has an insight that unsettles Lenù. One gains through writing the power to tell the world, the other always refuses to be easily explained by it."
      ],
      [
        "如果说意大利的现代化承诺每个人都可以通过教育、劳动与个人努力改变命运，那么 Ferrante 恰恰写出了这个承诺背后最难面对的事实：社会流动可以改变一个人的位置，却未必能改变决定谁有资格流动的规则。",
        "If Italy’s modernization promised that everyone could change their fate through education, labor and personal effort, Ferrante writes the hardest fact behind that promise: social mobility can change a person’s position, but not necessarily the rules that decide who is allowed to move."
      ],
      [
        "更让我着迷的是，她们的友谊从来不是纯粹的支持与陪伴，而是一种持续半生的相互比较。莱农需要莉拉，因为莉拉代表着她未曾实现的另一种自己；莉拉也需要莱农，因为莱农活出了她曾经被剥夺的某种可能。",
        "What fascinates me more is that their friendship is never pure support and companionship but a mutual comparison lasting half a lifetime. Lenù needs Lila because Lila represents the other self she never realized; Lila needs Lenù because Lenù lives out a possibility she was once denied."
      ],
      [
        "她们既彼此成就，也彼此伤害。既无法真正生活在一起，也无法彻底从对方的人生中离开。",
        "They make each other and hurt each other. They cannot truly live together, nor can they ever fully leave each other’s lives."
      ],
      [
        "四部曲最深刻的地方，或许是让我们意识到：一个人的命运从来不只是个人的故事。我们以为自己是在选择人生，实际上也在不断回应家庭、阶级、语言、性别与时代早已替我们划定的边界。",
        "The deepest thing about the tetralogy may be that it makes us realize one person’s fate is never only a personal story. We think we are choosing our lives, but we are also constantly responding to boundaries that family, class, language, gender and era have already drawn for us."
      ],
      [
        "而所谓“天才女友”，也许正是那个始终提醒我们：在成为今天的自己之前，我们原本还可能成为谁的人。",
        "And the so-called “brilliant friend” may be the one who keeps reminding us who else we might have become before we became who we are today."
      ]
    ]
  },
  {
    "date": "2024-11-18",
    "title": "Where to Stay, When to Leave",
    "slug": "where-to-stay-when-to-leave",
    "category": "Memoir",
    "book": {
      "cover": "real_estate.jpg",
      "title": "自己的房子 (Real Estate)",
      "author": "德博拉·利维 Deborah Levy",
      "language": "Chinese",
      "country": "United Kingdom",
      "original": "English",
      "lines": [
        "Memoir · Chinese translation",
        "Levy travels between London, Paris and Berlin, studying other people’s houses and imagining one of her own."
      ]
    },
    "place": "于加州利弗莫尔\nLivermore, CA",
    "languages": ["Chinese", "English"],
    "prose": [
      [
        "到了《自己的房子》，德博拉·利维已经不再只是那个骑着电动自行车、在朋友花园小屋里写作的离婚女人。她开始在伦敦、巴黎、柏林之间旅行，住进不同的房间，观察别人的房子，也不断想象一栋属于自己的房子。",
        "By *Real Estate*, Deborah Levy is no longer only the divorced woman who rides an electric bike and writes in a friend’s garden shed. She begins to travel between London, Paris and Berlin, staying in different rooms, observing other people’s houses, and constantly imagining a house of her own."
      ],
      [
        "我尤其喜欢她对房屋细节的执着：桌子、窗户、光线、可以安静写作的房间，以及不必随时回应别人需求的日常。这些看似普通的东西，对一个长期围绕家庭和孩子安排生活的女人来说，却曾经是难得的奢侈。",
        "I especially like her devotion to the details of a house: the table, the windows, the light, a room where she can write in quiet, and days in which she need not answer other people’s needs at every moment. These seemingly ordinary things were once a rare luxury for a woman who had long arranged her life around family and children."
      ],
      [
        "这让我想到 Virginia Woolf 的《一间自己的房间》。但 Levy 想要的似乎更进一步：不仅是一间可以关上门写作的房间，而是一整个由自己决定如何生活的空间。",
        "This reminds me of Virginia Woolf’s *A Room of One’s Own*. But Levy seems to want to go a step further: not only a room with a door she can close to write, but an entire space in which she decides how to live."
      ],
      [
        "“自己的房子”最耐人寻味的地方，在于她真正寻找的并不完全是一栋房产。她已经拥有了比年轻时更多的自由，却依然会想象另一种生活、另一处住所、另一个自己。房子既是具体的物质愿望，也是她始终无法彻底安顿下来的内心。",
        "The most intriguing thing about “a house of one’s own” is that what she is looking for is not entirely a piece of property. She already has more freedom than when she was young, yet she still imagines another life, another dwelling, another self. The house is both a concrete material wish and the inner self that can never quite settle."
      ],
      [
        "我喜欢她没有把中年之后的独立写成故事的终点。即使摆脱了婚姻的束缚，拥有了写作事业和自己的生活，一个人仍然可能渴望别处。",
        "I like that she does not write independence after middle age as the end of the story. Even after escaping the constraints of marriage and having a writing career and a life of her own, a person may still long for somewhere else."
      ],
      [
        "或许拥有自己的房子，并不意味着终于找到归宿，而是终于可以决定，哪里值得停留，什么时候应该离开。",
        "Perhaps having a house of one’s own does not mean finally finding a home, but finally being able to decide where is worth staying and when it is time to leave."
      ],
      [
        "这三本书连起来读，形成了一条很有意思的线索：《我不想知道的事》是承认，《生活的代价》是离开，《自己的房子》则是重新想象自己究竟想过怎样的生活。从不愿面对的真相，到为自由付出的代价，再到对归属的重新定义，Levy 写的始终不是如何成为一个独立的女人，而是一个女人如何在半生之后，慢慢把自己的人生重新交还给自己。",
        "Read together, these three books form an interesting thread: *Things I Don’t Want to Know* is admitting, *The Cost of Living* is leaving, and *Real Estate* is reimagining what kind of life one actually wants to live. From the truth one refuses to face, to the price paid for freedom, to a new definition of belonging, what Levy writes about is never how to become an independent woman, but how a woman, half a lifetime later, slowly hands her life back to herself."
      ]
    ]
  },
  {
    "date": "2024-11-09",
    "title": "Paying for the Life You Choose",
    "slug": "paying-for-the-life-you-choose",
    "category": "Memoir",
    "book": {
      "cover": "cost_of_living.jpg",
      "title": "生活的代价 (The Cost of Living)",
      "author": "德博拉·利维 Deborah Levy",
      "language": "Chinese",
      "country": "United Kingdom",
      "original": "English",
      "lines": [
        "Memoir · Chinese translation",
        "After her marriage ends, Levy moves into a rented London flat with her two daughters and learns to live on her own."
      ]
    },
    "place": "于加州利弗莫尔\nLivermore, CA",
    "languages": ["Chinese", "English"],
    "prose": [
      [
        "婚姻结束后，德博拉·利维带着两个女儿搬进伦敦一间租来的公寓。她骑着电动自行车穿过城市，在朋友的花园小屋里写作，一边处理账单、家务和孩子的生活，一边重新学习如何独自生活。",
        "After her marriage ends, Deborah Levy moves with her two daughters into a rented flat in London. She rides an electric bike across the city and writes in a friend’s garden shed, dealing with bills, housework and her children’s lives while learning again how to live alone."
      ],
      [
        "我喜欢她写离婚时没有太多控诉，也没有把自由描绘成一种轻盈的解脱。离开一段婚姻，意味着失去熟悉的房子、经济上的安全感，以及那个曾经有人共同承担日常琐事的生活。自由并不是推开门就能获得的东西，它需要付房租、养育孩子，需要在疲惫中继续工作。",
        "I like that when she writes about divorce there is little accusation, and freedom is not painted as a light-footed release. Leaving a marriage means losing a familiar house, financial security, and a life in which someone once shared the daily chores. Freedom is not something you get by pushing open a door; it requires paying rent, raising children, and going on working through exhaustion."
      ],
      [
        "书名《生活的代价》最有意思的地方，是自由有价格，安稳同样有价格。留在婚姻里，她付出的是自己的时间、欲望与写作空间；离开婚姻后，她必须承担经济压力、孤独和不确定性。无论选择哪一种生活，都不可能毫无损失。",
        "The most interesting thing about the title *The Cost of Living* is that freedom has a price, and so does security. Staying in the marriage, she paid with her time, her desire and her space to write; after leaving, she had to bear financial pressure, loneliness and uncertainty. Whichever life one chooses, it cannot come without loss."
      ],
      [
        "她并没有证明离开一定比留下更幸福，而是终于愿意为自己选择的生活付账。",
        "She does not prove that leaving is necessarily happier than staying; she is finally willing to pay for the life she has chosen."
      ],
      [
        "真正昂贵的或许不是重新开始，而是多年以后才发现，自己一直在为一种并不想要的生活付出代价。",
        "What is truly expensive may not be starting over, but discovering, years later, that you have been paying all along for a life you never wanted."
      ]
    ]
  },
  {
    "date": "2024-11-02",
    "title": "Pretending Not to Know",
    "slug": "pretending-not-to-know",
    "category": "Memoir",
    "book": {
      "cover": "what_i_dont_want_to_know.jpg",
      "title": "我不想知道的事 (Things I Don’t Want to Know)",
      "author": "德博拉·利维 Deborah Levy",
      "language": "Chinese",
      "country": "United Kingdom",
      "original": "English",
      "lines": [
        "Memoir · Chinese translation",
        "Levy begins with a breakdown on a Mallorcan hillside and works back through a South African childhood, a father jailed for opposing apartheid, and the weariness of marriage and motherhood."
      ]
    },
    "place": "于加州利弗莫尔\nLivermore, CA",
    "languages": ["Chinese", "English"],
    "prose": [
      [
        "德博拉·利维从马略卡岛的一次崩溃写起。一个中年女人独自旅行，在异乡的山坡上骑车，突然无法控制地哭泣。她没有急着解释眼泪，而是让记忆慢慢浮现：南非的童年、因反种族隔离而入狱的父亲、迁往英国后的生活，以及婚姻和母职带来的疲惫。",
        "Deborah Levy begins with a breakdown on Mallorca. A middle-aged woman travels alone, cycling on a hillside in a foreign place, and suddenly cannot stop crying. She does not rush to explain the tears; instead she lets memory surface slowly: a childhood in South Africa, a father jailed for opposing apartheid, life after the move to England, and the exhaustion that comes with marriage and motherhood."
      ],
      [
        "她借奥威尔关于写作动机的文章，重新思考一个女人为什么要写作。奥威尔可以坦然谈论野心、政治与文学，而 Levy 必须先面对更琐碎的现实：孩子、家务、婚姻，以及一个女人想拥有自己的时间时，随之而来的愧疚。",
        "Drawing on Orwell’s essay on why he writes, she rethinks why a woman writes at all. Orwell can talk openly about ambition, politics and literature, while Levy must first face more mundane realities: children, housework, marriage, and the guilt that follows when a woman wants time of her own."
      ],
      [
        "“我不想知道的事”，最微妙的地方在于，她并非真的不知道，而是不愿承认自己早已知道。她知道婚姻中的妥协并不总是出于爱，知道照顾他人有时意味着不断推迟自己的生活，也知道那些看似自愿的牺牲，早已成为别人对她的理所当然。承认这些，便意味着必须重新审视自己花费半生建立起来的生活。",
        "The subtlest thing about “things I don’t want to know” is that she doesn’t truly not know; she is unwilling to admit that she has known all along. She knows the compromises in a marriage are not always made out of love, that caring for others sometimes means endlessly postponing one’s own life, and that sacrifices that seem voluntary have long since become what others take for granted from her. To admit this is to re-examine a life she spent half her years building."
      ],
      [
        "我喜欢她没有把这种醒悟写成一场痛快的反抗。人往往不是因为看不清现实而继续生活，而是因为看得太清楚，才需要暂时装作不知道。",
        "I like that she does not write this awakening as a cathartic rebellion. People often go on living not because they cannot see reality, but because they see it too clearly and need, for a while, to pretend they don’t."
      ],
      [
        "有些真相之所以令人抗拒，不是因为它们难以理解，而是因为一旦承认，就再也无法心安理得地回到从前。",
        "Some truths are resisted not because they are hard to understand, but because once admitted, we can never go back to how things were with an easy conscience."
      ]
    ]
  },
  {
    "date": "2025-09-11",
    "title": "Heirs to the California Dream",
    "category": "Novel",
    "book": {
      "cover": "run_river.jpg",
      "title": "Run River",
      "author": "Joan Didion",
      "language": "English",
      "country": "United States",
      "original": "English",
      "lines": [
        "Novel · English edition",
        "Didion’s novel of an old landowning family in the Sacramento Valley, and of a California that is passing away."
      ]
    },
    "place": "于加州伯克利\nBerkeley, CA",
    "languages": [
      "Chinese",
      "English"
    ],
    "prose": [
      [
        "Didion 的加州从来不只是一个地理空间，而是一部不断更新的美国精英自我神话史。",
        "Didion’s California was never only a geographic space, but a constantly updated history of the self-mythology of America’s elite."
      ],
      [
        "在《Run River》中，萨克拉门托河谷的旧式地主家族将土地、血统与家族记忆视为自身优越性的证明。他们怀念一个逐渐消失的加州，却很少意识到，所谓美好的过去，不过是自身特权尚未受到挑战的时代。Didion 所描绘的，不仅是一个家族的衰败，更是一个阶级如何将自身的历史误认为整个社会的历史。",
        "In *Run River*, an old landowning family of the Sacramento Valley treats land, bloodline and family memory as proof of its own superiority. They long for a vanishing California, yet rarely realize that the so-called beautiful past was simply an era in which their privilege had not yet been challenged. What Didion portrays is not only the decline of one family but how a class mistakes its own history for the history of the whole society."
      ],
      [
        "让我在意的是“继承”这个词。这个家族继承的不只是土地，还有一套解释：为什么这些东西属于自己，为什么这是应得的。Didion 写的不仅是一个家族的衰败，更是一个阶级如何将自身的历史误认为整个社会的历史。",
        "What stays with me is the word “inheritance”. What this family inherits is not only land but an explanation: why these things belong to them, why they are deserved. What Didion writes is not only the decline of one family but how a class mistakes its own history for the history of the whole society."
      ],
      [
        "六十多年后，在同一片土地上，被继承的东西变了。训练最前沿的 AI 模型所需的资金与算力，只有极少数公司和个人负担得起；而这种集中，常被讲述为远见与才能的结果。",
        "More than sixty years later, on the same land, what is inherited has changed. The funding and computing power needed to train frontier AI models can be afforded by only a handful of companies and individuals; and that concentration is often told as the result of foresight and talent."
      ],
      [
        "土地换成了算力，被继承的仍然是同一种叙述：成功来自自身的能力，而不是起点、资本与时机。",
        "Land has become compute, but what is inherited is still the same narrative: success comes from one’s own ability, not from starting point, capital and timing."
      ],
      [
        "更令我不安的是，我并非站在这个世界之外的批评者。我是它的受益者和参与者，享受这个行业给予的物质回报，也曾相信那些关于创造与改变世界的叙事。对硅谷的怀疑，最终也成为对自身的审视。",
        "What troubles me more is that I am not a critic standing outside this world. I am its beneficiary and participant; I enjoy the material rewards this industry gives, and I too once believed in the narratives of creating and changing the world. My doubt about Silicon Valley ends up becoming an examination of myself."
      ],
      [
        "这或许正是重读 Didion 最有意义的地方：她笔下的精英始终在讲述关于自己的故事，却很少意识到，故事之外还有一个更复杂、更不平等的现实。",
        "This may be exactly where rereading Didion is most meaningful: the elites in her writing are always telling stories about themselves, yet rarely realize that beyond the story lies a more complicated, more unequal reality."
      ],
      [
        "而这一次，我也身在其中。",
        "And this time, I am in it too."
      ]
    ]
  },
  {
    "date": "2025-12-10",
    "title": "When America Is No Longer a Story That Can Be Told",
    "category": "Essays",
    "book": {
      "cover": "the_white_album.jpg",
      "title": "The White Album",
      "author": "Joan Didion",
      "language": "English",
      "country": "United States",
      "original": "English",
      "lines": [
        "Essays · FSG Classics edition",
        "Didion’s essays on California and America at the end of the 1960s, where hippie freedom, Hollywood, political radicalism and conflicts of race and class run together."
      ]
    },
    "place": "于加州利弗莫尔\nLivermore, CA",
    "languages": [
      "Chinese",
      "English"
    ],
    "prose": [
      [
        "“We tell ourselves stories in order to live.”",
        ""
      ],
      [
        "Joan Didion 以这句话开篇，却在整本书中不断质疑它。1960年代末的加州，嬉皮士的自由理想、好莱坞的繁华、政治激进主义、种族与阶级冲突交织在一起。每个人都试图赋予时代某种意义，但这些宏大的叙事往往只是混乱现实之上的自我安慰。",
        "Joan Didion opens with this sentence, yet throughout the book keeps questioning it. In California in the late 1960s, the hippies’ ideal of freedom, Hollywood’s glitter, political radicalism, and conflicts of race and class were all tangled together. Everyone was trying to give the era some meaning, but these grand narratives were often only self-consolation laid over a chaotic reality."
      ],
      [
        "Didion 的敏锐，在于她既不相信美国社会制造的神话，也不完全相信自己作为观察者的判断。她以冷静、疏离而碎片化的笔触，记录一个正在失去共同现实的社会。那些彼此断裂的人物、事件与场景，并非等待被重新组织的故事，而恰恰揭示了故事本身的失效。她所描绘的美国，已经无法用进步、自由或反叛这样简单的概念加以解释。",
        "Didion’s sharpness lies in the fact that she believes neither the myths American society manufactures nor, entirely, her own judgment as an observer. In a cool, detached, fragmentary style, she records a society that is losing its shared reality. The characters, events and scenes, broken off from one another, are not stories waiting to be reorganized; they reveal precisely the failure of story itself. The America she portrays can no longer be explained by simple concepts such as progress, freedom or rebellion."
      ],
      [
        "尤其值得注意的是，她笔下的反文化运动并不天然代表真正的社会解放。许多自称反抗体制的人，依然沉迷于个人身份、精神体验与自我表达，却对更深层的阶级结构、种族不平等和社会责任缺乏真正的回应。反叛逐渐成为一种生活方式，甚至一种可供消费的文化姿态。",
        "What is especially notable is that the counterculture in her writing does not naturally stand for genuine social liberation. Many who called themselves rebels against the system remained absorbed in personal identity, spiritual experience and self-expression, with no real answer to deeper class structures, racial inequality and social responsibility. Rebellion gradually became a lifestyle, even a cultural pose available for consumption."
      ],
      [
        "读到“反叛成为一种可供消费的文化姿态”，我想到的是今天科技行业最常用的几个词：颠覆、改变世界、民主化。这些词原本带着反抗的意味，如今却出现在融资演示与产品发布里。反叛变成了一种品牌语言，一个越来越难以反对的词汇。",
        "Reading that rebellion became a cultural pose available for consumption, I think of the words the tech industry uses most: disruption, changing the world, democratizing. These words once carried the sense of resistance; now they turn up in pitch decks and product launches. Rebellion has become a brand language, a vocabulary that is harder and harder to oppose."
      ],
      [
        "当然，Didion 的冷峻本身也值得质疑。她能够以如此疏离的姿态观察社会崩塌，某种程度上也源于她所处的文化与阶级位置。她看穿了反文化运动的虚伪，却未必真正走近那些被美国社会结构性排斥的人。她的怀疑主义揭示了叙事的局限，却不一定提供走出困境的可能。",
        "Of course, Didion’s coolness itself deserves questioning. That she could watch a society collapse from such a detached stance also stems, to some degree, from the cultural and class position she occupied. She saw through the hypocrisy of the counterculture, yet did not necessarily come close to the people structurally excluded by American society. Her skepticism reveals the limits of narrative, but does not necessarily offer a way out of the predicament."
      ],
      [
        "或许这正是《The White Album》留给今天的问题：当“改变世界”成为一个行业最熟练的说法，我们究竟是在创造未来，还是在消费关于未来的故事？",
        "Perhaps this is exactly the question *The White Album* leaves us today: when “changing the world” becomes the phrase an industry has mastered best, are we creating the future, or consuming stories about the future?"
      ],
      [
        "Didion 写下的是1960年代美国神话的破裂；而讲故事的方式，似乎从未真正停下。",
        "What Didion wrote down was the breaking of the American myth of the 1960s; the telling of stories, it seems, has never really stopped."
      ]
    ]
  },
  {
    "date": "2025-12-30",
    "title": "When Everyone Thinks They Are Changing the World",
    "category": "Novel",
    "book": {
      "cover": "play_it_as_it_lays.jpg",
      "title": "Play It as It Lays",
      "author": "Joan Didion",
      "language": "English",
      "country": "United States",
      "original": "English",
      "lines": [
        "Novel · English edition",
        "Didion’s novel of Hollywood and Los Angeles, and of Maria Wyeth, who keeps driving the freeways with no destination."
      ]
    },
    "place": "于加州库比蒂诺\nCupertino, CA",
    "languages": [
      "Chinese",
      "English"
    ],
    "prose": [
      [
        "读琼·狄迪恩的《Play It as It Lays》，我最难忘的不是情节，而是玛丽亚开车的画面。",
        "Reading Joan Didion’s *Play It as It Lays*, what I remember most is not the plot but the image of Maria driving."
      ],
      [
        "她不断驾驶汽车穿越洛杉矶的高速公路，专注于车速、车道与出口。她始终在移动，却没有明确的目的地。驾驶让她暂时不必面对那些无法回答的问题，也让她在不断行动之中获得某种秩序。",
        "She keeps driving across the freeways of Los Angeles, absorbed in speed, lanes and exits. She is always moving, yet has no clear destination. Driving lets her avoid, for a while, the questions she cannot answer, and gives her a kind of order in constant motion."
      ],
      [
        "小说的背景是好莱坞，一个充满金钱、名望与创造力的世界：人们拍电影、参加聚会、讨论新的项目，似乎每个人都在创造重要的东西。但狄迪恩写下的，是这些活动背后令人不安的空虚。",
        "The novel is set in Hollywood, a world full of money, fame and creativity: people make films, go to parties and talk about new projects, and everyone seems to be creating something important. But what Didion writes down is the unsettling emptiness behind all that activity."
      ],
      [
        "封面上印着书里的一句话：“I know what ‘nothing’ means, and keep on playing.”",
        "The cover prints a line from the book: “I know what ‘nothing’ means, and keep on playing.”"
      ],
      [
        "今天的 AI 行业，让我想到的正是这种状态：速度。我们不断训练更大的模型，追逐更高的指标，发布更新的产品。每一步都有清楚的目标，每一次进步都可以被证明。但当所有人都专注于怎样开得更快时，很少有人停下来追问，我们究竟要去哪里。",
        "Today’s AI industry reminds me of exactly this condition: speed. We keep training bigger models, chasing higher benchmarks, releasing newer products. Every step has a clear goal, and every advance can be demonstrated. But when everyone is focused on how to drive faster, few stop to ask where we are actually going."
      ],
      [
        "玛丽亚的问题不是她不会驾驶，而是驾驶本身逐渐取代了目的地。行业的危险也许同样如此：创新本身取代了创新原本应该服务的目标。",
        "Maria’s problem is not that she cannot drive, but that the driving itself has gradually replaced the destination. The danger for the industry may be much the same: innovation itself replacing the goal innovation was meant to serve."
      ],
      [
        "我们擅长衡量的，是模型的能力、产品的增长与公司的估值；不那么擅长衡量的，是这些能力究竟服务于谁。估值不等于社会价值，潜力也不等于已经实现的贡献。",
        "What we are good at measuring is what models can do, how products grow and what companies are worth; what we are less good at measuring is whom those abilities serve. Valuation is not social value, and potential is not contribution already made."
      ],
      [
        "小说结尾，玛丽亚没有得到一个能够解释自己人生的答案，她仍然必须面对生活本身。",
        "At the end of the novel, Maria does not get an answer that explains her life; she still has to face life itself."
      ],
      [
        "读完之后，我最难忘的仍然是那条不断向前延伸的高速公路。道路不会因为我们开得足够快，就自动通向一个值得抵达的地方。",
        "After finishing, what I remember most is still that freeway stretching on and on. A road does not automatically lead somewhere worth reaching just because we drive fast enough."
      ]
    ]
  },
  {
    "date": "2026-10-26",
    "title": "When the Observer Becomes the Observed",
    "category": "Exhibition catalogue",
    "book": {
      "cover": "didion_what_she_means.jpg",
      "title": "Joan Didion: What She Means",
      "author": "Joan Didion · ed. Hilton Als",
      "language": "English",
      "country": "United States",
      "original": "English",
      "lines": [
        "Exhibition catalogue · English edition",
        "The catalogue of the exhibition of the same name, curated by Hilton Als, that places Didion’s writing among photographs, artworks and archival material."
      ]
    },
    "place": "于加州奥克兰\nOakland, CA",
    "languages": [
      "Chinese",
      "English"
    ],
    "prose": [
      [
        "琼·狄迪恩一生都在观察美国。她观察加利福尼亚的繁荣神话、政治语言背后的权力，以及人们如何通过讲述故事，让充满矛盾的现实显得合理。但面对《Joan Didion: What She Means》，我最感兴趣的却是一个反过来的问题：当一个终生拆解社会神话的作家，自己也成为被观看、被解释的对象时，我们是否也应该用她的方法，重新审视她留给我们的形象？",
        "Joan Didion spent her life observing America. She observed California’s myth of prosperity, the power behind political language, and the way people tell stories to make a contradictory reality seem reasonable. But reading *Joan Didion: What She Means*, what interests me most is a question that runs the other way: when a writer who spent her life taking social myths apart herself becomes the one who is looked at and interpreted, shouldn’t we use her method to re-examine the image she has left us?"
      ],
      [
        "这本由希尔顿·阿尔斯策划的同名展览衍生出的图录，通过摄影、艺术作品与档案材料，将狄迪恩的写作放回她所经历的美国文化之中。但我觉得，这种形式最有意思的地方，恰恰在于它改变了狄迪恩的位置。过去，她是观察者，决定如何描写别人；如今，她成为被观察的人，由别人决定哪些照片、文字与经历能够代表她。",
        "This catalogue, which grew out of the exhibition of the same name curated by Hilton Als, uses photographs, artworks and archival material to set Didion’s writing back into the American culture she lived through. But what I find most interesting about the form is precisely that it changes Didion’s position. In the past she was the observer, deciding how to describe other people; now she is the one being observed, and others decide which photographs, words and experiences can stand for her."
      ],
      [
        "这种转变让我想到《我从哪里来》。",
        "This shift reminded me of *Where I Was From*."
      ],
      [
        "在那本书中，狄迪恩重新审视自己成长于其中的加利福尼亚。她曾经继承关于西部开拓、个人独立与家族奋斗的故事，却逐渐发现，这些看似自然的价值观，掩盖了土地、资本、政府政策与历史机遇之间复杂的关系。",
        "In that book, Didion re-examines the California she grew up in. She had inherited stories of western settlement, individual independence and family struggle, only to find gradually that these seemingly natural values concealed a complicated web of land, capital, government policy and historical opportunity."
      ],
      [
        "尤其值得注意的是，她并没有将自己的家族排除在批判之外。她意识到，自己关于故乡的记忆，也曾受到那些神话的塑造。所谓独立与自力更生，并不完全是个人品格的结果；许多被讲述为个人奋斗的成就，同样依赖公共资源与制度安排。",
        "What is especially notable is that she does not exempt her own family from the critique. She realized that her memories of home had also been shaped by those myths. Independence and self-reliance were not entirely the result of individual character; many achievements told as personal striving also depended on public resources and institutional arrangements."
      ],
      [
        "我觉得，狄迪恩真正重要的，并不只是揭露美国神话的不完整，而是承认自己也曾经相信它。她并非站在历史之外揭穿别人的幻觉，而是在重新审视自己赖以理解世界的故事。",
        "What matters most about Didion, I think, is not only that she exposes how incomplete America’s myths are, but that she admits she once believed them herself. She does not stand outside history and puncture other people’s illusions; she re-examines the stories she had relied on to understand the world."
      ],
      [
        "那么，当我们今天观看狄迪恩时，是否也正在重复类似的过程？",
        "So when we look at Didion today, are we not repeating a similar process?"
      ],
      [
        "在公众记忆中，她已经拥有一套几乎固定的形象：瘦削的身体、深色墨镜、冷静的目光，以及仿佛能够洞察美国一切混乱的文字。那些肖像极具魅力，也让她逐渐成为某种独立、清醒与知识分子气质的象征。",
        "In public memory she already has an almost fixed image: the slight frame, the dark sunglasses, the cool gaze, and prose that seems able to see through all of America’s chaos. Those portraits are enormously charming, and they have gradually made her a symbol of independence, clarity and the intellectual temperament."
      ],
      [
        "但这是否也是一种神话？",
        "But is this, too, a kind of myth?"
      ],
      [
        "加利福尼亚曾经将复杂的历史压缩成开拓者的勇气与独立；而我们是否也正在将狄迪恩复杂的一生，压缩成一个永远冷静、永远清醒的观察者？",
        "California once compressed a complicated history into pioneer courage and independence; are we, in the same way, compressing Didion’s complicated life into an observer who is forever cool and forever clear-eyed?"
      ],
      [
        "这两种叙事的相似之处，不在于它们都是虚假的，而在于它们都选择性地保留某些事实，让一个复杂的对象变得容易理解、容易欣赏，也容易被纪念。",
        "What these two narratives have in common is not that they are false, but that both selectively keep certain facts, making a complicated subject easy to understand, easy to admire, and easy to commemorate."
      ],
      [
        "在《白色专辑》中，狄迪恩曾经写到自己无法再依靠熟悉的故事理解正在发生的事情。她笔下的美国并不是一个等待聪明观察者揭示真相的世界，而是一个连观察者自身都难以把握的现实。",
        "In *The White Album*, Didion wrote that she could no longer rely on familiar stories to understand what was happening. The America in her writing is not a world waiting for a clever observer to reveal the truth, but a reality that even the observer herself can hardly grasp."
      ],
      [
        "这让我觉得，狄迪恩写作中最珍贵的，或许不是她的确定，而是她的不确定。她能够敏锐地发现社会叙事中的裂缝，却并不因此拥有一个可以解释一切的答案。",
        "This makes me feel that what is most precious in Didion’s writing may not be her certainty but her uncertainty. She could sharply find the cracks in social narratives without therefore having an answer that explains everything."
      ],
      [
        "然而，当她成为文化偶像时，这种不确定性反而最容易消失。她的怀疑被简化为洞察力，她的疏离被理解为风格，她在历史与个人经验之间的挣扎，也可能被整理成一种令人羡慕的精神姿态。",
        "Yet when she becomes a cultural icon, that uncertainty is the first thing to disappear. Her doubt is simplified into insight, her detachment is read as style, and her struggle between history and personal experience may be tidied into an enviable spiritual pose."
      ],
      [
        "于是，一个不断质疑故事如何被制造的作家，最终也成为了一个被故事制造出来的人物。",
        "And so a writer who kept questioning how stories are made has herself become a figure made by stories."
      ],
      [
        "我并不认为这意味着我们应该拒绝纪念狄迪恩。相反，图录将她与其他艺术家的作品并置，恰恰提供了一种重新观看她的可能。它提醒我们，狄迪恩并不是独自站在美国历史之外的观察者。她的写作同样产生于特定的阶级、地域、文化与时代之中。",
        "I do not think this means we should refuse to commemorate Didion. On the contrary, by placing her alongside the work of other artists, the catalogue offers just the chance to look at her again. It reminds us that Didion was not an observer standing alone outside American history. Her writing, too, came out of a particular class, region, culture and era."
      ],
      [
        "但如果我们真正希望理解她，就不能只寻找那些能够证明她伟大的材料。我们也应该追问：哪些经历被反复展示，哪些矛盾被淡化？为什么某些照片逐渐成为她的象征，而她对自身局限的承认，却没有获得同样广泛的记忆？",
        "But if we truly want to understand her, we cannot look only for the material that proves her greatness. We should also ask: which experiences are shown again and again, and which contradictions are played down? Why have certain photographs gradually become her symbol, while her admission of her own limits has not been remembered as widely?"
      ],
      [
        "这也使书名中的 *What She Means* 显得格外耐人寻味。",
        "This also makes the *What She Means* in the title especially intriguing."
      ],
      [
        "它既可以指狄迪恩究竟想表达什么，也可以指她对后来的读者意味着什么。但两者之间始终存在距离。一个作家的思想，并不等于后人赋予她的文化意义；正如加利福尼亚真实的历史，也不等于人们愿意相信的加利福尼亚。",
        "It can mean what Didion actually meant to say, and it can mean what she means to later readers. But there is always a distance between the two. A writer’s thought is not the same as the cultural meaning posterity gives her, just as California’s real history is not the same as the California people are willing to believe in."
      ],
      [
        "读完这本图录所提出的观看方式，我越来越觉得，对狄迪恩最好的纪念，或许不是将她塑造成一个永远正确的观察者，而是将她曾经用来审视美国的怀疑，重新用于审视她本人。",
        "Having read the way of looking that this catalogue proposes, I increasingly feel that the best way to commemorate Didion may not be to shape her into an observer who is always right, but to turn the doubt she once used to examine America back on herself."
      ],
      [
        "如果她能够重新追问自己的家族如何参与了加利福尼亚神话的形成，那么我们也应该追问，自己如何参与了狄迪恩神话的形成。",
        "If she could ask again how her own family took part in making the California myth, then we should also ask how we ourselves take part in making the Didion myth."
      ],
      [
        "毕竟，一个终生提醒我们警惕故事如何掩盖现实的作家，或许最值得我们尊重的方式，就是不让关于她的故事，最终掩盖了她自己。",
        "After all, for a writer who spent her life warning us how stories cover up reality, perhaps the most respectful thing we can do is not let the stories about her end up covering up her."
      ]
    ]
  },
  {
    "date": "2025-08-29",
    "title": "Doubt and Origin",
    "slug": "where-i-was-from",
    "category": "Memoir",
    "book": {
      "cover": "where_i_was_from.jpg",
      "title": "Where I Was From",
      "author": "Joan Didion",
      "language": "English",
      "country": "United States",
      "original": "English",
      "lines": ["Memoir · Knopf, 2003", "Didion’s memoir of California and her family, and of the pioneer myth she grew up inside."]
    },
    "place": "于加州伯克利\nBerkeley, CA",
    "languages": ["Chinese", "English"],
    "photo": {
      "file": "where_i_was_from_reading.jpg",
      "alt": "Reading Where I Was From in front of a bookshelf"
    },
    "prose": [
      [
        "我们究竟是谁？是我们真实经历过的一切，还是我们选择相信的、关于自己的一段故事？",
        "Who are we, really? Everything we have actually lived through, or a story about ourselves that we have chosen to believe?"
      ],
      [
        "读 Joan Didion 的《Where I Was From》，我逐渐意识到，我们对于自身身份的理解，或许远没有想象中那么真实而稳定。",
        "Reading Joan Didion’s *Where I Was From*, I gradually realized that our understanding of our own identity may be far less real and stable than we imagine."
      ],
      [
        "Didion 从小生活在加利福尼亚的拓荒神话之中。勇敢的先驱者凭借坚韧、独立与个人奋斗建立新的生活。这不仅是一个关于加州历史的故事，也是她理解自身家族与身份的方式。然而，当她重新审视这段历史时，却发现所谓的自力更生，始终离不开政府支持、历史机遇与社会结构。那些被歌颂为个人奋斗的成就，并不完全属于个人。",
        "Didion grew up inside California’s pioneer myth: brave settlers who built new lives through grit, independence and individual striving. It was not only a story about the history of California; it was how she understood her own family and identity. Yet when she looked at that history again, she found that so-called self-reliance had always depended on government support, historical opportunity and social structure. The achievements celebrated as individual struggle did not belong entirely to the individual."
      ],
      [
        "这让我开始思考：我们究竟是在认识自己的过去，还是在不断选择一种能够让自己接受的过去？",
        "This made me wonder: are we getting to know our past, or are we continually choosing a past we can accept?"
      ],
      [
        "我们每个人都在为自己的人生编写故事。我们将成功归因于努力，将失败解释为成长，将某些经历视为命运的转折点，再将这些零散的记忆连接成一个连贯的自我。这样的叙事给予我们归属感，也让我们相信今天的自己有迹可循。",
        "Each of us is writing a story for our own life. We attribute success to effort, explain failure as growth, treat certain experiences as turning points of fate, and then link these scattered memories into one coherent self. Such a narrative gives us a sense of belonging, and lets us believe that the person we are today has traceable roots."
      ],
      [
        "但问题在于，我们往往只愿意保留那些能够支持自我认同的部分。我们记得自己的奋斗，却容易忽略时代的机遇；珍视家族的荣耀，却可能回避其中的特权；怀念故乡的美好，却不愿面对它所承载的伤害与不公。",
        "But the problem is that we often keep only the parts that support our sense of who we are. We remember our own striving but easily overlook the opportunities of the age; we treasure the glory of our family but may avoid the privilege within it; we cherish the beauty of our hometown but are unwilling to face the harm and injustice it carries."
      ],
      [
        "我们并非总是在欺骗自己，而是太需要相信自己的故事，以至于逐渐忘记它也只是一种解释。因此，当 Didion 开始质疑加州的神话时，她所面对的不只是历史认知的改变，更是一种身份上的动摇。如果自己曾经引以为傲的价值并不如想象中纯粹，那么建立在这些价值之上的自我，又该如何存在？",
        "We are not always deceiving ourselves; we simply need to believe our stories so much that we gradually forget they are only an interpretation. So when Didion began to question the myth of California, what she faced was not just a change in her understanding of history but a shaking of her identity. If the values she once took pride in were not as pure as she imagined, how could the self built on those values go on existing?"
      ],
      [
        "但我逐渐觉得，怀疑自己的故事，并不意味着否定自己的人生。我们无法改变过去，却可以重新理解过去。承认成功包含运气，并不会抹去努力；承认家族历史中的不公，也不意味着必须否定其中所有值得珍惜的记忆。真正需要放弃的，也许不是我们的身份，而是那个必须始终正确、完整而值得骄傲的自我形象。",
        "But I have come to feel that doubting our own story does not mean denying our life. We cannot change the past, but we can understand it anew. Admitting that success includes luck does not erase effort; admitting the injustice in a family’s history does not mean we must reject every memory in it worth cherishing. What we may really need to give up is not our identity, but the self-image that must always be right, complete and worth being proud of."
      ],
      [
        "然而，问题并没有到此结束。即使我们揭穿了旧有的神话，是否就能获得一个真正独立、完全属于自己的身份？恐怕也不能。",
        "But the question does not end there. Even if we expose the old myth, can we gain an identity that is truly independent and wholly our own? I am afraid not."
      ],
      [
        "我们用来质疑过去的语言、价值观与判断标准，本身也来自我们试图审视的社会。我们以为自己已经摆脱了家庭的期待，却可能只是接受了另一种文化的价值；我们以为自己终于能够独立思考，却未必意识到，所谓独立的思想，同样受到时代与环境的塑造。",
        "The language, values and standards of judgment we use to question the past themselves come from the society we are trying to examine. We think we have escaped our family’s expectations, but we may only have accepted the values of another culture; we think we can finally think independently, but we do not necessarily realize that so-called independent thought is shaped by its time and surroundings too."
      ],
      [
        "如果连我们用来反抗过去的思想，都无法完全摆脱过去的影响，那么自由究竟意味着什么？",
        "If even the thoughts we use to resist the past cannot fully escape its influence, what does freedom mean?"
      ],
      [
        "我开始觉得，自由或许从来不是彻底摆脱一切外部影响。那样的自由几乎不可能存在。我们无法选择自己的出生、家庭、语言与最初接受的价值观，也无法站在历史之外，重新创造一个完全纯粹的自我。",
        "I have begun to feel that freedom may never be a complete escape from all outside influence. That kind of freedom can hardly exist. We cannot choose our birth, our family, our language or the values we first absorbed, and we cannot stand outside history to create a wholly pure self from scratch."
      ],
      [
        "但这是否意味着，我们只能被动地成为环境的产物？我并不这样认为。或许，自由真正开始的地方，恰恰是我们意识到自己并非完全自由的那一刻。当我们开始追问自己的信念从何而来，为什么相信某些事情，又为什么排斥另一些事情时，我们便不再只是无意识地重复过去。",
        "But does that mean we can only passively be products of our environment? I do not think so. Perhaps freedom truly begins at the very moment we realize we are not entirely free. When we start to ask where our beliefs come from, why we believe some things and reject others, we are no longer merely repeating the past without knowing it."
      ],
      [
        "我们未必能够彻底摆脱这些影响，却可以重新审视它们，决定哪些值得继承，哪些需要拒绝，以及哪些仍然值得怀疑。这也让我重新理解了 Didion 对故乡的反思。她并没有因为发现加州神话的矛盾，就能够彻底摆脱自己与加州的联系。她依然来自那里，依然受到那段历史的塑造。但她不再需要通过美化故乡，来证明自身身份的价值。",
        "We may not be able to shake off these influences entirely, but we can re-examine them, deciding which are worth inheriting, which to reject, and which still deserve doubt. This also changed how I understand Didion’s reflection on her home. Discovering the contradictions in the California myth did not free her entirely from her ties to California. She still came from there, and was still shaped by that history. But she no longer needed to beautify her home in order to prove the worth of her identity."
      ],
      [
        "真正成熟的归属感，也许不是终于确信自己来自一个值得骄傲的地方，而是在看清它的复杂与不完美之后，仍然能够诚实地承认自己与它的联系。同样，真正的自我认识，也不是终于找到一个不受任何影响的纯粹自我，而是能够接受自己始终处于历史、社会与个人选择的交汇之中。我们无法选择自己最初如何被世界塑造，但至少可以选择，是否终其一生都不去质疑这种塑造。",
        "A truly mature sense of belonging may not come from finally being certain that we come from a place to be proud of, but from being able, after seeing its complexity and imperfection, to honestly acknowledge our connection to it. Likewise, real self-knowledge is not finally finding a pure self untouched by any influence, but being able to accept that we always stand at the meeting point of history, society and personal choice. We cannot choose how the world first shaped us, but we can at least choose whether to go through life without ever questioning that shaping."
      ],
      [
        "读完《Where I Was From》，我开始觉得，Didion 所寻找的并不只是她来自何方，而是当那些关于来处的神话逐渐瓦解之后，她还能如何理解自己。",
        "After finishing *Where I Was From*, I have begun to feel that what Didion was looking for was not only where she came from, but how she could still understand herself once the myths about her origins had begun to fall apart."
      ],
      [
        "或许，我们每个人都需要一个关于自己的故事，才能在复杂而偶然的人生中找到某种连续性。但真正的自由，并不意味着终于拥有了一个完整、正确且永不改变的故事，而是拥有不断重新审视、修正，甚至推翻它的勇气。",
        "Perhaps each of us needs a story about ourselves in order to find some continuity in a complicated and accidental life. But real freedom does not mean finally having a story that is complete, correct and never changing; it means having the courage to keep re-examining it, revising it, even overturning it."
      ],
      [
        "我们无法决定自己从哪里来，却不必让关于来处的故事，决定我们最终成为谁。而真正的自我认识，或许不是终于知道自己是谁，而是终于能够接受，自己并不完全是那个一直以来相信的自己。",
        "We cannot decide where we come from, but we need not let the story about where we come from decide who we finally become. And real self-knowledge may not be finally knowing who we are, but finally being able to accept that we are not entirely the person we have always believed ourselves to be."
      ]
    ]
  },
  {
    "date": "2026-08-16",
    "title": "Rebellion and Freedom",
    "slug": "rebellion-and-freedom",
    "category": "Poetry",
    "book": {
      "cover": "ginsberg.jpg",
      "title": "The Essential Ginsberg",
      "author": "Allen Ginsberg",
      "language": "English",
      "country": "United States",
      "original": "English",
      "lines": ["Poetry · Edited by Michael Schumacher, 2015", "A selection of Allen Ginsberg’s poems, including “Howl”."]
    },
    "place": "于加州利弗莫尔\nLivermore, CA",
    "languages": ["Chinese", "English"],
    "photo": {
      "file": "ginsberg_reading.jpg",
      "alt": "The Essential Ginsberg on a table in front of a bookshelf, with a Books Not Bombs card"
    },
    "prose": [
      [
        "读艾伦·金斯堡的诗歌，我始终在思考一个问题：反抗社会的规范，是否就意味着一个人已经获得了自由？在《嚎叫》中，金斯堡将那些被主流社会视为疯狂、堕落与失败的人置于诗歌的中心。诗的开头便是：“我见过我们这代人的翘楚在癫狂中毁灭，在歇斯底里的赤裸中挨饿。”他以近乎失控的语言，控诉一个崇尚秩序、效率与物质繁荣，却不断压抑个体精神的社会。在他的笔下，疯狂有时反而比所谓的正常更加清醒，反叛也因此成为对社会虚伪的一种揭露。",
        "Reading Allen Ginsberg’s poems, I kept coming back to one question: does rebelling against the norms of society mean a person has become free? In “Howl,” Ginsberg puts at the center of the poem the people the mainstream considers mad, degraded and failed. It opens: “I saw the best minds of my generation destroyed by madness, starving hysterical naked.” In language that borders on losing control, he accuses a society that prizes order, efficiency and material prosperity while ceaselessly suppressing the individual spirit. In his hands, madness is sometimes clearer-sighted than so-called normality, and rebellion becomes a way of exposing society’s hypocrisy."
      ],
      ["然而，我并不认为反抗本身就意味着自由。", "Yet I do not believe that rebellion by itself means freedom."],
      [
        "我们习惯于将服从与反抗视为对立的两端：服从意味着失去自我，反抗则象征着独立。但仔细想来，两者或许都存在同一种依赖。服从者需要社会的认可，而反抗者则需要社会作为自己的对立面。一个通过遵循规则定义自己，另一个通过拒绝规则确认自己的存在。",
        "We are used to treating obedience and rebellion as opposite ends: obedience means losing oneself, rebellion stands for independence. But on reflection, both may rest on the same dependence. The obedient need society’s approval, and the rebellious need society as their opposite. One defines himself by following the rules, the other confirms his existence by refusing them."
      ],
      [
        "如果一个人必须不断证明自己与社会不同，才能感受到自由，那么他的自由是否仍然由社会决定？这让我开始重新理解真正的独立。",
        "If a person must keep proving that he is different from society in order to feel free, is his freedom still decided by society? This made me begin to understand real independence in a new way."
      ],
      [
        "自由或许并不意味着拒绝一切社会规范，而是拥有建立自身价值标准的能力。一个人可以选择遵循某些传统，也可以拒绝另一些期待，但这些选择不应仅仅来自对认可的渴望，或对权威的愤怒，而应来自对自己真正相信什么、愿意如何生活的清醒认识。",
        "Freedom may not mean rejecting all social norms, but having the ability to set one’s own standards of value. A person can choose to follow some traditions and refuse other expectations, but those choices should not come only from a hunger for approval or anger at authority; they should come from a clear understanding of what one truly believes and how one is willing to live."
      ],
      ["在这个意义上，真正的自由甚至可能表现为一种与社会的和解。", "In this sense, real freedom may even take the form of a reconciliation with society."],
      [
        "这种和解并不是屈服，更不是对不公的沉默，而是不再需要通过社会的评价来证明自己。我们可以承认社会的存在，理解它的复杂与局限，却不必让它决定我们的全部价值。我们可以反抗值得反抗的事情，也可以坦然接受那些与自身原则并不冲突的规则。",
        "This reconciliation is not surrender, still less silence in the face of injustice; it means no longer needing society’s judgment to prove ourselves. We can acknowledge that society exists and understand its complexity and its limits, without letting it decide our whole worth. We can rebel against what is worth rebelling against, and calmly accept the rules that do not conflict with our own principles."
      ],
      [
        "我想，这或许就是一种更成熟的 *don’t give a fuck*：不是对世界漠不关心，而是不再执着于世界如何看待自己。",
        "I think this may be a more mature kind of *don’t give a fuck*: not indifference to the world, but no longer clinging to how the world sees us."
      ],
      [
        "当然，这并不意味着金斯堡的反抗失去了意义。恰恰相反，他的诗歌提醒我们，有些社会规范本身就值得质疑，而自由也需要人们敢于打破那些压抑个体的界限。但反抗可以是通往自由的道路，却不应成为自由的全部定义。",
        "Of course, this does not mean Ginsberg’s rebellion has lost its meaning. On the contrary, his poems remind us that some social norms are themselves worth questioning, and that freedom also needs people who dare to break the limits that repress the individual. But rebellion can be a road to freedom without being the whole definition of it."
      ],
      [
        "读完这些诗歌，我越来越觉得，真正困难的并不是对世界说“不”，而是在不需要反抗的时刻，依然知道自己是谁。真正自由的人，既不害怕与社会相同，也不执着于与社会不同。",
        "After reading these poems, I increasingly feel that the truly hard thing is not saying “no” to the world, but still knowing who you are at the moments when no rebellion is needed. A truly free person is neither afraid of being the same as society nor attached to being different from it."
      ]
    ]
  },
  {
    "date": "2024-11-08",
    "title": "Who Remembers Us",
    "slug": "when-those-who-remember-us-leave",
    "category": "Memoir",
    "book": {
      "cover": "stay_true.jpg",
      "title": "Stay True",
      "author": "Hua Hsu",
      "language": "English",
      "country": "United States",
      "original": "English",
      "lines": [
        "Memoir · Doubleday, 2022",
        "Hsu’s memoir of his college friendship with Ken, who was killed in a carjacking, and of the music and zines of their Berkeley years."
      ]
    },
    "place": "于加州旧金山\nSan Francisco, CA",
    "languages": [
      "Chinese",
      "English"
    ],
    "prose": [
      [
        "在《寻梦环游记》中，一个人真正的死亡，并不是生命的终结，而是当世界上最后一个记得他的人也将他遗忘。我们害怕被遗忘，因为那意味着自己曾经存在过的痕迹，终于从世界上彻底消失。但读完 Hua Hsu 的《Stay True》，我开始思考另一种恰好相反的失去：我们不仅害怕自己被别人遗忘，也害怕失去那些记得自己的人。前者是害怕从别人的世界里消失，后者是害怕自己的一部分随着别人一同消失。",
        "In *Coco*, a person’s true death is not the end of life but the moment the last person in the world who remembers them forgets them too. We fear being forgotten because it would mean that the traces of our having existed finally vanish from the world altogether. But after finishing Hua Hsu’s *Stay True*, I began to think about a loss that runs the other way: we fear not only being forgotten by others, but also losing the people who remember us. The first is the fear of disappearing from other people’s worlds; the second is the fear that a part of ourselves disappears along with them."
      ],
      [
        "我们习惯于认为记忆属于自己，仿佛过去只要曾经发生，就会永远成为生命中不可剥夺的一部分。但事实上，一个人的过去从来不完全由自己保存。父母记得我们尚未形成记忆时的模样，朋友记得我们早已忘记的言语，爱人记得那些连自己都不曾察觉的细节。那些记忆未必存在于我们的意识之中，却依然构成了我们是谁。",
        "We tend to think of memory as our own, as if whatever has happened will forever remain an inalienable part of our lives. In truth, a person’s past has never been kept entirely by that person. Our parents remember what we looked like before we could form memories; our friends remember words we long ago forgot; our lovers remember details we never noticed ourselves. Those memories may not live in our own consciousness, yet they still make up who we are."
      ],
      [
        "在《Stay True》中，Ken 的突然离世，不仅让 Hua 失去了一位朋友，也让他们共同经历的青春失去了一位见证者。那些一起听过的音乐、说过的玩笑、度过的夜晚，原本属于两个人的记忆，从此再也无法通过彼此的回忆得到补充与修正。更令人难过的是，Hua 仍然可以继续成长，重新理解过去，而 Ken 却再也无法参与这种理解。他无法告诉 Hua 哪些细节被记错了，哪些瞬间对自己同样重要，也无法再以自己的目光看见多年以后已经改变的 Hua。于是，失去一个人，也意味着失去了一种认识自己的方式。",
        "In *Stay True*, Ken’s sudden death costs Hua not only a friend but also the witness to the youth they shared. The music they listened to together, the jokes they told, the nights they spent: memories that belonged to two people can no longer be supplemented or corrected through each other’s recollections. Sadder still, Hua can go on growing and re-understanding the past, while Ken can no longer take part in that understanding. He cannot tell Hua which details were misremembered or which moments mattered to him as well, nor can he see, through his own eyes, the Hua who has changed over the years. To lose a person, then, is also to lose a way of knowing oneself."
      ],
      [
        "《寻梦环游记》中的遗忘，是活着的人逐渐抹去逝者的存在；《Stay True》中的死亡，却让逝者带走了活着的人一部分无法重建的过去。一个人可能仍然清晰地记得自己的朋友，却再也无法知道，自己在那位朋友的记忆中究竟是什么模样。这两种失去看似相反，却揭示了同一种脆弱：我们的存在，从来不完全属于自己。我们依赖他人的记忆，确认自己曾经存在；也依赖他人的目光，理解自己曾经是谁。",
        "The forgetting in *Coco* is the living gradually erasing the existence of the dead; the death in *Stay True* is the dead carrying away a part of the living’s past that can never be rebuilt. A person may still remember a friend clearly and yet never again learn what they looked like in that friend’s memory. The two losses seem opposite, but they reveal the same fragility: our existence has never belonged entirely to ourselves. We depend on other people’s memories to confirm that we once existed, and on other people’s gaze to understand who we once were."
      ],
      [
        "因此，Hua 对 Ken 的书写让我感到一种格外复杂的悲伤。他试图通过文字留下 Ken，却也在保存那个只有 Ken 曾经认识的年轻的自己。书写能够让一个人的故事继续被讲述，却无法让那个曾经与我们共同拥有故事的人，再次回应我们的记忆。《寻梦环游记》让我们相信，只要还有人记得，逝去的人便没有真正消失。而《Stay True》让我意识到，即使我们从未遗忘一个人，他的离开仍然可能带走一部分永远无法找回的自己。",
        "That is why Hua’s writing about Ken filled me with a particularly complicated sadness. He tries to keep Ken through words, but in doing so he also preserves the young self that only Ken ever knew. Writing can keep a person’s story being told, but it cannot make the one who once shared that story with us answer our memories again. *Coco* lets us believe that as long as someone remembers, the dead have not truly disappeared. *Stay True* made me realize that even if we never forget a person, their leaving may still take away a part of ourselves that can never be found again."
      ],
      [
        "我们总以为遗忘是对逝者的第二次死亡，却很少想到，当一个人离开时，活着的人也可能经历某种局部的消逝。如果一个人的存在需要他人的记忆来证明，那么当最后一个记得我们曾经模样的人离开，即使我们仍然活着，那个曾经的自己，是否也已经从世界上消失了？",
        "We always think of forgetting as the second death of the dead, but seldom consider that when a person leaves, the living may also undergo a kind of partial vanishing. If a person’s existence needs other people’s memories to prove it, then when the last person who remembers what we once were is gone, even though we are still alive, has that former self also disappeared from the world?"
      ]
    ]
  },
  {
    "date": "2024-06-16",
    "title": "From the Empire of Cotton to the Empire of AI",
    "slug": "from-cotton-to-ai",
    "category": "History",
    "book": {
      "cover": "empire_of_cotton.jpg",
      "title": "棉花帝国 (Empire of Cotton)",
      "author": "斯文·贝克特 Sven Beckert",
      "language": "Chinese",
      "country": "United States",
      "original": "English",
      "lines": [
        "History · Knopf, 2014",
        "Beckert’s global history of how cotton built modern capitalism, through slavery, colonial conquest and state power."
      ]
    },
    "place": "于加州利弗莫尔\nLivermore, CA",
    "languages": [
      "Chinese",
      "English"
    ],
    "prose": [
      [
        "一个社会可以在经济上越来越自由，却不意味着生活在其中的每个人都同样自由。",
        "A society can grow ever freer economically without everyone living in it being equally free."
      ],
      [
        "《棉花帝国》让我重新理解了资本主义的起源。贝克特揭示，现代资本主义并非单纯诞生于自由贸易、技术创新与市场竞争，而是深深依赖殖民扩张、土地掠夺、奴隶劳动与国家权力。自由市场的形成，恰恰曾以无数人的不自由为前提。",
        "*Empire of Cotton* changed how I understand the origins of capitalism. Beckert shows that modern capitalism was not born simply of free trade, technological innovation and market competition; it depended deeply on colonial expansion, the seizure of land, enslaved labor and state power. The making of the free market was premised, precisely, on the unfreedom of countless people."
      ],
      [
        "这让我想到，今天的人工智能革命，是否正在以一种截然不同的形式，延续资本主义历史中相似的矛盾？棉花帝国的关键，不只是纺织机器提高了生产效率，而是谁控制棉田、原料、工厂与贸易网络。机器创造了前所未有的生产力，但真正决定财富分配的，是围绕机器建立起来的所有权与权力关系。",
        "This made me wonder whether today’s AI revolution is carrying forward, in a very different form, the same contradictions in the history of capitalism. What mattered in the empire of cotton was not only that textile machines raised productivity, but who controlled the cotton fields, the raw materials, the factories and the trade networks. Machines created productive power on an unprecedented scale, but what truly decided how wealth was divided were the relations of ownership and power built around them."
      ],
      [
        "人工智能时代或许也是如此。我们惊叹于模型能够替代多少劳动，却很少追问谁拥有训练模型所需的数据、算力、基础设施与资本。正如工业革命的纺织机器离不开全球棉花供应链，今天看似无所不能的人工智能，同样依赖庞大的能源、矿产、数据与人类劳动体系。技术越是呈现出自动化的面貌，支撑它的社会关系反而越容易被忽略。",
        "The age of AI may be no different. We marvel at how much labor models can replace, yet seldom ask who owns the data, computing power, infrastructure and capital needed to train them. Just as the textile machines of the Industrial Revolution could not do without the global cotton supply chain, today’s seemingly omnipotent AI likewise depends on a vast system of energy, minerals, data and human labor. The more a technology presents the face of automation, the more easily the social relations that sustain it are overlooked."
      ],
      [
        "更值得思考的是，棉花帝国通过控制劳动者创造财富，而人工智能可能使资本在某些领域逐渐减少对劳动者的依赖。两者的机制不同，却指向同一个问题：生产力的增长，是否必然意味着创造或曾经创造这些财富的人能够分享增长的成果？",
        "What is more worth thinking about is that the empire of cotton created wealth by controlling laborers, whereas AI may allow capital, in some fields, to depend less and less on laborers. The mechanisms differ, but they point to the same question: does growth in productivity necessarily mean that those who create, or once created, this wealth can share in its gains?"
      ],
      [
        "当机器可以承担越来越多的工作，劳动本应从生存的负担逐渐转变为个人的选择。但如果收入、社会保障与生活尊严仍然高度依赖就业，那么劳动被替代也可能意味着一个人失去维持生活的能力。这或许是人工智能时代最深刻的悖论：社会越有能力摆脱劳动的必要，个人却未必越有能力摆脱对工作的依赖。",
        "As machines take on more and more work, labor should gradually shift from a burden of survival to a matter of personal choice. But if income, social security and a life of dignity still depend heavily on employment, then having one’s labor replaced may mean losing the ability to sustain a life. This may be the deepest paradox of the age of AI: the more capable a society becomes of escaping the necessity of labor, individuals may be no more capable of escaping their dependence on work."
      ],
      [
        "当然，历史并不注定重演。人工智能也可能使知识、创造与生产工具更加普及，让更多人获得过去只有少数人拥有的能力。但《棉花帝国》提醒我，技术本身不会决定这些可能最终属于谁。决定这一点的，仍然是所有权、制度与权力的分配。",
        "Of course, history is not destined to repeat itself. AI may also make knowledge, creativity and the tools of production more widely available, giving more people abilities that once belonged to only a few. But *Empire of Cotton* reminds me that technology itself will not decide to whom these possibilities finally belong. That is still decided by the distribution of ownership, institutions and power."
      ],
      [
        "从棉花到人工智能，资本主义不断改变生产财富的方式，却始终留下一个尚未解决的问题：当生产力越来越强大，我们究竟是在让更多人获得自由，还是在让拥有生产资料的人获得更大的自由？",
        "From cotton to AI, capitalism keeps changing the way wealth is produced, yet it always leaves one problem unresolved: as productive power grows ever stronger, are we freeing more people, or giving greater freedom to those who own the means of production?"
      ],
      [
        "或许，真正值得期待的人工智能革命，不是一个人类终于不再需要劳动的世界，而是一个人类终于不再必须通过出卖劳动，才能获得生存与自由的世界。",
        "Perhaps the AI revolution truly worth hoping for is not a world in which humans finally no longer need to work, but one in which humans finally no longer have to sell their labor in order to gain survival and freedom."
      ]
    ]
  },
  {
    "date": "2023-01-31",
    "title": "Normal as Violence",
    "slug": "when-normal-becomes-violence",
    "category": "Novel",
    "book": {
      "cover": "vegetarian.jpg",
      "title": "채식주의자 (The Vegetarian)",
      "author": "한강 Han Kang",
      "language": "Korean",
      "country": "South Korea",
      "original": "Korean",
      "lines": [
        "Novel · Changbi Publishers, 2007",
        "After a dream, a woman named Yeong-hye stops eating meat, and her family turns against her."
      ]
    },
    "place": "于加州利弗莫尔\nLivermore, CA",
    "languages": ["Chinese", "English"],
    "photo": {
      "file": "vegetarian_reading.jpg",
      "alt": "Reading 채식주의자 in Livermore"
    },
    "prose": [
      [
        "读完韩江的《素食者》，最令我不安的并不是英惠逐渐走向极端的行为，而是那些自认为正常的人，竟然能够如此自然地以关心、责任与爱的名义侵犯她的自由。",
        "After finishing Han Kang’s *The Vegetarian*, what unsettled me most was not Yeong-hye’s gradual slide into extremes, but how naturally the people who consider themselves normal could violate her freedom in the name of concern, duty and love."
      ],
      [
        "小说从英惠决定不再吃肉开始。一个看似微不足道的个人选择，却引发了丈夫的不满、父亲的愤怒与整个家庭的反对。对他们而言，问题似乎从来不是英惠为什么拒绝吃肉，而是她为什么不能像其他人一样正常生活。",
        "The novel begins with Yeong-hye’s decision to stop eating meat. A seemingly trivial personal choice provokes her husband’s displeasure, her father’s anger, and the opposition of the whole family. For them, the question never seems to be why Yeong-hye refuses meat, but why she cannot live normally like everyone else."
      ],
      [
        "这让我开始思考：究竟是谁定义了正常？而正常，又从什么时候开始成为一种必须服从的义务？",
        "This set me thinking: who defines what is normal? And when did normal become an obligation we must obey?"
      ],
      [
        "我们习惯于将不符合社会期待的人视为异常，却很少质疑那些期待本身是否合理。一个人选择不同的生活方式，我们往往首先想到的不是理解，而是纠正。更值得警惕的是，我们不仅习惯于干涉他人的选择，还习惯于将这种干涉理解为一种善意。",
        "We are used to seeing people who fall short of social expectations as abnormal, yet we rarely ask whether those expectations are reasonable. When someone chooses a different way of life, our first thought is often not to understand but to correct. More worrying still, we are used not only to interfering in other people’s choices but to taking that interference as a kind of kindness."
      ],
      [
        "英惠的丈夫认为她的行为破坏了正常的家庭生活，父亲则试图以暴力迫使她恢复原状。在他们眼中，自己的行为或许都有着合理的解释：维护家庭、履行责任，甚至是为了英惠好。然而，当关心不再以理解对方为前提，而是以改变对方为目的时，它与控制之间究竟还有多少区别？",
        "Yeong-hye’s husband believes her behavior ruins normal family life, and her father tries to force her back to how she was with violence. In their own eyes, each act may have a reasonable explanation: protecting the family, fulfilling a duty, even doing it for Yeong-hye’s own good. Yet when concern no longer rests on understanding the other person but aims at changing her, how much difference is left between it and control?"
      ],
      [
        "尤其令我印象深刻的是，小说中的暴力并不总是以恶意的形式出现。它也可能隐藏在习以为常的家庭秩序中，隐藏在长辈的权威、伴侣的期待，以及那些看似理所当然的社会规范之中。施加控制的人未必认为自己正在伤害别人，因为他们早已将自己的生活方式视为唯一正确的标准。",
        "What impressed me especially is that the violence in the novel does not always take the form of malice. It can also hide in a family order taken for granted, in the authority of elders, in a partner’s expectations, and in social norms that seem natural. The people exercising control do not necessarily think they are hurting anyone, because they long ago took their own way of life as the only correct standard."
      ],
      [
        "这让我想到现实生活中，我们也常常以类似的方式对待身边的人。父母以爱之名决定子女的人生，伴侣以关心之名限制彼此的自由，社会则以成熟、责任与体面为标准，要求每个人遵循相似的人生轨迹。我们或许并没有意识到，自己所谓的善意，有时不过是无法容忍他人与自己不同。",
        "This made me think of how, in real life, we often treat the people around us in similar ways. Parents decide their children’s lives in the name of love, partners limit each other’s freedom in the name of care, and society, with maturity, responsibility and respectability as its standards, asks everyone to follow a similar path through life. We may not realize that what we call goodwill is sometimes nothing more than an inability to tolerate people being different from us."
      ],
      [
        "最令人不安的，也许不是我们有意控制别人，而是我们真诚地相信，控制别人是在帮助他们。",
        "What is most unsettling may not be that we deliberately control others, but that we sincerely believe that controlling them is helping them."
      ],
      [
        "然而，韩江并没有将英惠的拒绝描绘成一场简单的自由胜利。她试图摆脱暴力，拒绝参与自己无法接受的生存方式，却最终将这种拒绝推向了自身生命的边缘。她的痛苦提醒我，反抗并不必然带来自由，而一个人有权拒绝社会期待，也不意味着她只能通过伤害自己来证明这种权利。",
        "Yet Han Kang does not portray Yeong-hye’s refusal as a simple victory for freedom. She tries to break free of the violence and to refuse a way of living she cannot accept, but ends up pushing that refusal to the edge of her own life. Her suffering reminds me that resistance does not necessarily bring freedom, and that a person’s right to refuse social expectations does not mean she can prove that right only by harming herself."
      ],
      [
        "姐姐仁惠的存在，使这种矛盾更加复杂。她既试图照顾英惠，也不得不面对英惠可能失去生命的现实。她的关心不能简单地等同于父亲的强迫，却同样让我们看到一个困难的问题：当尊重一个人的意愿与保护她的生命发生冲突时，我们究竟应当如何理解真正的关怀？",
        "Her older sister In-hye makes the contradiction more complicated. She tries to look after Yeong-hye, and also has to face the reality that Yeong-hye may lose her life. Her care cannot simply be equated with her father’s coercion, yet it shows us a hard question too: when respecting a person’s wishes conflicts with protecting her life, how should we understand real care?"
      ],
      [
        "或许，关怀与控制之间的界限，并不只取决于我们的动机是否善良，更取决于我们是否愿意承认对方是一个拥有独立意志的人，是否能够在必要的保护之外，仍然尊重她的尊严。",
        "Perhaps the line between care and control depends not only on whether our motives are kind, but on whether we are willing to recognize the other as a person with an independent will, and whether, beyond the protection that may be necessary, we can still respect her dignity."
      ],
      [
        "读完《素食者》，我开始怀疑，我们所说的正常，究竟是一种自然存在的秩序，还是多数人在长期服从中逐渐接受的规则？当一种生活方式被普遍认可，我们便容易忘记，它未必适合每一个人，更不应成为衡量他人价值的唯一标准。",
        "After finishing *The Vegetarian*, I began to wonder whether what we call normal is an order that exists naturally, or rules that most people have gradually come to accept through long obedience. When a way of life is widely approved, we easily forget that it may not suit everyone, and that it should not be the only standard by which others are measured."
      ],
      [
        "或许，真正值得恐惧的不是一个人逐渐偏离了正常，而是那些自认为正常的人，早已失去了理解不同的能力。",
        "Perhaps what is truly to be feared is not that a person drifts away from the normal, but that the people who consider themselves normal have long since lost the ability to understand difference."
      ],
      [
        "而一个真正尊重个体的社会，不应仅仅允许人们说“不”，更应当让他们在说“不”之后，依然能够有尊严地生活。",
        "And a society that truly respects the individual should not merely allow people to say “no”; it should let them go on living with dignity after they have said it."
      ]
    ]
  },
  {
    "date": "2022-11-24",
    "title": "History Never Really Left",
    "slug": "soulstealers",
    "category": "History",
    "book": {
      "cover": "soulstealers.jpg",
      "title": "Soulstealers: The Chinese Sorcery Scare of 1768",
      "author": "Philip A. Kuhn",
      "language": "English",
      "country": "United States",
      "original": "English",
      "lines": [
        "History · 1990",
        "In 1768, rumors that sorcerers were stealing souls by clipping queues swept the Qing empire, and the Qianlong emperor turned a village panic into a nationwide hunt for conspirators."
      ]
    },
    "place": "于加州利弗莫尔\nLivermore, CA",
    "languages": ["Chinese", "English"],
    "prose": [
      [
        "孔飞力的《叫魂》还是十年前读的。当时只觉得，1768年大清帝国那场由剪辫、摄魂的谣言引发，最终席卷全国的群体性疯狂，荒诞得近乎不可思议。我曾以为，这不过是皇权专制与民智未开共同作用下的历史闹剧。只要社会不断进步，教育逐渐普及，科学取代迷信，这样的荒诞自然也就失去了生存的土壤。",
        "I read Philip Kuhn’s *Soulstealers* ten years ago. At the time, the mass hysteria of 1768, set off by rumors of queue-clipping and soul-stealing and spreading across the whole Qing empire, struck me as absurd almost beyond belief. I thought it was no more than a historical farce produced by imperial despotism and an unenlightened populace. As society progressed, education spread and science replaced superstition, such absurdity would naturally lose the soil it grew in."
      ],
      [
        "十年后重读，才发现2012年的自己或许忽略了这本书最令人不安的地方。《叫魂》真正揭示的，并不是一个时代的人有多么愚昧，而是一套政治机制如何将原本零散的恐惧，转化为席卷整个社会的集体歇斯底里。",
        "Rereading it ten years later, I realize that in 2012 I may have missed the most disturbing thing about the book. What *Soulstealers* reveals is not how ignorant people of one era were, but how a political mechanism can turn scattered fears into a collective hysteria that sweeps an entire society."
      ],
      [
        "在1768年的中国，关于妖术的传言最初只是民间的不安与猜疑。但当乾隆皇帝将其视为对统治秩序的潜在威胁，地方官员便不得不在皇权的压力下追查嫌犯。原本可以通过调查逐渐平息的谣言，反而在层层上报、严刑逼供与政治猜忌中不断获得新的生命。越是缺乏确凿证据，越容易被解释为阴谋隐藏得足够深；越是有人试图淡化事态，越可能被怀疑是在掩盖问题。",
        "In China in 1768, rumors of sorcery began as nothing more than popular unease and suspicion. But once the Qianlong emperor saw them as a potential threat to the ruling order, local officials had no choice but to hunt for suspects under the pressure of imperial power. Rumors that investigation might have gradually put to rest instead found new life in reports passed up the chain, torture-extracted confessions and political suspicion. The less hard evidence there was, the easier it was to conclude that the conspiracy was hidden deeply enough; the more someone tried to play the matter down, the more likely they were to be suspected of covering something up."
      ],
      [
        "最可怕的地方在于，这套机制并不需要每个人都真正相信妖术的存在。皇帝担心权威受到挑战，官员担心被指责失职，百姓则可能借助政治恐慌宣泄私怨。每个人都在自己的处境中作出看似合理的选择，最终却共同制造了一场荒诞的灾难。当说真话的代价高于附和，当提出质疑的风险大于参与指控，个体出于自保的理性选择，反而可能汇聚成整个社会的非理性。",
        "The most frightening part is that this mechanism does not require everyone to truly believe in sorcery. The emperor feared his authority was being challenged, officials feared being blamed for dereliction, and ordinary people could use the political panic to settle private grudges. Each person made a choice that seemed reasonable in their own situation, and together they produced an absurd catastrophe. When telling the truth costs more than going along, and doubting is riskier than joining the accusations, individually rational choices made for self-protection can add up to the irrationality of a whole society."
      ],
      [
        "这让我想到2022年的中国，尤其是持续三年的疫情防控在最后一年所呈现出的种种荒诞。核酸检测、健康码、层层加码的封控，以及地方政府在政治责任与现实困境之间的挣扎，与1768年的叫魂恐慌当然不是同一件事。疫情是真实的公共卫生威胁，妖术却是虚构的恐惧。但两者在某些政治运行机制上的相似，恰恰值得警惕：当某种威胁被提升为不容质疑的政治任务，基层便可能更在意是否贯彻上级意志，而不是政策本身是否仍然合理；当纠正错误意味着承担政治风险，维持错误反而可能成为最安全的选择。",
        "This makes me think of China in 2022, and especially the many absurdities of the third and final year of pandemic control: PCR tests, health codes, lockdowns tightened layer upon layer, and local governments caught between political responsibility and practical difficulty. This is of course not the same thing as the sorcery scare of 1768. The pandemic was a real public health threat, while sorcery was an imagined fear. But the similarity in how the politics worked is exactly what deserves vigilance: when a threat is raised to an unquestionable political task, the grassroots may care more about carrying out the will of the higher level than about whether the policy still makes sense; when correcting a mistake means taking a political risk, keeping the mistake going can become the safest choice."
      ],
      [
        "回想2012年第一次读《叫魂》的自己，我甚至有些难以理解当时那种近乎理所当然的乐观。那时我相信，历史中的荒诞之所以令人震惊，正是因为我们已经走出了那个时代。十年后，最让我感到不安的，却不是发现历史竟然如此相似，而是发现自己曾经如此轻易地相信，时代的进步足以保护我们免于重蹈覆辙。过去读到官员层层加码、百姓相互猜疑，我只觉得不可思议；后来再看到现实中人们为了避免承担责任而选择沉默、为了证明立场而放弃质疑，才逐渐理解，许多荒诞并不需要一个社会中的大多数人真正相信它，只需要大多数人认为反对它不值得。",
        "Thinking back to myself reading *Soulstealers* for the first time in 2012, I can hardly understand that almost taken-for-granted optimism. I believed that the absurdities of history shock us precisely because we have left that era behind. Ten years on, what unsettles me most is not finding that history is so similar, but realizing how easily I once believed that the progress of the age was enough to keep us from repeating it. When I read about officials piling on demands and ordinary people suspecting one another, I found it simply unbelievable; only later, seeing people in real life stay silent to avoid taking responsibility and give up questioning to prove their loyalty, did I slowly understand that many absurdities do not need most people in a society to truly believe in them. They only need most people to decide that opposing them is not worth it."
      ],
      [
        "这种认识上的转变，比历史本身更让我难过。因为它意味着，我们曾经以为理所当然的常识、理性与自由，原来并没有想象中那么稳固。一个人可以清楚地知道某件事不合理，却依然选择服从；一个社会可以拥有无数聪明而善良的人，却仍然无法阻止集体性的错误。最令人无力的，或许正是看见许多人都在各自的处境中努力维持正常生活，而这些看似无可指责的选择，却可能共同维系着一种谁都不愿承担后果的荒诞。",
        "This change in understanding saddens me more than history itself, because it means that the common sense, reason and freedom we took for granted were never as solid as we imagined. A person can know clearly that something makes no sense and still choose to comply; a society can have countless intelligent and kind people and still be unable to stop a collective error. What feels most helpless, perhaps, is watching so many people try to keep life normal in their own circumstances, while these seemingly blameless choices may together sustain an absurdity whose consequences no one is willing to bear."
      ],
      [
        "从1768年到2022年，科学技术、教育水平与国家治理能力早已不可同日而语。但技术能够改变执行政策的效率，却未必能够改变权力制造恐惧的方式。一个社会可以拥有最先进的信息系统，却未必允许真实的信息充分流通；可以培养无数受过高等教育的人，却未必给予他们公开质疑错误的空间。现代技术甚至可能让一套缺乏纠错机制的政治体系，以过去难以想象的效率执行错误的决定。",
        "From 1768 to 2022, science and technology, levels of education and the capacity of the state to govern are no longer even comparable. But technology can change how efficiently policy is carried out without necessarily changing the way power produces fear. A society can have the most advanced information systems without necessarily allowing real information to circulate freely; it can educate countless people to a high level without necessarily giving them room to question mistakes in public. Modern technology may even let a political system with no mechanism for self-correction carry out wrong decisions with an efficiency once unimaginable."
      ],
      [
        "更令我感慨的是，文化大革命结束后，中国曾经经历过一次难得的拨乱反正。改革开放以及此后四十余年的发展，一度让我相信，这个国家终于从政治狂热的灾难中汲取了教训。然而2022年的经历让我重新意识到，经济繁荣并不必然带来政治理性，历史的教训也不会因为曾经付出过惨痛代价，就自动成为不可逆转的制度约束。我曾经把过去数十年的变化理解为一种不断向前的进步，如今却越来越觉得，那或许也是特定历史条件下，一代人艰难争取而来的成果，并没有任何力量能够保证它永远延续。",
        "What moves me even more is that after the Cultural Revolution ended, China went through a rare period of setting things right. Reform and opening up, and the more than forty years of development since, once led me to believe that the country had finally learned from the catastrophe of political fanaticism. But the experience of 2022 made me realize again that economic prosperity does not necessarily bring political rationality, and that the lessons of history do not automatically become irreversible institutional constraints just because they were paid for dearly. I used to understand the changes of recent decades as steady forward progress; now I increasingly feel that they were also the hard-won achievement of one generation under particular historical conditions, and that nothing guarantees they will last forever."
      ],
      [
        "《叫魂》最令人不安的，最终不是乾隆皇帝的猜忌，也不是民间对妖术的恐惧，而是当整个官僚体系逐渐失去向权力讲述真相的能力，统治者便只能从自己制造的回声中认识世界。一个王朝的衰败，未必始于人才的匮乏，也可能始于那些最有能力认识现实的人，逐渐不再敢于表达自己的判断。",
        "What is most disturbing about *Soulstealers* is, in the end, neither the Qianlong emperor’s suspicion nor the popular fear of sorcery, but that once the whole bureaucracy gradually loses the ability to tell power the truth, the ruler can only know the world through the echo he himself has made. A dynasty’s decline does not necessarily begin with a shortage of talent; it may begin when those most capable of understanding reality gradually stop daring to voice their judgment."
      ],
      [
        "2012年读《叫魂》，我看到的是大清帝国的荒诞；2022年再读，我看到的却是自己曾经对历史进步的天真。十年间改变的不是这本书，而是我终于意识到，历史从来不会因为我们已经读懂它，就不再重演。",
        "In 2012, reading *Soulstealers*, I saw the absurdity of the Qing empire; rereading it in 2022, I see my own former naivety about historical progress. What changed over those ten years was not the book, but that I finally realized history never stops repeating itself just because we have learned to read it."
      ],
      [
        "如果一个社会已经拥有足够的知识辨别荒诞，却依然缺乏公开指出荒诞、及时纠正错误的制度空间，那么它究竟比1768年的大清帝国进步了多少？",
        "If a society already has enough knowledge to recognize absurdity, yet still lacks the institutional space to point it out openly and correct mistakes in time, how much further has it really advanced than the Qing empire of 1768?"
      ]
    ]
  },
  {
    "date": "2022-11-24",
    "title": "Will We Become the Adults We Hate?",
    "slug": "lying-life-of-adults",
    "category": "Novel",
    "book": {
      "cover": "lying_life.jpg",
      "title": "The Lying Life of Adults",
      "author": "Elena Ferrante",
      "language": "English",
      "country": "Italy",
      "original": "Italian",
      "lines": [
        "Novel · Translated by Ann Goldstein, 2020",
        "In Naples, a girl overhears her father compare her to his estranged sister, and begins to look for the truth behind the adults’ lies."
      ]
    },
    "place": "于加州利弗莫尔\nLivermore, CA",
    "languages": ["Chinese", "English"],
    "photo": {
      "file": "lying_life_reading.jpg",
      "alt": "Reading The Lying Life of Adults in Livermore"
    },
    "prose": [
      [
        "读完 Elena Ferrante 的《那不勒斯四部曲》之后，我始终对她笔下的世界念念不忘。得知《The Lying Life of Adults》已经被 Netflix 改编成电视剧，我却选择花三个晚上读完原著。或许比起再次看到那不勒斯的街道，我更想重新进入 Ferrante 笔下那个充满欲望、矛盾与谎言的精神世界。",
        "After finishing Elena Ferrante’s Neapolitan Novels, I could not let go of the world she had written. When I learned that *The Lying Life of Adults* had been adapted by Netflix into a series, I chose to spend three evenings reading the original instead. Perhaps more than seeing the streets of Naples again, I wanted to reenter the inner world Ferrante builds, full of desire, contradiction and lies."
      ],
      [
        "小说从 Giovanna 无意间听见父亲对自己容貌的贬低开始。原本象征理性、教养与道德的父母，逐渐显露出虚伪与自私；而一直被描述为粗俗、丑陋的姑姑 Vittoria，却展现出另一种复杂的人性。Giovanna 开始怀疑自己从小接受的一切，试图在成年人的谎言之外寻找真实。",
        "The novel begins when Giovanna accidentally overhears her father belittling her looks. Her parents, who had stood for reason, upbringing and morality, gradually reveal their hypocrisy and selfishness, while her aunt Vittoria, always described as vulgar and ugly, shows a different, more complicated humanity. Giovanna starts to doubt everything she was raised to believe, and tries to look for something real beyond the adults’ lies."
      ],
      [
        "然而，最令我不安的并不是她如何逐渐揭穿这些谎言，而是她在这个过程中发生的变化。",
        "Yet what unsettles me most is not how she gradually exposes those lies, but how she changes in the process."
      ],
      [
        "Giovanna 并非通过揭穿谎言而逃离成人世界，而是在揭穿谎言的过程中，逐渐成为成人世界的一部分。",
        "Giovanna does not escape the adult world by exposing its lies; in exposing them, she gradually becomes a part of it."
      ],
      [
        "这让我想到中文社交媒体上经常出现的一句话：“我们最终成为了自己以前讨厌的样子。”",
        "This reminds me of a line that often appears on Chinese social media: “In the end, we became what we used to hate.”"
      ],
      [
        "小时候，我们总以为真实与虚伪、善良与自私之间有着清晰的界限。我们不理解成年人为什么言行不一，为什么为了利益妥协，为什么明明知道什么是对的，却依然选择错误。我们相信自己绝不会成为那样的人。",
        "As children, we always assume there is a clear line between truth and hypocrisy, between kindness and selfishness. We do not understand why adults say one thing and do another, why they compromise for the sake of self-interest, why they choose wrong even when they know what is right. We believe we will never become people like that."
      ],
      [
        "然而，成长似乎并不是一个不断接近理想自我的过程。随着我们逐渐进入成年人的世界，曾经无法理解的行为开始有了理由。沉默是为了避免冲突，隐瞒是为了保护关系，妥协是为了适应现实。我们并没有突然放弃原则，只是在一次次看似合理的选择中，逐渐模糊了自己曾经坚信的界限。",
        "Yet growing up does not seem to be a process of steadily approaching an ideal self. As we gradually enter the adult world, behavior we once could not understand begins to have reasons. Silence is meant to avoid conflict, concealment to protect a relationship, compromise to fit in with reality. We do not suddenly give up our principles; through one reasonable-looking choice after another, we slowly blur the lines we once held firmly."
      ],
      ["更令人不安的是，我们甚至可能没有意识到自己正在改变。", "More unsettling still, we may not even realize that we are changing."],
      [
        "Giovanna 曾经如此厌恶成年人的虚伪，却逐渐学会了隐瞒、试探与自我辩解。她不是突然决定成为一个虚伪的人，而是在面对自己的欲望与矛盾时，发现那些曾经令她反感的行为，也可以被自己解释得合情合理。",
        "Giovanna once loathed adult hypocrisy so much, yet she gradually learns to conceal, to probe, and to justify herself. She does not suddenly decide to become a hypocrite; faced with her own desires and contradictions, she finds that the very behavior that once repelled her can be made to seem perfectly reasonable by her own explanations."
      ],
      [
        "这让我重新思考《那不勒斯四部曲》中反复出现的问题：我们究竟能够在多大程度上摆脱自己的出身与成长环境？Elena 试图通过教育与写作离开原来的世界，却始终无法完全摆脱它的影响。而 Giovanna 同样试图通过识破父母的谎言获得独立，却发现自己早已深深受到那个世界的塑造。",
        "This made me reconsider a question that recurs in the Neapolitan Novels: to what extent can we escape where we come from and how we were brought up? Elena tries to leave her old world through education and writing, yet never fully escapes its influence. Giovanna likewise tries to gain independence by seeing through her parents’ lies, only to find that she has long since been deeply shaped by that world."
      ],
      [
        "也许，成长最残酷的地方，并不是我们发现成年人并不完美，而是我们终于开始理解他们为什么不完美，甚至开始为自己寻找同样的借口。",
        "Perhaps the cruelest part of growing up is not discovering that adults are imperfect, but that we finally begin to understand why they are imperfect, and even begin to find the same excuses for ourselves."
      ],
      [
        "但我并不认为 Ferrante 是在告诉我们，人注定会变得虚伪。相反，她让我意识到，理解人性的复杂，并不意味着必须接受所有妥协。我们无法永远保持童年时简单而坚定的道德判断，却仍然可以选择不让现实成为一切行为的借口。",
        "But I do not think Ferrante is telling us that people are doomed to become hypocrites. On the contrary, she made me realize that understanding the complexity of human nature does not mean having to accept every compromise. We cannot hold forever the simple, firm moral judgments of childhood, but we can still choose not to let reality become the excuse for everything we do."
      ],
      [
        "真正值得恐惧的，或许不是我们最终成为了自己讨厌的大人，而是当那一天到来时，我们已经不再觉得自己有什么值得讨厌。",
        "What is truly worth fearing may not be that we end up as the adults we hate, but that when that day comes, we no longer find anything in ourselves worth hating."
      ],
      [
        "也许，成熟并不是终于学会如何适应这个充满谎言的世界，而是在理解了谎言为何存在之后，依然保有质疑自己的能力。",
        "Perhaps maturity is not finally learning how to adapt to a world full of lies, but, having understood why the lies exist, still keeping the ability to question ourselves."
      ]
    ]
  },
  {
    "date": "2025-01-23",
    "title": "Can We Ever Go Home?",
    "slug": "can-we-go-home",
    "category": "Short stories",
    "book": {
      "cover": "yeosu_love.jpg",
      "title": "여수의 사랑 (Love of Yeosu)",
      "author": "한강 Han Kang",
      "language": "Korean",
      "country": "South Korea",
      "original": "Korean",
      "lines": [
        "Short story collection · 1995",
        "Han Kang’s first collection. In the title story, two women, one abandoned as a baby and one the sole survivor of her family, hold opposite feelings about the same coastal city."
      ]
    },
    "place": "于韩国首尔\nSeoul, South Korea",
    "languages": ["Chinese", "English"],
    "photo": {
      "file": "yeosu_love_reading.jpg",
      "alt": "Reading 여수의 사랑 in Seoul"
    },
    "prose": [
      [
        "故乡是什么？是我们出生的地方，是承载童年记忆的土地，还是一个无论走得多远，最终都能够接纳我们的归宿？读完韩江的《丽水之爱》，我开始怀疑，故乡或许从来不只是一个地理概念，而是我们对于归属、记忆与爱的某种想象。",
        "What is a hometown? Is it the place where we were born, the land that holds our childhood memories, or a refuge that will take us back no matter how far we have gone? After reading Han Kang’s *Love of Yeosu*, I began to suspect that a hometown was never only a geographical idea, but a kind of imagining of belonging, memory and love."
      ],
      [
        "几天前，我刚去过丽水。那是我旅居世界这几年里，离家乡盐城最近的一次，大概只有六百多公里。我在山上眺望家乡方向西边的那片海，坦白说，站在那里，我并没有想起多少盐城的事。自从2008年去北京上大学，我就很少再回盐城了。这些年我不断搬去新的城市，真正生活、成长的地方一个接一个地变了，而盐城只是留在了原地，成了我“从哪里来”的一个答案，却不再是我生活的地方。对我来说，出生的地方并没有那么重要，它更像是表格上需要填写的一栏，而不是一个我会惦记、想回去的家。我真正看重的，是心里的那个故乡。",
        "A few days ago I was in Yeosu. It was the closest I had come to my hometown, Yancheng, in the years I have spent living around the world, only about six hundred kilometers. From a hill I looked out at the sea to the west, in the direction of home. To be honest, standing there I did not think much about Yancheng. I have rarely gone back since I left for university in Beijing in 2008. Over the years I kept moving to new cities, and the places where I actually lived and grew up changed one after another, while Yancheng stayed where it was, an answer to “where are you from?” rather than a place I live. To me the place where I was born has never mattered that much. It is more like a box on a form than a home I think about or want to return to. What I truly care about is the hometown in my mind."
      ],
      [
        "小说中，자흔（Ja-heun）与叙述者정선（Jeong-seon）对丽水有着截然相反的感情。出生后便被遗弃的자흔，因为被遗弃的列车从丽水出发，便固执地相信那里是自己的故乡。她从未真正拥有过丽水，却将它视为人生的方向。而정선真正出生于丽水，却在那里经历了母亲的死亡、父亲携子女投海自杀的悲剧，成为唯一的幸存者。从此，丽水成了一个必须逃离、甚至不愿回忆的地方。",
        "In the story, Ja-heun (자흔) and the narrator Jeong-seon (정선) feel completely opposite things about Yeosu. Ja-heun, abandoned soon after she was born, stubbornly believes Yeosu is her hometown because the train she was abandoned on departed from there. She has never really possessed Yeosu, yet she treats it as the direction of her life. Jeong-seon, by contrast, was truly born in Yeosu, and it is where she lived through her mother’s death and her father’s suicide at sea with his children, of whom she was the only survivor. From then on, Yeosu became a place she had to flee, and did not even want to remember."
      ],
      [
        "一个从未到过故乡，却终其一生渴望回去；一个真正拥有故乡，却用尽力气想要忘记它。这种矛盾让我意识到，我们对于故乡的感情，也许并不取决于那个地方本身，而取决于我们曾在那里得到什么，又失去了什么。",
        "One has never been to her hometown yet longs all her life to return; the other truly has a hometown yet uses all her strength to forget it. This contradiction made me realize that our feelings about a hometown may depend not on the place itself, but on what we once received there, and what we lost."
      ],
      [
        "자흔所向往的，或许并不是真实的丽水，而是一个想象中能够解释自己从何而来、为何被遗弃的地方。对于一个从出生便失去归属的人而言，哪怕只是一个模糊的地名，也足以成为生命的寄托。她渴望回到丽水，也许并不是因为那里真的有人等待她，而是因为她需要相信，世界上至少存在一个自己可以回去的地方。",
        "What Ja-heun longs for may not be the real Yeosu at all, but an imagined place that could explain where she came from and why she was abandoned. For someone who lost any sense of belonging at birth, even a vague place name can be enough to hold a life. She longs to return to Yeosu, perhaps not because anyone is really waiting for her there, but because she needs to believe that somewhere in the world there is at least one place she can go back to."
      ],
      [
        "而정선恰恰相反。丽水并非一个未知的希望，而是一段无法承受的记忆。정선试图通过离开故乡来摆脱过去，却发现地理上的距离并不能消除精神上的创伤。那些被压抑的恐惧与痛苦，最终仍然以洁癖、疏离和对亲密关系的矛盾态度，渗透进日常生活。",
        "Jeong-seon is exactly the opposite. For her, Yeosu is not an unknown hope but a memory she cannot bear. She tries to shake off the past by leaving her hometown, only to find that geographical distance cannot erase psychological trauma. The fear and pain she has suppressed still seep into daily life, as an obsession with cleanliness, as distance, and as an ambivalent attitude toward intimacy."
      ],
      [
        "于是我开始觉得，자흔与정선看似走向两个相反的方向，实际上却都被同一种缺失所困。一个试图通过回到故乡寻找从未得到的爱，另一个试图通过逃离故乡忘记曾经失去的爱。她们真正寻找或逃避的，也许从来不是丽水，而是那个始终无法得到安放的自己。",
        "So I began to feel that Ja-heun and Jeong-seon, who seem to walk in opposite directions, are in fact trapped by the same lack. One tries to go back to her hometown to find a love she never had; the other tries to flee hers to forget a love she lost. What they are really looking for or running from may never have been Yeosu, but a self that has never been able to settle."
      ],
      [
        "这也让我重新思考我们习以为常的“落叶归根”。我们总将故乡浪漫化为温暖的起点，仿佛无论经历多少漂泊，回去便意味着安宁与和解。但这种想象是否忽略了那些在故乡遭受伤害的人？如果一个人的故乡意味着遗弃、死亡与失去，我们又凭什么认为回归必然是一种救赎？",
        "It also made me reconsider the saying we take for granted, that fallen leaves return to their roots. We always romanticize the hometown as a warm beginning, as if, however much we have drifted, going back must mean peace and reconciliation. But does that picture overlook the people who were hurt in their hometowns? If someone’s hometown means abandonment, death and loss, on what grounds do we assume that returning must be a redemption?"
      ],
      [
        "我自己的经历也说明，故乡未必是出生的地方。在我网站的 Steps 里，我给自己定了一条规则：把我从出生到现在，所有能记起、有记录的足迹都放进数据库，每到一座城市、一个国家就为它计一次数，计数最高的城市和国家，分别被标记为我的 home city 和 home country。2008年去北京读书，不到一年，北京就成了我的 home city。2012年去西雅图读书，到2014年8月，西雅图接替了北京。2017年来湾区工作，湾区却一直等到2023年10月，才超过西雅图。至于 home country，美国早在2015年6月就取代了中国。这些数字只记录我去过哪里，并不能告诉我归属在哪里。在我心里，我的故乡仍然是西雅图：在那里的生活深刻塑造了我是谁，也是我真正觉得有归属感的地方。",
        "My own experience suggests that a hometown is not necessarily where you were born. In Steps on this site I set myself a rule: every footprint I can remember or have a record of, from birth until now, goes into a database, and each city and country I reach gets one more count. The city and country with the highest counts are marked as my home city and home country. I went to university in Beijing in 2008, and in less than a year Beijing had become my home city. I went to school in Seattle in 2012, and by August 2014 Seattle had taken over from Beijing. After I came to work in the Bay Area in 2017, it did not overtake Seattle until October 2023. As for my home country, the United States had already replaced China in June 2015. These numbers only record where I have been, not where I belong. In my heart my hometown is still Seattle. My life there shaped who I am, and it is where I truly feel I belong."
      ],
      [
        "小说的结尾，정선终于踏上了前往丽水的旅程，但韩江并没有告诉我们，她能否找到자흔，能否与过去和解，能否真正获得安宁。",
        "At the end of the story, Jeong-seon finally sets out on the journey to Yeosu, but Han Kang does not tell us whether she will find Ja-heun, whether she will reconcile with the past, or whether she will truly find peace."
      ],
      [
        "我反而觉得，这种没有答案的结局恰恰揭示了故乡最复杂的意义。故乡不能保证我们重新获得失去的爱，也无法替我们抹去曾经的伤害。回去并不必然意味着治愈，离开也不等于真正的遗忘。",
        "If anything, I think an ending with no answer reveals the most complicated meaning of a hometown. A hometown cannot guarantee that we will win back the love we lost, nor can it erase the harm done to us. Going back does not necessarily mean healing, and leaving does not mean truly forgetting."
      ],
      [
        "或许，故乡并不是一个我们终将回到的地方，而是一个我们终其一生都在试图理解的地方。而所谓的归乡，也许不是为了找回过去，而是为了有一天，我们能够不再被过去决定自己将去往何方。",
        "Perhaps a hometown is not a place we will eventually return to, but a place we spend our whole lives trying to understand. And what we call homecoming may not be about retrieving the past, but about reaching a day when the past no longer decides where we are going."
      ]
    ]
  },
  {
    "date": "2025-07-07",
    "title": "Whose Paradise?",
    "slug": "whose-paradise",
    "category": "Novel",
    "place": "於台灣台北\nTaipei, Taiwan",
    "book": {
      "cover": "fang_si_chi.jpg",
      "title": "房思琪的初戀樂園 (Fang Si-Chi’s First Love Paradise)",
      "author": "林奕含 Lin Yi-han",
      "language": "Traditional Chinese",
      "country": "Taiwan",
      "original": "Chinese",
      "lines": ["Novel · 2017", "A teenage girl in Taipei is abused by her cram-school Chinese teacher, who presents it to her as love."]
    },
    "languages": ["Traditional Chinese", "English"],
    "prose": [
      [
        "讀完林奕含的《房思琪的初戀樂園》，應該幾乎所有人都會自然問：為什麼是“樂園”？“樂園”本應象徵純真、自由與幸福，卻被用來命名一個充滿侵犯、壓迫與痛苦的故事。這當然是一種反諷，但我更想追問的是：為什麼一個充滿傷害的世界，仍然能夠以樂園的面貌存在？又是誰在維持這個樂園？",
        "After finishing Lin Yi-han’s *Fang Si-Chi’s First Love Paradise*, almost every reader will naturally ask the same thing: why “paradise”? A paradise should stand for innocence, freedom and happiness, yet here the word names a story full of violation, oppression and pain. It is irony, of course, but what I want to ask is something else: how can a world so full of harm go on existing in the guise of a paradise? And who is keeping that paradise going?"
      ],
      [
        "小說中的李國華擁有教師的身份、文學的修養與知識的權威。他將侵犯包裝成愛情，將操控解釋為關懷，使暴力披上了文明與美的外衣。最令我不安的並非他如何利用語言欺騙房思琪，而是這些語言為什麼具有如此強大的說服力。",
        "In the novel, Li Guo-hua has the standing of a teacher, the refinement of a man of letters, and the authority of knowledge. He packages violation as love and explains control as care, so that violence puts on the clothes of civilization and beauty. What unsettles me most is not how he uses language to deceive Fang Si-Chi, but why that language is so persuasive."
      ],
      [
        "我們相信教育意味著啟蒙，文學意味著高尚，愛情意味著美好。這些信念本身並沒有錯，但當我們過於相信它們時，也可能因此失去質疑的能力。我們因為相信老師值得尊敬，便難以接受老師也可能是施害者；因為相信愛情是美好的，便可能忽略親密關係中的權力與剝削。有時，我們不是因為看見了善才相信它，而是因為預先相信善的存在，才拒絕看見其中的惡。",
        "We believe that education means enlightenment, that literature means nobility, that love means something good. There is nothing wrong with those beliefs in themselves, but when we trust them too much we can lose the ability to question. Because we believe a teacher deserves respect, it is hard to accept that a teacher can also be an abuser; because we believe love is beautiful, we may overlook the power and exploitation inside an intimate relationship. Sometimes we do not believe in goodness because we have seen it; we refuse to see the evil inside it because we believe in goodness beforehand."
      ],
      [
        "這讓我意識到，“樂園”或許不只是施害者製造的幻象，更是社會在長期習慣中共同維護的秩序。",
        "This made me realize that the “paradise” may be more than an illusion manufactured by the abuser. It may be an order that society maintains together, through long habit."
      ],
      [
        "現實生活中，我們同樣習慣於用美好的詞彙解釋令人不安的事情。控制可以被稱為關心，服從可以被讚美為懂事，忍耐可以被歌頌為成熟。當受害者沒有反抗，我們質疑她為什麼沉默；當施害者擁有地位與聲望，我們又試圖為他的行為尋找解釋。我們未必有意縱容暴力，卻可能在一次次看似合理的解釋中，讓傷害逐漸變得正常。",
        "In real life we are just as used to explaining disturbing things in beautiful words. Control can be called concern, obedience can be praised as being sensible, endurance can be celebrated as maturity. When a victim does not resist, we question why she stayed silent; when an abuser has status and a reputation, we try to find an explanation for his behavior. We may not mean to condone violence, yet through one reasonable-sounding explanation after another, we can let harm slowly become normal."
      ],
      [
        "而這種正常化，或許比刻意的掩蓋更加可怕。因為承認傷害的存在，有時意味著我們必須質疑自己一直信任的權威、價值與社會秩序。相比之下，將痛苦解釋為誤會、愛情或成長的代價，似乎更容易讓我們繼續安心生活。我們維護的未必是真相，而可能只是一個不需要我們重新認識的世界。",
        "That normalization may be more frightening than deliberate concealment. Admitting that harm exists can mean having to question the authorities, values and social order we have always trusted. By comparison, explaining the pain away as a misunderstanding, as love, or as the price of growing up seems to make it easier to go on living in comfort. What we protect may not be the truth, but only a world we do not have to learn to see again."
      ],
      [
        "這也迫使我反思自己作為讀者的位置。面對房思琪的遭遇，我能夠清楚地辨認其中的殘酷。但如果我身處故事之中，只看到一位受人尊敬的老師和一個沉默、矛盾的女孩，而無法知曉她的內心，我是否仍然能夠作出同樣的判斷？",
        "It also forces me to reflect on my own position as a reader. Faced with what happens to Fang Si-Chi, I can recognize the cruelty clearly. But if I were inside the story, seeing only a respected teacher and a silent, conflicted girl whose inner life I could not know, would I still make the same judgment?"
      ],
      ["我無法輕易給出肯定的回答。", "I cannot easily answer yes."],
      [
        "或許，這正是這本書最深刻的警示。暴力並不總是以野蠻的面貌出現，它也可能隱藏在我們最熟悉、最珍視的文明秩序之中。文學、教育與愛情並非暴力的根源，但當它們被賦予不容質疑的神聖性時，也可能成為遮蔽傷害的工具。",
        "Perhaps this is the book’s deepest warning. Violence does not always arrive looking savage; it can hide inside the civilized order we know best and prize most. Literature, education and love are not the roots of violence, but when they are given a sanctity that must not be questioned, they can become tools for covering harm."
      ],
      [
        "因此，我不再認為“樂園”僅僅是對房思琪悲劇的反諷。它更像是一面鏡子，映照出我們如何透過語言、習慣與集體沉默，將某些人的痛苦轉化為另一些人眼中理所當然的秩序。",
        "So I no longer think of the “paradise” as merely an irony about Fang Si-Chi’s tragedy. It is more like a mirror, showing how, through language, habit and collective silence, we turn some people’s pain into an order that others take for granted."
      ],
      [
        "我們總以為樂園的反面是地獄。但也許真正可怕的，並不是地獄被偽裝成樂園，而是我們早已習慣了它的模樣，甚至真誠地相信它就是樂園。",
        "We tend to assume the opposite of paradise is hell. But perhaps what is truly terrifying is not hell disguised as paradise; it is that we have long since grown used to how it looks, and sincerely believe it is paradise."
      ],
      [
        "如果一個世界必須依靠受害者的沉默、旁觀者的麻木，以及對傷害的不斷粉飾才能維持其美好，那麼它究竟是誰的樂園？",
        "If a world can keep its beauty only through the victim’s silence, the bystander’s numbness, and the constant glossing over of harm, then whose paradise is it, really?"
      ]
    ]
  },
  {
    "date": "2025-01-29",
    "title": "Stillness",
    "category": "Novel",
    "place": "Sokcho, Gangwon, Corée du Sud\nSokcho, Gangwon, South Korea",
    "languages": ["French", "English"],
    "book": {
      "cover": "sokcho.jpeg",
      "title": "Hiver à Sokcho",
      "author": "Élisa Shua Dusapin",
      "language": "French",
      "country": "Switzerland",
      "original": "French",
      "lines": [
        "Novel · Éditions Zoé, 2016",
        "A young woman, half French and half Korean, works at a guesthouse in the seaside town of Sokcho in winter, where a French comics artist comes to stay."
      ]
    },
    "photo": {
      "file": "stillness_notes.jpg",
      "alt": "A page of the book with handwritten notes in the margins"
    },
    "prose": [
      [
        "Nous désirons être compris, mais craignons d’être mis à nu. Nous cherchons un refuge, mais l’appartenance n’est qu’un souffle.",
        "We long to be understood, yet we fear being laid bare. We look for a refuge, but belonging is only a breath."
      ],
      [
        "Dans *Hiver à Sokcho*, ce double mouvement tient dans une pension au bord de la mer. La narratrice, moitié française, moitié coréenne, y travaille en hiver, près de la frontière avec la Corée du Nord. Elle n’appartient tout à fait à aucun des deux pays, et elle le sait.",
        "In *Hiver à Sokcho*, this double movement fits inside a guesthouse by the sea. The narrator, half French and half Korean, works there in winter, near the border with North Korea. She belongs completely to neither country, and she knows it."
      ],
      [
        "Quand arrive Yan Kerrand, un dessinateur français venu chercher l’inspiration pour sa prochaine bande dessinée, elle espère être enfin regardée. Elle lui prépare ses repas et le guide dans la ville. Mais un dessinateur ne regarde pas comme les autres : son regard laisse une trace. Être compris et être mis à nu deviennent alors la même chose.",
        "When Yan Kerrand arrives, a French artist who has come looking for inspiration for his next graphic novel, she hopes to be seen at last. She cooks his meals and guides him around the town. But an artist does not look the way other people do: his gaze leaves a trace. To be understood and to be laid bare become the same thing."
      ],
      [
        "Le corps de la narratrice est le lieu de cette tension. Son petit ami Jun-oh voudrait qu’elle change de visage, et elle se compare sans cesse à ceux des magazines. Elle désire que quelqu’un la comprenne, et elle craint ce qu’on verrait en elle.",
        "The narrator’s body is where this tension plays out. Her boyfriend Jun-oh would like her to change her face, and she compares herself endlessly to the ones in magazines. She wants someone to understand her, and she fears what they would see."
      ],
      [
        "Le froid fait le reste. L’hiver de Sokcho fige le monde tout en le dépouillant de ses artifices : la plage est vide, la pension l’est presque, et dans cette immobilité il n’y a plus rien derrière quoi se cacher.",
        "The cold does the rest. The winter of Sokcho freezes the world while stripping it of its artifices: the beach is empty, the guesthouse nearly so, and in this stillness there is nothing left to hide behind."
      ],
      [
        "Ce que j’en retiens, c’est que l’immobilité ne guérit pas la peur d’être vu ; elle la rend impossible à ignorer. Dans le silence de l’hiver, la narratrice se retrouve face à une question plus honnête sur qui elle est quand personne ne la regarde. C’est la seule vérité intérieure que le livre me laisse, et elle me suffit.",
        "What I take from it is that stillness does not cure the fear of being seen; it makes it impossible to ignore. In the silence of winter, the narrator comes face to face with a more honest question about who she is when no one is looking at her. It is the only inner truth the book leaves me with, and it is enough."
      ]
    ]
  },
  {
    "date": "2026-08-25",
    "title": "Severance and the Name I Keep",
    "slug": "severance",
    "category": "Novel",
    "book": {
      "cover": "severance.jpeg",
      "title": "Severance",
      "author": "Ling Ma",
      "language": "English",
      "country": "United States",
      "original": "English",
      "lines": [
        "Novel · Farrar, Straus and Giroux, 2018",
        "A fever leaves its victims repeating the routines of their old lives. Candace Chen, a Bible production coordinator in New York, keeps going to work."
      ]
    },
    "place": "于麻省波士顿\nBoston, MA",
    "languages": ["Chinese", "English"],
    "prose": [
      [
        "马凌的小说《断裂》里的“申氏发热”是一则末日寓言，它的讽刺在于：患者并没有变成扑向活人的怪物，而是一遍遍重复生前的日常：折叠衣物、维护陈列、按时打卡。女主角 Candace 在一家出版公司负责《宝石圣经》的生产协调。纽约渐渐空了，她仍然每天走进那栋空楼上班。这算不上什么崇高的坚守，更像是习惯接管了她：没有人再需要那些《圣经》，工作却还在继续。病的症状和上班的样子，在这里几乎分不出来。",
        "The “Shen Fever” in Ling Ma’s novel *Severance* is an allegory of the end of the world, and its irony is this: the infected do not turn into monsters that hunt the living. They repeat, over and over, the routines of their former lives: folding clothes, tending displays, clocking in on time. The protagonist, Candace, coordinates the production of Gemstone Bibles at a publishing company. New York slowly empties, and she still walks into that empty building to work every day. It is hardly a noble stand. It looks more like habit taking her over: nobody needs those Bibles anymore, yet the work goes on. Here, the symptoms of the illness and the look of a working day are almost impossible to tell apart."
      ],
      [
        "小说里有一句话，把这一点说得很直白：“生活在一座城市里，就是参与并传播它那些荒谬的体系。早上醒来。上班。这同时也意味着享受这些体系，否则，谁能年复一年地重复同样的日常？”",
        "One line in the novel puts this plainly: “To live in a city is to take part in and to propagate its impossible systems. To wake up. To go to work in the morning. It is also to take pleasure in those systems because, otherwise, who could repeat the same routines, year in, year out?”"
      ],
      [
        "当然，《断裂》写的不只是惯性。Candace 是移民的女儿，疏离、旁观，多少还有些共谋；小说同样写消费、迁徙和怀旧。我在这里只取它关于“被日常吞没”的一面，因为这一面让我想到了自己。",
        "Of course, *Severance* is about more than inertia. Candace is an immigrant’s daughter, detached, an onlooker, and to some degree complicit; the novel is just as much about consumption, migration, and nostalgia. I take only one side of it here, the side about being swallowed by routine, because that side made me think of myself."
      ],
      [
        "一年前，我主动从管理岗位转到不带人的岗位，大幅缩减了工作时间，还开始兼职开 Uber。我并不想证明什么，只是不愿意让“X公司”或任何一个头衔成为我唯一的名字。",
        "A year ago, I moved from a management role to one with no reports, cut my working hours sharply, and began driving for Uber on the side. I did not set out to prove anything. I simply did not want “Company X,” or any title, to become my only name."
      ],
      [
        "韩炳哲在《倦怠社会》中指出，今天的社会不再主要靠外部的禁令运转，而是靠“你可以”：个体被塑造成“自身的企业家”，自己给自己加码，自己剥削自己。他把这种社会称为功绩社会（Leistungsgesellschaft）。申氏发热的患者像是这种逻辑的极端版本：没有人命令他们，他们还在干活。",
        "In *The Burnout Society*, Byung-Chul Han argues that today’s society no longer runs mainly on outside prohibition but on “you can”: individuals are shaped into “entrepreneurs of themselves,” who raise their own quotas and exploit themselves. He calls this the achievement society (Leistungsgesellschaft). The Shen Fever victims look like an extreme version of that logic: no one orders them, and they keep working."
      ],
      [
        "我并不是说开 Uber 让我挣脱了自我剥削。恰恰相反，它正是“自身的企业家”最标准的样子：自己排班，自己担风险，自己盯着评分和接单率。我只是换了自我剥削发生的地方。真正的差别有两点。第一，路况、车和身体的疲惫都是抽象不掉的东西。在大厂，我的工作停留在文档、会议和符号里，下班后常常觉得自己是飘着的；开车的时候，手在方向盘上，我知道自己在哪里。第二，这份活不是我的头衔。我能随时停下，是因为它只是兼职，别处还有收入撑着；对靠它吃饭的司机来说，这一点并不成立。",
        "I am not saying that driving for Uber freed me from exploiting myself. On the contrary, it is exactly the standard form of the “entrepreneur of oneself”: I set my own schedule, carry my own risk, and watch my own ratings and acceptance rate. I have only moved where it happens. The real difference is twofold. First, traffic, the car, and a tired body cannot be abstracted away. At the big company, my work stayed in documents, meetings, and symbols, and after hours I often felt I was floating; when I drive, my hands are on the wheel and I know where I am. Second, this work is not my title. I can stop at any time because it is only a side job and other income holds me up; for drivers who live on it, that is not true."
      ],
      [
        "所以我不觉得自己“打破”了什么。《断裂》只提醒了我一件小事：习惯会在不知不觉中替人做决定，最早的警告，是你已经说不出自己除了这份工作还是谁。我的做法只是其中一种，换别的方式也许同样有效。重要的是，还能自己说出那个名字。",
        "So I do not feel I have “broken” anything. *Severance* reminded me of only one small thing: habit makes decisions for you without your noticing, and the earliest warning is that you can no longer say who you are besides this job. My way is only one way, and others may work just as well. What matters is that you can still say that name yourself."
      ]
    ]
  },
  {
    "date": "2026-02-28",
    "title": "The One-Inch Gap",
    "category": "Novel",
    "book": {
      "cover": "vuong.jpeg",
      "title": "大地上我们转瞬即逝的绚烂 (On Earth We’re Briefly Gorgeous)",
      "author": "王鸥行 Ocean Vuong",
      "language": "Chinese",
      "country": "United States",
      "original": "English",
      "lines": ["Novel · Simplified Chinese edition", "A letter from a son, nicknamed Little Dog, to his mother, who cannot read it."]
    },
    "place": "于加州利弗莫尔\nLivermore, CA",
    "languages": ["Chinese", "English"],
    "prose": [
      [
        "在《大地上我们转瞬即逝的绚烂》中，王鸥行不断将越战的历史缩小至单个器官的尺寸，而眼睛则是他处理得最为锐利之处。这场战争过去常常是从远距离被审视的：从飞机上、在地图上、在伤亡数字中，以及后来在将难民归类为编号、受害者和待处理案卷的文件里。王鸥行避开了那种视角，转而投向那个进行凝视的肉身。在此，莫里斯·梅洛-庞蒂的理论大有裨益，因为他主张我们并非作为超然的旁观者去观察。我们是以身体的形式、从特定之处、带着局限去观察的。在王鸥行的手中，凝视不再是控制的工具，而成为了孤独与饥渴的象征。",
        "In *On Earth We’re Briefly Gorgeous*, Ocean Vuong keeps shrinking the history of the Vietnam War down to the size of a single organ, and the eye is where he does it most sharply. The war was often seen from a distance: from aircraft, on maps, in casualty counts, and later in the paperwork that sorted refugees into numbers, victims, and cases to be managed. Vuong turns away from that view and toward the body that does the looking. Here Maurice Merleau-Ponty is useful, because he argued that we do not see as detached observers. We see as bodies, from one place, with limits. In Vuong’s hands the gaze stops being a tool of control and becomes a sign of loneliness and hunger."
      ],
      ["这一转变发生在小狗对母亲说话、回忆起关于眼睛的一句评语时：", "The turn comes when Little Dog, speaking to his mother, recalls a remark about the eye:"],
      [
        "“你有一次告诉我，人的眼睛是神最孤独的创造。世上有多少东西会穿过瞳孔，可它什么都留不下。一只眼睛孤零零地待在自己的眼眶里，完全不知道一英寸之外，还有完全相同的另一只，一样饥渴，一样空洞。”（王鸥行 14）",
        "“You told me once that the human eye is the most lonely creation of God. How much of the world passes through the pupil and still it holds nothing? The eye, alone in its socket, doesn’t even know there’s another one just like it, an inch away, equally hungry, equally empty.” (Vuong 14)"
      ],
      [
        "王鸥行拒绝奉承眼睛。它不是心灵的窗户，也不是笛卡尔式那种将图像传输给背后某个大脑的透镜景象。对梅洛-庞蒂而言，进行感知的是“身体主体”（le corps-sujet）：即整体的身体，其视觉受限于它所处的位置和所能触及的范围。王鸥行向我们展示了处于极度局限中的身体。眼睛“孤零零地待在自己的眼眶里”，汲取一切却一无留存（“可它什么都留不下”），甚至无法看见一英寸之外的同伴。这道间距虽微小却无法逾越。双眼处于同一个颅骨内，朝向同一个方向，却彼此浑然不知。",
        "Vuong refuses to flatter the eye. It is not the window to the soul, and it is not the Cartesian picture of a lens that feeds images to a mind sitting somewhere behind it. For Merleau-Ponty, the one who perceives is the body-subject (le corps-sujet): the whole body, whose seeing is bound by where it stands and what it can reach. Vuong gives us that body at its most limited. The eye sits “alone in its socket,” takes in everything and keeps none of it (“still it holds nothing”), and cannot see its twin an inch away. The gap is tiny and cannot be crossed. Both eyes sit in the same skull, facing the same way, and neither knows the other is there."
      ],
      [
        "那微小的间距象征着一道更大的鸿沟。小狗与母亲共处一室，但母亲读不懂英文，两人都无法将战争留下的创伤完整地递交给对方。双眼“一样饥渴，一样空洞”：彼此相似，处于相同的境遇，却无法向对方确认这一点。在这幅图景中，战争造成的流离失所不仅是地图上的距离，更是身体内部的断裂，以及同处一室的肉体之间的隔阂。",
        "That small gap stands for a larger one. Little Dog and Rose share a home, but Rose cannot read English, and neither of them can fully hand the other what the war left behind. The eyes are “equally hungry, equally empty”: alike, in the same condition, and unable to confirm it to each other. In this picture, the displacement of war is not only distance on a map. It is also a break inside the body, and between bodies in the same room."
      ],
      [
        "这段文字并未终结于绝望。就在孤独的瞳孔之后，小说提供了一个短暂的交汇时刻：",
        "The passage does not end in despair. Right after the lonely pupil, the novel offers a brief moment of contact:"
      ],
      ["“你打开前门，对着我人生中的第一场雪，耳语道：看。”（王鸥行 14）", "“You opened the front door to my first snow, whispered: Look.” (Vuong 14)"],
      [
        "母亲那单单一个字的“看”，是一种关爱的行为。在这个她无法阅读其语言的国家里，她几乎毫无权力，但她依然能指引儿子看向世界，并邀他一同凝视。母子二人并非从外部面对景象的旁观者；他们每个人都能看到对方在凝视。她没有去解释这场雪，她只是打开门，让雪映入眼帘。雪，就像所有穿过瞳孔的事物一样，什么都不会留下；它终将融化。重要的不是留住它，而是在同一个瞬间，共同凝视它。",
        "Rose’s one word, “Look,” is an act of care. She has little power in a country whose language she cannot read, but she can still point her son at the world and ask him to see it with her. Mother and son are not spectators facing a scene from outside; each can see the other seeing. She does not explain the snow. She opens the door and lets it come into view. Snow, like everything that passes through the pupil, leaves nothing behind; it will melt. What matters is not keeping it but seeing it together, at the same moment."
      ],
      [
        "这就是王鸥行微观层面上的美学政治。遥远而官方的视力试图通过计数、记录和占有来掌控其所见之物；母亲的“看”则毫无此求。它提供的是陪伴。瞳孔依然空洞，但在这一刻，那道间距得到了回应。不是通过语言，而是通过两个人对同一事物共同的见证。一页书页固然承载不了整部小说，但它展示了一种值得贯穿全书的方法：当语言和历史失效时，共同的凝视依然能够宣告：我们在此，并且活着。",
        "That is Vuong’s politics of beauty in small. The distant, official view tries to master what it sees by counting it, recording it, and holding on to it. Rose’s “Look” asks for none of that. It offers company. The pupils stay empty, but for a moment the gap is answered, not with words, but by two people witnessing the same thing. One page cannot carry a whole novel, but it shows a method worth following through the rest of the book: when language and history fail, shared seeing can still say that we are here and alive."
      ]
    ]
  },
  {
    "date": "2020-05-01",
    "title": "The Color of Law",
    "slug": "the-color-of-law",
    "place": "于加州圣克拉拉\nSanta Clara, CA",
    "languages": ["Chinese", "English"],
    "category": "History",
    "book": {
      "cover": "color_of_law.jpg",
      "title": "The Color of Law",
      "author": "Richard Rothstein",
      "language": "English",
      "country": "United States",
      "original": "English",
      "lines": ["History · Liveright, 2017", "A forgotten history of how government policy at every level segregated American neighborhoods."]
    },
    "blocks": [
      [
        "epi",
        "“种族隔离渗透到个体生活的方方面面，没有一个人可以置身事外，从起床到睡觉，从出生到死亡，甚至是早在你出生之前就早已决定的宿命。”",
        "“Segregation seeped into every part of an individual’s life. No one could stand outside it: from waking to sleeping, from birth to death, even a fate settled before you were born.”"
      ],
      [
        "p",
        "这个5月我读完并想推荐的，是几年前就名声大噪的纪实报告文学《法律的颜色》。",
        "This May, the book I finished and want to recommend is *The Color of Law*, the nonfiction report that made a splash a few years ago."
      ],
      ["h", "为什么想到看这本书", "Why I picked up this book", "01"],
      [
        "p",
        "从2012年我刚来美国直到现在，每个去过的城市，西雅图、芝加哥、巴尔的摩和底特律，事实上的居住隔离到处都是，甚至在过去经济复苏的黄金十年里愈演愈烈。2012年我刚来西雅图时的一些非裔社区在短短几年时间里已经全被新建的房地产取代，而生活成本的攀升使得非裔社区似乎一夜之间消失在了我们的生活中。(Beason, 2016)",
        "Ever since I came to the US in 2012, in every city I have been to, Seattle, Chicago, Baltimore and Detroit, de facto residential segregation is everywhere, and it grew worse even during the past golden decade of economic recovery. When I first came to Seattle in 2012, some Black neighborhoods were, within just a few years, entirely replaced by new development, and as the cost of living climbed, Black neighborhoods seemed to vanish from our lives overnight. (Beason, 2016)"
      ],
      [
        "p",
        "此外，今年年初在准备加州房产销售牌照申请的时候，在community college里上了Real Estate Principles/Practices这两门课。在课堂中我们被强调过，作为房产经纪和销售在买卖房屋的过程中，需要遵循的各种各样的种族平等伦理。不同实操情形下的案例能出100道迷惑人的选择题。",
        "Besides, earlier this year, while preparing my application for a California real estate salesperson license, I took two courses at a community college, Real Estate Principles and Real Estate Practices. In class we were told again and again about the ethics of racial equality that agents must follow when buying and selling homes. The case studies from different real-world situations could fill a hundred confusing multiple-choice questions."
      ],
      [
        "p",
        "而这本书吸引我的也正是，它从传统20世纪60年代对于宏观非裔民权运动的叙事，跨越到了美国内战前后至今，并以对美国政府住房政策的审视为切入点，深入探究了民间、政府、企业和法院各个行为个体在美国居住种族隔离中所扮演的角色以及其作为或不作为而产生的后果。",
        "What drew me to this book is that it moves beyond the traditional 1960s narrative of the broad Black civil rights movement and spans the time from around the Civil War to the present. Using a review of American government housing policy as its entry point, it digs into the roles that private citizens, government, business and the courts played in American residential segregation, and into the consequences of what they did and failed to do."
      ],
      ["h", "“非裔的原罪”", "“The Original Sin of Black America”", "02"],
      [
        "p",
        "我们往往会想起1968年小马丁路德金的遇刺以及后来包含了《公平住房法案》的扩大版1968年民权法案的通过来作为讨论有色人种民权的分水岭。似乎《公平住房法案》至少在法律上保障了有色人种自由房屋买卖的权利，非裔的住房权利就有了法律的保障。这样的想法现在看来就和1865年废除奴隶制后以为非裔民权就来到一样不负责任地过于乐观了。而这正是作者Richard Rothstein想要呈现给读者的一个更大的视角，即事实上光检视法律本身而忽视历史、政府以及社会的影响，我们是无法正确认识非裔居住种族隔离的实际状况的。",
        "We often take the assassination of Martin Luther King Jr. in 1968, and the passage soon afterward of the expanded Civil Rights Act of 1968, which included the Fair Housing Act, as the watershed in discussing the civil rights of people of color. It seems that the Fair Housing Act at least guaranteed in law the freedom to buy and sell homes, so that Black housing rights had legal protection. Looking back now, that thought is as irresponsibly optimistic as believing that Black civil rights arrived with the abolition of slavery in 1865. This is exactly the larger view that the author, Richard Rothstein, wants to give his readers: if we examine only the law itself and ignore the influence of history, government and society, we cannot correctly understand the real state of Black residential segregation."
      ],
      [
        "p",
        "在本书的前几章，作者详细地列举了从20世纪20年代到70年代大量的事实来佐证其核心论点，即种族隔离是由政府、法院到民间有意识地长期践行于社会生活方方面面的一项非成文的公共行为，而这一行为大大阻碍了非裔社群实现真正的财富增值融入中产阶级的权利。而随着社会贫富分化的日益加大，大部分的非裔社群已经彻底被剥夺了实现阶层跨越的可能性，社群内由经济主导的自发居住种族隔离而由此形成。这可不就是“非裔的原罪”吗？",
        "In the first chapters, the author lists a great many facts from the 1920s to the 1970s in support of his central argument: that segregation was an unwritten public practice, carried out consciously and over the long term, in every part of social life by government, courts and private citizens alike, and that it greatly obstructed the Black community’s right to build real wealth and enter the middle class. As the gap between rich and poor has widened, most of the Black community has been stripped entirely of any chance of crossing class lines, and an economically driven, spontaneous residential segregation has formed within the community itself. Isn’t that exactly the “original sin” of Black America?"
      ],
      ["sub", "", "If San Francisco, Then Everywhere?"],
      [
        "p",
        "要知道加州一直以来是美国自由和民主主义的急先锋，所以如果旧金山都成了这样了，但美国其他的地方呢？",
        "California has long been the vanguard of American liberty and democracy, so if even San Francisco turned out this way, what about the rest of America?"
      ],
      [
        "p",
        "20世纪50年代大量的非裔工人阶级涌入到加州旧金山湾区寻求更多的工作机会，而原有的各个社区风声鹤唳，Milpitas的业主们不得不立即通过紧急通过法案不允许建造公寓楼，迫使工作在Milpitas福特汽车工厂的非裔工人移居到更远的San Jose和Richmond。而在East Palo Alto，加州房地产委员会的主席Floyd Lowe采取的相反的方案，他立即呼吁所有的East Palo Alto的白人业主抛售他们的房产，使得East Palo Alto自发转变成一个非裔社区。",
        "In the 1950s, large numbers of Black working-class people poured into the San Francisco Bay Area in search of more work, and the existing neighborhoods were on edge. Homeowners in Milpitas had to rush through an emergency ordinance forbidding the construction of apartment buildings, forcing the Black workers at Milpitas’s Ford plant to move farther away, to San Jose and Richmond. In East Palo Alto, Floyd Lowe, the chairman of the California real estate board, took the opposite approach: he immediately called on all of East Palo Alto’s white homeowners to sell their properties, which turned East Palo Alto, on its own, into a Black community."
      ],
      [
        "p",
        "民间自发的力量尚且大到如此，政府和金融行业的暗箱配合使得居住种族隔离进一步更快地变为了现实。银行开始不愿意批准非裔购房者的抵押贷款申请，即使他们的收入和白人同事一样多，而联邦住房管理局更进一步，不但不批准非裔购房者在其他白人社区的购房申请，同时也拒绝了所有的白人购房者在多种族社区以及非裔社区的购房申请。",
        "If private forces alone could do this much, the quiet cooperation of government and the financial industry made residential segregation a reality even faster. Banks became unwilling to approve mortgage applications from Black buyers even when their income was the same as that of their white colleagues, and the Federal Housing Administration went further: it not only refused Black buyers’ applications to buy in white neighborhoods, but also refused all white buyers’ applications in mixed-race and Black neighborhoods."
      ],
      [
        "p",
        "民间、银行以及政府的多层联动最终在仅仅6年的时间里，把曾经完全是白人社区的East Palo Alto变为了82%非裔居民的名副其实的非裔社区。直到60年后的2010年，East Palo Alto的有色人种依然占据了高达93.8%。",
        "Through this layered coordination among private citizens, banks and government, in only six years East Palo Alto, once an entirely white neighborhood, became a Black community in every sense, with 82% Black residents. Sixty years later, in 2010, people of color still made up as much as 93.8% of East Palo Alto."
      ],
      ["h", "我们不能脱离经济来谈空洞的“公平”", "We can’t talk about empty “fairness” without talking about economics", "03"],
      [
        "p",
        "你可能会惊异于上文中所提到的，在20世纪50年代，同样在工厂里工作的非裔工人阶级和白人工人阶级薪资并无差别。然而短短70年的时间，如果算上1968年《公平住房法案》的颁布，也就是短短20-30年的时间，怎么就使得黑人与白人的阶层差异扩大到如此的地步呢？",
        "You may be surprised by what I mentioned above: in the 1950s, Black and white working-class people doing the same factory work were paid no differently. Yet in just 70 years, or, counting from the passage of the Fair Housing Act in 1968, just 20 to 30 years, how did the class gap between Black and white people grow this wide?"
      ],
      [
        "p",
        "作者Richard Rothstein以纽约长岛的Levittown小镇作为例子，阐述了二战结束至石油危机前后美国飞速发展的经济引擎是如何甩掉非裔群体的。1948年，Levittown的住房售价为8000美元（约合当前7万美元）。而现在，Levittown住宅售价为35万美金及以上。1948年买下这些住房的工人阶级白人家庭，在经过三代之后，积累了20多万美元的财富。而因为大多数非裔是无法在Levittown甚至成千上万个类似的小镇购置房产的。他们受居住种族隔离影响往往只能租住在一些贫困的社区，即使在被允许购置房产的区域购置了房产，其房产增值的价值远远落后于一些好的社区。比较Levittown小镇20多万美元的增值，非裔的近郊住宅区资产增值不过区区4.5万美元。",
        "Using Levittown, on Long Island in New York, as his example, the author Richard Rothstein explains how the American economic engine, which grew so fast from the end of World War II to around the oil crisis, left Black communities behind. In 1948, a house in Levittown sold for $8,000 (about $70,000 today). Today, Levittown homes sell for $350,000 and up. A white working-class family that bought one in 1948 had, three generations later, accumulated more than $200,000 in wealth. Most Black families could not buy a home in Levittown, or in the thousands of similar towns. Because of residential segregation they could often only rent in poor neighborhoods, and even when they bought in areas where they were allowed to, the appreciation lagged far behind that of better neighborhoods. Compared with Levittown’s appreciation of more than $200,000, the homes Black families owned in the suburbs gained a mere $45,000."
      ],
      [
        "p",
        "即便抛开区域限制，在购置房产的贷款申请上，联邦住房管理局给予中下层中产阶级白人购置房产各种各样的优惠和好处也进一步加深了种族间房地产所有权的差距。而使得这些充满种族歧视政策堂而皇之实行的背书，更是司法体系不惜纵容违宪而迎合白人社会和政府对于“种族融合政策导致冲突”的错误认识。",
        "Even setting aside regional restrictions, the many benefits the Federal Housing Administration gave lower-middle-class white buyers in mortgage applications widened the racial gap in home ownership further. The endorsement that let these discriminatory policies be carried out in broad daylight came from a judicial system that, even at the cost of tolerating unconstitutional acts, catered to the mistaken belief of white society and government that “integration policies lead to conflict.”"
      ],
      [
        "p",
        "受到诸多不公平公共政策的影响，经济的繁荣发展一点也没有给非裔工人阶级带来财富上的升值，从二战结束到60年代末，美国的GDP翻了一番，白人中产阶级的财富通过购置房产资本市场的参与而得到不断的积累升值。而与此同时，非裔工人阶级因为受限不能参与房地产投资获利，更要承受收入增长停滞和受通货膨胀影响房租开支增大的多重经济重压，因此与白人中产阶级的差距越拉越大，直到沦为下层中产阶级。",
        "Under the influence of many unfair public policies, economic prosperity brought the Black working class no rise in wealth. From the end of World War II to the end of the 1960s, American GDP doubled, and the wealth of the white middle class grew steadily through participation in the housing capital market. Meanwhile the Black working class, barred from profiting from real estate investment, also bore the double economic pressure of stagnant income growth and rent rising with inflation, so its gap with the white middle class kept widening until it was reduced to the lower middle class."
      ],
      [
        "p",
        "如果我们以1967/68年白人和非裔中产阶级的收入中位数为起点，从皮尤研究中心的数据可以看出，初期非裔中产阶级的低起点所带来的长期世代传递的收入差距的影响是如此深远的，以至于到2016年非裔人均年收入中位数还不及1970年白人换算通货膨胀后的年收入中位数。",
        "If we take the median income of white and Black middle-class families in 1967/68 as the starting point, Pew Research Center data show how deeply the long-term, generation-to-generation effect of the Black middle class’s low starting point reaches: by 2016, the median annual income of Black households was still below the median annual income of white households in 1970, once adjusted for inflation."
      ],
      ["h", "我们亚裔从来不会置身事外", "We Asian Americans have never stood outside", "04"],
      [
        "p",
        "作为亚裔，我们从来也永远不会置身于民权斗争之外。我想要特别提出的是，上文中提到的这些歧视性政策并不只针对非裔，华裔、日裔以及拉美裔等其他有色人种同样身在其中；直到80年代更多的亚裔新移民到来，美国才开始对亚裔进行种族细分。",
        "As Asian Americans, we have never been, and never will be, outside the struggle for civil rights. I want to point out that the discriminatory policies described above were not aimed at Black people alone: Chinese, Japanese, Latino and other people of color were caught up in them as well, and only in the 1980s, as more new Asian immigrants arrived, did the US begin to subdivide Asians as a racial category."
      ],
      [
        "p",
        "作为新一代高收入移民的亚裔在这里享有的基本生存、居住和受教育权，均是一代代黑人族裔带领其他有色人种共同奋斗多年的结果。在上世纪的民权运动中，我们亚裔也是积极的参与者，即使在亚裔收入比白人还高的现在，任何脱离黑人拉美族裔，而单独讨论亚裔普遍民权的想法都是片面化和虚妄的。",
        "The basic rights to live, to reside and to be educated that we enjoy here, as a new generation of high-income immigrants, are the result of generations of Black Americans leading other people of color in a long common struggle. In the civil rights movement of the last century, we Asian Americans were active participants too. Even now, when Asian incomes are higher than white incomes, any idea of discussing the civil rights of Asian Americans in general, apart from Black and Latino communities, is one-sided and illusory."
      ]
    ],
    "refs": [
      {
        "t": "Beason, Tyrone. “Seattle’s Vanishing Black Community.” *The Seattle Times*, The Seattle Times Company, 28 May 2016.",
        "u": "http://www.seattletimes.com/pacific-nw-magazine/seattles-vanishing-black-community/"
      },
      {
        "t": "“Chapter 3: Demographic & Economic Data, by Race.” *Pew Research Center’s Social & Demographic Trends Project*, 31 Dec. 2019.",
        "u": "http://www.pewsocialtrends.org/2013/08/22/chapter-3-demographic-economic-data-by-race/"
      },
      {
        "t": "“Demographic Profile: City of East Palo Alto.” *Bay Area Census*. MTC-ABAG Library. Retrieved June 6, 2017."
      },
      {
        "t": "Kochhar, Rakesh, and Anthony Cilluffo. “Income Inequality in the U.S. Is Rising Most Rapidly Among Asians.” *Pew Research Center’s Social & Demographic Trends Project*, 31 Dec. 2019.",
        "u": "http://www.pewsocialtrends.org/2018/07/12/income-inequality-in-the-u-s-is-rising-most-rapidly-among-asians/"
      },
      {
        "t": "Rothstein, Richard. *The Color of Law: A Forgotten History of How Our Government Segregated America*. Liveright, 2018."
      },
      {
        "t": "Semuels, Alana. “Chicago’s Awful Divide.” *The Atlantic*, Atlantic Media Company, 29 Mar. 2018.",
        "u": "http://www.theatlantic.com/business/archive/2018/03/chicago-segregation-poverty/556649/"
      }
    ]
  },
  {
    "date": "2020-04-20",
    "title": "Freedom as Privilege",
    "slug": "freedom-as-privilege",
    "category": "Ethnography",
    "book": {
      "cover": "chungking_mansions.jpg",
      "title": "世界中心的貧民窟：香港重慶大廈 (Ghetto at the Center of the World: Chungking Mansions)",
      "author": "Gordon Mathews",
      "language": "Traditional Chinese",
      "country": "Hong Kong",
      "original": "English",
      "lines": [
        "Ethnography · Traditional Chinese edition, 3rd ed.",
        "An ethnography of Chungking Mansions in Hong Kong and the traders, migrants and asylum seekers who make a living there."
      ]
    },
    "place": "于加州圣克拉拉\nSanta Clara, CA",
    "languages": ["Chinese", "English"],
    "photo": {
      "file": "chungking_mansions_reading.jpg",
      "alt": "The traditional Chinese edition of Chungking Mansions resting on an open illustrated book"
    },
    "prose": [
      [
        "我们往往将自己的自由归功于独立的思想，却忘记了，能够自由选择如何生活，本身就可能是一种特权。",
        "We tend to credit our freedom to independent thinking, forgetting that being free to choose how to live may itself be a privilege."
      ],
      [
        "读Gordon Mathews的《重庆大厦》，最令我思考的并不是全球化如何将世界各地的人汇聚在香港的一栋建筑里，而是那些看似拥有无限流动可能的人，实际上拥有多少选择自己人生的自由。",
        "Reading Gordon Mathews’s *Chungking Mansions*, what made me think most was not how globalization draws people from all over the world into a single building in Hong Kong, but how much freedom people who seem to have limitless mobility actually have to choose their own lives."
      ],
      [
        "Mathews将重庆大厦中的跨境贸易称为“低端全球化”。来自南亚、非洲等地的小商人、移民与寻求庇护者，在有限的资本、复杂的法律制度与不稳定的身份之间寻找生存机会。这里的全球化并非跨国企业的扩张，而是普通人在全球经济的缝隙中谋生。然而，流动并不必然意味着自由。对某些人而言，跨越国界是一种选择；对另一些人而言，却是维持生计的必要条件。一个人可以离开故乡，并不意味着他同样拥有留下的自由。",
        "Mathews calls the cross-border trade in Chungking Mansions “low-end globalization.” Small traders, migrants and asylum seekers from South Asia, Africa and elsewhere look for a way to survive amid scarce capital, a tangle of legal rules and unstable status. The globalization here is not the expansion of multinational corporations but ordinary people making a living in the cracks of the global economy. Yet mobility does not necessarily mean freedom. For some, crossing a border is a choice; for others, it is a necessary condition of getting by. That a person can leave home does not mean they are equally free to stay."
      ],
      [
        "当一个人无法承担拒绝的代价时，我们还能在多大程度上称他的选择为自由？书中那些游走于法律灰色地带的交易，以及身份与经历难以核实的寻求庇护者，让这个问题更加复杂。我们习惯于用诚实、守法与个人责任判断他人，却容易忽略，不同的人并不总是拥有相同的条件去实践这些原则。",
        "When a person cannot afford the cost of refusing, to what extent can we still call their choice free? The deals in the book that run through legal gray areas, and the asylum seekers whose identities and histories are hard to verify, make the question more complicated. We are used to judging others by honesty, lawfulness and personal responsibility, and we easily overlook that different people do not always have the same conditions in which to practice these principles."
      ],
      [
        "但理解处境，并不意味着取消责任。贫困不能自动使欺骗正当化，生存压力也不能成为伤害他人的充分理由。然而，如果我们只强调个人责任，却忽略一个人所面对的现实限制，那么所谓的道德判断，也可能只是将自己的生活条件当作普遍标准。",
        "But understanding someone’s situation does not mean canceling their responsibility. Poverty cannot automatically justify deception, and the pressure to survive is not sufficient reason to harm others. Yet if we stress only personal responsibility and ignore the real constraints a person faces, then so-called moral judgment may be nothing more than taking the conditions of our own lives as a universal standard."
      ],
      [
        "我们不应该因为一个人的处境而取消他的道德责任，但也不应该因为自己拥有选择的自由，就假定别人拥有同样的自由。这让我重新审视自己曾经对于自由的理解。我曾认为，真正的自由不是服从社会，也不是刻意反抗社会，而是拥有独立的价值标准，按照自己认可的原则生活。但这种理解似乎忽略了一个前提：一个人必须拥有一定的现实条件，才能承担不服从的后果。",
        "We should not cancel a person’s moral responsibility because of their circumstances, but neither should we assume, because we have the freedom to choose, that others have the same freedom. This made me re-examine my own understanding of freedom. I used to think that true freedom was neither obeying society nor deliberately defying it, but having independent values and living by principles one endorses. Yet this understanding seems to overlook a precondition: one must have certain real conditions before one can bear the consequences of not complying."
      ],
      [
        "我们赞美那些敢于辞职、远行、追求理想的人，却很少追问他们是否拥有承担失败的经济条件。我们鼓励人们忠于自我，却容易忽略，对于某些人而言，生存本身已经耗尽了选择的余地。我们以为自己比别人更加独立，或许只是因为我们拥有更多不必妥协的条件。",
        "We applaud those who dare to quit their jobs, travel far and chase their ideals, yet we seldom ask whether they have the financial means to bear failure. We encourage people to be true to themselves, and easily overlook that, for some, survival itself has already used up all room for choice. We think we are more independent than others, perhaps only because we have more conditions under which we do not have to compromise."
      ],
      [
        "当然，重庆大厦中的人们并非只是被动承受命运。他们在制度的限制中寻找机会，在不确定性中建立跨国贸易网络，展现了令人惊讶的能动性。但这种能动性越是突出，我们越不应将他们面对的困难浪漫化为奋斗精神的胜利。",
        "Of course, the people in Chungking Mansions are not merely passive victims of fate. Within the limits of institutions they look for openings, and amid uncertainty they build transnational trading networks, showing surprising agency. But the more striking this agency is, the less we should romanticize the hardships they face as a triumph of striving."
      ],
      [
        "或许，真正的自由始终包含两个维度：既有独立判断如何生活的能力，也有将这种判断付诸实践的现实可能。缺少前者，我们可能成为社会期待的附庸；缺少后者，即使知道自己想要什么，也未必能够选择。",
        "Perhaps true freedom always has two dimensions: the ability to judge independently how to live, and the real possibility of putting that judgment into practice. Without the former, we may become appendages of social expectation; without the latter, even knowing what we want, we may not be able to choose it."
      ],
      [
        "读完《重庆大厦》，我开始觉得，我们不应仅仅追问一个人为什么没有选择另一种生活，更应该追问，他是否真正拥有过那种选择。",
        "After finishing *Chungking Mansions*, I began to feel that we should not only ask why a person did not choose another life, but whether they ever truly had that choice."
      ],
      [
        "因为自由最深刻的不平等，或许不在于有些人能够作出更好的选择，而在于有些人甚至拥有选择错误、承担失败，然后重新开始的余地。而一个真正自由的社会，不应只赞美那些勇于选择的人，更应该让尽可能多的人拥有选择的可能。",
        "For the deepest inequality of freedom may lie not in some people making better choices, but in some people having room even to choose wrongly, bear failure, and begin again. A truly free society should not merely praise those who are brave enough to choose; it should give as many people as possible the possibility of choosing."
      ]
    ]
  },
  {
    "date": "2020-05-04",
    "title": "The Ignorance of the Successful",
    "slug": "ignorance-of-the-successful",
    "category": "Economics",
    "book": {
      "cover": "poor_economics.jpg",
      "title": "Poor Economics",
      "author": "Abhijit Banerjee and Esther Duflo",
      "language": "English",
      "country": "United States",
      "original": "English",
      "lines": [
        "Economics · PublicAffairs, 2011",
        "Two economists on how the poor actually live and decide, drawn from field experiments around the world."
      ]
    },
    "place": "于加州圣克拉拉\nSanta Clara, CA",
    "languages": ["Chinese", "English"],
    "photo": {
      "file": "poor_economics_reading.jpg",
      "alt": "Poor Economics lying on a wooden table, on top of a Japanese sushi magazine"
    },
    "prose": [
      [
        "如果一个人的选择受到环境塑造，那么我们所谓的个人成就，究竟有多少真正属于自己？",
        "If a person’s choices are shaped by their environment, how much of what we call personal achievement truly belongs to us?"
      ],
      [
        "读《Poor Economics》，最令我思考的并不是贫穷的人为什么难以摆脱贫困，而是那些从未真正经历过贫困的人，为什么如此轻易地相信成功完全来自自己的努力。",
        "Reading *Poor Economics*, what made me think most was not why poor people find it so hard to escape poverty, but why those who have never truly experienced poverty so easily believe that success comes entirely from their own effort."
      ],
      [
        "我们习惯于赞美勤奋、自律、远见与理性，并将它们视为成功者的个人品质。然而，我们很少追问，这些品质得以发挥作用的前提是什么。良好的教育、稳定的家庭、充足的资本、可以依赖的社会关系，甚至失败后重新开始的机会，往往早已为某些人的人生铺好了道路。",
        "We are used to praising diligence, self-discipline, foresight and rationality, and to treating them as the personal qualities of the successful. Yet we seldom ask what has to be in place for these qualities to work. A good education, a stable family, ample capital, social connections one can rely on, even the chance to start over after failing: for some people, these have often paved the road of life long in advance."
      ],
      [
        "《Poor Economics》通过对贫困者日常决策的研究，让我们看到，那些看似缺乏理性的选择，往往受到信息、资源与风险的深刻限制。贫困并不意味着缺乏判断力，而是意味着即使作出正确的判断，也未必拥有实现它的条件。",
        "By studying the everyday decisions of the poor, *Poor Economics* lets us see that choices that seem to lack rationality are often deeply constrained by information, resources and risk. Poverty does not mean a lack of judgment; it means that even when one judges correctly, one may not have the conditions to act on that judgment."
      ],
      [
        "但真正令我不安的，是这种不平等如何被成功者逐渐遗忘。当一个人从未需要为某些资源付出代价，他便容易将这些资源视为世界本来的样子；当一个人从未真正承担失败的后果，他便容易将别人的失败理解为能力的不足。",
        "But what truly unsettles me is how the successful gradually forget this inequality. When a person has never had to pay a price for certain resources, they easily take those resources to be how the world simply is; when a person has never truly borne the consequences of failure, they easily read other people’s failure as a shortfall of ability."
      ],
      [
        "于是，幸运被解释为努力，优势被理解为才能，而成功则成为证明自身优越的依据。更令人讽刺的是，拥有最多选择的人，往往最容易相信每个人都拥有同样的选择。",
        "And so luck is explained as effort, advantage is understood as talent, and success becomes the proof of one’s own superiority. More ironic still, those with the most choices are often the readiest to believe that everyone has the same choices."
      ],
      [
        "当然，承认环境对成功的影响，并不意味着否定个人努力。一个人的勤奋与能力可以是真实的，他所享有的优势也同样真实。问题不在于成功是否值得肯定，而在于我们是否有资格将自己的成功经验奉为普遍规律。",
        "Of course, acknowledging the influence of environment on success does not mean denying individual effort. A person’s diligence and ability can be real, and so can the advantages they enjoy. The question is not whether success deserves recognition, but whether we are entitled to elevate our own experience of success into a universal law."
      ],
      [
        "我逐渐意识到，特权最隐蔽的形式，或许不是拥有别人没有的资源，而是拥有这些资源，却从未意识到它们的存在。当我们把成功完全归功于自己，便很容易把失败完全归咎于他人。个人奋斗的叙事由此不再只是自我肯定，也可能成为对社会不平等的合理化。",
        "I have gradually come to realize that the most hidden form of privilege may not be having resources that others lack, but having them without ever being aware that they exist. When we credit our success entirely to ourselves, it becomes easy to blame others entirely for their failures. The narrative of individual striving then ceases to be merely self-affirmation and may become a rationalization of social inequality."
      ],
      [
        "读完这本书，我想，真正值得警惕的不是成功者的骄傲，而是成功者的无知：他们或许真诚地相信自己的一切都来自努力，却从未意识到，连能够相信努力必有回报，本身都可能是一种幸运。",
        "Having finished the book, I think what deserves real vigilance is not the pride of the successful but their ignorance: they may sincerely believe that everything they have comes from effort, without ever realizing that even being able to believe that effort will surely be rewarded may itself be a stroke of luck."
      ],
      [
        "一个人真正的清醒，或许不是认识到自己有多么努力，而是终于能够分辨，自己究竟创造了什么，又继承了什么。",
        "A person’s true clarity may lie not in recognizing how hard they have worked, but in finally being able to tell what they created and what they inherited."
      ]
    ]
  },
  {
    "date": "2024-02-18",
    "title": "Knowledge and Understanding",
    "slug": "knowledge-and-understanding",
    "category": "Novel",
    "book": {
      "cover": "when_we_cease.jpg",
      "title": "When We Cease to Understand the World",
      "author": "Benjamín Labatut",
      "language": "English",
      "country": "Spain",
      "original": "Spanish",
      "lines": [
        "Novel · Pushkin Press, 2020",
        "A fictionalized account of scientists and mathematicians, from Fritz Haber to Werner Heisenberg, at the edge of what can be understood."
      ]
    },
    "place": "于加州利弗莫尔\nLivermore, CA",
    "languages": ["Chinese", "English"],
    "photo": {
      "file": "when_we_cease_reading.jpg",
      "alt": "When We Cease to Understand the World standing on a wooden table beside a succulent, a cup of coffee, an apple and a baked cheese roll"
    },
    "prose": [
      [
        "我们习惯于相信，知识的增长意味着人类对世界的理解不断加深。科学发现越多，未知便越少；技术越先进，人类便越接近真理。",
        "We are used to believing that the growth of knowledge means a deepening human understanding of the world. The more science discovers, the less remains unknown; the more advanced technology becomes, the closer humanity comes to the truth."
      ],
      [
        "但读完《When We Cease to Understand the World》，我开始怀疑：当我们越来越有能力改变世界时，是否反而越来越难以理解自己所创造的现实？",
        "But after finishing *When We Cease to Understand the World*, I began to wonder: as we become ever more capable of changing the world, do we find it ever harder to understand the reality we ourselves have created?"
      ],
      [
        "人类已经能够探索宇宙的起源、预测遥远的未来，甚至通过数学公式揭示肉眼无法观察的自然规律。量子力学支撑着现代科技的诸多成就，却也不断挑战我们关于现实、因果与确定性的直觉。我们可以精确地运用某种理论，却未必能够以熟悉的方式理解它所描述的世界。",
        "Humans can now explore the origin of the universe, predict the distant future, and even use mathematical formulas to reveal laws of nature that the naked eye cannot observe. Quantum mechanics underpins many achievements of modern technology, yet it keeps challenging our intuitions about reality, causality and certainty. We can apply a theory with precision without necessarily being able to understand, in any familiar way, the world it describes."
      ],
      [
        "我们掌握了操纵世界的工具，却未必拥有与这种力量相称的理解。",
        "We have mastered the tools to manipulate the world, but not necessarily an understanding that matches that power."
      ],
      [
        "而真正令我不安的，并不是科学存在无法解释的现象，而是这种理解与能力之间不断扩大的距离。数学不再只是描述现实的语言，它所支撑的技术与制度也在重塑现实本身。我们创造出越来越复杂的系统，却逐渐难以预见它们将如何改变社会，甚至改变我们对于人之所以为人的理解。",
        "And what truly unsettles me is not that science contains phenomena it cannot explain, but the ever-widening distance between understanding and capability. Mathematics is no longer only a language for describing reality; the technologies and institutions it supports are reshaping reality itself. We build ever more complex systems, yet find it increasingly hard to foresee how they will change society, or even our understanding of what makes a human being human."
      ],
      [
        "这让我想到书中那些不断逼近知识边界的科学家。他们越是深入探索宇宙的秩序，越可能遭遇某种无法言说的虚无。曾经给予人类确定感的理性，最终也可能迫使我们直面自身认知的局限。",
        "This brings to mind the scientists in the book who keep pressing against the edge of knowledge. The deeper they probe the order of the universe, the more likely they are to meet a kind of inexpressible void. The rationality that once gave humanity a sense of certainty may in the end force us to face the limits of our own cognition."
      ],
      [
        "或许，最深刻的恐惧并非来自未知，而是来自这样一种矛盾：我们明明知道得越来越多，却越来越无法确定这些知识将把我们带向何处。",
        "Perhaps the deepest fear comes not from the unknown but from this contradiction: we clearly know more and more, yet we are less and less able to be sure where this knowledge will take us."
      ],
      [
        "当一个人无法想象或面对自己的未来时，焦虑便不再只是对某个具体危险的恐惧，而可能成为对自身存在的怀疑。对于整个人类而言，是否也存在类似的困境？当科学与技术的发展超越了我们理解和预见其后果的能力，我们是否正在集体失去面对未来的确定感？",
        "When a person cannot imagine or face their own future, anxiety is no longer fear of some specific danger and may become doubt about one’s own existence. Does humanity as a whole face a similar predicament? When the development of science and technology outruns our ability to understand and foresee its consequences, are we collectively losing our sense of certainty in facing the future?"
      ],
      [
        "但我并不认为这意味着理性的失败。科学的伟大，恰恰在于它不断揭示人类认知的边界，并迫使我们修正曾经深信不疑的真理。真正危险的不是承认无知，而是将能够计算误认为能够理解，将能够创造误认为能够控制。",
        "But I do not think this means the failure of reason. The greatness of science lies precisely in its constant revealing of the boundaries of human cognition, and in forcing us to revise truths we once held unquestioningly. What is truly dangerous is not admitting ignorance, but mistaking the ability to calculate for the ability to understand, and the ability to create for the ability to control."
      ],
      [
        "读完这本书，我开始觉得，知识的终极价值或许不在于让人类征服世界，而在于使我们更加清醒地认识自己与世界的关系。",
        "Having finished the book, I have begun to feel that the ultimate value of knowledge may lie not in letting humanity conquer the world, but in helping us see more clearly how we stand in relation to it."
      ],
      [
        "当我们终于拥有改变一切的力量，却无法确定自己究竟想成为怎样的人时，真正需要被重新理解的，或许已经不再是世界，而是人类自身。",
        "When we finally hold the power to change everything yet cannot be sure what kind of people we want to be, what truly needs to be understood anew may no longer be the world, but humanity itself."
      ]
    ]
  },
  {
    "date": "2023-03-17",
    "title": "Love Beyond Reach",
    "slug": "when-love-cannot-reach",
    "category": "Novel",
    "book": {
      "cover": "a_little_life.jpg",
      "title": "A Little Life",
      "author": "Hanya Yanagihara",
      "language": "English",
      "country": "United States",
      "original": "English",
      "lines": [
        "Novel · Doubleday, 2015",
        "Four friends in New York over several decades, and at the center of the book, the life of one of them, Jude."
      ]
    },
    "place": "于加州利弗莫尔\nLivermore, CA",
    "languages": ["Chinese", "English"],
    "photo": {
      "file": "a_little_life_reading.jpg",
      "alt": "A Little Life standing on a bookshelf among other novels"
    },
    "prose": [
      [
        "在《A Little Life》中，Hanya Yanagihara最令人难过的书写，并不是 Jude 经历了多少痛苦，而是当痛苦已经过去、危险已经消失、爱也终于到来时，他依然无法相信自己值得被爱。",
        "In *A Little Life*, the saddest thing Hanya Yanagihara writes is not how much pain Jude has been through, but that even after the pain has passed, the danger has gone and love has finally arrived, he still cannot believe he deserves to be loved."
      ],
      [
        "“我知道你爱我”与“我能够感受到自己值得被爱”之间，可能隔着一个人全部的生命经验。",
        "Between “I know you love me” and “I can feel that I am worthy of being loved” there may lie a person’s entire life experience."
      ],
      [
        "这两句话看似相近，却指向截然不同的世界。前者是一种对他人情感的认识，后者却关乎一个人如何理解自身的价值。我们可以相信别人的真诚，却依然无法相信自己配得上这份真诚。甚至越是被温柔地对待，越可能感到不安，因为这份爱与自己长久以来对自身的认识如此矛盾。",
        "These two sentences seem similar, yet they point to utterly different worlds. The first is an awareness of another person’s feelings; the second concerns how a person understands their own worth. We can believe in someone else’s sincerity and still be unable to believe we deserve it. The more gently we are treated, the more uneasy we may feel, because this love contradicts so sharply the understanding we have long held of ourselves."
      ],
      [
        "小说中，Jude的身体从来不只是承载创伤的容器。它更像一种不受意志支配的记忆：即使理性已经知道眼前的人不会伤害自己，身体仍可能本能地退缩。触碰既可能意味着亲密，也可能唤起恐惧；温柔有时反而触及他最无法承受的部分。",
        "In the novel, Jude’s body is never merely a vessel that carries trauma. It is more like a memory beyond the control of the will: even when reason already knows that the person in front of him will not hurt him, the body may still recoil by instinct. Touch can mean intimacy, but it can also summon fear; tenderness sometimes reaches the very part of him he cannot bear."
      ],
      [
        "创伤不仅改变了一个人记得什么，也可能改变他相信什么是自己应得的。当痛苦成为一个人理解世界的方式，幸福便不再只是难以获得的东西，甚至可能成为难以相信的东西。",
        "Trauma changes not only what a person remembers but also what they believe they deserve. When pain becomes the way a person understands the world, happiness is no longer only something hard to obtain; it may even become something hard to believe in."
      ],
      [
        "这也解释了小说中最令人心碎的矛盾：Jude 并非没有得到爱。Willem、Harold 和 Andy 都以不同的方式关心他，试图让他相信自己不必再独自承受一切。但这些爱越是真实，便越凸显出他内心那道难以逾越的距离。",
        "This also explains the novel’s most heartbreaking contradiction: Jude is not without love. Willem, Harold and Andy all care for him in their different ways, trying to make him believe he no longer has to bear everything alone. But the more real this love is, the more it highlights the distance within him that he cannot cross."
      ],
      [
        "他能够知道别人眼中的自己，却无法真正通过别人的眼睛重新认识自己。那些爱他的人所看见的温柔、聪慧与值得珍惜，在他自己的目光中，始终无法取代过去留下的羞耻与自我否定。",
        "He can know how others see him, yet cannot truly come to know himself through their eyes. The tenderness, intelligence and worth that those who love him see in him can never, in his own gaze, replace the shame and self-negation the past has left behind."
      ],
      [
        "我们常常相信，只要给予足够的耐心、陪伴与善意，另一个人终究会得到治愈。这种期待看似温柔，却也隐藏着一种要求：既然有人如此爱你，你为什么仍然无法快乐？",
        "We often believe that, given enough patience, companionship and kindness, another person will in the end be healed. This expectation seems gentle, but it hides a demand: since someone loves you this much, why can you still not be happy?"
      ],
      [
        "但爱可以改变一个人所处的现实，却未必能够改变他理解自身的方式。痛苦并不总是因为缺少爱而存在，也不会因为爱终于出现便自动消失。",
        "But love can change the reality in which a person lives, though it cannot necessarily change how they understand themselves. Pain does not always exist for lack of love, and it does not disappear automatically once love finally appears."
      ],
      [
        "这并不是说爱毫无意义。恰恰相反，小说中那些细小的关怀之所以动人，正是因为它们无法保证任何结果。陪伴不一定意味着拯救，温柔也不一定能够战胜记忆，但它们仍然是真实的。",
        "This is not to say that love is meaningless. Quite the opposite: the small acts of care in the novel are moving precisely because they guarantee no outcome. Companionship does not necessarily mean rescue, and tenderness does not necessarily defeat memory, but they are real all the same."
      ],
      [
        "或许，爱最困难的地方，不是愿意为另一个人付出多少，而是承认即使付出了全部，我们依然无法替他感受自己的价值，也无法替他决定如何理解自己。",
        "Perhaps the hardest part of love is not how much one is willing to give another person, but admitting that even after giving everything, we still cannot feel their worth on their behalf, nor decide for them how to understand themselves."
      ],
      [
        "我们总希望爱能够成为痛苦的答案，却很少愿意承认：有时候，爱只是爱，而不是答案。",
        "We always hope love can be the answer to pain, yet we rarely admit that sometimes love is only love, not an answer."
      ],
      [
        "《A Little Life》最终让我思考的，不只是一个人为什么无法接受爱，而是我们是否过于习惯用自己的善意，期待另一个人的改变。",
        "What *A Little Life* ultimately makes me think about is not only why a person cannot accept love, but whether we are too used to using our own kindness to expect change in another person."
      ],
      [
        "当一个人无法相信自己值得被爱时，我们能否继续爱他，而不把他的痊愈当作这份爱的证明？",
        "When a person cannot believe they deserve to be loved, can we keep loving them without treating their recovery as proof of that love?"
      ]
    ]
  },
  {
    "date": "2026-09-24",
    "title": "Luck Is Not Fate",
    "slug": "the-histories",
    "category": "History",
    "book": {
      "cover": "histories.jpg",
      "title": "The Histories",
      "author": "Herodotus",
      "language": "English",
      "country": "Greece",
      "original": "Greek",
      "lines": [
        "History · c. 430 BCE",
        "Herodotus’s inquiry into the Greco-Persian Wars and the peoples around them. In its opening book, the Lydian king Croesus asks the Athenian Solon who is the happiest man in the world."
      ]
    },
    "place": "于加州斯坦福\nStanford, CA",
    "languages": ["Chinese", "English"],
    "prose": [
      [
        "希罗多德《历史》中最让我印象深刻的，并不是波澜壮阔的希波战争，而是开篇吕底亚国王克洛伊索斯与雅典人梭伦的一段对话。拥有巨大财富与权力的克洛伊索斯，向梭伦展示自己的富足，期待被称为世上最幸福的人。梭伦却认为，在一个人的生命结束之前，我们无法真正判断他是否幸福。后来克洛伊索斯失去王国，才终于理解这句话的分量。",
        "What stayed with me most in Herodotus’s *Histories* was not the sweeping drama of the Greco-Persian Wars but a conversation near the start, between Croesus, king of Lydia, and the Athenian Solon. Croesus, possessed of vast wealth and power, shows Solon his riches and expects to be called the happiest man in the world. Solon holds instead that until a man’s life has ended, we cannot truly judge whether he was happy. Only after Croesus loses his kingdom does he finally understand the weight of those words."
      ],
      [
        "初读时，这似乎只是一个关于人生无常的古老寓言。但仔细想来，克洛伊索斯真正的错误，或许并不是高估了自己的财富，而是将幸运误认为命运。幸运是某个时刻恰好降临于我们的有利境遇，而命运则是我们试图赋予整段人生的连续性与必然性。幸运意味着事情原本可能以另一种方式发生；当我们把幸运理解为命运，便是在相信，自己今天所拥有的一切，不仅是过去努力的结果，也是未来理应延续的秩序。",
        "At first it seems like no more than an ancient fable about life’s uncertainty. But on reflection, Croesus’s real mistake may not have been overestimating his wealth but mistaking luck for fate. Luck is a favorable circumstance that happens to arrive at some moment; fate is the continuity and inevitability we try to impose on a whole life. Luck means things could have gone another way. When we take luck for fate, we come to believe that everything we have today is not only the result of past effort but also an order that ought to continue into the future."
      ],
      [
        "我们当然可以通过努力改变生活，但努力与结果之间，从来不存在完全确定的对应关系。一个人的成功，既可能来自能力与勤奋，也离不开出生的时代、家庭、社会环境，以及无数未曾意识到的偶然。然而，当成功持续得足够久，我们便容易逐渐忘记其中的偶然，把已经发生的事情理解为本来就应该发生的事情。幸运最隐蔽的地方，或许正是它会在时间的积累中，逐渐呈现出命运的模样。",
        "Of course we can change our lives through effort, but there has never been a fully determined link between effort and outcome. A person’s success may come from ability and diligence, but it also depends on the era they were born into, their family, their social environment, and countless accidents they never noticed. Yet when success lasts long enough, we easily forget the accidents in it and come to see what has happened as what was always meant to happen. The most hidden thing about luck, perhaps, is that over time it gradually takes on the look of fate."
      ],
      [
        "克洛伊索斯拥有财富、军队与王国，因此相信自己已经掌握了幸福。但梭伦的回答提醒他，拥有某种境遇与能够永久保有这种境遇，是两件完全不同的事。财富能够扩大我们应对不确定性的能力，却无法消除不确定性本身。我们可以规划未来，却无法保证未来按照规划发生。命运之所以令人敬畏，恰恰因为它不会因我们曾经的成功而承诺任何事情。",
        "Croesus had wealth, an army and a kingdom, and so believed he had mastered happiness. But Solon’s answer reminds him that having a certain circumstance and being able to keep it forever are two entirely different things. Wealth can widen our capacity to cope with uncertainty, but it cannot remove uncertainty itself. We can plan for the future, but we cannot guarantee that it will follow the plan. Fate is awe-inspiring precisely because it promises us nothing on account of our past success."
      ],
      [
        "这也让我重新思考财富与自由的关系。我们总以为，只要积累足够多的财富，终有一天便能够不再为生活担忧。但如果我们把安全感建立在财富必须不断增长、已有的一切必须永远保有的期待之上，那么财富越多，害怕失去的东西也可能越多。原本为了获得自由而进行的积累，反而可能让我们越来越难以接受生活中不可控制的部分。",
        "This also made me rethink the relationship between wealth and freedom. We tend to assume that once we have accumulated enough, we will one day be free of worry about our lives. But if we build our sense of security on the expectation that wealth must keep growing and that everything we have must be kept forever, then the more we have, the more we may fear losing. Accumulation that began as a way to gain freedom may make it harder and harder to accept the parts of life we cannot control."
      ],
      [
        "或许，梭伦真正提醒我们的，并不是幸福只能在死亡之后才能被判断，而是一个人不能因为眼下的幸运，就提前宣告自己已经战胜了命运。我们可以为自己的努力感到骄傲，也可以珍惜已经获得的财富与成就，却不必因此相信，自己比那些遭遇不幸的人更加值得拥有幸福。",
        "Perhaps what Solon really reminds us of is not that happiness can only be judged after death, but that no one should, because of present luck, declare in advance that they have defeated fate. We can be proud of our effort and cherish the wealth and achievements we have gained, without believing that we deserve happiness more than those who met misfortune."
      ],
      [
        "读到这里，我不禁觉得，成熟或许并不是终于拥有足够的能力掌控人生，而是在拥有越来越多的同时，依然能够承认其中有多少并非理所当然。",
        "Reading this, I cannot help feeling that maturity may not be finally having the power to control one’s life, but being able, even as one has more and more, to admit how much of it was never a given."
      ],
      [
        "我们花费大半生试图将幸运变成一种可以永久保有的命运，却可能忘记，真正的自由并不是确保自己永远不会失去，而是在知道一切都可能失去之后，仍然能够珍惜此刻的拥有。",
        "We spend most of our lives trying to turn luck into a fate we can keep forever, and may forget that real freedom is not making sure we will never lose, but being able to cherish what we have now, knowing that everything can be lost."
      ],
      [
        "如果我们今天所拥有的幸福，既来自自己的努力，也来自无数无法复制的偶然，那么我们究竟应该如何在为成功感到自豪的同时，不把自己的幸运误认为理所当然的命运？",
        "If the happiness we have today comes both from our own effort and from countless accidents that cannot be repeated, how should we take pride in our success without mistaking our luck for a fate we are owed?"
      ]
    ]
  },
  {
    "date": "2020-10-06",
    "title": "Who Pays for Prudence?",
    "slug": "the-great-debate",
    "category": "Political thought",
    "book": {
      "cover": "great_debate.jpg",
      "title": "The Great Debate: Edmund Burke, Thomas Paine, and the Birth of Right and Left",
      "author": "Yuval Levin",
      "language": "English",
      "country": "United States",
      "original": "English",
      "lines": [
        "Political thought · Basic Books, 2013",
        "Levin retells the 1790s quarrel between Burke and Paine over the French Revolution, and argues that it set the terms of left and right in modern politics."
      ]
    },
    "place": "于加州圣克拉拉\nSanta Clara, CA",
    "languages": ["Chinese", "English"],
    "prose": [
      [
        "当我们赞美一个社会的稳定时，是否想过，究竟是谁在享受稳定，又是谁在为稳定付出代价？读 Yuval Levin 的《The Great Debate》，最让我感兴趣的，并不是伯克与潘恩如何影响现代左右政治思想的形成，而是他们对政治正当性截然不同的理解：一个社会的制度，究竟应该从历史的延续中获得正当性，还是必须不断接受自由、平等与个人权利的检验？",
        "When we praise a society for its stability, have we asked who actually enjoys that stability, and who pays for it? In reading Yuval Levin’s *The Great Debate*, what interested me most was not how Burke and Paine shaped modern left and right political thought, but how differently they understood political legitimacy: should a society’s institutions draw their legitimacy from the continuity of history, or must they be tested again and again against liberty, equality and individual rights?"
      ],
      [
        "在伯克看来，社会并不是某一代人凭借理性就能够重新设计的产物，而是无数世代在漫长历史中逐渐形成的复杂秩序。传统、习俗与制度不仅承载着集体经验，也维系着个人之间的责任与信任。政治社会不仅属于活着的人，也连接着过去与未来的世代。因此，改革并非不应该发生，而是必须考虑那些超越个人理解能力的社会关系。潘恩则认为，任何制度都不能仅仅因为存在已久便获得正当性。过去的世代无权永久支配今天的人，每一代人都应当拥有依据自身权利重新决定政治秩序的自由。",
        "For Burke, society is not something one generation can redesign by reason alone, but a complex order formed gradually by countless generations over a long history. Tradition, custom and institutions carry collective experience, and they also sustain the responsibility and trust between individuals. A political society belongs not only to the living but also links the generations of the past and the future. Reform, then, is not something that should never happen; it must take into account social relationships that lie beyond any individual’s understanding. Paine held that no institution earns legitimacy merely by having existed for a long time. Past generations have no right to govern the living forever, and every generation should be free to decide its political order anew according to its own rights."
      ],
      [
        "我能够理解伯克对人类理性局限的警惕。他所捍卫的并不只是既有权力，更是一种对社会复杂性的谦逊。制度的价值未必能够完全通过抽象原则衡量，而那些看似陈旧的传统，也可能保护着个人免受任意权力的侵害。伯克并非一概反对变革，他对美国殖民地诉求的同情，以及对法国大革命的批评，恰恰体现了他对不同历史处境的判断：改革应当保存社会中值得延续的自由，而不是为了实现理想中的秩序，将已有的一切推倒重来。",
        "I can understand Burke’s wariness about the limits of human reason. What he defended was not only existing power but also a humility before the complexity of society. The value of an institution cannot always be fully measured by abstract principles, and traditions that look outdated may protect individuals from arbitrary power. Burke did not oppose change across the board. His sympathy for the claims of the American colonies and his criticism of the French Revolution show his judgment of different historical situations: reform should preserve the liberties worth continuing, rather than tear down everything that exists in order to realize an ideal order."
      ],
      [
        "但相比之下，我仍然更认同潘恩对政治正当性的追问：如果一种制度本身就是不公的，那么它究竟需要延续多少年，才能让这种不公被称为传统？伯克提醒我们，理性无法完全理解历史；潘恩则提醒我们，历史也无法自动证明自身的正当性。前者担心改革者低估改变的风险，后者担心人们高估现存秩序的合理性。",
        "Even so, I am still more persuaded by Paine’s question about political legitimacy: if an institution is unjust in itself, how many years must it last before that injustice can be called tradition? Burke reminds us that reason cannot fully understand history; Paine reminds us that history cannot automatically prove its own legitimacy. The former worries that reformers underestimate the risks of change, the latter that people overestimate the soundness of the existing order."
      ],
      [
        "美国女性选举权运动便让我想到这一矛盾。一个以自由与人民主权为建国理想的国家，却长期将女性排除在充分的政治参与之外。直到1920年，第十九修正案才在宪法层面禁止以性别为由剥夺选举权，而许多女性，尤其是非裔女性，仍须继续面对其他制度性障碍。回望这段历史，我们很容易将女性获得选举权理解为理所当然的进步，但当时关于家庭、社会秩序与政治参与的传统观念，同样曾被用来反对改革。不过，这并不能简单证明伯克式的渐进主义必然维护不公，因为选举权的扩展本身也可以通过既有宪政制度实现。它真正提出的问题是：当一种制度需要改变时，我们如何既不忽视改革的风险，也不让对风险的担忧成为无限期推迟正义的理由？",
        "The American women’s suffrage movement brings this tension to mind. A country founded on liberty and popular sovereignty long excluded women from full political participation. Only in 1920 did the Nineteenth Amendment write into the Constitution a ban on denying the vote on grounds of sex, and many women, Black women especially, still faced other institutional barriers. Looking back, it is easy to treat women’s suffrage as progress that was bound to come, but traditional ideas about family, social order and political participation were used at the time to oppose reform too. This does not simply prove that Burkean gradualism necessarily protects injustice, since the expansion of the vote could itself be achieved through existing constitutional institutions. The question it really raises is this: when an institution needs to change, how do we avoid both ignoring the risks of reform and letting worry about those risks become a reason to postpone justice indefinitely?"
      ],
      [
        "更令我在意的是，传统从来不是由所有人平等创造和继承的。那些有能力将自身利益写入法律、习俗与社会规范的人，往往也更有机会将这些利益解释为值得尊重的历史经验。但反过来说，传统也并非只属于既得利益者。长期形成的法律保障、地方自治与社会组织，同样可能成为弱势群体抵抗权力的资源。历史既可能保存压迫，也可能保存自由；因此，问题并不在于传统是否值得尊重，而在于我们如何辨别其中哪些经验值得继承，哪些不公必须改变。",
        "What concerns me more is that tradition has never been created and inherited equally by everyone. Those able to write their own interests into law, custom and social norms are often also better placed to present those interests as historical experience worthy of respect. Yet tradition does not belong only to the beneficiaries. Long-established legal protections, local self-government and social organizations can also become resources with which the weak resist power. History can preserve oppression, and it can preserve freedom. So the question is not whether tradition deserves respect, but how we tell which of its experiences are worth inheriting and which injustices must be changed."
      ],
      [
        "这也让我重新理解伯克与潘恩之间真正难以调和的分歧。伯克认为，政治首先需要对既有社会承担责任，不能轻易牺牲现实中的制度与关系去追求抽象的完美；潘恩则坚持，政治制度必须能够向每一个受其约束的人证明自身的正当性，不能让历史成为限制当代人自由的最终理由。两人所警惕的危险都是真实的：没有历史意识的改革可能摧毁自由，而没有权利原则约束的传统也可能延续不公。",
        "This also changed how I understand the divide between Burke and Paine that is truly hard to reconcile. Burke held that politics must first take responsibility for the society that exists, and must not lightly sacrifice real institutions and relationships in pursuit of abstract perfection. Paine insisted that political institutions must be able to justify themselves to every person they bind, and that history cannot be the final reason for limiting the freedom of people today. The dangers each of them feared are real: reform without a sense of history can destroy freedom, and tradition unconstrained by principles of rights can perpetuate injustice."
      ],
      [
        "或许我更倾向于潘恩，并不是因为我相信人类理性能够设计出完美的社会，而是因为我认为，任何制度都不应该仅凭自身的延续获得道德上的优先权。但伯克也让我意识到，认识到改变的必要，并不意味着我们已经知道如何改变。改革者有责任解释新制度如何运作，维护现状的人也有责任说明既有制度为何值得保留。两者都不应免于质疑。",
        "Perhaps I lean toward Paine not because I believe human reason can design a perfect society, but because I think no institution should gain moral priority merely by continuing to exist. But Burke also made me see that recognizing the need for change does not mean we already know how to change. Reformers have a duty to explain how the new institution would work, and defenders of the status quo have a duty to explain why the existing one deserves to be kept. Neither should be exempt from questioning."
      ],
      [
        "《The Great Debate》最终让我重新思考开篇那个关于稳定的问题。稳定当然值得珍惜，但它并不是一种不需要付出代价的状态。改变可能破坏已有的自由，不改变也可能让另一些人始终无法获得自由。真正的政治智慧，或许不在于永远选择改革或保守，而在于不让任何一方的代价因为另一方的安全而变得不可见。",
        "In the end, *The Great Debate* made me think again about the opening question of stability. Stability is certainly worth cherishing, but it is not a condition that costs nothing. Change may destroy the freedom we already have, and no change may leave others forever without it. Real political wisdom may lie not in always choosing reform or always choosing conservatism, but in not letting the cost borne by one side become invisible because of the safety of the other."
      ],
      [
        "我仍然相信历史值得尊重，但尊重历史不应意味着服从历史。伯克教会我们怀疑自己改变世界的能力，潘恩则提醒我们怀疑现存世界的正当性。两种怀疑都不可或缺，但当我们以审慎之名要求一些人继续等待时，至少应该诚实地承认：我们所保护的稳定，未必是所有人共同享有的稳定。",
        "I still believe history deserves respect, but respecting history should not mean obeying it. Burke teaches us to doubt our ability to change the world; Paine reminds us to doubt the legitimacy of the world as it is. Both doubts are indispensable, but when we ask some people to keep waiting in the name of prudence, we should at least honestly admit that the stability we are protecting is not necessarily a stability everyone shares."
      ],
      [
        "如果一种秩序的延续，必须以另一些人持续承受不公为代价，那么我们究竟是在审慎地保护社会，还是在让那些已经拥有自由的人，决定尚未拥有自由的人还需要等待多久？",
        "If an order can continue only at the price of others continuing to bear injustice, are we prudently protecting society, or letting those who already have freedom decide how much longer those who do not yet have it must wait?"
      ]
    ]
  },
  {
    "date": "2022-11-02",
    "title": "An Era’s Progress, and a Lifetime",
    "slug": "social-classes-in-china",
    "category": "Social analysis",
    "book": {
      "cover": "social_classes.jpg",
      "title": "中国社会各阶层分析 (An Analysis of the Social Strata in China)",
      "author": "梁晓声 Liang Xiaosheng",
      "language": "Chinese",
      "country": "China",
      "original": "Chinese",
      "lines": [
        "Social analysis · Shenzhen Publishing House",
        "Liang Xiaosheng’s analysis of how China’s social classes fared through reform and opening up, and who gained and who lost."
      ]
    },
    "place": "于加州利弗莫尔\nLivermore, CA",
    "languages": ["Chinese", "English"],
    "prose": [
      [
        "我们习惯于从历史的终点回望一个时代，用经济增长、社会流动与生活水平的提高证明它的进步。但对于真正生活在其中的人，历史并不是一条已知终点的道路。一个国家可以用几十年完成转型，而对于普通人，那几十年就是他们无法重新度过的一生。读梁晓声的《人世间》，我时常想起他在1990年代写下的《中国社会各阶层分析》：当我们说一个时代变得更好时，究竟是谁的生活变得更好了？",
        "We are used to looking back at an era from history’s endpoint, and to proving its progress with economic growth, social mobility and rising living standards. But for the people who actually lived in it, history was not a road whose end was known. A country can complete a transformation in a few decades, and for ordinary people those decades are the one life they cannot live over. Reading Liang Xiaosheng’s *Ren Shi Jian* (人世间, “In the World of Men”), I kept thinking of his *Analysis of the Social Strata in China*, written in the 1990s: when we say an era has become better, whose lives have actually become better?"
      ],
      [
        "《中国社会各阶层分析》试图解释社会如何塑造人，《人世间》则让我们看见，被社会塑造的人如何度过自己的一生。前者观察改革开放过程中不同阶层的利益分化与命运变迁，后者则将这些抽象的社会关系写进周家几代人的生活。周秉义、周蓉与周秉昆出身于同一个工人家庭，却分别走向干部、知识分子与普通劳动者的人生。相同的家庭起点并没有带来相同的命运，而个人努力之外的教育机会、社会资源与历史机遇，也不断改变着他们能够抵达的地方。",
        "*Analysis of the Social Strata in China* tries to explain how society shapes people; *Ren Shi Jian* lets us see how people so shaped live out their lives. The former observes how interests diverged and fortunes changed among different classes during reform and opening up; the latter writes those abstract social relations into the lives of several generations of the Zhou family. Zhou Bingyi, Zhou Rong and Zhou Bingkun come from the same working-class family, yet go on to live as an official, an intellectual and an ordinary laborer. The same starting point in the family did not bring the same fate, and educational opportunity, social resources and historical chance, all beyond personal effort, kept changing where each of them could get to."
      ],
      [
        "我尤其记得周秉昆与郑娟的生活。郑娟独自照顾年迈的母亲和年幼的孩子，周秉昆则在明知这段关系会带来家庭压力的情况下，逐渐承担起照顾她们的责任。后来周家遭遇变故，郑娟又长期照料失去自理能力的周母。这些付出没有带来显著的社会地位，也很难被收入或职业成就衡量，却实实在在地维系着一个家庭的生活。相比之下，周秉义通过仕途参与城市治理，周蓉通过知识获得更广阔的选择空间。三兄妹的差异让我想到：我们以社会流动衡量进步，却很少追问，为什么一个人必须离开原来的阶层，才能被认为拥有了更好的人生？",
        "I especially remember the life of Zhou Bingkun and Zheng Juan. Zheng Juan cares alone for her aging mother and her young child, and Zhou Bingkun, knowing the relationship will bring pressure at home, gradually takes on the responsibility of looking after them. Later, when misfortune strikes the Zhou family, Zheng Juan also looks after Mrs. Zhou for years after she loses the ability to care for herself. These sacrifices bring no notable social standing and can hardly be measured in income or career achievement, yet they truly hold a family’s life together. By contrast, Zhou Bingyi takes part in running the city through an official career, and Zhou Rong gains a wider range of choices through knowledge. The differences among the three siblings make me think: we measure progress by social mobility, but seldom ask why a person must leave their original class before they can be said to have a better life."
      ],
      [
        "光字片的变迁则呈现了另一层矛盾。周秉昆与国庆、赶超等朋友曾经共享相似的工人生活，但随着市场化改革深入，原有的工作与生活保障逐渐发生变化，失业与谋生压力也改变了他们的人生。对一些人而言，改革意味着新的机会；对另一些人而言，却意味着熟悉的生活秩序不再可靠。《中国社会各阶层分析》讨论城市平民的处境，《人世间》则让我们看见，所谓社会结构调整，最终可能表现为一个家庭失去收入、一个人失去工作，以及曾经稳定的身份突然变得脆弱。",
        "The changes in the Guangzi district show another layer of contradiction. Zhou Bingkun and friends like Guoqing and Ganchao once shared a similar working life, but as market reform deepened, the job and living guarantees they had gradually changed, and unemployment and the pressure to make a living changed their lives. For some, reform meant new opportunity; for others, it meant that the familiar order of life could no longer be relied on. *Analysis of the Social Strata in China* discusses the situation of ordinary urban people, while *Ren Shi Jian* lets us see that what is called structural adjustment may in the end show up as a family losing its income, a person losing their job, and a once-stable identity suddenly becoming fragile."
      ],
      [
        "但我也不愿意将这些普通人的艰辛浪漫化。周秉昆的善良、郑娟的坚韧，以及朋友之间的相互扶持令人动容，却不意味着贫困与不平等因此变得合理。我们赞美他们在困境中保持尊严，不应该成为社会不必改善其处境的理由。一个人能够忍受多少苦难，与他是否本来就应该承受这些苦难，是两回事。文学让我们看见苦难中的人性，而社会分析则提醒我们，有些苦难并非命运使然，而是可以通过制度与资源分配加以改变的。",
        "But I do not want to romanticize the hardships of these ordinary people either. Zhou Bingkun’s kindness, Zheng Juan’s resilience and the way friends support one another are deeply moving, but that does not make poverty and inequality reasonable. Our praise for how they keep their dignity in hardship should not become a reason for society not to improve their situation. How much suffering a person can endure and whether they should have had to bear it in the first place are two different matters. Literature lets us see humanity within suffering, while social analysis reminds us that some suffering is not decreed by fate but can be changed through institutions and the distribution of resources."
      ],
      [
        "这也让我意识到，两部作品之间存在一种深刻的互补。《中国社会各阶层分析》将人放进社会结构，揭示个人选择背后的不平等；《人世间》则让人从阶层标签中重新走出来，拥有无法被统计概括的情感、责任与尊严。周秉义不只是干部，周蓉不只是知识分子，周秉昆也不只是普通劳动者。社会结构能够解释他们拥有怎样的机会，却无法完整解释他们如何对待身边的人。人既不是完全自由地创造自己的命运，也不是只能被动接受时代的安排。",
        "This also made me see a deep complementarity between the two works. *Analysis of the Social Strata in China* puts people into the social structure and exposes the inequality behind individual choices; *Ren Shi Jian* lets people step out of their class labels again, with feelings, responsibilities and a dignity that statistics cannot sum up. Zhou Bingyi is not only an official, Zhou Rong not only an intellectual, and Zhou Bingkun not only an ordinary laborer. Social structure can explain what opportunities they had, but cannot fully explain how they treated the people around them. People neither create their fates in complete freedom nor merely accept the arrangements of their time."
      ],
      [
        "更值得思考的是，社会进步与个人幸福并不必然同步。周秉义推动光字片改造，体现了公共治理改善普通人居住条件的可能；但即使破旧的街区最终得以更新，那些在旧日生活中失去的亲人、错过的机会与无法挽回的遗憾，也不会因此重新归来。历史可以在下一代实现更充分的繁荣，却无法补偿每一个人已经度过的岁月。宏观意义上的成功，无法自动抵消微观意义上的遗憾。",
        "Even more worth thinking about is that social progress and personal happiness do not necessarily move together. Zhou Bingyi’s push to rebuild the Guangzi district shows how public governance can improve ordinary people’s housing; but even if the run-down neighborhood is finally renewed, the relatives lost in the old life, the chances missed and the regrets that cannot be undone will not come back because of it. History can bring fuller prosperity to the next generation, but it cannot make up for the years each person has already lived. Success at the macro level cannot automatically cancel regret at the micro level."
      ],
      [
        "因此，我越来越觉得，一个社会的进步不应该仅仅用多少人实现了阶层跃升来衡量，更应该看那些没有跃升的人能否生活得更好。真正值得追求的，或许不是让每个人都成为周秉义或周蓉，而是让那些像周秉昆一样留在普通生活中的人，不必通过不断向上攀升来证明自身的价值。",
        "So I increasingly feel that a society’s progress should be measured not only by how many people have moved up a class, but by whether those who have not moved up can live better. What is really worth pursuing may not be to let everyone become a Zhou Bingyi or a Zhou Rong, but to let people who, like Zhou Bingkun, remain in ordinary life not have to keep climbing to prove their worth."
      ],
      [
        "《中国社会各阶层分析》让我们看见时代如何改变社会，《人世间》则让我们追问，这些改变究竟如何落在每一个人身上。我们当然可以赞美一个时代创造了多少机会，但也应该记得，机会的增加并不意味着每个人都能重新选择自己的人生。",
        "*Analysis of the Social Strata in China* shows us how an era changes society; *Ren Shi Jian* makes us ask how those changes actually land on each person. We can certainly praise an era for how many opportunities it created, but we should also remember that more opportunity does not mean everyone can choose their life over again."
      ],
      [
        "或许，衡量一个时代最深刻的尺度，不是它让多少人走出了原来的阶层，而是那些没有走出去的人，是否也不再需要为自己的平凡付出代价。",
        "Perhaps the deepest measure of an era is not how many people it let leave their original class, but whether those who did not leave no longer have to pay a price for being ordinary."
      ],
      [
        "毕竟，时代可以继续向前，而人的一生只有一次。",
        "After all, an era can keep moving forward, but a life comes only once."
      ]
    ]
  },
  {
    "date": "2022-11-10",
    "slug": "ren-shi-jian",
    "sameAs": "social-classes-in-china",
    "category": "Novel",
    "book": {
      "cover": "renshijian.jpg",
      "title": "人世间 (Ren Shi Jian)",
      "author": "梁晓声 Liang Xiaosheng",
      "language": "Chinese",
      "country": "China",
      "original": "Chinese",
      "lines": [
        "Novel · China Youth Press edition",
        "Liang Xiaosheng’s Mao Dun Prize-winning novel, following the three children of a working-class family in northeast China through decades of change."
      ]
    },
    "place": "于加州利弗莫尔\nLivermore, CA"
  },
  {
    "date": "2025-07-04",
    "title": "A Lifetime of Making Peace With the Past",
    "slug": "pinball-1973",
    "category": "Novel",
    "book": {
      "cover": "pinball.jpg",
      "title": "1973年的彈珠玩具 (Pinball, 1973)",
      "author": "村上春樹 Haruki Murakami",
      "language": "Traditional Chinese",
      "country": "Japan",
      "original": "Japanese",
      "lines": [
        "Novel · Kodansha, 1980 · Traditional Chinese edition",
        "A man searches for a pinball machine he once loved, while his friend the Rat tries to leave the town and the life he cannot settle into."
      ]
    },
    "place": "於台灣花蓮\nHualien, Taiwan",
    "languages": ["Traditional Chinese", "English"],
    "prose": [
      [
        "有人說，童年的陰影需要一生來治癒。但我漸漸覺得，真正難以擺脫的，未必是童年發生過什麼，而是那些早年的經歷如何在我們尚未察覺時，塑造了後來的人生。我們以為自己早已告別過去，卻可能仍然按照過去留下的情感習慣生活。讀村上春樹的《1973年的彈珠玩具》，我一直在想：如果今天的我們，是由無數已經消失的昨天塑造而成，那麼所謂成長，究竟是不斷成為新的自己，還是不斷尋找那個已經失去的自己？",
        "Some say the shadows of childhood take a lifetime to heal. But I have come to feel that what is truly hard to shake is not necessarily what happened in childhood, but how those early experiences shaped our later lives before we noticed. We think we have said goodbye to the past long ago, yet we may still be living by the emotional habits it left behind. Reading Haruki Murakami’s *Pinball, 1973*, I kept wondering: if the people we are today are shaped by countless yesterdays that no longer exist, is growing up a matter of becoming a new self again and again, or of searching again and again for the self we have lost?"
      ],
      [
        "小說中的「我」執著於尋找一台曾經玩過的彈珠遊戲機。那不過是一件普通的舊物，既沒有特別的價值，也無法改變他現在的生活。然而，當他終於在堆滿廢棄機器的倉庫裡與它重逢時，這場尋找似乎獲得了某種超越物品本身的意義。他真正想找回的，或許不是那台機器，而是曾經站在機器面前的自己，以及那個尚未經歷後來種種失去的年代。",
        "The narrator of the novel is fixated on finding a pinball machine he once played. It is just an ordinary old thing, of no special value, and it cannot change his life now. Yet when he finally meets it again in a warehouse full of discarded machines, the search seems to take on a meaning beyond the object itself. What he really wants to recover may not be the machine but the self who once stood in front of it, and the time before the losses that came later."
      ],
      [
        "與此同時，「鼠」卻走在另一條方向相反的道路上。「我」試圖透過尋找一件舊物，重新建立自己與過去的聯繫；「鼠」則試圖離開熟悉的城市、酒吧與人際關係，擺脫一種始終無法融入的生活。他擁有相對優裕的物質條件，卻無法因此獲得內心的安定。對「我」而言，過去似乎藏著某種值得找回的東西；對「鼠」而言，過去卻像是一種必須離開的束縛。一個向過去靠近，一個努力與過去拉開距離，但他們都無法真正回答，自己究竟在尋找什麼。",
        "Meanwhile the Rat walks a road in the opposite direction. The narrator tries to rebuild his connection to the past by searching for an old object; the Rat tries to leave the familiar city, the bar and his relationships, to escape a life he has never been able to fit into. He is comparatively well off materially, but that gives him no inner peace. For the narrator, the past seems to hold something worth recovering; for the Rat, the past is a constraint he must break free of. One moves toward the past and the other works to put distance between himself and it, yet neither can truly answer what he is looking for."
      ],
      [
        "我覺得這種對照尤其耐人尋味。「我」至少能將自己的失落寄託在一台具體的機器上，於是他的懷念有了方向，也有了可以抵達的終點。「鼠」的不安卻沒有如此明確的對象。他與周圍世界的疏離，並不能透過找回某件東西得到解決，甚至連自己想要離開的究竟是什麼，也未必能夠說清。或許有些人比較幸運，能夠為自己的失落找到一個名字；另一些人卻只能感受到生活中始終存在某種缺失，卻不知道那個缺失從何而來。",
        "I find this contrast especially intriguing. The narrator can at least attach his sense of loss to a concrete machine, so his longing has a direction and an end he can reach. The Rat’s unease has no such clear object. His estrangement from the world around him cannot be resolved by recovering something, and he may not even be able to say what exactly he wants to leave. Perhaps some people are luckier and can find a name for their loss, while others can only feel that something has always been missing from their lives without knowing where the lack comes from."
      ],
      [
        "這讓我想到，我們對過去的懷念，常常並不是因為過去真的比現在美好，而是因為那時的自己還不知道未來會失去什麼。年輕時擁有的某些關係、期待與安全感，在當時或許平凡得不值得記住，直到它們消失以後，我們才意識到那些看似微不足道的瞬間，原來構成了自己的一部分。我們懷念的也許不是某個地方、某件舊物，而是那個仍然能夠毫無保留地相信某些事情的自己。",
        "This makes me think that our nostalgia for the past is often not because the past was truly better than the present, but because the self of that time did not yet know what the future would take away. Some relationships, expectations and feelings of security we had when young may have been too ordinary to be worth remembering then, and only after they vanished did we realize that those seemingly trivial moments had become a part of us. What we miss may not be a place or an old object but the self who could still believe in certain things without reservation."
      ],
      [
        "我偶爾也會想像，如果有一天重新走進童年熟悉的街道，看到那些曾經每天經過的建築，究竟會是什麼感受。或許街道依然在那裡，房屋也沒有太大變化，但我已經無法像當年那樣理解它們。小時候覺得漫長的道路，如今可能不過幾分鐘就能走完；曾經以為永遠不會改變的生活，也早已消失在記憶之中。最令我感傷的，不是那些地方變了，而是即使它們完全沒有改變，我也無法重新擁有當時看待世界的目光。原來時間帶走的不只是我們擁有過的東西，也包括我們曾經感受世界的方式。",
        "I sometimes imagine what it would feel like to walk again down the streets of my childhood and see the buildings I once passed every day. The streets might still be there and the houses little changed, but I could no longer understand them as I once did. A road that felt long as a child might now take only a few minutes to walk, and a life I once thought would never change has long since vanished into memory. What saddens me most is not that those places have changed, but that even if they had not changed at all, I could not get back the way I saw the world then. Time takes away not only what we once had but also the way we once felt the world."
      ],
      [
        "但「鼠」又讓我意識到，並不是每個人都渴望回到過去。有時候，我們想要逃離的，恰恰是那個曾經的自己，以及過去賦予我們的身份與期待。「鼠」對自己所處環境的疏離，使我想到一種更難以言說的困境：當一個人已經擁有別人眼中值得羨慕的生活，卻仍然感到不快樂時，他甚至很難為自己的不快樂找到正當的理由。於是，離開似乎成為唯一可以想像的改變，儘管他並不知道離開之後會抵達哪裡。",
        "But the Rat also made me realize that not everyone longs to return to the past. Sometimes what we want to flee is exactly the person we used to be, and the identity and expectations the past gave us. The Rat’s estrangement from his surroundings reminds me of a harder predicament to put into words: when someone already has a life others envy and still feels unhappy, he can hardly find a legitimate reason for his unhappiness. Leaving then seems the only change he can imagine, though he does not know where it will take him."
      ],
      [
        "從這個角度看，「我」與「鼠」其實代表了兩種面對自我認同的方式。「我」試圖透過記憶確認自己曾經是誰，「鼠」則試圖透過離開，擺脫別人認為他應該成為的樣子。前者害怕失去與過去的聯繫，後者害怕永遠無法脫離過去的限制。但兩人共同面對的問題是：如果我們始終需要透過過去來理解自己，那麼我們究竟還有多少自由，去成為一個不同的人？",
        "Seen this way, the narrator and the Rat represent two ways of facing one’s identity. The narrator tries to confirm through memory who he used to be; the Rat tries, by leaving, to shed what others think he should become. The first fears losing his tie to the past, the second fears never escaping its limits. But the question they share is this: if we always need the past in order to understand ourselves, how much freedom do we really have to become a different person?"
      ],
      [
        "小說中那台終於被找到的彈珠遊戲機，在我看來更像是一場遲來的告別。機器依然存在，曾經的時間卻無法恢復。「我」可以重新見到它，卻無法重新成為當年站在它面前的人；而「鼠」即使離開熟悉的地方，也未必能將自己的不安留在身後。一個人的尋找終於有了結果，另一個人的離開才剛剛開始，但兩者都沒有真正解決時間留下的問題。原來找回與離開，有時只是我們試圖改變自己與過去關係的兩種方式。",
        "The pinball machine that is finally found in the novel seems to me more like a belated farewell. The machine is still there, but the time that once surrounded it cannot be restored. The narrator can see it again but cannot become again the person who stood in front of it; and the Rat, even after leaving the familiar place, may not leave his unease behind. One man’s search has at last borne fruit, another’s departure has only just begun, but neither has truly settled what time has left behind. It seems that recovering and leaving are sometimes just two ways of trying to change our relationship with the past."
      ],
      [
        "《1973年的彈珠玩具》最打動我的，恰恰是它沒有為這兩種人生提供明確的答案。村上春樹沒有告訴我們，懷念比逃離更值得肯定，也沒有讓人物因為一次重逢或一次離開便突然獲得完整的自我。他們只是繼續生活，帶著那些無法解釋的缺失，慢慢走向未知的明天。",
        "What moves me most about *Pinball, 1973* is precisely that it offers no clear answer for either life. Murakami does not tell us that nostalgia is worth more than escape, nor does he let his characters suddenly gain a whole self through one reunion or one departure. They simply go on living, carrying losses they cannot explain, and slowly walk toward an unknown tomorrow."
      ],
      [
        "或許，我們用一生與過去和解，並不是為了最終成為那個未曾受傷的自己，而是逐漸理解：過去可以解釋我們為什麼成為今天的樣子，卻不必決定我們以後只能成為怎樣的人。",
        "Perhaps we spend a lifetime making peace with the past not to become, in the end, the self that was never hurt, but to come gradually to understand that the past can explain why we became who we are today without having to decide who we can be from now on."
      ],
      [
        "「我」讓我明白，有些東西即使找回來，也無法讓時間倒流；「鼠」則讓我明白，有些東西即使拋在身後，也不會因此消失。",
        "The narrator taught me that some things, even when recovered, cannot turn time back; the Rat taught me that some things, even when left behind, do not disappear."
      ],
      [
        "我們終究既無法真正回到過去，也無法徹底逃離過去。或許成長最困難的地方，就在於不再需要透過找回什麼，或離開什麼，才能允許自己繼續生活。",
        "In the end we can neither truly return to the past nor fully escape it. Perhaps the hardest part of growing up is no longer needing to recover something, or to leave something, before we allow ourselves to go on living."
      ]
    ]
  },
  {
    "date": "2022-12-21",
    "title": "The Freedom to Leave, the Price of Staying",
    "slug": "because-i-hate-korea",
    "category": "Novel",
    "book": {
      "cover": "hate_korea.jpg",
      "title": "한국이 싫어서 (Because I Hate Korea)",
      "author": "장강명 Jang Gang-myeong",
      "language": "Korean",
      "country": "South Korea",
      "original": "Korean",
      "lines": [
        "Novel · Minumsa, 2015 · Original Korean edition",
        "A young woman leaves a stable job at a Korean financial company for a new life in Australia, and tries to explain why."
      ]
    },
    "place": "于韩国首尔\nSeoul, South Korea",
    "languages": ["Chinese", "English"],
    "blocks": [
      ["p", "我们常常赞美那些勇敢离开故乡、重新开始生活的人，仿佛只要有足够的勇气，每个人都能选择自己想要的人生。但读张康明的《한국이 싫어서》，我渐渐意识到，离开从来不只是勇气的问题。当一个人必须离开自己的国家，才能过上自己想要的生活，这究竟是个人自由的体现，还是一个社会无法容纳不同生活方式的结果？而那些没有能力离开的人，又是否拥有同样的选择权利？", "We often praise those who bravely leave their homeland and start life anew, as if anyone with enough courage could choose the life they want. But reading Jang Gang-myeong’s *한국이 싫어서*, I gradually realized that leaving has never been only a matter of courage. When a person has to leave their country in order to live the life they want, is that an expression of individual freedom, or the result of a society that cannot accommodate different ways of living? And do those who have no means to leave have the same right to choose?"],
      ["p", "小说中的桂娜并不是传统意义上的失败者。她受过教育，在韩国的金融公司拥有一份相对稳定的工作，也有可以预见的人生道路。然而，她依然决定辞职，前往澳大利亚。我觉得，理解桂娜的关键，并不在于她有多么讨厌韩国，而在于她最初甚至很难向别人解释，为什么一种看似正常的生活会让自己如此疲惫。", "Gyena, the novel’s protagonist, is not a failure in the conventional sense. She is educated, holds a fairly stable job at a financial company in Korea, and has a foreseeable path ahead of her. Yet she still decides to quit and go to Australia. I think the key to understanding Gyena is not how much she hates Korea, but that at first she can hardly explain to others why a seemingly normal life leaves her so exhausted."],
      ["p", "在韩国，桂娜的困境并不是缺少一条可以继续走下去的道路，而是那条道路似乎早已替她决定了终点。每天拥挤的通勤、重复的办公室工作、对收入与未来的焦虑，让她逐渐意识到，自己或许能够成为一个符合社会期待的人，却未必能够接受这种生活。她并不是没有能力参与竞争，而是开始怀疑，为什么人生必须以竞争的结果来衡量。", "In Korea, Gyena’s predicament is not that she lacks a road to keep walking, but that the road seems to have decided her destination in advance. The crowded daily commute, the repetitive office work and the anxiety about income and the future make her gradually realize that she may be able to become a person who meets society’s expectations, yet cannot accept that kind of life. It is not that she is unable to compete; she begins to wonder why life has to be measured by the results of competition."],
      ["p", "我觉得这正是小说最细腻的地方。一个人最深刻的困境，有时不是不知道自己应该做什么，而是明明知道社会希望自己做什么，却无法相信那就是自己应该过的一生。桂娜的痛苦不仅来自生活本身，也来自她无法让别人相信，这种痛苦是正当的。", "I think this is the most delicate part of the novel. A person’s deepest predicament is sometimes not that they do not know what they should do, but that they know perfectly well what society wants of them and cannot believe it is the life they ought to live. Gyena’s pain comes not only from her life itself but also from being unable to make others believe that her pain is legitimate."],
      ["p", "桂娜最终辞职，决定前往澳大利亚。她在仁川机场与男友智明告别，也意味着她必须放弃一部分原本熟悉的生活。智明并不是一个简单的反面人物，他所代表的稳定关系与未来生活，确实具有吸引力。因此，桂娜的离开并不是在毫无牵挂的情况下作出的轻松决定。她需要承认，自己可能失去一些真正珍贵的东西，却仍然无法因此说服自己留下。", "Gyena finally quits and decides to go to Australia. Saying goodbye to her boyfriend Jimyeong at Incheon Airport also means giving up part of the life she knows. Jimyeong is not a simple villain; the stable relationship and future life he represents are genuinely attractive. So Gyena’s departure is not an easy decision made without any attachments. She has to admit that she may lose something truly precious, and still cannot persuade herself to stay."],
      ["p", "不过，我不认为此时的桂娜已经完全理解了自己想要的人生。第一次离开韩国时，她更多是在否定一种无法忍受的生活，而不是已经找到另一种明确的方向。她知道自己不想继续，却未必知道重新开始意味着什么。她的勇气之中，仍然包含着迷茫。", "Still, I do not think Gyena fully understands the life she wants at this point. When she leaves Korea the first time, she is more rejecting a life she cannot bear than having found another clear direction. She knows she does not want to go on, but not necessarily what starting over means. Her courage still contains confusion."],
      ["p", "到了澳大利亚，这种迷茫并没有立即消失。她一边学习语言，一边在餐馆洗碗，从韩国金融公司的办公室进入一个更加陌生、经济上也更加不稳定的环境。如果按照传统的职业标准衡量，她似乎经历了一次向下流动。但我觉得，正是这种反差，让桂娜第一次有机会重新审视自己曾经相信的成功标准。", "In Australia the confusion does not vanish at once. She studies the language while washing dishes in a restaurant, moving from the office of a Korean financial company into a more unfamiliar and financially less stable environment. By conventional career standards, she seems to have moved downward. But I think it is precisely this contrast that gives Gyena, for the first time, a chance to re-examine the standard of success she once believed in."],
      ["p", "在韩国，她拥有一份体面的工作，却感到生活正在失去方向；在澳大利亚，她从事辛苦的兼职，却开始为自己选择的未来付出努力。两种生活都不轻松，但辛苦的意义已经发生变化。过去，她的努力主要是为了维持一种被社会认可的生活；现在，她必须亲自承担选择的后果，也因此逐渐获得了对生活的掌控感。", "In Korea she had a respectable job but felt her life losing direction; in Australia she does hard part-time work but begins to put effort into a future she chose herself. Neither life is easy, but the meaning of the hardship has changed. Before, her effort mainly went into maintaining a life that society approved of; now she has to bear the consequences of her choices herself, and in doing so gradually gains a sense of control over her life."],
      ["p", "然而，这种对照还有另一层值得注意的意义。桂娜在韩国拥有的学历、工作经验与社会关系，到了澳大利亚并不能自动转化为同等的职业地位。她必须从语言学习和基础劳动重新开始。这说明社会地位并不完全取决于一个人的能力，也取决于这些能力在特定社会中能否获得承认。所谓成功，从来不只是个人努力的结果，还与一个人所处的制度和环境密切相关。", "Yet this contrast has another meaning worth noting. The education, work experience and social connections Gyena had in Korea do not automatically turn into equal professional standing in Australia. She has to start over with language study and basic labor. This shows that social position does not depend wholly on a person’s abilities, but also on whether those abilities are recognized in a particular society. What we call success has never been only the result of individual effort; it is closely tied to the system and environment a person is in."],
      ["p", "这种变化并不意味着桂娜突然变得乐观或坚强，而是她开始理解，自由与不确定性往往同时出现。离开韩国并没有让她摆脱经济压力，也没有让她免于面对孤独、语言障碍和身份问题。她必须接受，自己选择的生活未必更加舒适，甚至可能比过去更加艰难。但与此前不同的是，她不再仅仅因为生活艰难，就认为自己一定走错了道路。", "This change does not mean Gyena suddenly becomes optimistic or strong; it means she begins to understand that freedom and uncertainty often arrive together. Leaving Korea does not free her from financial pressure, nor from loneliness, language barriers and questions of identity. She must accept that the life she chose may not be more comfortable, and may even be harder than before. But unlike before, she no longer assumes she must have taken the wrong road merely because life is hard."],
      ["p", "我想，这是一种更深刻的成长：一个人开始有能力区分，哪些痛苦来自被迫接受的生活，哪些痛苦则是自己愿意为某种可能性承担的代价。", "I think this is a deeper kind of growth: a person becomes able to tell which pain comes from a life they were forced to accept, and which pain is a price they are willing to pay for a possibility."],
      ["p", "桂娜后来继续学习，进入会计研究生项目，逐渐为自己建立新的生活基础。这里最重要的，并不是她终于重新走上了一条能够获得社会认可的职业道路，而是她与这条道路的关系已经不同。工作与学历逐渐成为实现生活目标的工具，而不再是决定自身价值的唯一标准。", "Gyena goes on to study, entering a graduate accounting program and gradually building a new foundation for her life. What matters most here is not that she has finally returned to a career path society recognizes, but that her relationship to that path is now different. Work and degrees gradually become tools for reaching her life goals, no longer the only standard that determines her worth."],
      ["p", "然而，我认为桂娜真正重要的变化，发生在她短暂返回韩国之后。", "Yet I think the truly important change in Gyena comes after her brief return to Korea."],
      ["p", "她重新与智明相处，看见他已经拥有相对稳定而优渥的生活，也再次面对两人共同生活的可能。如果她最初只是因为工作不顺利、收入不足或对未来缺乏安全感而离开，那么智明所能提供的稳定生活，似乎已经足以成为留下的理由。", "She spends time with Jimyeong again, sees that he now has a relatively stable and comfortable life, and faces once more the possibility of a life together. If she had originally left only because work was going badly, income was insufficient or she felt insecure about the future, the stable life Jimyeong can offer would seem reason enough to stay."],
      ["p", "但桂娜最终还是选择返回澳大利亚。", "But Gyena finally chooses to go back to Australia."],
      ["p", "我觉得，这个决定比她第一次离开韩国更加重要。第一次离开时，她需要通过距离来摆脱自己不喜欢的生活；第二次离开时，她已经能够在重新面对那种生活之后，确认它依然不是自己想要的。前者更接近对现实的不满，后者则是一种逐渐清晰的自我认识。", "I think this decision matters more than her first leaving of Korea. The first time, she needed distance to get away from a life she disliked; the second time, having faced that life again, she can confirm that it is still not what she wants. The former is closer to dissatisfaction with reality, the latter to a self-knowledge that is gradually becoming clear."],
      ["p", "她不再需要证明韩国有多么糟糕，才能为自己的离开寻找理由。她也不必否认智明的感情、稳定工作的价值，或者故乡值得留恋的部分。她只是终于明白，一种生活可以很好，却不一定适合自己；一个人可以真诚地爱着另一个人，却仍然不愿意接受对方所期待的未来。", "She no longer needs to prove how bad Korea is in order to justify leaving. Nor does she have to deny Jimyeong’s love, the value of a stable job, or the parts of home worth missing. She simply comes to understand at last that a life can be good without being right for her, and that one can love another person sincerely and still be unwilling to accept the future that person expects."],
      ["p", "这种变化让我尤其感动。年轻时，我们常常需要通过否定某些东西，才能确信自己的选择是正确的。我们会努力证明离开的地方不值得留恋，放弃的机会并没有那么好，失去的关系本来就不适合自己。仿佛只有这样，才能减轻选择所带来的不安。但桂娜的第二次离开，让我看到另一种可能：我们可以承认没有选择的那条道路同样具有价值，却依然不后悔自己的决定。", "This change moves me especially. When we are young, we often need to negate something in order to be sure our choice was right. We work to prove that the place we left was not worth missing, that the opportunity we gave up was not so good, that the relationship we lost was not right for us anyway, as if only that could ease the unease that choosing brings. But Gyena’s second leaving shows me another possibility: we can admit that the road not taken is just as valuable and still not regret our decision."],
      ["p", "不过，当我试着从桂娜的个人成长重新回望她最初的处境时，也开始意识到小说中存在着一种更深的矛盾。桂娜之所以能够逐渐摆脱韩国社会对成功的定义，并不只是因为她改变了自己的想法，还因为她真的能够离开那个环境。如果她始终留在原来的金融公司，每天乘坐同样拥挤的地铁，面对同样的工作压力，那么仅仅改变对幸福的理解，是否就足以改变她的生活？", "Yet when I try to look back at her original situation from the vantage of her personal growth, I begin to notice a deeper contradiction in the novel. Gyena is able to gradually shake off Korean society’s definition of success not only because she changed her mind, but because she was actually able to leave that environment. If she had stayed at the same financial company, riding the same crowded subway every day under the same work pressure, would merely changing her understanding of happiness have been enough to change her life?"],
      ["p", "这让我想到，个人的自由并不完全存在于内心。我们当然可以拒绝以收入和职位衡量自己的价值，但房租不会因此降低，工作时间不会因此缩短，家庭责任也不会因为我们不再认同某种社会标准而自动消失。一个人可以在思想上拒绝竞争，却未必能够在现实中承担退出竞争的后果。", "This makes me think that personal freedom does not exist wholly within the mind. We can of course refuse to measure our worth by income and position, but the rent will not drop because of it, working hours will not shorten, and family responsibilities will not disappear just because we no longer accept a social standard. A person can reject competition in thought without being able to bear the consequences of withdrawing from it in reality."],
      ["p", "桂娜的选择之所以能够实现，除了她自己的勇气与努力，也因为她拥有一定的教育背景、语言学习能力，以及承担重新开始风险的可能。即使这些条件远不足以保证移民成功，也已经意味着她拥有某些人难以取得的选择空间。对于那些必须照顾家人、缺乏积蓄，或者根本无法跨越国境的人而言，离开或许从来不是一个真正存在的选项。", "Gyena’s choice could be realized not only because of her own courage and effort but also because she has some educational background, the ability to learn a language, and the capacity to bear the risk of starting over. Even if these conditions fall far short of guaranteeing a successful emigration, they already mean she has room to choose that some people cannot obtain. For those who must care for family, lack savings, or cannot cross a border at all, leaving may never have been a real option."],
      ["p", "于是，小说最初那个关于个人幸福的问题，逐渐变成了一个关于社会结构的问题。如果一个人必须通过离开，才能摆脱某种令自己疲惫的生活，那么问题就不只是他有没有勇气作出选择，还包括为什么原有的社会无法为他提供其他可能。桂娜通过移民改变了自己与社会规则的关系，但那些仍然生活在原有规则之中的人，并不会因为她的离开而获得同样的自由。", "So the novel’s opening question about personal happiness gradually becomes a question about social structure. If a person must leave in order to escape a life that exhausts them, the issue is not only whether they have the courage to choose, but also why the society they came from could not offer them other possibilities. Through emigration Gyena changes her relationship to society’s rules, but those who still live within the old rules do not gain the same freedom because she left."],
      ["p", "当然，我并不认为桂娜有义务留下来改变韩国。个人没有责任为了社会进步而牺牲自己的一生。离开不必然是逃避，留下也不必然是勇敢。尤其当一个人已经清楚意识到原有的生活无法继续时，要求她为了家庭、故乡或集体期待而留下，或许只是另一种对个人自由的限制。", "Of course, I do not think Gyena has any duty to stay and change Korea. No individual is obliged to sacrifice their whole life for social progress. Leaving is not necessarily escape, and staying is not necessarily brave. Especially when someone has clearly realized that her old life cannot continue, demanding that she stay for family, homeland or collective expectation may be just another restriction on personal freedom."],
      ["p", "但同样重要的是，我们不能因为有人成功离开，就将留下者的困境归结为缺乏勇气或能力。当改变生活的建议总是换工作、换城市，甚至换国家时，原本属于社会结构的问题，便被悄悄转化成了个人选择的问题。仿佛只要足够努力，每个人都能够逃离；而那些没有离开的人，就应该为自己的处境负责。", "But it matters just as much that we not attribute the plight of those who stay to a lack of courage or ability merely because some have left successfully. When the advice for changing one’s life is always to change jobs, change cities, even change countries, problems that belong to the social structure are quietly turned into problems of personal choice. As if anyone could escape with enough effort, and those who did not leave should be held responsible for their own situation."],
      ["p", "因此，我认为《한국이 싫어서》最值得思考的，并不是韩国与澳大利亚哪一个国家更好，而是桂娜的经历同时揭示了个人选择的力量与局限。她从韩国金融公司的办公室走向澳大利亚的餐馆，从对原有生活的厌倦走向对自身选择的承担，最终能够在重新面对故乡时，确认自己愿意过怎样的人生。但她的成长并不能消除一个事实：并不是所有人都拥有重新选择生活环境的条件。", "So I think what is most worth pondering in *한국이 싫어서* is not which is better, Korea or Australia, but that Gyena’s experience reveals both the power and the limits of personal choice. She moves from the office of a Korean financial company to a restaurant in Australia, from weariness with her old life to bearing responsibility for her own choices, and is finally able, on facing her homeland again, to confirm what kind of life she wants to live. But her growth cannot erase a fact: not everyone has the means to choose their living environment anew."],
      ["p", "小说结束之后，我仍然会想到桂娜曾经挤过的地铁，以及那间她最终离开的金融公司。第二天清晨，地铁依然会挤满赶着上班的人，办公室里的工作也不会因为她的离开而停止。或许其中有人和她一样，早已厌倦了这样的生活，却因为房贷、父母、孩子，或仅仅因为没有足够的积蓄，而无法买下一张前往澳大利亚的机票。", "After the novel ends, I still think of the subway Gyena used to ride, and of the financial company she finally left. The next morning the subway will still be packed with people hurrying to work, and the work in the office will not stop because she is gone. Perhaps some among them are as weary of this life as she was, yet cannot buy a plane ticket to Australia because of a mortgage, parents, children, or simply too little savings."],
      ["p", "我当然为桂娜终于能够选择自己的人生感到欣慰。但我不愿意把她的离开当作所有人的答案。她可以辞职、出国、重新学习，最终决定自己愿意在哪里生活；而那些留下来的人，或许连失去一份工作的风险都承担不起。我们赞美前者的勇气，却不能因此把后者的困境解释为缺乏勇气。", "I am of course glad that Gyena can finally choose her own life. But I do not want to treat her leaving as the answer for everyone. She can quit, go abroad, study again, and in the end decide where she wants to live; those who stay may not even be able to afford the risk of losing a job. We praise the courage of the former, but cannot therefore explain the latter’s plight as a lack of courage."],
      ["p", "如果一个人必须离开自己的国家，才能摆脱一种令他窒息的生活，那么值得追问的，不只是他为什么选择离开，还有为什么原来的社会无法让他留下。", "If a person must leave their country in order to escape a life that suffocates them, what deserves asking is not only why they chose to leave, but also why the society they came from could not let them stay."],
      ["p", "桂娜最终离开了韩国，但那趟拥挤的早班地铁依然在那里。", "Gyena finally left Korea, but that crowded morning subway is still there."],
      ["p", "我想，一个社会真正值得骄傲的，不是它培养出了多少有能力走向世界的人，而是那些没有离开的人，是否也能在每天清晨走进地铁时，相信自己正在奔赴的，不只是一份不得不维持的生计，还有一个值得期待的人生。", "I think what a society can truly be proud of is not how many people it has raised who are able to go out into the world, but whether those who did not leave can also, stepping into the subway each morning, believe that what they are hurrying toward is not only a livelihood they have no choice but to keep, but also a life worth looking forward to."]
    ]
  },
  {
    "date": "2012-08-01",
    "title": "What Memory Makes of Love",
    "slug": "the-lover",
    "category": "Novel",
    "book": {
      "cover": "lamant.jpg",
      "title": "L’Amant",
      "author": "Marguerite Duras",
      "language": "French",
      "country": "France",
      "original": "French",
      "lines": [
        "Novel · Éditions de Minuit, 1984",
        "An old woman remembers the affair she had at fifteen and a half with a wealthy Chinese man in French Indochina."
      ]
    },
    "place": "于越南胡志明市\nHo Chi Minh City, Vietnam",
    "languages": ["Chinese", "English"],
    "prose": [
      ["《情人》最令我着迷的，并不是那个十五岁半的法国少女与中国情人之间的爱情，而是杜拉斯始终没有让我们确定：我们读到的究竟是少女当年真实的感受，还是一个年老的女人在漫长岁月之后，为那段经历找到的解释。", "What fascinates me most about *L’Amant* is not the love between the fifteen-and-a-half-year-old French girl and her Chinese lover, but the fact that Duras never lets us be sure whether what we are reading is the girl’s real feeling at the time, or an explanation that an old woman, after long years, has found for that experience."],
      ["小说开头，杜拉斯没有从少女时代写起，而是先让我们看见一个衰老的女人，随后才突然回到湄公河上的渡船，回到那个戴着男式毡帽、穿着旧丝裙、脚踩金色高跟鞋的少女。", "The novel does not begin in the girl’s youth. Duras first shows us an aged woman, and only then does it turn abruptly back to the ferry on the Mekong, to the girl in a man’s felt hat, a worn silk dress and gold high-heeled shoes."],
      ["尤其令我难忘的是，杜拉斯反复描写这一形象，仿佛它是一张决定了她一生的照片。然而，那张照片其实从未被拍摄。", "What I find most unforgettable is that Duras describes this image again and again, as if it were a photograph that decided her whole life. Yet that photograph was never taken."],
      ["我觉得，这个细节揭示了整部小说最深刻的矛盾：记忆并不只是保存过去，也在不断重新创造过去。少女当年或许只是穿着自己能够找到的衣服，但多年之后，那顶帽子、那双高跟鞋，已经成为贫困、欲望与早熟的象征。我们无法确定，这些意义究竟属于当年的少女，还是后来不断回望她的女人。", "I think this detail reveals the deepest contradiction of the whole novel: memory does not merely preserve the past, it keeps re-creating it. The girl may simply have worn whatever clothes she could find, but years later the hat and the high heels have become symbols of poverty, desire and precocity. We cannot be sure whether these meanings belong to the girl of that time or to the woman who keeps looking back at her."],
      ["而这一切发生在法属印度支那。", "And all of this takes place in French Indochina."],
      ["少女来自贫穷的法国殖民者家庭，中国情人却出身富裕的华人家庭。他拥有金钱与汽车，她则拥有殖民社会赋予白人的身份优势。经济上，他比她富有；种族等级上，她却处于更有利的位置。", "The girl comes from a poor family of French colonists, while her Chinese lover comes from a wealthy Chinese family. He has money and a car; she has the advantage of status that colonial society grants to whites. Economically he is richer than she is; in the racial hierarchy she stands in the more favorable position."],
      ["这种交错的权力，使他们的关系无法被简单理解为富有男人对贫穷少女的占有，也无法被浪漫化为超越阶级与种族的爱情。", "This crisscrossing of power means their relationship cannot be understood simply as a rich man’s possession of a poor girl, nor romanticized as a love that transcends class and race."],
      ["在渡船上，男人走近她，显得紧张而拘谨，少女却表现出与年龄不相称的镇定。但我始终怀疑，我们是否应该完全相信这种镇定。一个十五岁半的少女，真的能够如此清楚地理解自己的欲望吗？还是说，年老的叙述者已经知道后来发生了什么，因此将某种清醒与主动，重新赋予了当年的自己？", "On the ferry the man approaches her, nervous and constrained, while the girl shows a composure out of keeping with her age. But I have always wondered whether we should believe that composure entirely. Could a girl of fifteen and a half really understand her own desire so clearly? Or does the old narrator, who knows what happened afterward, give her younger self a clarity and agency she did not then have?"],
      ["这种疑问在堤岸街的房间里变得更加复杂。少女与中国情人的亲密，始终伴随着金钱、家庭贫困与身份差异。她的家人接受男人带来的物质好处，却仍然轻视他的中国人身份；而男人虽然富有，也无法摆脱父亲对婚姻的安排。", "The question becomes more complicated in the room in Cholon. The girl’s intimacy with her Chinese lover is always accompanied by money, family poverty and differences of status. Her family accepts the material benefits the man brings yet still looks down on him for being Chinese; and the man, though wealthy, cannot escape his father’s arrangements for his marriage."],
      ["我觉得，杜拉斯真正写出的，不是爱情如何战胜这些限制，而是欲望如何在不平等之中发生。少女的主动并不能消除贫困对选择的影响，男人的财富也无法让他摆脱殖民社会与家庭秩序的束缚。", "What Duras really writes, I think, is not how love triumphs over these constraints but how desire arises within inequality. The girl’s initiative cannot remove the effect of poverty on her choices, and the man’s wealth cannot free him from the bonds of colonial society and the family order."],
      ["小说不断变化的叙述人称，又让这一切更加难以确定。有时，叙述者说“我”，仿佛仍然能够触及少女当年的身体；有时，她又把年轻的自己称作“她”，像是在观察一个陌生人。", "The novel’s constantly shifting grammatical person makes all this harder still to pin down. Sometimes the narrator says “I,” as if she could still touch the girl’s body of that time; sometimes she calls her younger self “she,” as if observing a stranger."],
      ["那个少女确实是她，却也已经不再是她。", "That girl is indeed her, and also no longer her."],
      ["这种距离，在少女离开印度支那的轮船场景中尤其动人。她终于离开中国情人，乘船前往法国。在航行途中，她听见音乐，突然哭了。", "This distance is especially moving in the scene on the ship that carries the girl away from Indochina. She has finally left her Chinese lover and is sailing for France. During the voyage she hears music and suddenly weeps."],
      ["此前，她似乎始终保持着某种镇定。但直到真正离开，她才仿佛第一次意识到自己失去了什么。", "Until then she seems always to have kept a certain composure. Only on truly leaving does she seem to realize for the first time what she has lost."],
      ["然而，我仍然不确定，那场哭泣是否意味着她终于明白自己爱着那个男人。或许当年的她只是感到无法解释的悲伤，而多年后的叙述者，才逐渐将这种悲伤理解为爱情。", "Yet I am still not sure whether that weeping means she finally understands that she loved the man. Perhaps at the time she felt only an inexplicable sadness, and it was the narrator, years later, who gradually came to understand that sadness as love."],
      ["小说结尾，多年后的中国情人在电话里告诉她，自己始终爱着她。", "At the end of the novel, years later, the Chinese lover tells her over the telephone that he has always loved her."],
      ["在通常的爱情小说里，这样的告白或许能够证明年轻时的一切都是真正的爱情。但在杜拉斯这里，它反而让我更加犹豫。因为这句话只能从多年之后返回过去，为那些早已结束的时刻赋予新的意义，却无法证明少女当时究竟理解了多少。", "In an ordinary love story, such a confession might prove that everything in youth was true love. But in Duras it makes me hesitate more. This sentence can only travel back from years later, giving new meaning to moments long over, and cannot prove how much the girl understood at the time."],
      ["而且，即使爱情确实存在，也无法抹去金钱、种族与阶级曾经塑造他们关系的事实。爱情可以是真实的，却未必因此就是平等的。", "And even if love did exist, it cannot erase the fact that money, race and class shaped their relationship. Love can be real without therefore being equal."],
      ["读完小说，我最难忘的仍然是那张从未拍摄过的照片。", "After finishing the novel, what I remember most is still the photograph that was never taken."],
      ["十五岁半的少女站在湄公河的渡船上，还不知道自己即将遇见谁，也不知道那段经历将如何留在她的生命之中。", "A girl of fifteen and a half stands on the ferry across the Mekong, not yet knowing whom she is about to meet, nor how that experience will stay in her life."],
      ["多年以后，一个已经衰老的女人不断回到那个瞬间，试图从少女的姿态与目光中，辨认出后来那个自己的起点。", "Years later an aged woman keeps returning to that moment, trying to recognize in the girl’s bearing and gaze the starting point of the self she became."],
      ["但她可以重新描写那个少女，却再也无法像她一样，对未来一无所知。", "But she can describe that girl anew, and can never again be like her, knowing nothing of the future."],
      ["或许，回忆最令人悲伤的地方，并不是我们无法回到过去，而是当我们终于能够理解过去时，那个真正经历过去的自己，早已不在那里了。", "Perhaps the saddest thing about memory is not that we cannot return to the past, but that when we are finally able to understand it, the self who actually lived it is long since gone."]
    ]
  },
  {
    "date": "2017-05-03",
    "title": "The Self-Deception of the Lucid",
    "slug": "the-self-deception-of-the-lucid",
    "category": "Philosophy",
    "book": {
      "cover": "either_or.jpg",
      "title": "Either/Or",
      "author": "Søren Kierkegaard",
      "language": "English",
      "country": "Denmark",
      "original": "Danish",
      "lines": [
        "Philosophy · Danish original, first published 1843",
        "Part I gathers the papers of an aesthetic young man, from the “Rotation of Crops” to “The Seducer’s Diary,” and shows a life lived at a distance from choice."
      ]
    },
    "place": "于加州圣克拉拉\nSanta Clara, CA",
    "languages": ["Chinese", "English"],
    "prose": [
      ["读《非此即彼》第一卷，最令我不安的，并不是克尔凯郭尔对享乐主义的批判，而是他笔下审美者那种以清醒逃避生活的能力。在《轮作法》中，审美者通过不断改变体验与观看世界的方式抵御无聊；在《诱惑者日记》中，约翰内斯甚至将爱情变成一场精心设计的审美实验。他们并非缺乏洞察力，恰恰相反，他们太擅长观察、分析和解释生活，以至于现实本身也成为可以保持距离的审美对象。他们拥有理解生活的自由，却缺乏真正选择生活的勇气。",
       "What unsettled me most in the first volume of *Either/Or* was not Kierkegaard’s critique of hedonism but the way his aesthetes use lucidity to escape life. In “Rotation of Crops,” the aesthete fends off boredom by constantly changing how he experiences and looks at the world; in “The Seducer’s Diary,” Johannes even turns love into a carefully designed aesthetic experiment. They do not lack insight. On the contrary, they are so good at observing, analyzing and explaining life that reality itself becomes an object of contemplation to be kept at a distance. They have the freedom to understand life, but not the courage to actually choose it."],
      ["这种矛盾让我想到自己身处的硅谷，以及当下近乎狂热的人工智能浪潮。我时常质疑那些关于创新、颠覆与改变世界的宏大叙事：高昂的薪酬、精致的职业身份、不断膨胀的技术想象，是否真的对应着同等程度的社会价值？我们热衷于展示创造力，强调自己工作的革命性，却未必认真追问这些成果究竟改善了谁的生活。有时我甚至觉得，硅谷与琼·狄迪恩笔下的好莱坞并无太大区别：人们沉迷于自己创造的神话，仿佛只要叙事足够动人，现实就不再重要。",
       "This contradiction makes me think of Silicon Valley, where I live, and of the almost feverish wave of artificial intelligence today. I often doubt the grand narratives of innovation, disruption and changing the world: do the high salaries, polished professional identities and ever-expanding technological imaginations really correspond to an equal measure of social value? We love to show off our creativity and stress how revolutionary our work is, yet we do not necessarily ask in earnest whose lives these results actually improve. Sometimes I even feel that Silicon Valley is not so different from Joan Didion’s Hollywood: people are absorbed in the myths they have made, as if reality no longer mattered once the story is moving enough."],
      ["然而，真正令我不安的，是我自己也深深参与其中。我一边批判这个体系的虚荣，一边享受它所赋予的财富、身份与机会；一边怀疑职业成功的意义，一边认真规划晋升、投资回报与财务自由。我可以在思想上否定这些价值标准，却依然在生活中依赖它们。更难以承认的是，我并不只是被迫接受这些规则，我也真诚地渴望成功所带来的认可与安全感。我所批判的，恰恰也是我所追求的；我所鄙视的虚荣，也早已成为自我认同的一部分。",
       "Yet what truly disturbs me is that I am deeply part of it myself. I criticize the vanity of this system while enjoying the wealth, status and opportunities it gives me; I doubt the meaning of professional success while earnestly planning promotions, investment returns and financial freedom. I can reject these standards in thought and still depend on them in life. Harder still to admit, I am not merely forced to accept these rules; I sincerely long for the recognition and security that success brings. What I criticize is exactly what I pursue, and the vanity I despise has long since become part of my sense of who I am."],
      ["我曾经认为，财务自由能够让我最终摆脱这种矛盾。只要积累足够的财富，就可以不再依赖职业身份，不再被薪酬和绩效定义，转而追求阅读、写作、旅行，以及那些真正值得投入时间的事情。但克尔凯郭尔让我开始怀疑，这是否只是另一种更精致的逃避？我不断计算距离自由还有多少年，却很少追问，为什么那些被我视为真正重要的事情，必须等到未来才能开始。或许我并不是在准备另一种生活，而是在用对未来生活的想象，缓解自己对当下生活的不满。",
       "I used to think financial freedom would finally free me from this contradiction. Once I had accumulated enough wealth, I could stop relying on a professional identity, stop being defined by pay and performance, and turn to reading, writing, travel and the things truly worth my time. But Kierkegaard made me suspect that this may be just another, more refined kind of escape. I keep counting how many years remain until freedom, yet rarely ask why the things I consider truly important must wait for the future to begin. Perhaps I am not preparing for another life at all, but using the image of a future life to soothe my dissatisfaction with the present one."],
      ["这正是《非此即彼》中审美者的困境：他总是保留可能性，却迟迟不愿将可能性变成现实。因为真正的选择意味着放弃，意味着接受平凡、重复与不可逆转的后果。而我对财务自由的向往，是否也隐含着类似的欲望——希望拥有足够多的选择，却不必立即承担任何一种选择的代价？我希望既获得世俗意义上的成功，又保有超越世俗的精神独立；既享受体系的回报，又不愿承认自己对体系的依附。我想同时成为参与者与旁观者，却不愿接受两者之间无法消除的冲突。",
       "This is exactly the aesthete’s predicament in *Either/Or*: he always keeps possibilities open and is slow to turn them into reality. A real choice means giving something up, and accepting the ordinary, the repetitive and the irreversible consequences. Does my longing for financial freedom hide a similar desire, to have plenty of options without having to pay the price of any one of them right now? I want worldly success and a spiritual independence that rises above the world; I want the rewards of the system and I am unwilling to admit my dependence on it. I want to be participant and spectator at once, and I refuse to accept the conflict between the two that cannot be removed."],
      ["更讽刺的是，我甚至可能因为意识到这种矛盾，而产生另一层自我满足。我能够看穿硅谷的幻象，能够批判自己的功利，甚至能够把这种自我批判写成一篇看似深刻的哲学随笔。但这是否恰恰重复了审美者的行为？约翰内斯将爱情转化为艺术，而我则可能将自己的虚伪转化为思想。原本应该促使我改变的不安，最终成为一种值得欣赏的智识体验。承认矛盾并不需要我放弃任何东西，反而让我获得一种比盲目追逐成功更加优雅的自我形象。",
       "More ironic still, I may even take a further layer of self-satisfaction in recognizing this contradiction. I can see through the illusions of Silicon Valley, criticize my own utilitarianism, and even write that self-criticism up as a seemingly profound philosophical essay. But isn’t that precisely what the aesthete does? Johannes turns love into art, and I may be turning my own hypocrisy into thought. The unease that should have pushed me to change becomes, in the end, an intellectual experience to be admired. Admitting the contradiction costs me nothing; it gives me a more elegant self-image than blindly chasing success."],
      ["最精致的自我欺骗，也许不是相信一个虚假的世界，而是相信自己已经看穿了这个世界，因此不再需要改变自己。我可以在思想上反抗整个世界，却在行动上完全服从它；可以不断质疑成功的意义，却依然害怕失去成功；可以清醒地描述生活的荒谬，却继续过着与昨天毫无区别的生活。我的清醒不仅没有使我摆脱幻象，反而可能成为让我心安理得地留在其中的理由。",
       "The most refined self-deception may not be believing in a false world, but believing that I have already seen through the world and therefore no longer need to change myself. I can rebel against the whole world in thought and obey it completely in action; I can keep questioning the meaning of success and still fear losing it; I can lucidly describe the absurdity of life and go on living exactly as I did yesterday. My lucidity has not freed me from illusion. It may be the very reason I can stay inside it with a clear conscience."],
      ["在我看来，《非此即彼》第一卷最出色的地方，是克尔凯郭尔并没有站在道德高处简单地谴责享乐主义，而是让审美者以自己的声音暴露自身的困境。从《轮作法》的机智与冷漠，到《诱惑者日记》的精密与残酷，审美者的才华与空虚始终相互交织。克尔凯郭尔最深刻的洞察在于：一个人并不需要愚昧或放纵才能陷入绝望，恰恰是过度的聪明、敏感与自我意识，也可能成为逃避存在的工具。这使《非此即彼》超越了普通的道德说教，成为一部关于现代人精神困境的心理剖析。",
       "To my mind, the finest thing about the first volume of *Either/Or* is that Kierkegaard does not simply condemn hedonism from a moral height, but lets the aesthete expose his own predicament in his own voice. From the wit and coldness of “Rotation of Crops” to the precision and cruelty of “The Seducer’s Diary,” the aesthete’s talent and emptiness are always intertwined. Kierkegaard’s deepest insight is that one does not need ignorance or indulgence to fall into despair; excessive cleverness, sensitivity and self-consciousness can be just as much a tool for evading existence. This lifts *Either/Or* above ordinary moral preaching and makes it a psychological dissection of the spiritual predicament of modern people."],
      ["但我也认为，这本书对审美生活的呈现存在某种刻意的极端化。审美、反思与保持距离，并不必然意味着逃避责任；对既有价值的怀疑，也可能是通向真正自主选择的必要过程。尤其在一个将职业成功、生产效率与社会认可奉为圭臬的时代，拒绝轻易作出承诺，有时反而是一种值得珍惜的独立。克尔凯郭尔的力量不在于证明审美生活注定失败，而在于迫使读者辨认：自己的怀疑究竟源于思想上的诚实，还是出于不愿承担选择后果的怯懦？这也是我认为《非此即彼》至今仍值得阅读的原因。它没有让我轻易找到生活的答案，却使我再也无法毫无疑问地相信自己的清醒。",
       "But I also think the book presents the aesthetic life with a certain deliberate exaggeration. Aesthetic sensibility, reflection and distance do not necessarily mean evading responsibility, and doubting inherited values may be a necessary step toward truly autonomous choice. In an age that treats professional success, productivity and social approval as gospel, refusing to commit too readily can be an independence worth treasuring. Kierkegaard’s strength lies not in proving that the aesthetic life is doomed, but in forcing the reader to work out whether their doubt springs from intellectual honesty or from a cowardly unwillingness to bear the consequences of choosing. That is why I think *Either/Or* is still worth reading. It did not hand me an easy answer about how to live, but it left me unable ever again to trust my own lucidity without question."],
      ["当然，克尔凯郭尔并不是要求我们放弃美、财富或世俗生活。第一卷真正揭示的，是当反思与审美成为逃避选择的方式时，一个人即使拥有再丰富的精神世界，也可能始终无法真正成为自己。对我而言，问题并不在于是否应该离开硅谷，或者放弃现有的职业与财富，而在于我是否愿意承认自己的选择，并为自己声称相信的价值承担实际代价。继续留下可以是一种选择，离开也可以是一种选择；真正的逃避，是永远站在两者之间，用批判维持精神上的距离，却让惯性替自己决定人生。",
       "Of course, Kierkegaard is not asking us to give up beauty, wealth or worldly life. What the first volume really reveals is that when reflection and aesthetics become ways of avoiding choice, a person, however rich an inner world they have, may never truly become themselves. For me the question is not whether I should leave Silicon Valley or give up my career and wealth, but whether I am willing to acknowledge my choices and bear the actual cost of the values I claim to believe in. Staying can be a choice, and so can leaving; the real evasion is to stand forever between the two, keeping a spiritual distance through criticism while letting inertia decide my life for me."],
      ["或许《非此即彼》留给我最深刻的启示是，清醒并不天然意味着自由，自我批判也不必然通向真实。一个人最难面对的，未必是世界如何欺骗了自己，而是自己如何利用对世界的洞察，继续维持一种不愿改变的生活。当我如此清楚自己不愿成为怎样的人，却依然按照那个人的方式生活时，我究竟是在反抗幻象，还是在为自己的妥协寻找一种更高明的解释？",
       "Perhaps the deepest lesson *Either/Or* leaves me is that lucidity does not naturally mean freedom, and self-criticism does not necessarily lead to authenticity. What a person finds hardest to face may not be how the world has deceived them, but how they use their insight into the world to keep living a life they are unwilling to change. When I know so clearly what kind of person I do not want to be, and yet go on living the way that person lives, am I resisting the illusion, or merely finding a cleverer explanation for my compromise?"]
    ]
  },
  {
    "date": "2017-10-10",
    "title": "From Aesthetic Escape to the Duty of Love",
    "slug": "from-aesthetic-escape-to-the-duty-of-love",
    "category": "Philosophy",
    "book": {
      "cover": "works_of_love.jpg",
      "title": "Works of Love",
      "author": "Søren Kierkegaard",
      "language": "English",
      "country": "Denmark",
      "original": "Danish",
      "lines": [
        "Philosophy · Danish original, first published 1847",
        "A series of Christian deliberations on loving one’s neighbor, in which love is measured by deeds and duty rather than by feeling."
      ]
    },
    "place": "于加州圣克拉拉\nSanta Clara, CA",
    "languages": ["Chinese", "English"],
    "prose": [
      ["我越来越怀疑，一个人对世界的理解能力，与他真正关怀他人的能力之间，或许并没有必然联系。我们可以对社会不公侃侃而谈，对技术进步背后的虚荣保持清醒，甚至真诚地相信自己关心人类的未来，却未必愿意为身边某个具体的人付出时间、耐心或利益。思想上的同情如此容易，现实中的责任却如此沉重。更令人不安的是，我们有时甚至会因为自己拥有这些高尚的关怀，而产生某种道德上的满足。",
       "I increasingly suspect that there may be no necessary connection between a person’s ability to understand the world and their ability to truly care for others. We can speak eloquently about social injustice, stay clear-eyed about the vanity behind technological progress, and even sincerely believe we care about humanity’s future, yet not necessarily be willing to give time, patience or advantage to one specific person beside us. Sympathy in thought is so easy, and responsibility in reality so heavy. More unsettling still, we sometimes take a kind of moral satisfaction in the very fact that we hold such noble concerns."],
      ["克尔凯郭尔在《爱的作为》中触及的，正是这种思想与行动之间的裂隙。他不满足于将爱理解为一种情感、吸引或精神体验，而是将其置于具体的伦理责任之中。与《非此即彼》中那个不断将生活转化为审美对象的个体不同，《爱的作为》要求人走出自我，承认他人并非自己情感与思想的附属品。爱不再取决于我如何感受自己，而在于我如何对待另一个人。这种转变也让我不得不重新审视自己所追求的成功、自由与人生意义。",
       "What Kierkegaard touches on in *Works of Love* is precisely this rift between thought and action. He is not content to understand love as a feeling, an attraction or a spiritual experience; he places it within concrete ethical responsibility. Unlike the individual in *Either/Or* who keeps turning life into an aesthetic object, *Works of Love* asks a person to step out of the self and recognize that others are not appendages of one’s own feelings and thoughts. Love no longer depends on how I feel about myself, but on how I treat another person. This shift forced me to re-examine the success, freedom and meaning in life that I pursue."],
      ["这种思想也让我重新审视自己对硅谷文化的批判。我经常质疑人工智能行业对创新、效率与社会价值的夸大，认为许多人沉迷于改变世界的宏大叙事，却忽略了真实世界中的人。然而，克尔凯郭尔让我意识到，能够指出这种矛盾，并不意味着我自己已经超越了它。我同样享受高薪、职业认可与财富积累，也同样容易把成功视为个人价值的证明。我可以准确地分析社会的问题，却未必愿意牺牲自己的时间与利益，去改善一个具体的人的处境。",
       "It also made me re-examine my own critique of Silicon Valley culture. I often question the AI industry’s exaggeration of innovation, efficiency and social value, thinking that many people are absorbed in grand narratives of changing the world while neglecting real people. But Kierkegaard made me see that being able to point out this contradiction does not mean I have moved beyond it. I too enjoy a high salary, professional recognition and growing wealth, and I too easily treat success as proof of my worth. I can analyze society’s problems accurately, yet may not be willing to sacrifice my own time and interests to improve the situation of one particular person."],
      ["更难以面对的是，我所追求的财务自由，是否也带有某种以自我为中心的想象？我希望未来能够摆脱工作的约束，拥有阅读、旅行与自由支配时间的权利。这些愿望本身并没有错，但如果自由最终只是意味着我不再需要回应他人的要求，那么这种自由究竟通向了什么？我努力积累财富，是为了拥有更多爱与承担责任的能力，还是为了让自己有一天可以不再被任何人打扰？",
       "Harder to face is whether the financial freedom I seek also carries a self-centered fantasy. I hope that in the future I can be free of the constraints of work and have the right to read, travel and spend my time as I please. There is nothing wrong with these wishes in themselves, but if freedom finally means only that I no longer have to answer anyone’s demands, where does such freedom lead? Am I accumulating wealth to gain a greater capacity to love and bear responsibility, or so that one day I will not be disturbed by anyone?"],
      ["《爱的作为》最令我敬佩的，是它拒绝将爱简化为一种高尚的自我感觉。克尔凯郭尔强调爱邻人，意味着爱的对象不能仅限于那些令我愉悦、与我相似，或者能够回报我的人。爱不是选择值得欣赏的人，而是承认每个人都具有不应被个人偏好抹去的价值。尤其重要的是，爱不能只停留在思想与语言之中，它必须通过实际的行为得到体现。",
       "What I admire most in *Works of Love* is that it refuses to reduce love to a noble feeling about oneself. Kierkegaard’s emphasis on loving the neighbor means that the objects of love cannot be limited to those who please me, resemble me or can repay me. Love is not choosing people worthy of admiration, but recognizing that everyone has a value that personal preference should not erase. Above all, love cannot remain in thought and words; it must be embodied in actual deeds."],
      ["不过，我也认为这本书存在值得商榷的地方。克尔凯郭尔将基督教的爱之诫命置于如此核心的位置，虽然赋予了爱超越个人情感的普遍性，却也留下了一个困难：当爱成为义务，它是否仍然保有亲密关系中的自发性、激情与独特性？对所有人的平等关怀固然重要，但我们对伴侣、家人和朋友承担的特殊责任，是否真的能够完全纳入普遍的爱邻人原则？克尔凯郭尔试图调和两者，但这种张力并没有因此消失。",
       "Still, I think the book has points open to question. By putting the Christian commandment of love at its very center, Kierkegaard gives love a universality that goes beyond personal feeling, but he also leaves a difficulty: once love becomes a duty, does it still keep the spontaneity, passion and uniqueness of intimate relationships? Equal care for everyone matters, but can the special responsibilities we bear toward partners, family and friends really be folded entirely into the universal principle of neighbor-love? Kierkegaard tries to reconcile the two, but the tension does not disappear."],
      ["在我看来，《爱的作为》的伟大，并不在于它提供了一套可以轻易实践的道德准则，而在于它彻底改变了衡量人生的尺度。一个人可以拥有深刻的思想、敏锐的批判能力和令人羡慕的成就，却依然可能在最基本的人际责任面前显得贫乏。与《非此即彼》相比，这本书不再只是追问我是否真正选择了自己的生活，而是进一步追问：我的生活是否真正为他人留下了位置？",
       "To my mind, the greatness of *Works of Love* lies not in offering a set of moral rules that are easy to practice, but in thoroughly changing the measure by which a life is judged. A person can have profound thoughts, a sharp critical mind and enviable achievements, and still look impoverished before the most basic interpersonal responsibilities. Compared with *Either/Or*, this book no longer only asks whether I have truly chosen my own life; it goes further and asks whether my life truly leaves room for others."],
      ["或许最值得警惕的，不是我们缺乏爱的能力，而是我们太擅长谈论爱、理解爱，甚至欣赏自己富有同情心的形象，却始终不愿承担爱所要求的具体代价。我可以在思想上关怀整个世界，却在行动上忽略身边的人。而克尔凯郭尔让我意识到，真正检验一个人的，也许不是他能够提出多么深刻的社会批判，而是当另一个人需要他时，他究竟愿意付出什么。",
       "Perhaps what we most need to guard against is not a lack of the capacity to love, but that we are too good at talking about love, understanding love, even admiring our own image as compassionate people, while never willing to bear the concrete cost that love demands. I can care for the whole world in thought and neglect the people beside me in action. And Kierkegaard made me realize that the real test of a person may not be how profound a social critique they can offer, but what they are actually willing to give when another person needs them."]
    ]
  },
  {
    "date": "2019-11-27",
    "title": "When the Self Becomes Its Own Prisoner",
    "slug": "when-the-self-becomes-its-own-prisoner",
    "category": "Philosophy",
    "book": {
      "cover": "sickness_unto_death.jpg",
      "title": "The Sickness Unto Death",
      "author": "Søren Kierkegaard",
      "language": "English",
      "country": "Denmark",
      "original": "Danish",
      "lines": [
        "Philosophy · Danish original, first published 1849",
        "A close analysis of despair as the self’s failure to rightly become itself, and of faith as the way out."
      ]
    },
    "place": "于加州圣克拉拉\nSanta Clara, CA",
    "languages": ["Chinese", "English"],
    "prose": [
      ["我一直以为，认识自己是一种值得追求的能力。一个人越能理解自己的欲望、矛盾与局限，就越有可能摆脱外界的定义，获得真正的自由。然而，自我认识并不必然带来自我接纳，甚至可能使人陷入更深的困境。我们可以清楚地知道自己为何焦虑、为何追逐成功、为何始终无法满足，却依然无法停止这一切。最令人不安的，或许不是我们不了解自己，而是即使充分了解自己，也未必能够与自己和解。",
       "I always assumed that knowing oneself was an ability worth pursuing. The better a person understands their desires, contradictions and limits, the more likely they are to escape external definitions and gain real freedom. But self-knowledge does not necessarily bring self-acceptance, and may even plunge a person into a deeper predicament. We can know clearly why we are anxious, why we chase success, why we are never satisfied, and still be unable to stop any of it. What is most unsettling may not be that we do not understand ourselves, but that even fully understanding ourselves, we may not be able to be reconciled with ourselves."],
      ["克尔凯郭尔在《致死的疾病》中，将这种困境推进到了存在的根本。他所说的绝望，并不只是通常意义上的痛苦或悲伤，而是自我无法正确地成为自身的状态。人既可能因为不愿成为自己而绝望，也可能因为执意依靠自身力量定义自己而绝望。尤其令我震撼的是，一个人即使生活顺遂、事业成功、对自身处境感到满意，也可能处于绝望之中，因为绝望并不必然表现为可以察觉的痛苦。它甚至可能隐藏在一种看似完整、稳定而令人羡慕的生活之下。",
       "In *The Sickness Unto Death*, Kierkegaard pushes this predicament to the root of existence. The despair he speaks of is not merely pain or sadness in the ordinary sense, but the state in which the self fails to become itself rightly. A person may despair because they are unwilling to be themselves, or because they insist on defining themselves by their own strength. What struck me most is that someone whose life goes smoothly, whose career succeeds and who is content with their situation may still be in despair, because despair does not necessarily show itself as perceptible suffering. It may even hide beneath a life that looks whole, stable and enviable."],
      ["这种理解让我重新审视自己的职业经历。从大学毕业到进入新的工作环境，我曾将许多重要的成就视为人生阶段性的答案。获得一份理想的工作、承担更大的责任、得到他人的认可，似乎都意味着自己正在逐渐接近那个希望成为的人。然而，每当一个目标实现，满足感往往很快被新的要求取代。我开始思考下一次晋升、下一项成果，以及如何证明自己仍然值得这些机会。原本应该带来肯定的成就，反而可能成为继续要求自己的理由。我并非不知道这种循环，却很难彻底摆脱它。",
       "This understanding made me re-examine my own career. From graduating from university to entering new working environments, I treated many important achievements as provisional answers to my life. Landing an ideal job, taking on greater responsibility and winning others’ recognition all seemed to mean that I was getting closer to the person I hoped to become. Yet each time a goal was reached, the satisfaction was quickly replaced by new demands. I began thinking about the next promotion, the next result, and how to prove I still deserved these opportunities. Achievements that should have brought affirmation became reasons to keep demanding more of myself. It is not that I am unaware of this cycle; I just find it hard to break out of it completely."],
      ["更微妙的矛盾是，我并不愿意成为一个完全由职业身份定义的人。我重视阅读、哲学与独立思考，也希望自己能够保持对社会成功标准的怀疑。但我有时又会用同样的成就逻辑衡量自己的精神生活：读过多少书，理解了多少思想，是否比过去更加成熟，是否拥有更独立的判断。甚至自我反思，也可能被纳入一种持续进步的叙事之中。我试图通过不断完善自己来获得自由，却逐渐发现，那个必须不断变得更好的自己，恰恰可能是我无法获得安宁的原因。",
       "A subtler contradiction is that I do not want to be someone defined entirely by a professional identity. I value reading, philosophy and independent thinking, and I hope to stay skeptical of society’s standards of success. Yet sometimes I measure my inner life by the same logic of achievement: how many books I have read, how many ideas I have understood, whether I am more mature than before, whether my judgment is more independent. Even self-reflection can be folded into a narrative of continuous progress. I try to gain freedom by constantly perfecting myself, and gradually find that the self that must always become better may be exactly why I cannot find peace."],
      ["克尔凯郭尔对绝望的分析，最精彩之处在于他区分了不同的自我关系。软弱的绝望表现为不愿成为自己，而反抗的绝望则表现为执意以自己的力量成为自己。后者尤其值得深思：一个人看似已经摆脱了外界评价，拥有强烈的独立意识，却可能只是将自己变成了新的权威。他拒绝接受自身的有限性，试图成为自己存在的最终设计者，甚至将对命运的反抗当作自我认同的基础。他越是坚持绝对自主，就越无法摆脱那个必须由自己创造、证明和维持的自我。",
       "The most brilliant part of Kierkegaard’s analysis of despair is how he distinguishes different relations to the self. The despair of weakness shows itself as being unwilling to be oneself, while the despair of defiance shows itself as insisting on becoming oneself by one’s own strength. The latter deserves particular thought: a person who seems to have shed outside judgment and has a strong sense of independence may merely have made themselves the new authority. They refuse to accept their own finitude, try to be the final designer of their own existence, and even make defiance of fate the basis of their identity. The more they insist on absolute autonomy, the less they can escape the self that has to be created, proved and maintained by themselves alone."],
      ["我也开始从日常生活中理解这种矛盾。旅行、阅读或与家人相处，本应是暂时摆脱目标与效率的时刻，但我有时仍会不自觉地思考如何更充分地利用时间，如何让一次经历变得更有意义。仿佛只有当一段时间产生了可以被记住、解释或证明的价值，它才算没有被浪费。然而，生活中真正珍贵的部分，往往恰恰无法被提前规划，也未必能够转化为某种成果。我希望自己能够自由地生活，却又难以放弃对自由本身的管理。",
       "I have also begun to understand this contradiction in everyday life. Traveling, reading or spending time with family should be moments of temporary release from goals and efficiency, yet I sometimes catch myself thinking about how to make fuller use of the time, how to make an experience more meaningful. As if time is not wasted only when it produces value that can be remembered, explained or proved. But the truly precious parts of life often cannot be planned in advance, and may not be convertible into any result. I want to live freely, yet find it hard to give up managing freedom itself."],
      ["这也是《致死的疾病》在哲学上最令我信服的洞察：自我意识并不天然意味着自由。克尔凯郭尔将人理解为有限与无限、可能性与必然性的综合，而自我则是这种关系对自身的反思。一个人可能沉溺于无限的可能性，失去现实生活的根基；也可能被既定的身份与处境束缚，忘记自己仍然拥有改变的可能。绝望并非简单地来自某种缺失，而是来自自我内部关系的失衡。我们既无法彻底逃离自己的处境，也无法仅凭意志创造一个完全独立于现实的自己。",
       "This is also the insight in *The Sickness Unto Death* that I find most philosophically convincing: self-consciousness does not naturally mean freedom. Kierkegaard understands the human being as a synthesis of the finite and the infinite, of possibility and necessity, and the self as the relation relating itself to itself. A person may be lost in infinite possibilities and lose their footing in real life, or be bound by given identities and circumstances and forget that they can still change. Despair does not simply come from some lack; it comes from an imbalance in the self’s inner relations. We can neither escape our situation entirely nor create, by will alone, a self wholly independent of reality."],
      ["不过，我也对克尔凯郭尔的最终回答有所保留。他认为，自我只有在与建立自身的力量——即上帝——建立正确关系时，才能真正摆脱绝望。这一宗教性的结论赋予了他的分析完整的结构，却也提出了一个困难：对于无法接受基督教信仰的人而言，是否就不存在真正与自我和解的可能？我更愿意从中读出一种对绝对自我主宰的质疑：人或许永远无法完全依靠自己的意志、理性与成就来确立自身，因为我们的存在始终受到他人、历史、偶然性与有限生命的制约。当然，这种世俗化的理解，也无法完全取代他原本的神学立场。",
       "I do have reservations about Kierkegaard’s final answer, though. He holds that the self can truly escape despair only by relating rightly to the power that established it, that is, God. This religious conclusion gives his analysis a complete structure, but it also raises a difficulty: for those who cannot accept Christian faith, is there no real possibility of being reconciled with oneself? I would rather read in it a questioning of absolute self-mastery: perhaps a person can never establish themselves wholly through their own will, reason and achievements, because our existence is always conditioned by other people, history, contingency and finite life. Of course, this secularized reading cannot fully replace his original theological position."],
      ["从文学与哲学的角度看，《致死的疾病》并不是一本容易阅读的作品。它的概念高度抽象，论证不断围绕自我、意识与绝望展开，有时甚至显得晦涩而重复。但这种近乎执拗的分析也构成了它独特的力量：克尔凯郭尔并不急于提供安慰，而是不断剥除我们用来解释和保护自己的理由。与《非此即彼》中通过人物与叙事展现存在困境的方式不同，这本书以近乎严酷的概念分析，迫使读者直面自我与自身的关系。它的价值不在于提供一套令人安心的生活哲学，而在于使那些看似理所当然的自我认知重新变得可疑。",
       "Seen as literature and philosophy, *The Sickness Unto Death* is not an easy book to read. Its concepts are highly abstract, its argument circles around the self, consciousness and despair, and at times it seems obscure and repetitive. But this almost stubborn analysis is also its distinctive strength: Kierkegaard is in no hurry to console, and keeps stripping away the reasons we use to explain and protect ourselves. Unlike *Either/Or*, which shows existential predicaments through characters and narrative, this book uses nearly harsh conceptual analysis to force the reader to face the self’s relation to itself. Its value lies not in offering a reassuring philosophy of life, but in making seemingly self-evident self-understanding doubtful again."],
      ["读到最后，我开始怀疑，我们对自由的追求，是否经常建立在一个无法实现的愿望之上：希望有一天能够彻底理解自己、掌握生活，并成为一个不再矛盾、不再依赖任何外部条件的人。但如果人的存在本身就意味着有限、依赖与不确定，那么真正的自由或许并不在于消除这些条件，而在于学会如何与它们共处。我们如此执着于成为理想中的自己，却很少追问，为什么现实中的自己始终不值得被接受。而《致死的疾病》最深刻的提醒，也许正是：一个人最难摆脱的囚禁，并非来自外部世界，而是来自他与自身永无休止的对抗。",
       "By the end I began to wonder whether our pursuit of freedom is often built on an unattainable wish: that one day we will fully understand ourselves, master our lives, and become people who are no longer contradictory and no longer depend on any external conditions. But if human existence itself means finitude, dependence and uncertainty, then real freedom may lie not in eliminating these conditions but in learning to live with them. We are so fixated on becoming our ideal selves, yet rarely ask why the actual self never seems worthy of acceptance. And the deepest reminder of *The Sickness Unto Death* may be this: the prison a person finds hardest to escape comes not from the outside world, but from his unending struggle against himself."]
    ]
  },
  {
    "date": "2019-12-07",
    "title": "Between Losing and Regaining",
    "slug": "between-losing-and-regaining",
    "category": "Philosophy",
    "book": {
      "cover": "fear_and_trembling_repetition.jpg",
      "title": "Fear and Trembling / Repetition",
      "author": "Søren Kierkegaard",
      "language": "English",
      "country": "Denmark",
      "original": "Danish",
      "lines": [
        "Philosophy · Danish original, both first published 1843",
        "Two companion works: Abraham’s sacrifice of Isaac as a test of faith, and a young man’s failed attempt to repeat a happy trip to Berlin."
      ]
    },
    "place": "于加州圣克拉拉\nSanta Clara, CA",
    "languages": ["Chinese", "English"],
    "prose": [
      ["我一直相信，理性规划能够使人获得更大的自由。无论是职业发展、家庭生活，还是对未来的安排，我都习惯于分析风险、比较选择，并尽可能为各种结果做好准备。我曾将这种能力视为成熟与责任感的体现：一个人只有充分掌握自己的生活，才能更从容地承担对他人的责任。然而，克尔凯郭尔让我意识到一个更深刻的悖论：我越是努力为未来消除不确定性，就越可能失去面对不确定性的勇气。原本帮助我承担风险的理性，逐渐变成了推迟承担风险的理由。",
       "I have always believed that rational planning gives a person greater freedom. Whether in career, family life or arrangements for the future, I am used to analyzing risks, comparing options and preparing for every outcome as far as I can. I took this ability as a sign of maturity and responsibility: only someone who fully commands their life can bear responsibility for others with ease. But Kierkegaard made me see a deeper paradox: the harder I work to remove uncertainty from the future, the more likely I am to lose the courage to face uncertainty. The reason that was meant to help me bear risk has gradually become a reason to postpone it."],
      ["这种矛盾在亲密关系与家庭生活中尤其明显。我希望为所爱的人创造稳定的生活，因此习惯于提前考虑各种可能出现的问题。但爱与责任并不是一份能够通过充分准备来保证结果的契约。我们可以规划共同的未来，却无法保证彼此永远不会改变；可以尽力保护家人，却无法替他们安排命运。我曾以为，承担责任意味着尽可能避免失去，如今却开始怀疑，真正的责任是否恰恰意味着明知可能失去，仍然愿意毫无保留地投入其中。",
       "This contradiction is especially plain in intimate relationships and family life. I want to create a stable life for the people I love, so I am used to thinking ahead about every problem that might arise. But love and responsibility are not a contract whose outcome can be guaranteed by thorough preparation. We can plan a shared future, but cannot guarantee that we will never change; we can do our best to protect our family, but cannot arrange their fate for them. I used to think that bearing responsibility meant avoiding loss as far as possible. Now I begin to wonder whether real responsibility means, precisely, knowing one may lose and still being willing to give oneself in without reserve."],
      ["《恐惧与战栗》中亚伯拉罕的困境，使这种矛盾显得格外尖锐。无限弃绝的骑士能够接受失去，而信仰的骑士却在放弃一切的同时，仍然相信自己将重新获得所爱之物。克尔凯郭尔所描述的信仰，并不是对结果的乐观预测，而是一种无法从理性计算中推导出来的存在姿态。我当然无法将自己的日常选择与亚伯拉罕的宗教考验等同，但这个故事让我意识到，我所追求的确定性，可能恰恰是我不愿面对选择本身的表现。我希望先知道某种付出最终值得，再决定是否付出；希望先确认一段生活不会令我后悔，再允许自己真正选择它。",
       "Abraham’s predicament in *Fear and Trembling* makes this contradiction especially sharp. The knight of infinite resignation can accept loss, while the knight of faith, even as he gives up everything, still believes he will receive back what he loves. The faith Kierkegaard describes is not an optimistic prediction of outcomes but a way of existing that cannot be derived from rational calculation. I cannot, of course, equate my everyday choices with Abraham’s religious trial, but the story made me realize that the certainty I seek may be precisely a way of refusing to face choice itself. I want to know first that a sacrifice will turn out to be worth it, and only then decide whether to make it; I want to be sure a life will not leave me with regrets before I allow myself to really choose it."],
      ["而《重复》则从另一个方向揭示了这种困境。康斯坦丁试图通过重返柏林恢复过去的快乐，却发现相同的条件无法产生相同的体验。这让我意识到，理性能够帮助我们安排生活的外部条件，却无法保证生活本身的意义。我们可以精心规划一次旅行、一段关系，甚至未来几十年的人生，却无法确保那些真正重要的体验会如期发生。更重要的是，当现实不再符合最初的期待，我们是否仍然能够重新肯定自己的选择？重复并不是让过去原样归来，而是追问人在经历变化与失去之后，是否仍然可能重新获得自己的生活。",
       "*Repetition* reveals the same predicament from another direction. Constantin tries to recover a past happiness by returning to Berlin, only to find that the same conditions do not produce the same experience. This made me realize that reason can help us arrange the external conditions of life but cannot guarantee its meaning. We can carefully plan a trip, a relationship, even the decades ahead, but cannot make sure the truly important experiences will arrive as scheduled. More important, when reality no longer matches our first expectations, can we still affirm our choice anew? Repetition is not the past returning as it was, but a question: after change and loss, is it still possible to regain one’s own life?"],
      ["我逐渐发现，自己真正渴望的或许并不只是自由，而是一种不必承担自由之代价的自由。我希望拥有充分的选择权，却不愿放弃其他可能；希望建立持久的关系，却害怕不可逆转的承诺；希望生活充满意义，却又期待意义能够在行动之前得到证明。于是，我不断为未来创造更好的条件，却始终保留着一个理由：现在还不是完全投入的时候。我以为自己是在为生活作准备，却可能只是把准备本身变成了生活。",
       "I gradually find that what I truly crave may not be freedom alone, but a freedom that does not have to pay freedom’s price. I want full choice without giving up the other possibilities; lasting relationships without the fear of irreversible commitment; a life full of meaning, but with the meaning proved before I act. So I keep creating better conditions for the future while always keeping one reason in reserve: now is not yet the time to commit fully. I thought I was preparing for life, but I may only have turned the preparation itself into my life."],
      ["这或许才是两部作品对我最深刻的挑战。理性的局限并不意味着我们应该放弃判断，更不意味着盲目信仰值得赞美。恰恰相反，理性能够帮助我们理解选择的后果，却无法替我们完成选择；能够揭示风险，却无法消除存在本身的不确定性。我不需要停止规划，而是需要承认规划终究有其边界。真正的成熟，也许不是终于拥有足够的能力，使自己不再需要冒险，而是在已经尽力思考之后，仍然愿意承担那些无法保证结果的责任。",
       "This may be the deepest challenge the two works pose to me. The limits of reason do not mean we should give up judgment, still less that blind faith deserves praise. On the contrary, reason can help us understand the consequences of a choice but cannot make the choice for us; it can reveal risk but cannot remove the uncertainty of existence itself. I do not need to stop planning; I need to admit that planning has its limits. Real maturity may not be finally having enough capability that one no longer needs to take risks, but being willing, after thinking as hard as one can, to bear responsibilities whose outcomes cannot be guaranteed."],
      ["我一直努力让自己变得足够自由，以便有一天能够毫无顾虑地选择生活；但如果真正的自由只能通过选择来实现，那么我是否正在以追求自由之名，无限推迟自由本身？",
       "I have been working hard to make myself free enough that one day I can choose life without any misgivings; but if real freedom can only be realized through choosing, am I, in the name of pursuing freedom, endlessly postponing freedom itself?"]
    ]
  },
  {
    "date": "2015-08-19",
    "title": "Rules Still Need People",
    "slug": "rules-still-need-people",
    "category": "History",
    "book": {
      "cover": "the_nine.jpg",
      "title": "The Nine",
      "author": "Jeffrey Toobin",
      "language": "English",
      "country": "United States",
      "original": "English",
      "lines": [
        "History · English original, first published 2007",
        "An inside account of the U.S. Supreme Court from the 1980s to the mid-2000s, told through the justices and the cases that divided them."
      ]
    },
    "place": "于华盛顿州贝尔维尤\nBellevue, WA",
    "languages": ["Chinese", "English"],
    "prose": [
      ["美国最高法院在我的想象中，曾经代表着一种近乎理想化的制度理性：九位大法官依据宪法、先例与法律原则，对社会最复杂的争议作出最终判断。法律似乎应当超越个人的情绪、政治立场与时代偏见。然而，杰弗里·图宾在《九人》中揭示的，却是一个远比这种想象更加复杂的世界。那些决定宪法意义的人，同样拥有自己的信念、野心、友谊、偏见与局限。我们设计制度，是为了限制个人偏见与权力的任意性；但制度的解释、运行与维护，又不可避免地依赖那些需要被限制的人。",
       "In my imagination, the U.S. Supreme Court once stood for an almost idealized institutional reason: nine justices, guided by the Constitution, precedent and legal principle, delivering final judgment on society’s most complicated disputes. Law, it seemed, should rise above personal emotion, political allegiance and the prejudices of an age. But what Jeffrey Toobin reveals in *The Nine* is a world far more complicated than that. The people who decide what the Constitution means have their own convictions, ambitions, friendships, biases and limits. We design institutions to restrain personal bias and the arbitrariness of power; yet the interpreting, running and upholding of those institutions inevitably depends on the very people who need restraining."],
      ["《九人》最出色的地方，是它将最高法院从抽象的法律机构还原为一个充满人际关系、思想冲突与权力互动的现实组织。尤其是桑德拉·戴·奥康纳与安东尼·肯尼迪在诸多案件中的关键地位，使我意识到，宪法的实际意义不仅取决于文本本身，也取决于解释者如何理解自由、平等与国家权力。同一部宪法，在不同法官手中，可能产生截然不同的法律结论。制度试图消除个人意志的任意性，却又不得不赋予少数个人决定制度意义的巨大权力。",
       "The best thing about *The Nine* is that it turns the Supreme Court from an abstract legal body back into a real organization full of personal relationships, clashes of ideas and play of power. The pivotal position of Sandra Day O’Connor and Anthony Kennedy in so many cases in particular made me realize that the practical meaning of the Constitution depends not only on its text but on how its interpreters understand liberty, equality and state power. The same Constitution in different judges’ hands can yield very different legal conclusions. The institution tries to remove the arbitrariness of individual will, yet has to give a few individuals enormous power to decide what the institution means."],
      ["2000年的 *Bush v. Gore* 或许是这种悖论最鲜明的体现。佛罗里达州总统选举结果极其接近，各地对争议选票的人工重新计票缺乏统一标准。最高法院认为，这种差异违反了平等保护原则，而五位大法官最终认定，在既定期限内无法完成符合宪法要求的重新计票，从而使选举争议得到终结。问题在于，法院原本是为了维护选票平等而介入，却通过终止重新计票，作出了具有决定性政治后果的裁决。多数意见强调程序一致性，异议意见则质疑为何不能通过统一标准继续计票。法律程序究竟是在保护民主，还是在特定时刻限制了民主程序本身？这一案件最令人不安的，不只是它影响了总统选举结果，而是司法权威必须依靠自身的解释，来决定自己介入政治争议的边界。",
       "*Bush v. Gore* in 2000 may be the sharpest embodiment of this paradox. The Florida presidential result was extremely close, and the manual recounts of disputed ballots lacked uniform standards across the state. The Court held that these differences violated equal protection, and five justices finally concluded that a constitutionally adequate recount could not be completed within the deadline, which brought the election dispute to an end. The problem is that the Court stepped in to protect the equality of votes, yet by halting the recount it issued a ruling with decisive political consequences. The majority stressed procedural consistency, while the dissenters asked why the count could not continue under a uniform standard. Was legal procedure protecting democracy, or, at that moment, limiting democratic process itself? What is most disturbing about the case is not only that it affected the outcome of a presidential election, but that judicial authority must rely on its own interpretation to decide where its intervention in political disputes should stop."],
      ["1992年的 *Planned Parenthood v. Casey* 则揭示了另一种制度张力。法院以五比四的结果保留了 *Roe v. Wade* 所承认的堕胎权核心，同时以“不当负担”标准取代了原有的孕期框架，并允许宾夕法尼亚州的大部分限制措施继续实施。奥康纳、肯尼迪与苏特共同撰写的意见，尤其强调遵循先例对于法院制度正当性的重要意义。然而，先例究竟应当在多大程度上约束法官？如果先前的裁决被认为存在错误，维护制度稳定是否仍然值得优先考虑？这里的矛盾在于，遵循先例原本是为了限制法官个人判断，但决定何时坚持、何时推翻先例，本身又需要法官作出判断。法律的连续性并非自动产生，而是依赖解释者对稳定与变革的权衡。",
       "*Planned Parenthood v. Casey* in 1992 reveals another institutional tension. By a vote of five to four the Court preserved the core of the abortion right recognized in *Roe v. Wade*, while replacing the original trimester framework with an “undue burden” standard and allowing most of Pennsylvania’s restrictions to stand. The joint opinion of O’Connor, Kennedy and Souter stressed in particular how important adherence to precedent is to the Court’s institutional legitimacy. But how far should precedent bind judges? If an earlier ruling is thought to be wrong, is institutional stability still worth putting first? The contradiction is that following precedent exists to limit judges’ personal judgment, yet deciding when to hold to precedent and when to overturn it itself requires judges to exercise judgment. The continuity of law does not arise automatically; it depends on interpreters weighing stability against change."],
      ["2003年的 *Lawrence v. Texas* 进一步展示了司法解释如何改变自由的边界。最高法院以六比三推翻了得克萨斯州禁止成年人私下自愿同性性行为的刑事法律，并推翻1986年的 *Bowers v. Hardwick* 判例。肯尼迪撰写的多数意见强调个人尊严、自由与私人生活不应受到不当刑事干预，而斯卡利亚的异议则批评法院以自身判断取代民主立法。这使我意识到，宪法中的自由并不是一个完全静止的概念。法官必须决定哪些个人行为属于国家不得干涉的领域，而这种决定不可避免地涉及对社会价值与个人自主的理解。司法解释既可能保护少数人的权利免受多数意志侵害，也必须面对自身民主正当性的质疑。",
       "*Lawrence v. Texas* in 2003 shows further how judicial interpretation can move the boundaries of liberty. By six to three the Court struck down a Texas criminal law banning private, consensual same-sex sexual conduct between adults, and overruled the 1986 precedent *Bowers v. Hardwick*. Kennedy’s majority opinion stressed that personal dignity, liberty and private life should not suffer improper criminal interference, while Scalia’s dissent criticized the Court for substituting its own judgment for democratic legislation. This made me realize that liberty in the Constitution is not a wholly static concept. Judges must decide which personal conduct lies in a domain the state may not enter, and that decision inevitably involves an understanding of social values and individual autonomy. Judicial interpretation may protect minority rights from the will of the majority, but it must also face doubts about its own democratic legitimacy."],
      ["同样是在2003年，*Grutter v. Bollinger* 展现了平等原则内部的冲突。密歇根大学法学院在招生中将种族作为综合评价的因素之一，最高法院以五比四认定，在当时的严格审查框架下，该政策可以服务于学生群体多样性的重大教育利益。奥康纳撰写的多数意见试图在禁止种族歧视与承认历史和现实差异之间寻找平衡。然而，平等究竟意味着政府必须完全忽略种族，还是在某些条件下允许考虑种族，以回应既有的不平等？两种立场都可能援引宪法的平等保护原则，却导向不同的政策结果。这一案件让我看到，制度并不能单凭“平等”这样的抽象原则解决争议，因为真正的分歧往往发生在原则如何被定义和实践的层面。值得注意的是，该案确立的相关招生规则后来已在2023年的判决中被实质性推翻，这也进一步说明宪法解释并非一成不变。",
       "Also in 2003, *Grutter v. Bollinger* displays a conflict within the principle of equality. The University of Michigan Law School used race as one factor in a holistic review of applicants, and by five to four the Court held that, under the strict scrutiny framework of the time, the policy could serve a compelling educational interest in a diverse student body. O’Connor’s majority opinion tried to find a balance between prohibiting racial discrimination and acknowledging historical and present differences. But does equality mean that government must ignore race altogether, or may it, under certain conditions, take race into account to respond to existing inequality? Both positions can invoke the Constitution’s equal protection principle and lead to different policy results. This case showed me that an institution cannot settle disputes by an abstract principle like “equality” alone, because the real disagreement usually lies in how the principle is defined and put into practice. It is worth noting that the admissions rules the case established were later substantially overturned in a 2023 decision, which further shows that constitutional interpretation is not fixed."],
      ["2005年的 *Roper v. Simmons* 则将这一问题延伸至死刑。最高法院以五比四裁定，对犯罪时未满十八岁的人执行死刑违反第八修正案禁止残酷和非常刑罚的原则。肯尼迪的多数意见考虑了未成年人的责任能力、美国各州的法律实践，以及国际社会的相关标准；斯卡利亚等人的异议则反对法院过度依赖法官对社会共识与道德进步的判断。宪法中的“残酷”究竟应当按照制定时的理解解释，还是随着社会道德观念的变化而发展？如果宪法意义可以演变，谁有权判断这种演变已经发生？如果宪法意义完全固定，法律又如何回应新的社会认识？这一案件让我意识到，司法解释既需要历史的约束，也无法完全回避当下的道德判断。",
       "*Roper v. Simmons* in 2005 extends the question to the death penalty. By five to four the Court held that executing people who were under eighteen at the time of their crimes violates the Eighth Amendment’s ban on cruel and unusual punishment. Kennedy’s majority opinion considered the culpability of minors, the practice of the states, and relevant international standards; Scalia and the other dissenters objected that the Court relied too heavily on judges’ own sense of social consensus and moral progress. Should “cruel” in the Constitution be read as it was understood when written, or evolve as moral ideas in society change? If constitutional meaning can evolve, who has the right to judge that it has? If it is entirely fixed, how can law respond to new social understanding? This case made me realize that judicial interpretation needs the discipline of history and yet cannot wholly avoid present moral judgment."],
      ["2006年的 *Hamdan v. Rumsfeld* 则从另一个方向展示了司法制度的必要性。面对反恐战争中行政权力的扩张，最高法院以五比三认定，布什政府为关塔那摩被拘押者设立的军事委员会缺乏充分法律授权，其程序也不符合相关军事法律与《日内瓦公约》共同第三条的要求。这个案件提醒我，司法权力虽然同样受到个人判断的影响，却也是限制其他国家权力的重要机制。总统可以援引国家安全与战争需要，国会可以制定授权规则，而法院则必须判断行政行为是否超越法律边界。权力制衡并不是让任何一个机构完全摆脱政治，而是让不同机构的权力彼此受到约束。制度的价值，恰恰可能体现在这些不完美的权力之间持续存在的张力之中。",
       "*Hamdan v. Rumsfeld* in 2006 shows the necessity of the judicial system from another direction. Faced with the expansion of executive power in the war on terror, the Court held by five to three that the military commissions the Bush administration set up for Guantánamo detainees lacked sufficient legal authorization and that their procedures did not meet the requirements of the relevant military law and Common Article 3 of the Geneva Conventions. The case reminds me that judicial power, though equally shaped by individual judgment, is also an important mechanism for restraining other state powers. The president can invoke national security and the needs of war, Congress can write rules of authorization, and the courts must judge whether executive action exceeds the bounds of law. Checks and balances do not free any one institution from politics; they let the powers of different institutions bind one another. The value of the system may lie precisely in the continuing tension among these imperfect powers."],
      ["将这些案件放在一起，我逐渐意识到，司法制度最深刻的矛盾并不是法官偶尔受到政治影响，而是法律原则本身经常无法直接决定唯一的答案。平等可能意味着相同待遇，也可能要求关注现实差异；自由既可能需要司法保护，也可能与民主立法发生冲突；遵循先例能够维护稳定，却也可能延续错误；国家安全需要行政效率，却不能因此取消法律约束。法律并非缺少原则，而是不同原则之间的冲突，最终仍然需要人来判断。",
       "Putting these cases together, I gradually realized that the deepest contradiction of the judicial system is not that judges are occasionally swayed by politics, but that legal principles themselves often cannot dictate a single answer. Equality may mean identical treatment, or may require attention to real differences; liberty may need judicial protection, or may collide with democratic legislation; following precedent preserves stability but may perpetuate error; national security calls for executive efficiency but cannot cancel legal constraint. Law does not lack principles; it is that conflicts among principles in the end still have to be judged by people."],
      ["这种认识也让我重新审视自己对理性与制度的信任。我习惯于相信，清晰的规则、充分的证据与严谨的程序，能够帮助人们克服主观偏见。但我也逐渐发现，即使所有人都声称遵循相同的原则，他们对问题的定义、证据的选择以及价值的排序，仍然可能截然不同。更值得警惕的是，我自己也未必能够始终保持客观。当某项裁决符合我的价值判断时，我更容易赞赏法官的勇气与独立；当结果与我的立场相反时，我又可能指责他们将个人信念凌驾于法律之上。我所尊重的究竟是司法独立本身，还是司法独立恰好产生了我所赞同的结果？",
       "This realization also made me re-examine my trust in reason and institutions. I used to believe that clear rules, sufficient evidence and rigorous procedure could help people overcome subjective bias. But I gradually found that even when everyone claims to follow the same principles, they may define the problem, select the evidence and rank values in very different ways. More worrying, I may not always be objective myself. When a ruling fits my values, I am readier to praise the judges’ courage and independence; when the result runs against my position, I may accuse them of putting personal belief above the law. What do I actually respect: judicial independence itself, or judicial independence when it happens to produce results I agree with?"],
      ["不过，我也认为图宾的叙事存在值得警惕的局限。他擅长通过法官的性格、私人关系与思想冲突解释重大裁决，使复杂的法律历史具有小说般的可读性，却也容易让读者过度关注人物动机，而忽略法律论证自身的力量。他对温和派法官的欣赏，以及对保守派司法运动的批判，构成了全书鲜明的叙事立场。但一个法官的判断是否正当，不能仅凭其政治后果或个人背景来决定。司法理念之间存在真实而严肃的分歧，不能将所有分歧都还原为党派利益。尤其考虑到本书出版于2007年，它更适合作为理解特定历史阶段最高法院的政治与制度史，而非解释当代所有司法争议的完整框架。",
       "I also think Toobin’s narrative has limits worth being wary of. He is good at explaining major rulings through the judges’ characters, private relationships and clashes of ideas, giving a complicated legal history the readability of a novel, but this also makes it easy for readers to focus too much on personal motives and overlook the force of legal argument itself. His admiration for the moderate justices and his criticism of the conservative judicial movement give the book a distinct narrative stance. But whether a judge’s judgment is legitimate cannot be decided by its political consequences or the judge’s background alone. Real and serious disagreements exist between judicial philosophies, and not all of them can be reduced to partisan interest. Especially since the book was published in 2007, it serves better as a political and institutional history of the Court in a particular period than as a full framework for explaining every contemporary judicial dispute."],
      ["在我看来，《九人》最重要的贡献，是它既揭示了司法制度的脆弱，也让这种脆弱变得可以理解。制度不可能消除人性，因为制度本身就是由人设计、解释和维护的。真正成熟的制度，并不是假设掌权者永远公正，而是承认他们可能犯错、存在偏见，甚至滥用权力，并通过公开论证、程序约束、先例、异议意见与权力制衡，尽可能限制这些风险。九位大法官并非宪法真理的化身，他们的权威也不应来自个人的道德完美，而应来自其判断能够接受持续的法律与公共检验。",
       "To my mind, the most important contribution of *The Nine* is that it exposes the fragility of the judicial system and also makes that fragility understandable. An institution cannot eliminate human nature, because institutions are themselves designed, interpreted and upheld by people. A truly mature institution does not assume that those in power are always just; it admits that they may err, be biased, even abuse power, and tries to limit these risks through open argument, procedural constraint, precedent, dissenting opinions and checks and balances. The nine justices are not embodiments of constitutional truth, and their authority should come not from personal moral perfection but from the fact that their judgments can withstand continuing legal and public scrutiny."],
      ["读完《九人》，我对司法权威的理解不再那么理想化，却也并未因此走向犬儒。承认法律无法完全摆脱政治，不等于认为所有裁决都只是政治；承认法官具有个人偏见，也不意味着法律原则失去了独立价值。真正困难的，是在尊重制度的同时保有批判制度的能力，在质疑具体裁决的同时不轻易否定法治本身。我们建立制度，是因为不敢将权力完全托付给任何一个人；但制度最终仍然需要由人来守护。这不是制度可以彻底解决的缺陷，而是法治必须永远面对的条件。",
       "After finishing *The Nine*, my understanding of judicial authority is less idealized, but I have not turned cynical because of it. Admitting that law cannot fully escape politics does not mean believing that every ruling is merely political; admitting that judges have personal biases does not mean legal principles lose their independent value. The real difficulty is to keep the capacity to criticize an institution while respecting it, and to question particular rulings without lightly dismissing the rule of law itself. We build institutions because we dare not entrust power wholly to any one person; yet institutions in the end still have to be guarded by people. This is not a flaw that institutions can fully cure, but a condition the rule of law must always face."]
    ]
  },
  {
    "date": "2020-06-19",
    "title": "Philosophers Are Only Human",
    "slug": "philosophers-are-only-human",
    "category": "History",
    "book": {
      "cover": "existentialist_cafe.jpg",
      "title": "At the Existentialist Café",
      "author": "Sarah Bakewell",
      "language": "English",
      "country": "United Kingdom",
      "original": "English",
      "lines": [
        "History · English original, first published 2016",
        "Sartre, Beauvoir, Heidegger, Camus, Merleau-Ponty and others, and the lives and quarrels behind existentialism and phenomenology."
      ]
    },
    "place": "于加州圣克拉拉\nSanta Clara, CA",
    "languages": ["Chinese", "English"],
    "prose": [
      ["1933年，三个年轻人在巴黎的一家咖啡馆里谈论哲学。雷蒙·阿隆向萨特介绍德国现象学，指着桌上的杏子鸡尾酒告诉他，哲学甚至可以从眼前这杯酒开始。这个后来被反复讲述的场景，几乎概括了莎拉·贝克韦尔《存在主义咖啡馆》的全部魅力：哲学不必始于抽象的体系，也可以始于一杯酒、一段爱情、一场争吵，或者一个人对自己所处世界的困惑。",
       "In 1933, three young people were talking philosophy in a Paris café. Raymond Aron introduced Sartre to German phenomenology, pointing at the apricot cocktail on the table and telling him that philosophy could begin even with the drink in front of him. This scene, retold again and again, almost sums up the whole charm of Sarah Bakewell’s *At the Existentialist Café*: philosophy need not begin with an abstract system; it can begin with a drink, a love affair, a quarrel, or one person’s bewilderment about the world they find themselves in."],
      ["我尤其喜欢贝克韦尔处理思想史的方式。她没有将萨特、波伏娃、海德格尔、加缪和梅洛-庞蒂塑造成一群永远正确的思想巨人，而是让他们重新成为有欲望、有偏见、会嫉妒、会犯错的普通人。他们讨论自由，却不断陷入复杂的情感关系；批判社会的虚伪，却未必能够诚实地面对自己；试图理解历史，却又在历史的关键时刻作出截然不同的政治选择。哲学不再是一套脱离生活的理论，而成为这些人理解、辩护甚至误解自身生活的方式。",
       "I especially like how Bakewell handles the history of ideas. She does not turn Sartre, Beauvoir, Heidegger, Camus and Merleau-Ponty into giants who are always right, but lets them become ordinary people again, with desires, prejudices, jealousy and mistakes. They discuss freedom yet keep falling into tangled emotional relationships; they criticize the hypocrisy of society but cannot always face themselves honestly; they try to understand history, yet at its critical moments make very different political choices. Philosophy is no longer a body of theory detached from life but the way these people understood, justified and even misunderstood their own lives."],
      ["其中最令我感兴趣的，是萨特与波伏娃之间的关系。他们试图以自由和坦诚重新定义亲密关系，拒绝传统婚姻所包含的占有与排他性，却也在实践中制造了复杂的情感伤害。他们所追求的自由，并没有自动带来关系中的平等。尤其当我们将波伏娃关于他者与女性处境的思想，同她自身的生活经历放在一起阅读时，便会发现一个耐人寻味的矛盾：一个人能够提出极其深刻的伦理问题，却未必能够在私人生活中妥善回答它们。",
       "What interested me most was the relationship between Sartre and Beauvoir. They tried to redefine intimacy through freedom and candor, rejecting the possessiveness and exclusivity of traditional marriage, yet in practice they also caused complicated emotional harm. The freedom they pursued did not automatically bring equality into the relationship. Reading Beauvoir’s thinking on the Other and on women’s situation alongside her own life experience, one finds an intriguing contradiction: a person can raise extremely profound ethical questions and still fail to answer them well in private life."],
      ["海德格尔的故事则更加令人不安。他对本真性、死亡与日常沉沦的思考，深刻影响了二十世纪哲学，却又曾公开支持纳粹政权。一个能够如此敏锐地分析人的存在处境的哲学家，为什么会在政治判断上陷入如此严重的错误？贝克韦尔没有试图用他的哲学成就为其政治行为开脱，也没有因为他的政治污点就否认其思想影响。她让两者之间的矛盾始终存在，而这恰恰比简单的道德审判更有力量。",
       "Heidegger’s story is more disturbing still. His thinking on authenticity, death and everyday fallenness deeply shaped twentieth-century philosophy, yet he publicly supported the Nazi regime. Why would a philosopher who could analyze the human condition so acutely fall into such grave error in political judgment? Bakewell does not try to excuse his politics by his philosophical achievements, nor deny his intellectual influence because of his political stain. She lets the contradiction between the two stand, and that is more powerful than a simple moral verdict."],
      ["相比之下，我对梅洛-庞蒂的思想产生了更强烈的认同。萨特强调人的自由选择，而梅洛-庞蒂则提醒我们，人首先是一个拥有身体、历史与具体处境的存在者。我们并不是站在世界之外作出决定的纯粹意识，而是早已置身于世界之中。我们的判断受到经验塑造，行动受到环境限制，甚至对自身的理解也无法完全脱离他人的目光。这种哲学没有否认自由，却使自由摆脱了某种过于英雄主义的想象。",
       "By contrast, I identified more strongly with Merleau-Ponty’s thought. Sartre stresses free human choice, while Merleau-Ponty reminds us that a person is first of all a being with a body, a history and a concrete situation. We are not pure consciousnesses standing outside the world and deciding; we are already in it. Our judgments are shaped by experience, our actions limited by circumstance, and even our understanding of ourselves cannot be wholly separated from the gaze of others. This philosophy does not deny freedom, but frees it from an overly heroic picture."],
      ["这也改变了我对个人独立的理解。我曾经十分欣赏那种能够不受外界影响、完全按照自身判断生活的人，但现在越来越觉得，这样的独立或许从来不存在。我的教育、职业经历、家庭关系，甚至我所阅读的书籍，都在不断塑造我的价值判断。我所认为的独立思想，也许只是许多外部影响在我身上形成的一种独特组合。承认这一点并不意味着放弃自主性，而是让我不再把独立误认为一种可以彻底摆脱他人的状态。",
       "This also changed my understanding of personal independence. I once greatly admired people who could live entirely by their own judgment, unaffected by outside influence, but increasingly I think such independence may never have existed. My education, my career, my family relationships, even the books I read keep shaping my values. What I take for independent thought may simply be a distinctive combination of many outside influences coming together in me. Admitting this does not mean giving up autonomy; it means no longer mistaking independence for a state of being completely free of other people."],
      ["贝克韦尔对存在主义的描绘，还有一个值得欣赏的特点：她没有将哲学家的私人生活当作无关紧要的轶事。相反，那些友谊的破裂、政治立场的转变和爱情中的矛盾，往往使抽象概念获得了更丰富的意义。萨特与加缪的决裂，不仅是两个人的性格冲突，也反映了他们对革命暴力、历史责任与政治道德的不同理解。存在主义从来不只是个人如何面对荒诞的问题，它也始终与二十世纪欧洲的战争、极权主义和社会变革紧密相连。",
       "Another admirable feature of Bakewell’s portrait of existentialism is that she does not treat the philosophers’ private lives as irrelevant anecdote. On the contrary, the broken friendships, shifts of political position and contradictions in love often give abstract concepts a richer meaning. The break between Sartre and Camus was not only a clash of two personalities but reflected their different understandings of revolutionary violence, historical responsibility and political morality. Existentialism was never only about how an individual faces the absurd; it was always closely tied to the wars, totalitarianism and social change of twentieth-century Europe."],
      ["不过，我也认为贝克韦尔的写法存在某种危险。当哲学史被讲述得如此生动，读者很容易因为喜欢某位哲学家的性格而接受其思想，或者因为厌恶他的个人行为而否定其理论。人物传记能够帮助我们理解思想产生的背景，却不能代替对思想本身的论证。萨特是否正确，并不取决于他的私人关系是否成功；海德格尔的政治错误固然需要严肃审视，却也不能自动回答他的存在论是否成立。贝克韦尔最精彩的叙事方式，有时也可能成为理解哲学的障碍。",
       "Still, I think Bakewell’s approach carries a certain danger. When the history of philosophy is told so vividly, readers can easily accept a thinker’s ideas because they like his personality, or reject his theory because they dislike his personal conduct. Biography helps us understand the background in which ideas arise, but it cannot replace argument about the ideas themselves. Whether Sartre is right does not depend on whether his private relationships succeeded; Heidegger’s political errors certainly demand serious scrutiny, but they cannot automatically answer whether his ontology holds. Bakewell’s most brilliant way of narrating can sometimes become an obstacle to understanding philosophy."],
      ["我尤其欣赏这本书没有将存在主义描绘成一种统一而完整的学说。萨特的自由、波伏娃的伦理、梅洛-庞蒂的身体经验，以及加缪对荒诞与反抗的思考，彼此之间存在真实的分歧。这些思想家共享某些时代问题，却没有给出相同的答案。他们不断争论、修正，甚至否定彼此，而这种不一致反而使存在主义显得更加真实。哲学的发展并不是一系列正确答案的累积，而是一群具体的人在共同的历史处境中，不断尝试理解自己所面对的问题。",
       "I especially appreciate that the book does not present existentialism as a unified and complete doctrine. Sartre’s freedom, Beauvoir’s ethics, Merleau-Ponty’s bodily experience and Camus’s reflections on the absurd and revolt differ from one another in real ways. These thinkers share certain questions of their time without giving the same answers. They keep arguing, revising and even denying one another, and this inconsistency makes existentialism seem all the more real. Philosophy does not advance as an accumulation of correct answers, but as a group of particular people, in a shared historical situation, trying again and again to understand the problems they face."],
      ["读完《存在主义咖啡馆》，我反而不再那么急于寻找一套能够指导人生的哲学体系。过去阅读哲学时，我常常希望从不同思想家那里获得某种清晰的结论，仿佛只要理解得足够深入，就能够形成更加成熟、完整的世界观。但贝克韦尔让我看到，思想本身也有历史，有偶然性，有未被解决的矛盾。那些最伟大的哲学家，终其一生也未必能够让自己的思想与生活完全一致。",
       "After finishing *At the Existentialist Café*, I am less eager to look for a philosophical system that can guide my life. When I read philosophy before, I often hoped to take some clear conclusion from each thinker, as if understanding deeply enough would give me a more mature, complete worldview. But Bakewell showed me that thought itself has a history, contingency and unresolved contradictions. Even the greatest philosophers may never, in a whole lifetime, bring their thought and their lives fully into line."],
      ["这本书最打动我的，并不是存在主义关于自由的豪迈宣言，而是它所呈现的思想与人生之间永远无法彻底消除的距离。我们当然可以要求哲学家对自己的行为负责，却不必期待他们成为自身理论的完美化身。或许阅读哲学真正有趣的地方，也不在于寻找一个值得效仿的人，而在于看见那些比我们更加敏锐的头脑，如何同样困惑、犹豫、犯错，并试图在不完美的生活中理解世界。",
       "What moved me most in this book is not existentialism’s bold declarations about freedom but the distance between thought and life that can never be fully closed. We can of course hold philosophers responsible for their conduct, without expecting them to be perfect embodiments of their own theories. Perhaps the real interest of reading philosophy lies not in finding someone worth imitating, but in seeing how minds sharper than ours are just as puzzled, hesitant and error-prone, and still try to understand the world within imperfect lives."],
      ["哲学家并不因为理解人生而超越人生。恰恰相反，他们最值得阅读的地方，或许正是他们始终无法完全解决自己提出的问题。",
       "Philosophers do not transcend life by understanding it. On the contrary, what makes them most worth reading may be precisely that they never fully solve the very problems they raise."]
    ]
  },
  {
    "date": "2022-11-19",
    "title": "The Lives That Might Have Been",
    "slug": "the-lives-that-might-have-been",
    "category": "Art",
    "book": {
      "cover": "possible_life_boltanski.jpg",
      "title": "The Possible Life of Christian Boltanski",
      "author": "Christian Boltanski & Catherine Grenier",
      "language": "English",
      "country": "France",
      "original": "French",
      "lines": [
        "Art · French original, first published 2007",
        "A long conversation between the artist and the curator Catherine Grenier about his childhood, his work on memory and archives, and death."
      ]
    },
    "place": "于加州利弗莫尔\nLivermore, CA",
    "languages": ["Chinese", "English"],
    "prose": [
      ["一个人究竟在多大程度上了解自己的过去？我们习惯于相信，记忆构成了身份的基础，而照片、文字与档案则为记忆提供了客观的证据。然而，如果记忆可以被制造，档案可以被重新排列，而同一段人生能够被讲述成截然不同的故事，那么我们究竟凭什么相信自己拥有一段真实而完整的人生？克里斯蒂安·波尔坦斯基的艺术让我意识到，我们所认为的自我，或许并不是一个等待被发现的真实存在，而是一个在回忆与叙述中不断被重新创造的人。",
       "To what extent does a person really know their own past? We tend to believe that memory is the foundation of identity, and that photographs, words and archives supply objective evidence for memory. But if memories can be manufactured, archives rearranged, and the same life told as very different stories, on what grounds do we believe we have a real and complete life? Christian Boltanski’s art made me realize that the self we take ourselves to be may not be a real entity waiting to be discovered, but a person continually re-created in recollection and narration."],
      ["波尔坦斯基出生于1944年的巴黎。他的犹太裔父亲曾在纳粹占领期间藏身于家中的地板夹层，以躲避迫害。这段家庭历史为他的艺术赋予了特殊的背景：一个人可以真实地活着，却必须从公共世界中消失；一个人的存在可以被保存下来，却未必能够留下任何可靠的证据。《The Possible Life of Christian Boltanski》通过凯瑟琳·格勒尼耶与艺术家的长篇访谈，呈现了他如何理解自己的童年、创作与死亡。但书名中的“Possible”尤其耐人寻味：为什么一个人回顾亲身经历的生活，却只能称之为一种“可能的人生”？",
       "Boltanski was born in Paris in 1944. His Jewish father hid under the floorboards of the family home during the Nazi occupation to escape persecution. This family history gives his art a particular background: a person can be truly alive yet have to vanish from the public world; a person’s existence can be preserved without leaving any reliable evidence. Through a long conversation between Catherine Grenier and the artist, *The Possible Life of Christian Boltanski* shows how he understands his childhood, his work and death. But the word “Possible” in the title is especially intriguing: why can a person looking back on the life they actually lived call it only a “possible life”?"],
      ["这种不确定性贯穿了他的早期作品。在《Recherche et présentation de tout ce qui reste de mon enfance, 1944–1950》中，他以档案研究的形式呈现童年遗留下来的痕迹，模糊了真实记忆与人为重构之间的边界。档案看似拥有客观性，却无法证明它所暗示的故事必然真实。一张照片可以证明某个人曾经出现在某个地方，却无法说明他当时的感受；一件旧物可以证明某段生活留下过痕迹，却无法还原那段生活的意义。证据能够证明某件事情发生过，却未必能够证明我们后来赋予它的解释。",
       "This uncertainty runs through his early work. In *Recherche et présentation de tout ce qui reste de mon enfance, 1944–1950*, he presents the traces left from his childhood in the form of archival research, blurring the line between real memory and artificial reconstruction. An archive seems objective but cannot prove that the story it implies is true. A photograph can prove that someone was once in some place, but not what they felt then; an old object can prove that a life left a trace, but cannot restore that life’s meaning. Evidence can prove that something happened, but not necessarily the interpretation we later give it."],
      ["在《Monuments》系列中，波尔坦斯基将旧照片与灯光组合成近似宗教祭坛的装置，使陌生人的面孔获得某种纪念碑式的庄严。《Réserve》系列则通过堆积衣物，让已经缺席的身体变得仿佛仍然可以感知。这些作品让我想到一个矛盾：我们越是努力通过物件保存一个人，就越容易意识到那个人已经不在其中。照片没有记忆，衣服也没有生命；它们之所以令人悲伤，恰恰因为我们知道自己无法从中重新获得那个曾经存在的人。",
       "In the *Monuments* series, Boltanski combines old photographs and lights into installations resembling religious altars, giving strangers’ faces a monumental solemnity. The *Réserve* series piles up clothing so that absent bodies seem almost perceptible again. These works made me think of a contradiction: the harder we try to preserve a person through objects, the more readily we realize that the person is no longer in them. Photographs have no memory and clothes have no life; they are sad precisely because we know we cannot regain, through them, the person who once existed."],
      ["我对这种困境并不陌生。旅行时，我经常拍照，希望保存某个值得记住的瞬间；整理旧照片时，却发现自己已经无法准确回忆当时的心情。有些画面甚至让我产生陌生感，仿佛照片中的人并不是现在的自己。更有意思的是，当我向别人讲述同一段经历时，我会根据谈话的对象与当下的心境，强调不同的细节。久而久之，我记住的可能不再是事情最初发生的模样，而是自己后来反复讲述的版本。我以为自己在回忆过去，却可能正在用现在的自己重新发明过去。",
       "This predicament is not unfamiliar to me. When I travel I often take photographs, hoping to keep a moment worth remembering; going through old photos, I find I can no longer recall exactly how I felt. Some images even feel strange, as if the person in the picture were not the person I am now. More interesting still, when I tell others about the same experience, I stress different details depending on who I am talking to and my mood at the time. Over time what I remember may no longer be how things first happened, but the version I have told again and again. I think I am recalling the past, but I may be reinventing it with the self I am now."],
      ["这也让我重新思考个人身份的连续性。我们喜欢将人生理解为一条具有明确方向的道路，仿佛过去的每一次选择都在为今天作准备。然而，这种连贯性往往是事后建立的。那些没有实现的愿望、被放弃的计划、偶然改变的决定，在回顾人生时容易被整理成某种必然的成长过程。我可以把自己的职业经历讲述为一系列经过深思熟虑的选择，也可以将它理解为机遇、环境与偶然因素共同作用的结果。两种叙述都可能包含事实，却未必有任何一种能够完整代表我的人生。",
       "It also made me rethink the continuity of personal identity. We like to understand a life as a road with a clear direction, as if every past choice were preparing for today. But this coherence is usually built after the fact. Unfulfilled wishes, abandoned plans and decisions changed by chance are easily arranged, in retrospect, into a kind of inevitable growth. I can tell my career as a series of carefully considered choices, or understand it as the joint result of opportunity, circumstance and accident. Both accounts may contain facts, yet neither may fully represent my life."],
      ["波尔坦斯基的创作因此提出了一个比遗忘更加令人不安的问题：如果我们无法完整保存过去，是否至少能够诚实地讲述过去？我认为他的回答并不乐观。记忆不是一座等待发掘的仓库，而是一种不断发生的重构。我们选择记住什么、忽略什么，以及如何解释曾经的自己，都受到现在的欲望与价值判断影响。一个人的自传因此既是对过去的记录，也是对当下身份的塑造。我们并不只是过去的产物，也在不断创造一个能够解释现在的过去。",
       "Boltanski’s work thus poses a question more unsettling than forgetting: if we cannot preserve the past in full, can we at least tell it honestly? I think his answer is not optimistic. Memory is not a storehouse waiting to be excavated but a reconstruction that keeps happening. What we choose to remember and ignore, and how we explain our former selves, are shaped by present desires and value judgments. A person’s autobiography is therefore both a record of the past and a shaping of present identity. We are not only products of the past; we are also constantly creating a past that can explain the present."],
      ["不过，我并不完全赞同将这种不确定性推向极端。波尔坦斯基模糊真实与虚构的艺术策略具有强烈的感染力，却也存在伦理上的风险。尤其当作品涉及大屠杀与集体创伤时，历史事实不能因为记忆具有主观性就失去其客观地位。个人如何记住历史，与历史究竟发生过什么，是两个不同的问题。档案固然不完整，却仍然能够提供可以检验的证据；叙述固然具有选择性，也并不意味着所有叙述都同样可信。记忆的不可靠不应成为否定历史真实的理由，而应使我们更加谨慎地区分事实与解释。",
       "Still, I do not fully agree with pushing this uncertainty to the extreme. Boltanski’s artistic strategy of blurring the real and the fictional is powerfully affecting, but it carries an ethical risk. Especially when the work touches the Holocaust and collective trauma, historical fact cannot lose its objective standing because memory is subjective. How an individual remembers history and what actually happened in history are two different questions. Archives are incomplete, yet they can still provide evidence that can be tested; narratives are selective, but that does not mean all narratives are equally credible. The unreliability of memory should not be a reason to deny historical truth; it should make us more careful in distinguishing fact from interpretation."],
      ["这也是我对本书访谈形式既欣赏又有所保留的原因。格勒尼耶试图通过提问重建艺术家的人生，而波尔坦斯基的回答却不断暴露这种重建的局限。他的幽默、矛盾与自我修正，使自传本身成为一种艺术性的表演。但当艺术家拥有解释自己作品的主要话语权时，我们也需要警惕，是否正在将他的自我叙述误认为作品的最终意义。一个人如何理解自己，并不必然比他人如何理解他更加接近全部真相。",
       "This is also why I both admire and have reservations about the book’s interview form. Grenier tries to rebuild the artist’s life through questions, while Boltanski’s answers keep exposing the limits of such rebuilding. His humor, contradictions and self-corrections make the autobiography itself an artistic performance. But when the artist holds the main authority to explain his own work, we should also be wary of mistaking his self-narration for the final meaning of the work. How a person understands himself is not necessarily closer to the whole truth than how others understand him."],
      ["《The Possible Life of Christian Boltanski》最终让我重新理解了“真实”这个词。真实的人生或许确实存在，但它并不等同于我们能够记住、记录或讲述的人生。我们留下的照片、文字与物件只是有限的证据，而我们赋予这些证据的意义，则会随着时间不断变化。最令人不安的也许不是我们终将被别人遗忘，而是即使在活着的时候，我们也已经无法完整记住自己。",
       "*The Possible Life of Christian Boltanski* finally made me understand the word “real” anew. A real life may well exist, but it is not the same as the life we can remember, record or tell. The photographs, words and objects we leave are only limited evidence, and the meaning we give that evidence keeps changing with time. What is most unsettling may not be that others will forget us in the end, but that even while we are alive we can no longer fully remember ourselves."],
      ["波尔坦斯基并没有因此证明人生是虚构的。他真正揭示的是，人生的真实与人生的叙述之间，始终存在一道无法彻底弥合的距离。我们确实经历过那些时刻，却只能通过残缺的记忆重新接近它们；我们确实拥有自己的过去，却无法拥有对过去的最终解释。也许一个人最真实的部分，恰恰是那些无法被档案证明、无法被故事整理，甚至无法再被自己准确记起的生活。",
       "Boltanski does not thereby prove that life is fiction. What he really reveals is that between the reality of a life and its narration there is always a distance that can never be fully closed. We did live through those moments, yet can approach them again only through broken memory; we do have our own past, yet cannot have a final interpretation of it. Perhaps the truest part of a person is exactly the life that no archive can prove, no story can arrange, and even they themselves can no longer accurately recall."]
    ]
  },
  {
    "date": "2026-02-05",
    "title": "When All the Words Already Exist",
    "slug": "when-all-the-words-already-exist",
    "category": "Literature",
    "book": {
      "cover": "borges_conversations.jpg",
      "title": "博尔赫斯谈话录 (Conversations with Borges)",
      "author": "豪尔赫·路易斯·博尔赫斯 Jorge Luis Borges",
      "language": "Chinese",
      "country": "Argentina",
      "original": "Spanish",
      "lines": [
        "Literature · Chinese translation",
        "Borges in conversation on language, poetry, time and philosophy, moving from a casual detail into the deepest questions."
      ]
    },
    "place": "于加州利弗莫尔\nLivermore, CA",
    "languages": [
      "Chinese",
      "English"
    ],
    "prose": [
      [
        "我曾在日记中问自己：写作时最在意的究竟是什么？不是完成一篇结构完整的文章，也不是找到某种准确而漂亮的表达，而是埋头于字里行间时，偶然出现的那一瞬间灵光。我愿意将它称为 *aura*，一种难以解释、也无法刻意制造的神韵。甚至可以说，那些连篇累牍、删了又改的废话，都是为了等待它的出现。写作最令人着迷的地方，或许并不是最终留下了什么，而是某个瞬间，语言突然表达出了连自己此前都未曾完全意识到的东西。",
        "I once asked myself in my journal what I care about most when I write. It is not finishing a well-structured essay, nor finding some precise and beautiful phrasing, but the flash of inspiration that comes by chance while I am lost in the lines. I like to call it *aura*, a quality that is hard to explain and cannot be manufactured on purpose. One could even say that all the rambling, deleted and rewritten nonsense exists only to wait for it. Perhaps what fascinates me most about writing is not what is finally left behind, but the moment when language suddenly expresses something I had not fully realized myself."
      ],
      [
        "两三年前，我尤其喜欢读博尔赫斯。那时ChatGPT刚开始展露头角，我几乎立刻联想到了他的《巴别图书馆》。在博尔赫斯的想象中，图书馆包含一切可能的书籍：真实的历史、虚假的传记、尚未写出的诗歌，以及无穷无尽毫无意义的字符组合。它拥有近乎神性的完整性，却并不因此拥有智慧。所有真理都可能已经存在其中，但找到真理与辨认真理，反而成为几乎不可能完成的任务。",
        "Two or three years ago I especially loved reading Borges. ChatGPT had just begun to emerge, and I immediately thought of his “The Library of Babel.” In Borges’s imagination the library contains every possible book: true histories, false biographies, poems not yet written, and endless meaningless combinations of characters. It has an almost divine completeness, yet it is not wise for that. All truths may already be in it, but finding a truth and recognizing it become almost impossible tasks."
      ],
      [
        "某种意义上，人工智能也让我想到这样一座有些神性却无神韵的巴别图书馆。它能够以惊人的速度生成文章、诗歌与论证，仿佛无数可能的表达都已等待被调用。但语言的丰富并不必然意味着经验的丰富。无论它能够如何准确地描写马黛茶的苦涩，或如何精巧地重现博尔赫斯梦中的老虎，图书馆本身既喝不到，也抓不着。它能够排列关于世界的文字，却不能仅凭排列文字而拥有文字所指向的生活。",
        "In a sense, artificial intelligence reminds me of such a Library of Babel, somewhat divine yet without *aura*. It can generate essays, poems and arguments at astonishing speed, as if countless possible expressions were waiting to be called up. But richness of language does not necessarily mean richness of experience. However accurately it describes the bitterness of mate, or however deftly it recreates the tiger in Borges’s dream, the library itself can neither drink it nor grasp it. It can arrange words about the world, but it cannot, merely by arranging words, have the life those words point to."
      ],
      [
        "当然，这并不意味着人工智能无法产生令人惊讶或富有美感的作品，也不能据此断言意义只属于人类。真正让我在意的，是文本的生成与意义的发生并不是同一回事。一句话可以在形式上完全正确，却仍然没有触及写作者真正想表达的东西；而一句偶然写下、甚至不够完美的话，却可能因为它与某段具体经验之间的联系，获得不可替代的分量。**当所有可能的文本都可以被生成时，真正的问题便不再是还能写出什么，而是为什么偏偏是这些文字，对某个人而言具有意义。**",
        "Of course, this does not mean AI cannot produce surprising or beautiful work, nor can we conclude from it that meaning belongs only to humans. What really concerns me is that the generation of a text and the occurrence of meaning are not the same thing. A sentence can be formally flawless and still not touch what the writer truly wanted to say, while a sentence written by chance, even an imperfect one, can gain irreplaceable weight through its connection to a specific experience. **When every possible text can be generated, the real question is no longer what else can be written, but why these particular words are meaningful to a particular person.**"
      ],
      [
        "博尔赫斯对这种矛盾似乎早有预感。《皮埃尔·梅纳尔，〈堂吉诃德〉的作者》设想一位后世作家写出与塞万提斯完全相同的文字，但相同的句子因为作者与时代的不同，竟然获得截然不同的意义。这是我理解博尔赫斯最重要的一把钥匙：文字并不独自拥有意义，意义还存在于写作的处境、阅读的历史，以及文字与世界之间不断变化的关系之中。即使一座图书馆能够穷尽所有可能的文本，它也无法穷尽这些文本在不同生命中产生的意义。",
        "Borges seems to have anticipated this contradiction. “Pierre Menard, Author of the *Quixote*” imagines a later writer producing words identical to Cervantes’s, yet the same sentences take on entirely different meanings because of the different author and age. This is the most important key I have for understanding Borges: words do not own meaning alone; meaning also lives in the circumstances of writing, the history of reading, and the ever-changing relation between words and the world. Even if a library could exhaust every possible text, it could not exhaust the meanings those texts produce in different lives."
      ],
      [
        "博尔赫斯对时间的理解尤其令我着迷。在《小径分岔的花园》中，时间不再是一条从过去通向未来的单一道路，而成为无数可能性同时展开的迷宫；《另一个人》则让年轻与年老的博尔赫斯相遇，使个人身份的连续性变得可疑。谈话中的博尔赫斯同样反复回到这些问题。他似乎始终怀疑，我们所谓的过去是否真的以某种完整的形式存在，还是只存在于不断变化的记忆之中。一个人今天回忆的童年，与十年前回忆的童年，究竟哪一个更加真实？",
        "Borges’s understanding of time fascinates me most. In “The Garden of Forking Paths,” time is no longer a single road from past to future but a labyrinth in which countless possibilities unfold at once; “The Other” lets the young and the old Borges meet and makes the continuity of personal identity doubtful. The Borges of these conversations returns to the same questions again and again. He seems always to doubt whether what we call the past exists in any complete form, or only in ever-changing memory. Which is more real: the childhood a person remembers today, or the one they remembered ten years ago?"
      ],
      [
        "这种对时间的怀疑，也让我重新理解写作时所追求的 *aura*。它并不一定来自某种前所未有的原创性，也不意味着机器生成的文字必然缺乏美感。或许它只是一个瞬间：某些早已存在的词语，因为与自己的经验发生了意想不到的联系，突然变得不可替代。我们反复修改，并不是因为世界上缺少足够好的句子，而是因为那些现成的句子尚未真正成为自己的表达。",
        "This doubt about time also changes how I understand the *aura* I look for in writing. It does not necessarily come from unprecedented originality, nor does it mean machine-generated words must lack beauty. Perhaps it is only a moment when words that have long existed suddenly become irreplaceable because they connect unexpectedly with one’s own experience. We revise again and again not because the world lacks good enough sentences, but because those ready-made sentences have not yet truly become our own expression."
      ],
      [
        "《博尔赫斯谈话录》让我欣赏的，正是博尔赫斯面对文学时那种近乎游戏般的自由。他谈论语言、诗歌、时间与哲学，常常从一个看似随意的细节进入深不可测的问题。他并不急于建立严密的体系，也不总是试图证明某种终极真理。相反，他似乎更享受思想在不同作品与语言之间意外相遇的时刻。这种态度让我觉得，阅读与写作未必是为了不断积累知识或生产观点，有时仅仅是为了让某种尚未被意识到的联系突然显现。",
        "What I admire in *Conversations with Borges* is exactly his almost playful freedom toward literature. He talks about language, poetry, time and philosophy, often entering unfathomable questions through a seemingly casual detail. He is in no hurry to build a rigorous system, nor does he always try to prove some ultimate truth. He seems instead to enjoy the moments when ideas meet unexpectedly across different works and languages. This attitude makes me feel that reading and writing are not necessarily for accumulating knowledge or producing opinions; sometimes they are only for letting a connection we had not yet noticed suddenly appear."
      ],
      [
        "不过，我也并不完全认同博尔赫斯对文学的处理方式。他对无限、镜像、迷宫与虚构文本的迷恋，具有令人惊叹的智识美感，却有时使真实的身体、情感与历史退居背景。当文学不断成为关于文学的文学，语言是否也可能逐渐脱离它原本试图触及的世界？这种疑问在人工智能时代反而显得更加尖锐。我们已经拥有越来越强大的文本生产能力，却未必因此获得更加丰富的现实经验。文学如果只是无限地引用、改写与重组自身，最终也可能成为另一座精巧而封闭的图书馆。",
        "Still, I do not fully agree with how Borges treats literature. His fascination with infinity, mirrors, labyrinths and fictional texts has a stunning intellectual beauty, but it sometimes pushes real bodies, feelings and history into the background. When literature keeps becoming literature about literature, might language also drift away from the world it first tried to reach? In the age of AI this doubt only sharpens. We have ever stronger power to produce text, yet not necessarily richer experience of reality. If literature only quotes, rewrites and recombines itself without end, it may finally become another exquisite, closed library."
      ],
      [
        "但博尔赫斯本人又不断抵抗着这种过于简单的理解。他喜爱古老语言的声音、诗歌的节奏、马黛茶的滋味，以及那些反复出现在梦境与记忆中的老虎。他的文学固然充满抽象结构，却也始终保留着某些极其私人、近乎固执的意象。这些意象之所以动人，不仅因为它们能够被巧妙地写进故事，也因为它们属于一个具体的人理解世界的方式。巴别图书馆可以包含所有关于老虎的描述，却无法因此拥有博尔赫斯对老虎的迷恋。",
        "But Borges himself keeps resisting this too-simple reading. He loved the sound of ancient languages, the rhythm of poetry, the taste of mate, and the tigers that recur in his dreams and memories. His literature is full of abstract structures, yet it always keeps certain deeply private, almost stubborn images. They move us not only because they can be cleverly written into stories, but because they belong to one particular person’s way of understanding the world. The Library of Babel can contain every description of tigers, but it cannot thereby have Borges’s fascination with them."
      ],
      [
        "《博尔赫斯谈话录》最有趣的地方，是它让一个创造了无数文学迷宫的人，以轻松、幽默而充满好奇的方式谈论自己的阅读与生活。它的局限也正在于此：谈话中的机智未必等于严密的论证，作者对自身作品的解释也未必拥有最终权威。但我喜欢这种不完整。它使博尔赫斯不再只是一个关于无限与时间的文学符号，而是一个仍然会被某个词语、某首诗或某种声音打动的人。",
        "The most interesting thing about *Conversations with Borges* is that it lets a man who built countless literary labyrinths talk about his reading and his life in a relaxed, humorous and curious way. Its limitation lies in the same place: wit in conversation does not necessarily amount to rigorous argument, and an author’s explanation of his own work has no final authority. But I like this incompleteness. It makes Borges no longer just a literary symbol of infinity and time, but a person who can still be moved by a word, a poem or a sound."
      ],
      [
        "我曾以为，《巴别图书馆》最可怕的地方，是它包含了所有可能的书籍，使真正有价值的文字淹没在无穷无尽的废话之中。现在我却觉得，问题或许不在于文字太多，而在于我们太容易将文字的存在误认为意义的存在。图书馆可以拥有所有关于爱情、死亡与幸福的句子，却不因此爱过、死过或幸福过。**当所有可能的文本都已存在，写作仍然值得继续，不是因为我们还能创造图书馆里没有的句子，而是因为我们仍然拥有图书馆无法替我们经历的人生。**",
        "I used to think the most terrifying thing about “The Library of Babel” was that it contains every possible book, drowning the truly valuable words in endless nonsense. Now I think the problem may not be too many words, but how easily we mistake the existence of words for the existence of meaning. A library can hold every sentence about love, death and happiness without having loved, died or been happy. **When every possible text already exists, writing is still worth continuing, not because we can still create sentences the library lacks, but because we still have a life the library cannot live for us.**"
      ]
    ]
  },
  {
    "date": "2023-11-08",
    "title": "The Beautiful Boulevard and the Cracks Behind It",
    "slug": "fin-de-siecle-vienna",
    "category": "History",
    "book": {
      "cover": "fin_de_siecle_vienna.jpg",
      "title": "Fin-de-Siècle Vienna",
      "author": "Carl E. Schorske",
      "language": "English",
      "country": "United States",
      "original": "English",
      "lines": [
        "History · English original, first published 1980",
        "Schorske’s study of how Vienna’s liberal crisis shaped Freud, Klimt, Schoenberg and the birth of modern culture."
      ]
    },
    "place": "于瑞士卢加诺\nLugano, Switzerland",
    "languages": [
      "Chinese",
      "English"
    ],
    "prose": [
      [
        "十九世纪末的维也纳，是欧洲文化史上最令人困惑的城市之一。弗洛伊德正在探索梦与无意识，克里姆特逐渐摆脱古典绘画的规范，勋伯格开始动摇传统音乐的调性秩序，文学、建筑与哲学也经历着深刻的变革。然而，这座孕育了现代主义的城市，同时也是自由主义衰退、民族主义兴起与反犹主义政治化的舞台。为什么一个社会能够在文化上如此富有创造力，却在政治上逐渐走向分裂？卡尔·舒尔斯克的《世纪末的维也纳》最吸引我的，正是它揭示了一个令人不安的悖论：**文明的创造力可以达到前所未有的高度，而文明对自身的理解却可能同时陷入危机。**",
        "Fin-de-siècle Vienna is one of the most bewildering cities in European cultural history. Freud was exploring dreams and the unconscious, Klimt was breaking away from the rules of classical painting, Schoenberg was beginning to shake the tonal order of traditional music, and literature, architecture and philosophy were all undergoing deep change. Yet the city that nurtured modernism was also the stage for the decline of liberalism, the rise of nationalism and the politicization of antisemitism. How can a society be so creative culturally and yet drift toward political division? What drew me most to Carl Schorske’s *Fin-de-Siècle Vienna* is the unsettling paradox it reveals: **a civilization’s creativity can reach unprecedented heights while its understanding of itself falls into crisis at the same time.**"
      ],
      [
        "舒尔斯克没有将维也纳现代主义写成一群天才突然出现的故事，而是将文化创新置于奥匈帝国自由主义的历史困境之中。十九世纪的自由派资产阶级相信理性、教育、法治与进步，试图通过文化教养建立现代社会的共同价值。维也纳环城大道（Ringstrasse）便是这种理想的建筑表达。议会大厦采用古希腊风格，市政厅借鉴哥特式建筑，大学与剧院则通过历史主义形式宣示知识与文化的权威。整条大道仿佛一座关于文明进步的纪念碑，但它的壮丽也掩盖了一个问题：当自由主义的社会基础开始动摇，建筑所展示的历史秩序是否还能代表现实？",
        "Schorske does not tell Viennese modernism as the sudden appearance of a group of geniuses; he places cultural innovation within the historical predicament of Habsburg liberalism. The liberal bourgeoisie of the nineteenth century believed in reason, education, the rule of law and progress, and tried to build the shared values of a modern society through cultivation. The Ringstrasse was the architectural expression of that ideal. The Parliament took a Greek style, the City Hall borrowed from the Gothic, and the university and theaters proclaimed the authority of knowledge and culture through historicist forms. The whole boulevard was like a monument to civilizational progress, but its grandeur also hid a problem: once the social foundations of liberalism began to shake, could the historical order the buildings displayed still represent reality?"
      ],
      [
        "这种矛盾在政治领域表现得更加直接。舒尔斯克分析了格奥尔格·冯·舍纳勒尔、卡尔·卢埃格尔与西奥多·赫茨尔等人物，展示大众政治如何逐渐摆脱自由主义精英所推崇的理性讨论，转而诉诸民族身份、集体情绪与政治动员。尤其是卢埃格尔对反犹主义的利用，说明现代政治并不必然随着教育普及和社会发展而变得更加理性。一个社会可以拥有先进的文化机构与高度发达的公共生活，却依然允许偏见成为有效的政治资源。文明并不是一种一旦获得便不会失去的成就。",
        "This contradiction appears even more directly in politics. Schorske analyzes figures such as Georg von Schönerer, Karl Lueger and Theodor Herzl, showing how mass politics gradually broke away from the rational discussion prized by liberal elites and turned to national identity, collective emotion and mobilization. Lueger’s use of antisemitism in particular shows that modern politics does not necessarily grow more rational with wider education and social development. A society can have advanced cultural institutions and a highly developed public life and still allow prejudice to serve as an effective political resource. Civilization is not an achievement that, once gained, cannot be lost."
      ],
      [
        "弗洛伊德的出现，使这种危机从公共世界进入人的内心。舒尔斯克将《梦的解析》放在维也纳自由主义的政治与文化背景中理解，认为弗洛伊德对无意识、压抑与父权关系的探索，也可以被视为对旧有理性主体观念的挑战。启蒙传统曾经相信，人能够通过理性理解并掌握自己；精神分析却揭示，人甚至无法完全知道自己为什么如此思考和行动。更有意思的是，弗洛伊德并没有简单抛弃科学理性，而是试图以科学的方法研究理性无法直接掌握的领域。现代主义因此不只是对旧秩序的否定，也是一种在旧秩序失效后重新寻找解释方式的努力。",
        "Freud’s arrival carried this crisis from the public world into the human interior. Schorske reads *The Interpretation of Dreams* against the political and cultural background of Viennese liberalism, suggesting that Freud’s exploration of the unconscious, repression and the father relationship can also be seen as a challenge to the old idea of the rational subject. The Enlightenment tradition believed people could understand and master themselves through reason; psychoanalysis revealed that we cannot even fully know why we think and act as we do. More interesting still, Freud did not simply abandon scientific rationality but tried to study, by scientific methods, a realm reason cannot directly command. Modernism was thus not only a negation of the old order but an effort to find new ways of explanation after the old order had failed."
      ],
      [
        "克里姆特的绘画则以更加直观的方式表现了这种变化。舒尔斯克对维也纳大学委托创作的三幅学院画——《哲学》《医学》与《法学》——的分析尤其具有说服力。原本应当歌颂知识、科学与法律权威的公共艺术，却在克里姆特笔下呈现出充满欲望、死亡与不可控制力量的人类世界。这些作品引发争议，并非仅仅因为形式上的大胆，而是因为它们拒绝为自由主义社会提供期待中的理性与进步形象。艺术不再承担装饰文明的职责，而开始揭露文明无法解释的部分。",
        "Klimt’s painting expresses this change more directly. Schorske’s analysis of the three faculty paintings commissioned by the University of Vienna, *Philosophy*, *Medicine* and *Jurisprudence*, is especially persuasive. Public art that was meant to celebrate knowledge, science and the authority of law instead shows, in Klimt’s hands, a human world full of desire, death and uncontrollable forces. These works caused controversy not merely for their formal boldness but because they refused to give liberal society the image of reason and progress it expected. Art no longer decorated civilization; it began to expose what civilization could not explain."
      ],
      [
        "读到这里，我不由得想到今天的硅谷。我们同样生活在一个崇尚创新、效率与技术突破的环境中。人工智能的进步令人惊叹，资本、人才与社会注意力以前所未有的速度向少数技术领域集中。新的模型、新的产品与新的能力不断出现，仿佛技术发展的速度本身已经足以证明社会正在进步。然而，我越来越怀疑，**我们是否正在用技术创新的繁荣，掩盖自己对于社会价值的贫乏理解？** 我们能够越来越准确地衡量模型性能、计算效率与商业增长，却很难用同样严谨的方式回答：这些进步究竟改善了谁的生活，又让哪些人的处境变得更加脆弱？",
        "Reading this, I could not help thinking of today’s Silicon Valley. We too live in an environment that prizes innovation, efficiency and technological breakthrough. The progress of artificial intelligence is astonishing, and capital, talent and public attention are concentrating on a few technical fields at unprecedented speed. New models, products and capabilities keep appearing, as if the pace of technology were itself proof that society is advancing. Yet I increasingly wonder: **are we using the boom of technological innovation to cover a poor understanding of social value?** We can measure model performance, computing efficiency and business growth ever more precisely, but we can hardly answer with the same rigor whose lives these advances actually improve, and whose positions they make more vulnerable."
      ],
      [
        "这种怀疑也来自我对技术行业内部文化的观察。在一个高度重视创新的环境中，创造新事物很容易成为一种自我证明。人们不断强调工作的突破性、影响力与未来潜力，而这些判断往往建立在行业内部形成的评价体系之上。某项技术可能在专业指标上取得显著进展，却未必对社会产生同等程度的价值。更微妙的是，当所有人都在使用相似的语言赞美创新时，质疑创新的实际意义反而可能显得不合时宜。我有时觉得，这与舒尔斯克笔下的维也纳资产阶级存在某种相似性：一个群体可以拥有高度精致的文化，却逐渐失去从外部审视自身价值的能力。",
        "This doubt also comes from what I have observed of the tech industry’s internal culture. In an environment that values innovation so highly, creating something new easily becomes a form of self-justification. People keep stressing the breakthrough, impact and future potential of their work, and these judgments are often built on evaluation systems formed inside the industry. A technology may make remarkable progress on professional metrics without producing a comparable value for society. More subtly, when everyone praises innovation in similar language, questioning its actual meaning can seem out of place. I sometimes feel this resembles Schorske’s Viennese bourgeoisie: a group can have a highly refined culture and yet gradually lose the ability to examine its own values from outside."
      ],
      [
        "不过，两者之间存在一个值得注意的区别。世纪末维也纳的现代主义艺术家，往往通过创作揭露文明的裂缝。弗洛伊德质疑理性主体的透明性，克里姆特拒绝以和谐的图像掩盖生命的混乱，勋伯格则开始探索传统调性之外的表达方式。他们的创新并不总是为了证明社会正在变得更好，反而常常来自对既有秩序的不信任。相比之下，今天的科技产业更习惯于将创新描述为解决问题的力量。我们不仅创造新的工具，也不断创造关于这些工具将如何改变世界的宏大叙事。**维也纳的现代主义试图打破进步的幻觉，而硅谷的技术文化却可能正在制造一种新的进步幻觉。**",
        "There is, however, a difference worth noting. The modernist artists of fin-de-siècle Vienna often used their work to expose the cracks in civilization. Freud questioned the transparency of the rational subject, Klimt refused to cover life’s disorder with harmonious images, and Schoenberg began to explore expression beyond traditional tonality. Their innovations were not always meant to prove that society was getting better; they often came from distrust of the established order. By contrast, today’s tech industry is more used to describing innovation as a force for solving problems. We create not only new tools but also grand narratives about how those tools will change the world. **Viennese modernism tried to break the illusion of progress, while Silicon Valley’s technology culture may be producing a new one.**"
      ],
      [
        "当然，这种比较也有其局限。维也纳的艺术革命与今天的技术发展具有不同的历史条件、社会结构与实际影响。人工智能、医学与工程领域的进步确实能够创造重要的公共价值，不能因为产业存在夸大的宣传，就否认技术本身的意义。真正需要警惕的，并不是创新，而是将创新等同于进步的习惯。当技术能力的增长被自动解释为社会价值的增长，我们便可能失去判断两者之间差异的能力。",
        "Of course, the comparison has its limits. Vienna’s artistic revolution and today’s technological development have different historical conditions, social structures and real impact. Progress in AI, medicine and engineering can indeed create important public value, and we cannot deny the meaning of technology itself because the industry exaggerates its claims. What deserves vigilance is not innovation but the habit of equating innovation with progress. When growth in technical capability is automatically read as growth in social value, we may lose the ability to judge the difference between them."
      ],
      [
        "这种思考也让我重新审视自己在技术环境中的位置。我可以批判行业对于创新的过度赞美，却也享受这种文化所提供的机会、认可与物质回报。我能够看见其中的夸张与自我陶醉，却仍然愿意参与其中，甚至在某些时刻使用同样的语言解释自己的工作。这并不意味着所有参与都是虚伪的，而是提醒我，批判一个体系与摆脱一个体系，从来不是同一回事。**一个人可以在思想上看穿某种时代神话，却仍然在生活中依赖它赋予自己的意义。** 也许真正困难的，不是识别行业叙事中的夸张，而是在自身利益与批判判断发生冲突时，仍然能够诚实地衡量工作的价值。",
        "This line of thought also made me reexamine my own place in the tech world. I can criticize the industry’s excessive praise of innovation, yet I also enjoy the opportunities, recognition and material rewards this culture provides. I can see its exaggeration and self-intoxication and still be willing to take part, even using the same language at times to explain my own work. This does not mean all participation is hypocritical; it reminds me that criticizing a system and escaping it are never the same thing. **A person can see through the myth of an age in thought and still depend, in life, on the meaning it gives them.** Perhaps the real difficulty is not recognizing the exaggeration in the industry’s narrative, but still weighing the value of one’s work honestly when self-interest conflicts with critical judgment."
      ],
      [
        "从历史研究的角度看，我尤其欣赏舒尔斯克跨越学科边界的能力。他将政治史、建筑史、精神分析、文学与音乐联系起来，使读者看到同一时代的不同文化形式如何回应共同的问题。但这种宏大的综合也存在局限。弗洛伊德的精神分析、克里姆特的绘画与勋伯格的音乐，固然受到维也纳社会环境的影响，却不能完全被解释为自由主义衰退的结果。艺术家拥有自身的美学传统、技术问题与个人追求，而现代主义的发展也受到跨国思想交流的影响。历史解释越是优美完整，我们越需要警惕它是否将复杂的偶然性整理成过于整齐的因果关系。",
        "As historical scholarship, I especially admire Schorske’s ability to cross disciplinary boundaries. He connects political history, architectural history, psychoanalysis, literature and music, letting readers see how different cultural forms of one era answered shared problems. But such grand synthesis has limits. Freud’s psychoanalysis, Klimt’s painting and Schoenberg’s music were certainly shaped by Vienna’s social environment, yet they cannot be fully explained as results of liberalism’s decline. Artists have their own aesthetic traditions, technical problems and personal pursuits, and the development of modernism was also influenced by international exchange of ideas. The more elegant and complete a historical explanation, the more we must ask whether it has tidied complex contingency into too neat a chain of cause and effect."
      ],
      [
        "《世纪末的维也纳》最深刻的地方，不在于它证明了文化繁荣必然伴随社会衰退，而在于它迫使我们放弃一种过于简单的进步观。一个社会可以在某些领域不断突破，同时在另一些领域陷入停滞；可以拥有令人惊叹的创造能力，却无法建立与之相称的公共信任与社会共识。技术与文化的发展固然值得赞美，但它们不能替代对政治、伦理与社会责任的讨论。",
        "The most profound thing about *Fin-de-Siècle Vienna* is not that it proves cultural flourishing must accompany social decline, but that it forces us to give up an overly simple view of progress. A society can keep breaking through in some fields while stagnating in others; it can have astonishing creative power and yet fail to build a matching public trust and social consensus. The development of technology and culture is worth celebrating, but it cannot replace discussion of politics, ethics and social responsibility."
      ],
      [
        "**也许一个时代最危险的幻觉，并不是它相信自己已经解决了所有问题，而是它不断创造新事物，以至于逐渐忘记追问这些创造究竟是为了解决什么问题。** 世纪末的维也纳提醒我，文明的精致与文明的健全，从来不是同一回事。而对于今天的我们，真正值得警惕的或许也不是创新停止的那一天，而是创新仍然以惊人的速度继续，我们却已经不再认真追问它的意义。",
        "**Perhaps the most dangerous illusion of an age is not that it believes it has solved every problem, but that it keeps creating new things until it forgets to ask what problem the creations were meant to solve.** Fin-de-siècle Vienna reminds me that a civilization’s refinement and its health are never the same thing. And for us today, what deserves vigilance may not be the day innovation stops, but the day it continues at astonishing speed while we no longer seriously ask what it means."
      ]
    ]
  },
  {
    "date": "2020-11-15",
    "title": "The Weight of One",
    "slug": "the-weight-of-one",
    "category": "Philosophy",
    "book": {
      "cover": "trolley_problem.jpg",
      "title": "The Trolley Problem",
      "author": "Thomas Cathcart",
      "language": "English",
      "country": "United States",
      "original": "English",
      "lines": [
        "Philosophy · English original, first published 2013",
        "Full title: The Trolley Problem, or Would You Throw the Fat Guy Off the Bridge? A philosophical conundrum told as a comic courtroom trial."
      ]
    },
    "place": "于加州圣克拉拉\nSanta Clara, CA",
    "languages": [
      "Chinese",
      "English"
    ],
    "prose": [
      [
        "在哲学的诸多思想实验中，恐怕很少有比电车难题更加粗暴的。五个人被困在铁轨上，一辆失控的电车正迎面驶来，而你只需要扳动道岔，便能以一个人的死亡换取五个人的生存。问题似乎简单得近乎残忍，直到哲学家把场景移到一座天桥上：如果必须亲手将一个无辜的胖子推下去，才能阻止电车，我们还愿意作出同样的选择吗？数字没有改变，死亡的数量也没有改变，改变的只是我们与死亡之间的距离。",
        "Among philosophy’s many thought experiments, few are cruder than the trolley problem. Five people are trapped on the tracks, a runaway trolley is bearing down on them, and all you have to do is throw a switch to trade one person’s death for five lives. The problem seems almost cruelly simple, until the philosopher moves the scene to a footbridge: if you must push an innocent fat man off with your own hands to stop the trolley, would you still make the same choice? The numbers have not changed, nor has the number of deaths. What has changed is only our distance from the death."
      ],
      [
        "托马斯·卡思卡特在《电车难题》中，将这个原本属于伦理学课堂的思想实验改写成一场荒诞的法庭审判。一个人因为将胖子推下桥而受到指控，律师、证人与哲学家轮番登场，试图为这场死亡寻找能够成立的道德解释。卡思卡特最巧妙的地方，是让那些通常安静地躺在哲学著作中的概念，突然拥有了法庭上的声音。功利主义、义务论与道德直觉不再只是抽象的理论，而成为彼此质询、相互拆台的辩护词。读者既像陪审员，又像那个站在桥上的人，不得不在各种看似合理的论证之间寻找自己的立场。",
        "In *The Trolley Problem*, Thomas Cathcart rewrites this thought experiment, which belongs to the ethics classroom, as an absurd courtroom trial. A man is charged with pushing a fat man off a bridge, and lawyers, witnesses and philosophers take the stand in turn, trying to find a moral explanation for the death that will hold up. Cathcart’s cleverest move is to give concepts that usually lie quietly in philosophy books a voice in court. Utilitarianism, deontology and moral intuition are no longer just abstract theories but arguments that cross-examine and undermine one another. The reader is both juror and the person standing on the bridge, forced to find a position among arguments that all seem reasonable."
      ],
      [
        "但这场审判越是热闹，那个被推下桥的人反而越显得沉默。他没有复杂的过去，没有家庭，没有名字，甚至没有属于自己的声音。他存在的全部意义，似乎就是拥有足够的体重，可以阻挡一辆电车。这种近乎滑稽的设定，恰恰暴露了思想实验的某种残酷：为了使道德问题变得清晰，哲学首先必须剥夺人物的复杂性。五个人被简化为数字，一个人被简化为重量，而我们则被要求在这些经过精心删减的生命之间作出选择。",
        "But the livelier the trial becomes, the more silent the man pushed off the bridge seems. He has no complicated past, no family, no name, not even a voice of his own. The whole meaning of his existence seems to be having enough weight to stop a trolley. This almost comic setup exposes a certain cruelty in thought experiments: to make a moral problem clear, philosophy must first strip people of their complexity. Five people are reduced to a number, one person to a weight, and we are asked to choose among lives that have been carefully pared down."
      ],
      [
        "我尤其在意这种抽象所带来的不安。功利主义的计算并不难理解，五条生命当然多于一条生命。但当一个人被描述为可以牺牲的单位时，我们似乎已经悄悄接受了某种前提：人的生命能够被放进同一张表格，并根据数量决定其价值。康德式的义务论试图抵抗这种计算，坚持人不能仅仅被当作实现其他目的的工具。然而，当我们拒绝推人下桥时，是否真的因为尊重人的尊严，还是仅仅因为无法忍受自己成为直接杀人的那个人？道德原则与个人情感之间的界限，远比哲学家希望的更加模糊。",
        "I am especially troubled by the unease this abstraction brings. Utilitarian calculation is not hard to understand: five lives are of course more than one. But when a person is described as a unit that can be sacrificed, we seem to have quietly accepted a premise: that human lives can be put in one table and their value decided by quantity. Kantian deontology tries to resist this calculation, insisting that a person must never be treated merely as a means to other ends. Yet when we refuse to push the man off the bridge, is it really out of respect for human dignity, or only because we cannot bear to be the one who kills directly? The line between moral principle and personal feeling is far blurrier than philosophers would like."
      ],
      [
        "卡思卡特的幽默使这种矛盾显得格外尖锐。他并不急于告诉读者应该相信哪一种伦理学说，而是不断让某个看似无懈可击的论证遭遇新的反例。我们刚刚相信结果比意图重要，便发现这种逻辑可能允许牺牲无辜者；刚刚坚持绝不能主动伤害他人，又不得不面对袖手旁观所造成的死亡。每一种理论都试图为道德建立清晰的边界，却又不断被具体情境所破坏。哲学在这里不是消除困惑的工具，反而是一种使困惑更加精确的艺术。",
        "Cathcart’s humor makes the contradiction especially sharp. He is in no hurry to tell the reader which ethical theory to believe, but keeps letting a seemingly airtight argument meet a new counterexample. No sooner do we believe that outcomes matter more than intentions than we find this logic may permit sacrificing the innocent; no sooner do we insist that one must never actively harm others than we must face the deaths caused by standing by. Each theory tries to draw a clear boundary for morality, and each is repeatedly broken by concrete situations. Philosophy here is not a tool for dispelling confusion but an art of making confusion more precise."
      ],
      [
        "我也逐渐意识到，电车难题之所以令人难忘，并不只是因为它考验我们的道德直觉，更因为它揭示了现代社会处理死亡的一种特殊方式。现实中的生命很少以如此直观的形式摆在我们面前。它们更多时候出现在统计报告、公共预算、风险评估与政策模型之中。我们可以冷静地讨论某项措施能够减少多少死亡，却很难想象自己亲手决定某个具体的人必须牺牲。数字让大规模的痛苦变得可以理解，也让个体的痛苦变得容易忽略。某种意义上，现代社会每天都在进行没有电车、没有天桥，也没有明确行动者的道德计算。",
        "I have also come to see that the trolley problem is memorable not only because it tests our moral intuitions but because it reveals a particular way modern society deals with death. Real lives are seldom set before us in such a vivid form. More often they appear in statistical reports, public budgets, risk assessments and policy models. We can calmly discuss how many deaths a measure would prevent, yet can hardly imagine deciding with our own hands that a specific person must be sacrificed. Numbers make mass suffering comprehensible and make individual suffering easy to ignore. In a sense, modern society carries out moral calculations every day with no trolley, no footbridge and no clear actor."
      ],
      [
        "但我并不愿意因此否定计算的必要性。一个社会如果拒绝比较政策的后果，反而可能造成更多本可避免的伤害。真正令我怀疑的，是我们是否过于容易将计算的结果误认为道德的答案。一个模型能够告诉我们怎样减少总体风险，却无法仅凭数学证明谁应该承担剩余的风险。那些被称为最优的决定，往往只是在某些预先设定的价值标准下最优。卡思卡特的思想实验虽然极端，却使这些通常隐藏在制度语言背后的价值判断重新显露出来。",
        "But I do not want to deny the necessity of calculation. A society that refuses to compare the consequences of policies may cause even more avoidable harm. What I doubt is whether we too easily mistake the result of a calculation for a moral answer. A model can tell us how to reduce overall risk but cannot prove, by mathematics alone, who should bear the remaining risk. Decisions called optimal are often optimal only under certain preset standards of value. Cathcart’s thought experiment, extreme as it is, brings back into view the value judgments usually hidden behind institutional language."
      ],
      [
        "作为一部哲学普及作品，《电车难题》的魅力来自它近乎戏剧性的叙事形式。卡思卡特善于利用法庭辩论的节奏，将复杂的伦理学争论转化为机智、荒诞而富有讽刺意味的对话。它不像严肃的哲学论文那样逐层建立论证，而是让不同立场在相互碰撞中暴露自身的局限。不过，这种轻巧也构成了本书的弱点。人物有时更像某种理论的代言人，而不是拥有独立生命的个体；哲学分歧则容易被压缩成一场聪明的语言游戏。读者可能记住了那些令人捧腹的反驳，却未必真正理解不同伦理传统背后更复杂的思想基础。",
        "As a work of popular philosophy, *The Trolley Problem* draws its charm from its almost theatrical narrative form. Cathcart makes good use of the rhythm of courtroom debate, turning complex ethical arguments into witty, absurd and satirical dialogue. Unlike a serious philosophy paper, it does not build an argument layer by layer but lets different positions expose their own limits as they collide. Yet this lightness is also the book’s weakness. Characters sometimes feel more like spokespeople for a theory than individuals with lives of their own, and philosophical disagreement is easily compressed into a clever language game. Readers may remember the laugh-out-loud rebuttals without really understanding the more complex intellectual foundations of the different ethical traditions."
      ],
      [
        "更值得怀疑的，是思想实验本身所设置的封闭世界。在那里，电车必然失控，五个人必然被困，桥上的胖子必然能够阻止灾难，而我们只能在两个残酷的选项之间作出决定。所有能够改变问题的现实条件，都被哲学家提前排除。这种设计使道德冲突变得纯粹，却也让责任变得异常狭窄。我们只需要回答是否应该牺牲一个人，而不必追问为什么有人会被绑在铁轨上，为什么没有其他安全措施，或者是谁创造了这种必须以死亡换取生存的处境。思想实验的清晰，有时恰恰来自它对现实复杂性的拒绝。",
        "More doubtful still is the closed world the thought experiment sets up. There the trolley must be out of control, the five must be trapped, the fat man on the bridge must be able to stop the disaster, and we can only decide between two cruel options. All the real conditions that could change the problem are excluded in advance by the philosopher. This design makes the moral conflict pure, but it also makes responsibility strangely narrow. We need only answer whether to sacrifice one person, without asking why someone was tied to the tracks, why there are no other safety measures, or who created a situation in which survival must be bought with death. The clarity of a thought experiment sometimes comes precisely from its refusal of real-world complexity."
      ],
      [
        "这也是我对卡思卡特既欣赏又有所保留的原因。他成功地让伦理学重新具有了文学的趣味，却也提醒我，哲学与文学处理人的方式并不相同。哲学为了检验原则，往往需要剥除人物的具体性；文学却恰恰通过恢复人物的名字、记忆与生活，使任何关于人的抽象判断变得困难。如果桥上的胖子不再只是一个足以阻挡电车的身体，而是一个拥有童年、爱人、恐惧与未完成愿望的人，那么我们或许便无法如此轻松地讨论他的死亡。",
        "This is why I both admire and have reservations about Cathcart. He succeeds in giving ethics the pleasures of literature again, but he also reminds me that philosophy and literature treat people differently. To test principles, philosophy often has to strip people of their particularity; literature, by restoring a person’s name, memories and life, makes any abstract judgment about people difficult. If the fat man on the bridge were no longer just a body big enough to stop a trolley, but a person with a childhood, a lover, fears and unfinished wishes, we might not be able to discuss his death so easily."
      ],
      [
        "读完这本书，我仍然不知道自己会不会扳动道岔，更无法确信在天桥上会作出什么选择。但我开始觉得，电车难题真正令人不安的，并不是它没有提供一个令人满意的答案，而是它使我们如此轻易地接受了一个人可以被化约为一道算术题的前提。我们争论五是否大于一，却很少追问那个“一”究竟意味着什么。",
        "Having finished the book, I still do not know whether I would throw the switch, and I cannot be sure what I would choose on the footbridge. But I have begun to feel that what is truly disturbing about the trolley problem is not that it offers no satisfying answer, but that it makes us accept so easily the premise that a person can be reduced to an arithmetic problem. We argue over whether five is greater than one, and seldom ask what that “one” really means."
      ],
      [
        "**也许电车难题最残酷的地方，并不是它要求我们牺牲一个人，而是为了让牺牲变得可以讨论，它首先必须让那个人失去作为一个人的全部重量。**",
        "**Perhaps the cruelest thing about the trolley problem is not that it asks us to sacrifice one person, but that, to make the sacrifice discussable, it must first strip that person of all the weight of being a person.**"
      ]
    ]
  },
  {
    "date": "2018-09-22",
    "title": "The Voices History Cannot Absorb",
    "slug": "zinky-boys",
    "category": "Oral history",
    "book": {
      "cover": "zinky_boys.jpg",
      "title": "Zinky Boys",
      "author": "Svetlana Alexievich",
      "language": "English",
      "country": "Russia",
      "original": "Russian",
      "lines": [
        "Oral history · Russian original, first published 1991",
        "Testimony from Soviet soldiers, nurses, mothers and widows of the war in Afghanistan, woven into a book with no single narrator."
      ]
    },
    "place": "于中国上海\nShanghai, China",
    "languages": [
      "Chinese",
      "English"
    ],
    "prose": [
      [
        "战争结束之后，士兵被装进锌皮棺材运回故乡。棺材被封死，家属甚至无法再看一眼死者的面容。一个活生生的人，就这样从儿子、丈夫、恋人，变成一具不能打开的棺材，以及一套关于英勇牺牲的官方说辞。斯维特兰娜·阿列克谢耶维奇的《锌皮娃娃兵》写的是苏联入侵阿富汗的战争，却几乎不关心战场上的胜负。她关心的是那些从战争中回来的人，或者更准确地说，那些再也无法真正回来的人。",
        "After the war, soldiers were shipped home in zinc coffins. The coffins were sealed, and families could not even look at the dead one last time. A living person thus went from son, husband and lover to a coffin that could not be opened, and an official rhetoric of heroic sacrifice. Svetlana Alexievich’s *Zinky Boys* is about the Soviet invasion of Afghanistan, yet it hardly cares about victory or defeat on the battlefield. It cares about those who came back from the war, or more precisely, those who can never truly come back."
      ],
      [
        "阿列克谢耶维奇最独特的地方，在于她没有选择传统战争小说的叙事方式。她不创造一个能够代表战争经验的主人公，不安排人物经历从天真到幻灭的完整成长，也不试图以一条清晰的因果线解释战争如何开始、如何结束。她收集士兵、军官、护士、母亲与妻子的证言，将彼此矛盾、相互纠缠的声音编织成一部没有单一中心的作品。有人仍然相信自己曾经为祖国而战，有人承认参与过残酷的杀戮，有人无法摆脱战场上的恐惧，也有人只想知道自己的孩子究竟为什么死去。这些声音并不总是相互理解，却共同构成了一种无法被统一叙事轻易容纳的历史。",
        "What is most distinctive about Alexievich is that she does not use the narrative mode of the traditional war novel. She creates no protagonist to represent the experience of war, arranges no complete arc from innocence to disillusionment, and does not try to explain with a clear causal line how the war began and ended. She gathers testimony from soldiers, officers, nurses, mothers and wives, and weaves their contradictory, entangled voices into a work with no single center. Some still believe they fought for their country, some admit to taking part in brutal killing, some cannot escape the fear of the battlefield, and some only want to know why their child died. These voices do not always understand one another, but together they form a history that no unified narrative can easily hold."
      ],
      [
        "我越来越觉得，这种形式本身就是阿列克谢耶维奇最重要的思想表达。传统的战争叙事，无论是歌颂英雄还是控诉暴行，往往仍然需要某种中心：一个主人公、一条情节线，或者一个能够统摄所有事件的历史判断。阿列克谢耶维奇却有意让这种中心缺席。她并不提供一个最终能够解释所有证言的权威声音，而是让读者不断遭遇彼此冲突的记忆。战争在这里不是一个等待被完整讲述的故事，而是无数无法相互还原的个人经验。**如果战争本身就是对人类生活秩序的摧毁，那么任何过于完整、过于和谐的战争叙事，是否也可能在形式上背叛战争的真实？**",
        "I increasingly feel that this form is itself Alexievich’s most important statement of thought. Traditional war narratives, whether they praise heroes or denounce atrocities, usually still need some center: a protagonist, a plot line, or a historical judgment that governs all events. Alexievich deliberately leaves that center absent. She offers no authoritative voice that finally explains all the testimony, but lets readers keep running into conflicting memories. War here is not a story waiting to be told whole but countless personal experiences that cannot be reduced to one another. **If war is itself the destruction of the order of human life, might any war narrative that is too complete and too harmonious also betray the truth of war in its form?**"
      ],
      [
        "最令我难忘的是书中那些母亲的声音。战争在政治语言中意味着国家、边界、意识形态与历史使命，但对于母亲而言，战争首先意味着一个曾经生活在自己身边的孩子突然消失了。她们记得儿子的童年、性格与生活中的琐事，却必须接受国家以某种庄严而抽象的语言解释他的死亡。勋章、悼词与葬礼可以赋予牺牲一种公共意义，却无法回答一个更加私人、也更加残酷的问题：为什么偏偏是我的孩子？阿列克谢耶维奇并不试图将这些母亲塑造成某种象征。她让她们反复讲述、迟疑、愤怒，甚至说出彼此矛盾的话。正是这种不整齐，使悲伤不再只是文学中一个可以被理解的主题，而成为一种始终无法被解释完毕的经验。",
        "What I remember most are the voices of the mothers in the book. In political language war means the state, borders, ideology and historical mission, but for a mother it means first of all that a child who lived at her side has suddenly vanished. She remembers her son’s childhood, his character and the small things of daily life, yet must accept that the state explains his death in solemn, abstract language. Medals, eulogies and funerals can give the sacrifice a public meaning, but they cannot answer a more private and crueler question: why my child? Alexievich does not try to turn these mothers into symbols. She lets them tell their stories over and over, hesitate, rage, even contradict themselves. This untidiness turns grief from a theme literature can understand into an experience that can never be fully explained."
      ],
      [
        "她对士兵的书写同样拒绝简单的道德分类。许多人既是被战争伤害的人，也是伤害他人的人。他们可能曾经怀抱理想奔赴阿富汗，却在那里学会了杀戮、掠夺与对死亡的麻木。一个人可以在战场上做出平时无法想象的事情，又在回到故乡之后，被要求重新成为一个普通的儿子、丈夫或邻居。阿列克谢耶维奇没有替他们完成这种道德上的自我和解。她允许一个人同时值得同情与谴责，允许受害者的身份与加害者的责任并存。文学在这里并不是为人物寻找一个可以安放的位置，而是拒绝让任何单一身份解释他们的全部经历。",
        "Her writing about soldiers likewise refuses simple moral categories. Many were both harmed by the war and harmful to others. They may have gone to Afghanistan with ideals, only to learn there to kill, to plunder and to grow numb to death. A person can do on the battlefield what is unimaginable in ordinary life, and after returning home is asked to become again an ordinary son, husband or neighbor. Alexievich does not complete this moral self-reconciliation for them. She allows one person to deserve both sympathy and condemnation, and lets the identity of victim and the responsibility of perpetrator coexist. Literature here does not find a place to settle the characters but refuses to let any single identity explain all they lived through."
      ],
      [
        "这种写作让我想到巴赫金所说的复调，但阿列克谢耶维奇又与陀思妥耶夫斯基式的复调小说有所不同。她的声音来自真实的历史见证者，而非完全虚构的人物；它们之间的矛盾也不仅是思想立场的冲突，更涉及记忆、创伤与自我辩护。一个士兵对战争的解释，可能与母亲对儿子死亡的理解截然不同；同一个人也可能在不同时间改变自己的叙述。阿列克谢耶维奇并不急于消除这些不一致。相反，她让矛盾成为作品的结构，使读者无法轻易获得一个稳定、完整而令人安心的结论。",
        "This writing recalls Bakhtin’s polyphony, but Alexievich differs from the Dostoevskian polyphonic novel. Her voices come from real witnesses of history, not wholly invented characters, and their contradictions are not only clashes of ideological position but involve memory, trauma and self-justification. A soldier’s explanation of the war may differ completely from a mother’s understanding of her son’s death, and the same person may change their account at different times. Alexievich is in no hurry to remove these inconsistencies. Instead she makes contradiction the structure of the work, so that readers cannot easily reach a stable, complete and reassuring conclusion."
      ],
      [
        "这也让我重新思考自己在工作中理解现实的方式。无论是技术研发还是公共政策分析，我都习惯于将复杂的问题转化为可以比较的指标、分类与结论。数据能够帮助我们识别趋势，模型能够帮助我们作出预测，报告则试图从大量事实中提炼出可供决策的判断。这些方法当然有其必要性，但它们也不可避免地要求我们舍弃某些细节。一个人的生活经验可能最终变成一条数据，一种复杂的社会处境可能被归入某个统计类别。我们越是追求分析的清晰与可操作性，就越容易忘记那些无法被模型充分表达的差异。",
        "This also made me rethink how I understand reality in my work. Whether in technical development or public policy analysis, I am used to turning complex problems into comparable metrics, categories and conclusions. Data helps us identify trends, models help us predict, and reports try to distill judgments for decision-making from a mass of facts. These methods are of course necessary, but they inevitably require us to discard some details. A person’s lived experience may end up as one data point, and a complex social situation may be filed under a statistical category. The more we pursue clarity and actionability in analysis, the easier it is to forget the differences a model cannot adequately express."
      ],
      [
        "阿列克谢耶维奇的写作几乎朝着相反的方向前进。她不急于消除噪声，不将相互冲突的证言平均成某种共识，也不把所有个人经验压缩成一个可以用于证明结论的案例。她保留重复、停顿、情绪与叙述中的不一致，使那些在正式报告中通常会被删去的部分，成为作品真正的内容。这让我意识到，**我们有时以为自己是在通过抽象理解世界，却可能也在通过抽象使世界变得更容易被自己接受。** 一份清晰的报告可以帮助我们认识问题的规模，却未必能够让我们理解问题对于某个具体的人意味着什么。",
        "Alexievich’s writing moves in almost the opposite direction. She is in no hurry to remove noise, does not average conflicting testimony into a consensus, and does not compress personal experience into a case that proves a conclusion. She keeps the repetitions, pauses, emotions and inconsistencies of the telling, so that what a formal report would usually cut becomes the real content of the work. This made me realize that **we sometimes think we understand the world through abstraction, when we may also be using abstraction to make the world easier for ourselves to accept.** A clear report can help us grasp the scale of a problem, but it cannot necessarily make us understand what the problem means to a particular person."
      ],
      [
        "不过，我并不认为这种文学形式天然比历史研究或数据分析更加接近真相。阿列克谢耶维奇并非一个透明的记录装置。她决定采访谁、保留哪些话语、如何剪裁与排列证言，也决定了读者将如何理解这些声音。看似没有中心叙述者的作品，实际上仍然存在一个强大的作者意识。她通过让自己退居幕后，使不同证言获得了独立的表现空间，却也可能让读者忽略这些声音已经经过文学加工。**复调并不意味着作者权力的消失，而意味着作者将自己的权力从直接解释转移到了选择与编排之中。**",
        "Still, I do not think this literary form is inherently closer to the truth than historical research or data analysis. Alexievich is not a transparent recording device. Whom she interviews, which words she keeps, and how she cuts and arranges the testimony also decide how readers will understand these voices. A work that seems to have no central narrator in fact still has a powerful authorial consciousness. By stepping behind the scenes she gives each testimony independent room, but she may also let readers forget that the voices have been literarily shaped. **Polyphony does not mean the disappearance of the author’s power; it means the author moves that power from direct explanation into selection and arrangement.**"
      ],
      [
        "这一点在《锌皮娃娃兵》出版后引发的争议中显得尤其重要。部分受访者及其家属对书中的呈现提出异议，作品也曾引发诉讼。这样的争议不能简单证明作者失实，也不能因为作品具有反战立场就被一笔带过。一个人愿意讲述自己的痛苦，并不必然意味着他愿意让这些话语在新的文学结构中获得作者赋予的意义。见证文学由此面临一种特殊的伦理困境：它希望将被压抑的个人声音从官方历史中解放出来，却又不可避免地将这些声音纳入作者自己的叙事。文学究竟是在让他人说话，还是在借助他人的话语完成自己的表达？我认为，这个问题没有简单的答案，却恰恰构成了阿列克谢耶维奇写作最值得认真讨论的部分。",
        "This matters especially given the controversy after *Zinky Boys* was published. Some interviewees and their families objected to how they were presented, and the work even led to lawsuits. Such disputes cannot simply prove the author inaccurate, nor can they be brushed aside because the book takes an anti-war stance. A person’s willingness to tell their pain does not necessarily mean they are willing for those words to take on the meaning an author gives them in a new literary structure. Testimonial literature thus faces a particular ethical dilemma: it wants to free suppressed personal voices from official history, yet inevitably folds them into the author’s own narrative. Is literature letting others speak, or using their words to complete its own expression? I think there is no simple answer, and this is exactly the part of Alexievich’s writing most worth serious discussion."
      ],
      [
        "我也逐渐意识到，《锌皮娃娃兵》的复调形式之所以具有如此强烈的反战力量，并不是因为它让更多人证明战争残酷，而是因为它破坏了战争最依赖的叙事机制。战争需要一个能够超越个体生命的理由：国家的安全、历史的使命、集体的荣誉，或者未来某种更美好的秩序。只有当无数人的死亡能够被纳入一个共同的故事，牺牲才可能显得值得。但阿列克谢耶维奇不断将这个共同的故事拆解成无法相互替代的私人记忆。一个母亲的悲伤无法被另一个母亲的悲伤抵消，一个士兵的恐惧也无法因为另一场胜利而消失。她不是通过提出一套新的宏大理论反驳战争，而是让宏大理论无法继续完整地解释这些人的生活。",
        "I have also come to see that the polyphonic form of *Zinky Boys* has such strong anti-war force not because it lets more people prove war is cruel, but because it destroys the narrative mechanism war depends on most. War needs a reason that transcends individual lives: national security, a historical mission, collective honor, or some better future order. Only when countless deaths can be folded into one common story can sacrifice seem worthwhile. But Alexievich keeps breaking this common story into private memories that cannot replace one another. One mother’s grief cannot be offset by another’s, and one soldier’s fear does not vanish because of another victory. She does not refute war by proposing a new grand theory; she makes grand theory unable to go on fully explaining these people’s lives."
      ],
      [
        "当然，文学无法代替历史学回答战争的全部问题。苏联为什么入侵阿富汗，战争如何改变国际政治，具体的军事决策又如何造成灾难，都需要更广泛的史料与制度分析。阿列克谢耶维奇的作品不提供这样的全景，也不应该被要求提供。它的价值恰恰在于揭示历史全景所无法容纳的部分。历史学需要解释事件如何发生，见证文学则不断提醒我们：即使事件已经得到解释，人的痛苦也未必因此获得理解。",
        "Of course, literature cannot replace history in answering all the questions of war. Why the Soviet Union invaded Afghanistan, how the war changed international politics, and how specific military decisions led to disaster all require broader sources and institutional analysis. Alexievich’s work does not provide such a panorama and should not be asked to. Its value lies in revealing what the historical panorama cannot hold. History must explain how events happened, while testimonial literature keeps reminding us that even when events have been explained, human suffering is not thereby understood."
      ],
      [
        "读完这本书，我最难忘的不是某个关于战争的结论，而是那些始终无法被归纳为结论的声音。它们反复讲述同样的恐惧，记住一些旁人看来微不足道的细节，也在回忆中不断改变对自己的理解。阿列克谢耶维奇没有赋予它们一个整齐的结局，因为现实中的悲伤原本就不按照文学的节奏结束。战争可以结束，政权可以改变，历史评价也可以被推翻，但母亲失去的孩子仍然不会回来。那些曾经被赋予崇高意义的牺牲，一旦失去政治上的正当性，甚至可能使生者承受第二次伤害：他们不仅失去了亲人，还失去了曾经用来理解这种失去的理由。",
        "After finishing the book, what I remember most is not any conclusion about war but the voices that can never be summarized into a conclusion. They repeat the same fears, remember details that seem trivial to others, and keep changing how they understand themselves in recollection. Alexievich gives them no tidy ending, because real grief never ends at literature’s pace. A war can end, a regime can change, historical verdicts can be overturned, but the child a mother lost still does not return. Sacrifices once given a lofty meaning may, when they lose political legitimacy, even inflict a second wound on the living: they have lost not only their loved ones but the reasons they once used to understand that loss."
      ],
      [
        "**我们总希望历史能够给出一个完整的解释，仿佛只要理解了战争为什么发生，就能够理解战争中发生的一切。但阿列克谢耶维奇让我怀疑，某些经验之所以需要文学，并不是因为它们尚未得到解释，而是因为任何解释都无法穷尽它们。**",
        "**We always hope history will give a complete explanation, as if understanding why a war happened would let us understand everything that happened in it. But Alexievich makes me suspect that some experiences need literature not because they have not yet been explained, but because no explanation can exhaust them.**"
      ],
      [
        "也许这正是《锌皮娃娃兵》最深刻的文学成就。它没有为战争寻找一个更好的故事，而是让那些被战争破坏的人生，拒绝成为任何故事中可以轻易安放的一部分。历史总试图将无数人的命运整理成一条可以理解的道路，而阿列克谢耶维奇让我们听见，道路两旁那些永远无法被带走的声音。",
        "Perhaps this is the deepest literary achievement of *Zinky Boys*. It does not look for a better story of war but lets the lives war destroyed refuse to be easily placed in any story. History always tries to arrange countless fates into a road that can be understood, and Alexievich lets us hear the voices on either side of that road that can never be carried away."
      ]
    ]
  },
  {
    "date": "2018-10-12",
    "title": "Snow Falls on Varykino",
    "slug": "snow-falls-on-varykino",
    "category": "Novel",
    "book": {
      "cover": "doctor_zhivago.jpg",
      "title": "Doctor Zhivago",
      "author": "Boris Pasternak",
      "language": "English",
      "country": "Russia",
      "original": "Russian",
      "lines": [
        "Novel · Russian original, first published 1957",
        "A doctor and poet lives through the Russian Revolution and civil war, and his love for Lara in a snowbound house at Varykino."
      ]
    },
    "place": "于加州圣克拉拉\nSanta Clara, CA",
    "languages": ["Chinese", "English"],
    "prose": [
      [
        "瓦雷金诺的冬天，房屋被积雪包围，窗玻璃结着厚厚的冰霜。日瓦戈与拉拉暂时躲开了战争，在这座几乎与外界隔绝的房子里生活。白天，他们为取暖、食物和日常琐事忙碌；夜晚，日瓦戈重新开始写诗。屋外的俄国正在经历革命与内战，屋内却仍然有人读书、相爱，留意雪地里的光线。读《日瓦戈医生》，我最难忘的不是革命如何改变了俄国，而是帕斯捷尔纳克竟然愿意花费如此多的笔墨，描写那些在历史看来微不足道的时刻。",
        "In the winter at Varykino, the house is ringed by snow and the windowpanes are crusted with thick frost. Zhivago and Lara have escaped the war for a while and live in a house almost cut off from the world. By day they are busy with warmth, food and daily chores; by night Zhivago begins to write poems again. Outside, Russia is going through revolution and civil war, yet inside there are still people who read, love, and notice the light on the snow. What I remember most from *Doctor Zhivago* is not how the revolution changed Russia, but that Pasternak was willing to spend so many words on moments history considers insignificant."
      ],
      [
        "日瓦戈是一名医生，也是诗人。他能够理解革命最初的理想，却无法接受革命逐渐要求每个人以同一种语言思考和生活。在游击队中，他被迫随军行动，目睹暴力如何使原本具体的人变成敌我双方的符号。帕斯捷尔纳克没有让他成为一个勇敢的反抗者。他时常犹豫，缺乏行动能力，甚至无法保护自己珍视的人。这样的主人公很难令人崇拜，却也正因为他的不坚定，小说才避免成为另一种政治宣言。",
        "Zhivago is a doctor and also a poet. He can understand the original ideals of the revolution, but cannot accept that it gradually demands that everyone think and live in the same language. With the partisans he is forced to move with the army, watching how violence turns concrete individuals into symbols of friend and enemy. Pasternak does not make him a brave rebel. He often hesitates, lacks the capacity to act, and cannot even protect the people he treasures. Such a protagonist is hard to admire, but it is precisely because of his wavering that the novel avoids becoming another political manifesto."
      ],
      [
        "但我并不愿意把日瓦戈的遭遇简单理解为革命对个人自由的摧毁。旧俄国的贫困、土地分配不公、阶级特权与政治专制，同样构成了真实的暴力，只是这种暴力更为缓慢，也更容易被日常生活所掩盖。对于一个能够读诗、行医并拥有私人生活的知识分子而言，革命可能意味着秩序的崩溃；对于长期被排斥在这种生活之外的人而言，革命却可能意味着第一次有机会改变自己的命运。**我们不能因为革命最终背叛了自己的理想，就否认那些理想最初回应过的真实苦难。** 否则，对革命暴力的批判也可能不知不觉变成对旧秩序的怀念。",
        "But I am unwilling to read Zhivago’s fate simply as the revolution destroying individual freedom. The poverty of old Russia, the unjust distribution of land, class privilege and political autocracy were also real violence, only slower and easier for everyday life to conceal. For an intellectual who can read poetry, practice medicine and have a private life, revolution may mean the collapse of order; for those long excluded from such a life, it may mean the first chance to change their fate. **We cannot deny the real suffering that those ideals first answered just because the revolution ended up betraying them.** Otherwise, criticism of revolutionary violence may unwittingly turn into nostalgia for the old order."
      ],
      [
        "这种矛盾在斯特列利尼科夫身上尤其明显。拉拉的丈夫帕维尔·安季波夫，原本是一个有着私人情感与理想的人，后来却将自己改造成革命意志的执行者。他相信历史必须朝着某个方向前进，而个人的幸福可以为此牺牲。日瓦戈无法将自己变成历史的工具，斯特列利尼科夫却几乎不再允许自己成为一个普通人。我并不认为后者的悲剧证明革命信念本身必然错误。真正令人恐惧的，是当一个人确信自己代表历史的正确方向时，他便可能逐渐失去怀疑自身行为的能力。**革命原本试图使人摆脱被支配的命运，却可能在取得权力之后，要求人们以服从革命的方式证明自己获得了解放。**",
        "This contradiction is especially clear in Strelnikov. Lara’s husband, Pavel Antipov, was once a man with private feelings and ideals, but he remade himself into an executor of revolutionary will. He believes history must move in a certain direction and that individual happiness can be sacrificed for it. Zhivago cannot turn himself into an instrument of history, while Strelnikov almost no longer allows himself to be an ordinary person. I do not think the latter’s tragedy proves that revolutionary conviction is necessarily wrong. What is truly frightening is that once a person is sure he represents the right direction of history, he may gradually lose the ability to doubt his own actions. **The revolution set out to free people from being dominated, yet once in power it may demand that people prove they have been liberated by obeying it.**"
      ],
      [
        "但反过来说，日瓦戈的道德敏感也并非没有局限。他拒绝将个人生命化约为政治目的，却很少能够提出改变社会不公的实际办法。他对日常生活的珍视令人动容，但这种生活所需要的教育、闲暇与物质条件，并不是旧俄国所有人都能够享有的。一个人可以正当地反对革命暴力，却仍然需要回答：如果不通过革命，原有的压迫又应当如何结束？帕斯捷尔纳克让我们深切感受到革命摧毁了什么，却较少让那些原本没有什么可失去的人获得同等充分的表达。这既是小说的立场，也是它的局限。",
        "Conversely, Zhivago’s moral sensitivity is not without limits. He refuses to reduce individual life to political ends, yet rarely offers any practical way to change social injustice. His devotion to everyday life is moving, but the education, leisure and material conditions that such a life requires were not available to everyone in old Russia. A person may rightly oppose revolutionary violence and still must answer: if not through revolution, how was the existing oppression to end? Pasternak makes us feel deeply what the revolution destroyed, but gives less equally full expression to those who had little to lose in the first place. This is both the novel’s position and its limitation."
      ],
      [
        "我尤其喜欢帕斯捷尔纳克对自然的描写。雪、森林、春天的融水与窗边的光，并不只是人物命运的背景。革命者相信历史有明确的方向，人的生活必须服从未来的某种秩序；自然却依照自己的节奏生长、衰败与复苏。瓦雷金诺的雪不会因为革命胜利而停止落下，春天也不会因为某种政治理想而提前到来。帕斯捷尔纳克让两种时间在小说中并存：一种由历史事件构成，另一种则存在于季节、身体与日常感受之中。然而，自然的美也无法替代社会正义。一个人在雪景中获得的精神自由，并不能使另一个人的贫困因此变得可以接受。",
        "I especially love Pasternak’s descriptions of nature. Snow, forest, spring meltwater and the light at a window are not merely a backdrop to the characters’ fates. Revolutionaries believe history has a clear direction and that human life must obey some future order; nature grows, decays and revives at its own pace. The snow at Varykino does not stop falling because the revolution wins, and spring does not arrive early for any political ideal. Pasternak lets two kinds of time coexist in the novel: one made of historical events, the other found in seasons, bodies and everyday sensation. Yet the beauty of nature cannot replace social justice. The spiritual freedom one person finds in a snowscape cannot make another person’s poverty acceptable."
      ],
      [
        "拉拉与日瓦戈的爱情，恰恰发生在这两种时间的缝隙里。他们在瓦雷金诺获得了一段短暂的共同生活，但这份幸福从一开始就带着无法长久的预感。日瓦戈仍然牵挂妻子冬妮娅与孩子，拉拉也有自己的家庭和过去。帕斯捷尔纳克并没有真正解决这些感情之间的冲突。日瓦戈对拉拉的爱可以是真实的，对冬妮娅的亏欠也同样真实。一个人能够敏锐地感受生活的美，却未必因此拥有处理生活的勇气。小说的诗意在这里反而显出某种残酷：美并不能替人承担责任。",
        "The love between Lara and Zhivago happens precisely in the gap between these two times. They are given a brief life together at Varykino, but this happiness carries from the start a premonition that it cannot last. Zhivago still cares for his wife Tonya and their child, and Lara has her own family and past. Pasternak does not truly resolve the conflict among these feelings. Zhivago’s love for Lara can be real, and his debt to Tonya is just as real. A person can feel the beauty of life keenly without having the courage to manage it. The poetry of the novel here shows a certain cruelty: beauty cannot bear responsibility on anyone’s behalf."
      ],
      [
        "小说的叙事也有些奇特。人物在辽阔的俄国土地上反复偶遇，许多情节带着近乎不可信的巧合，人物有时会突然说出一大段关于历史与生命的议论。若以托尔斯泰式的现实主义衡量，这些安排未必严密。但帕斯捷尔纳克首先是一位诗人。他更在意意象之间的呼应，而不是事件之间无懈可击的因果关系。一盏灯、一场雪、一个在远处出现的人影，都可能在相隔许多章节之后重新获得意义。历史不断试图将人的命运组织成一条可以解释的道路，小说却让生活保持着偶然、散乱与不可预料。",
        "The narrative is also somewhat strange. Characters meet again and again by chance across the vast Russian land, many plot turns rely on almost unbelievable coincidence, and characters sometimes burst into long speeches about history and life. By the measure of Tolstoyan realism these arrangements are not tight. But Pasternak is first of all a poet. He cares more about the echoes among images than about airtight causality between events. A lamp, a snowfall, a figure appearing in the distance may regain meaning many chapters later. History keeps trying to organize human fates into a road that can be explained, while the novel keeps life accidental, scattered and unpredictable."
      ],
      [
        "我读这本书时，也常想到自己对于生活的安排。我们习惯于为未来制定计划，相信只要事业、家庭与物质条件逐渐稳定，就能够拥有更多自由。但瓦雷金诺的冬天让我想到，生活并不会等到一切安排妥当才开始。那些真正令人难忘的时刻，往往既不符合计划，也无法在日后重新补偿。它们可能只是一场雪、一顿晚餐，或某个突然意识到自己正在幸福的下午。然而，我也不愿将这种私人幸福浪漫化到足以否定社会变革的必要性。一个人有权珍惜自己的生活，另一个人同样有权要求改变使自己无法正常生活的制度。",
        "While reading, I often thought about how I arrange my own life. We are used to planning for the future, believing that once career, family and material conditions steadily settle we will have more freedom. But the winter at Varykino reminded me that life does not wait until everything is arranged before it begins. The truly memorable moments often fit no plan and cannot be made up for later. They may be only a snowfall, a dinner, or an afternoon when one suddenly realizes one is happy. Yet I am also unwilling to romanticize private happiness to the point of denying the need for social change. One person has the right to treasure their life, and another has the same right to demand a change to the system that keeps them from living normally."
      ],
      [
        "也许革命最难解决的矛盾正在这里。没有对现存秩序的否定，许多不公便可能永远延续；但当否定成为革命的全部语言，革命又可能失去对具体生命的尊重。我们不能要求所有受压迫者无限等待温和的改革，也不能因为某种未来的正义值得追求，就允许现在的人被无限牺牲。**革命的正当性既不能仅凭它反对了什么来证明，也不能仅凭它最终建立了什么来衡量；它还必须接受那些在革命过程中被伤害的人所提出的质问。**",
        "Perhaps this is the hardest contradiction of revolution. Without negating the existing order, much injustice may continue forever; but when negation becomes the whole language of revolution, it may lose respect for concrete lives. We cannot ask all the oppressed to wait endlessly for gentle reform, nor allow people in the present to be sacrificed without limit because some future justice is worth pursuing. **The legitimacy of a revolution can be proved neither by what it opposed nor measured only by what it finally built; it must also accept the questioning of those who were harmed along the way.**"
      ],
      [
        "小说结尾附有日瓦戈的诗篇。这些诗无法挽回他的爱情，无法改变他逐渐衰败的命运，也无法为历史提供另一种结局。但它们让人重新想起那个曾经站在窗前、看见雪光的人。日瓦戈没有成为革命的英雄，也没有成为自己生活的主人。他留下的只是一些诗，以及那些被诗保存下来的感受。",
        "The novel ends with Zhivago’s poems appended. They cannot win back his love, change his slow decline, or offer history another ending. But they make us remember the man who once stood at the window and saw the light on the snow. Zhivago did not become a hero of the revolution, nor the master of his own life. All he left were some poems, and the feelings the poems preserved."
      ],
      [
        "合上书后，我想到的仍然是瓦雷金诺那座被雪覆盖的房子。它没有真正保护过任何人，甚至连短暂的幸福也终究消失了。但我也知道，屋外那些渴望改变命运的人，并不比屋内的人更不值得被理解。**一场革命既应当被追问它为什么必须发生，也应当被追问它为什么让某些人无法继续生活。** 帕斯捷尔纳克最动人的地方，是他让我们看见历史理想无法替代的私人生命；而阅读这部小说时，我希望自己仍能记得，那些要求改变历史的人，也同样拥有具体而不可替代的人生。",
        "After closing the book, what I still think of is the snow-covered house at Varykino. It never truly protected anyone, and even its brief happiness finally vanished. But I also know that the people outside who longed to change their fate are no less deserving of understanding than those inside. **A revolution should be asked why it had to happen, and also why it left some people unable to go on living.** What moves me most in Pasternak is that he lets us see private lives that historical ideals cannot replace; and in reading this novel I hope to remember that those who demand a change in history also have concrete, irreplaceable lives."
      ]
    ]
  }
];
