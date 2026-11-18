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
    "date": "2024-12-31",
    "title": "Why Is Letting Go Harder Than Taking Control?",
    "slug": "why-letting-go-is-harder",
    "category": "Self-help",
    "book": {
      "cover": "let_them_theory.jpg",
      "title": "The Let Them Theory",
      "author": "Mel Robbins",
      "language": "English",
      "country": "United States",
      "original": "English",
      "lines": [
        "Self-help · English original",
        "A simple principle for letting other people be, and putting your energy back into what you can decide."
      ]
    },
    "languages": ["Chinese", "English"],
    "prose": [
      ["我发现自己越来越难以忍受事情不按照预期发展。",
       "I find it harder and harder to bear things not going as expected."],
      ["并不是什么严重的错误。有时候只是同事没有及时回复消息，某项任务的进度比计划慢了一点，或者一个原本简单的问题，被处理得不必要地复杂。我知道这些事情大多无关紧要，也知道不应该事事干预，但还是忍不住追问、提醒，甚至亲自接手。",
       "They are not serious mistakes. Sometimes a colleague has not replied to a message in time, a task is running a little behind schedule, or a simple problem has been handled in an unnecessarily complicated way. I know most of these things do not matter and that I should not interfere in everything, yet I cannot help asking, reminding, even taking over myself."],
      ["我并不认为自己是一个喜欢控制别人的人。恰恰相反，我一直相信应该尊重他人的独立判断，也愿意给予团队成员充分的自主权。",
       "I do not think of myself as someone who likes to control others. On the contrary, I have always believed in respecting other people’s independent judgment, and I am willing to give team members full autonomy."],
      ["可一旦真正需要放手，我又会感到不安。",
       "But when I really have to let go, I feel uneasy."],
      ["Mel Robbins 的 *The Let Them Theory* 恰好触及了这种矛盾。",
       "Mel Robbins’s *The Let Them Theory* happens to touch exactly this contradiction."],
      ["她提出的原则看似简单：别人有自己的选择、情绪和行为方式，不必事事试图改变他们。与其把精力消耗在无法控制的人和事上，不如重新关注自己能够决定的部分。",
       "The principle she proposes looks simple: other people have their own choices, emotions and ways of behaving, and there is no need to try to change them in everything. Rather than spend energy on people and things we cannot control, we should turn our attention back to the part we can decide."],
      ["这并不是什么新颖的哲学。斯多葛学派早已区分过能够由自己决定的事情与无法决定的事情，现代心理学也反复讨论控制感与焦虑之间的关系。Robbins 的贡献更多在于把这些复杂的问题压缩成一个日常生活中可以反复使用的提醒：Let them.",
       "This is not a novel philosophy. The Stoics long ago distinguished what is up to us from what is not, and modern psychology repeatedly discusses the relation between a sense of control and anxiety. Robbins’s contribution lies more in compressing these complex questions into a reminder that can be used again and again in daily life: Let them."],
      ["但我对这个建议始终有一种本能的抵触。",
       "But I have always felt an instinctive resistance to this advice."],
      ["因为在管理工作中，放手并不总是一种美德。",
       "Because in management, letting go is not always a virtue."],
      ["当一个项目出现延误，最终需要解释结果的是管理者；当团队成员的判断造成损失，承担责任的也未必只有做出决定的人。管理意味着授权，却同样意味着协调、监督与纠偏。如果所有事情都可以用一句 Let them 来回应，那么管理本身似乎也失去了存在的必要。",
       "When a project is delayed, it is the manager who must explain the result in the end; when a team member’s judgment causes a loss, the one who bears responsibility is not necessarily only the person who made the decision. Management means delegating, but it also means coordinating, supervising and correcting. If everything can be answered with a “Let them,” then management itself seems to lose its reason to exist."],
      ["然而，仔细想来，这种反驳可能只是我为自己寻找的借口。",
       "Yet on reflection, this objection may be only an excuse I am finding for myself."],
      ["我真正害怕的，未必是别人犯错，而是事情脱离我的掌握以后，我将不得不接受一个并非由自己决定的结果。",
       "What I truly fear is not necessarily that others will make mistakes, but that once things slip out of my grasp I will have to accept an outcome I did not decide."],
      ["这种恐惧很容易伪装成责任心。",
       "This fear easily disguises itself as a sense of responsibility."],
      ["我可以把反复检查称为严谨，把不断追问称为及时沟通，把亲自接手称为保证质量。每一种行为都有合理的解释，甚至可能在短期内提高效率。但当这些行为成为习惯，我也逐渐把自己变成了整个工作流程中最难以替代、同时最难以休息的一个环节。",
       "I can call repeated checking rigor, constant questioning timely communication, and taking over myself quality assurance. Every behavior has a reasonable explanation and may even raise efficiency in the short term. But once these behaviors become habits, I have gradually turned myself into the link in the whole workflow that is the hardest to replace and the hardest to rest."],
      ["更讽刺的是，我所管理的秩序越稳定，自己反而越不自由。",
       "More ironic still, the more stable the order I manage, the less free I am."],
      ["眼下的工作并不糟糕。收入不错，受到尊重，工作表现也得到了认可。从外部标准看，我几乎没有充分的理由抱怨。",
       "My present work is not bad. The pay is good, I am respected, and my performance is recognized. By external standards I have almost no good reason to complain."],
      ["但日复一日地处理相似的问题、协调相似的流程、解决相似的意外，已经开始让我产生一种难以解释的疲惫。",
       "But handling similar problems day after day, coordinating similar processes and resolving similar mishaps has begun to give me a weariness that is hard to explain."],
      ["最初，这些工作需要判断力和创造性；如今，许多事情似乎只是重复过去已经证明有效的方法。我的经验让我越来越擅长处理它们，却也让我越来越难从中获得满足。",
       "At first this work called for judgment and creativity; now much of it seems only to repeat methods already proven to work. My experience makes me better and better at handling it, and also makes it harder and harder to find satisfaction in it."],
      ["我不禁怀疑，自己如此执着于控制细节，是否正因为已经很难从工作的整体方向中找到真正的兴奋感。",
       "I cannot help wondering whether I cling so hard to controlling details precisely because it has become difficult to find real excitement in the overall direction of the work."],
      ["当一个人无法改变自己每天在做什么，至少还可以努力决定每一件事应该怎样完成。",
       "When a person cannot change what he does every day, he can at least try to decide how each thing should be done."],
      ["控制于是成了一种补偿。",
       "Control thus becomes a kind of compensation."],
      ["这也是我认为 Robbins 的理论最值得进一步追问的地方。她把问题主要放在个人如何回应外部世界，却较少触及那些使人不得不持续保持控制的组织结构。一个人当然可以改变自己的心理边界，但如果工作机制始终要求他对所有结果负责，却没有赋予团队相应的自主权，那么单纯改变心态并不足以解决问题。",
       "This is also where I think Robbins’s theory most deserves further questioning. She puts the problem mainly in how an individual responds to the outside world, and touches less on the organizational structures that force a person to keep control. A person can of course change his psychological boundaries, but if the work system keeps requiring him to answer for all results without giving the team corresponding autonomy, changing one’s mindset alone is not enough."],
      ["不过，我也不能因此把所有责任推给制度。",
       "Still, I cannot therefore push all the responsibility onto the system."],
      ["有些时候，真正不愿意授权的人就是我自己。我希望别人能够独立完成工作，却又期待他们按照我的方式思考；我鼓励团队提出不同意见，却会因为他们选择了另一条路径而焦虑。",
       "Sometimes the one truly unwilling to delegate is myself. I want others to be able to do the work independently, yet expect them to think my way; I encourage the team to offer different views, yet grow anxious when they choose another path."],
      ["我所追求的，或许并不是真正的自主，而是一种不需要我亲自参与、却仍然完全符合我预期的执行。",
       "What I am after may not be true autonomy but an execution that does not need my involvement and yet fully meets my expectations."],
      ["这显然是一种矛盾的管理理想。",
       "This is plainly a contradictory ideal of management."],
      ["更深一层的问题是，我究竟为什么如此需要事情井然有序？",
       "A deeper question is why I need things to be in such good order."],
      ["也许因为秩序能够带来一种确定感。只要工作按计划推进，问题得到解决，团队保持运转，我便能够确认自己仍然是一个称职的管理者。",
       "Perhaps because order brings a sense of certainty. So long as the work goes as planned, problems get solved and the team keeps running, I can confirm that I am still a competent manager."],
      ["但如果一个人的自我价值必须依靠不断解决问题来维持，他就很难真正允许问题在没有自己参与的情况下得到解决。",
       "But if a person’s self-worth has to be sustained by constantly solving problems, it is hard for him to truly allow a problem to be solved without his involvement."],
      ["我开始意识到，管理上的控制欲与其说是权力欲望，不如说是一种对自身价值的不安全感。",
       "I am beginning to realize that the urge to control in management is less a desire for power than an insecurity about one’s own worth."],
      ["Robbins 的 Let Them 因而不应该被理解为对他人的放任。它真正困难的部分，是承认别人有权以不同于我的方式完成事情，有权犯一些我原本能够避免的错误，也有权不把我的期待当作他们行动的唯一标准。",
       "Robbins’s Let Them should therefore not be understood as laissez-faire toward others. Its truly difficult part is to admit that others have the right to do things differently from me, the right to make some mistakes I could have avoided, and the right not to treat my expectations as the only standard for their actions."],
      ["当然，这种自由必须有边界。管理者仍然需要明确目标、责任和不可妥协的要求。但在这些边界之内，我是否能够容忍一个不够完美、却不需要我时时干预的过程？",
       "Of course, this freedom must have limits. A manager still needs to set clear goals, responsibilities and non-negotiable requirements. But within those limits, can I tolerate a process that is not perfect yet does not need my constant intervention?"],
      ["这比读完一本自助书困难得多。",
       "This is much harder than finishing a self-help book."],
      ["因为它要求我放弃的不只是某些管理习惯，还有一种长期以来赖以确认自身能力的方式。",
       "Because what it asks me to give up is not only certain management habits but also a way I have long relied on to confirm my own ability."],
      ["我现在越来越怀疑，自己真正不满意的并不是薪水、职位或者别人如何评价我的工作，而是每天投入如此多的时间和精力，却很少有机会做那些真正让我感到好奇的事情。",
       "I now increasingly suspect that what I am truly dissatisfied with is not my salary, my position or how others judge my work, but that I put so much time and energy into it every day and rarely get the chance to do what truly makes me curious."],
      ["我已经能够胜任眼前的生活，却不确定自己是否仍然喜欢它。",
       "I can already handle the life in front of me, but I am not sure I still like it."],
      ["**也许我最应该学会的 Let Them，并不是允许别人按照自己的方式生活，而是允许这个世界在不需要我时时维持秩序的情况下，依然正常运转。**",
       "**Perhaps the Let Them I most need to learn is not to allow others to live in their own way, but to allow the world to keep running normally without my constantly maintaining its order.**"],
      ["至于腾出来的时间和精力，我还不知道应该用来做什么。",
       "As for the time and energy that would be freed, I do not yet know what to use them for."],
      ["但我至少希望，它们不再只是为了让我有能力承担更多同样的工作。",
       "But at least I hope they will no longer serve only to let me take on more of the same work."]
    ]
  },
  {
    "date": "2026-06-28",
    "title": "The Land Remembers Everyone’s Name",
    "slug": "the-land-remembers",
    "category": "Novel",
    "book": {
      "cover": "mountains_sing.jpg",
      "title": "The Mountains Sing",
      "author": "Nguyễn Phan Quế Mai",
      "language": "English",
      "country": "United States",
      "original": "English",
      "lines": [
        "Novel · English original, first published 2020",
        "A grandmother tells her granddaughter the story of the family, through famine, land reform and the American bombing of Hanoi."
      ]
    },
    "place": "于加州帕洛阿尔托\nPalo Alto, CA",
    "languages": ["Chinese", "English"],
    "prose": [
      ["土地是会记得人的。",
       "The land remembers people."],
      ["它记得谁曾在雨季播下稻种，谁把收获的稻谷搬进仓房，谁在屋前栽下果树，又是谁在某个清晨仓皇离开，再也没有回来。在Nguyễn Phan Quế Mai的《The Mountains Sing》中，祖母陈妙兰曾经拥有这样的生活。她出生于二十世纪初的越南北部，经历过法国殖民统治、日本占领与饥荒，终于在故乡建立起自己的家庭。可是到了1950年代，土地改革改变了一切。原本意味着安稳与传承的土地，突然成了阶级罪证；曾经熟悉的乡邻，也可能成为公开指控她的人。",
       "It remembers who sowed rice in the rainy season, who carried the harvested grain into the storehouse, who planted fruit trees before the house, and who left in panic one morning and never came back. In Nguyễn Phan Quế Mai’s *The Mountains Sing*, the grandmother Trần Diệu Lan once had such a life. Born in northern Vietnam in the early twentieth century, she lived through French colonial rule, Japanese occupation and famine, and finally built a family in her home village. But in the 1950s land reform changed everything. Land that had meant security and inheritance suddenly became proof of a class crime; neighbors she knew well might become the ones to accuse her in public."],
      ["小说写到土地改革时，我尤其在意妙兰被迫离开家园的经历。她的丈夫已经在此前的动荡中失去生命，而她必须独自保护孩子。她不能把土地、房屋和过去的生活一并带走，只能在逃亡中不断作出选择。阮潘桂梅没有把这种生存写成壮烈的英雄主义。对于妙兰而言，历史不是一场关于阶级与革命的辩论，而是一个母亲必须想办法让孩子活到明天的现实。她曾经拥有的一切，都不足以保证家人的安全。",
       "When the novel reaches land reform, I care especially about Diệu Lan’s forced departure from her home. Her husband has already lost his life in earlier upheavals, and she must protect her children alone. She cannot take the land, the house and her former life with her, and in flight can only keep making choices. Nguyễn Phan Quế Mai does not write this survival as grand heroism. For Diệu Lan, history is not a debate about class and revolution but the reality of a mother having to find a way for her children to live until tomorrow. Nothing she once owned is enough to guarantee her family’s safety."],
      ["最令人不安的是，土地改革并非发生在陌生人之间。乡村里的每个人都知道别人家有多少田地，谁曾借出粮食，谁与谁有过旧怨。革命的语言进入村庄之后，这些私人记忆突然获得了新的用途。过去的富裕可以被解释为剥削，过去的恩惠也可能成为需要清算的阶级关系。小说让我想到，政治运动最深刻的改变，未必是重新分配了多少土地，而是改变了人们理解彼此的方式。一个人昨天还是邻居，今天却可能只剩下一个阶级名称。",
       "Most unsettling is that land reform does not take place among strangers. Everyone in a village knows how much land another family has, who once lent grain, who has an old grudge against whom. Once the language of revolution enters the village, these private memories suddenly acquire a new use. Past wealth can be explained as exploitation, and past kindness can become a class relation to be settled. The novel made me think that the deepest change a political movement makes is not how much land it redistributes but how it changes the way people understand one another. A person who was a neighbor yesterday may today be left with only a class label."],
      ["但阮潘桂梅并没有把越南的历史写成一场孤立的土地改革。妙兰的生命早已被更早的灾难改变。1945年的越南大饥荒夺走了大量生命，法国殖民统治与日本战时占领留下的社会创伤，也没有随着战争结束而立即消失。饥荒、革命与土地改革在她的一生中接连出现，仿佛每当一个时代宣告结束，另一个时代便迫不及待地要求普通人再次付出代价。妙兰并不知道后来的历史学家将如何解释这些事件，她只知道家里少了哪些人，饭桌旁空出了哪些位置。",
       "But Nguyễn Phan Quế Mai does not write Vietnam’s history as an isolated land reform. Diệu Lan’s life has already been changed by earlier disasters. The Vietnamese famine of 1945 took many lives, and the social wounds left by French colonial rule and the wartime Japanese occupation did not vanish as soon as the war ended. Famine, revolution and land reform follow one another in her life, as if every time one era declares itself over, another is impatient to ask ordinary people to pay again. Diệu Lan does not know how later historians will explain these events; she knows only who is missing from the family and which places at the table are empty."],
      ["小说另一条时间线属于孙女香。1972年，河内遭到美军猛烈轰炸，香与祖母不得不面对空袭的威胁。香的父母和叔伯姑姑们被战争分散在不同地方，家中不断传来关于前线的消息，却很难得到确切的答案。对一个孩子而言，战争并不首先意味着战略、阵营或胜负，而是大人突然变得沉默，是有人离开后迟迟不归，是防空警报响起时必须放下手边的一切。",
       "The novel’s other timeline belongs to the granddaughter Hương. In 1972 Hanoi is heavily bombed by the US, and Hương and her grandmother must face the threat of air raids. Hương’s parents, uncles and aunts are scattered in different places by the war, and news of the front keeps coming home, yet definite answers are hard to get. For a child, war does not mean strategy, camps or who wins first of all; it means adults suddenly going silent, someone leaving and not returning for a long time, having to drop everything when the air-raid siren sounds."],
      ["我尤其喜欢小说让祖母在这样的年代向孙女讲述往事。她讲起自己年轻时的家庭，讲起土地、婚姻、孩子，以及那些香从未见过的亲人。两代人的时间因此在同一间屋子里交错：屋外是1970年代的战争，祖母的故事却把香带回1930年代、1945年的饥荒与1950年代的土地改革。香逐渐发现，自己所经历的战争并不是家族苦难的开端。那些早已离开的亲人，也曾拥有与她一样具体的童年、愿望和恐惧。",
       "I especially like that the novel has the grandmother tell her past to her granddaughter in such an era. She speaks of the family of her youth, of land, marriage, children, and the relatives Hương has never met. The time of two generations thus intersects in one room: outside is the war of the 1970s, while the grandmother’s stories take Hương back to the 1930s, the famine of 1945 and the land reform of the 1950s. Hương gradually finds that the war she is living through is not the beginning of the family’s suffering. The relatives long gone also had childhoods, wishes and fears as concrete as hers."],
      ["小说中，妙兰的子女在战争结束后仍然背负着各自的伤痕。有人从战场归来，却无法真正回到战前的生活；有人经历身体与精神上的创伤，有人的家庭关系被政治分裂与长期离散改变。尤其是战争遗留的化学污染及其对后代的伤害，使所谓和平显得格外复杂。国家可以宣布战争结束，一个家庭却无法因此让受伤的身体恢复如初。历史的结束日期，往往不是个人痛苦的结束日期。",
       "In the novel, Diệu Lan’s children still carry their own scars after the war ends. Some return from the battlefield yet cannot truly return to their prewar lives; some suffer physical and psychological trauma; some have family relations changed by political division and long separation. The chemical contamination left by the war and the harm it does to later generations, especially, make so-called peace unusually complicated. A state can announce that the war is over, but a family cannot thereby make injured bodies whole again. The date history ends is often not the date personal pain ends."],
      ["阮潘桂梅还写出了一个在许多英语越战叙事中被忽略的事实：越南战争首先是越南人的生活，而不只是美国人的创伤。在美国小说与电影里，越南常常成为年轻士兵失去纯真、美国社会质疑自身道德的地方。越南人则容易退居背景，成为战场上的陌生面孔。《The Mountains Sing》改变了这种视角。河内的街道、乡村的稻田、祖母的记忆与孙女的成长，终于不必通过美国人的悔恨才能获得意义。",
       "Nguyễn Phan Quế Mai also writes a fact overlooked in many English-language narratives of the Vietnam War: the Vietnam War was first of all the lives of Vietnamese people, not only an American trauma. In American novels and films, Vietnam is often where young soldiers lose their innocence and American society questions its own morality. The Vietnamese easily recede into the background, strange faces on the battlefield. *The Mountains Sing* changes this viewpoint. The streets of Hanoi, the rice fields of the countryside, the grandmother’s memory and the granddaughter’s growing up can at last gain meaning without needing American remorse."],
      ["然而，小说也没有把所有伤害归咎于外来的军队。土地改革中的迫害、越南人之间的政治分裂，以及战争结束后仍然难以弥合的家庭裂痕，都使这部作品避免了过于整齐的民族苦难叙事。它既写外部侵略，也写内部伤害；既写革命所许诺的正义，也写普通人在革命中付出的代价。我认为，这比简单地把历史划分为受害者与加害者更加接近小说的复杂性。",
       "Yet the novel does not blame all harm on foreign armies. The persecution in land reform, the political divisions among Vietnamese, and the family rifts still hard to close after the war keep the work from an overly tidy narrative of national suffering. It writes both external aggression and internal harm; both the justice the revolution promised and the price ordinary people paid in it. I think this is closer to the complexity of the novel than a simple division of history into victims and perpetrators."],
      ["我对作品的保留，则在于阮潘桂梅有时过于希望让破碎的家庭重新团聚。她让一代人的秘密通过下一代人的倾听逐渐得到理解，也让宽恕成为修复创伤的重要力量。这当然动人，但我仍然怀疑，有些伤害是否真的能够通过讲述得到和解。妙兰失去的亲人不会因为真相被说出而复活，那些被战争改变的人生，也不可能重新回到原来的道路。",
       "My reservation about the work is that Nguyễn Phan Quế Mai sometimes wants too much to reunite a broken family. She lets one generation’s secrets be gradually understood through the next generation’s listening, and makes forgiveness an important force in healing trauma. This is of course moving, but I still doubt whether some harms can really be reconciled through telling. The relatives Diệu Lan lost will not come back to life because the truth is spoken, and lives changed by war cannot return to their original paths."],
      ["不过，祖母讲故事或许原本就不是为了修复一切。",
       "Still, perhaps the grandmother tells stories not to repair everything in the first place."],
      ["她只是要让香知道，在那些被历史称为地主、革命者、士兵或牺牲者的人当中，有人曾经喜欢唱歌，有人曾经盼望丰收，有人曾经在离家之前答应很快回来。他们并不是为了成为历史的一部分而出生，也没有人能够预先知道，自己的一生将被后人归入哪一场战争、哪一次改革。",
       "She only wants Hương to know that among those history calls landlords, revolutionaries, soldiers or martyrs, some once liked to sing, some once hoped for a good harvest, some once promised, before leaving home, to return soon. They were not born to become part of history, and no one can know beforehand which war or which reform later generations will file their life under."],
      ["我想象多年以后，香重新走过祖母曾经生活的村庄。房屋也许早已改建，田地换了主人，旧日的道路被新的道路覆盖。她未必还能找到祖母记忆中的每一棵树，却知道那些地方曾经发生过什么，知道哪些人曾经在那里生活。",
       "I imagine Hương years later walking again through the village where her grandmother lived. The houses may have long been rebuilt, the fields changed owners, the old roads covered by new ones. She may not find every tree in her grandmother’s memory, but she knows what happened in those places and who once lived there."],
      ["**历史记得1945年的饥荒、1950年代的土地改革和1972年河内的轰炸。祖母记得的，却是灾难到来之前，家里每个人原本打算怎样度过自己的一生。**",
       "**History remembers the famine of 1945, the land reform of the 1950s and the bombing of Hanoi in 1972. What the grandmother remembers is how each person in the family had planned to spend their life before the disasters came.**"]
    ]
  },
  {
    "date": "2025-11-25",
    "title": "When Everyone Chases Gold, Who Can Own Their Fate?",
    "slug": "who-owns-their-fate",
    "category": "Novel",
    "book": {
      "cover": "the_luminaries.jpg",
      "title": "The Luminaries",
      "author": "Eleanor Catton",
      "language": "English",
      "country": "New Zealand",
      "original": "English",
      "lines": [
        "Novel · English original, first published 2013",
        "In the New Zealand gold-rush town of Hokitika in 1866, a newcomer’s arrival unravels a web of disappearance, death, gold and identity, built on an astrological plan."
      ]
    },
    "place": "于加州利弗莫尔\nLivermore, CA",
    "languages": ["Chinese", "English"],
    "prose": [
      ["1866年的新西兰淘金小镇霍基蒂卡，一个陌生人的到来，牵出一连串关于失踪、死亡、黄金与身份的谜团。", "In 1866, in the New Zealand gold-rush town of Hokitika, the arrival of a stranger draws out a series of mysteries about disappearance, death, gold and identity."],
      ["卡顿借用了十九世纪维多利亚小说的叙事方式，却又设计了一套极为精密的占星结构：人物与黄道十二宫及行星相对应，小说的十二个部分逐渐缩短，仿佛月亮由盈转亏。", "Catton borrows the narrative manner of the nineteenth-century Victorian novel, yet devises an extremely intricate astrological structure: the characters correspond to the zodiac signs and planets, and the novel’s twelve parts grow shorter and shorter, as if the moon were passing from full to wane."],
      ["但我认为《发光体》最值得讨论的，不是它的结构究竟有多么精巧，而是这种结构与小说所描写的资本主义世界之间的关系。", "But what I think is most worth discussing about *The Luminaries* is not how ingenious its structure is, but the relationship between that structure and the capitalist world the novel describes."],
      ["淘金热本质上是一场关于偶然性的集体赌博。人们远渡重洋，离开熟悉的社会关系，把未来寄托在尚未发现的财富上。每个人都相信自己可能成为幸运者，却没有人能够真正控制财富出现的位置。", "The gold rush is at bottom a collective gamble on chance. People cross oceans, leave familiar social ties, and stake their futures on wealth not yet found. Each believes he may be the lucky one, yet no one can truly control where the wealth will appear."],
      ["在这样一个世界里，占星术显得格外耐人寻味。它试图为混乱的人生提供秩序，为偶然事件建立联系，为无法解释的命运寻找一种隐藏的结构。", "In such a world astrology is especially intriguing. It tries to give order to a chaotic life, to connect chance events, and to find a hidden structure for an inexplicable fate."],
      ["我读这部小说时，常常想到现代金融市场。我们不再通过星象预测黄金的位置，却建立了无数模型，试图从价格、周期、风险和历史数据中寻找未来的规律。", "Reading the novel, I often thought of modern financial markets. We no longer predict where the gold lies by the stars, but we have built countless models that try to find the patterns of the future in prices, cycles, risk and historical data."],
      ["我自己也长期进行跨国股票与房地产投资，因此对这种冲动并不陌生。投资者希望相信自己的收益来自判断，而不仅仅是运气；希望相信市场虽然复杂，却仍然存在可以被识别的秩序。", "I have invested in stocks and real estate across countries for a long time, so the impulse is familiar to me. Investors want to believe their returns come from judgment, not merely luck; they want to believe that however complex the market, an order that can be recognized still exists."],
      ["卡顿的小说却不断提醒我们，个人的命运始终与他人的行为、信息的不对称以及无法预料的事件纠缠在一起。", "Catton’s novel keeps reminding us that an individual’s fate is always entangled with the actions of others, asymmetries of information and unforeseeable events."],
      ["不过，这种高度精密的形式也带来一个值得质疑的问题：当小说的结构过于完美，人物是否反而失去了某种自由？他们究竟是在生活，还是在执行作者预先安排好的星象轨迹？", "Still, this highly intricate form raises a question worth asking: when a novel’s structure is too perfect, do the characters lose a certain freedom? Are they living, or carrying out astrological paths the author has laid down in advance?"],
      ["我欣赏卡顿的文学野心，也对这种近乎数学化的叙事保持一点怀疑。", "I admire Catton’s literary ambition, and keep a little doubt about this almost mathematical narrative."],
      ["毕竟，文学最令人着迷的地方，也许不是证明世界存在某种隐秘秩序，而是让我们看到，即使掌握了全部规则，我们仍然无法彻底理解一个人的命运。", "After all, what is most fascinating about literature may not be proving that the world has some hidden order, but showing us that even when we hold all the rules, we still cannot fully understand a person’s fate."]
    ]
  },
  {
    "date": "2015-10-11",
    "title": "An Autobiography Without a Straight Road",
    "slug": "an-autobiography-without-a-straight-road",
    "category": "Novel in verse",
    "book": {
      "cover": "autobiography_of_red.jpg",
      "title": "빨강의 자서전 (Autobiography of Red)",
      "author": "앤 카슨 Anne Carson",
      "language": "Korean",
      "country": "Canada",
      "original": "English",
      "lines": [
        "Novel in verse · Korean translation of Autobiography of Red, first published 1998",
        "Geryon, the red winged monster of Greek myth, grows up, falls in love with Herakles and learns photography."
      ]
    },
    "place": "于华盛顿州西雅图\nSeattle, WA",
    "languages": ["Chinese", "English"],
    "prose": [
      ["一、关于一种不可能的文体",
       "I. On an Impossible Form",
       "h"],
      ["安妮·卡森把这本书称为：一部诗体小说。",
       "Anne Carson calls this book: a novel in verse."],
      ["我起初以为这只是一个文学分类。读完才发现，她似乎根本不打算遵守任何分类。",
       "At first I thought this was just a literary category. Only after finishing did I see that she does not seem to intend to obey any category at all."],
      ["一本自传，却写着一个希腊神话中的红色怪物。一部小说，却由短诗组成。一个古老的故事，却有摄影机、汽车、飞机与现代城市。一个本该被赫拉克勒斯杀死的怪物，竟然活了下来，长大，恋爱，失恋，学习摄影。",
       "An autobiography, yet it tells of a red monster from Greek myth. A novel, yet made of short poems. An ancient story, yet with cameras, cars, airplanes and modern cities. A monster who should have been killed by Herakles lives on instead, grows up, falls in love, is heartbroken, and learns photography."],
      ["卡森并没有解释这些事情为什么能够同时存在。她只是把它们放在一起。仿佛文学原本就不需要向时间、体裁和现实申请许可。",
       "Carson does not explain why these things can exist together. She simply puts them side by side. As if literature never needed to ask permission from time, genre or reality."],
      ["二、红色",
       "II. Red",
       "h"],
      ["革律翁出生时就是红色的。他有翅膀。他是怪物。",
       "Geryon is red from birth. He has wings. He is a monster."],
      ["但卡森没有急于告诉我们，一个怪物应该怎样生活。她让他像普通孩子一样长大，经历家庭中的伤害，感受孤独，尝试用文字记录自己。",
       "But Carson is in no hurry to tell us how a monster should live. She lets him grow up like an ordinary child, go through hurt within a family, feel loneliness, and try to record himself in words."],
      ["他很早就开始写自传。这件事让我觉得奇妙。一个尚未真正开始生活的孩子，已经试图为自己留下记录。",
       "He begins writing an autobiography very early. This strikes me as wonderful: a child who has not yet really begun to live is already trying to leave a record of himself."],
      ["但他的自传并不完全由句子构成。有时候是物品。有时候是照片。有时候只是一种颜色。",
       "But his autobiography is not made entirely of sentences. Sometimes it is objects. Sometimes photographs. Sometimes only a color."],
      ["我想到，我们平时所谓的自我叙述，其实也未必那么连贯。一个人记得童年，往往不是因为能够准确复述当时发生了什么。而是因为某种光线。一间房间。一件已经不在身边的东西。",
       "I thought: what we ordinarily call self-narration may not be so coherent either. A person remembers childhood often not because he can accurately retell what happened, but because of a certain light. A room. A thing no longer with him."],
      ["卡森把这些无法组成完整故事的碎片，直接写成了文学。",
       "Carson writes these fragments, which cannot form a complete story, directly into literature."],
      ["三、赫拉克勒斯",
       "III. Herakles",
       "h"],
      ["在希腊神话中，赫拉克勒斯杀死革律翁，夺走他的牛群。故事很简单。英雄完成任务。怪物被消灭。",
       "In Greek myth, Herakles kills Geryon and takes his cattle. The story is simple. The hero completes his task. The monster is destroyed."],
      ["但卡森改变了故事中最重要的一件事：她让怪物拥有了自己的视角。",
       "But Carson changes the most important thing in the story: she gives the monster a viewpoint of his own."],
      ["赫拉克勒斯不再只是英雄，而是一个令革律翁着迷、又使他受伤的年轻男人。他们相遇。他们相爱。他们分开。革律翁继续生活。",
       "Herakles is no longer only a hero but a young man who fascinates Geryon and also hurts him. They meet. They love. They part. Geryon goes on living."],
      ["我很喜欢卡森对古典神话的这种处理。她没有简单地替怪物平反，也没有把英雄改写成恶人。她只是让一个原本只能作为别人故事中障碍的角色，拥有了自己的时间。",
       "I like very much this way Carson treats classical myth. She does not simply rehabilitate the monster, nor rewrite the hero as a villain. She merely lets a character who could only be an obstacle in someone else’s story have a time of his own."],
      ["在英雄史诗里，革律翁存在的意义，是被赫拉克勒斯杀死。在卡森的小说里，赫拉克勒斯只是革律翁漫长生命中的一个人。",
       "In the heroic epic, Geryon exists to be killed by Herakles. In Carson’s novel, Herakles is only one person in Geryon’s long life."],
      ["故事的重心改变了。连神话中的死亡，也不再拥有最后的解释权。",
       "The center of gravity of the story shifts. Even death in the myth no longer has the last word of interpretation."],
      ["四、照片",
       "IV. Photographs",
       "h"],
      ["革律翁喜欢摄影。这大概是我最喜欢的设定。一个红色的、有翅膀的怪物，试图通过摄影理解世界。",
       "Geryon likes photography. This is perhaps my favorite part of the setup: a red, winged monster trying to understand the world through photography."],
      ["他不只是被别人观看的奇异生物。他也举起相机，决定自己要看什么。",
       "He is not only a strange creature looked at by others. He also raises a camera and decides what he wants to see."],
      ["照片与诗有某种相似之处。它们都从连续的时间里切下一小块。一张照片不必交代之前发生了什么，也不必解释之后会怎样。",
       "Photographs and poems resemble each other somewhat. Both cut a small piece from continuous time. A photograph need not say what happened before, nor explain what will happen after."],
      ["卡森的诗行同样如此。她经常让一个场景突然结束，把人物的心理留在句子之外。读者必须自己穿过那些空白。",
       "Carson’s lines are the same. She often ends a scene abruptly and leaves the characters’ minds outside the sentences. The reader must cross those blanks alone."],
      ["我读惯了有清楚情节、人物动机与叙事因果的小说，因此一开始并不适应。但渐渐地，我发现自己开始像看照片一样阅读。不再急于寻找下一件事。而是停留在一个意象里。观察它为什么被留下。",
       "I am used to novels with clear plots, character motives and narrative causality, so at first I was not at ease. But gradually I found myself reading as one looks at a photograph: no longer hurrying to find the next thing, but staying inside one image, observing why it was left."],
      ["五、斯特西科罗斯",
       "V. Stesichoros",
       "h"],
      ["卡森没有直接开始讲述革律翁的爱情。她先带我们回到古希腊诗人斯特西科罗斯。然后又写他的生平。又讨论残存的诗篇。又安排一场仿佛古典学术研究的考察。到了书的另一端，还有一场关于斯特西科罗斯的虚构访谈。",
       "Carson does not begin directly with Geryon’s love story. First she takes us back to the ancient Greek poet Stesichoros. Then she writes his life. Then discusses his surviving fragments. Then arranges what looks like a classical scholar’s inquiry. At the other end of the book comes a fictional interview with Stesichoros."],
      ["这些部分与革律翁的现代爱情故事，似乎并不属于同一本书。但我越来越觉得，它们才是卡森真正的文学实验。",
       "These parts seem not to belong to the same book as Geryon’s modern love story. But I increasingly feel they are Carson’s real literary experiment."],
      ["她不只是改写神话。她还让我们看见，一个故事如何从古希腊的诗歌残篇，经过翻译、注释、误读与重新想象，变成另一部作品。",
       "She does not merely rewrite myth. She lets us see how a story, from an ancient Greek poetic fragment, passes through translation, annotation, misreading and re-imagining to become another work."],
      ["古典文本不再是一件被完整保存的文物。它像一块破碎的陶器。后来的作者拾起碎片，发现缺失的部分同样可以成为创作的空间。",
       "The classical text is no longer a perfectly preserved relic. It is like a broken pot. Later authors pick up the shards and find that the missing parts can also become room for creation."],
      ["我尤其喜欢这种对于残缺的态度。卡森没有试图恢复一个所谓完整、真实的革律翁。她允许他在不同年代拥有不同的形状。",
       "I especially like this attitude to incompleteness. Carson does not try to restore a so-called complete, true Geryon. She lets him take different shapes in different eras."],
      ["六、爱情不是全书的形式",
       "VI. Love Is Not the Form of the Book",
       "h"],
      ["革律翁爱上赫拉克勒斯。后来又在南美洲与他重逢。赫拉克勒斯身边已经有了安卡什。他们之间的关系变得更加复杂，也更加难以命名。",
       "Geryon falls in love with Herakles. Later he meets him again in South America. Herakles already has Ancash at his side. The relationship between them grows more complicated and harder to name."],
      ["如果按照传统小说的写法，这里应该出现一个明确的情感高潮。一个决定。一场告别。或者某种关于成长的领悟。",
       "In a traditional novel, a clear emotional climax would come here. A decision. A farewell. Or some realization about growing up."],
      ["卡森却没有给我这样的满足。她更愿意写火山、空气、身体、颜色，以及人物之间那些短暂而难以解释的接近。",
       "Carson does not give me that satisfaction. She prefers to write volcanoes, air, bodies, colors, and those brief, hard-to-explain closenesses between people."],
      ["我开始意识到，这本书并不打算把失恋写成一段完整的心理历程。它写的是爱情如何改变一个人感知世界的方式。",
       "I began to realize that the book does not intend to write heartbreak as a complete psychological journey. It writes how love changes the way a person perceives the world."],
      ["革律翁的痛苦并不总是以痛苦的语言出现。有时，它表现为他突然注意到的一件事物。有时，是一句不合时宜的话。有时，是诗行之间的沉默。",
       "Geryon’s pain does not always come in the language of pain. Sometimes it shows as a thing he suddenly notices. Sometimes as an ill-timed remark. Sometimes as the silence between lines."],
      ["这也是我认为诗体小说比普通散文更适合这个故事的原因。卡森不需要解释每一种感情。她可以让两种互不相干的东西并置，让读者自己感受到它们之间的距离。",
       "This is also why I think a novel in verse suits the story better than ordinary prose. Carson need not explain every feeling. She can set two unrelated things side by side and let the reader feel the distance between them."],
      ["七、自传",
       "VII. Autobiography",
       "h"],
      ["读到最后，我反而开始怀疑书名。《红的自传》。究竟是谁的自传？革律翁的？一个怪物的？一个失恋者的？还是卡森借用古希腊神话，写下的某种关于语言本身的自传？",
       "At the end, I began instead to doubt the title. *Autobiography of Red*. Whose autobiography is it? Geryon’s? A monster’s? A heartbroken person’s? Or a kind of autobiography of language itself that Carson writes by borrowing Greek myth?"],
      ["传统自传总有一种隐含的承诺：我将告诉你，我是谁。我从哪里来。我经历了什么。这些事情如何使我成为今天的自己。",
       "A traditional autobiography always carries an implicit promise: I will tell you who I am. Where I come from. What I went through. How these things made me who I am today."],
      ["但革律翁的自传没有提供这样一条完整的道路。他从孩子变成青年。他爱过赫拉克勒斯。他拍摄照片。他旅行。他始终是红色的。这些事实没有被组织成一个最终的答案。",
       "But Geryon’s autobiography does not offer such a complete road. He goes from child to youth. He loved Herakles. He takes photographs. He travels. He is always red. These facts are not organized into a final answer."],
      ["我想起自己离开中国之后，偶尔也会试图把过去的经历讲成一段连贯的故事。仿佛只要找到合适的起点与转折，人生便会显得有方向、有意义。",
       "I thought of how, since leaving China, I too have sometimes tried to tell my past as a coherent story. As if, once the right starting point and turning points were found, a life would seem to have direction and meaning."],
      ["但真正留下来的记忆，往往并不服从这种结构。它们有时只是某个地方的天气，一次没有说完的谈话，或者一个当时并不觉得重要的下午。",
       "But the memories that really remain often do not obey such a structure. Sometimes they are just the weather of a place, an unfinished conversation, or an afternoon that did not seem important at the time."],
      ["卡森让我觉得，也许自传根本不必证明一个人如何成为自己。它只需要保存那些曾经属于他的瞬间。",
       "Carson makes me feel that perhaps an autobiography need not prove how a person became himself. It need only preserve the moments that once belonged to him."],
      ["八、翅膀",
       "VIII. Wings",
       "h"],
      ["革律翁有翅膀。卡森从未让这件事变得完全合理。它既是神话留下的身体特征，也是他无法摆脱的异质性。",
       "Geryon has wings. Carson never makes this fully reasonable. It is both a bodily feature left by myth and a strangeness he cannot shake off."],
      ["但到了小说最后，翅膀似乎又有了另一种可能。我不想把它解释成自由。那样太容易了。",
       "But by the end of the novel, the wings seem to have another possibility. I do not want to interpret it as freedom. That would be too easy."],
      ["卡森花费整部作品，让革律翁摆脱那些早已准备好的解释。怪物不一定意味着邪恶。红色不一定意味着激情。爱情不一定带来完整。翅膀也不必成为某种象征。它们可以只是翅膀。",
       "Carson spends the whole work freeing Geryon from explanations already prepared for him. A monster does not necessarily mean evil. Red does not necessarily mean passion. Love does not necessarily bring wholeness. Wings need not become a symbol. They can just be wings."],
      ["而一本自传，也可以由诗、照片、古希腊残篇与未完成的爱情组成。",
       "And an autobiography, too, can be made of poems, photographs, Greek fragments and an unfinished love."],
      ["我合上书。想起革律翁。一个红色的怪物。他没有被英雄杀死。也没有因为活下来，就必须成为英雄。他只是继续存在。带着自己的颜色。以及那对始终无法被普通叙事安置的翅膀。",
       "I close the book. I think of Geryon. A red monster. He was not killed by the hero. Nor, having survived, must he become a hero. He simply goes on existing. With his own color. And that pair of wings that no ordinary narrative can ever place."]
    ]
  },
  {
    "date": "2015-03-01",
    "title": "Where Does a Person Belong?",
    "slug": "where-does-a-person-belong",
    "category": "Novel",
    "book": {
      "cover": "midnights_children.jpg",
      "title": "Midnight’s Children",
      "author": "Salman Rushdie",
      "language": "English",
      "country": "United Kingdom",
      "original": "English",
      "lines": [
        "Novel · English original, first published 1981",
        "Saleem Sinai, born at the stroke of midnight on India’s independence, tells his life as if it were the history of the nation."
      ]
    },
    "place": "于加州圣何塞\nSan Jose, CA",
    "languages": ["Chinese", "English"],
    "prose": [
      ["我一直觉得，一个人出生在哪里，与他后来认为自己属于哪里，并不一定是同一回事。", "I have always felt that where a person is born and where he later considers himself to belong are not necessarily the same thing."],
      ["尤其是在经历过留学、毕业、开始工作，并不得不一次次思考自己未来该留在哪里之后，我越来越觉得，国籍在法律上是一件很明确的事情，但在个人记忆里却远没有那么简单。一本护照可以证明我现在属于哪个国家，却无法决定我应该如何理解自己的过去。", "Especially after studying abroad, graduating, starting work and having to ask again and again where I should stay, I increasingly feel that nationality is a clear matter in law but far less simple in personal memory. A passport can prove which country I now belong to, but it cannot decide how I should understand my past."],
      ["所以读鲁西迪的《午夜之子》，最让我感兴趣的，并不是萨利姆·西奈恰好出生在1947年8月15日午夜，与印度独立同时，而是鲁西迪为什么一定要把一个人的出生与一个国家的诞生联系在一起。", "So in reading Rushdie’s *Midnight’s Children*, what interests me most is not that Saleem Sinai happens to be born at midnight on 15 August 1947, simultaneous with India’s independence, but why Rushdie insists on tying one person’s birth to the birth of a nation."],
      ["萨利姆似乎从出生起就注定要代表印度。但问题是，他连自己的身世都无法完全确定，又怎么能够代表一个如此复杂的国家？", "Saleem seems destined from birth to represent India. But he cannot even be sure of his own parentage, so how can he represent a country so complex?"],
      ["小说中那个出生时被调换的婴儿情节，我觉得尤其重要。萨利姆原本以为自己的家庭、血统与身份都具有某种必然性，后来却发现，这一切竟然取决于一次人为的交换。如果一个人的身份可以因为一次偶然的调换而彻底改变，那么我们通常认为理所当然的民族归属，又有多少是真正天然的？", "The baby swap at birth seems to me especially important. Saleem assumed his family, bloodline and identity had a kind of necessity, only to find that all of it hinged on a human exchange. If a person’s identity can be completely changed by an accidental switch, how much of the national belonging we usually take for granted is truly natural?"],
      ["这让我想到自己对国籍的理解发生过的变化。年轻时，我更容易把国家理解为出生时就已经确定的身份。后来在美国读书、毕业，开始工作，逐渐建立自己的生活，我才意识到，一个人对国家的归属也可以是后来作出的选择。", "This reminds me of how my own understanding of nationality has changed. When young, I more readily saw a country as an identity fixed at birth. Later, studying and graduating in America, starting work and gradually building a life here, I realized that a person’s belonging to a country can also be a choice made afterward."],
      ["但选择了新的归属，并不意味着过去的经历就此消失。语言、成长环境、家庭记忆，以及看待世界的习惯，并不会随着法律身份的变化而自动改变。", "But choosing a new belonging does not mean the past disappears. Language, the place one grew up, family memory and one’s habits of seeing the world do not change automatically with a change of legal status."],
      ["我想，这也是《午夜之子》最有意思的矛盾：国家总是希望能够讲述一个清晰的起源故事，但真正生活在国家之中的人，却很少拥有如此整齐的身世。", "I think this is also the most interesting contradiction in *Midnight’s Children*: a nation always wants to tell a clear origin story, but the people who actually live in it rarely have such a tidy ancestry."],
      ["鲁西迪的叙述也始终在破坏这种整齐。萨利姆不断打断自己，修正记忆，夸大细节，甚至弄错历史事件发生的时间。他越是努力证明自己的人生与印度历史紧密相连，读者就越难相信他能够完整地讲述其中任何一个。", "Rushdie’s narration keeps undoing that tidiness. Saleem interrupts himself, corrects his memory, exaggerates details, even gets the dates of historical events wrong. The harder he tries to prove his life is bound up with India’s history, the harder it is for the reader to believe he can tell either one completely."],
      ["我很喜欢这种写法。因为它并不是简单地告诉我们历史不可靠，而是让叙述者自己成为这种不可靠的证明。", "I like this way of writing very much, because it does not simply tell us that history is unreliable; it makes the narrator himself the proof of that unreliability."],
      ["尤其是印度独立之后的历史，并没有按照民族主义叙事中那种从殖民压迫走向自由与统一的方向发展。印巴分治、宗教冲突、战争，以及英迪拉·甘地时期的紧急状态，都不断打破独立时所寄托的希望。", "India’s history after independence, in particular, did not move from colonial oppression toward freedom and unity as the nationalist narrative would have it. Partition, religious conflict, war and the Emergency under Indira Gandhi kept breaking the hopes invested in independence."],
      ["那些与印度同时出生、拥有特殊能力的午夜之子，原本象征着新国家的无数可能性。但随着政治权力逐渐集中，他们的特殊性反而成为必须被控制和消除的东西。", "The midnight’s children, born together with India and gifted with special powers, originally symbolize the countless possibilities of the new nation. But as political power becomes concentrated, their very distinctiveness becomes something that must be controlled and eliminated."],
      ["我觉得这里有一种很深的讽刺。一个国家在独立时宣称要让人民决定自己的命运，后来却可能以国家统一与政治秩序的名义，限制这些人的自由。", "I find a deep irony here. A country declares at independence that its people will decide their own fate, and later may restrict their freedom in the name of national unity and political order."],
      ["不过，我并不想把《午夜之子》简单理解为对印度民族主义的批判。鲁西迪真正让我感兴趣的，是他对任何单一历史解释的怀疑。", "Still, I do not want to read *Midnight’s Children* simply as a critique of Indian nationalism. What truly interests me in Rushdie is his suspicion of any single explanation of history."],
      ["一个国家的历史可以被写成独立与进步的故事，也可以被写成分裂与暴力的故事。但对于真正经历这些事件的人而言，历史往往同时包含希望、偶然、错误和失去。", "A nation’s history can be written as a story of independence and progress, or as one of division and violence. But for those who actually lived through these events, history often contains hope, chance, error and loss all at once."],
      ["萨利姆不断试图把自己的一生讲述成印度的缩影，却始终无法让所有细节吻合。他的身体逐渐破碎，记忆越来越混乱，而他仍然坚持讲述，仿佛只要故事还没有结束，自己与这个国家之间的联系就仍然存在。", "Saleem keeps trying to tell his life as a miniature of India, yet can never make every detail fit. His body gradually cracks, his memory grows more confused, and still he keeps telling, as if the bond between himself and the country remains so long as the story is not finished."],
      ["我想，这一点比小说中的魔幻现实主义更加打动我。", "I think this moves me more than the novel’s magical realism."],
      ["因为我们每个人其实都在做类似的事情。随着年龄增长，我们不断重新解释自己的过去，把曾经偶然发生的选择，逐渐理解成某种人生道路。我们喜欢相信今天的自己，是过去所有经历自然发展出来的结果，却很少愿意承认，其中有多少事情原本可以完全不同。", "Because each of us does something similar. As we grow older we keep reinterpreting our past, gradually coming to understand choices that happened by chance as a kind of life path. We like to believe that today’s self is the natural outcome of everything before, and are seldom willing to admit how much of it could have been entirely different."],
      ["萨利姆出生的那个午夜，后来被赋予了整个印度的历史意义。但对于刚刚出生的婴儿而言，那原本只是一个他自己毫不知情的时刻。", "The midnight of Saleem’s birth is later given the historical meaning of all India. But for a newborn, it was just a moment he knew nothing about."],
      ["正如一个人出生时，并不知道自己将来会在哪里生活、使用什么语言，又会把哪个国家称作自己的家。", "Just as a person at birth does not know where he will live, what language he will use, or which country he will call home."],
      ["读完《午夜之子》，我反而不再那么在意萨利姆究竟能否代表印度。", "Having finished *Midnight’s Children*, I find I no longer care so much whether Saleem can represent India."],
      ["我更在意的是，为什么我们总希望一个人的身份能够得到某种最终解释。", "I care more about why we always want a person’s identity to receive some final explanation."],
      ["也许国家可以规定公民身份，历史可以记录出生日期，但一个人究竟属于哪里，始终不是一张出生证明能够回答的问题。", "Perhaps a state can define citizenship and history can record a birth date, but where a person ultimately belongs is a question no birth certificate can ever answer."]
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
    "date": "2026-09-11",
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
    "date": "2026-01-04",
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
    "date": "2026-04-29",
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
    "date": "2021-11-24",
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
    "date": "2019-12-20",
    "title": "The Things I Once Took for Granted",
    "slug": "the-things-i-once-took-for-granted",
    "category": "Novel",
    "book": {
      "cover": "kim_jiyoung.jpg",
      "title": "82年生的金智英 (Kim Ji-young, Born 1982)",
      "author": "趙南柱 Cho Nam-joo",
      "language": "Traditional Chinese",
      "country": "South Korea",
      "original": "Korean",
      "lines": [
        "Novel · Minumsa, 2016 · Traditional Chinese edition",
        "The life of an ordinary Korean woman from birth to motherhood, told like a case file, until she begins to speak in other women’s voices."
      ]
    },
    "place": "於加州聖克拉拉\nSanta Clara, CA",
    "languages": ["Traditional Chinese", "English"],
    "prose": [
      ["我一直以為，自己對韓國社會並不陌生。",
       "I had always thought I was not unfamiliar with Korean society."],
      ["我熟悉韓國家庭中的禮節，也能理解長輩與晚輩之間那些不必明說的規矩。家庭聚會時誰負責準備飯菜，結婚之後應該如何對待雙方父母，一個人又該如何在家庭期待與個人願望之間作出妥協，這些對我而言都不是遙遠的文化現象。",
       "I know the etiquette of Korean families, and can understand the unspoken rules between elders and juniors. Who prepares the food at a family gathering, how one should treat both sets of parents after marriage, how a person should compromise between family expectations and personal wishes: none of these is a distant cultural phenomenon to me."],
      ["但讀趙南柱的《82年生的金智英》時，我突然發現，熟悉一種生活方式，並不意味著真正理解生活在其中的人。",
       "But reading Cho Nam-joo’s *Kim Ji-young, Born 1982*, I suddenly found that being familiar with a way of life does not mean truly understanding the people who live in it."],
      ["尤其當自己恰好不是那個需要作出最多妥協的人。",
       "Especially when one happens not to be the person who has to compromise the most."],
      ["小說開頭，金智英已經三十多歲，結婚、生育，辭去工作，在家照顧孩子。丈夫鄭大賢有穩定的職業，對妻子也並非漠不關心。她的生活看起來沒有什麼特別值得講述的地方。",
       "At the start of the novel, Kim Ji-young is already in her thirties, married, a mother, has quit her job and stays home to look after her child. Her husband, Jung Dae-hyun, has a steady career and is not indifferent to his wife. Her life seems to have nothing especially worth telling."],
      ["直到她開始用其他女人的口吻說話。",
       "Until she begins to speak in the voices of other women."],
      ["她有時像自己的母親，有時又像一位已經去世的女性。她的語氣、神態與說話方式突然發生變化，彷彿另一個人暫時借用了她的身體。",
       "Sometimes she is like her own mother, sometimes like a woman who has died. Her tone, bearing and way of speaking suddenly change, as if another person were borrowing her body for a while."],
      ["丈夫感到不安，帶她去看精神科醫生。",
       "Her husband grows uneasy and takes her to a psychiatrist."],
      ["趙南柱沒有把這種異常寫成一場懸疑故事。相反，她突然放慢敘事，開始追溯金智英從出生到成年的生活。",
       "Cho Nam-joo does not turn this abnormality into a suspense story. Instead she suddenly slows the narrative and begins to trace Kim Ji-young’s life from birth to adulthood."],
      ["我很喜歡這種近乎冷漠的安排。",
       "I like this almost cold arrangement."],
      ["讀者原本期待知道她為什麼生病，小說卻先要求我們了解她怎樣長大。",
       "The reader expects to learn why she is ill, but the novel first asks us to understand how she grew up."],
      ["金智英出生於1982年。她的童年並沒有什麼戲劇性的災難，只有一些細小而持久的區別：男孩更受重視，女孩更早學會忍讓，家庭中的許多安排似乎從來不需要解釋。",
       "Kim Ji-young was born in 1982. Her childhood holds no dramatic disaster, only small and lasting distinctions: boys are valued more, girls learn earlier to yield, and many arrangements in the family seem never to need explaining."],
      ["她的母親吳美淑尤其令我印象深刻。",
       "Her mother, Oh Mi-sook, impressed me especially."],
      ["這個女人年輕時為了支持兄弟讀書，早早承擔起家庭的經濟責任。她並非沒有自己的願望，只是那些願望總是在其他人的需要面前被推遲。",
       "As a young woman, to support her brothers’ schooling, she took on the family’s financial responsibility early. It is not that she had no wishes of her own, only that those wishes were always postponed before other people’s needs."],
      ["後來她成為母親，又希望女兒能夠擁有不同的人生。",
       "Later she became a mother and hoped her daughter could have a different life."],
      ["這種矛盾比簡單的代際衝突更加令人難過。母親明白自己失去了什麼，卻未必能夠阻止女兒在另一種形式下經歷相似的失去。",
       "This contradiction is sadder than a simple conflict between generations. The mother knows what she lost, but cannot necessarily stop her daughter from going through a similar loss in another form."],
      ["金智英進入學校、大學與職場之後，小說的筆調依然克制。",
       "After Kim Ji-young enters school, university and the workplace, the novel’s tone remains restrained."],
      ["趙南柱並不熱衷於描寫某個十惡不赦的人物。她寫的是招聘、升職、辦公室交往，以及人們隨口說出的那些並不覺得需要負責的話。",
       "Cho Nam-joo is not keen on depicting some irredeemable villain. She writes about hiring, promotion, office relationships, and the things people say offhand without feeling they need answer for them."],
      ["這些情節最令人不安的地方，正在於它們缺少明確的戲劇高潮。",
       "What is most unsettling about these episodes is precisely that they lack a clear dramatic climax."],
      ["我尤其記得金智英成為母親之後，在咖啡館聽見陌生人稱她為「媽蟲」的場景。",
       "I especially remember the scene after Kim Ji-young becomes a mother, when in a café she hears strangers call her a “mom-roach.”"],
      ["她不過是帶著孩子出來喝一杯咖啡，卻被人輕易歸入一種依賴丈夫、不事生產的女性形象。",
       "She has only come out with her child for a cup of coffee, yet is easily filed into the image of a woman who depends on her husband and produces nothing."],
      ["這件事本身並不複雜，甚至沒有發展成激烈的衝突。但我覺得它比許多更嚴重的遭遇更能說明金智英的處境。",
       "The incident itself is not complicated and does not even develop into a fierce conflict. But I feel it explains Kim Ji-young’s situation better than many graver experiences."],
      ["她失去的並不只是職業。她連如何解釋自己的日常生活，都越來越缺少餘地。",
       "What she has lost is not only a career. She has less and less room even to explain her own daily life."],
      ["讀到這裡，我開始注意趙南柱的寫作方式。",
       "Reading this, I began to notice Cho Nam-joo’s way of writing."],
      ["《82年生的金智英》並不像傳統心理小說那樣，讓讀者深入主人公豐富而隱祕的內心。它更像一份關於普通人的社會檔案，按照出生、求學、就業、婚姻與生育的順序，逐項記錄她的人生。",
       "*Kim Ji-young, Born 1982* does not, like a traditional psychological novel, take the reader deep into the protagonist’s rich and hidden inner life. It is more like a social file on an ordinary person, recording her life item by item in the order of birth, schooling, employment, marriage and childbirth."],
      ["小說甚至穿插真實的社會調查與統計資料。",
       "The novel even interleaves real social surveys and statistics."],
      ["這種寫法有時讓我覺得生硬。人物的經歷似乎總是恰好能夠證明某個社會現象，金智英本人也因此顯得過於被動。",
       "This approach sometimes struck me as stiff. The character’s experiences always seem to prove some social phenomenon, and Kim Ji-young herself therefore appears too passive."],
      ["她很少擁有與這些問題無關的慾望、缺點或任性。我們知道她遭遇了什麼，卻未必真正知道她喜歡什麼。",
       "She rarely has desires, flaws or whims unrelated to these problems. We know what she has met with, but not necessarily what she likes."],
      ["如果把這部小說當作純粹的文學作品，我並不認為這種人物塑造毫無問題。",
       "If one takes the novel as pure literature, I do not think this characterization is free of problems."],
      ["但我也逐漸意識到，趙南柱似乎有意犧牲了一部分人物的獨特性。",
       "But I also gradually realized that Cho Nam-joo seems to have deliberately sacrificed some of the character’s uniqueness."],
      ["金智英的名字本身就十分普通。1982年出生，也不是一個具有特殊歷史意義的年份。她既不是英雄，也不是反抗者，甚至不是一個特別善於表達自己的人。",
       "Kim Ji-young’s name itself is very ordinary. 1982 is not a year of special historical significance either. She is neither a hero nor a rebel, nor even someone especially good at expressing herself."],
      ["作者似乎不希望我們記住一個與眾不同的女人，而是希望我們發現，自己可能早已遇見過許多個金智英。",
       "The author seems not to want us to remember an exceptional woman, but to want us to discover that we may already have met many Kim Ji-youngs."],
      ["這種寫法讓我重新想起閱讀之初的熟悉感。",
       "This way of writing brought back to me the sense of familiarity I had at the start of reading."],
      ["我過去總覺得，理解一種文化，就是知道它的禮節、習俗與家庭觀念。但這些知識往往來自旁觀者的位置。",
       "I used to think that understanding a culture meant knowing its etiquette, customs and family ideas. But such knowledge often comes from the position of an onlooker."],
      ["我知道一頓家庭聚餐應該如何安排，卻未必認真想過是誰在準備這頓飯；我理解長輩對於婚姻的期待，卻不一定意識到那些期待如何進入年輕人的私人生活。",
       "I knew how a family dinner should be arranged, but had not necessarily thought seriously about who was preparing it; I understood elders’ expectations about marriage, but did not necessarily realize how those expectations enter young people’s private lives."],
      ["熟悉有時反而使人失去觀察的敏感。",
       "Familiarity sometimes makes one lose the sensitivity to observe."],
      ["不過，我認為整部小說最出色的部分，並不在金智英的成長經歷，而在結尾。",
       "Still, I think the finest part of the whole novel lies not in Kim Ji-young’s upbringing but in the ending."],
      ["我們終於發現，一直以冷靜、客觀的口吻敘述她人生的人，是為她診療的男性精神科醫生。",
       "We finally discover that the one who has been narrating her life in a calm, objective tone is the male psychiatrist treating her."],
      ["他聽完了金智英的故事，理解她的困境，也能夠用專業語言解釋她的症狀。",
       "He has listened to Kim Ji-young’s story, understands her predicament, and can explain her symptoms in professional language."],
      ["然而，當診所的一名女員工懷孕後，他卻開始考慮招聘一位不太可能因生育而離職的員工。",
       "Yet when a female employee at his clinic becomes pregnant, he begins to consider hiring someone unlikely to leave because of childbirth."],
      ["我讀到這裡，幾乎覺得趙南柱是在故意捉弄讀者。",
       "Reading this, I almost felt Cho Nam-joo was deliberately teasing the reader."],
      ["整部小說花費大量篇幅，使我們相信理解能夠帶來改變。可到了最後，那個最完整地掌握金智英人生經歷的人，卻依然按照自己熟悉的方式作出決定。",
       "The whole novel spends great length making us believe that understanding can bring change. But in the end, the person who knows Kim Ji-young’s life most completely still decides in the way he is used to."],
      ["他並不是一個缺少知識的人。",
       "He is not a man who lacks knowledge."],
      ["他的問題恰恰在於，知識並沒有真正改變他看待自己生活的方式。",
       "His problem is precisely that knowledge has not truly changed how he looks at his own life."],
      ["這個結尾也讓我重新理解了小說開頭那些奇怪的聲音。",
       "This ending also made me understand anew the strange voices at the start of the novel."],
      ["金智英不斷借用其他女人的口吻，而她自己的人生，最終又由一位男性醫生替她整理和講述。",
       "Kim Ji-young keeps borrowing the voices of other women, and her own life is finally arranged and told for her by a male doctor."],
      ["從頭到尾，我們幾乎沒有機會聽見一個不需要被解釋、不需要被診斷的金智英。",
       "From start to finish we hardly get the chance to hear a Kim Ji-young who does not need to be explained or diagnosed."],
      ["我不知道這是趙南柱有意安排的敘事諷刺，還是她為了呈現社會問題而作出的文學選擇。但它使這部原本有些直白的小說，在最後突然變得複雜起來。",
       "I do not know whether this is a narrative irony Cho Nam-joo arranged on purpose, or a literary choice made to present a social problem. But it makes this rather plain novel suddenly complicated at the very end."],
      ["合上書後，我想起的不是那些統計數字，也不是某一件特別令人憤怒的事情。",
       "After closing the book, what I thought of was neither the statistics nor any single infuriating incident."],
      ["我想到的是自己閱讀之前的那種自信：我以為自己足夠熟悉這些家庭與社會關係，因此也就足夠理解它們。",
       "I thought of the confidence I had before reading: I believed I was familiar enough with these family and social relationships, and therefore understood them well enough."],
      ["現在我卻覺得，自己過去所擁有的，可能只是一個不必付出同樣代價的人所獲得的熟悉。",
       "Now I feel that what I had before may have been only the familiarity of someone who does not have to pay the same price."],
      ["**金智英說起了別人的話。而我讀完她的故事，才開始懷疑，那些過去聽起來再平常不過的話，自己究竟聽懂了多少。**",
       "**Kim Ji-young speaks in other people’s words. And only after finishing her story did I begin to doubt how much of those words, which once sounded entirely ordinary, I had really understood.**"]
    ]
  },
  {
    "date": "2021-09-20",
    "title": "A Cholera That Lasted Fifty-Three Years",
    "slug": "a-cholera-that-lasted-fifty-three-years",
    "category": "Novel",
    "book": {
      "cover": "love_in_the_time_of_cholera.jpg",
      "title": "Love in the Time of Cholera",
      "author": "Gabriel García Márquez",
      "language": "English",
      "country": "Colombia",
      "original": "Spanish",
      "lines": [
        "Novel · English translation of El amor en los tiempos del cólera, 1985",
        "Florentino Ariza waits fifty-three years for Fermina Daza, who marries a doctor in between."
      ]
    },
    "place": "于加州利弗莫尔\nLivermore, CA",
    "languages": ["Chinese", "English"],
    "prose": [
      ["弗洛伦蒂诺·阿里萨在五十三年七个月零十一个昼夜里，始终相信自己患着一种无法治愈的疾病，而这种疾病最奇怪的地方在于，病人不仅拒绝痊愈，还把每一次复发都当作生命仍然值得继续的证据。",
       "For fifty-three years, seven months and eleven days and nights, Florentino Ariza believes he suffers from an incurable disease, and the strangest thing about it is that the patient not only refuses to recover but takes every relapse as proof that life is still worth continuing."],
      ["故事发生在十九世纪末至二十世纪初的加勒比海沿岸。那是一个蒸汽轮船逐渐取代旧式航运、电报线把遥远的城市连接起来，而霍乱仍然能够使整座港口陷入恐慌的年代。年轻的弗洛伦蒂诺在电报局工作，熟悉如何让消息穿越漫长的距离，却始终无法使自己的爱情抵达费尔明娜。他的失眠、呕吐、食欲不振，甚至让母亲怀疑他染上了霍乱。在那个疾病随船只与河流传播、城市尚未建立可靠公共卫生体系的时代，爱情与瘟疫确实有着令人不安的相似之处。",
       "The story takes place on the Caribbean coast from the late nineteenth to the early twentieth century, an age in which steamships were gradually replacing old shipping, telegraph lines were joining distant cities, and cholera could still throw a whole port into panic. The young Florentino works at the telegraph office and knows how to send messages across long distances, yet can never make his love reach Fermina. His insomnia, vomiting and loss of appetite even make his mother suspect he has caught cholera. In an age when disease traveled with ships and rivers and cities had not built a reliable public health system, love and plague do have an unsettling resemblance."],
      ["然而，费尔明娜的病好得比他快得多。",
       "Fermina, however, recovers much faster than he."],
      ["在市场里，她终于看清那个曾经令自己神魂颠倒的年轻人。没有背叛，没有争吵，也没有任何足以载入家族史册的变故。她只是突然发现，自己爱上的并不是眼前这个人，而是那些情书、秘密与等待共同制造的幻影。她让他忘记这一切，便转身离开。弗洛伦蒂诺却决定用余生证明她错了。",
       "In the market she finally sees clearly the young man who once so enthralled her. There is no betrayal, no quarrel, no event worthy of the family chronicle. She simply discovers that what she loved was not the person before her but the illusion produced by the love letters, the secrecy and the waiting together. She tells him to forget it all, and turns away. Florentino decides to spend the rest of his life proving her wrong."],
      ["在接下来的半个多世纪里，他把等待经营得像一项世袭事业。他有过无数情人，却始终相信自己在精神上忠于费尔明娜。这种矛盾在他看来毫无矛盾可言，正如一个虔诚的信徒不会因为每天犯下罪过，就怀疑自己对上帝的忠诚。",
       "Over the next half-century and more, he runs his waiting like a hereditary enterprise. He has countless lovers, yet always believes he is spiritually faithful to Fermina. To him this contradiction is no contradiction at all, just as a devout believer does not doubt his loyalty to God because he commits sins every day."],
      ["与此同时，费尔明娜嫁给了乌尔比诺医生。乌尔比诺留学欧洲，信奉现代医学与城市卫生改革，试图把一座仍然充斥着污水、恶臭与传染病威胁的加勒比海港口改造成文明城市。他所代表的是十九世纪拉丁美洲精英阶层对欧洲进步观念的信仰：只要引进科学、公共卫生与现代制度，旧世界的混乱终将被秩序取代。",
       "Meanwhile Fermina marries Dr. Urbino. Urbino studied in Europe and believes in modern medicine and urban sanitary reform, trying to remake a Caribbean port still full of sewage, stench and the threat of epidemic into a civilized city. He represents the nineteenth-century Latin American elite’s faith in European ideas of progress: bring in science, public health and modern institutions, and the chaos of the old world will in the end give way to order."],
      ["然而，这位试图消灭霍乱的医生，却无法消灭自己婚姻中的琐碎争执。他与费尔明娜曾经因为浴室里一块没有放好的肥皂而陷入漫长的冷战。两个人都知道事情早已与肥皂无关，却谁也不肯先承认错误。半个世纪的婚姻就是这样度过的：爱情有时藏在一句问候里，有时消失在一顿晚餐中，有时又因为一块肥皂变得不可收拾。",
       "Yet this doctor, who tries to wipe out cholera, cannot wipe out the petty quarrels in his own marriage. He and Fermina once fall into a long cold war over a bar of soap not put back in the bathroom. Both know it has long had nothing to do with soap, yet neither will admit fault first. A half-century of marriage passes this way: love sometimes hides in a greeting, sometimes vanishes over a dinner, and sometimes gets out of hand because of a bar of soap."],
      ["弗洛伦蒂诺不知道这些。他等待的费尔明娜始终停留在年轻时的市场里，仿佛只要足够耐心，她终有一天会从那个下午走出来，重新接过他的情书。",
       "Florentino knows none of this. The Fermina he waits for remains in the market of her youth, as if, with enough patience, she would one day step out of that afternoon and take his love letters again."],
      ["直到乌尔比诺医生为了捉回一只鹦鹉，从梯子上跌落身亡。",
       "Until Dr. Urbino falls from a ladder and dies while trying to catch a parrot."],
      ["一个毕生致力于用现代医学战胜疾病的医生，最后竟然死于一只不肯听话的鸟。马尔克斯让死亡以如此荒唐的方式降临，仿佛要提醒我们，现代文明可以修建下水道、铺设电报线，却无法使人的命运服从理性的安排。",
       "A doctor who devoted his life to conquering disease with modern medicine in the end dies because of a disobedient bird. García Márquez lets death arrive in so absurd a way, as if to remind us that modern civilization can build sewers and lay telegraph lines but cannot make a human fate obey the arrangement of reason."],
      ["葬礼尚未结束，弗洛伦蒂诺便向费尔明娜重新表白。他等待了五十三年，几乎无法再忍受多等一天。可对费尔明娜而言，那不是旧情复燃的时刻，而是她成为寡妇的第一天。她愤怒地将他赶走，而他却在这场羞辱中重新看见了希望。",
       "Before the funeral is over, Florentino declares his love to Fermina again. He has waited fifty-three years and can hardly bear to wait one more day. But for Fermina it is not a moment of rekindled love but the first day of her widowhood. She angrily drives him away, and he, in this humiliation, sees hope again."],
      ["我始终觉得，弗洛伦蒂诺最令人不安的地方，不是他等待得太久，而是他几乎把等待本身当作了一种权利。五十三年的岁月在他心中积累成一笔巨大的债务，仿佛费尔明娜终有一天必须偿还。但她从未要求他等待，更没有答应以自己剩余的生命作为补偿。",
       "I have always felt that what is most disturbing about Florentino is not that he waits too long but that he almost treats waiting itself as a right. Fifty-three years accumulate in his mind into an enormous debt, as if Fermina must one day repay it. But she never asked him to wait, still less promised to compensate him with the rest of her life."],
      ["后来，他们还是登上了马格达莱纳河上的轮船。",
       "Later, they board the steamer on the Magdalena River after all."],
      ["那时，哥伦比亚已经历过十九世纪反复的自由党与保守党内战，以及1899年至1902年的千日战争。战争不仅消耗了国家的财富，也使河流沿岸的村庄与森林遭到破坏。曾经繁盛的马格达莱纳河航运，见证了内陆与加勒比海港口之间的商业往来，也见证了木柴燃料需求、森林砍伐与战乱留下的荒凉。弗洛伦蒂诺年轻时乘船经过的河岸，到晚年已经变得陌生。",
       "By then Colombia has been through the repeated civil wars between Liberals and Conservatives in the nineteenth century and the Thousand Days’ War of 1899 to 1902. The wars consumed the nation’s wealth and also ruined villages and forests along the river. The once-flourishing Magdalena shipping witnessed commerce between the interior and the Caribbean ports, and also the demand for firewood fuel, deforestation and the desolation left by war. The riverbanks Florentino passed by boat in his youth have become strange to him by old age."],
      ["五十三年的等待并没有使世界停留在原地。河水依然流动，沿岸的森林却逐渐消失。曾经需要数周才能抵达的消息，如今可以通过电报传送；国家的政权更替，城市开始现代化，连霍乱也逐渐从无法解释的灾难，变成医学能够认识和防治的疾病。唯独弗洛伦蒂诺坚持相信，自己年轻时染上的那场爱情从未改变。",
       "Fifty-three years of waiting have not kept the world in place. The river still flows, but the forests along it have gradually vanished. News that once took weeks to arrive can now be sent by telegraph; governments change, cities begin to modernize, and even cholera has gone from an inexplicable calamity to a disease medicine can recognize and prevent. Only Florentino insists that the love he caught in his youth has never changed."],
      ["为了避免其他乘客登船，轮船升起了象征霍乱疫情的黄色旗帜。",
       "To keep other passengers from boarding, the steamer raises the yellow flag that signals a cholera outbreak."],
      ["这是整部小说最奇妙、也最残酷的玩笑。在十九世纪的加勒比海世界里，检疫旗帜意味着隔离，意味着港口可能拒绝船只靠岸，也意味着船上的人必须暂时退出正常的社会生活。如今，两个老人却主动借用这种被隔离的身份，逃离陆地上的年龄、家庭与社会秩序。",
       "This is the most marvelous and also the cruelest joke of the whole novel. In the nineteenth-century Caribbean world, a quarantine flag meant isolation, that ports might refuse the ship, and that those aboard must withdraw for a time from normal social life. Now two old people deliberately borrow this isolated status to escape the age, family and social order of the land."],
      ["但我不愿把这场航行简单理解为爱情最终战胜了时间。弗洛伦蒂诺漫长的情史里有自欺、占有，也有无法被浪漫叙事抹去的伤害。尤其是年少的阿梅丽卡·维库尼亚的悲剧，使他的所谓忠贞永远带着令人不安的阴影。一个人可以用五十三年证明自己始终爱着某个人，却未必能够证明自己懂得如何善待别人。",
       "But I am unwilling to read this voyage simply as love finally conquering time. Florentino’s long history of affairs holds self-deception, possessiveness, and harm that no romantic narrative can erase. The tragedy of the young América Vicuña especially leaves his so-called fidelity forever under an unsettling shadow. A person can spend fifty-three years proving he always loved someone, yet not necessarily prove he knows how to treat others well."],
      ["费尔明娜最终选择登船，反而比弗洛伦蒂诺的等待更令我动容。年轻时，她在市场里看清这个男人，然后拒绝了他。五十三年后，她再次面对他，已经知道爱情不能阻止衰老，婚姻不能保证幸福，等待也不能使一个人天然值得被爱。她不再是那个相信情书的少女，却仍然愿意在生命所剩无几的时候，尝试一种没有人能够预先保证结果的亲密。",
       "Fermina’s final choice to board moves me more than Florentino’s waiting. In youth she saw this man clearly in the market and refused him. Fifty-three years later, facing him again, she already knows that love cannot stop aging, marriage cannot guarantee happiness, and waiting cannot make a person naturally worthy of being loved. She is no longer the girl who believed in love letters, yet is still willing, when little of life remains, to try an intimacy whose outcome no one can guarantee beforehand."],
      ["船长询问他们究竟还要这样航行多久。弗洛伦蒂诺回答：“一生一世。”",
       "The captain asks how long they intend to go on sailing like this. Florentino answers: “Forever.”"],
      ["轮船继续沿河航行，黄色旗帜在风中飘动。岸上的世界已经进入新的世纪，蒸汽机、电报与现代医学正在改变人们的生活；河上的两个人却以一场虚构的瘟疫，把自己暂时留在历史之外。",
       "The steamer sails on along the river, the yellow flag fluttering in the wind. The world on shore has entered a new century, and steam engines, telegraphs and modern medicine are changing people’s lives; the two on the river, with an invented plague, keep themselves for a while outside history."],
      ["**马尔克斯写了一场持续五十三年的爱情，却没有让时间证明它的正确。直到最后，弗洛伦蒂诺仍然不知道费尔明娜会爱他多久。而费尔明娜终于不再需要为了任何人的等待，解释自己为什么愿意留下。**",
       "**García Márquez writes a love that lasts fifty-three years, yet does not let time prove it right. To the very end Florentino still does not know how long Fermina will love him. And Fermina at last no longer needs to explain, for anyone’s waiting, why she is willing to stay.**"]
    ]
  },
  {
    "date": "2021-09-21",
    "title": "Why Did We Survive, and Not the Neanderthals?",
    "slug": "why-we-survived",
    "category": "History",
    "book": {
      "cover": "sapiens.jpg",
      "title": "Sapiens: A Brief History of Humankind",
      "author": "Yuval Noah Harari",
      "language": "English",
      "country": "Israel",
      "original": "Hebrew",
      "lines": [
        "History · English translation of the Hebrew original, first published 2011",
        "Harari traces how Homo sapiens came to dominate the earth, from the Cognitive Revolution to the present."
      ]
    },
    "place": "于加州圣克拉拉\nSanta Clara, CA",
    "languages": ["Chinese", "English"],
    "prose": [
      ["假如四万年前的欧洲有一位历史学家，他未必会认为智人是人类演化的最终胜利者。",
       "If there had been a historian in Europe forty thousand years ago, he would not necessarily have thought Homo sapiens the final victor of human evolution."],
      ["那时的尼安德特人已经在欧洲和西亚生活了数十万年。他们身材粗壮，肌肉发达，骨骼厚实，能够适应冰期欧洲严酷的气候。他们制造石器，猎杀大型动物，利用火，也照顾受伤的同伴。相比之下，从非洲向欧亚大陆扩散的智人，不过是后来进入这片土地的另一种人类。",
       "The Neanderthals had by then lived in Europe and western Asia for hundreds of thousands of years. Stocky, muscular and heavy-boned, they were suited to the harsh climate of Ice Age Europe. They made stone tools, hunted large animals, used fire, and cared for injured companions. By comparison, the sapiens spreading from Africa into Eurasia were merely another kind of human who arrived later on this land."],
      ["然而，今天能够书写这段历史的，是我们。",
       "Yet it is we who can write this history today."],
      ["我读尤瓦尔·赫拉利的《人类简史》时，最感兴趣的并不是他关于货币、宗教或国家的宏大论述，而是书中一个看似简单的问题：**为什么最终存活下来的是智人，而不是尼安德特人？**",
       "Reading Yuval Noah Harari’s *Sapiens*, what interested me most was not his grand discussions of money, religion or the state but a seemingly simple question in the book: **why was it Homo sapiens, and not the Neanderthals, who survived in the end?**"],
      ["这个问题之所以吸引我，是因为它动摇了我们对于历史胜利的一种根深蒂固的理解。我们习惯于认为，能够延续下来的物种、文明与制度，必然拥有某种超越失败者的优势。但尼安德特人的命运提醒我们，强壮未必意味着胜利，而胜利也未必能够证明全面的优越。",
       "The question attracts me because it shakes a deeply rooted understanding of historical victory. We are used to thinking that the species, civilizations and institutions that continue must have some advantage over the defeated. But the fate of the Neanderthals reminds us that strength does not necessarily mean victory, and victory does not necessarily prove all-round superiority."],
      ["赫拉利在书中介绍，远古世界曾经同时生活着多种人类。除了智人，还有尼安德特人、直立人，以及生活在亚洲其他地区的古人类。今天只有智人存续下来，于是我们很容易产生一种错觉，仿佛人类演化原本就是一条从原始走向先进、最终抵达现代智人的道路。",
       "Harari explains that the ancient world was once home to several kinds of humans at the same time. Besides Homo sapiens there were the Neanderthals, Homo erectus, and archaic humans in other parts of Asia. Today only sapiens survives, so we easily fall into the illusion that human evolution was a road from primitive to advanced, arriving finally at modern sapiens."],
      ["但演化并不是一场预先知道终点的比赛。",
       "But evolution is not a race whose finish is known in advance."],
      ["尼安德特人并不是智人尚未完成的早期版本。他们与我们拥有共同的祖先，沿着不同的演化分支发展，曾经在相当漫长的时间里与智人并存。对于当时的欧洲环境而言，他们粗壮的身体、较短的四肢以及强健的体格，可能具有相当重要的适应价值。",
       "The Neanderthals were not an unfinished early version of sapiens. They share a common ancestor with us, developed along a different branch of evolution, and coexisted with sapiens for a very long time. For the Europe of the time, their stocky bodies, shorter limbs and robust build may have had considerable adaptive value."],
      ["他们也远非传统想象中迟钝、野蛮的穴居人。考古发现表明，他们能够制造复杂的石器，处理动物尸体，使用火，并在某些情况下照顾长期受伤或患病的群体成员。部分遗址还提供了他们使用颜料、装饰物或从事象征性行为的证据，尽管这些行为的具体含义仍存在争论。",
       "They were also far from the dull, savage cave dwellers of traditional imagination. Archaeological finds show that they could make complex stone tools, process animal carcasses, use fire, and in some cases care for group members who were long injured or ill. Some sites also give evidence of their use of pigments, ornaments or symbolic behavior, though the exact meaning of these behaviors is still debated."],
      ["因此，智人取代尼安德特人，并不能简单理解为聪明人战胜了愚笨人。",
       "So the replacement of the Neanderthals by sapiens cannot simply be understood as clever people defeating stupid ones."],
      ["赫拉利提出了一个很有吸引力的解释：智人的决定性优势，可能不在于个体力量，而在于更加灵活的合作能力。",
       "Harari offers an attractive explanation: sapiens’s decisive advantage may lie not in individual strength but in a more flexible capacity for cooperation."],
      ["一个尼安德特人或许比一个智人更强壮，但如果智人能够通过语言传播复杂的信息，在更广泛的群体之间交换资源、建立联盟，并在环境发生变化时重新组织合作，那么个体身体上的优势就未必能够决定最终结果。",
       "A Neanderthal may have been stronger than a sapiens, but if sapiens could spread complex information through language, exchange resources and build alliances among wider groups, and reorganize cooperation when the environment changed, then individual bodily advantage would not necessarily decide the outcome."],
      ["赫拉利将这种能力与大约七万年前开始的认知革命联系起来。他认为，智人不仅能够交流现实中的危险与资源，还能够围绕共同的故事形成社会关系。神话、祖先、群体身份以及其他想象中的秩序，使互不相识的人能够产生合作。",
       "Harari links this capacity to the Cognitive Revolution that began about seventy thousand years ago. He holds that sapiens could not only communicate real dangers and resources but also form social relations around shared stories. Myths, ancestors, group identity and other imagined orders let people who did not know one another cooperate."],
      ["这是我认为《人类简史》最精彩的思想之一。",
       "This is one of the most brilliant ideas in *Sapiens*, in my view."],
      ["一头更强壮的动物，未必能够战胜一群懂得协调行动的动物。一个个体能够承受严寒、捕获猎物，并不意味着他所属的群体就一定能够应对人口下降、资源短缺和环境变化。",
       "A stronger animal does not necessarily defeat a group of animals that know how to coordinate. That an individual can endure the cold and catch prey does not mean the group he belongs to can necessarily cope with population decline, scarce resources and environmental change."],
      ["但我也认为，赫拉利的解释在这里需要受到格外谨慎的审视。",
       "But I also think Harari’s explanation needs especially careful scrutiny here."],
      ["我们并没有足够证据证明尼安德特人缺乏复杂语言，也不能断言他们无法进行象征性思考。智人与尼安德特人之间究竟存在多大的认知差异，仍然是考古学与古人类学持续争论的问题。人口规模、群体之间的联系、气候波动、资源竞争，以及双方的杂交，都可能参与了尼安德特人作为独立人群最终消失的过程。",
       "We do not have enough evidence that the Neanderthals lacked complex language, nor can we assert that they could not think symbolically. How large the cognitive difference between sapiens and Neanderthals was remains a question archaeology and paleoanthropology continue to debate. Population size, ties between groups, climate fluctuations, competition for resources, and interbreeding between the two may all have played a part in the final disappearance of the Neanderthals as a distinct population."],
      ["更重要的是，遗传学已经改变了“灭绝”这个词的含义。",
       "More importantly, genetics has changed the meaning of the word “extinction.”"],
      ["今天许多非洲以外人群的基因组中，仍然保留着大约百分之一至二的尼安德特人遗传成分。这意味着智人与尼安德特人的相遇，并不只有竞争与取代，也包含交配与后代的延续。",
       "The genomes of many non-African populations today still retain about one to two percent Neanderthal ancestry. This means the meeting of sapiens and Neanderthals was not only competition and replacement, but also mating and the continuation of offspring."],
      ["尼安德特人作为一个独立的人类群体消失了，但他们的部分遗传历史并没有彻底终结。",
       "The Neanderthals vanished as a distinct human group, but part of their genetic history has not wholly ended."],
      ["这使我开始怀疑，我们是否过于习惯把演化写成一部胜利者淘汰失败者的历史。",
       "This made me wonder whether we are too used to writing evolution as a history of winners eliminating losers."],
      ["如果尼安德特人的部分基因至今仍然存在于智人体内，那么所谓胜利与失败，究竟应该如何划分？",
       "If some Neanderthal genes still exist in sapiens today, how should victory and defeat be divided?"],
      ["我们能够明确地说，智人成为今天唯一存续的人属物种；但若进一步宣称这是因为智人必然更先进，就已经从历史事实走向了目的论解释。",
       "We can say plainly that sapiens is today the only surviving species of the genus Homo; but to go on to claim this is because sapiens was necessarily more advanced is already to move from historical fact to teleological explanation."],
      ["我尤其在意其中一个容易被忽略的逻辑问题：**某种优势能够解释一次成功，并不意味着所有成功都必须来自这种优势。**",
       "I care especially about a logical problem that is easily overlooked: **that an advantage can explain a success does not mean every success must come from that advantage.**"],
      ["即使智人确实拥有更广泛的社会网络，也不代表尼安德特人的消失完全由这一差异决定。一个人口规模较小、分布较分散的群体，可能在连续的环境冲击中逐渐衰退；某些偶然的迁徙、疾病或资源变化，也可能改变不同人群之间的相对处境。",
       "Even if sapiens really had wider social networks, it does not follow that the disappearance of the Neanderthals was wholly decided by this difference. A group of small, scattered population may decline gradually under successive environmental shocks; chance migrations, diseases or changes in resources may also alter the relative position of different peoples."],
      ["从结果反推原因，总是比站在历史发生之前预测结果容易得多。",
       "Inferring causes from results is always far easier than predicting results from before history happens."],
      ["我们今天知道智人存活下来，因此倾向于在智人身上寻找决定性的成功品质。但如果历史的某些条件稍有不同，倘若尼安德特人延续至今，而智人只留下零星化石，那么后来的研究者是否也会从尼安德特人的身体结构、生态适应能力与社会组织中，寻找他们注定成功的理由？",
       "We know today that sapiens survived, and so tend to look in sapiens for decisive qualities of success. But if some conditions of history had been slightly different, if the Neanderthals had continued to this day and sapiens left only scattered fossils, would later researchers not also look in the Neanderthals’ body structure, ecological adaptability and social organization for reasons they were destined to succeed?"],
      ["我觉得这个假设比任何关于强者生存的格言都更值得思考。",
       "I think this hypothesis is more worth thinking about than any maxim about the survival of the strong."],
      ["它提醒我们，历史上的幸存者不仅保留了生命，也获得了讲述历史的机会。",
       "It reminds us that the survivors of history kept not only their lives but also the chance to tell history."],
      ["而叙述本身，往往会让偶然发生的结果显得合乎逻辑。",
       "And narration itself often makes results that happened by chance look logical."],
      ["这也是我对赫拉利既欣赏又有所保留的原因。他试图推翻智人天然优越的观念，告诉我们，人类之所以统治世界，可能依赖一种极其特殊的集体合作能力，而非某种全面的生物学优越性。但与此同时，他关于认知革命的宏大解释，又容易使读者相信，智人的胜利终究存在一个足够明确、足够漂亮的答案。",
       "This is why I both admire and hold some reservation about Harari. He tries to overturn the idea that sapiens is naturally superior, telling us that humans may rule the world through an extremely special capacity for collective cooperation rather than any all-round biological superiority. But at the same time, his grand explanation of the Cognitive Revolution easily leads the reader to believe that sapiens’s victory has, after all, a sufficiently clear and elegant answer."],
      ["我反而觉得，尼安德特人最值得我们记住的，不是他们输给了智人，而是他们曾经成功地生活了如此漫长的时间。",
       "I rather feel that what is most worth remembering about the Neanderthals is not that they lost to sapiens, but that they once lived so successfully for so long."],
      ["数十万年的生存、迁徙、狩猎、繁衍与适应，并不会因为一个物种最终消失，就突然失去意义。假如只用今天是否仍然存在来衡量演化上的成功，那么我们几乎是在要求过去的一切生命，都必须通过存活到我们的时代来证明自己。",
       "Hundreds of thousands of years of survival, migration, hunting, reproduction and adaptation do not suddenly lose meaning because a species finally disappears. If we measure evolutionary success only by whether something still exists today, we are almost demanding that every form of life in the past must prove itself by surviving into our time."],
      ["这显然是一种荒谬的标准。",
       "This is plainly an absurd standard."],
      ["尼安德特人并不知道自己会成为后世教科书中被淘汰的人类。他们面对的是真实的冬天、饥饿、猎物与家庭。他们并不是为了在与智人的竞争中获胜而生活，就像智人当时也不可能知道，自己的后代有一天会把整个地球称为人类的世界。",
       "The Neanderthals did not know they would become the humans eliminated in later textbooks. What they faced were real winters, hunger, prey and family. They did not live in order to win a competition with sapiens, just as sapiens at the time could not know that their descendants would one day call the whole earth the human world."],
      ["因此，我读完《人类简史》之后，最难忘的不是智人如何取得胜利，而是我们如何理解那些没有延续至今的人类。",
       "So what I remember most after finishing *Sapiens* is not how sapiens won, but how we understand the humans who did not continue to this day."],
      ["赫拉利让我们看见，个体的强壮不一定能够转化为群体的优势。但我更愿意把这个论点再推进一步：群体的成功，也不必然证明它拥有某种历史上的正当性或必然性。",
       "Harari lets us see that individual strength does not necessarily translate into group advantage. But I would rather push the argument one step further: a group’s success does not necessarily prove it has some historical legitimacy or necessity."],
      ["**我们今天能够讨论尼安德特人为什么消失，并不是因为我们已经证明自己比他们更加优秀，而只是因为，四万年之后，仍然坐在这里提出问题的是我们。**",
       "**We can discuss today why the Neanderthals disappeared not because we have proved ourselves better than they were, but simply because, forty thousand years later, it is we who are still sitting here asking the question.**"],
      ["倘若历史能够由尼安德特人书写，他们也许会为智人的消失提出一套同样令人信服的解释。",
       "If history could be written by the Neanderthals, they might offer an equally convincing explanation for the disappearance of sapiens."],
      ["而那时，被称为演化奇迹的，恐怕就不再是我们了。",
       "And then, what would be called the miracle of evolution would probably no longer be us."]
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
    "date": "2023-12-15",
    "title": "Knowledge and Understanding",
    "slug": "knowledge-and-understanding",
    "category": "Novel",
    "book": {
      "cover": "when_we_cease.jpg",
      "title": "When We Cease to Understand the World",
      "author": "Benjamín Labatut",
      "language": "English",
      "country": "Chile",
      "original": "Spanish",
      "lines": [
        "Novel · Pushkin Press, 2020",
        "A fictionalized account of scientists and mathematicians, from Fritz Haber to Werner Heisenberg, at the edge of what can be understood."
      ]
    },
    "place": "于智利圣地亚哥\nSantiago, Chile",
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
    "date": "2021-03-17",
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
    "date": "2015-10-06",
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
    "place": "于华盛顿州雷德蒙德\nRedmond, WA",
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
    "date": "2023-01-05",
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
    "date": "2025-06-13",
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
    "place": "於日本金澤\nKanazawa, Japan",
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
    "date": "2015-10-10",
    "title": "That Night, He Did Not Go Upstairs",
    "slug": "that-night-he-did-not-go-upstairs",
    "category": "Novel",
    "book": {
      "cover": "remains_of_the_day.jpg",
      "title": "The Remains of the Day",
      "author": "Kazuo Ishiguro",
      "language": "English",
      "country": "United Kingdom",
      "original": "English",
      "lines": [
        "Novel · English original, first published 1989",
        "Stevens, the butler of Darlington Hall, takes a motoring trip across England in 1956 and looks back on a life of service."
      ]
    },
    "place": "于华州柯克兰\nKirkland, WA",
    "languages": ["Chinese", "English"],
    "prose": [
      ["我读《长日将尽》时，始终有一个问题想不明白：史蒂文斯为什么不上楼？", "Reading *The Remains of the Day*, there was one question I could never settle: why does Stevens not go upstairs?"],
      ["父亲快死了。肯顿小姐已经把消息告诉他。楼上是一间卧室，楼下是一场宴会。两者之间不过隔着一段楼梯。", "His father is dying. Miss Kenton has already told him. Upstairs is a bedroom; downstairs is a dinner party. Between them is only a flight of stairs."],
      ["他没有上去。", "He does not go up."],
      ["当然，史蒂文斯有自己的解释。那天达林顿府正在举行一场重要的国际会议，欧洲的政治人物聚集于此，讨论战后秩序。作为总管家，他必须保证一切顺利。", "Of course Stevens has his own explanations. That day Darlington Hall is hosting an important international conference, where European political figures have gathered to discuss the postwar order. As head butler, he must see that everything goes smoothly."],
      ["这些解释听起来都很合理。石黑一雄最擅长的，恰恰是让一种荒谬的生活在当事人的叙述中显得无可指摘。", "These explanations all sound reasonable. What Ishiguro does best is precisely to make an absurd life seem beyond reproach in the telling of the person who lived it."],
      ["我甚至怀疑，如果有人当面问史蒂文斯是否后悔，他会先纠正对方对当晚工作安排的误解，再耐心说明那场会议的重要性，最后才承认父亲的离世确实令人遗憾。", "I even suspect that if someone asked Stevens to his face whether he regretted it, he would first correct their misunderstanding of that night’s arrangements, then patiently explain the importance of the conference, and only at the end admit that his father’s death was indeed regrettable."],
      ["他不会撒谎。他只是永远知道该从哪里开始讲述，才能避开真正的问题。", "He would not lie. He simply always knows where to begin the telling so as to avoid the real question."],
      ["更让我不安的是，多年以后，史蒂文斯竟然把那个夜晚视为职业生涯的高峰。", "More disturbing, years later Stevens regards that night as the high point of his career."],
      ["这就不再只是一个人为了工作牺牲家庭的故事了。", "This is no longer just the story of a man who sacrifices family for work."],
      ["一个人错过父亲临终的时刻，事后感到痛苦，并不难理解。但如果他必须把这件事解释成一种值得骄傲的成就，问题就复杂得多。", "That a person who missed his father’s last moments should feel pain afterward is not hard to understand. But if he must explain it as an achievement to be proud of, the matter is far more complicated."],
      ["因为承认那晚做错了什么，意味着他可能必须重新审视自己此前几十年所相信的一切。", "Because to admit that he did something wrong that night means he might have to reexamine everything he believed for decades before."],
      ["史蒂文斯毕生追求的，是他所谓的“尊严”。他相信伟大的管家不应让私人情感干扰举止，相信个人价值来自对一位伟大绅士的忠诚。", "What Stevens pursued all his life is what he calls “dignity.” He believes a great butler should not let private feelings disturb his conduct, and that personal worth comes from loyalty to a great gentleman."],
      ["可这里有一个被他小心绕开的问题：达林顿勋爵凭什么值得他奉献一生？", "But here is a question he carefully avoids: why is Lord Darlington worth a lifetime of devotion?"],
      ["小说后来逐渐揭示，达林顿勋爵的政治判断远没有史蒂文斯想象得那么高明。他的善意、阶级教养与政治天真纠缠在一起，最终使他卷入对纳粹德国的绥靖。", "The novel gradually reveals that Lord Darlington’s political judgment is far less sound than Stevens imagines. His good intentions, class breeding and political naivety are tangled together and finally draw him into appeasement of Nazi Germany."],
      ["史蒂文斯当然可以说，政治不是管家的专业。他只负责让宴会顺利进行，不负责判断餐桌上的人究竟在商议什么。", "Stevens can of course say that politics is not a butler’s profession. He is responsible only for the smooth running of the dinner, not for judging what the people at the table are really deciding."],
      ["但我觉得，石黑在这里写出了一种特别危险的无辜。", "But I think Ishiguro writes here a particularly dangerous kind of innocence."],
      ["**一个人可以把每件分内的事都做得正确，却从来没有认真判断过，自己究竟在帮助什么事情发生。**", "**A person can do every part of his own job correctly and never seriously judge what it is he is helping to bring about.**"],
      ["这让我重新想起那段楼梯。", "This brings me back to that flight of stairs."],
      ["它并不是什么艰难的道德抉择。没有人要求史蒂文斯在父亲与整个欧洲的命运之间作出选择。楼下的会议并不会因为他短暂离开就立即崩溃。", "It is not a hard moral choice. No one asks Stevens to choose between his father and the fate of all Europe. The conference downstairs would not collapse the moment he stepped away briefly."],
      ["真正阻止他的，是他早已把某种职业理想内化到了无法违背的程度。", "What truly stops him is that he has long since internalized a professional ideal to the point where he cannot violate it."],
      ["他不是被锁在楼下的。他已经不需要一把锁了。", "He is not locked downstairs. He no longer needs a lock."],
      ["我尤其欣赏石黑没有替他安排一场迟来的忏悔。", "I especially appreciate that Ishiguro does not arrange a belated confession for him."],
      ["史蒂文斯讲述往事时，总在解释、补充、修正。有时他似乎已经接近某种痛苦的认识，却又迅速退回熟悉的礼貌与措辞之中。", "When Stevens tells of the past he is always explaining, supplementing, correcting. At times he seems to approach a painful recognition, then quickly retreats into familiar politeness and phrasing."],
      ["这使小说具有一种奇特的残酷：读者比叙述者更早明白他的悲剧，却无法替他承认。", "This gives the novel a peculiar cruelty: the reader understands his tragedy before the narrator does, yet cannot admit it on his behalf."],
      ["甚至连他与肯顿小姐之间那段没有实现的感情，也不是被某个戏剧性的事件毁掉的。他们曾经拥有许多可以彼此靠近的时刻，却一次次让它们在客套、误解和沉默中消失。", "Even the unrealized feeling between him and Miss Kenton is not destroyed by some dramatic event. They had many moments in which they could have drawn closer, and let them vanish again and again in formality, misunderstanding and silence."],
      ["人生有时并不是在某个重大决定中走错了方向，而是在无数个看似无须决定的瞬间，被悄悄决定了。", "Sometimes a life does not go wrong in one major decision, but is quietly decided in countless moments that seem to need no decision."],
      ["小说结尾，史蒂文斯坐在韦茅斯的海边。白天正在过去，码头的灯光即将亮起。他刚刚得知，肯顿小姐虽然对婚姻有过遗憾，却仍然选择了自己已经建立的生活。", "At the end of the novel Stevens sits by the sea at Weymouth. The day is passing and the lights on the pier are about to come on. He has just learned that Miss Kenton, though she has regrets about her marriage, still chooses the life she has built."],
      ["他终于意识到，某种可能性已经永远结束。", "He finally realizes that a certain possibility has ended forever."],
      ["但即使在这里，他仍然想着如何练习与人开玩笑，以便更好地适应新雇主。", "But even here he thinks about practicing banter with people, to serve his new employer better."],
      ["我读到这里，反而没有觉得可笑。", "Reading this, I did not find it laughable."],
      ["一个人用几十年建立起来的生活方式，怎么可能因为一次旅行、一次谈话，就突然改变？石黑不肯给予史蒂文斯这种廉价的解脱。", "How could a way of life built over decades suddenly change because of one trip or one conversation? Ishiguro refuses Stevens such a cheap release."],
      ["《长日将尽》最残忍的地方，也许正在于它没有让主人公真正获得一个可以重新开始的人生。", "The cruelest thing about *The Remains of the Day* may be that it does not give its protagonist a life he can truly start over."],
      ["我读完以后，仍然想着那天晚上的楼梯。", "After finishing, I was still thinking of the stairs that night."],
      ["楼上是一个即将死去的父亲，楼下是一个自以为正在参与历史的儿子。史蒂文斯选择留下，而他所服务的历史，后来并没有给予他期待的荣誉。", "Upstairs is a dying father; downstairs, a son who believes he is taking part in history. Stevens chooses to stay, and the history he served did not later grant him the honor he expected."],
      ["几十年过去，他依然能够准确回忆宴会的安排，却再也没有机会回到父亲的床边。", "Decades pass, and he can still recall the arrangements of the dinner exactly, but never gets the chance to return to his father’s bedside."],
      ["**那天晚上，他没有上楼。后来，他用余生解释为什么。**", "**That night, he did not go upstairs. Afterward, he spent the rest of his life explaining why.**"]
    ]
  },
  {
    "date": "2016-12-31",
    "title": "Before Love Became Memory",
    "slug": "before-love-became-memory",
    "category": "Novel",
    "book": {
      "cover": "sea_wall.jpg",
      "title": "抵挡太平洋的堤坝 (The Sea Wall)",
      "author": "玛格丽特·杜拉斯 Marguerite Duras",
      "language": "Chinese",
      "country": "France",
      "original": "French",
      "lines": [
        "Novel · Chinese translation of Un barrage contre le Pacifique, 1950",
        "A widowed mother in French Indochina pours her savings into a plot of land the Pacific floods every year, while her daughter Suzanne is drawn toward a wealthy suitor."
      ]
    },
    "place": "于法国巴黎\nParis, France",
    "languages": ["Chinese", "English"],
    "prose": [
      ["读完《情人》再回到《抵挡太平洋的堤坝》，我始终有一种奇怪的感觉：仿佛那个站在湄公河渡船上、戴着男式毡帽的少女，终于被放回了她原本生活的世界。而那个世界，远没有多年后回忆中的爱情那样朦胧、美丽。", "Returning to *Un barrage contre le Pacifique* after *L’Amant*, I kept having a strange feeling: as if the girl in the man’s felt hat on the Mekong ferry had at last been put back into the world she actually lived in. And that world was far less hazy and beautiful than the love remembered years later."],
      ["《情人》写于1984年，《抵挡太平洋的堤坝》则出版于1950年。两部小说都取材于杜拉斯在法属印度支那的童年与青春，却呈现出截然不同的文学面貌。前者是一个衰老女人对少女时代的重新凝视，后者则更接近一部关于殖民地贫困、家庭绝望与青春欲望的现实主义小说。", "*L’Amant* was written in 1984; *Un barrage contre le Pacifique* was published in 1950. Both draw on Duras’s childhood and youth in French Indochina, yet they look entirely different as literature. The former is an old woman’s renewed gaze at her girlhood; the latter is closer to a realist novel about colonial poverty, family despair and youthful desire."],
      ["我在《情人》的书评中，最在意的是那张从未拍摄过的照片。多年后的杜拉斯不断回到湄公河上的渡船，仿佛那个瞬间早已预示了她后来的一生。但在《抵挡太平洋的堤坝》中，苏珊还没有成为值得回忆的少女。她仍然生活在贫困之中，面对一个不断衰老、愤怒而绝望的母亲，以及一片每年都被太平洋海水吞没的土地。", "In my review of *L’Amant*, what I cared about most was the photograph that was never taken. Years later Duras keeps returning to the ferry on the Mekong, as if that moment had already foretold the rest of her life. But in *Un barrage contre le Pacifique*, Suzanne has not yet become a girl worth remembering. She still lives in poverty, facing a mother who grows older, angrier and more desperate, and a piece of land swallowed by the Pacific every year."],
      ["我觉得，这两部小说最深刻的联系，恰恰在于**《情人》试图理解一段已经结束的青春，而《抵挡太平洋的堤坝》让我们看到，在青春尚未成为回忆之前，它究竟是怎样被生活消耗的。**", "I think the deepest link between the two novels is precisely this: **L’Amant tries to understand a youth that has ended, while Un barrage contre le Pacifique shows us how youth is worn away by life before it has become a memory.**"],
      ["母亲用多年积蓄购买了一块殖民地土地，却发现它根本无法耕种。她修筑堤坝，希望阻挡海水，最终徒劳无功。这个情节几乎具有古希腊悲剧的意味：一个人不断反抗某种远远超过自身力量的秩序，而她越是坚持，便越是被这种反抗所吞噬。", "The mother spends years of savings on a piece of colonial land, only to find it cannot be farmed at all. She builds dikes to hold back the sea, and in the end it is all in vain. The plot has almost the quality of Greek tragedy: a person keeps resisting an order far greater than her own strength, and the more she persists, the more she is consumed by the resistance."],
      ["但杜拉斯没有把母亲写成一个值得无条件同情的悲剧英雄。她的贫困是真实的，她的愤怒也是正当的，可她同样把自己的绝望转移到了儿女身上。尤其是苏珊，逐渐成为这个家庭最后可以交换的资本。", "But Duras does not write the mother as a tragic hero deserving unconditional sympathy. Her poverty is real and her anger justified, yet she also passes her despair on to her children. Suzanne in particular gradually becomes the last capital the family has left to trade."],
      ["这让我重新理解《情人》中少女与中国富商之间的关系。", "This made me understand anew the relationship between the girl and the wealthy Chinese man in *L’Amant*."],
      ["在《情人》里，那个中国男人的财富与少女的贫困，被年老叙述者的记忆赋予了暧昧而复杂的意义。金钱与欲望纠缠在一起，却始终笼罩着一种无法完全解释的情感。而在《抵挡太平洋的堤坝》中，富有的约先生、钻石、汽车与婚姻的可能性，都被更加直接地放进家庭的经济困境之中。", "In *L’Amant*, the man’s wealth and the girl’s poverty are given an ambiguous, complicated meaning by the old narrator’s memory. Money and desire are entangled, yet shrouded in a feeling that can never be fully explained. In *Un barrage contre le Pacifique*, the wealthy Monsieur Jo, the diamond, the car and the possibility of marriage are placed far more directly inside the family’s economic predicament."],
      ["两部小说中的男性人物并不能简单等同，但他们所处的位置却形成了耐人寻味的呼应：一个年轻女人的身体，如何在贫困家庭的期待中，成为通往另一种生活的可能？", "The men in the two novels cannot simply be equated, but the positions they occupy echo each other in intriguing ways: how does a young woman’s body, amid the expectations of a poor family, become the possible way into another life?"],
      ["我尤其在意苏珊的处境。她并非完全没有欲望，也并非只是被动接受家庭安排。她渴望离开，渴望爱情，渴望某种尚未真正理解的自由。然而，当所有选择都必须经过金钱的衡量，我们还能在多大程度上将她的决定称为自由？", "I care especially about Suzanne’s situation. She is not without desire, nor does she merely accept what her family arranges. She longs to leave, longs for love, longs for a freedom she does not yet truly understand. But when every choice must be weighed in money, to what extent can we still call her decisions free?"],
      ["这种疑问也使我重新怀疑《情人》中少女那种与年龄不相称的镇定。多年后的叙述者可以将自己的主动解释为欲望的觉醒，但《抵挡太平洋的堤坝》提醒我们，少女的早熟也可能只是贫困迫使她过早学会了成人世界的规则。", "This question also makes me doubt again the girl’s composure in *L’Amant*, so out of keeping with her age. The narrator, years later, can explain her initiative as the awakening of desire, but *Un barrage contre le Pacifique* reminds us that the girl’s precocity may simply be poverty forcing her to learn the rules of the adult world too early."],
      ["而这一切又发生在殖民地。", "And all of this happens in a colony."],
      ["母亲是法国人，却被殖民行政体系所欺骗；她在经济上受到剥削，却仍然拥有殖民社会赋予欧洲人的身份优势。与此同时，小说中的当地居民承受着更加根本的贫困与不平等。杜拉斯没有把殖民主义简化成富有的白人对贫穷的亚洲人的压迫，而是揭示出一种更加复杂的权力结构：**一个人可以同时是制度的受害者，又是制度特权的受益者。**", "The mother is French, yet she is cheated by the colonial administration; she is exploited economically, yet still holds the status advantage the colonial society grants Europeans. Meanwhile the local people in the novel bear a far more fundamental poverty and inequality. Duras does not reduce colonialism to rich whites oppressing poor Asians, but reveals a more complicated structure of power: **a person can be at once a victim of the system and a beneficiary of its privileges.**"],
      ["这也是我欣赏杜拉斯的原因。她没有让贫困自动赋予人物道德上的纯洁，也没有让爱情成为超越历史的避难所。她笔下的人物始终生活在具体的物质条件之中，而那些条件往往比他们自己的意愿更加有力。", "This is also why I admire Duras. She does not let poverty automatically confer moral purity on her characters, nor does she make love a refuge beyond history. Her characters always live within concrete material conditions, and those conditions are often stronger than their own wishes."],
      ["不过，与《情人》相比，《抵挡太平洋的堤坝》真正让我感到悲伤的，是它对时间的处理。", "Compared with *L’Amant*, though, what truly saddens me in *Un barrage contre le Pacifique* is its handling of time."],
      ["《情人》中的时间是可以反复返回的。一个衰老的女人可以不断重新描写少女的面容、衣着与姿态，可以在几十年之后重新解释一次相遇，甚至可以把当年尚未理解的悲伤命名为爱情。", "Time in *L’Amant* can be returned to again and again. An aged woman can keep redescribing the girl’s face, clothes and bearing, can reinterpret an encounter decades later, and can even name as love a sorrow she did not understand then."],
      ["但《抵挡太平洋的堤坝》中的时间几乎只有一个方向。母亲越来越衰老，堤坝不断被摧毁，家庭的希望一点点耗尽。人物没有足够的距离去理解自己的生活，他们只能继续生活。", "But time in *Un barrage contre le Pacifique* runs almost in one direction only. The mother grows older, the dikes are destroyed again and again, the family’s hope is used up bit by bit. The characters have no distance from which to understand their lives; they can only go on living them."],
      ["我想，这或许正是两部小说在文学气质上最根本的差异。《情人》拥有回忆赋予的自由，而《抵挡太平洋的堤坝》保留着现实尚未结束时的沉重。", "I think this may be the most fundamental difference in the literary temperament of the two novels. *L’Amant* has the freedom memory grants, while *Un barrage contre le Pacifique* keeps the weight of a reality that has not yet ended."],
      ["在《情人》中，少女离开印度支那的轮船上响起音乐，她突然哭泣。多年以后，叙述者可以反复返回那个瞬间，试图理解那场眼泪究竟意味着什么。", "In *L’Amant*, music plays on the ship taking the girl away from Indochina, and she suddenly weeps. Years later the narrator can return to that moment again and again, trying to understand what the tears meant."],
      ["而在《抵挡太平洋的堤坝》中，我想到的却是母亲面对被海水摧毁的堤坝。她没有后来者的从容，也无法预知自己的一生最终会被女儿写成文学。她只能站在那里，看着自己曾经相信的一切逐渐消失。", "In *Un barrage contre le Pacifique*, what I think of instead is the mother facing the dikes the sea has destroyed. She has none of the composure of those who come later, and cannot foresee that her life will be written into literature by her daughter. She can only stand there, watching everything she once believed in slowly vanish."],
      ["如果说《情人》中那张从未拍摄的照片，是记忆试图为青春保存一个永恒的形象，那么《抵挡太平洋的堤坝》中那道终究无法抵挡海水的堤坝，便是现实对这种永恒的拒绝。", "If the never-taken photograph in *L’Amant* is memory’s attempt to keep an eternal image of youth, then the dike in *Un barrage contre le Pacifique*, which in the end cannot hold back the sea, is reality’s refusal of such eternity."],
      ["一张照片试图留住时间，一道堤坝试图阻挡时间。", "A photograph tries to keep time; a dike tries to hold it back."],
      ["它们最终都失败了。", "Both fail in the end."],
      ["但杜拉斯在两次失败之间，完成了某种奇妙的文学转变：年轻时，她写下一个家庭如何被现实摧毁；年老时，她又从那些破碎的现实中，重新辨认出一个少女的爱情。", "But between the two failures, Duras achieves a wondrous literary transformation: when young, she writes how a family is destroyed by reality; when old, she recognizes anew, in the wreckage of that reality, a girl’s love."],
      ["我因此更加怀疑，我们是否真的能够将《情人》理解为对青春的最终解释。也许那不是杜拉斯终于发现了过去的真相，而是她在几十年之后，终于获得了以另一种方式讲述过去的自由。", "So I doubt all the more that we can understand *L’Amant* as the final explanation of youth. Perhaps it is not that Duras finally discovered the truth of the past, but that decades later she finally gained the freedom to tell it another way."],
      ["《抵挡太平洋的堤坝》使我看到，那个后来被反复回忆的少女，曾经生活在一个根本无暇回忆的世界。", "*Un barrage contre le Pacifique* showed me that the girl who would later be remembered again and again once lived in a world with no time to remember."],
      ["而《情人》最令人动容的地方，也许正在于此：**当生活终于不再要求她抵挡什么，她才有可能回过头来，重新想象那些曾经只能忍受的岁月。**", "And perhaps this is what moves me most in *L’Amant*: **only when life no longer demanded that she hold something back could she turn around and reimagine the years she once could only endure.**"]
    ]
  },
  {
    "date": "2018-05-20",
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
    "date": "2015-05-12",
    "title": "Why Do We Crave Being Moved?",
    "slug": "why-we-crave-being-moved",
    "category": "Novel",
    "book": {
      "cover": "insoutenable_legerete.jpg",
      "title": "L’Insoutenable Légèreté de l’être",
      "author": "Milan Kundera",
      "language": "French",
      "country": "France",
      "original": "Czech",
      "lines": [
        "Novel · Gallimard, 1984 · French edition of a Czech original",
        "Tomas, Tereza, Sabina and Franz, in and out of Prague after 1968, between lightness and weight, between love and kitsch."
      ]
    },
    "place": "于俄勒冈州尤金\nEugene, OR",
    "languages": ["Chinese", "English"],
    "prose": [
      ["我一直觉得，现代社会最值得怀疑的，并不是人们缺少真诚，而是人们太容易相信自己的真诚。", "I have always felt that what is most open to doubt in modern society is not that people lack sincerity, but that they too readily believe in their own sincerity."],
      ["一个人参加政治集会，为崇高的理想流泪；一个国家反复歌颂自己的历史与人民；一家企业宣称正在改变世界。人们不仅为这些景象感动，还会因为自己与其他人一同感动，而更加确信眼前的一切值得相信。", "A person attends a political rally and weeps for a lofty ideal; a nation sings the praises of its history and people again and again; a company announces it is changing the world. People are moved by these scenes, and because they are moved together with others, they grow all the more sure that what is before them deserves belief."],
      ["《不能承受的生命之轻》中最难忘的不是托马斯的爱情，而是昆德拉对“媚俗”的讨论。", "What I remember most in *The Unbearable Lightness of Being* is not Tomas’s love but Kundera’s discussion of kitsch."],
      ["在昆德拉那里，媚俗并非低劣的艺术趣味，而是一种对现实的选择性接受。它排除生活中令人难堪、矛盾和无法解释的部分，只留下那些足以让人共同赞美的东西。", "For Kundera, kitsch is not poor artistic taste but a selective acceptance of reality. It excludes the embarrassing, contradictory and inexplicable parts of life and leaves only what everyone can admire together."],
      ["昆德拉甚至从人类的排泄谈起。这个近乎粗俗的例子，我反而觉得极其准确。我们愿意赞美生命的美丽，却不愿承认生命同样包含衰老、疾病、欲望与羞耻。一个必须排除这些事实才能维持美丽的世界，本身就值得怀疑。", "Kundera even begins from human excrement. This almost vulgar example strikes me as extremely accurate. We are glad to praise the beauty of life but unwilling to admit that life also contains aging, illness, desire and shame. A world that must exclude these facts to stay beautiful is itself open to doubt."],
      ["小说中，萨宾娜厌恶共产主义庆典里整齐的队伍、挥舞的旗帜与幸福的面孔。但她真正反感的并不只是政治宣传，而是那种不允许任何人破坏集体感动的气氛。", "In the novel, Sabina detests the orderly ranks, waving flags and happy faces of the communist celebrations. But what she truly resents is not only the propaganda but the atmosphere that allows no one to spoil the collective emotion."],
      ["我尤其喜欢昆德拉对“两滴眼泪”的分析。第一滴眼泪是为眼前美好的景象而流，第二滴则是为自己能够与全人类一同感动而流。", "I especially like Kundera’s analysis of the “two tears.” The first tear is shed at the lovely sight before us; the second is shed at being moved, together with all mankind, by such a sight."],
      ["第二滴眼泪，才使媚俗成为媚俗。", "It is the second tear that makes kitsch kitsch."],
      ["我觉得，这个判断远比对某种政治制度的批评更加深刻。", "I think this judgment is far deeper than any criticism of a particular political system."],
      ["因为媚俗并不依赖特定的意识形态。弗兰茨向往伟大的政治游行，萨宾娜却连流亡者赋予她的反抗英雄身份也无法接受。一个人可以反对极权，却仍然沉醉于自己代表自由与正义的形象。", "Because kitsch does not depend on a particular ideology. Franz yearns for great political marches, while Sabina cannot even accept the role of resistance heroine that the émigrés assign her. A person can oppose totalitarianism and still be intoxicated by an image of himself as the champion of freedom and justice."],
      ["这让我想到现实社会中许多看似彼此敌对的群体。他们可能相信完全不同的价值，却同样需要一个纯洁的自我形象、一群值得赞美的同伴，以及某些必须被排除的敌人。", "This makes me think of the many groups in real society that seem hostile to one another. They may believe in entirely different values, yet equally need a pure self-image, a circle of admirable companions, and certain enemies who must be excluded."],
      ["在这样的世界里，政治不再只是对利益与制度的讨论，也成为一种情感上的归属。人们首先需要确认自己站在善良的一边，然后才决定哪些事实值得相信。", "In such a world, politics is no longer only a discussion of interests and institutions but also an emotional belonging. People first need to confirm they stand on the side of the good, and only then decide which facts deserve belief."],
      ["我尤其警惕这种道德上的自我满足。", "I am especially wary of this moral self-satisfaction."],
      ["一种理想越是崇高，人们有时越不愿意承认它可能造成的伤害。因为一旦承认这些矛盾，就必须放弃那个关于自身正义的完美形象。", "The loftier an ideal, the less willing people sometimes are to admit the harm it may cause. Because once those contradictions are admitted, the perfect image of one’s own righteousness must be given up."],
      ["而媚俗恰恰使这种放弃变得难以忍受。", "And kitsch makes that giving up unbearable."],
      ["我也觉得，昆德拉的判断完全可以延伸到现代商业社会。", "I also think Kundera’s judgment extends fully to modern commercial society."],
      ["科技企业不断宣称自己正在改变世界，广告反复向人们展示幸福、自由与自我实现的生活。那些宏大的使命、精心设计的形象与令人激动的未来，并不一定是虚假的。", "Tech companies keep declaring they are changing the world, and advertising shows people lives of happiness, freedom and self-realization again and again. Those grand missions, carefully designed images and exciting futures are not necessarily false."],
      ["但它们往往省略了现实中不那么令人振奋的部分：技术的局限、利益的冲突、普通人的困境，以及进步可能付出的代价。", "But they often omit the less inspiring parts of reality: the limits of technology, conflicts of interest, the plight of ordinary people, and the cost progress may exact."],
      ["**媚俗不一定需要制造谎言。有时候，它只需要决定哪些真实的东西不应该出现。**", "**Kitsch does not necessarily need to manufacture lies. Sometimes it only needs to decide which real things should not appear.**"],
      ["不过，我并不愿意把萨宾娜当作小说中唯一清醒的人。", "Still, I am unwilling to treat Sabina as the only clear-sighted person in the novel."],
      ["她不断背叛各种身份与归属，拒绝让自己的生活成为任何宏大叙事的象征。但这种拒绝也使她无法真正安顿下来。她获得了摆脱集体情感的自由，却无法摆脱孤独。", "She keeps betraying identities and belongings, refusing to let her life become the symbol of any grand narrative. But this refusal also keeps her from ever truly settling. She gains freedom from collective feeling, but not from loneliness."],
      ["昆德拉没有让她成为一个战胜媚俗的英雄，因为那样反而会创造出另一种媚俗：一个永远清醒、永远独立、永远不受欺骗的人。", "Kundera does not make her a hero who conquers kitsch, because that would create another kind of kitsch: a person forever lucid, forever independent, never deceived."],
      ["我觉得，这也是小说最令人不安的地方。", "I think this is also the most unsettling thing about the novel."],
      ["当我们批评别人沉醉于崇高的理想时，是否也在享受一种比别人更加清醒的优越感？当我们拒绝集体情感时，是否又在为自己的独立感动？", "When we criticize others for being intoxicated by lofty ideals, are we also enjoying a sense of superior lucidity? When we refuse collective feeling, are we not moved by our own independence?"],
      ["昆德拉甚至不允许读者舒舒服服地站在批判者的位置上。", "Kundera does not even let the reader stand comfortably in the critic’s position."],
      ["小说的标题谈论生命之轻，而我越来越觉得，媚俗或许正是人们为了抵抗这种轻盈而发明的东西。", "The novel’s title speaks of the lightness of being, and I increasingly feel that kitsch may be what people invented to resist that lightness."],
      ["生命只有一次，没有预演，也无法比较另一种人生是否更好。我们因此渴望相信，自己的爱情具有命运般的必然，自己的选择符合某种历史方向，自己的生活正在参与一项值得赞美的事业。", "We live only once, without rehearsal, and cannot compare whether another life would have been better. So we long to believe that our love has the inevitability of fate, that our choices fit some direction of history, and that our lives take part in a cause worth praising."],
      ["媚俗给予人的，正是这种令人安心的确定性。", "What kitsch gives people is precisely this reassuring certainty."],
      ["但昆德拉偏偏拒绝提供它。", "But Kundera refuses to provide it."],
      ["我想，文学与媚俗之间最根本的区别，或许就在这里。媚俗试图让世界成为一个所有人都能理解并共同赞美的整体，而真正的小说却不断让那些不协调、不体面、无法解释的东西重新出现。", "I think the most fundamental difference between literature and kitsch may lie here. Kitsch tries to make the world a whole everyone can understand and praise together, while a true novel keeps bringing back what is discordant, indecent and inexplicable."],
      ["昆德拉并不要求我们放弃理想，也没有证明怀疑一定比信仰高贵。他只是让我意识到，任何一种关于美好生活的想象，都不应该因此获得排除现实的权力。", "Kundera does not ask us to give up ideals, nor does he prove that doubt is nobler than faith. He only made me realize that no vision of the good life should thereby gain the power to exclude reality."],
      ["**也许最值得警惕的，并不是那些让我们流泪的事物，而是我们开始相信，凡是不愿与我们一同流泪的人，都一定错了。**", "**Perhaps what most deserves our wariness is not the things that make us weep, but the moment we begin to believe that anyone unwilling to weep with us must be wrong.**"]
    ]
  },
  {
    "date": "2012-07-10",
    "title": "Why Couldn’t Hassan Be a Little Selfish?",
    "slug": "why-couldnt-hassan-be-selfish",
    "category": "Novel",
    "book": {
      "cover": "kite_runner.jpg",
      "title": "追风筝的人 (The Kite Runner)",
      "author": "卡勒德·胡赛尼 Khaled Hosseini",
      "language": "Chinese",
      "country": "United States",
      "original": "English",
      "lines": [
        "Novel · Chinese translation of The Kite Runner, first published 2003",
        "Amir, a rich Pashtun boy in Kabul, betrays his Hazara servant Hassan and spends his life trying to atone."
      ]
    },
    "place": "于中国盐城\nYancheng, China",
    "languages": ["Chinese", "English"],
    "prose": [
      ["我对卡勒德·胡赛尼《追风筝的人》最大的保留，恰恰是哈桑太善良了。他忠诚、勇敢、宽容，几乎从不嫉妒，也很少愤怒。即使遭到阿米尔的背叛，他仍然选择沉默，甚至替对方承担罪名。相比之下，阿米尔可以自私、虚荣、怯懦，可以渴望父亲的认可，也可以在羞愧中反复折磨自己。**小说里最自私的人，反而拥有最丰富的人性；最无私的人，却几乎没有机会成为他自己。** 这是我阅读这部小说时始终无法摆脱的悖论。",
       "My biggest reservation about Khaled Hosseini’s *The Kite Runner* is precisely that Hassan is too good. He is loyal, brave and forgiving, almost never jealous and rarely angry. Even when Amir betrays him, he chooses silence, and even takes the blame for him. By contrast Amir can be selfish, vain and cowardly, can crave his father’s approval, and can torment himself over and over in shame. **The most selfish person in the novel has the richest humanity; the most selfless has almost no chance to become himself.** This is a paradox I could never shake off while reading."],
      ["阿米尔与哈桑在喀布尔一起长大，在石榴树下读书，在冬天追逐风筝。他们亲密无间，却从来不真正平等。阿米尔是富裕的普什图家庭的少爷，哈桑则是哈扎拉仆人的儿子。阿米尔可以享受友谊，也可以随时退回主人的位置；哈桑却几乎没有这样的选择。那句著名的“为你，千千万万遍”，固然动人，却也让我感到不安。我们赞美哈桑愿意为阿米尔付出一切，却很少追问：他有没有权利拒绝？**如果一个人的善良从来不包含说“不”的可能，那么我们究竟是在赞美他的美德，还是在赞美他的顺从？**",
       "Amir and Hassan grow up together in Kabul, reading under the pomegranate tree and chasing kites in winter. They are close, yet never truly equal. Amir is the young master of a wealthy Pashtun family; Hassan is the son of a Hazara servant. Amir can enjoy the friendship and withdraw at any time into the position of master; Hassan has almost no such choice. The famous line, “For you, a thousand times over,” is moving, yet it also unsettles me. We praise Hassan’s willingness to give everything for Amir, but seldom ask: did he have the right to refuse? **If a person’s goodness never includes the possibility of saying “no,” are we praising his virtue, or his submission?**"],
      ["风筝比赛之后，哈桑为了守护那只蓝色的风筝遭到阿塞夫的性侵，阿米尔躲在巷口，没有上前。后来，阿米尔又故意栽赃哈桑偷窃，试图把他赶出家门。哈桑明明知道真相，却仍然承认了罪名。我读到这里，甚至希望他能够愤怒，能够揭穿阿米尔，至少有一次不再替别人承担后果。但胡赛尼没有给他这样的机会。哈桑越是宽容，阿米尔就越显得卑劣；哈桑越是无私，阿米尔的悔恨便越具有分量。于是，哈桑的善良不仅成为他的性格，也成为推动阿米尔精神成长的叙事工具。一个人通过不断牺牲自己，帮助另一个人认识了自己。",
       "After the kite tournament, Hassan, guarding the blue kite, is sexually assaulted by Assef, while Amir hides at the mouth of the alley and does not step forward. Later Amir deliberately frames Hassan for theft, trying to drive him from the house. Hassan knows the truth, yet admits to the crime. Reading this, I even hoped he would be angry, would expose Amir, would for once not bear the consequences for someone else. But Hosseini does not give him that chance. The more forgiving Hassan is, the baser Amir seems; the more selfless Hassan is, the heavier Amir’s remorse becomes. Hassan’s goodness thus becomes not only his character but a narrative tool that drives Amir’s spiritual growth. One person, by continually sacrificing himself, helps another come to know himself."],
      ["这种安排放在阿富汗的族群关系中，尤其值得玩味。哈桑作为哈扎拉人，生活在普什图人占据优势的社会秩序之下，他的顺从有着深刻的现实背景。但小说既然试图揭示这种不平等，为什么又如此吝于呈现哈桑自己的欲望？他是否曾经嫉妒阿米尔的教育与财富？是否怨恨过父亲阿里始终低人一等的处境？是否想过离开那座房子？我们几乎无从得知。小说让一个长期受到歧视的人物获得了读者的同情，却没有充分给予他普通人应有的复杂性。**哈桑仿佛只有足够无私，才值得被看见；而阿米尔即使自私，也始终拥有被理解的机会。**",
       "This arrangement is especially worth pondering against the ethnic relations of Afghanistan. Hassan, a Hazara, lives under a social order in which Pashtuns hold the advantage, and his submission has a deep real-world background. But if the novel means to expose this inequality, why is it so stingy in showing Hassan’s own desires? Did he ever envy Amir’s education and wealth? Resent the lowly position his father Ali always held? Think of leaving that house? We can hardly know. The novel wins readers’ sympathy for a character long discriminated against, but does not fully give him the complexity an ordinary person deserves. **Hassan seems worth seeing only if he is selfless enough; while Amir, even selfish, always has the chance to be understood.**"],
      ["相比之下，我反而更喜欢阿米尔的父亲。他慷慨、勇敢、重视荣誉，却又固执、虚荣，甚至隐瞒了哈桑是自己亲生儿子的事实。他能够为了陌生人的尊严冒险，却无法公开承认自己的儿子。这种矛盾使他显得真实：他的善行不能取消过错，过错也无法抹去勇气。哈桑却几乎没有得到同样的复杂性。我甚至觉得，如果胡赛尼允许他偶尔自私、嫉妒、说谎，或者憎恨阿米尔，这个人物反而会更加动人。因为自私并不总是道德上的堕落。有时，一个人想要为自己争取什么，恰恰意味着他终于开始把自己当作一个值得重视的人。",
       "By comparison I rather prefer Amir’s father. He is generous, brave and values honor, yet is also stubborn and vain, and even hides the fact that Hassan is his own son. He can risk himself for a stranger’s dignity, but cannot publicly acknowledge his own son. This contradiction makes him seem real: his good deeds cannot cancel his wrong, nor can his wrong erase his courage. Hassan hardly gets the same complexity. I even feel that if Hosseini had let him be occasionally selfish, jealous, lie, or hate Amir, the character would have been more moving. Because selfishness is not always a moral fall. Sometimes, when a person wants to fight for something for himself, it means he has finally begun to treat himself as someone worth taking seriously."],
      ["小说后半部分，阿米尔返回阿富汗，救出哈桑的儿子索拉博。索拉博同样遭受了严重的创伤，却没有继承父亲那种近乎无条件的忠诚。他沉默、恐惧、拒绝交流，即使来到美国，也不愿轻易相信阿米尔。我反而觉得，这个孩子比哈桑更加真实。他不必因为获救就立刻感激，也不必为了满足读者对美好结局的期待而迅速恢复快乐。他有权保留自己的痛苦，甚至有权拒绝别人的善意。小说最后，索拉博看着阿米尔追逐风筝，脸上出现一丝几乎难以察觉的微笑。这个细节之所以动人，正因为那是索拉博自己的反应，而不是他为了让阿米尔安心所必须作出的回应。",
       "In the second half, Amir returns to Afghanistan and rescues Hassan’s son Sohrab. Sohrab has also suffered severe trauma, but has not inherited his father’s near-unconditional loyalty. He is silent, afraid, refuses to communicate, and even after coming to America does not easily trust Amir. I find this child more real than Hassan. He need not be grateful at once because he has been saved, nor quickly recover happiness to satisfy the reader’s hope for a good ending. He has the right to keep his pain, even to refuse others’ kindness. At the end, Sohrab watches Amir run a kite and a barely noticeable smile appears on his face. The detail is moving precisely because it is Sohrab’s own reaction, not a response he must make to set Amir’s mind at ease."],
      ["《追风筝的人》最令人难忘的，仍然是哈桑那句“为你，千千万万遍”。但我越来越觉得，这句话之所以美丽，也因为说出它的人从未真正要求过任何回报。我们当然愿意爱这样的哈桑，因为他的存在几乎不会对任何人提出要求。可真正平等的友谊，难道不应该允许双方都有欲望、都有私心，甚至都有让对方失望的时候吗？我希望哈桑曾经有过一个没有被写出来的下午：他厌烦了阿米尔，放下手里的风筝，决定去做一件只为了自己的事情。",
       "What is most unforgettable in *The Kite Runner* is still Hassan’s line, “For you, a thousand times over.” But I increasingly feel that the line is beautiful also because the one who says it has never truly asked for anything in return. Of course we are glad to love such a Hassan, because his existence hardly makes a demand on anyone. But shouldn’t a truly equal friendship allow both sides to have desires, selfish interests, and even moments of disappointing the other? I wish Hassan had had an afternoon that was never written: when he grew tired of Amir, put down the kite in his hand, and decided to do something only for himself."],
      ["**我并不希望哈桑变得自私。我只是希望，他有资格自私。一个人只有拥有为自己而活的自由，他选择为别人付出时，才真正称得上无私。**",
       "**I do not want Hassan to become selfish. I only wish he were entitled to be. Only when a person has the freedom to live for himself can his choice to give to others truly be called selfless.**"]
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
    "date": "2017-03-11",
    "title": "If Wealth Comes from Fair Exchange, May Society Still Redistribute It?",
    "slug": "wealth-and-redistribution",
    "category": "Philosophy",
    "book": {
      "cover": "anarchy_state_utopia.jpg",
      "title": "Anarchy, State, and Utopia",
      "author": "Robert Nozick",
      "language": "English",
      "country": "United States",
      "original": "English",
      "lines": [
        "Philosophy · English original, first published 1974",
        "Nozick argues for a minimal state and an entitlement theory of justice in holdings, in answer to Rawls."
      ]
    },
    "place": "于加州旧金山\nSan Francisco, CA",
    "languages": ["Chinese", "English"],
    "prose": [
      ["诺齐克最令我着迷的地方，是他并不从贫富差距是否合理出发，而是首先追问：一个人究竟凭什么有权干预另一个人的财产？", "What fascinates me most about Nozick is that he does not start from whether the gap between rich and poor is reasonable, but first asks: by what right may one person interfere with another’s property?"],
      ["在他的权利理论中，财富分配的正义性不取决于最终结果是否平等，而取决于财产是否通过正当取得与自愿转让而来。", "In his entitlement theory, the justice of a distribution of wealth depends not on whether the final outcome is equal, but on whether the holdings arose through just acquisition and voluntary transfer."],
      ["这使他与罗尔斯形成了鲜明对照。罗尔斯试图设计一种公平的社会基本结构，诺齐克则质疑，任何预先设定的分配模式，是否都必然要求持续干预个人的自由选择。", "This sets him in sharp contrast with Rawls. Rawls tries to design a fair basic structure of society, while Nozick asks whether any preset pattern of distribution must require continual interference with individuals’ free choices."],
      ["作为一个同时依靠工资、股票投资与房地产积累财富的人，我很容易理解诺齐克的吸引力。个人承担风险、延迟消费、进行投资，似乎理应享有相应的成果。国家为什么能够在事后重新决定这些成果应该如何分配？", "As someone who builds wealth from a salary, stock investments and real estate, I easily understand Nozick’s appeal. A person who bears risk, defers consumption and invests seems entitled to the corresponding fruits. Why may the state decide afterward how those fruits should be distributed?"],
      ["但我也越来越意识到，诺齐克的理论最困难的部分，恰恰是他所要求的正当取得。", "But I have also come to realize that the hardest part of Nozick’s theory is precisely the just acquisition he requires."],
      ["一套房地产的价值，并不完全来自所有者的努力。它可能来自公共交通、学校质量、城市规划，以及无数纳税人共同建设的基础设施。股票投资的收益，同样依赖法律制度、公共教育、基础研究与稳定的社会秩序。", "The value of a piece of real estate does not come entirely from the owner’s effort. It may come from public transit, school quality, urban planning and infrastructure built jointly by countless taxpayers. Returns on stock investments likewise depend on a legal system, public education, basic research and a stable social order."],
      ["如果财富的形成从来不是完全独立的个人行为，那么我们又应该如何界定其中属于个人的正当权益？", "If the creation of wealth is never an entirely independent individual act, how should we define the legitimate share that belongs to the individual?"],
      ["诺齐克当然没有忽略历史上的不正义。他的理论包含对不正当取得和转让进行矫正的原则。但问题在于，当历史上的土地占有、制度歧视和财富继承如此复杂时，现实社会究竟能否找到一个清晰的正当起点？", "Nozick of course does not ignore historical injustice. His theory contains a principle of rectification for unjust acquisition and transfer. But the problem is that, with historical land seizures, institutional discrimination and inheritance so tangled, can any real society find a clear just starting point?"],
      ["我认为这本书最大的价值，并不是证明自由市场永远正确，而是迫使平等主义者认真回答个人权利的边界问题。", "I think the book’s greatest value is not in proving that free markets are always right, but in forcing egalitarians to answer seriously the question of the limits of individual rights."],
      ["同样，它也迫使相信财产权的人承认：保护财产的正当性，最终仍然需要解释财产是如何产生的。", "Likewise, it forces those who believe in property rights to admit that the justification for protecting property ultimately still has to explain how property came to be."],
      ["诺齐克让我更加珍惜个人自由，却没有让我停止怀疑财富分配的历史基础。这种尚未解决的张力，或许比任何完整的政治答案都更加有价值。", "Nozick made me value individual freedom more, yet did not stop me doubting the historical basis of the distribution of wealth. This unresolved tension may be more valuable than any complete political answer."]
    ]
  },
  {
    "date": "2020-03-27",
    "title": "A History That Redistributes Luck to the Losers",
    "slug": "a-history-that-redistributes-luck",
    "category": "History",
    "book": {
      "cover": "guns_germs_steel.jpg",
      "title": "Guns, Germs, and Steel",
      "author": "Jared Diamond",
      "language": "English",
      "country": "United States",
      "original": "English",
      "lines": [
        "History · English original, first published 1997",
        "Diamond explains why wealth, technology and power ended up so unevenly spread across the world, tracing it back to geography."
      ]
    },
    "place": "于加州圣克拉拉\nSanta Clara, CA",
    "languages": ["Chinese", "English"],
    "prose": [
      ["我对《枪炮、病菌与钢铁》有一种奇怪的感情：我赞同贾雷德·戴蒙德试图纠正的偏见，却不完全喜欢他纠正偏见的方法。",
       "I have a strange feeling about *Guns, Germs, and Steel*: I agree with the prejudice Jared Diamond sets out to correct, but do not entirely like the way he corrects it."],
      ["这本书的雄心相当惊人。它试图用一套跨越一万三千年的解释，回答人类历史上最令人不安的问题之一：为什么财富、技术与权力最终如此不平等地分布在世界各地？",
       "The book’s ambition is astonishing. It tries to answer, with one explanation spanning thirteen thousand years, one of the most unsettling questions in human history: why did wealth, technology and power end up so unequally distributed around the world?"],
      ["戴蒙德的答案，几乎可以概括为一句话：不是因为有些人比另一些人优秀，而是因为他们继承了不同的地理条件。",
       "Diamond’s answer can almost be summed up in one sentence: not because some people are better than others, but because they inherited different geographical conditions."],
      ["这当然比十九世纪欧洲殖民者关于种族与文明等级的解释进步得多。但读着读着，我产生了一个不太礼貌的念头：**戴蒙德似乎把过去归功于欧洲人的一切成就，重新归功于了欧亚大陆。**",
       "This is of course far more progressive than the nineteenth-century European colonizers’ explanations in terms of race and a hierarchy of civilizations. But as I read, an impolite thought came to me: **Diamond seems to take everything once credited to the Europeans and credit it instead to Eurasia.**"],
      ["欧洲人不再因为聪明而拥有钢铁，他们只是幸运地生活在一个拥有小麦、马匹、牛羊以及适合技术传播的地理环境中。",
       "Europeans no longer have steel because they are clever; they are simply lucky to live in a geography with wheat, horses, cattle and sheep, and conditions suited to the spread of technology."],
      ["胜利者的优越感被取消了，胜利本身却依然占据着整部历史的中心。",
       "The victors’ sense of superiority has been cancelled, yet the victory itself still sits at the center of the whole history."],
      ["我第一次真正意识到这一点，是读到新几内亚政治人物耶利向戴蒙德提出的问题：为什么白人制造并带来了那么多物品，而新几内亚人拥有的却相对较少？",
       "I first truly realized this on reading the question the New Guinean politician Yali put to Diamond: why did white people develop so much cargo and bring it to New Guinea, while New Guineans had so little of their own?"],
      ["戴蒙德把这个问题当作全书的起点。我却觉得，最值得玩味的恰恰是问题本身。",
       "Diamond takes this question as the starting point of the whole book. What seems to me most worth pondering is the question itself."],
      ["为什么要用拥有多少现代工业产品来衡量两个社会之间的差异？",
       "Why measure the difference between two societies by how many modern industrial products they have?"],
      ["这当然是一个值得研究的经济史问题。但它同时也是一个已经接受了现代工业社会评价标准的问题。耶利想知道这种差异从何而来，戴蒙德则用农业起源、动物驯化与大陆轴线作出了回答。",
       "This is of course a question of economic history worth studying. But it is also a question that has already accepted the standards of evaluation of modern industrial society. Yali wants to know where the difference comes from, and Diamond answers with the origins of agriculture, animal domestication and the axes of the continents."],
      ["我佩服这个回答的知识广度，却始终觉得，还有一个问题没有得到充分讨论：我们为什么如此确信，这些差异就是理解人类历史最重要的差异？",
       "I admire the intellectual breadth of this answer, but have always felt that one question has not been fully discussed: why are we so sure these differences are the most important ones for understanding human history?"],
      ["一个没有发展出钢铁冶炼的社会，可能拥有极其复杂的生态知识；一个没有建立庞大帝国的民族，可能发展出更适应当地环境的生活方式。它们并不因为缺少欧洲式的国家机器，就只剩下等待解释的落后。",
       "A society that never developed steel smelting may hold extremely complex ecological knowledge; a people that never built a vast empire may have developed a way of life better adapted to its local environment. Lacking a European-style state apparatus, they are not left with nothing but a backwardness waiting to be explained."],
      ["戴蒙德当然明白这一点。他对新几内亚人的观察，恰恰充满了对当地知识与能力的尊重。",
       "Diamond of course understands this. His observations of New Guineans are full of respect for local knowledge and ability."],
      ["但他的整部著作仍然围绕一个现代世界的结果展开：为什么某些社会获得了征服其他社会的能力？",
       "But his whole work still unfolds around an outcome of the modern world: why did some societies gain the ability to conquer others?"],
      ["我开始觉得，这本书虽然反对文明等级论，却没有完全摆脱文明竞赛的叙事框架。",
       "I began to feel that although the book opposes a hierarchy of civilizations, it does not entirely escape the narrative frame of a race between civilizations."],
      ["它改变了比赛结果的解释，却很少怀疑比赛本身为什么值得成为历史的主线。",
       "It changes the explanation of the result of the race, but rarely doubts why the race itself should be the main thread of history."],
      ["这种不安，在读到皮萨罗与阿塔瓦尔帕的故事时变得尤其明显。",
       "This unease became especially clear when I read the story of Pizarro and Atahualpa."],
      ["1532年，人数有限的西班牙征服者在卡哈马卡俘虏了印加皇帝。戴蒙德详细分析了马匹、钢铁武器、文字、军事经验与传染病所形成的优势。",
       "In 1532 a small band of Spanish conquistadors captured the Inca emperor at Cajamarca. Diamond analyzes in detail the advantages given by horses, steel weapons, writing, military experience and infectious disease."],
      ["这些解释十分精彩。尤其当他把西班牙人的胜利与数千年前欧亚大陆的农业起源联系起来时，历史突然获得了一种令人眩晕的纵深。",
       "These explanations are superb. Especially when he links the Spaniards’ victory to the origins of agriculture in Eurasia thousands of years earlier, history suddenly gains a dizzying depth."],
      ["但我忍不住想象另一种写法。",
       "But I cannot help imagining another way of writing it."],
      ["假如这本书不是从欧洲人为什么征服美洲开始，而是从安第斯山脉的农业开始呢？",
       "What if the book began not with why Europeans conquered the Americas but with agriculture in the Andes?"],
      ["印加人如何在陡峭的山地修建梯田？如何利用不同海拔形成的生态差异组织农业生产？如何通过道路、仓储与行政体系维持一个横跨复杂地形的帝国？",
       "How did the Inca build terraces on steep mountainsides? How did they organize agriculture around the ecological differences of different altitudes? How did they hold together, through roads, storage and administration, an empire spanning complex terrain?"],
      ["这些成就并不比欧亚大陆的牲畜驯化更缺乏历史意义。只不过，它们没有最终转化为横渡大西洋的舰队。",
       "These achievements have no less historical significance than the domestication of livestock in Eurasia. They simply did not turn, in the end, into fleets that crossed the Atlantic."],
      ["如果我们把征服能力从评价的中心移开，人类文明史的地图或许会呈现出完全不同的样子。",
       "If we move the ability to conquer away from the center of evaluation, the map of human civilization may look quite different."],
      ["我并不想因此浪漫化印加帝国。它同样拥有等级、强制劳动与政治征服。文化之间没有天然的高低，并不意味着每一种文化实践都值得赞美。",
       "I do not want to romanticize the Inca empire on this account. It too had hierarchy, forced labor and political conquest. That there is no natural ranking among cultures does not mean every cultural practice deserves praise."],
      ["恰恰相反，我认为我们完全可以批评一种制度，却不必把这种批评扩大成对整个文明的裁决。",
       "On the contrary, I think we can perfectly well criticize an institution without widening that criticism into a verdict on a whole civilization."],
      ["这也是我对殖民主义始终无法让步的地方。",
       "This is also where I have never been able to yield on colonialism."],
      ["殖民主义的问题，不在于征服者是否真的拥有某些先进技术，而在于他们把技术、军事与经济上的优势转化为支配他人的权利。即使殖民统治带来了铁路、学校或新的生产方式，也不能因此获得正当性。",
       "The problem of colonialism is not whether the conquerors really had some advanced technology, but that they turned technological, military and economic advantage into a right to dominate others. Even if colonial rule brought railways, schools or new modes of production, it does not thereby gain legitimacy."],
      ["不过，我不希望把《枪炮、病菌与钢铁》仅仅读成一场关于殖民主义的道德辩论。戴蒙德真正使我受益的，是他让我重新认识历史中的运气。",
       "Still, I do not want to read *Guns, Germs, and Steel* merely as a moral debate about colonialism. What really benefited me in Diamond is that he made me see luck in history anew."],
      ["我生活在一个格外强调个人能力与努力的时代。我们习惯于赞美成功者的远见、勤奋与执行力，却不太愿意承认，许多成功首先需要恰好出生在某个地方、进入某个时代，继承一套自己并未创造的条件。",
       "I live in an age that stresses individual ability and effort. We are used to praising the foresight, diligence and execution of the successful, but are less willing to admit that much success first requires being born in a certain place, entering a certain era and inheriting a set of conditions one did not create."],
      ["这一点从个人命运延伸到国家历史，尤其耐人寻味。",
       "Extended from individual fate to national history, this is especially thought-provoking."],
      ["但运气并不能解释一切。地理环境提供机会，也施加限制；真正生活在这些环境中的人，仍然需要作出选择，建立制度，处理冲突，并承担行动的后果。",
       "But luck cannot explain everything. Geography offers opportunities and also imposes limits; the people who actually live in these environments still must make choices, build institutions, handle conflicts and bear the consequences of their actions."],
      ["因此，我最终并没有把戴蒙德当作一位揭示历史终极答案的作者。",
       "So in the end I did not take Diamond as an author who reveals the final answer of history."],
      ["我更愿意把他看作一个出色的提问者。他迫使我怀疑那些看似理所当然的胜利，也让我注意到历史教科书中经常被省略的农业、生态与疾病。",
       "I would rather see him as an excellent questioner. He forced me to doubt victories that seemed taken for granted, and made me notice the agriculture, ecology and disease so often omitted from history textbooks."],
      ["只是读完之后，我发现自己已经不太关心皮萨罗为什么能够打败阿塔瓦尔帕。",
       "Yet after finishing, I found I no longer cared much why Pizarro was able to defeat Atahualpa."],
      ["我开始关心另一个问题：如果西班牙人从未抵达安第斯山脉，我们今天会怎样书写那片土地的历史？",
       "I began to care about another question: if the Spaniards had never reached the Andes, how would we write the history of that land today?"],
      ["我们会不会同样认真地研究印加人的道路、梯田、仓储与宗教？会不会把他们的制度创新看作人类文明的重要成就，而不是一场著名征服的背景？",
       "Would we study the Inca roads, terraces, storehouses and religion with the same seriousness? Would we regard their institutional innovations as important achievements of human civilization, not the backdrop to a famous conquest?"],
      ["这些问题，戴蒙德没有必要替我回答。",
       "Diamond has no need to answer these questions for me."],
      ["他已经完成了一件重要的工作：把欧洲人从历史的天然主角位置上请了下来。",
       "He has already done an important piece of work: asking the Europeans to step down from the position of natural protagonist of history."],
      ["**但我想做得更彻底一些。我甚至不希望由欧洲人的到来，来决定哪些人的历史值得被讲述。**",
       "**But I want to go further. I do not even want the arrival of the Europeans to decide whose history is worth telling.**"]
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
    "date": "2018-11-19",
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
    "date": "2019-11-08",
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
      "country": "Belarus",
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
  },
  {
    "date": "2018-02-03",
    "title": "A Man Who Would Not Speak Plainly",
    "slug": "a-man-who-would-not-speak-plainly",
    "category": "Philosophy",
    "book": {
      "cover": "kierkegaard_anthology.jpg",
      "title": "A Kierkegaard Anthology",
      "author": "Søren Kierkegaard, edited by Robert Bretall",
      "language": "English",
      "country": "Denmark",
      "original": "Danish",
      "lines": [
        "Philosophy · Danish original, selections from 1843 to 1855",
        "Excerpts from Kierkegaard’s works under his many pseudonyms, from the aesthete of *Either/Or* to the Abraham of *Fear and Trembling*."
      ]
    },
    "place": "于丹麦哥本哈根\nCopenhagen, Denmark",
    "languages": ["Chinese", "English"],
    "prose": [
      ["克尔凯郭尔实在不是一个讨人喜欢的作家。他喜欢绕圈子，喜欢反讽，喜欢把原本可以直说的事情交给一个虚构人物，再让另一个虚构人物提出异议。有时读了几十页，仍然不知道作者究竟赞成什么。他似乎很享受这种不便，甚至有意让读者感到困惑。相比那些努力使自己的思想清晰易懂的哲学家，克尔凯郭尔更像一个才华横溢却脾气古怪的小说家，总是怀疑读者理解得太快。",
       "Kierkegaard is really not an endearing writer. He likes to go in circles, likes irony, likes to hand what could have been said directly to one invented character and then let another invented character object. Sometimes after dozens of pages I still do not know what the author actually approves of. He seems to enjoy this inconvenience, and even to confuse the reader on purpose. Compared with philosophers who work to make their thought clear and easy to follow, Kierkegaard is more like a brilliant but eccentric novelist, always suspecting that the reader understands too quickly."],
      ["《A Kierkegaard Anthology》由罗伯特·布雷塔尔编选，将他不同年代、不同笔名的作品放在一起。这样的阅读体验颇为奇特。前一篇还在以近乎轻浮的口吻讨论如何避免无聊，后一篇便开始严肃地思考亚伯拉罕献祭以撒的恐怖；刚刚遇见一个擅长玩弄爱情的审美主义者，转眼又听见某个基督徒对世俗生活作出近乎苛刻的审判。这些声音之间的距离，有时大得让人怀疑它们是否出自同一个人。",
       "*A Kierkegaard Anthology*, edited by Robert Bretall, gathers his works from different years and under different pseudonyms. The reading experience is rather strange. One piece discusses how to avoid boredom in an almost frivolous tone, and the next earnestly contemplates the horror of Abraham sacrificing Isaac; no sooner have I met an aesthete skilled at toying with love than I hear some Christian pass an almost harsh judgment on worldly life. The distance between these voices is sometimes so great that one wonders whether they come from the same person."],
      ["我最喜欢的仍然是《非此即彼》中那些带着恶意的聪明话。《轮作法》将生活比作需要不断更换作物的土地，仿佛避免无聊比追求幸福更加重要。《诱惑者日记》里的约翰内斯则把爱情经营成一场精密的艺术活动。他观察、等待、安排偶遇，甚至欣赏自己对他人情感的操纵。这些文字当然令人不安，却又确实写得漂亮。克尔凯郭尔深知审美主义的诱惑，因为他本人就是一位出色的审美主义作家。他批判的并不是一种自己完全陌生的生活，而是一种他比许多拥护者更加精通的艺术。",
       "What I like best is still the malicious cleverness in *Either/Or*. “Rotation of Crops” likens life to land that needs its crops changed again and again, as if avoiding boredom mattered more than pursuing happiness. In “The Seducer’s Diary,” Johannes runs love as a precise artistic undertaking. He observes, waits, arranges chance meetings, and even admires his own manipulation of another’s feelings. These pages are of course disturbing, and yet they are truly beautifully written. Kierkegaard knows the temptation of aestheticism well, because he is himself an outstanding aesthetic writer. What he criticizes is not a life entirely foreign to him, but an art he has mastered better than many of its defenders."],
      ["这种文学才能，有时甚至让我怀疑他是否过于享受自己所谴责的东西。约翰内斯的残酷被写得如此精巧，读者很容易先欣赏他的聪明，再想起那个受到伤害的柯黛莉娅。克尔凯郭尔当然可能正是要制造这种不适，但文学毕竟有自己的力量。一段写得出色的诱惑，即使被放在道德批判的框架中，也不会自动失去诱惑力。作者可以安排人物最终失败，却无法完全控制读者在阅读过程中究竟爱上了谁。",
       "This literary talent sometimes even makes me wonder whether he enjoys too much the very thing he condemns. Johannes’s cruelty is written so exquisitely that the reader easily admires his cleverness first and only then remembers the wounded Cordelia. Kierkegaard may well intend to produce exactly this discomfort, but literature has its own power. A seduction written brilliantly does not automatically lose its allure just because it is placed inside a frame of moral criticism. An author can arrange for a character to fail in the end, but cannot fully control whom the reader falls in love with along the way."],
      ["到了《恐惧与战栗》，这种令人不安的技巧变得更加严肃。亚伯拉罕带着以撒前往摩利亚山，故事的结局早已为人所知，克尔凯郭尔却偏偏不肯让读者轻松抵达结局。他反复想象父亲与儿子之间可能发生的沉默、误解与恐惧。圣经中简短的叙述，被他展开成一系列几乎令人窒息的心理场景。真正可怕的不是我们不知道以撒最终会不会活下来，而是即使知道结局，也无法消除那个父亲举刀时的恐怖。克尔凯郭尔在这里表现出的，与其说是哲学家的论证能力，不如说是小说家延长一个瞬间的能力。",
       "In *Fear and Trembling*, this unsettling skill becomes more solemn. Abraham takes Isaac to Mount Moriah; the ending of the story is long known, yet Kierkegaard will not let the reader arrive at it easily. He imagines again and again the silence, misunderstanding and fear that might pass between father and son. The brief biblical narrative is unfolded into a series of almost suffocating psychological scenes. What is truly terrible is not that we do not know whether Isaac will survive, but that even knowing the ending, we cannot dispel the horror of the father raising the knife. What Kierkegaard shows here is less a philosopher’s power of argument than a novelist’s power to stretch a single moment."],
      ["不过，我对他的宗教激情始终保持距离。克尔凯郭尔笔下的信仰常常要求一种近乎绝对的内在诚实，仿佛任何妥协都可能构成自我欺骗。这种要求固然令人敬佩，却也容易使普通生活显得可疑。人需要工作、维持关系、处理琐事，也需要某种不那么深刻的快乐。并不是每一次犹豫都意味着绝望，也不是每一种安逸都意味着精神上的堕落。有时我甚至觉得，克尔凯郭尔过于擅长发现生活中的虚伪，以至于不太愿意承认生活也可以在不那么彻底的状态下值得肯定。",
       "Still, I have always kept my distance from his religious passion. The faith in Kierkegaard’s writing often demands an almost absolute inner honesty, as if any compromise might amount to self-deception. This demand is admirable, but it easily makes ordinary life seem suspect. People need to work, keep relationships going, and deal with trivial matters, and they also need a kind of joy that is not so deep. Not every hesitation means despair, and not every comfort means spiritual decay. Sometimes I even feel that Kierkegaard is so good at spotting hypocrisy in life that he is rather unwilling to admit that life can be worth affirming in a less thoroughgoing state."],
      ["他对哥本哈根公众生活的讽刺，也带有这种令人又爱又恨的气质。他厌恶人云亦云，反对把个人判断交给抽象的公众，却又极其在意公众如何理解自己。他与报刊的冲突、对丹麦国教会的激烈批评，以及反复使用笔名的写作方式，都使他的作者形象显得格外矛盾。他一方面希望人们摆脱社会认可，另一方面又不断通过写作与整个社会争辩。或许正是这种无法真正置身事外的处境，使他的文字具有一种异常紧张的生命力。",
       "His satire of public life in Copenhagen has the same love-and-hate quality. He loathes people who simply echo others and opposes handing personal judgment over to an abstract public, yet he cares enormously about how the public understands him. His clash with the press, his fierce criticism of the Danish state church, and his habit of writing under pseudonyms all make his image as an author peculiarly contradictory. On the one hand he wants people to free themselves from social approval; on the other he keeps arguing with the whole of society through his writing. Perhaps it is exactly this inability to stand truly outside that gives his words their unusually tense vitality."],
      ["布雷塔尔的选集也因此有一种意想不到的效果。单独阅读克尔凯郭尔的某一部著作，很容易被它独特的语调所笼罩；连续阅读不同作品的节选，却能发现他并非始终以同一种方式思考。他可以幽默得近乎刻薄，也可以虔诚得令人难以接近；有时像心理学家，有时像剧作家，有时又像一位对整个时代都失去耐心的布道者。这种变化使他比任何关于存在主义先驱的概括都更加有趣。",
       "Bretall’s selection therefore has an unexpected effect. Reading a single work by Kierkegaard, one is easily enveloped by its distinctive tone; reading excerpts from different works in a row, one finds that he does not always think in the same way. He can be humorous to the point of cruelty, and pious to the point of being unapproachable; sometimes like a psychologist, sometimes like a dramatist, and sometimes like a preacher who has lost patience with his entire age. This variety makes him more interesting than any summary of him as a forerunner of existentialism."],
      ["当然，选集也有明显的缺陷。克尔凯郭尔的作品非常依赖文体、人物身份与上下文，摘录往往使原本缓慢展开的反讽失去部分效果。尤其当不同笔名的文字被统一放在“克尔凯郭尔思想”的标题之下时，读者很容易忘记，那些说话的人并不完全等同于作者本人。布雷塔尔的编排提供了一条方便的阅读路径，却难免使这些本来充满歧义的文本显得过于连贯。对于这样一位擅长制造误解的作家而言，过于清楚的介绍反而可能是一种损失。",
       "Of course, an anthology has obvious flaws. Kierkegaard’s work depends heavily on style, the identity of the speaker and context, and excerpts often rob his slowly unfolding irony of part of its effect. Especially when texts by different pseudonyms are placed under the single heading of “Kierkegaard’s thought,” the reader easily forgets that those who speak are not entirely the same as the author himself. Bretall’s arrangement offers a convenient path through the work, but it inevitably makes these originally ambiguous texts seem too coherent. For a writer so good at producing misunderstanding, an overly clear introduction may in fact be a loss."],
      ["我不太相信克尔凯郭尔能够教人怎样生活。他太极端，太敏感，也太容易将普通人的妥协理解为精神上的失败。但我很欣赏他观察人的能力，尤其是他如何识破那些听起来高尚、实际上却十分可疑的自我解释。他笔下的人物总能为自己的行为找到漂亮的理由，而读者往往在嘲笑他们之后，才隐约发现自己也说过类似的话。",
       "I do not quite believe Kierkegaard can teach anyone how to live. He is too extreme, too sensitive, and too ready to read ordinary people’s compromises as spiritual failure. But I greatly admire his ability to observe people, especially the way he sees through self-explanations that sound noble and are in fact highly suspect. The characters he writes can always find fine reasons for their actions, and the reader often only after laughing at them dimly realizes that they too have said something similar."],
      ["读完这本选集，我没有获得一种更加坚定的生活信念，倒是对那些过于坚定地解释生活的人多了几分怀疑，包括克尔凯郭尔本人。他能够如此精确地描写人的自欺，却未必能够免于自己的执念；能够如此严厉地要求真诚，却也需要借助无数虚构身份表达自己。这些矛盾并没有削弱他的作品，反而使他不再只是哲学史上一座令人敬畏的纪念碑。",
       "Having finished this anthology, I did not gain a firmer conviction about how to live; I became, rather, a little more suspicious of those who explain life too firmly, Kierkegaard himself included. He can describe human self-deception so precisely, yet may not be free of his own fixations; he can demand sincerity so severely, yet needs countless invented identities to express himself. These contradictions do not weaken his work. They keep him from being merely an awe-inspiring monument in the history of philosophy."],
      ["我想，我最终喜欢的并不是克尔凯郭尔给出的答案，而是他那些有些刻薄、偶尔可笑、时常令人不舒服的句子。他是那种读起来并不总让人愉快，却很难彻底忘记的作家。一本好的选集未必需要让我们同意作者，甚至不必使我们更加喜欢他。它只需要让我们在合上书后，仍然能够听见那个人不肯停止的声音。",
       "In the end, I think, what I like is not the answers Kierkegaard gives but his sentences, a little caustic, occasionally comic, often uncomfortable. He is the kind of writer who is not always a pleasure to read, yet is hard to forget altogether. A good anthology need not make us agree with its author, or even like him more. It only needs to let us, after closing the book, still hear that person’s voice that will not stop."]
    ]
  },
  {
    "date": "2019-02-14",
    "title": "Wealth Has Its Own Time",
    "slug": "wealth-has-its-own-time",
    "category": "Economics",
    "book": {
      "cover": "le_capital_au_xxie_siecle.jpg",
      "title": "Le Capital au XXIe siècle",
      "author": "Thomas Piketty",
      "language": "French",
      "country": "France",
      "original": "French",
      "lines": [
        "Economics · Éditions du Seuil, 2013",
        "Two centuries of tax, inheritance and income records, and the argument that when capital grows faster than the economy, the past comes to rule the future."
      ]
    },
    "place": "于加州桑尼维尔\nSunnyvale, CA",
    "languages": ["Chinese", "English"],
    "prose": [
      ["每个月收到租金的时候，我常常会想到一个简单的事实：这笔收入并不要求我在那个时刻工作。房客支付租金，我持有房产，收入便按照既定的契约发生。与此同时，我的工资却来自另一种完全不同的交换：必须持续投入时间、知识与精力，才能获得报酬。两种收入最终都以美元的形式进入账户，但它们与我的生活之间的关系截然不同。劳动需要我不断参与，资本却能够在我缺席的时候继续运转。读托马斯·皮凯蒂的《二十一世纪资本论》，我第一次如此清晰地意识到，财富不仅意味着购买力，也意味着一个人与时间之间的关系。",
       "Each month when the rent arrives, I often think of a simple fact: this income does not require me to be working at that moment. The tenant pays, I own the property, and the income occurs according to the agreed contract. My salary, meanwhile, comes from a completely different kind of exchange: I must keep investing time, knowledge and energy to be paid. Both incomes end up in my account in dollars, yet their relationship to my life is entirely different. Labor needs me to take part continuously, while capital can keep running in my absence. Reading Thomas Piketty’s *Capital in the Twenty-First Century*, I realized for the first time so clearly that wealth means not only purchasing power but also a person’s relationship with time."],
      ["皮凯蒂最著名的公式是 *r > g*，即资本回报率在某些长期历史条件下高于经济增长率。当已经积累的财富能够比整体经济更快地增长，过去便可能逐渐获得支配未来的力量。皮凯蒂通过几个世纪的税收、遗产与收入资料，展示财富集中如何在不同制度与历史条件下发生变化。尤其令人印象深刻的是，二十世纪中叶相对平等的社会并非资本主义自然发展的终点，而在很大程度上是战争、通货膨胀、税收改革与特殊经济增长条件共同塑造的结果。我们今天习以为常的机会平等观念，或许建立在一段并不寻常的历史经验之上。",
       "Piketty’s most famous formula is *r > g*: under certain long-run historical conditions, the rate of return on capital exceeds the rate of economic growth. When accumulated wealth can grow faster than the economy as a whole, the past may gradually gain the power to govern the future. Using centuries of tax, inheritance and income records, Piketty shows how the concentration of wealth has changed under different institutions and historical conditions. What impressed me most is that the relatively equal societies of the mid-twentieth century were not the natural end point of capitalism, but to a large extent the product of war, inflation, tax reform and unusual conditions of growth. The idea of equal opportunity we now take for granted may rest on a historical experience that was far from ordinary."],
      ["这本书最令我着迷的，并不是它对富人的批判，而是它使我能够从自己的财富积累过程中辨认出某种更普遍的经济机制。我拥有两处出租房产，也持续投资股票与指数基金，同时依然依靠专业工作获得主要的新增收入。对我而言，劳动与资本并不是两个彼此对立的世界，而是一条正在发生的转换过程：通过劳动获得收入，再将收入转化为资产，希望有一天能够减少对劳动的依赖。这个过程在个人层面完全合理，甚至可以说是一种审慎的生活安排。但当我从皮凯蒂的历史视角重新观察它时，便发现其中包含一个值得认真思考的问题：**为什么一个人获得自由的理想方式，往往是逐渐拥有不必亲自劳动也能产生收入的资产？**",
       "What fascinated me most about the book is not its critique of the rich, but that it let me recognize, in my own accumulation of wealth, a more general economic mechanism. I own two rental properties and keep investing in stocks and index funds, while still relying on my professional work for most of my new income. For me, labor and capital are not two opposed worlds but a conversion in progress: earn income through labor, turn it into assets, and hope one day to depend less on labor. At the personal level this process is perfectly reasonable, even a prudent way to arrange one’s life. But when I look at it again from Piketty’s historical perspective, I find a question in it worth thinking about seriously: **why is the ideal way for a person to gain freedom so often to come to own assets that produce income without one’s own labor?**"],
      ["房地产使这种矛盾尤其具体。对于我而言，出租房产是一种长期投资，也是家庭财务安全的重要来源。租金能够帮助承担其他住房开支，使我在职业选择与未来规划上拥有更大的余地。但对于租客而言，同一笔租金首先是一项必须持续支付的生活成本。房产增值可能增加我的净资产，却也可能意味着后来进入住房市场的人需要承担更高的价格。我并不因此认为房东的收入天然缺乏正当性：房产需要资本投入、维护、承担风险，也提供真实的居住服务。然而，同一项资产可以同时成为一个家庭获得财务自由的工具，以及另一个家庭难以积累财富的原因。皮凯蒂的分析使我无法再仅仅从投资回报的角度理解房价与租金。",
       "Real estate makes this tension especially concrete. For me, a rental property is a long-term investment and an important source of my family’s financial security. The rent helps cover other housing costs and gives me more room in career choices and plans for the future. For the tenant, though, the same rent is first of all a living cost that must be paid continuously. Appreciation may raise my net worth, but may also mean that those who enter the housing market later must bear higher prices. I do not therefore think a landlord’s income lacks legitimacy by nature: property takes capital, upkeep and risk, and it provides a real service of housing. Yet the same asset can be a tool for one family’s financial freedom and the reason another family cannot accumulate wealth. Piketty’s analysis means I can no longer understand house prices and rents purely in terms of investment return."],
      ["我对股票投资也有类似的感受。我习惯于定期投入资金，分散配置资产，并相信长期持有能够分享经济增长带来的收益。这些原则具有充分的财务合理性，也让我能够通过相对纪律化的方式积累财富。但复利最重要的前提，并不是投资者有多么聪明，而是他首先拥有可以长期不动用的本金。对于收入足以覆盖生活开支的人，市场下跌可能意味着继续买入的机会；对于缺少储蓄、随时需要支付房租或医疗费用的人，同样的下跌却可能迫使他在最不利的时候出售资产。两个人即使面对完全相同的市场，也并不真正拥有相同的投资机会。**财富最重要的优势之一，或许不是它能够获得更高的回报，而是它允许持有者等待。**",
       "I feel similarly about stock investing. I am used to putting money in regularly, spreading my assets, and believing that holding for the long term shares in the gains of economic growth. These principles are financially sound and let me build wealth in a fairly disciplined way. But the most important precondition of compounding is not how clever the investor is, but that he first has principal he can leave untouched for a long time. For someone whose income covers living expenses, a market fall may be a chance to keep buying; for someone with no savings who may at any moment need to pay rent or medical bills, the same fall may force a sale at the worst time. Two people facing exactly the same market do not really have the same investment opportunity. **One of the greatest advantages of wealth may not be that it earns higher returns, but that it allows its holder to wait.**"],
      ["皮凯蒂引用巴尔扎克《高老头》的部分，因此让我格外难忘。伏脱冷向年轻的拉斯蒂涅解释，依靠勤奋与才华获得的职业收入，远远不如通过婚姻取得一笔可观的财产。在那个世袭财富占据主导地位的社会，人生的经济前途往往早已被家庭背景决定。现代社会当然不同。教育、专业能力与技术创新确实创造了真实的社会流动机会，我自己的职业发展也让我相信，劳动与知识能够显著改变一个人的经济处境。但我同样清楚，随着资产逐渐积累，我未来的生活将越来越少地取决于下一年的工资，而越来越多地取决于过去已经获得的财富。巴尔扎克笔下那个以继承财产决定命运的世界，并没有完全消失，只是与现代社会的职业竞争并存。",
       "The passages where Piketty quotes Balzac’s *Père Goriot* were therefore especially memorable. Vautrin explains to the young Rastignac that the income from a profession earned by diligence and talent is far less than a considerable fortune obtained through marriage. In that society, dominated by inherited wealth, a person’s economic future was often already decided by family background. Modern society is of course different. Education, professional skill and technological innovation do create real opportunities for mobility, and my own career has convinced me that labor and knowledge can markedly change a person’s economic situation. But I am equally aware that as my assets accumulate, my future life will depend less and less on next year’s salary and more and more on wealth already gained. Balzac’s world, where inherited property decides one’s fate, has not entirely disappeared; it coexists with the professional competition of modern society."],
      ["这也使我对所谓财务自由产生了一种复杂的理解。我希望通过长期投资，在相对年轻的时候获得不必完全依赖工资的生活。这个目标对我而言，不只是消费更多商品，而是拥有选择如何使用时间的权利：可以继续工作，也可以减少工作；可以追求新的兴趣，而不必总是首先计算它是否能够带来收入。但皮凯蒂提醒我，这种自由并不是单纯由个人意志创造的。它依赖资本市场、产权制度、租赁关系与长期的经济增长，也依赖我已经拥有的教育、职业机会和积累本金的能力。我的努力是真实的，但使努力能够转化为持续财富的社会条件，同样真实。",
       "This also gave me a complicated understanding of so-called financial freedom. I hope that through long-term investing I can, while relatively young, live without depending entirely on a salary. For me this goal is not only about consuming more, but about having the right to choose how to use my time: to keep working or to work less; to pursue new interests without always first calculating whether they will bring income. But Piketty reminds me that this freedom is not created by individual will alone. It depends on capital markets, property rights, rental relationships and long-run economic growth, and also on the education, career opportunities and capacity to accumulate principal that I already have. My effort is real, but so are the social conditions that let effort turn into lasting wealth."],
      ["不过，我也不愿意因此接受一种过于简单的财富批判。资本并非只是从劳动者手中转移收入的工具，它也支持企业投资、技术创新、住房供给与经济活动。资本回报包含风险补偿，并不总是稳定或必然的。皮凯蒂的 *r > g* 具有重要的历史解释力，却不足以独自决定财富分配的全部结果。税收、储蓄、继承、资产价格与制度设计同样重要。尤其在今天，依靠专业劳动积累股票资产的人，与依靠庞大家族遗产生活的人，虽然都拥有资本收入，却未必处于相同的社会位置。若将所有资本所有者视为一个同质的阶级，反而可能忽略现代财富结构中值得分析的差异。",
       "Still, I am unwilling to accept an overly simple critique of wealth. Capital is not only a tool for transferring income away from workers; it also supports corporate investment, technological innovation, housing supply and economic activity. Returns on capital include compensation for risk, and are not always stable or certain. Piketty’s *r > g* has great historical explanatory power, but cannot alone determine every outcome of wealth distribution. Taxes, saving, inheritance, asset prices and institutional design matter just as much. Today in particular, someone who has built up stock holdings through professional work and someone living on a vast family inheritance both have capital income, yet do not necessarily stand in the same social position. Treating all owners of capital as one homogeneous class may overlook differences in modern wealth structures that deserve analysis."],
      ["我对皮凯蒂提出的累进资本税与国际税收协调，也因此既理解其动机，又保留对具体实施方式的疑问。财富过度集中可能使经济优势逐渐转化为教育、政治与代际机会上的优势，这确实值得公共政策干预。但税收制度也需要考虑资产估值、流动性、投资激励与跨境执行的困难。更重要的是，税收不应成为讨论机会平等的唯一语言。住房供给、教育机会、公共服务与劳动者的议价能力，同样决定一个没有继承财富的人能否逐渐积累资产。真正值得追求的，不应只是限制已经富裕的人能够拥有多少，而是使更多人有现实机会获得经济安全与生活自主权。",
       "So with Piketty’s proposed progressive tax on capital and international tax coordination, I understand the motive yet keep questions about the practical means. Excessive concentration of wealth may turn economic advantage into advantage in education, politics and opportunities across generations, and that does deserve public-policy intervention. But a tax system must also consider asset valuation, liquidity, investment incentives and the difficulty of cross-border enforcement. More important, taxation should not be the only language for discussing equal opportunity. Housing supply, educational opportunity, public services and workers’ bargaining power likewise decide whether someone without inherited wealth can gradually accumulate assets. What is truly worth pursuing is not merely to limit how much the already rich can own, but to give more people a real chance at economic security and autonomy over their lives."],
      ["从写作方式来看，《二十一世纪资本论》并不是一本特别优雅的书。它冗长，充满统计表格与历史资料，某些论证也反复出现。但我反而欣赏这种近乎固执的实证态度。皮凯蒂没有将不平等仅仅写成一个道德问题，而是努力使它成为能够被历史检验、被公共讨论的经济事实。他对巴尔扎克与简·奥斯汀的引用，则让数字重新回到人的生活之中：财产决定婚姻，遗产改变命运，收入差异塑造人与人之间的关系。那些在统计表格中显得抽象的财富分配，在文学作品里成为人物能够爱谁、住在哪里，以及是否有资格拒绝某种生活的具体条件。",
       "As writing, *Capital in the Twenty-First Century* is not an especially elegant book. It is long, full of statistical tables and historical material, and some arguments recur. But I rather admire this almost stubborn empirical attitude. Piketty does not write inequality up as merely a moral problem, but works to make it an economic fact that can be tested against history and debated in public. His quotations from Balzac and Jane Austen bring the numbers back into human lives: property decides marriages, inheritance changes fates, differences in income shape relations between people. The distribution of wealth, abstract in a statistical table, becomes in literature the concrete conditions of whom a character can love, where they can live, and whether they are entitled to refuse a certain life."],
      ["我并不因为读了皮凯蒂，就准备放弃自己的投资计划。相反，我仍然相信积累资产是一种合理而必要的个人选择，也仍然希望通过资本收入获得更多自由。但我不再愿意将这种选择的成功简单理解为个人能力的证明。一个人能够通过劳动逐渐成为资本所有者，说明社会流动仍然存在；但如果只有少数人能够完成这种转换，便不能据此断言整个制度已经足够公平。",
       "Having read Piketty, I am not about to give up my investment plans. On the contrary, I still believe that accumulating assets is a reasonable and necessary personal choice, and I still hope to gain more freedom through capital income. But I am no longer willing to read the success of this choice simply as proof of personal ability. That a person can gradually become an owner of capital through labor shows that social mobility still exists; but if only a few can complete this conversion, one cannot conclude from it that the whole system is fair enough."],
      ["如今我越来越觉得，财富真正改变的并不是一个人可以买多少东西，而是他面对生活时拥有多少拒绝的余地。可以拒绝一份不合适的工作，可以承担一次失败，可以等待市场恢复，也可以在没有收入的日子里继续维持体面的生活。这些自由对我而言都十分珍贵。但也正因为我知道它们有多么珍贵，才更难忽略那些缺少资产的人为什么不得不接受自己原本不愿接受的条件。",
       "I increasingly feel that what wealth really changes is not how much a person can buy, but how much room to refuse he has in facing life. He can refuse an unsuitable job, bear a failure, wait for the market to recover, and keep living decently through days without income. All these freedoms are precious to me. But precisely because I know how precious they are, it is harder to ignore why people without assets must accept conditions they would otherwise not accept."],
      ["皮凯蒂让我重新理解了自己的财务目标：**我希望资本最终能够使我不必为了生存而持续出售时间；但一个值得追求的社会，不应该要求每个人先成为资本所有者，才能获得有尊严地安排自己时间的权利。**",
       "Piketty made me understand my own financial goal anew: **I hope capital will eventually let me stop continually selling my time in order to survive; but a society worth pursuing should not require everyone to become an owner of capital before gaining the right to arrange their own time with dignity.**"]
    ]
  },
  {
    "date": "2012-07-27",
    "title": "What Does a Child Who Won’t Go to School Refuse?",
    "slug": "the-child-who-would-not-go-to-school",
    "category": "Novel",
    "book": {
      "cover": "summer_rain.jpg",
      "title": "夏雨 (Summer Rain)",
      "author": "玛格丽特·杜拉斯 Marguerite Duras",
      "language": "Chinese",
      "country": "France",
      "original": "French",
      "lines": [
        "Novel · Chinese translation of La Pluie d’été, 1990",
        "Ernesto, a boy from an immigrant family, refuses to go to school yet reads with astonishing ease."
      ]
    },
    "place": "于越南美奈\nMui Ne, Vietnam",
    "languages": ["Chinese", "English"],
    "prose": [
      ["正值炎热夏天的今天，我在越南美奈读《夏雨》，试图理解为什么杜拉斯会对一个拒绝学校教育、却拥有惊人阅读能力的孩子如此着迷。",
       "On this hot summer day I am reading *La Pluie d’été* in Mui Ne, Vietnam, trying to understand why Duras is so fascinated by a child who refuses schooling yet has an astonishing ability to read."],
      ["埃内斯托真正拒绝的并不是知识，而是知识必须经过某种权威认证才能成立的秩序。他那句著名的宣言，不愿意去学校，因为学校教给他不知道的事情，表面上近乎荒谬，实际上却动摇了现代教育最根本的前提：一个人究竟应该如何认识世界，又由谁来决定什么值得认识？",
       "What Ernesto truly refuses is not knowledge but an order in which knowledge counts only once some authority has certified it. His famous declaration, that he does not want to go to school because school would teach him things he does not know, seems almost absurd on the surface, yet it shakes the most basic premise of modern education: how should a person come to know the world, and who decides what is worth knowing?"],
      ["杜拉斯没有把埃内斯托塑造成传统意义上的天才儿童。他生活在贫困的移民家庭，父母的语言、文化和社会地位都处于法国主流社会的边缘。这个孩子的特殊之处，恰恰在于他无法被既有的教育制度完整解释。他的知识既不完全来自学校，也不服从学校的分类。",
       "Duras does not shape Ernesto into a gifted child in the conventional sense. He lives in a poor immigrant family whose language, culture and social standing sit at the margins of mainstream French society. What is special about the boy is precisely that the existing education system cannot fully explain him. His knowledge does not come entirely from school, nor does it obey school’s categories."],
      ["而我现在在越南阅读这部小说，又有一种微妙的错位。杜拉斯的文学世界始终与法属印度支那的殖民记忆纠缠在一起，虽然《夏雨》的故事发生在法国，但她笔下那种对语言、身份与权威的不信任，似乎始终带着殖民地生活留下的痕迹。",
       "Reading the novel here in Vietnam, I feel a subtle displacement. Duras’s literary world is always entangled with the colonial memory of French Indochina, and although *La Pluie d’été* is set in France, the distrust of language, identity and authority in her writing seems always to carry a trace left by colonial life."],
      ["我们花费漫长的一生学习如何成为一个被社会承认的聪明人，却很少追问，这个社会究竟允许我们以多少种方式理解世界。",
       "We spend a long life learning how to become clever people recognized by society, yet seldom ask in how many ways this society actually allows us to understand the world."],
      ["杜拉斯最有意思的地方，是她始终没有替埃内斯托回答这个问题。",
       "What is most interesting about Duras is that she never answers the question on Ernesto’s behalf."]
    ]
  },
  {
    "date": "2012-06-30",
    "title": "Nothing Went Wrong, and Yet the Zest Was Gone",
    "slug": "nothing-went-wrong",
    "category": "Novel",
    "book": {
      "cover": "little_horses_tarquinia.jpg",
      "title": "塔尔奎尼亚的小马 (The Little Horses of Tarquinia)",
      "author": "玛格丽特·杜拉斯 Marguerite Duras",
      "language": "Chinese",
      "country": "France",
      "original": "French",
      "lines": [
        "Novel · Chinese translation of Les Petits Chevaux de Tarquinia, 1953",
        "French holidaymakers idle on the Italian coast while a young man’s death hangs over the summer."
      ]
    },
    "place": "于中国北京\nBeijing, China",
    "languages": ["Chinese", "English"],
    "prose": [
      ["我现在正处于一个不断期待未来的年纪，下个月我就要去杜拉斯笔下的印度支那旅行了，之后就是令人期待的留学美国的生活。一开始读的时候，我对小说中那些在意大利海滨度假、整日闲谈、喝酒、游泳，却始终无法摆脱沉闷的成年人，并没有多少同情。他们拥有闲暇、旅行和爱情的可能性，为什么仍然如此疲惫？",
       "I am at an age of constant anticipation. Next month I will travel to the Indochina of Duras’s writing, and after that comes the much-awaited life of studying in America. When I began reading, I had little sympathy for the adults in the novel who holiday on the Italian coast, chatting, drinking and swimming all day, yet never shake off their dullness. They have leisure, travel and the possibility of love, so why are they still so weary?"],
      ["杜拉斯的高明之处，正在于她没有为这种疲惫安排一个明确的原因。",
       "Duras’s brilliance lies precisely in not giving this weariness a clear cause."],
      ["小说中，一群法国游客在意大利海边度假。炎热的天气、重复的谈话、难以实现的欲望，构成了一种几乎静止的生活。与此同时，一个年轻排雷工人的死亡及其父母对遗体的守候，又让这个看似轻浮的度假世界突然显露出残酷的底色。",
       "In the novel, a group of French tourists holiday by the sea in Italy. The heat, the repeated conversations and the desires that cannot be fulfilled make up an almost motionless life. At the same time, the death of a young mine-clearing worker and his parents’ vigil over his body suddenly expose the cruel undertone of this seemingly frivolous holiday world."],
      ["这两组人物之间没有真正的交流。游客们讨论爱情、婚姻与离开的可能，死者的父母却固执地守着儿子的遗体。死亡并没有使活着的人获得启示，甚至未能真正打断他们的日常生活。",
       "There is no real communication between the two groups. The tourists discuss love, marriage and the possibility of leaving, while the dead man’s parents stubbornly keep watch over their son’s body. Death does not bring the living any revelation; it does not even truly interrupt their daily lives."],
      ["后来又一次复读，我才开始理解这种并置的力量。",
       "Only when I read it again later did I begin to understand the force of this juxtaposition."],
      ["现代生活最奇怪的地方，或许不是我们缺少选择，而是选择太多，反而让任何一种生活都显得可以被替代。旅行可以换一个国家，工作可以换一家公司，关系可以重新开始，但人始终无法确认，究竟哪一种改变能够真正改变自己。",
       "The strangest thing about modern life may not be that we lack choices, but that we have so many that any one life seems replaceable. We can travel to another country, change companies, start a relationship anew, yet we can never be sure which change will truly change us."],
      ["小说中的萨拉面对另一段爱情的诱惑，却迟迟无法迈出决定性的一步。杜拉斯并不急于判断她是懦弱、忠诚，还是已经失去了爱的能力。她只是让欲望在炎热的空气里缓慢发酵，直到读者发现，真正令人窒息的并不是婚姻，而是人对自身欲望的不确定。",
       "Faced with the temptation of another love, Sara in the novel cannot take the decisive step. Duras is in no hurry to judge whether she is timid, faithful, or has already lost the capacity to love. She simply lets desire ferment slowly in the hot air, until the reader finds that what truly suffocates is not marriage but a person’s uncertainty about her own desire."],
      ["《塔尔奎尼亚的小马》是一部几乎拒绝情节推进的小说。它最深刻的地方，也恰恰在于这种拒绝。",
       "*Les Petits Chevaux de Tarquinia* is a novel that almost refuses to advance its plot. What is deepest about it lies precisely in that refusal."],
      ["年轻时，我们以为人生的痛苦来自无法得到想要的东西。后来才发现，更难解释的是，当我们终于拥有了选择的自由，却依然不知道自己想去哪里。",
       "When young, we think life’s pain comes from not getting what we want. Only later do we find the harder thing to explain: when we finally have the freedom to choose, we still do not know where we want to go."]
    ]
  },
  {
    "date": "2014-04-15",
    "title": "History Has No Rehearsal",
    "slug": "history-has-no-rehearsal",
    "category": "History",
    "book": {
      "cover": "sternstunden.jpg",
      "title": "人类的群星闪耀时 (Sternstunden der Menschheit)",
      "author": "斯蒂芬·茨威格 Stefan Zweig",
      "language": "Chinese",
      "country": "Austria",
      "original": "German",
      "lines": [
        "History · Chinese translation of Sternstunden der Menschheit, 1927",
        "Historical miniatures of fateful moments, among them Napoleon’s defeat at Waterloo."
      ]
    },
    "place": "于华盛顿州西雅图\nSeattle, WA",
    "languages": ["Chinese", "English"],
    "prose": [
      ["西雅图的四月仍然阴雨不断。华盛顿大学的樱花已经开过，雨水把最后几片花瓣冲进路边的排水沟。下午从图书馆出来，咖啡馆里坐满了学生。有人准备考试，有人修改简历，有人讨论暑期实习。每个人都在为尚未发生的事情做准备，仿佛只要准备得足够充分，未来便会按照预想的方式展开。",
       "April in Seattle is still rainy. The cherry blossoms at the University of Washington have come and gone, and the rain has washed the last petals into the gutters. Leaving the library in the afternoon, I find the cafés full of students. Some are preparing for exams, some revising résumés, some discussing summer internships. Everyone is preparing for something that has not yet happened, as if, with enough preparation, the future would unfold just as imagined."],
      ["我刚读完茨威格的《人类的群星闪耀时》，却对这本书产生了一种复杂的反感。",
       "I have just finished Zweig’s *Sternstunden der Menschheit*, and yet I feel a complicated aversion to the book."],
      ["这种反感主要来自格鲁希。",
       "That aversion comes mainly from Grouchy."],
      ["1815年6月18日，拿破仑与威灵顿在滑铁卢决战，格鲁希率领法军部队追击普鲁士军队。远处传来炮声，部下建议向主战场靠拢，他却坚持执行既定命令。茨威格把这个决定写成拿破仑帝国覆灭的关键时刻：一个缺乏独立判断力的将领，因为没能及时行动，错过了改变欧洲历史的机会。",
       "On 18 June 1815, Napoleon and Wellington fight the decisive battle at Waterloo, while Grouchy leads a French force in pursuit of the Prussians. Cannon fire sounds in the distance, his subordinates urge him to move toward the main battle, but he insists on carrying out his standing orders. Zweig writes this decision as the crucial moment in the fall of Napoleon’s empire: a general without independent judgment, failing to act in time, misses the chance to change the history of Europe."],
      ["初读时，我几乎也被这种解释说服。毕竟，我们已经知道滑铁卢的结局，知道普鲁士军队最终赶到战场，也知道拿破仑再没有机会重建他的帝国。",
       "On first reading I was almost persuaded by this account. After all, we already know how Waterloo ends, that the Prussian army did reach the field, and that Napoleon never again had the chance to rebuild his empire."],
      ["但我很快意识到，自己其实站在一个极不公平的位置上。",
       "But I soon realized that I was standing in a very unfair position."],
      ["我知道格鲁希不知道的事情。",
       "I know what Grouchy did not."],
      ["他听见炮声，却不知道主战场的完整态势；他知道自己奉命追击普鲁士军队，却无法确定擅自改变部署会带来什么后果。他必须在信息残缺的情况下行动，而我却可以在两百年后，舒舒服服地坐在西雅图的图书馆里，根据已经发生的结局判断他的对错。",
       "He hears the guns but does not know the whole picture of the main battle; he knows he was ordered to pursue the Prussians but cannot be sure what would follow if he changed the deployment on his own. He must act on incomplete information, while I, two hundred years later, can sit comfortably in a Seattle library and judge his right and wrong by an outcome that has already happened."],
      ["茨威格的叙述正是利用了这种不对称。",
       "Zweig’s narration exploits precisely this asymmetry."],
      ["他把格鲁希的谨慎写成平庸，把服从写成怯懦，把没有发生的另一种可能写成几乎触手可及的胜利。然而，倘若格鲁希真的违抗命令，最终仍然失败，历史是否又会责备他轻率、鲁莽、不懂得军事纪律？",
       "He writes Grouchy’s caution as mediocrity, his obedience as cowardice, and the possibility that never happened as a victory almost within reach. Yet had Grouchy truly disobeyed his orders and still failed, would history not blame him for being rash, reckless and ignorant of military discipline?"],
      ["我开始怀疑，所谓历史人物的性格，究竟有多少是他们真正拥有的，又有多少是后人根据结果替他们塑造的。",
       "I began to wonder how much of a historical figure’s character is truly his own, and how much was shaped for him by later generations according to the result."],
      ["这种怀疑很快变得私人起来。",
       "This doubt soon became personal."],
      ["来到西雅图之前，我也曾面对过类似的选择。留在中国，沿着熟悉的教育和职业道路继续前进，还是离开已经建立的生活，去一个语言、制度和社会关系都不熟悉的国家重新开始？",
       "Before coming to Seattle I faced a similar choice. Should I stay in China and continue along the familiar path of education and career, or leave the life I had built and start over in a country whose language, institutions and social ties were all unfamiliar?"],
      ["当时我选择了后者。",
       "I chose the latter."],
      ["这个决定如今看来似乎很有勇气，但我知道事情并没有那么浪漫。我并不比其他人更清楚未来，只是对另一种生活抱有期待。申请学校、准备签证、购买机票，每一步都有具体的理由，却没有任何一步能够保证最终的结果。",
       "The decision now looks courageous, but I know it was not so romantic. I did not see the future any better than anyone else; I simply held hopes for a different life. Applying to schools, preparing a visa, buying a ticket, each step had its concrete reasons, and none guaranteed the final result."],
      ["如果说格鲁希面对的是远处传来的炮声，那么我面对的便是来自太平洋另一端的各种声音。",
       "If Grouchy faced cannon fire from afar, what I faced were all the voices from the other side of the Pacific."],
      ["有人说美国拥有更好的教育和职业机会，有人提醒我留学的成本与风险，也有人认为，既然已经熟悉中国的社会环境，何必重新开始。我无法验证这些判断，只能根据自己掌握的有限信息，决定相信哪一种未来。",
       "Some said America offered better education and career opportunities; some warned me of the cost and risk of studying abroad; others asked why start over when I already knew China’s social environment. I could not verify any of these judgments, and could only decide, from the limited information I had, which future to believe in."],
      ["更重要的是，来到美国并不意味着选择已经结束。",
       "More importantly, coming to America did not mean the choosing was over."],
      ["在华盛顿大学，每天都有人谈论实习、研究生申请、工作签证和科技公司的招聘。西雅图是一座擅长制造成功叙事的城市。微软、亚马逊，以及那些从车库或办公室起步的创业故事，让人相信人生存在某些决定性的机会，只要足够敏锐，就能够及时抓住。",
       "At the University of Washington, people talk every day about internships, graduate applications, work visas and tech-company hiring. Seattle is a city good at producing stories of success. Microsoft, Amazon, and startup tales that began in garages or offices make one believe that life holds certain decisive opportunities, which can be seized in time if one is sharp enough."],
      ["可是对于一个中国留学生而言，未来远没有这些故事描绘得那样清晰。",
       "But for a Chinese international student, the future is far less clear than those stories paint it."],
      ["我需要适应英语环境，需要理解美国大学与职场的规则，需要考虑毕业后的身份问题，也需要判断自己究竟适合怎样的职业道路。每一个决定都可能影响后面的选择，而我无法预先知道哪一个才是关键。",
       "I need to adapt to an English-speaking environment, understand the rules of American universities and workplaces, think about my status after graduation, and judge what career path really suits me. Every decision may affect the choices that follow, and I cannot know in advance which one is the key."],
      ["格鲁希至少有一份明确的军事命令。",
       "Grouchy at least had a clear military order."],
      ["我却发现，现代社会提供给年轻人的往往是许多彼此矛盾的命令：要追求理想，也要考虑现实；要敢于冒险，也要保持稳定；要独立思考，也要遵守规则；要尽早规划未来，却又要随时准备改变方向。",
       "What modern society offers the young, I find, is often many contradictory orders: pursue your ideals, but be realistic; dare to take risks, but stay stable; think independently, but follow the rules; plan the future early, yet be ready to change course at any time."],
      ["如果格鲁希的困境是服从还是违抗，那么我的困境则是，究竟应该服从哪一种关于成功的定义。",
       "If Grouchy’s dilemma was whether to obey or disobey, mine is which definition of success to obey."],
      ["我不愿意简单地把自己比作格鲁希。一个留学生的职业选择，与决定数万士兵命运的军事行动，当然不能相提并论。但我们面对着同一种认识上的限制：必须在未来尚未发生时做出决定，却很可能在未来发生以后，才被告知当初究竟应该怎样选择。",
       "I do not want to simply compare myself to Grouchy. A student’s career choice cannot of course be put beside a military operation that decided the fate of tens of thousands of soldiers. But we face the same epistemic limit: we must decide before the future has happened, and are likely to be told how we should have chosen only after it has."],
      ["茨威格没有充分承认这种限制。",
       "Zweig does not fully acknowledge this limit."],
      ["他太热衷于寻找那个本来可以拯救历史的瞬间，以至于忽略了身处其中的人并不知道自己正在参加一场决定性的考试。格鲁希在他的笔下，仿佛因为没有看见未来而犯下了错误。",
       "He is so eager to find the moment that might have saved history that he overlooks that the people inside it do not know they are sitting a decisive exam. In his pages, Grouchy seems to have erred by not seeing the future."],
      ["这是一种奇怪的历史道德。",
       "This is a strange kind of historical morality."],
      ["它要求一个人不仅对自己的行为负责，还要对自己无法预见的结果负责。",
       "It demands that a person answer not only for his actions but for consequences he could not foresee."],
      ["我尤其不喜欢茨威格把格鲁希的失败归结为平庸。因为平庸在这里几乎成了一种原罪：一个人只要没有表现出超越时代的洞察力，便不配得到历史的宽容。",
       "I especially dislike Zweig’s attributing Grouchy’s failure to mediocrity. Because mediocrity here becomes almost an original sin: a person who has not shown insight beyond his time does not deserve history’s forgiveness."],
      ["但如果每个人都必须拥有改变历史的能力，才能证明自己的判断值得尊重，那么绝大多数人的人生，从一开始便注定失败。",
       "But if everyone must have the power to change history to prove that their judgment deserves respect, then the lives of the great majority are doomed to failure from the start."],
      ["我想到自己每天在校园里见到的那些普通学生。有人为了学费兼职，有人不断修改简历，有人因为签证限制不得不放弃某些机会。我们努力了解这个社会的规则，并不是因为缺乏勇气，而是因为现实中的选择从来不发生在完全自由的条件下。",
       "I think of the ordinary students I see on campus every day. Some work part-time for tuition, some keep revising résumés, some must give up certain opportunities because of visa limits. We try to learn this society’s rules not for lack of courage, but because real choices never happen under completely free conditions."],
      ["有时候，遵守规则本身就是一种冒险；有时候，改变方向也未必意味着真正的独立。",
       "Sometimes following the rules is itself a risk; sometimes changing direction does not necessarily mean true independence."],
      ["格鲁希的问题因此比茨威格愿意承认的更加复杂。他的判断也许确实存在严重失误，但这并不意味着他的失败能够被简化为性格上的缺陷。一个人可能在充分履行自己职责的情况下做出错误决定，也可能因为偶然的成功而被误认为具有非凡的远见。",
       "Grouchy’s problem is therefore more complicated than Zweig is willing to admit. His judgment may indeed have been seriously mistaken, but this does not mean his failure can be reduced to a defect of character. A person may make a wrong decision while fully discharging his duty, and may be mistaken for a man of extraordinary foresight because of a chance success."],
      ["结果可以检验行动的后果，却不能自动证明行动者当时的判断是否合理。",
       "An outcome can test the consequences of an action, but cannot automatically prove whether the actor’s judgment at the time was reasonable."],
      ["这一点对我格外重要。",
       "This matters especially to me."],
      ["如果几年以后，我顺利毕业，在美国找到满意的工作，今天离开中国的决定大概会被解释为勇敢而明智。倘若最终没有留下来，同样的决定又可能被看作年轻时的一次冒险。",
       "If in a few years I graduate smoothly and find a satisfying job in America, today’s decision to leave China will probably be read as brave and wise. If I do not end up staying, the same decision may be seen as a youthful gamble."],
      ["但无论结局如何，都不应该改变我今天做出选择时的处境。",
       "But whatever the ending, it should not change the situation I am in as I choose today."],
      ["我无法要求现在的自己拥有未来的知识，也不愿意因为某个尚未发生的结果，提前否定此刻认真思考过的判断。",
       "I cannot ask my present self to have future knowledge, nor do I want to dismiss in advance, because of some outcome not yet come, a judgment I have thought through with care."],
      ["**历史没有彩排。真正的不公平，不是我们只有一次机会做出选择，而是后人总喜欢拿着已经写好的剧本，责备当事人为什么没有按照结局行动。**",
       "**History has no rehearsal. The real unfairness is not that we have only one chance to choose, but that later generations like to hold a script already written and blame the people involved for not acting according to the ending.**"],
      ["今晚西雅图仍然下雨。路灯映在湿漉漉的街道上，公交车停在路口，几个学生抱着书匆匆跑过。我明天还要去学校，还有没有读完的文章，还有许多暂时看不清结果的事情。",
       "It is still raining in Seattle tonight. Streetlights are reflected on the wet streets, a bus waits at the corner, and a few students run past with books in their arms. Tomorrow I must go to school; there are articles still unread, and many things whose outcomes I cannot yet see."],
      ["格鲁希听见炮声的时候，并不知道那是滑铁卢。",
       "When Grouchy heard the guns, he did not know it was Waterloo."],
      ["我走在西雅图的雨中，也不知道自己究竟正在走向哪里。",
       "Walking in the Seattle rain, I do not know where I am heading either."],
      ["我当然希望自己的选择最终能够得到好的结果。但如果有一天，它们没有通向我所期待的生活，我希望那时的自己至少能够记得：2014年春天，在西雅图做出这些决定的人，并不是一个明知结局却故意走错方向的傻瓜。",
       "Of course I hope my choices will in the end turn out well. But if one day they do not lead to the life I hope for, I want my later self at least to remember: the person who made these decisions in Seattle in the spring of 2014 was not a fool who knew the ending and deliberately went the wrong way."],
      ["他只是一个站在陌生国家、试图为自己寻找未来的年轻人。",
       "He was only a young man in a strange country, trying to find a future for himself."],
      ["正如两百年前的格鲁希，他只能根据当时听见的炮声，决定下一步该往哪里走。",
       "Like Grouchy two hundred years ago, he could only decide, by the guns he heard at the time, which way to go next."]
    ]
  },
  {
    "date": "2016-08-01",
    "title": "The Complicity of the Clear-Sighted",
    "slug": "complicity-of-the-clear-sighted",
    "category": "Novel",
    "book": {
      "cover": "burmese_days.jpg",
      "title": "Burmese Days",
      "author": "George Orwell",
      "language": "English",
      "country": "United Kingdom",
      "original": "English",
      "lines": [
        "Novel · English original, first published 1934",
        "In colonial Burma, the English timber merchant Flory is caught between the Club’s racism and his friendship with Dr. Veraswami."
      ]
    },
    "place": "于华盛顿州西雅图\nSeattle, WA",
    "languages": ["Chinese", "English"],
    "prose": [
      ["弗洛里最令人厌恶的地方，恰恰是他并不令人厌恶。",
       "What is most repellent about Flory is precisely that he is not repellent."],
      ["他鄙视英国人的傲慢，厌倦欧洲人俱乐部里粗俗的种族偏见，也能够欣赏缅甸文化。在一群自诩文明、实际上却狭隘而庸俗的殖民者中间，他几乎是唯一值得同情的人。",
       "He despises English arrogance, is weary of the vulgar racial prejudice of the European Club, and is able to appreciate Burmese culture. Among a set of colonists who think themselves civilized but are in fact narrow and coarse, he is almost the only one worth sympathy."],
      ["但我怀疑，这种同情恰恰是奥威尔设置的陷阱。",
       "But I suspect that this sympathy is precisely the trap Orwell sets."],
      ["弗洛里与印度医生维拉斯瓦米的友谊，是小说中最值得玩味的关系。医生希望获得欧洲人俱乐部的接纳，因为这种身份意味着声望，也意味着面对地方官员吴波金的政治陷害时多一层保护。弗洛里理解朋友的处境，却始终顾虑公开支持他所需付出的社会代价。",
       "Flory’s friendship with the Indian doctor, Veraswami, is the most intriguing relationship in the novel. The doctor hopes to be admitted to the European Club, because that status means prestige and also an added layer of protection against the political plotting of the local official U Po Kyin. Flory understands his friend’s position, but keeps worrying about the social cost of publicly supporting him."],
      ["这里存在一种根本的不对称：对弗洛里而言，种族平等是一项可以赞同、讨论甚至为之痛苦的原则；对维拉斯瓦米而言，它却关乎现实生活中的安全与尊严。",
       "There is a fundamental asymmetry here: for Flory, racial equality is a principle he can endorse, discuss and even suffer over; for Veraswami, it concerns safety and dignity in real life."],
      ["更令人不安的是，维拉斯瓦米并不是一个试图从根本上反抗帝国秩序的人。他对英国统治怀有近乎天真的信任，赞美英国带来的医学、教育与行政制度，甚至在与弗洛里的争论中，常常由他来为帝国辩护。",
       "More unsettling still, Veraswami is no one trying to resist the imperial order at its root. He holds an almost naive trust in British rule, praises the medicine, education and administrative system the British brought, and in his arguments with Flory it is often he who defends the empire."],
      ["一个英国人批判帝国，一个印度人赞美帝国。奥威尔安排的这种角色倒置，远比简单的压迫者与受害者对立更加尖锐。",
       "An Englishman criticizes the empire, an Indian praises it. Orwell’s reversal of roles is far sharper than a simple opposition of oppressor and victim."],
      ["维拉斯瓦米的忠诚当然可以被理解为殖民教育塑造的结果，但我不愿意轻易把他归结为一个缺乏独立意识的人。他知道英国人的认可意味着什么，也知道自己在殖民官僚体系中的地位有多么脆弱。他所追求的不是抽象的政治解放，而是在既定规则下尽可能保全自己的职业、声誉与生活。",
       "Veraswami’s loyalty can of course be understood as a product of colonial education, but I am unwilling to dismiss him as lacking independent consciousness. He knows what English recognition means and how fragile his position in the colonial bureaucracy is. What he seeks is not abstract political liberation but to preserve his career, reputation and life as far as possible under the given rules."],
      ["因此，他的沉默并不完全是思想上的屈服，也可能是一种被迫形成的生存理性。",
       "So his silence is not entirely an intellectual surrender; it may also be a survival rationality formed under compulsion."],
      ["真正值得追问的是：为什么维拉斯瓦米必须通过赞美统治者，才能证明自己值得被平等对待？",
       "The question really worth asking is: why must Veraswami praise his rulers in order to prove he deserves equal treatment?"],
      ["他拥有医学知识、专业能力和社会地位，却仍然需要一个英国朋友为自己提供政治庇护。他可以成为优秀的医生，可以接受西方教育，甚至可以比某些英国人更热情地维护帝国的价值观，却始终无法凭借这些成就摆脱种族身份带来的限制。",
       "He has medical knowledge, professional ability and social standing, yet still needs an English friend to give him political cover. He can be an excellent doctor, can accept a Western education, can even defend the empire’s values more warmly than some Englishmen, and still cannot, by these achievements, escape the limits imposed by his racial identity."],
      ["所谓文明与进步，在这里显露出令人难堪的矛盾：殖民者声称要通过教育使当地人获得现代文明，却又拒绝承认受过教育的当地人与自己拥有同等资格。",
       "Here so-called civilization and progress reveal an embarrassing contradiction: the colonizers claim to bring modern civilization to the natives through education, yet refuse to recognize that educated natives hold equal standing with themselves."],
      ["维拉斯瓦米越努力证明自己符合英国人的标准，越暴露出这些标准并不真正向他开放。",
       "The harder Veraswami works to prove he meets the English standards, the more it exposes that those standards are not truly open to him."],
      ["然而，小说并没有充分进入他的内心。",
       "Yet the novel does not fully enter his inner life."],
      ["我们听见他滔滔不绝地赞美英国，听见他与弗洛里争论，也看见他在吴波金的阴谋中逐渐失去地位，却很少有机会知道，在这些公开表达之外，他究竟如何理解自己的屈辱。",
       "We hear him praise England at length, hear him argue with Flory, and see him gradually lose his position in U Po Kyin’s plot, but we rarely get to know how, beyond these public expressions, he understands his own humiliation."],
      ["他是否曾经怀疑过自己对帝国的忠诚？是否意识到弗洛里的友谊无法真正跨越种族等级？当他发现专业能力和政治忠诚都不足以保护自己时，又如何重新理解此前信奉的秩序？",
       "Did he ever doubt his loyalty to the empire? Did he realize that Flory’s friendship could not truly cross the racial hierarchy? When he found that neither professional ability nor political loyalty could protect him, how did he come to understand anew the order he had believed in?"],
      ["奥威尔没有给予这些问题与弗洛里的精神危机同等的叙述空间。",
       "Orwell does not give these questions the same narrative space as Flory’s spiritual crisis."],
      ["这使维拉斯瓦米的沉默具有了双重意义。",
       "This gives Veraswami’s silence a double meaning."],
      ["一方面，他在殖民社会中缺少能够独立决定自身命运的政治声音；另一方面，即使在一部批判殖民统治的英国小说里，他仍然主要通过与英国主人公的关系获得文学上的存在。",
       "On one hand, in colonial society he lacks a political voice with which to decide his own fate; on the other, even in an English novel critical of colonial rule, he gains his literary existence mainly through his relationship with the English protagonist."],
      ["弗洛里的矛盾被写成复杂的人性，维拉斯瓦米的矛盾却更多表现为一种具有讽刺意味的政治处境。",
       "Flory’s contradictions are written as complex humanity; Veraswami’s appear more as an ironic political predicament."],
      ["我并不认为奥威尔完全忽略了这种不平等。恰恰相反，他对维拉斯瓦米的塑造已经超越了许多同时代殖民文学的刻板印象。但他的同情仍然受到叙述视角的限制：他能够揭露英国人的虚伪，却未必能够充分想象一个印度人不以英国人为中心的精神世界。",
       "I do not think Orwell entirely ignores this inequality. On the contrary, his portrait of Veraswami goes beyond the stereotypes of much contemporary colonial literature. But his sympathy is still limited by the narrative viewpoint: he can expose English hypocrisy, but cannot necessarily imagine fully an Indian’s inner world that is not centered on the English."],
      ["这让我对弗洛里的悲剧产生了另一种理解。",
       "This gave me another understanding of Flory’s tragedy."],
      ["弗洛里占据了小说最丰富的心理空间。他的孤独、羞耻、欲望与自我厌恶，都得到细致描写。他最终走向毁灭，读者自然容易将他的死亡理解为帝国对个人良知的摧残。",
       "Flory occupies the richest psychological space in the novel. His loneliness, shame, desire and self-loathing are all finely described. When he is finally destroyed, the reader easily takes his death as the empire’s crushing of an individual conscience."],
      ["维拉斯瓦米却活了下来。",
       "Veraswami, however, survives."],
      ["但这种幸存并不意味着胜利。他失去了职业地位和声望，也失去了曾经寄托希望的英国朋友。他必须继续生活在那个已经证明不会公平对待他的社会之中。",
       "But survival does not mean victory. He loses his professional standing and reputation, and the English friend in whom he had placed hope. He must go on living in a society that has proved it will not treat him fairly."],
      ["弗洛里可以通过死亡结束自己的矛盾，维拉斯瓦米却必须承受矛盾继续存在的后果。",
       "Flory can end his contradiction through death; Veraswami must bear the consequences of the contradiction continuing."],
      ["这里隐藏着一种文学上的不公平：死亡容易获得悲剧的形式，屈辱的延续却很难成为同样动人的故事。",
       "A literary unfairness is hidden here: death easily takes the form of tragedy, while the continuation of humiliation rarely becomes an equally moving story."],
      ["奥威尔让弗洛里成为一个令人难忘的悲剧人物，却让维拉斯瓦米的命运逐渐退入小说的背景。前者的精神崩溃获得了完整的叙述，后者失去的生活则更多留给读者自己想象。",
       "Orwell makes Flory an unforgettable tragic figure but lets Veraswami’s fate recede gradually into the background. The former’s mental collapse gets a full telling, while the life the latter loses is left largely to the reader’s imagination."],
      ["或许正因为如此，我越来越觉得，《缅甸岁月》最值得重新阅读的，并不是弗洛里的死亡，而是维拉斯瓦米的幸存。",
       "Perhaps for this reason, I increasingly feel that what is most worth rereading in *Burmese Days* is not Flory’s death but Veraswami’s survival."],
      ["一个人因为无法忍受不公正的世界而毁灭，固然令人悲伤；另一个人明明遭受了这种不公，却连公开否定它的自由都没有，甚至必须继续使用统治者的语言为自己争取生存空间。",
       "That one person is destroyed because he cannot bear an unjust world is sad enough; that another, who has actually suffered that injustice, lacks even the freedom to deny it publicly, and must go on using the ruler’s language to win room to live, is something else."],
      ["**弗洛里的悲剧，是他无法成为自己希望成为的人；维拉斯瓦米的悲剧，则是他必须先成为英国人希望他成为的人，才有资格争取属于自己的生活。**",
       "**Flory’s tragedy is that he cannot become the person he wants to be; Veraswami’s is that he must first become the person the English want him to be before he is entitled to fight for a life of his own.**"],
      ["而奥威尔最耐人寻味的局限，也正在这里。",
       "And Orwell’s most intriguing limitation lies right here."],
      ["他能够让我们深切理解一个英国人为什么无法忍受帝国，却没有同样充分地告诉我们，一个印度人究竟如何忍受帝国。",
       "He lets us understand deeply why an Englishman cannot bear the empire, but does not tell us as fully how an Indian bears it."],
      ["弗洛里的痛苦被写成文学。",
       "Flory’s pain is written into literature."],
      ["维拉斯瓦米的沉默，却仍然留在历史之中。",
       "Veraswami’s silence remains in history."]
    ]
  },
  {
    "date": "2011-01-05",
    "title": "Retelling Modern China as a Search for a State",
    "slug": "modern-china-search-for-a-state",
    "category": "History",
    "book": {
      "cover": "great_chinese_revolution.jpg",
      "title": "伟大的中国革命 (The Great Chinese Revolution)",
      "author": "费正清 John King Fairbank",
      "language": "Chinese",
      "country": "United States",
      "original": "English",
      "lines": [
        "History · Chinese translation of The Great Chinese Revolution, 1800–1985",
        "Fairbank’s account of modern China from 1800 to 1985."
      ]
    },
    "place": "于中国北京\nBeijing, China",
    "languages": ["Chinese", "English"],
    "prose": [
      ["我深受学校历史教育的影响：鸦片战争、洋务运动、戊戌变法、辛亥革命、五四运动、国民革命、共产党革命。这些事件被排列成一条相对清晰的历史道路，仿佛每一次失败都在为下一次革命提供必要的条件。",
       "I was deeply shaped by my history lessons at school: the Opium War, the Self-Strengthening Movement, the Hundred Days’ Reform, the 1911 Revolution, the May Fourth Movement, the National Revolution, the Communist revolution. These events are lined up into a fairly clear historical road, as if every failure supplied the conditions necessary for the next revolution."],
      ["费正清却让我第一次认真思考，这条道路是否真的如此必然。",
       "Fairbank made me think seriously, for the first time, about whether this road was really so inevitable."],
      ["在他的叙述中，中国近现代历史并不是单纯的革命史，而是传统帝国在内外压力下解体，新的政治组织、社会力量与国家制度不断竞争的过程。",
       "In his telling, modern Chinese history is not simply a history of revolution but a process in which a traditional empire disintegrates under internal and external pressure, while new political organizations, social forces and state institutions compete."],
      ["晚清的改革者并不知道清朝必然灭亡；辛亥革命的参与者无法预见此后数十年的军阀混战；国民党与共产党也并非从一开始就拥有后来历史赋予它们的固定位置。",
       "The reformers of the late Qing did not know the dynasty was bound to fall; the participants in the 1911 Revolution could not foresee the decades of warlord conflict that followed; and the Nationalists and the Communists did not from the start hold the fixed positions that later history gave them."],
      ["费正清的解释框架当然有其局限。他对中国现代化的理解，仍然受到美国战后中国研究的学术传统影响，有时也容易把中国历史放进从传统向现代转型的宏大叙事。",
       "Fairbank’s interpretive framework of course has its limits. His understanding of China’s modernization is still shaped by the postwar American tradition of China studies, and he sometimes places Chinese history too readily into a grand narrative of transition from tradition to modernity."],
      ["但这恰恰是我认为值得阅读他的原因。",
       "But this is exactly why I think he is worth reading."],
      ["历史不是只有一种叙述方法。改变观察的尺度，原本理所当然的因果关系便会变得陌生。",
       "History has more than one way of being told. Change the scale of observation, and cause and effect that once seemed self-evident become strange."],
      ["2011年的北京，既是中国政治权力的中心，也是一个不断被拆除、重建和重新命名的城市。站在这样的地方阅读中国革命史，很容易感受到历史并非已经结束，而是继续以城市规划、社会制度和个人生活的形式存在。我越来越觉得，费正清真正留给我的不是某一种关于中国革命的结论，而是一种观察历史的方法。",
       "Beijing in 2011 is both the center of Chinese political power and a city constantly being demolished, rebuilt and renamed. Reading the history of the Chinese revolution in such a place, one easily feels that history has not ended but continues in the form of urban planning, social institutions and individual lives. I increasingly feel that what Fairbank really left me is not any one conclusion about the Chinese revolution but a method of looking at history."],
      ["当一个国家不断把自己的过去解释为通向今天的必经之路时，历史研究最重要的工作，或许就是重新找回那些曾经存在、却最终没有实现的可能性。",
       "When a country keeps explaining its past as the only road that leads to today, the most important work of historical study may be to recover the possibilities that once existed but were never realized."]
    ]
  },
  {
    "date": "2011-01-22",
    "title": "China as America’s Mirror",
    "slug": "china-as-americas-mirror",
    "category": "History",
    "book": {
      "cover": "us_and_china.jpg",
      "title": "美国与中国 (The United States and China)",
      "author": "费正清 John King Fairbank",
      "language": "Chinese",
      "country": "United States",
      "original": "English",
      "lines": [
        "History · Chinese translation of The United States and China, first published 1948",
        "Fairbank’s introduction to Chinese history and to the relations between the two countries."
      ]
    },
    "place": "于中国盐城\nYancheng, China",
    "languages": ["Chinese", "English"],
    "prose": [
      ["如果一切顺利，明年9月我就要去美国读研究生了。对现在的我而言，美国更多是一种通过书籍、新闻、大学和流行文化建立起来的想象。费正清的这部作品，恰好让我从相反的方向思考：美国知识界是如何理解中国的？",
       "If all goes well, I will be going to America for graduate school next September. For me now, America is mostly an imagination built from books, news, universities and popular culture. Fairbank’s book happens to make me think from the opposite direction: how does the American intellectual world understand China?"],
      ["费正清长期致力于向美国读者解释中国的历史结构、政治传统与社会变迁。他强调，中国不能被简单当作西方国家体系中的普通一员：帝国官僚制度、儒家政治伦理、地方社会组织，以及近代以来遭遇的外部冲击，共同塑造了与西方迥然不同的历史经验。",
       "Fairbank devoted himself for years to explaining to American readers China’s historical structure, political traditions and social change. He stresses that China cannot simply be treated as an ordinary member of the Western state system: the imperial bureaucracy, Confucian political ethics, local social organization and the external shocks of the modern age together shaped a historical experience quite unlike the West’s."],
      ["但后来我越来越感兴趣的，不是他如何解释中国，而是他为什么需要这样解释中国。",
       "But what increasingly interested me later was not how he explains China, but why he needed to explain it this way."],
      ["美国对中国的认识，始终与自身的外交利益和意识形态焦虑密不可分。从传教士时代的文化想象，到二战时期的盟友形象，再到冷战时期的共产主义对手，中国在美国公共讨论中的位置不断变化。",
       "America’s knowledge of China has always been inseparable from its own diplomatic interests and ideological anxieties. From the cultural imagination of the missionary era, to the image of an ally in the Second World War, to the communist adversary of the Cold War, China’s place in American public debate keeps changing."],
      ["变化的并不只有中国，还有美国自己。",
       "It is not only China that changes, but America itself."],
      ["费正清试图建立一种超越简单敌友关系的历史理解，却也无法完全脱离他所处时代的知识结构。所谓美国的中国研究，从来不只是关于中国的学问，也是美国认识世界、界定自身责任与权力的一部分。",
       "Fairbank tries to build a historical understanding that goes beyond a simple friend-or-enemy relationship, yet cannot wholly escape the intellectual structures of his own time. American China studies has never been only knowledge about China; it is also part of how America knows the world and defines its own responsibility and power."],
      ["我越来越怀疑，真正困难的跨文化理解，并不是学会用另一种语言解释自己的国家，而是承认：那些自己习以为常的解释，在另一个社会里可能根本站不住脚。",
       "I increasingly suspect that the truly hard part of cross-cultural understanding is not learning to explain one’s country in another language, but admitting that the explanations one takes for granted may not hold up at all in another society."],
      ["《美国与中国》对我的意义正在于此：在我动身去美国之前，它让我先看见了，美国是怎样看待中国，又怎样借此看待自己的。",
       "This is what *The United States and China* means to me: before I set out for America, it let me see first how America looks at China, and how it uses that look to see itself."]
    ]
  },
  {
    "date": "2016-01-02",
    "title": "How Authority Becomes Truth",
    "slug": "how-authority-becomes-truth",
    "category": "History",
    "book": {
      "cover": "red_sun.jpg",
      "title": "红太阳是怎样升起的 (How the Red Sun Rose)",
      "author": "高华 Gao Hua",
      "language": "Chinese",
      "country": "China",
      "original": "Chinese",
      "lines": [
        "History · Origins and development of the Yan’an Rectification Movement",
        "How the Yan’an Rectification of 1942–45 built Mao Zedong’s authority inside the Party."
      ]
    },
    "place": "于加拿大列治文\nRichmond, BC, Canada",
    "languages": ["Chinese", "English"],
    "prose": [
      ["这本书最令我震动的地方，不是它揭示了多少此前不熟悉的历史细节，而是它改变了我理解政治权力形成过程的方式。",
       "What shook me most about this book is not how many unfamiliar historical details it reveals, but that it changed how I understand the way political power is formed."],
      ["在传统的革命史叙述中，延安整风常常被描述为一次思想统一和组织建设的过程。高华却通过大量史料，把这个过程重新放回具体的党内权力关系之中。",
       "In traditional accounts of the revolution, the Yan’an Rectification is often described as a process of ideological unification and organization building. Gao Hua, drawing on a wealth of sources, puts the process back into the concrete power relations inside the Party."],
      ["毛泽东的权威并不是某一天突然确立的，而是在路线争论、干部审查、历史解释和组织改造中逐渐形成的。",
       "Mao Zedong’s authority was not established suddenly one day; it formed gradually through disputes over line, cadre review, the interpretation of history and the remaking of the organization."],
      ["尤其值得注意的是，整风并不只是要求党员服从某项政治决定，它还要求参与者重新解释自己的过去。",
       "Especially notable is that the rectification did not merely require Party members to obey a political decision; it required participants to reinterpret their own pasts."],
      ["一个人的思想经历、政治立场乃至私人关系，都可能成为需要交代、审查和重新定义的对象。通过学习、批评与自我批评，政治组织不仅能够规范成员的行为，还能逐渐塑造他们理解自身经历的方式。",
       "A person’s intellectual history, political stance and even private relationships could all become things to be accounted for, examined and redefined. Through study, criticism and self-criticism, a political organization could regulate its members’ conduct and also gradually shape how they understand their own experience."],
      ["高华最深刻的发现之一，正是政治权力与历史解释权之间的紧密联系。",
       "One of Gao Hua’s deepest findings is precisely the close tie between political power and the authority to interpret history."],
      ["谁有权决定过去发生了什么，谁便在很大程度上拥有决定当下何为正确的能力。",
       "Whoever has the right to decide what happened in the past largely holds the power to decide what is correct in the present."],
      ["细看一点：交代自己的过去",
       "A closer look: accounting for one’s past",
       "h"],
      ["这一点在整风的几个具体环节里看得最清楚。1942年，王实味发表《野百合花》，批评延安干部之间的等级与特权，随后在中央研究院遭到连续的批判会；他被塑造成“托派”“特务”的过程，并不依赖某一项确凿的证据，而依赖一套不断改写他过去言行含义的解释。同样的逻辑在1943年的“抢救运动”中被推向极端：在康生主持的审干之下，许多人被要求交代自己是否曾被敌人收买，压力之下出现了大量虚假的“坦白”，而这些坦白又反过来成为怀疑下一个人的“证据”。",
       "This is clearest in a few concrete episodes of the rectification. In 1942 Wang Shiwei published “Wild Lilies,” criticizing the hierarchy and privilege among Yan’an cadres, and was then subjected to repeated denunciation meetings at the Central Research Institute. His being cast as a “Trotskyite” and a “spy” did not rest on any one firm piece of evidence but on a set of interpretations that kept rewriting the meaning of what he had said and done. The same logic was pushed to an extreme in the “Rescue Campaign” of 1943: under cadre screening led by Kang Sheng, many were required to account for whether they had ever been bought by the enemy, and under pressure came a flood of false “confessions,” which in turn became the “evidence” for suspecting the next person."],
      ["我觉得，这里最值得思考的是“坦白”的双重功能。它表面上是在查明事实，实际上却是在建立一种关系：一个人越是努力证明自己清白，就越承认了组织有权审查他的全部过去。坦白的人并不只是交出信息，他同时交出了对自己经历的解释权。",
       "What seems most worth thinking about here is the double function of “confession.” On the surface it is a way of establishing facts; in effect it builds a relationship: the harder a person tries to prove his innocence, the more he concedes that the organization has the right to examine his entire past. One who confesses hands over not only information but the authority to interpret his own experience."],
      ["更耐人寻味的是随后的转折。据记载，1944年毛泽东在公开场合向被错误审查的干部表示道歉，抢救运动也被宣布为“搞错了”。这当然减轻了许多人的处境，但也带来一个不容回避的问题：既然纠正错误的人，同时也是掌握审查权力的人，那么这种纠正究竟削弱了权威，还是反而使它更牢固？一个能够制造恐惧、又能够解除恐惧的权力，要求的已经不只是服从，而是感激。",
       "More intriguing is the turn that followed. By the record, in 1944 Mao Zedong apologized in public to cadres who had been wrongly investigated, and the Rescue Campaign was declared a mistake. This of course eased the position of many, but it raises an unavoidable question: if the one who corrects the error is also the one who holds the power of review, does the correction weaken authority, or make it firmer? A power that can create fear and also lift it demands something more than obedience: it demands gratitude."],
      ["1945年，《关于若干历史问题的决议》对党的历史作出了统一结论，同年召开的七大把毛泽东思想写入党章。回头看，这是一个完整的循环：先让每个人重新讲述自己的过去，再由组织给出对整个党的过去的权威讲述。个人的历史与集体的历史，在这里被同一只手改写。",
       "In 1945 the “Resolution on Certain Questions in the History of Our Party” reached a unified verdict on the Party’s past, and the Seventh Congress held that year wrote Mao Zedong Thought into the Party constitution. In retrospect this is a complete cycle: first make everyone retell his own past, then let the organization give the authoritative account of the Party’s whole past. The individual’s history and the collective’s history are rewritten here by the same hand."],
      ["这让我对二十世纪中国政治史产生了一种不同于道德谴责的兴趣。个人崇拜当然值得批判，但如果仅仅把它解释为某个领袖的野心，反而容易忽略组织制度、思想动员和集体心理如何共同促成权威的形成。",
       "This gave me an interest in twentieth-century Chinese political history that differs from moral condemnation. The cult of personality certainly deserves criticism, but explaining it merely as one leader’s ambition easily overlooks how organizational institutions, ideological mobilization and collective psychology jointly bring authority into being."],
      ["高华的研究提醒我们，政治权力最值得警惕的时刻，未必是它公开要求人们服从的时候，而是它开始要求人们按照同一种方式理解历史、解释自己，甚至判断自己的思想是否正确的时候。",
       "Gao Hua’s research reminds us that the moment political power most deserves our wariness is not necessarily when it openly demands obedience, but when it begins to demand that people understand history in one way, explain themselves in one way, and even judge in one way whether their own thinking is correct."],
      ["2016年的今天我所在的加拿大，是一个与延安相距极远的地方。但也正是在远离中国政治生活的环境中，我第一次如此清晰地意识到，历史研究的价值不仅在于重新评价某个人物，更在于理解某种权力机制为何能够运转。",
       "Canada, where I am today in 2016, is a place very far from Yan’an. But precisely in an environment far from Chinese political life, I realized for the first time so clearly that the value of historical study lies not only in reassessing a figure, but in understanding why a certain mechanism of power can operate."],
      ["一个社会真正失去思想自由的标志，或许不是人们不再能够表达不同意见，而是他们逐渐失去了用不同方式解释自身经历的能力。",
       "The true sign that a society has lost freedom of thought may not be that people can no longer voice dissent, but that they gradually lose the ability to explain their own experience in a different way."],
      ["高华写的是延安整风，却让人不得不思考所有试图垄断真理的政治组织。",
       "Gao Hua writes about the Yan’an Rectification, yet it forces one to think about every political organization that tries to monopolize truth."]
    ]
  },
  {
    "date": "2018-05-16",
    "title": "What Can Literature Say for Someone History Has Killed?",
    "slug": "what-literature-can-say",
    "category": "Novel",
    "book": {
      "cover": "human_acts.jpg",
      "title": "소년이 온다 (Human Acts)",
      "author": "한강 Han Kang",
      "language": "Korean",
      "country": "South Korea",
      "original": "Korean",
      "lines": [
        "Novel · Korean original, first published 2014",
        "The Gwangju uprising of May 1980, told through the dead, the survivors and those who remember."
      ]
    },
    "place": "于韩国首尔\nSeoul, South Korea",
    "languages": ["Chinese", "English"],
    "prose": [
      ["韩江选择从死者的身体开始。",
       "Han Kang chooses to begin from the bodies of the dead."],
      ["1980年5月，光州。少年东浩在临时停尸场帮助辨认和照料遇难者的遗体。腐败的气味、不断变化的尸体、无法确认身份的死者，使国家暴力不再是历史教科书中的一个政治事件，而成为一种具体到几乎令人无法承受的身体经验。",
       "May 1980, Gwangju. The boy Dong-ho helps identify and tend the bodies of the dead at a makeshift morgue. The smell of decay, the bodies that keep changing, the dead who cannot be identified: state violence is no longer a political event in a history textbook but a bodily experience so concrete as to be almost unbearable."],
      ["更令人不安的是，小说没有让死亡成为故事的终点。",
       "More unsettling, the novel does not let death be the end of the story."],
      ["幸存者继续生活，却始终无法摆脱暴力留下的痕迹。有人遭受审讯和酷刑，有人长期被羞耻、恐惧与负罪感折磨。即使政治制度发生变化，创伤也不会因为历史获得重新评价而自动消失。",
       "The survivors go on living, yet can never shake off the traces the violence left. Some endure interrogation and torture; some are long tormented by shame, fear and guilt. Even when the political system changes, trauma does not vanish automatically because history has been reassessed."],
      ["韩江拒绝把光州简单写成一部英雄主义史诗。",
       "Han Kang refuses to write Gwangju simply as a heroic epic."],
      ["她关心的不是牺牲如何成就民主，而是那些被牺牲的人，在宏大的民主化叙事之外，还剩下多少无法被解释的痛苦。",
       "What she cares about is not how sacrifice brought about democracy, but how much unexplained pain remains for those who were sacrificed, outside the grand narrative of democratization."],
      ["这一点让我想到东亚现代历史中反复出现的一种叙述习惯：我们总是习惯用后来的进步，为此前的苦难寻找意义。",
       "This reminds me of a narrative habit that recurs in modern East Asian history: we are used to using later progress to find meaning for earlier suffering."],
      ["战争带来国家独立，革命带来社会变革，镇压最终促成民主化。这样的历史解释或许并非完全错误，却有一种危险的倾向：仿佛只要后来的结果足够重要，先前的死亡便获得了某种合理性。",
       "War brings national independence, revolution brings social change, repression finally leads to democratization. Such historical explanations may not be entirely wrong, but they carry a dangerous tendency: as if, so long as the later result is important enough, the earlier deaths gain a certain rationality."],
      ["韩江的文学恰恰抵抗这种合理化。",
       "Han Kang’s literature resists precisely this rationalization."],
      ["她不断改变叙述视角，让死者、幸存者与后来追忆事件的人交替发声。那些声音并不能拼凑出一幅完整的历史图景，反而让我们意识到，有些经验注定无法被后来者彻底理解。",
       "She keeps changing the narrative viewpoint, letting the dead, the survivors and those who later recall the events speak in turn. Those voices cannot be pieced into a complete picture of history; instead they make us realize that some experiences are bound never to be fully understood by those who come after."],
      ["2018年的今天，我们已经能够通过韩国社会的公共记忆，感受到光州事件在当代韩国民主政治中的特殊位置。但小说让我意识到，公共纪念与个人哀悼之间，始终存在一道无法完全弥合的裂缝。",
       "Today, in 2018, we can already sense, through South Korean society’s public memory, the special place the Gwangju uprising holds in contemporary Korean democratic politics. But the novel made me realize that between public commemoration and personal mourning there is always a rift that cannot be fully closed."],
      ["国家可以承认错误，历史可以重新书写，纪念碑可以建立。",
       "A state can admit its wrong, history can be rewritten, monuments can be built."],
      ["可是那个没有活到今天的少年，仍然没有回来。",
       "But the boy who did not live to see today has still not come back."],
      ["韩江最残酷也最温柔的地方，是她拒绝让历史的正义取代个人的死亡。她并不试图证明那些年轻人没有白白牺牲，而是坚持追问：为什么一个人的生命，必须通过牺牲才能获得历史的承认？",
       "What is both most cruel and most tender about Han Kang is that she refuses to let historical justice replace an individual’s death. She does not try to prove that those young people did not die in vain, but insists on asking: why must a person’s life be recognized by history only through sacrifice?"]
    ]
  },
  {
    "date": "2013-10-11",
    "title": "On the Other Side of the Hill",
    "slug": "on-the-other-side-of-the-hill",
    "category": "Novel",
    "book": {
      "cover": "saka_no_ue_no_kumo.jpg",
      "title": "坂の上の雲 (Clouds Above the Hill)",
      "author": "司馬遼太郎 Shiba Ryōtarō",
      "language": "Japanese",
      "country": "Japan",
      "original": "Japanese",
      "lines": [
        "Novel · Japanese original, serialized 1968–72",
        "Three young men from Matsuyama, the brothers Akiyama and the poet Masaoka Shiki, grow up with Meiji Japan through the Sino-Japanese and Russo-Japanese wars."
      ]
    },
    "languages": ["Chinese", "English"],
    "prose": [
      ["我读司马辽太郎的《坂上之云》时，最难忘的不是日本海海战中东乡平八郎的胜利，而是小说开头那几个在伊予松山长大的年轻人。",
       "Reading Shiba Ryōtarō’s *Saka no ue no kumo*, what I remember most is not Tōgō Heihachirō’s victory in the Battle of the Sea of Japan, but the few young men at the start of the novel who grew up in Iyo-Matsuyama."],
      ["秋山好古、秋山真之、正冈子规。他们后来分别成为骑兵将领、海军参谋与近代俳句革新的代表人物。但司马辽太郎最初并没有急于赋予他们历史的重量。",
       "Akiyama Yoshifuru, Akiyama Saneyuki, Masaoka Shiki. They would become, respectively, a cavalry commander, a naval staff officer and a leading figure in the renewal of modern haiku. But Shiba does not at first hurry to give them the weight of history."],
      ["好古家境贫寒，年轻时为了谋生与求学辗转，后来选择了军人道路。他不喜欢繁文缛节，生活简朴，甚至有些不近人情。这个日后成为日本骑兵之父的人，在小说中首先是一个必须认真考虑如何养活自己的青年。",
       "Yoshifuru comes from a poor family, drifts about in his youth to earn a living and study, and later chooses the soldier’s path. He dislikes ceremony, lives simply, and is even a little unsociable. The man who would become the father of Japan’s cavalry is, in the novel, first of all a young man who must think seriously about how to feed himself."],
      ["真之则完全不同。他聪明、敏感，善于思考，也有年轻人常见的犹豫。他曾经接近子规的文学世界，最终却选择进入海军。两个原本可能共同走向文学的朋友，就这样被时代带往不同的方向。",
       "Saneyuki is entirely different. He is clever, sensitive and given to thought, and has the hesitation common in the young. He once drew close to Shiki’s literary world, yet in the end chose the navy. Two friends who might have walked toward literature together are carried by the age in different directions."],
      ["我尤其喜欢司马辽太郎写他们尚未成名时的样子。",
       "I especially like how Shiba writes them before they are famous."],
      ["他们并不知道自己会成为历史人物，更不知道日本将经历怎样的战争。对他们而言，明治时代首先意味着一个可以凭借个人才能改变命运的社会。",
       "They do not know they will become historical figures, still less what wars Japan will go through. For them, the Meiji era first of all means a society in which one can change one’s fate by personal talent."],
      ["这让我想到《坂上之云》书名中的那朵云。",
       "This makes me think of the cloud in the title, *Saka no ue no kumo*."],
      ["山坡上的年轻人抬起头，仿佛看见了一个可以通过努力抵达的未来。司马辽太郎笔下的明治日本，最迷人的地方正在于这种尚未被历史结局确定的可能性。",
       "Young men on a hillside raise their heads and seem to see a future they can reach by effort. What is most captivating about Meiji Japan in Shiba’s hands is precisely this possibility, not yet fixed by the ending of history."],
      ["作为中国读者，我能够理解这种热情，却很难毫无保留地分享它。",
       "As a Chinese reader, I can understand this enthusiasm but can hardly share it without reservation."],
      ["因为我从小熟悉的十九世纪末，并不是这样一个充满希望的年代。",
       "Because the end of the nineteenth century that I grew up knowing was not such a hopeful age."],
      ["在中国近代史中，1894年意味着甲午战争，意味着北洋舰队的覆灭、《马关条约》的签订，以及一个曾经自认为居于东亚中心的帝国突然发现，自己已经无法维持原有的国际地位。",
       "In modern Chinese history, 1894 means the First Sino-Japanese War, the destruction of the Beiyang Fleet, the signing of the Treaty of Shimonoseki, and an empire that once thought itself the center of East Asia suddenly finding it could no longer keep its old international standing."],
      ["而在司马辽太郎笔下，同一段历史却成为一个年轻国家逐渐获得自信的过程。",
       "In Shiba’s writing, the same stretch of history becomes the process by which a young nation gradually gains confidence."],
      ["这种视角的错位，使我始终无法把《坂上之云》当作一部单纯的励志小说。",
       "This dislocation of viewpoint keeps me from ever reading *Saka no ue no kumo* as a simple inspirational novel."],
      ["我尤其在意秋山真之这个人物。",
       "I care especially about the figure of Akiyama Saneyuki."],
      ["在小说中，他不是一个只凭勇气作战的军人。他重视研究、推演与判断，试图把战争变成一种可以通过理性分析掌握的复杂技术。",
       "In the novel he is not a soldier who fights on courage alone. He values study, simulation and judgment, and tries to turn war into a complex technique that can be mastered through rational analysis."],
      ["日俄战争前，他曾赴美国学习海军战略，研究美国海军理论家马汉的著作，也考察美国海军的作战经验。后来，他参与日本联合舰队的作战计划，成为东乡平八郎身边重要的参谋。",
       "Before the Russo-Japanese War he went to the United States to study naval strategy, read the works of the American naval theorist Mahan, and examined the American navy’s combat experience. Later he took part in the Combined Fleet’s operational planning and became an important staff officer at Tōgō Heihachirō’s side."],
      ["我很欣赏司马辽太郎对这种专业精神的描写。",
       "I much admire Shiba’s depiction of this professional spirit."],
      ["他没有把日本的胜利简单归结为民族意志或士兵的勇敢，而是让读者看见，一个现代国家如何通过教育、训练、组织与技术，把个人才能转化成实际的军事能力。",
       "He does not simply attribute Japan’s victory to national will or the courage of its soldiers, but lets the reader see how a modern state, through education, training, organization and technology, turns individual talent into actual military capability."],
      ["但越是欣赏秋山真之，我越感到一种难以摆脱的矛盾。",
       "But the more I admire Akiyama Saneyuki, the more I feel a contradiction I cannot shake."],
      ["因为这些令人钦佩的才能，最终服务于一场场真实的战争。",
       "Because these admirable talents in the end serve real wars."],
      ["到了日俄战争，小说的气氛明显改变。",
       "With the Russo-Japanese War, the mood of the novel changes markedly."],
      ["秋山好古指挥骑兵与俄军作战，真之则在海军参谋岗位上筹划如何迎击俄国波罗的海舰队。曾经在松山为生计与前途奔忙的兄弟，如今参与决定成千上万人的命运。",
       "Akiyama Yoshifuru commands cavalry against the Russian army, while Saneyuki, at his post as a naval staff officer, plans how to meet the Russian Baltic Fleet. The brothers who once scrambled in Matsuyama for a livelihood and a future now take part in deciding the fates of thousands."],
      ["而旅顺攻防战，更使这种变化显得残酷。",
       "And the siege of Port Arthur makes the change seem all the more cruel."],
      ["乃木希典指挥日军反复攻击俄军防御阵地。面对坚固的工事与猛烈的火力，日军付出了极其惨重的伤亡。司马辽太郎对乃木的指挥并不宽容，他反复追问，为什么如此多的生命必须消耗在缺乏成效的正面进攻中。",
       "Nogi Maresuke commands the Japanese army in repeated assaults on the Russian defensive positions. Against strong fortifications and fierce fire, the Japanese suffer extremely heavy casualties. Shiba is not lenient toward Nogi’s command, and asks again and again why so many lives had to be spent in frontal attacks that achieved so little."],
      ["我读到这里时，反而想起小说开头的松山。",
       "Reading this, I found myself thinking of Matsuyama at the start of the novel."],
      ["那些年轻人曾经相信，个人努力能够使国家摆脱贫弱。但几十年后，国家的强大却开始要求另一批年轻人用生命证明它。",
       "Those young men once believed that personal effort could free the nation from weakness and poverty. But decades later, the nation’s strength begins to demand that another generation of young men prove it with their lives."],
      ["司马辽太郎并没有回避这种残酷。只是他的叙事始终保留着一种对于明治时代的深厚眷恋。",
       "Shiba does not avoid this cruelty. His narrative simply keeps, throughout, a deep fondness for the Meiji era."],
      ["在他看来，明治日本仍然具有后来昭和军国主义所失去的务实与理性。秋山兄弟代表的，正是一个尚且懂得学习、承认自身局限的日本。",
       "In his view, Meiji Japan still had the pragmatism and rationality that Shōwa militarism later lost. What the Akiyama brothers represent is a Japan that still knew how to learn and admit its own limits."],
      ["我能够理解这种历史判断，却也觉得它留下了一个值得追问的问题。",
       "I can understand this historical judgment, yet feel it leaves a question worth asking."],
      ["**一个国家的现代化如果最终使它获得了支配其他国家的能力，我们应该如何评价那些推动现代化的人？**",
       "**If a nation’s modernization finally gives it the power to dominate other nations, how should we judge those who drove that modernization?**"],
      ["秋山真之的聪明是真实的，日本军事改革的成效也是真实的。但这些事实并不能自动回答日本为什么有权通过战争扩大自己的势力。",
       "Akiyama Saneyuki’s cleverness is real, and so are the results of Japan’s military reforms. But these facts do not automatically answer why Japan had the right to expand its power through war."],
      ["对于日本读者而言，日俄战争可能意味着一个亚洲国家终于能够与欧洲强国抗衡；对于中国读者而言，战争却发生在中国东北的土地上，交战双方争夺的正是中国无力自主决定的利益。",
       "For Japanese readers, the Russo-Japanese War may mean an Asian nation finally able to stand against a European power; for Chinese readers, the war was fought on the soil of China’s Northeast, and the two sides were contending over interests China was powerless to decide for itself."],
      ["旅顺、辽阳、奉天，这些地名在小说中是日俄两军的战场，在中国历史中却有着另一层含义。",
       "Port Arthur, Liaoyang, Mukden: in the novel these names are battlefields of the Japanese and Russian armies, but in Chinese history they carry another meaning."],
      ["我想，这正是自己阅读位置最难摆脱的地方。",
       "I think this is what is hardest to escape in my position as a reader."],
      ["司马辽太郎能够让我欣赏秋山真之的才智，理解秋山好古的坚韧，甚至为日本海海战中联合舰队的胜利感到一种叙事上的激动。",
       "Shiba can make me admire Akiyama Saneyuki’s intellect, understand Akiyama Yoshifuru’s tenacity, and even feel a narrative excitement at the Combined Fleet’s victory in the Battle of the Sea of Japan."],
      ["但这种激动并不能完全覆盖我对于同一段历史的另一种认识。",
       "But this excitement cannot wholly cover over my other understanding of the same history."],
      ["我尤其佩服司马辽太郎的文学技巧。",
       "I especially admire Shiba’s literary skill."],
      ["他把一个国家的成长写进几个年轻人的命运。我们跟随他们求学、经历挫折、获得机会，逐渐理解他们的抱负，也自然希望他们取得成功。",
       "He writes a nation’s growth into the fates of a few young men. We follow them as they study, meet setbacks and win opportunities, gradually come to understand their ambitions, and naturally hope they will succeed."],
      ["等到他们终于站上历史舞台，国家的胜利便仿佛成为个人奋斗的圆满结局。",
       "By the time they finally stand on the stage of history, the nation’s victory seems to become the fulfilling end of their personal struggle."],
      ["这是一种极其高明的叙事，却也让我意识到历史小说中一种不易察觉的力量：**当读者开始爱上人物，便可能不知不觉地接受人物所服务的历史。**",
       "This is an extremely skilful narrative, yet it also made me aware of a force in the historical novel that is hard to notice: **when the reader begins to love the characters, he may unknowingly accept the history the characters serve.**"],
      ["我并不愿意因此否定司马辽太郎。",
       "I do not want to dismiss Shiba on this account."],
      ["恰恰相反，我觉得《坂上之云》值得阅读，正因为它使我不得不理解一种与自己熟悉的历史记忆截然不同的情感。",
       "On the contrary, I think *Saka no ue no kumo* is worth reading precisely because it makes me understand a feeling quite different from the historical memory I know."],
      ["我能够理解明治日本年轻人的理想，也无法忘记日本崛起给中国与朝鲜带来的代价。",
       "I can understand the ideals of the young men of Meiji Japan, and I cannot forget the cost Japan’s rise brought to China and Korea."],
      ["两种认识同时存在，谁也无法轻易取消另一种。",
       "Both understandings exist at once, and neither can easily cancel the other."],
      ["小说中，正冈子规没有像秋山兄弟那样走向战场。他长期受到疾病折磨，生命的大部分时间都被困在病榻上，却仍然坚持写作，试图在俳句与短歌中寻找新的表达方式。",
       "In the novel, Masaoka Shiki does not go to the battlefield as the Akiyama brothers do. Tormented by illness for years, he spends much of his life confined to a sickbed, yet keeps writing, trying to find new ways of expression in haiku and tanka."],
      ["我越来越觉得，子规的存在使这部小说有了一种不同于军事胜利的尺度。",
       "I increasingly feel that Shiki’s presence gives the novel a measure other than military victory."],
      ["秋山兄弟参与了国家的崛起，子规则在有限的生命中改变了日本文学。他们都属于明治时代，却并不以同一种方式接近山坡上的白云。",
       "The Akiyama brothers took part in the nation’s rise; Shiki, in a limited life, changed Japanese literature. They all belong to the Meiji era, but do not approach the white cloud on the hillside in the same way."],
      ["也许正因为如此，我合上书后，最怀念的反而不是对马海峡上的联合舰队，而是小说开头松山的三个年轻人。",
       "Perhaps for this reason, when I closed the book, what I missed most was not the Combined Fleet in the Tsushima Strait but the three young men of Matsuyama at the start of the novel."],
      ["那时他们还不知道未来会发生什么，也还没有被后来的历史赋予胜利者的身份。",
       "Then they did not know what the future held, nor had later history yet given them the standing of victors."],
      ["山坡上的云仍然遥远，所有道路似乎都还敞开着。",
       "The cloud over the hillside is still far away, and every road seems still open."],
      ["**我愿意相信，那时他们仰望的，确实只是一朵云。至于后来的人们如何把它变成一个帝国的方向，那已经是另一段历史了。**",
       "**I want to believe that what they looked up at then was truly just a cloud. How later people turned it into the direction of an empire is another history.**"]
    ]
  },
  {
    "date": "2014-03-21",
    "title": "A Forgotten Nose",
    "slug": "a-forgotten-nose",
    "category": "Novel",
    "book": {
      "cover": "goodbye_columbus.jpg",
      "title": "Goodbye, Columbus",
      "author": "Philip Roth",
      "language": "English",
      "country": "United States",
      "original": "English",
      "lines": [
        "Novella and stories · English original, first published 1959",
        "Neil Klugman, a library clerk from Newark, falls for Brenda Patimkin, a daughter of the prosperous suburbs, over one summer."
      ]
    },
    "place": "于加拿大温哥华\nVancouver, Canada",
    "languages": ["Chinese", "English"],
    "prose": [
      ["我觉得《再见，哥伦布》中最耐人寻味的细节，是布伦达做过鼻部整形手术。", "I think the most intriguing detail in *Goodbye, Columbus* is that Brenda has had a nose job."],
      ["对于一个出生在富裕犹太家庭的美国女孩而言，这似乎只是一次普通的美容选择。但在罗斯笔下，鼻子从来不只是鼻子。它关乎一个人如何看待自己的出身，又希望别人如何辨认自己。", "For an American girl born into a wealthy Jewish family, this seems an ordinary cosmetic choice. But in Roth’s hands a nose is never just a nose. It concerns how a person sees her origins and how she wants others to recognize her."],
      ["布伦达的父辈通过经商积累财富，从纽瓦克走向富裕的郊区。他们已经获得了上一代犹太移民梦寐以求的物质生活：宽敞的住宅、游泳池、大学教育，以及不再需要为生计焦虑的子女。", "Brenda’s parents built their wealth in business and moved from Newark to the affluent suburbs. They already have the material life the previous generation of Jewish immigrants dreamed of: a spacious house, a swimming pool, college education, and children who no longer need to worry about making a living."],
      ["但布伦达改变鼻子的形状，却让我觉得，这种成功似乎还没有完成。", "But Brenda’s reshaping of her nose makes me feel that this success is somehow not yet complete."],
      ["财富能够改变居住的街区，却不能自动改变一个人的身体。她可以离开纽瓦克，却仍然带着某些被认为属于纽瓦克的特征。", "Wealth can change the neighborhood one lives in, but not automatically one’s body. She can leave Newark yet still carry certain features thought to belong to Newark."],
      ["于是，社会流动最终变成了一场对身体的修饰。", "And so social mobility ends up as a refinement of the body."],
      ["更有意思的是，尼尔对此并非毫无察觉。他来自仍然保留着犹太工人阶层生活气息的纽瓦克，对布伦达一家既向往又不屑。他看得出郊区生活中的虚荣，却同样被它吸引。", "More interesting, Neil is not unaware of this. He comes from a Newark that still keeps the feel of working-class Jewish life, and both longs for and scorns Brenda’s family. He sees the vanity in suburban life yet is drawn to it all the same."],
      ["我想，尼尔对布伦达的迷恋，某种程度上也是对她所代表的生活的迷恋。他爱她，却不断审视她；渴望进入她的世界，又不愿承认自己渴望进入。", "I think Neil’s infatuation with Brenda is also, to some degree, an infatuation with the life she represents. He loves her yet keeps scrutinizing her; he longs to enter her world and will not admit he longs to."],
      ["而布伦达的鼻子，恰好使这种矛盾变得可见。", "And Brenda’s nose happens to make this contradiction visible."],
      ["尼尔可以嘲笑富裕阶层对身份的修饰，却无法否认，自己也在用另一套标准衡量布伦达：她是否足够真实，是否背叛了自己的出身，是否还能理解他所熟悉的世界。", "Neil can mock the affluent class’s refinement of identity, yet cannot deny that he too measures Brenda by another set of standards: whether she is real enough, whether she has betrayed her origins, whether she can still understand the world he knows."],
      ["在这里，罗斯没有安排一个无辜者与一个虚荣者。他写的是两个都无法摆脱阶级目光的人。", "Here Roth does not set up an innocent and a vain person. He writes two people neither of whom can escape the gaze of class."],
      ["我尤其觉得，鼻部整形这个细节揭示了美国同化叙事中一种不易察觉的残酷：一个群体经过几代人的努力，终于有能力进入主流社会，却可能开始把自己原本的特征视为需要修正的缺陷。", "I especially feel that the nose job reveals a subtle cruelty in the American narrative of assimilation: a group, after generations of effort, finally gains the means to enter the mainstream, and may begin to see its own original features as defects to be corrected."],
      ["然而，布伦达并不一定认为自己正在背叛犹太身份。对她而言，这或许只是一次个人选择。正是这种无须解释的自然，才说明阶级变化已经深入日常生活。", "Yet Brenda need not think she is betraying her Jewish identity. To her this may be only a personal choice. It is precisely this unexplained naturalness that shows how deeply class change has entered everyday life."],
      ["上一代人努力改变的是自己的命运，下一代人甚至可以改变自己的面孔。", "The previous generation worked to change its fate; the next can even change its face."],
      ["《再见，哥伦布》最令我欣赏的地方，是罗斯没有直接告诉读者这种变化究竟意味着解放还是丧失。他只是让尼尔注视着布伦达，让欲望、阶级与身份在一次亲密的凝视中纠缠起来。", "What I admire most in *Goodbye, Columbus* is that Roth never tells the reader outright whether this change means liberation or loss. He simply lets Neil look at Brenda, and lets desire, class and identity tangle in one intimate gaze."],
      ["我想，尼尔最终失去的也许不只是布伦达。他曾经如此接近那个有游泳池、有宽敞草坪、有着另一种生活秩序的世界，却始终无法确定，自己究竟是在爱一个女人，还是在爱一种可以通过她抵达的人生。", "I think what Neil finally loses may be more than Brenda. He came so close to that world of the swimming pool, the wide lawn, another order of life, yet could never be sure whether he was loving a woman or a life he could reach through her."],
      ["而布伦达或许从来没有意识到，自己身上那个早已消失的特征，在尼尔眼中竟承载着如此沉重的意义。", "And Brenda perhaps never realized that a feature of hers, long since gone, carried such heavy meaning in Neil’s eyes."],
      ["**她已经不再需要那只鼻子了。可尼尔似乎仍然需要它，来辨认她究竟从哪里来。**", "**She no longer needs that nose. But Neil seems to still need it, to recognize where she really comes from.**"]
    ]
  },
  {
    "date": "2014-09-30",
    "title": "When the American Dream Has Come True",
    "slug": "when-the-american-dream-has-come-true",
    "category": "Novel",
    "book": {
      "cover": "american_pastoral.jpg",
      "title": "American Pastoral",
      "author": "Philip Roth",
      "language": "English",
      "country": "United States",
      "original": "English",
      "lines": [
        "Novel · English original, first published 1997",
        "Seymour “the Swede” Levov, a successful second-generation Jewish American, sees his daughter Merry turn to radical politics and violence."
      ]
    },
    "place": "于华盛顿州西雅图\nSeattle, WA",
    "languages": ["Chinese", "English"],
    "prose": [
      ["作为一个刚来美国读书的外来者，我读《美国牧歌》时，始终觉得自己与西摩·利沃夫之间存在一种奇怪的距离。", "As a newcomer who has only just come to America to study, reading *American Pastoral* I always felt a strange distance between myself and Seymour Levov."],
      ["他是出生在美国的第二代犹太移民后裔，而我是成年以后才来到美国读书，还没有决定未来是否留下来。我们对美国的理解显然不同，但我又很容易理解他为什么如此相信自己所拥有的生活。", "He is the American-born descendant of Jewish immigrants, while I came to America as an adult to study, and have not yet decided whether to stay. Our understandings of America are plainly different, yet I can easily see why he believes so firmly in the life he has."],
      ["西摩几乎实现了上一代移民对美国的全部期待。他英俊、擅长运动，继承并经营父亲的手套生意，娶了一位曾经获得新泽西小姐称号的妻子，住进漂亮的乡间住宅。他的生活似乎证明，一个移民家庭经过两代人的努力，终于可以摆脱原来的社会限制，成为真正意义上的美国人。", "Seymour has realized almost everything the previous generation of immigrants hoped for from America. He is handsome and athletic, inherits and runs his father’s glove business, marries a former Miss New Jersey, and settles in a beautiful country house. His life seems to prove that an immigrant family, after two generations of effort, can finally escape its old social limits and become American in the fullest sense."],
      ["我觉得，这种成功对移民而言，有一种美国本土出生的人未必能够完全理解的意义。", "I think this kind of success has a meaning for immigrants that the American-born may not fully grasp."],
      ["因为对第一代移民来说，美国最初并不是一个抽象的政治理念，而是一连串非常具体的选择。在哪里读书，毕业后能否留下，如何找到工作，怎样建立信用、购买房产，什么时候才能获得永久居留权，最后又是否能够成为公民。", "For a first-generation immigrant, America is at first not an abstract political idea but a series of very concrete choices: where to study, whether you can stay after graduating, how to find a job, how to build credit and buy a home, when you can get permanent residency, and finally whether you can become a citizen."],
      ["这些事情在完成之前，都带着某种不确定性。而当它们终于一件件实现，我们很容易把这种个人经历理解为美国社会仍然值得相信的证明。", "Each of these carries uncertainty until it is done. And when they are finally accomplished one by one, we easily take this personal experience as proof that American society is still worth believing in."],
      ["我自己也刚刚踏上类似的道路。从申请学校、办理签证，到在美国读书、适应新的生活，我已经从美国的教育与社会制度中获得了不少机会，也开始想象那些未来可能一件件实现的事情。", "I have only just set out on a similar path myself. From applying to schools and arranging a visa to studying in America and adapting to a new life, I have already gained quite a few opportunities from America’s education and social institutions, and have begun to imagine the things that may one by one come true."],
      ["因此，我并不想像一个置身事外的评论者那样，轻易嘲笑西摩所相信的美国梦。恰恰相反，我觉得自己能够理解他的满足，甚至理解他为什么不愿意怀疑这种满足。", "So I do not want to mock, like a detached commentator, the American dream Seymour believes in. On the contrary, I feel I can understand his contentment, and even why he is unwilling to doubt it."],
      ["但罗斯最残酷的地方，是他偏偏让这样一个人，遭遇了自己完全无法理解的女儿。", "But Roth’s cruelest stroke is to give such a man a daughter he cannot understand at all."],
      ["梅丽出生在西摩已经建立起来的富裕家庭之中。她不需要像祖父那样通过经营生意摆脱贫困，也不需要像父亲那样努力证明犹太移民后代能够进入美国主流社会。她从出生起就拥有父亲曾经努力争取的一切，却最终选择反抗这个家庭所代表的生活。", "Merry is born into the prosperous family Seymour has already built. She does not need to escape poverty by running a business as her grandfather did, nor to prove, as her father did, that the children of Jewish immigrants can enter the American mainstream. She has from birth everything her father struggled to win, and in the end chooses to rebel against the life this family represents."],
      ["她卷入反越战的激进政治，并参与造成死亡的爆炸事件。", "She is drawn into radical anti-Vietnam War politics and takes part in a bombing that causes a death."],
      ["我觉得，这里最值得思考的，并不是为什么一个富裕家庭会培养出如此激进的女儿，而是为什么西摩始终相信，自己的成功应该能够解释女儿的幸福。", "What seems most worth thinking about here is not why a wealthy family would raise such a radical daughter, but why Seymour always believes his success should explain his daughter’s happiness."],
      ["他给了梅丽良好的生活条件，尽力做一个负责任的父亲，也相信自己对他人始终保持善意。但这些事情并不能保证女儿认同他的价值观，更不能保证她会以同样的方式理解美国。", "He gives Merry a good life, tries to be a responsible father, and believes he has always been kind to others. But none of this guarantees that his daughter will share his values, still less that she will understand America in the same way."],
      ["对西摩来说，美国意味着机会、宽容、努力和社会流动；对梅丽来说，美国也意味着越南战争、政治暴力，以及她无法接受的社会矛盾。", "For Seymour, America means opportunity, tolerance, effort and social mobility; for Merry, it also means the Vietnam War, political violence and social contradictions she cannot accept."],
      ["他们生活在同一个国家，甚至同一个家庭，却仿佛生活在两个不同的美国。", "They live in the same country, even the same family, yet as if in two different Americas."],
      ["这让我想到第一代移民与下一代之间可能存在的一种根本差异。", "This reminds me of a fundamental difference that may exist between first-generation immigrants and the next generation."],
      ["对于主动选择来到美国的人而言，我们往往会不断比较这里与自己曾经生活过的地方。我们知道自己为什么离开，也记得当初希望获得什么，因此更容易用个人生活的改善来衡量这个国家。", "Those of us who chose to come to America keep comparing it with the places we once lived. We know why we left and remember what we hoped to gain, so we more readily measure the country by the improvement of our own lives."],
      ["但对于出生在美国的下一代来说，美国不是一个经过比较之后作出的选择，而是他们从一开始就必须面对的现实。他们未必会因为父母曾经获得机会，就对这个社会怀有同样的感激。", "But for the American-born next generation, America is not a choice made after comparison but a reality they must face from the start. They need not feel the same gratitude toward this society just because their parents once found opportunity here."],
      ["我不认为哪一种理解一定更加正确。只是一个国家对于不同世代的人而言，可能具有完全不同的意义。", "I do not think either understanding is necessarily more correct. A country simply may mean entirely different things to different generations."],
      ["而我尤其喜欢罗斯没有直接告诉读者，西摩究竟错在哪里。", "And I especially like that Roth never tells the reader outright where Seymour went wrong."],
      ["他不是一个虚伪的人，也没有刻意忽略家庭责任。他甚至在很多方面都值得尊敬。可他越是努力理解梅丽，越是发现自己熟悉的道德语言无法解释她的行为。", "He is not a hypocrite, nor does he deliberately neglect his family duties. In many ways he is even admirable. But the harder he tries to understand Merry, the more he finds that the moral language he knows cannot explain her actions."],
      ["小说中这种无力感，比任何直接批判美国梦的文字都更让我难忘。", "This helplessness in the novel stays with me more than any text that directly criticizes the American dream."],
      ["因为我自己也越来越意识到，个人生活的成功很容易让人产生一种错觉：既然我能够通过努力获得现在的一切，那么这个社会的运行方式，至少在根本上应该是合理的。", "I too increasingly realize that personal success easily creates an illusion: since I could get everything I have through effort, the way this society works must at least be fundamentally reasonable."],
      ["尤其是在西雅图这样的科技城市，这种想法几乎无处不在。我们习惯相信教育、能力、技术创新与个人努力之间存在某种可以持续复制的关系。一个人获得了好的工作、收入和资产，便很容易把这些结果理解为对自己选择的肯定。", "In a tech city like Seattle especially, this thinking is almost everywhere. We are used to believing in a repeatable relationship among education, ability, technological innovation and personal effort. Someone who gets a good job, income and assets easily takes these results as an affirmation of their choices."],
      ["但这些经历究竟能够说明多少美国社会的现实？", "But how much of American reality can these experiences really tell us?"],
      ["我在美国获得的机会是真实的，梅丽所反抗的社会问题也同样真实。前者并不能否定后者，就像西摩的善良与成功，也不能证明他已经理解了女儿生活的世界。", "The opportunities I found in America are real, and so are the social problems Merry rebels against. The former does not cancel the latter, just as Seymour’s goodness and success do not prove he understands the world his daughter lives in."],
      ["还有一点让我觉得《美国牧歌》特别有意思：我们所认识的西摩，其实很大程度上是通过内森·祖克曼的想象建立起来的。", "Another thing I find especially interesting in *American Pastoral*: the Seymour we know is largely built through Nathan Zuckerman’s imagination."],
      ["祖克曼最初记得的是少年时代那个近乎完美的瑞典佬，一个仿佛已经超越族裔限制、实现美国理想的人物。后来，他试图通过西摩家庭的悲剧，重新理解这个曾经被自己崇拜的人。", "What Zuckerman first remembers is the nearly perfect Swede of his boyhood, a figure who seemed to have transcended ethnic limits and realized the American ideal. Later he tries, through the tragedy of Seymour’s family, to understand anew the man he once worshipped."],
      ["但祖克曼真的理解了西摩吗？", "But does Zuckerman truly understand Seymour?"],
      ["我始终有些怀疑。因为他所讲述的西摩，也许同样是一个经过想象与重新组织的人物。那个完美的美国人，既是西摩努力成为的自己，也是祖克曼曾经希望美国能够成为的样子。", "I have always had my doubts. The Seymour he tells may likewise be a figure imagined and reassembled. That perfect American is both the self Seymour strove to be and what Zuckerman once hoped America could be."],
      ["这使整部小说在我看来，不只是一个家庭的悲剧，也是一个人如何不断修改自己对美国的理解的过程。", "To me this makes the whole novel not only the tragedy of one family but also the process by which a person keeps revising his understanding of America."],
      ["年轻时，我们容易把美国理解为一个可以通过努力进入的世界。等到真正进入其中，拥有了曾经期待的生活，才逐渐发现，成功并不会自动带来对这个社会的理解。", "When young, we readily see America as a world we can enter through effort. Only after truly entering it and having the life we hoped for do we gradually discover that success does not automatically bring an understanding of this society."],
      ["我现在仍然相信美国给予个人选择和改变命运的机会。这种相信并不只是来自某种政治理念，而是来自我自己的生活经历。", "I still believe America gives individuals the chance to choose and to change their fate. This belief comes not merely from a political idea but from my own life."],
      ["但读完《美国牧歌》，我开始更加警惕另一件事：不要因为自己的美国梦正在实现，就以为自己已经理解了美国。", "But after *American Pastoral* I am warier of something else: not to assume that I understand America just because my own American dream is coming true."],
      ["西摩的悲剧或许并不是他相信了一个完全虚假的梦想，而是那个梦想在他身上实现得太过完整，使他越来越难以想象，还有人会以完全不同的方式看待同一个国家。", "Seymour’s tragedy may not be that he believed a wholly false dream, but that the dream came true in him so completely that he found it ever harder to imagine anyone seeing the same country in an entirely different way."],
      ["而我想，对于一个像我这样可能留在美国的外来者而言，真正困难的也许不是最终成为美国人，而是在成为美国人以后，仍然愿意承认：自己所经历的美国，只是这个国家无数种现实中的一种。", "And I think that for an outsider like me who may stay in America, the real difficulty may not be finally becoming American, but, once American, still being willing to admit that the America one has lived is only one of this country’s countless realities."]
    ]
  },
  {
    "date": "2014-10-16",
    "title": "Who Is a Real American?",
    "slug": "who-is-a-real-american",
    "category": "Novel",
    "book": {
      "cover": "i_married_a_communist.jpg",
      "title": "I Married a Communist",
      "author": "Philip Roth",
      "language": "English",
      "country": "United States",
      "original": "English",
      "lines": [
        "Novel · English original, first published 1998",
        "Radio star Ira Ringold, a communist, is destroyed in the McCarthy era, his story told by Murray Ringold to Nathan Zuckerman."
      ]
    },
    "place": "于华盛顿州西雅图\nSeattle, WA",
    "languages": ["Chinese", "English"],
    "prose": [
      ["来到美国以后，我一直对这个国家有一种矛盾的印象。它似乎比任何地方都强调个人自由，却又特别热衷于判断谁才是真正的美国人。", "Since coming to America I have had a contradictory impression of the country. It seems to stress individual freedom more than anywhere else, yet is especially eager to judge who is a real American."],
      ["读罗斯的《我嫁给了一个共产党员》，这种矛盾变得更加明显。", "Reading Roth’s *I Married a Communist* made this contradiction even clearer."],
      ["艾拉·林戈尔德是一个美国人，出身工人阶级，参加过战争，后来成为广播明星。他相信共产主义，性格冲动，也有不少令人讨厌的缺点。但到了麦卡锡主义盛行的年代，这些复杂的个人经历突然都不重要了。他首先是一个共产党员，然后才是一个人。", "Ira Ringold is an American, of working-class origin, a war veteran who later becomes a radio star. He believes in communism, is impulsive, and has plenty of unlikable flaws. But in the age of McCarthyism, this complicated personal history suddenly stops mattering. He is first a communist, and only then a person."],
      ["尤其令我不安的是，艾拉并没有失去美国国籍，却逐渐失去了被当作美国人对待的资格。他的婚姻、朋友、过去说过的话，都可以被重新解释成政治罪证。甚至妻子伊芙出于私人恩怨的揭露，也能在反共浪潮中变成维护国家利益的正义行为。", "What disturbs me most is that Ira never loses his American citizenship, yet gradually loses the standing to be treated as an American. His marriage, his friends, what he once said can all be reinterpreted as political evidence of guilt. Even the exposure by his wife Eve, driven by private grievance, can become a righteous act defending the national interest amid the anti-communist wave."],
      ["我觉得，这才是政治迫害最可怕的地方：它不一定需要捏造事实，只需要改变解释事实的方式。", "I think this is the most frightening thing about political persecution: it does not necessarily need to fabricate facts, only to change the way facts are interpreted."],
      ["一个人的愤怒可以被解释为危险，沉默可以被解释为心虚，辩解又可以被解释为狡猾。只要先认定他是敌人，几乎任何事情都能成为证据。", "A person’s anger can be read as danger, silence as guilt, and defense as cunning. Once he is decided to be an enemy, almost anything can become evidence."],
      ["这让我想到自己为什么选择来美国。对我而言，美国最吸引人的地方，是一个人不必出生在这里，也可以通过读书、工作与自己的努力，逐渐成为这个社会的一部分。", "This makes me think of why I chose to come to America. For me, what is most attractive about it is that a person need not be born here to gradually become part of this society through study, work and his own effort."],
      ["但我又忍不住怀疑，如果有一天，一个人的美国身份不再取决于法律，而取决于他是否符合某种文化或政治上的期待，那么像我这样的外来者，究竟什么时候才不再是外人？", "But I cannot help wondering: if one day a person’s Americanness no longer depends on the law but on whether he meets some cultural or political expectation, when would an outsider like me ever stop being a stranger?"],
      ["我甚至觉得，美国未来还会出现类似麦卡锡主义的政治狂热，只是下一次被指责的未必是共产党员。", "I even feel that America may see a political fervor like McCarthyism again, only that next time those accused may not be communists."],
      ["也许会有人告诉美国人，他们的国家正在被移民、少数族群或某些持不同观点的人夺走。也许会出现一个特别善于利用这种情绪的政治人物，把复杂的社会问题解释成某些人对美国的背叛。", "Perhaps someone will tell Americans that their country is being taken away by immigrants, minorities or people with different views. Perhaps a politician will appear who is especially good at exploiting this mood, explaining complicated social problems as some people’s betrayal of America."],
      ["我不知道这会不会发生。但我始终觉得，让人相信自己正在失去原本属于自己的东西，比让人理解社会为什么发生变化，要容易得多。", "I do not know whether this will happen. But I have always felt that it is far easier to make people believe they are losing what was theirs than to make them understand why society is changing."],
      ["罗斯还有一个安排让我很喜欢。我们认识的艾拉，其实来自多年后默里的回忆，再经过祖克曼的讲述。即使读完整部小说，我们也无法确定自己是否真正理解了他。", "There is another of Roth’s arrangements I like. The Ira we know comes from Murray’s memories years later, retold through Zuckerman. Even after finishing the whole novel, we cannot be sure we truly understand him."],
      ["这让我开始怀疑，我们对一个人的判断，究竟有多少来自他的真实经历，又有多少来自别人希望我们如何理解他。", "This makes me wonder how much of our judgment of a person comes from his real experience, and how much from how others want us to understand him."],
      ["麦卡锡主义者需要一个危险的共产党员，艾拉的支持者则可能需要一个无辜的受害者。但我觉得，罗斯偏偏不愿意让他完全成为其中任何一种人。", "The McCarthyites need a dangerous communist, and Ira’s supporters may need an innocent victim. But Roth, I think, is precisely unwilling to make him wholly either."],
      ["也许这就是文学比政治更值得信任的地方。政治总想尽快告诉我们一个人属于哪一边，文学却让我们发现，他可能根本无法被这样分类。", "Perhaps this is where literature is more trustworthy than politics. Politics wants to tell us quickly which side a person is on; literature lets us find that he may not be classifiable that way at all."],
      ["读完小说，我越来越觉得，一个社会最危险的时刻，未必是它公开反对自由的时候，而是它开始相信，为了保护自己的自由，必须先把某些人排除出去。", "After finishing the novel, I increasingly feel that a society’s most dangerous moment is not necessarily when it openly opposes freedom, but when it begins to believe that, to protect its own freedom, it must first exclude certain people."],
      ["毕竟，当我们已经确信一个人不属于“我们”时，往往也就不再觉得有必要听懂他说什么了。", "After all, once we are convinced a person does not belong to “us,” we often no longer feel any need to understand what he says."]
    ]
  },
  {
    "date": "2014-10-31",
    "title": "Personal Effort Cannot Explain Fate",
    "slug": "personal-effort-cannot-explain-fate",
    "category": "Novel",
    "book": {
      "cover": "nemesis_roth.jpg",
      "title": "Nemesis",
      "author": "Philip Roth",
      "language": "English",
      "country": "United States",
      "original": "English",
      "lines": [
        "Novel · English original, first published 2010",
        "In Newark in the summer of 1944, playground director Bucky Cantor faces a polio epidemic that strikes the children in his care."
      ]
    },
    "place": "于华盛顿州西雅图\nSeattle, WA",
    "languages": ["Chinese", "English"],
    "prose": [
      ["在美国的课堂和办公室里，我听得最多的一句话是：你的人生，由你自己负责。", "In American classrooms and offices, the line I have heard most is this: your life is yours to answer for."],
      ["这种观念对我很有吸引力。选择出国留学，本身就是一种对个人奋斗的相信。我愿意离开熟悉的环境，重新适应语言、教育制度和生活方式，很大程度上也是因为我相信，人生不应该完全由出生在哪里决定。", "This idea appeals to me. Choosing to study abroad was itself a belief in personal effort. I was willing to leave a familiar environment and readjust to a new language, education system and way of life largely because I believed that life should not be determined entirely by where one is born."],
      ["但我也慢慢发现，美国社会对个人选择的强调，有时候几乎到了令人不安的程度。", "But I also slowly found that American society’s emphasis on personal choice sometimes goes almost to an unsettling degree."],
      ["在学校里，我经常听到人们谈论自己的目标、规划和未来。成绩、实习、职业发展，似乎都可以通过合理安排与持续努力得到改善。一个人取得成功，我们习惯赞美他的自律与能力；但如果有人遭遇失败，我们又很容易反过来怀疑，他是不是没有足够努力。", "At school I often heard people talk about their goals, plans and futures. Grades, internships and career development all seemed improvable through sensible planning and sustained effort. When someone succeeds, we are used to praising his discipline and ability; but when someone fails, we easily turn around and suspect he did not try hard enough."],
      ["我自己也不例外。刚来美国时，英语表达不够自然，我会觉得是自己练习不足；面对陌生的课程与学术要求，我也习惯首先检讨自己的准备是否充分。这种思维确实让我更加独立，却也逐渐让我相信，生活中的大多数困难都应该能够找到个人原因。", "I was no exception. When I first came, my English did not flow naturally and I felt I had not practiced enough; facing unfamiliar courses and academic demands, I too first examined whether I was well enough prepared. This way of thinking did make me more independent, but it also gradually led me to believe that most difficulties in life should have a personal cause."],
      ["读罗斯的《复仇女神》，我第一次认真怀疑这种信念的边界。", "Reading Roth’s *Nemesis*, I seriously questioned the limits of this belief for the first time."],
      ["1944年的纽瓦克，脊髓灰质炎在夏季蔓延。年轻的体育教师巴基·坎托尔因为视力问题无法参军，留在家乡照顾孩子。他认真负责，甚至把保护孩子当作自己在战争年代能够承担的使命。但疾病并不在乎他的善良，孩子们仍然接连感染、死亡。", "In Newark in 1944, polio spreads through the summer. Bucky Cantor, a young physical education teacher, cannot enlist because of his eyesight and stays home to look after children. He is conscientious, and even treats protecting the children as the mission he can bear in wartime. But the disease does not care about his goodness; the children are infected and die one after another."],
      ["最让我难忘的，是巴基后来怀疑自己将病毒带到了夏令营，并把悲剧归咎于自己的选择。", "What I remember most is that Bucky later suspects he brought the virus to the summer camp, and blames the tragedy on his own choices."],
      ["我觉得，他真正无法接受的，并不是疾病本身，而是自己已经尽了责任，却仍然无法阻止不幸发生。", "I think what he truly cannot accept is not the disease itself, but that he has done his duty and still could not prevent the misfortune."],
      ["这让我想到美国个人主义中一个很微妙的矛盾。", "This makes me think of a subtle contradiction in American individualism."],
      ["我们鼓励一个人相信自己能够改变命运，但如果把这种信念推到极端，是否也意味着每一次不幸都应该由个人承担？", "We encourage a person to believe he can change his fate, but if that belief is pushed to the extreme, does it also mean that every misfortune must be borne by the individual?"],
      ["在美国读书，我越来越习惯把生活理解成一连串选择：选什么课程，如何安排时间，怎样为未来做准备。每个决定似乎都应该有一个可以预期的结果。", "Studying in America, I grew more and more used to seeing life as a series of choices: which courses to take, how to arrange my time, how to prepare for the future. Every decision seemed to deserve a predictable result."],
      ["但我有时会想，如果一个学生足够努力，却因为家庭条件不得不中断学业；如果一个人认真工作，却因为经济环境失去收入；如果一个善良的人突然患病，我们是否仍然应该从他的个人选择中寻找解释？", "But I sometimes wonder: if a student works hard enough but must interrupt his studies because of family circumstances; if someone works diligently but loses income because of the economy; if a kind person suddenly falls ill, should we still look for the explanation in his personal choices?"],
      ["巴基的悲剧，恰恰是他无法承认责任存在边界。他不仅要为自己做过的事情负责，还试图为所有自己未能阻止的事情负责。", "Bucky’s tragedy is precisely that he cannot admit responsibility has limits. He wants to answer not only for what he has done but for everything he failed to prevent."],
      ["我尤其喜欢罗斯没有让他通过苦难获得某种人生智慧。他最终没有学会与偶然和解，反而放弃了爱情，把余生变成对自己的惩罚。", "I especially like that Roth does not let him gain some wisdom through suffering. He never learns to make peace with chance, and instead gives up love and turns the rest of his life into a punishment of himself."],
      ["但我觉得，罗斯真正高明的地方，是他甚至没有让巴基亲自讲述这场悲剧。", "But Roth’s real brilliance, I think, is that he does not even let Bucky tell the tragedy himself."],
      ["我们所认识的巴基，来自多年以后幸存者阿诺德·梅斯尼科夫的回忆。阿诺德同样感染了脊髓灰质炎，也留下了终身的身体损伤，却没有因此放弃生活。两个人经历了相似的灾难，最终却以完全不同的方式理解自己的命运。", "The Bucky we know comes from the memories, years later, of Arnie Mesnikoff, a survivor. Arnie also caught polio and was left with lifelong physical damage, yet did not give up on life. The two men lived through a similar disaster but ended up understanding their fates in entirely different ways."],
      ["这使我开始怀疑，巴基的悲剧究竟有多少来自疾病，又有多少来自他后来赋予疾病的意义。", "This made me wonder how much of Bucky’s tragedy comes from the disease and how much from the meaning he later gave it."],
      ["小说名为《复仇女神》，很容易让人想到古希腊悲剧中惩罚人类傲慢的涅墨西斯。但罗斯笔下并没有一位真正主持正义的神明。疾病不会因为巴基善良而宽恕他，也不会因为他自责而停止传播。", "The novel is called *Nemesis*, easily recalling the Greek goddess who punishes human arrogance. But Roth’s world has no god who truly administers justice. The disease does not spare Bucky for his goodness, nor stop spreading because he blames himself."],
      ["更讽刺的是，巴基越是试图寻找惩罚的理由，便越像是在替一个根本不存在的神明完成审判。", "More ironic still, the harder Bucky searches for a reason for his punishment, the more he seems to be carrying out the judgment of a god who does not exist."],
      ["我想，这也是罗斯与传统悲剧之间最有意思的区别。俄狄浦斯最终发现了自己命运背后的真相，而巴基却始终无法确定，自己所相信的罪责究竟是否成立。他不是因为发现真相而毁灭，而是因为无法忍受没有真相的可能，才逐渐毁掉了自己。", "I think this is the most interesting difference between Roth and traditional tragedy. Oedipus finally discovers the truth behind his fate, while Bucky can never be sure whether the guilt he believes in is even valid. He is not destroyed by finding the truth, but gradually destroys himself because he cannot bear the possibility that there is none."],
      ["读到最后，我反而觉得，罗斯真正写出的并不是一个人与疾病的斗争，而是一个人如何把偶然发生的灾难，重新讲述成自己应得的惩罚。", "By the end I feel that what Roth really writes is not one man’s struggle against disease but how a person retells a disaster that happened by chance as a punishment he deserves."],
      ["巴基需要一个有罪的自己，才能相信世界仍然存在某种道德秩序。", "Bucky needs a guilty self in order to believe the world still has some moral order."],
      ["而小说最残酷的地方，或许就在于它始终没有证明这种秩序真的存在。", "And perhaps the cruelest thing about the novel is that it never proves such an order exists."]
    ]
  },
  {
    "date": "2012-05-02",
    "title": "In the Cracks of the World",
    "slug": "in-the-cracks-of-the-world",
    "category": "Novel",
    "book": {
      "cover": "1q84.jpg",
      "title": "1Q84",
      "author": "Haruki Murakami",
      "language": "English",
      "country": "Japan",
      "original": "Japanese",
      "lines": [
        "Novel · English translation of the Japanese original, 2009–10",
        "Aomame climbs down an expressway stairwell in Tokyo and finds herself in a world with two moons."
      ]
    },
    "place": "于中国长沙\nChangsha, China",
    "languages": ["Chinese", "English"],
    "prose": [
      ["东京的高速公路上，汽车一辆接着一辆，静止在本该流动的车道里。车窗之外，是一座被道路、桥梁、隧道和时间表精密组织起来的城市；车窗之内，雅纳切克的《小交响曲》正在播放。青豆坐在出租车后座，望着前方看不到尽头的车流。她有一个不能迟到的约会，而这座以速度著称的城市，此刻却无法让她前进一步。",
       "On a Tokyo expressway, cars stand one behind another, stopped in lanes meant to flow. Outside the windows is a city precisely organized by roads, bridges, tunnels and timetables; inside, Janáček’s *Sinfonietta* is playing. Aomame sits in the back of a taxi, looking at the endless line of traffic ahead. She has an appointment she must not be late for, and this city renowned for speed cannot, at this moment, move her one step forward."],
      ["我一直觉得，《1Q84》最精彩的地方，就藏在这场交通堵塞里。",
       "I have always felt that the best part of *1Q84* is hidden in this traffic jam."],
      ["高速公路是现代文明颇为自信的发明。它将城市从地面抬起，让人们摆脱街巷的曲折、行人的干扰和十字路口的等待，以更快的速度抵达更远的地方。它有明确的入口与出口，有规定的方向和不可逾越的护栏。只要驶入其中，人便不再需要决定如何行走，只需相信道路已经替自己作出了最合理的安排。",
       "The expressway is a rather self-confident invention of modern civilization. It lifts the city off the ground and lets people escape the twists of lanes, the interference of pedestrians and the waiting at intersections, to reach farther places at greater speed. It has clear entrances and exits, set directions and guardrails that cannot be crossed. Once one drives onto it, one no longer needs to decide how to move, only to trust that the road has made the most reasonable arrangement for one."],
      ["然而，一旦交通停滞，这种自由便显露出奇异的反面。坐在车里的人拥有汽车，却不能移动；拥有目的地，却不能选择道路。高速公路不允许犹豫，也不容许回头。它以效率的名义取消了岔路，又在效率失效时，使所有人困在同一个方向里。",
       "Yet once traffic stops, this freedom shows its strange reverse. The people in the cars own cars but cannot move; they have destinations but cannot choose roads. The expressway allows no hesitation and no turning back. In the name of efficiency it abolished the side roads, and when efficiency fails it leaves everyone trapped in the same direction."],
      ["青豆的出租车司机知道一条不寻常的出路。附近有一道紧急楼梯，可以从高速公路下到地面。他告诉青豆，那不是供普通行人使用的通道，并以一种难以捉摸的口吻提醒她：一旦做出与平常不同的事情，周围的景象也可能随之改变。",
       "Aomame’s taxi driver knows an unusual way out. Nearby is an emergency staircase leading from the expressway down to the ground. He tells Aomame it is not a passage for ordinary pedestrians, and warns her, in an elusive tone, that once she does something out of the ordinary, the scene around her may change with it."],
      ["这句话从一个出租车司机口中说出来，几乎显得过分平静。他没有神秘的身份，没有预言者的姿态，只是坐在方向盘后面，像介绍一条鲜为人知的近路那样，指出了现实的一处裂缝。村上春树深谙这种不动声色的荒诞。真正令人不安的事物，往往不需要以惊人的面貌出现。它可能只是一个普通人，在一个普通的下午，说了一句后来才显得意味深长的话。",
       "Coming from a taxi driver, the remark seems almost excessively calm. He has no mysterious identity, no prophet’s pose; he simply sits behind the wheel and points out a crack in reality as if introducing a little-known shortcut. Murakami knows this impassive absurdity well. What is truly unsettling need not appear in a startling guise. It may be only an ordinary person, on an ordinary afternoon, saying something that only later seems full of meaning."],
      ["青豆于是下车，翻过护栏，找到那道狭窄的楼梯。她穿着短裙、丝袜和高跟鞋，不得不小心调整身体，沿着阶梯向下走。没有闪电，没有迷雾，也没有任何预示世界即将改变的奇迹。只有高跟鞋与台阶之间不甚协调的接触，只有一个女人为了不弄坏衣服而显得有些笨拙的动作。",
       "So Aomame gets out, climbs over the guardrail and finds the narrow staircase. In a short skirt, stockings and high heels, she must adjust her body carefully and descend step by step. There is no lightning, no mist, no miracle foretelling that the world is about to change. Only the awkward contact between high heels and steps, only a woman’s slightly clumsy movements to avoid spoiling her clothes."],
      ["我尤其喜欢村上在这里对身体的坚持。高跟鞋、丝袜、短裙，都是青豆在都市生活中精心选择的装束。它们适合某种被安排好的行走方式，却不适合翻越护栏、攀爬应急楼梯。当她离开正常道路，身体首先感受到的不是自由，而是不便。仿佛现代生活早已替我们训练好了一套姿态：如何坐着，如何站立，如何优雅地穿过街道，如何在规定的空间里保持体面。一旦离开那些空间，连最熟悉的身体也会突然显得陌生。",
       "I especially like Murakami’s insistence on the body here. High heels, stockings, a short skirt are all attire Aomame has carefully chosen for city life. They suit a prearranged way of walking and do not suit climbing a guardrail or an emergency staircase. When she leaves the normal road, what the body feels first is not freedom but inconvenience. It is as if modern life had already trained a set of postures in us: how to sit, how to stand, how to cross the street gracefully, how to keep up appearances in designated spaces. Once we leave those spaces, even the most familiar body suddenly seems strange."],
      ["但这道楼梯真正迷人的地方，是它并不属于另一个世界。",
       "But what is truly fascinating about this staircase is that it does not belong to another world."],
      ["它属于高速公路。",
       "It belongs to the expressway."],
      ["它由同一套工程技术建造，被纳入同一套安全规范，只是在正常情况下不应被使用。高速公路为了保证自身的运转，必须预先承认运转可能中断；为了使人们始终沿着规定方向前进，又不得不保留一条允许他们离开的道路。于是，现代秩序在最隐蔽的地方，为自身留下了一道出口。",
       "It was built with the same engineering and fits the same safety codes, but under normal conditions it should not be used. To guarantee its own operation, the expressway must in advance admit that operation may be interrupted; to keep people always moving in the prescribed direction, it must keep a way for them to leave. And so modern order, in its most hidden place, leaves itself an exit."],
      ["**青豆并不是发现了一条秩序之外的道路。她发现的是，秩序从来没有它声称的那样完整。**",
       "**Aomame has not found a road outside order. What she has found is that order was never as complete as it claimed.**"],
      ["而她的离开甚至算不上反抗。青豆并不厌恶高速公路，也没有打算摆脱都市生活。恰恰相反，她走下楼梯，只是因为不愿迟到。她仍然相信钟表，相信约定，相信时间可以被精确分配，相信一个人应该按照计划完成自己的事情。她越是忠实于现代生活对于效率的要求，就越不得不违背维持这种效率的规则。",
       "And her leaving can hardly be called rebellion. Aomame does not hate the expressway and has no plan to escape city life. On the contrary, she goes down the stairs only because she does not want to be late. She still believes in clocks, in appointments, in time being precisely allotted, and in a person finishing her business as planned. The more faithful she is to modern life’s demand for efficiency, the more she must break the rules that sustain that efficiency."],
      ["这其中有一种近乎卡夫卡式的反讽：为了遵守秩序，必须首先逃离秩序。",
       "There is an almost Kafkaesque irony here: to obey the order, one must first flee it."],
      ["当青豆终于走到地面，东京并没有发生戏剧性的变化。建筑依旧，街道依旧，人们仍然忙于各自的生活。她没有来到一座废墟，也没有走进某个遥远的国度。后来，她才逐渐察觉一些细微而令人不安的偏差：警察的装备与记忆中的不同，某些重大事件似乎发生过，而她竟然毫不知情。直到她抬头看见两个月亮，才终于意识到，自己所生活的年份或许已经不再是1984。",
       "When Aomame finally reaches the ground, Tokyo has not changed dramatically. The buildings are the same, the streets the same, people still busy with their own lives. She has not come to a ruin or walked into some distant land. Only later does she gradually notice small, unsettling deviations: the police’s equipment differs from what she remembers, and some major events seem to have happened of which she knew nothing. Only when she looks up and sees two moons does she realize that the year she lives in may no longer be 1984."],
      ["她将它称为1Q84。",
       "She calls it 1Q84."],
      ["那个夹在数字之间的Q，是一个问号。它不像另一种纪年，更像一道无法愈合的裂痕。1984原本是确定的：一个年份，一段历史，一个所有人共同承认的现实。青豆却在其中插入了怀疑。世界并未因此消失，只是从此不再能够被毫无保留地相信。",
       "The Q wedged between the numbers is a question mark. It is less like another way of dating than a crack that cannot heal. 1984 was fixed: a year, a history, a reality everyone acknowledged. Aomame inserts doubt into it. The world does not vanish because of this; it simply can no longer be believed without reservation."],
      ["我觉得，两个月亮之所以令人恐惧，并不在于天文学上的不可能，而在于它们的沉默。它们悬挂在那里，照亮同一座东京，却没有人向青豆解释为什么。城市照常运行，地铁仍然到站，商店依旧营业，报纸继续报道新闻。整个社会仿佛拥有一种比个人感官更强大的确定性：只要生活没有停止，现实便无需受到质疑。",
       "I think the two moons are frightening not because of any astronomical impossibility but because of their silence. They hang there lighting the same Tokyo, and no one explains to Aomame why. The city runs as usual, trains still arrive, shops still open, newspapers keep reporting the news. The whole society seems to hold a certainty stronger than an individual’s senses: so long as life has not stopped, reality need not be questioned."],
      ["这使我重新理解了小说开头的高速公路。我们生活在庞大的制度与知识网络之中，依赖地图辨认方向，依赖新闻理解世界，依赖档案确认过去，依赖他人的判断建立自己的判断。这样的秩序使现代社会成为可能，也使我们逐渐习惯于相信，凡是没有被共同承认的事物，就不值得相信。",
       "This made me understand anew the expressway at the start of the novel. We live within vast networks of institutions and knowledge, relying on maps to find direction, on news to understand the world, on archives to confirm the past, on others’ judgments to form our own. Such order makes modern society possible, and also gradually accustoms us to believe that whatever is not commonly acknowledged is not worth believing."],
      ["而青豆的困境恰恰在于，她的眼睛与世界的共识发生了分歧。",
       "And Aomame’s predicament is precisely that her eyes have diverged from the world’s consensus."],
      ["倘若所有人都说天空只有一轮月亮，那么看见两轮月亮的人，首先怀疑的往往是自己。",
       "If everyone says the sky has only one moon, the person who sees two moons usually doubts herself first."],
      ["不过，村上并没有把走下高速公路写成一次简单的觉醒。1Q84不是一片自由的土地。那里有封闭的宗教团体，有难以辨认的权力，有Little People，还有比交通规则更加不可捉摸的支配。青豆从一套可以看见的秩序中离开，却进入了另一套连边界都无法确定的秩序。她获得了怀疑现实的能力，却没有因此获得解释现实的权力。",
       "Murakami does not, however, write the descent from the expressway as a simple awakening. 1Q84 is not a land of freedom. There are closed religious groups, hard-to-identify power, the Little People, and a domination more elusive than traffic rules. Aomame leaves one visible order and enters another whose boundaries cannot even be determined. She gains the ability to doubt reality but not the power to explain it."],
      ["这一点使小说避免了廉价的浪漫。道路之外并不必然是旷野，怀疑之后也不必然是真理。我们可以从一种束缚中逃脱，却未必知道自己将落入什么地方。",
       "This keeps the novel from cheap romance. Outside the road is not necessarily open country, and after doubt there is not necessarily truth. We can escape one constraint without necessarily knowing where we will fall."],
      ["甚至那道楼梯是否真的改变了世界，也始终值得怀疑。",
       "Even whether that staircase truly changed the world remains open to doubt."],
      ["也许青豆是在走下楼梯之后进入了1Q84。也许世界早已悄然改变，只是她此前一直坐在自己的生活里，沿着熟悉的道路前进，从未有机会察觉。我们太需要一个清晰的转折点，才会将那道楼梯视为两个世界之间的边界。可是人生中许多根本性的变化，并没有明确发生的瞬间。我们只是某一天突然发现，自己已经无法回到从前那种确信无疑的状态。",
       "Perhaps Aomame entered 1Q84 after descending the stairs. Perhaps the world had long since quietly changed, and she had simply sat in her life, moving along a familiar road, never getting the chance to notice. We need a clear turning point so badly that we take that staircase as the border between two worlds. But many fundamental changes in life have no clear moment of occurring. We just find one day that we can no longer return to the earlier state of unquestioning certainty."],
      ["因此，我始终认为，《1Q84》最动人的画面，不是青豆仰望两个月亮，而是她穿着高跟鞋，独自走下那道不起眼的楼梯。",
       "So I have always thought the most moving image in *1Q84* is not Aomame looking up at the two moons but her descending that unremarkable staircase alone in high heels."],
      ["在她头顶，汽车仍然停在高速公路上。无数人坐在各自的车厢里，等待道路恢复畅通，等待重新被允许向前。他们或许焦躁，或许疲惫，却没有理由怀疑自己所在的世界。只有青豆离开了车流，沿着那条本不应该使用的通道，缓慢地向下走去。",
       "Above her head, the cars still stand on the expressway. Countless people sit in their compartments waiting for the road to clear, waiting to be allowed forward again. They may be impatient or tired but have no reason to doubt the world they are in. Only Aomame has left the traffic, and walks slowly down the passage that should not have been used."],
      ["她并不知道下面等待自己的是什么。",
       "She does not know what is waiting for her below."],
      ["她甚至不知道，自己究竟是在离开一个世界，还是第一次真正看见它。",
       "She does not even know whether she is leaving a world or seeing it truly for the first time."],
      ["**而我想，现代秩序最深的力量，或许从来不是强迫我们沿着某条道路前进，而是让我们在漫长的行驶中，渐渐忘记了道路之外还有地面。**",
       "**And I think the deepest power of modern order may never have been to force us along a particular road, but to let us, in long driving, gradually forget that there is ground outside the road.**"]
    ]
  },
  {
    "date": "2015-03-06",
    "title": "Why Must One Weep for a Mother’s Death?",
    "slug": "why-must-one-weep",
    "category": "Novel",
    "book": {
      "cover": "letranger.jpg",
      "title": "局外人 (The Stranger)",
      "author": "阿尔贝·加缪 Albert Camus",
      "language": "Chinese",
      "country": "France",
      "original": "French",
      "lines": [
        "Novel · Chinese translation of L’Étranger, 1942",
        "Meursault buries his mother without tears, then kills a man on an Algerian beach, and is tried as much for the one as for the other."
      ]
    },
    "place": "于华盛顿州西雅图\nSeattle, WA",
    "languages": ["Chinese", "English"],
    "prose": [
      ["默尔索被判处死刑，似乎并不完全因为他在海滩上杀死了一个阿拉伯人，而是因为他在母亲的葬礼上没有哭。",
       "Meursault is sentenced to death, it seems, not entirely because he killed an Arab on the beach, but because he did not cry at his mother’s funeral."],
      ["这是我读加缪《局外人》时最难以释怀的地方。小说的第一句话便令人不安：“今天，妈妈死了。也许是昨天，我不知道。”默尔索没有表现出读者期待的悲痛。他乘车前往养老院，觉得疲倦，喝了咖啡，在母亲的遗体旁抽烟。守灵时，他注意到房间里的灯光、老人们的面孔，以及自己难以抵挡的睡意。第二天送葬，阿尔及利亚的太阳灼烧着他的身体，汗水不断流下，他只想尽快结束这场漫长的仪式。",
       "This is what I found hardest to let go of when reading Camus’s *L’Étranger*. The very first sentence of the novel is unsettling: “Maman died today. Or yesterday maybe, I don’t know.” Meursault shows none of the grief the reader expects. He travels to the old people’s home, feels tired, drinks coffee, smokes beside his mother’s body. During the vigil he notices the light in the room, the faces of the old people, and a drowsiness he can hardly resist. At the funeral the next day the Algerian sun scorches his body, sweat pours down, and he only wants the long ceremony to be over."],
      ["加缪几乎没有描写默尔索的内心哀伤，却花费大量笔墨描写他的身体。炎热、疲劳、口渴、困倦，这些细微的感官经验占据了本应属于悲痛的位置。读者因此感到不安，因为我们习惯于相信，母亲去世时，一个人应该首先感受到悲伤，而不是天气。",
       "Camus hardly describes Meursault’s inner grief, but spends much ink on his body. Heat, fatigue, thirst, drowsiness: these small sensory experiences occupy the place that should belong to sorrow. The reader is unsettled because we are used to believing that when one’s mother dies, one should feel grief first, not the weather."],
      ["但我不认为默尔索的冷漠可以简单理解为没有感情。他并未宣称母亲的死亡毫无意义，也没有刻意表现自己的无动于衷。他只是拒绝把自己没有明确感受到的情绪，转化成别人期待看见的姿态。对于默尔索而言，阳光确实刺眼，咖啡确实温热，身体确实疲惫。这些经验比那些尚未形成的情感判断更加确定。**他的问题不是不懂得如何悲伤，而是不愿意为了证明自己是一个正常的人，表演一种社会认可的悲伤。**",
       "But I do not think Meursault’s indifference can simply be understood as having no feeling. He does not declare his mother’s death meaningless, nor does he deliberately display his unconcern. He merely refuses to turn an emotion he has not clearly felt into a posture others expect to see. For Meursault, the sun really is dazzling, the coffee really is warm, the body really is tired. These experiences are more certain than emotional judgments that have not yet formed. **His problem is not that he does not know how to grieve, but that he is unwilling, to prove he is a normal person, to perform a socially approved grief.**"],
      ["小说最残酷的地方，在于这场葬礼并没有随着母亲的下葬而结束。它在后来那场谋杀案的审判中重新出现。",
       "The cruelest thing about the novel is that the funeral does not end with the burial of his mother. It reappears later in the trial for the murder."],
      ["默尔索在海滩上开枪杀死了一名阿拉伯男子。那天同样炎热，阳光从海面反射过来，照在对方的刀刃上。默尔索感到汗水流进眼睛，太阳压迫着额头，仿佛整个世界都在向他的身体逼近。他扣动扳机，随后又向倒地的人开了四枪。",
       "Meursault shoots an Arab man dead on the beach. That day is just as hot; sunlight reflects off the sea onto the other man’s knife blade. Meursault feels sweat run into his eyes and the sun pressing on his forehead, as if the whole world were closing in on his body. He pulls the trigger, and then fires four more shots into the man who has fallen."],
      ["这当然是一桩严重的罪行。加缪没有理由让默尔索因为厌恶阳光而免除责任。尤其是后面那四枪，它们使任何试图将谋杀完全归咎于环境的解释都显得苍白。一个人可以被阳光折磨，却不能因此获得杀人的权利。",
       "This is of course a grave crime. Camus has no reason to excuse Meursault because he hates the sun. Those last four shots especially make any explanation that blames the murder wholly on the environment seem pale. A person may be tormented by the sun, but that does not give him the right to kill."],
      ["然而，进入法庭之后，事情发生了奇怪的转移。检察官反复提及默尔索在母亲葬礼上的表现：他没有哭，喝了咖啡，抽了烟；葬礼之后不久，他又与玛丽游泳、看喜剧电影，并开始亲密关系。这些行为逐渐被组织成一套关于他人格的证据。检察官仿佛要证明，一个没有按照社会规范哀悼母亲的人，必然也缺乏对其他生命的尊重。",
       "Yet once in the courtroom, something strange shifts. The prosecutor keeps returning to Meursault’s conduct at his mother’s funeral: he did not cry, drank coffee, smoked; soon after the funeral he went swimming with Marie, watched a comedy, and began an intimate relationship. These acts are gradually organized into a body of evidence about his character. The prosecutor seems to want to prove that someone who did not mourn his mother according to social norms must also lack respect for other lives."],
      ["我觉得这才是《局外人》真正令人恐惧的时刻。法庭原本应该审理一个人做了什么，却逐渐开始审判他是一个怎样的人。默尔索杀人的事实并不需要通过母亲的葬礼来证明，但检察官仍然执着于那些私人生活的细节，因为它们能够帮助陪审团理解一个更加完整、更加可憎的罪犯形象。",
       "I think this is the truly frightening moment of *L’Étranger*. A court is meant to try what a person did, but gradually begins to try what kind of person he is. That Meursault killed a man does not need to be proved through his mother’s funeral, yet the prosecutor insists on those details of private life because they help the jury grasp a fuller and more hateful image of a criminal."],
      ["**他犯下的是谋杀罪，法庭却似乎还要求他为自己没有表现出悲伤而认罪。**",
       "**What he committed was murder, yet the court seems to require him also to plead guilty to not having shown grief.**"],
      ["这里有一个极其微妙的悖论。社会当然有理由谴责默尔索的暴力，却似乎不能容忍他在情感上的不合群。杀人需要法律来惩罚，而不流泪却触犯了另一套没有明文规定、但同样强大的秩序。人们可以接受一个罪犯表达悔恨，因为悔恨意味着他仍然承认共同的道德语言；却很难接受一个罪犯拒绝使用这套语言，因为他的沉默使审判者无法确认，自己的价值观是否也得到了被告的承认。",
       "There is an extremely subtle paradox here. Society certainly has reason to condemn Meursault’s violence, yet seems unable to tolerate his emotional non-conformity. Killing needs the law to punish it, while not weeping offends another order, unwritten but just as powerful. People can accept a criminal who expresses remorse, because remorse means he still acknowledges a shared moral language; they find it hard to accept one who refuses to use that language, because his silence leaves the judges unable to confirm that their own values are recognized by the accused."],
      ["默尔索因此成为一个奇怪的局外人。他并不是被排除在社会之外之后才失去归属，而是因为拒绝按照社会要求解释自己，才逐渐被社会认定为不可理解的人。",
       "Meursault thus becomes a strange outsider. He does not lose his belonging after being excluded from society; rather, because he refuses to explain himself as society demands, he is gradually judged by society to be incomprehensible."],
      ["我尤其在意小说中那个始终没有获得姓名的阿拉伯死者。默尔索的疲倦、欲望、童年记忆与身体感受，都得到了叙述的空间；被他杀死的人，却主要以一个模糊的身份存在。他没有属于自己的声音，甚至没有机会成为一个具有完整生活的人。小说发生在法国殖民统治下的阿尔及利亚，这种不对称很难被视为无关紧要的背景。",
       "I care especially about the Arab victim in the novel, who never receives a name. Meursault’s tiredness, desire, childhood memories and bodily sensations all get room in the narrative; the man he kills exists mainly as a vague identity. He has no voice of his own, and not even the chance to be a person with a full life. The novel is set in Algeria under French colonial rule, and this asymmetry can hardly be dismissed as irrelevant background."],
      ["加缪让我们进入一个法国殖民者的意识，仔细体会他的孤独与荒诞，却没有同样深入地描写被殖民者的生命。于是，小说在揭示社会如何剥夺默尔索的复杂性时，也留下了另一种更难以忽略的剥夺：一个阿拉伯人的死亡，竟然主要成为法国人讨论罪责、诚实与存在意义的契机。",
       "Camus lets us enter the consciousness of a French colonial and carefully feel his loneliness and absurdity, but does not describe the life of the colonized with the same depth. So while the novel reveals how society strips Meursault of his complexity, it also leaves another deprivation that is harder to ignore: an Arab’s death becomes mainly an occasion for the French to discuss guilt, honesty and the meaning of existence."],
      ["这并不使《局外人》的哲学问题失效，却使它更加尖锐。我们可以批判法庭不应该根据默尔索是否哭泣来判断他的罪责，同时也必须承认，默尔索确实杀死了一个人。我们可以理解他的沉默，却不必赞美他的冷漠。**一个人拒绝虚伪，并不自动意味着他拥有道德上的清白。**",
       "This does not invalidate the philosophical question of *L’Étranger*, but makes it sharper. We can criticize the court for judging Meursault’s guilt by whether he wept, and at the same time must admit that Meursault did kill a man. We can understand his silence without praising his indifference. **That a person refuses hypocrisy does not automatically mean he is morally innocent.**"],
      ["小说最后，神父来到牢房，试图劝默尔索接受上帝与来世。默尔索终于爆发了此前极少显露的愤怒。他拒绝把死亡解释为某种更高计划的一部分，也不愿为了临终的安慰而接受自己并不相信的东西。面对即将到来的处决，他感受到世界对于人类命运的漠然，并在这种漠然中获得一种奇异的平静。",
       "At the end, the priest comes to the cell and tries to persuade Meursault to accept God and the afterlife. Meursault finally erupts in an anger he has rarely shown. He refuses to explain death as part of some higher plan, and does not want to accept what he does not believe merely for a dying man’s comfort. Facing the coming execution, he feels the world’s indifference to human fate, and finds a strange peace in that indifference."],
      ["我不觉得这是传统意义上的精神胜利。默尔索没有证明自己比其他人更加清醒，也没有通过死亡获得某种崇高的意义。他只是终于不再需要向任何人解释，为什么自己没有按照他们期待的方式生活。",
       "I do not feel this is a spiritual victory in the traditional sense. Meursault does not prove himself more lucid than others, nor does he gain some lofty meaning through death. He simply no longer needs to explain to anyone why he did not live as they expected."],
      ["但我仍然无法完全站在他这一边。因为他的诚实有一种令人不安的局限：他能够忠实于自己的感受，却很少真正进入他人的处境。他不愿假装悲伤，却也没有表现出多少理解他人痛苦的能力。社会要求他表演感情固然荒谬，但一个人如果只承认自己能够直接感受到的东西，又是否可能因此忽略那些无法进入自己感官世界的生命？",
       "But I still cannot fully take his side. His honesty has an unsettling limit: he can be faithful to his own feelings but rarely truly enters another’s situation. He is unwilling to feign grief, but shows little capacity to understand others’ pain. It is absurd for society to demand that he perform feeling, yet if a person acknowledges only what he can directly feel, might he not overlook the lives that cannot enter his sensory world?"],
      ["这或许是我认为《局外人》比一部关于荒诞的哲学寓言更加复杂的原因。默尔索与法庭并不是简单的真实与虚伪之争。法庭试图用既定的道德叙事吞没一个人，而默尔索则几乎拒绝一切超出自身经验的解释。前者过于急切地赋予世界意义，后者又过于吝惜给予他人意义。",
       "This may be why I think *L’Étranger* is more complicated than a philosophical fable about the absurd. Meursault and the court are not a simple contest of truth and falsehood. The court tries to swallow a person in an established moral narrative, while Meursault refuses almost every explanation beyond his own experience. The former is too eager to give the world meaning; the latter too stingy in giving others meaning."],
      ["小说结束时，默尔索希望处决当天有许多观众前来，并以仇恨的喊声迎接他。他终于愿意与这个世界发生某种明确的关系，却是通过彼此的敌意。",
       "As the novel ends, Meursault hopes many spectators will come to his execution and greet him with cries of hatred. He is finally willing to enter some definite relation with the world, but through mutual hostility."],
      ["我总是会想到的仍然是母亲葬礼上的那杯咖啡。一杯咖啡本来不应该证明任何事情。它不能证明一个人爱不爱自己的母亲，更不能证明他是否具有杀人的天性。但在默尔索的审判中，它竟然获得了近乎道德证物的地位。",
       "What I always find myself thinking of is still the cup of coffee at his mother’s funeral. A cup of coffee should not prove anything. It cannot prove whether a person loves his mother, still less whether he has a murderer’s nature. But in Meursault’s trial it acquires almost the standing of a moral exhibit."],
      ["**《局外人》最令人不安的，并不是默尔索没有为母亲流泪，而是一个人真的犯下了谋杀罪之后，社会却仍然觉得，他没有流下的那些眼泪，比被害者流出的血更能说明他是谁。**",
       "**What is most disturbing in *L’Étranger* is not that Meursault did not weep for his mother, but that after a man has truly committed murder, society still feels that the tears he did not shed say more about who he is than the blood the victim shed.**"]
    ]
  },
  {
    "date": "2015-04-05",
    "title": "After the Rock Rolls Down",
    "slug": "after-the-rock-rolls-down",
    "category": "Philosophy",
    "book": {
      "cover": "myth_of_sisyphus.jpg",
      "title": "西西弗神话 (The Myth of Sisyphus)",
      "author": "阿尔贝·加缪 Albert Camus",
      "language": "Chinese",
      "country": "France",
      "original": "French",
      "lines": [
        "Philosophy · Chinese translation of Le Mythe de Sisyphe, 1942",
        "Camus asks whether life is worth living without a given meaning, and answers through the figure of Sisyphus."
      ]
    },
    "place": "于华盛顿州西雅图\nSeattle, WA",
    "languages": ["Chinese", "English"],
    "prose": [
      ["西西弗斯最孤独的时刻，不是在推石上山的时候，而是在巨石滚落之后，独自走下山坡的那段路上。他用肩膀抵住巨石，双脚陷进泥土，几乎触及山顶时，石头却再次脱离双手，沿着山坡滚落。他站在原地，望着刚刚走过的道路，然后转身下山。诸神不必监督他，因为他知道自己必须回去。石头不会消失，山也不会变矮。明天、后天，甚至一千年之后，他仍然要重复同样的劳动。",
       "Sisyphus’s loneliest moment is not when he pushes the rock uphill but after it has rolled down, on the walk down the slope alone. He braces the rock with his shoulder, feet sunk in the earth, and just as he nearly touches the summit the stone slips from his hands and rolls down the slope again. He stands in place, looks back at the road he has just walked, then turns and goes down. The gods need not watch over him, because he knows he must go back. The rock will not vanish, nor will the mountain grow lower. Tomorrow, the day after, even a thousand years from now, he will still repeat the same labor."],
      ["1942年，加缪在战争笼罩下的欧洲出版《西西弗斯神话》。他从一个近乎残酷的问题开始：如果生命没有预先赋予的意义，人为什么还要继续活着？他描写人们每天起床、乘车、工作、吃饭、睡觉，直到某一天突然问自己：为什么？荒诞便诞生于这个瞬间。人渴望生活具有目的，世界却始终沉默。加缪既不愿以死亡结束这种冲突，也不愿像克尔凯郭尔那样，通过信仰的跃迁寻找超越理性的答案。他坚持让问题保持悬而未决，让人不依靠最终的救赎而继续生活。",
       "In 1942, in a Europe shrouded in war, Camus published *The Myth of Sisyphus*. He begins from a nearly cruel question: if life has no meaning given in advance, why go on living? He describes people getting up every day, taking the tram, working, eating, sleeping, until one day they suddenly ask themselves: why? The absurd is born in that moment. Man longs for life to have a purpose, and the world stays silent. Camus is unwilling to end this conflict with death, and equally unwilling, like Kierkegaard, to seek an answer beyond reason through a leap of faith. He insists on leaving the question unresolved, and on letting a person go on living without a final salvation."],
      ["西西弗斯正是这种处境最极端的化身。诸神不仅剥夺了他的自由，还剥夺了劳动获得成果的可能。他没有希望，也没有值得等待的终点。但加缪偏偏认为，西西弗斯走下山坡时的清醒，构成了他的反抗。推石时，他的身体完全属于劳动；下山时，他终于能够审视自己的命运。诸神可以命令他继续推动巨石，却不能规定他如何理解自己的苦难。**他不再期待巨石永远停留在山顶，也就不再把自己全部的生命交给那个永远不会到来的时刻。**",
       "Sisyphus is the most extreme embodiment of this condition. The gods have deprived him not only of freedom but of any chance for labor to bear fruit. He has no hope, and no endpoint worth waiting for. Yet Camus holds that Sisyphus’s lucidity as he walks down the slope constitutes his revolt. Pushing the rock, his body belongs wholly to the labor; going down, he can finally examine his fate. The gods can order him to keep pushing the rock but cannot prescribe how he understands his suffering. **He no longer expects the rock to stay on the summit forever, and so no longer gives his whole life to a moment that will never come.**"],
      ["我却始终对这种反抗有所保留。一个被迫终生重复劳动的人，即使能够在精神上拒绝屈服，也并不因此摆脱了劳动。石头仍然沉重，山坡仍然陡峭。尤其当加缪在结尾写下“必须想象西西弗斯是幸福的”，我忍不住想问：为什么必须？西西弗斯难道不能愤怒、厌倦，甚至在某个清晨不愿伸手触碰巨石？倘若连面对惩罚时的心情都必须符合哲学家的期待，那么诸神之外，似乎又多了一位要求他保持幸福的审判者。",
       "I have always held some reservation about this revolt. A person forced to repeat labor all his life, even if he can refuse to submit in spirit, is not thereby freed from labor. The rock is still heavy and the slope still steep. Especially when Camus writes at the end, “One must imagine Sisyphus happy,” I cannot help asking: why must one? Could Sisyphus not be angry, bored, or on some morning unwilling even to reach out and touch the rock? If even his mood in the face of punishment must meet the philosopher’s expectation, then beyond the gods there seems to be one more judge, demanding that he stay happy."],
      ["但加缪并不是要人热爱自己的苦难。他真正拒绝的，是为了忍受现实而替现实编造一个崇高的理由。这与《局外人》中默尔索拒绝神父的临终劝慰遥相呼应：一个面对即将结束的生命，一个面对永远无法结束的劳动，却都不愿以自己并不相信的救赎换取安慰。西西弗斯的巨石不会变成神圣的使命，山顶也不会突然出现奖赏。**没有意义，并不意味着必须放弃生活；继续生活，也不意味着必须替痛苦寻找意义。**",
       "But Camus does not ask anyone to love their suffering. What he truly refuses is to invent a lofty reason for reality in order to endure it. This echoes Meursault’s refusal of the priest’s deathbed consolation in *L’Étranger*: one faces a life about to end, the other a labor that can never end, yet neither will trade a salvation he does not believe in for comfort. Sisyphus’s rock will not turn into a sacred mission, nor will a reward suddenly appear on the summit. **Having no meaning does not mean one must give up living; and continuing to live does not mean one must find a meaning for suffering.**"],
      ["我因此越来越喜欢加缪选择的那个下山的瞬间。上山时，西西弗斯仍然像一个英雄，奋力对抗重量，朝着明确的目标前进；下山时，所有关于胜利、进步与回报的叙事都失效了。他只是沿着熟悉的道路返回，知道山脚有什么在等待自己。我宁愿不去想象他是否幸福，而是想象他偶然停下脚步，望了一会儿远处的天空。山还是那座山，巨石仍然停在山脚，诸神的判决没有改变。",
       "So I increasingly like the moment of descent that Camus chooses. Going up, Sisyphus still looks like a hero, struggling against weight and advancing toward a clear goal; going down, all narratives of victory, progress and reward lose effect. He simply returns along a familiar road, knowing what waits for him at the foot. I would rather not imagine whether he is happy, but imagine that he happens to stop for a moment and look at the distant sky. The mountain is still the same mountain, the rock still rests at its foot, and the gods’ sentence has not changed."],
      ["**只是那一刻，他不需要相信山顶有什么东西正在等待他，也不需要为了继续活着，向这个沉默的世界索取一个答案。**",
       "**Only, in that moment, he does not need to believe something is waiting for him on the summit, nor to demand an answer from this silent world in order to go on living.**"]
    ]
  },
  {
    "date": "2011-10-11",
    "title": "The Empty Seat in the Theater",
    "slug": "the-empty-seat-in-the-theater",
    "category": "Novel",
    "book": {
      "cover": "anna_karenina.jpg",
      "title": "安娜·卡列尼娜 (Anna Karenina)",
      "author": "托尔斯泰 Leo Tolstoy",
      "language": "Chinese",
      "country": "Russia",
      "original": "Russian",
      "lines": [
        "Novel · Chinese translation of Anna Karenina, first published 1878",
        "A married woman in Petersburg society falls in love with Count Vronsky and loses her place in the world she knew."
      ]
    },
    "place": "于中国北京\nBeijing, China",
    "languages": ["Chinese", "English"],
    "prose": [
      ["安娜走进彼得堡剧院的时候，舞台上演的是一出歌剧。但那天晚上，真正的戏剧并不在舞台上。",
       "When Anna walks into the theater in Petersburg, an opera is on the stage. But that evening the real drama is not on the stage."],
      ["她穿着一件浅色丝绸礼服，领口饰着精致的花边，乌黑的头发衬着裸露的肩膀。托尔斯泰特别写到她的美丽：在灯火通明的剧院里，她显得格外醒目。她坐在包厢中，身旁是雅什温，一个仍然愿意公开与她来往的军官。她并没有躲藏，也没有刻意表现羞愧，甚至还像从前一样，带着熟悉的从容观察周围的人。",
       "She wears a light silk gown, its neckline trimmed with delicate lace, her black hair setting off her bare shoulders. Tolstoy takes particular care to describe her beauty: in the brightly lit theater she is strikingly conspicuous. She sits in the box beside Yashvin, an officer still willing to be seen with her in public. She is not hiding, nor does she deliberately show shame; she even observes the people around her, as before, with her familiar composure."],
      ["渥伦斯基却知道事情不会如此简单。",
       "Vronsky, however, knows it will not be so simple."],
      ["在安娜决定去剧院之前，他已经意识到，这次公开露面将成为一场冒险。她不再是受到彼得堡上流社会承认的卡列宁夫人，而是一个离开丈夫、公开与情人共同生活的女人。渥伦斯基可以出入俱乐部、参加宴会，继续与熟人交往；安娜却必须面对另一套规则。他劝阻过她，但安娜仍然去了。她似乎执意要证明，自己并没有因为爱情而失去坐在剧院里的资格。",
       "Before Anna decides to go to the theater, he has already realized that this public appearance will be a gamble. She is no longer Madame Karenina, recognized by Petersburg high society, but a woman who has left her husband and lives openly with her lover. Vronsky can still go to clubs, attend dinners and keep up with acquaintances; Anna must face another set of rules. He has tried to dissuade her, but Anna goes all the same. She seems determined to prove that she has not lost, through love, her qualification to sit in a theater."],
      ["最初，一切看起来几乎正常。观众举起望远镜，彼此辨认，交换寒暄。安娜坐在包厢里，仿佛仍然属于这个熟悉的世界。然而，托尔斯泰让剧院里的目光逐渐偏离舞台，转向她所在的位置。人们开始注意谁与她交谈，谁向她致意，又是谁故意避开她。她的出现成为一件需要被讨论的事情。",
       "At first everything looks almost normal. The audience raise their opera glasses, recognize one another, exchange greetings. Anna sits in the box as if she still belongs to this familiar world. But Tolstoy lets the gazes in the theater gradually drift from the stage to where she sits. People begin to notice who talks to her, who greets her, who deliberately avoids her. Her presence becomes something that needs to be discussed."],
      ["真正的羞辱来自邻近包厢里的卡尔塔索夫夫妇。",
       "The real humiliation comes from the Kartasovs in a neighboring box."],
      ["卡尔塔索夫夫人拒绝与安娜交往，并因丈夫与安娜接触而当众发怒。她的愤慨迅速引起周围人的注意。安娜没有被正式驱逐，没有人宣布她不得进入剧院，但她已经被置于众目睽睽之下。那些原本用来欣赏歌剧的望远镜，如今仿佛都成了审判她的工具。",
       "Madame Kartasova refuses to associate with Anna, and flares up in public because her husband has spoken to her. Her indignation quickly draws the attention of those around. Anna is not formally expelled, no one announces she may not enter the theater, but she has been placed under everyone’s eyes. The opera glasses meant for enjoying the opera now seem all to have become instruments for judging her."],
      ["我觉得托尔斯泰选择剧院作为这场羞辱的地点，实在精妙。",
       "I think Tolstoy’s choice of the theater as the site of this humiliation is exquisite."],
      ["在彼得堡的上流社会里，婚外情并不罕见。安娜的哥哥奥勃朗斯基背叛妻子，依然能够受到朋友欢迎；贝特西公爵夫人的沙龙里，也充满了暧昧与心照不宣的关系。人们并不真正要求每个人忠贞，只要求他们懂得把欲望隐藏在体面的婚姻背后。安娜最不可饶恕的地方，不是她爱上了渥伦斯基，而是她竟然不愿继续扮演卡列宁的妻子。",
       "In Petersburg high society, adultery is not rare. Anna’s brother Oblonsky betrays his wife and is still welcome among friends; Princess Betsy’s salon is also full of ambiguous, tacitly understood relationships. People do not truly demand fidelity of everyone, only that they know how to hide desire behind a respectable marriage. What is unforgivable about Anna is not that she has fallen in love with Vronsky, but that she is unwilling to go on playing Karenin’s wife."],
      ["于是，剧院里出现了一种奇怪的颠倒。舞台上的演员可以扮演背叛丈夫的女人，观众可以为她的爱情与痛苦鼓掌；但当一个真实的女人坐进包厢，拒绝继续扮演社会分配给她的角色时，观众便无法容忍。",
       "So a strange inversion appears in the theater. An actress on the stage can play a woman who betrays her husband, and the audience can applaud her love and pain; but when a real woman sits in a box and refuses to go on playing the role society assigned her, the audience cannot tolerate it."],
      ["安娜没有哭着离开，也没有当众向任何人求饶。她仍然试图保持镇定。托尔斯泰尤其敏锐地捕捉到这种镇定背后的痛苦：一个人明明已经受到羞辱，却还必须维持优雅，仿佛只要表情没有改变，尊严就仍然完整。",
       "Anna does not leave in tears, nor beg anyone in public. She still tries to stay composed. Tolstoy catches with particular acuity the pain behind this composure: a person already humiliated who must still maintain grace, as if dignity remained whole so long as the expression had not changed."],
      ["渥伦斯基后来赶到剧院，看到的正是这种令人难堪的局面。他既为安娜受到的侮辱愤怒，也对她明知后果却执意前来的行为感到不满。在他看来，她原本可以避免这场羞辱。但他无法真正理解，为什么安娜一定要来。",
       "Vronsky arrives at the theater later and sees exactly this mortifying scene. He is angry at the insult Anna has suffered, and also displeased that she insisted on coming knowing the consequences. In his view she could have avoided this humiliation. But he cannot truly understand why Anna had to come."],
      ["因为渥伦斯基从未失去过坐在这里的权利。",
       "Because Vronsky has never lost the right to sit here."],
      ["他可以因为爱情牺牲部分仕途，却不必牺牲整个社会身份。他仍然是军官、贵族、朋友，是一个可以在不同场合拥有不同生活的男人。安娜却越来越只剩下一种身份：渥伦斯基的情人。她来剧院，并不只是为了欣赏歌剧，而是为了证明自己仍然能够作为一个独立的人，出现在众人面前。",
       "He can sacrifice part of his career for love without sacrificing his whole social identity. He is still an officer, an aristocrat, a friend, a man who can live different lives on different occasions. Anna is left with increasingly only one identity: Vronsky’s mistress. She comes to the theater not only to enjoy the opera but to prove that she can still appear before everyone as an independent person."],
      ["这也是为什么我始终无法把她的举动简单归结为任性。她当然知道自己可能受到羞辱，却仍然穿上礼服，梳好头发，坐进包厢。那些看似虚荣的装饰，在这个晚上反而具有一种悲壮的意味。她并不是要求社会赞美自己的爱情，只是希望自己能够像过去一样，不必为出现在公共场合而请求宽恕。",
       "This is also why I can never reduce her act simply to willfulness. She surely knows she may be humiliated, yet puts on her gown, does her hair and sits in the box. Those seemingly vain adornments take on, that night, a tragic grandeur. She is not demanding that society praise her love; she only hopes to appear in public, as before, without begging forgiveness."],
      ["然而，托尔斯泰并没有给她这样的机会。",
       "Yet Tolstoy does not give her that chance."],
      ["剧院里的歌剧仍然继续。演员在舞台上歌唱，乐队按照乐谱演奏，观众在幕间谈论刚才发生的事情。安娜的羞辱不过成为一场社交风波，丝毫没有妨碍这个世界继续运转。",
       "The opera in the theater goes on. The singers sing on the stage, the orchestra plays according to the score, and the audience, between acts, talk about what has just happened. Anna’s humiliation becomes only a social stir, and does not hinder in the slightest the world’s going on."],
      ["后来，安娜越来越害怕失去渥伦斯基，越来越无法忍受他的冷淡。人们很容易把这种变化归咎于她的嫉妒与偏执。但我总会想起剧院里的那个晚上：当一个女人连独自坐在人群中的权利都失去了，她又怎么可能不把全部希望寄托在唯一仍然愿意陪伴她的人身上？",
       "Later, Anna grows more and more afraid of losing Vronsky and less and less able to bear his coldness. It is easy to blame this change on her jealousy and paranoia. But I always remember that evening in the theater: when a woman has lost even the right to sit alone among a crowd, how could she not place all her hope in the one person still willing to keep her company?"],
      ["《安娜·卡列尼娜》最终以铁轨上的死亡结束安娜的故事。但我觉得，她的悲剧早已在剧院里显露出来。",
       "*Anna Karenina* finally ends Anna’s story with a death on the railway tracks. But I think her tragedy had already shown itself in the theater."],
      ["**那天晚上，安娜并没有要求谁为她让座。她只是坐在一张原本属于任何购票观众的椅子上，却发现整个彼得堡都认为，她不应该坐在那里。**",
       "**That night Anna did not ask anyone to give up a seat for her. She only sat on a chair that belongs to any ticket-holding spectator, and found that all Petersburg thought she should not be sitting there.**"]
    ]
  },
  {
    "date": "2016-06-15",
    "title": "When One No Longer Needs to Prove Oneself",
    "slug": "when-one-no-longer-needs-to-prove-oneself",
    "category": "Memoir",
    "book": {
      "cover": "reveries_solitary_walker.jpg",
      "title": "一个孤独的散步者的梦 (Reveries of the Solitary Walker)",
      "author": "让-雅克·卢梭 Jean-Jacques Rousseau",
      "language": "Chinese",
      "country": "France",
      "original": "French",
      "lines": [
        "Memoir · Chinese translation by Li Pingou, The Commercial Press",
        "Rousseau’s last, unfinished book, ten walks through memory, nature and self-defense, from an afternoon adrift on Lake Bienne to a tenth walk cut off by his death."
      ]
    },
    "place": "于加拿大渥太华\nOttawa, Canada",
    "languages": ["Chinese", "English"],
    "prose": [
      ["卢梭在圣皮埃尔岛上乘船漂流的时候，并不急于抵达什么地方。他躺在小船里，任凭湖水轻轻推动船身，听见水波拍打船舷，感受时间缓慢流逝。没有需要完成的工作，没有必须回答的信件，也没有任何人等待他的解释。对于一个一生都在与公众争论、为自己辩护的人而言，这样一个几乎没有发生任何事情的下午，竟然成为他记忆中最接近幸福的时刻。",
       "When Rousseau drifted in a boat off the Île Saint-Pierre, he was in no hurry to arrive anywhere. He lay in the little boat, letting the water nudge it gently along, hearing the ripples lap the sides and feeling time pass slowly. There was no work to finish, no letter that had to be answered, and no one waiting for his explanation. For a man who spent his whole life arguing with the public and defending himself, an afternoon in which almost nothing happened became the moment in his memory closest to happiness."],
      ["读到《第五次散步》，我有一种奇特的羡慕。我习惯于把时间安排得很满，也习惯于相信生活可以通过持续的努力变得更好。事业需要推进，财务需要规划，家庭的未来需要准备，即使阅读也常常伴随着记录、思考与整理。我享受这种主动塑造生活的感觉，也确实从中获得了许多自由。但卢梭躺在湖上的那个下午，却使我意识到，我所追求的自由，似乎总是发生在未来：等到某个目标实现，某种条件具备，某项责任终于完成，我才允许自己真正自由地使用时间。",
       "Reading the *Fifth Walk*, I felt a strange envy. I am used to keeping my time very full, and used to believing that life can be made better through sustained effort. Career needs advancing, finances need planning, the family’s future needs preparing, and even reading is often accompanied by notes, thinking and organizing. I enjoy this feeling of actively shaping my life, and have indeed gained much freedom from it. But Rousseau’s afternoon on the lake made me realize that the freedom I pursue always seems to lie in the future: only when some goal is reached, some condition is met, some responsibility is finally discharged, do I allow myself to use my time freely."],
      ["这当然不是说规划本身有什么错误。恰恰相反，我始终相信，经济上的独立能够使一个人拥有更多选择。积累资产、减少对工资的依赖，在我看来并不只是为了财富，而是为了有一天能够决定自己如何生活。然而卢梭使我想到一个颇为讽刺的可能：一个人可以花费几十年精心安排自己的生活，最终却只是为了获得一个不必再安排生活的下午。我们努力争取时间的自主权，却可能在这个过程中逐渐失去无所事事的能力。",
       "This is not to say there is anything wrong with planning itself. On the contrary, I have always believed that economic independence gives a person more choices. Accumulating assets and depending less on a salary is, to me, not only for the sake of wealth but so that one day I can decide how to live. Yet Rousseau made me think of a rather ironic possibility: a person may spend decades carefully arranging his life only to win an afternoon in which life no longer needs arranging. In striving for autonomy over our time, we may gradually lose the ability to do nothing."],
      ["但卢梭并不是一位真正超脱的人。《一个孤独的散步者的梦》中最令人不安的，正是他不断宣称自己已经不再需要公众的认可，却又几乎无法停止回忆公众对他的误解与伤害。他认为自己遭到朋友背叛、知识界排斥与社会舆论的迫害，反复为过去的行为辩护。他说自己已经放弃说服世人，文字却依然充满解释与申诉。一个人越是坚持自己不在乎别人如何评价，读者便越难相信他真的已经不在乎。",
       "But Rousseau is not truly detached. What is most unsettling in *Reveries of the Solitary Walker* is that he keeps declaring he no longer needs the public’s approval while hardly being able to stop recalling the public’s misunderstanding and wounding of him. He believes he has been betrayed by friends, shut out by the intellectual world and persecuted by public opinion, and defends his past conduct again and again. He says he has given up trying to persuade the world, yet his words are still full of explanation and complaint. The more a person insists he does not care how others judge him, the harder it is for the reader to believe he really does not."],
      ["这一点让我感到某种熟悉。我同样重视自己的工作，也希望自己的努力能够获得合理的理解与认可。尤其当一项工作涉及许多人、复杂的协调与长期投入时，我很难完全不在意别人是否理解它的价值。有时，即使事情已经取得进展，我仍然会反复思考如何把它解释得更加准确，如何使自己的判断得到认可。这种倾向当然具有实际意义：工作需要沟通，合作需要信任，成果也需要被他人看见。但卢梭使我怀疑，解释与证明是否也可能逐渐成为一种习惯，以至于即使没有人要求，我们仍然在心中准备下一场辩论。",
       "This feels somewhat familiar. I also take my work seriously and hope my effort will be reasonably understood and recognized. Especially when a piece of work involves many people, complicated coordination and long-term commitment, I can hardly be indifferent to whether others understand its value. Sometimes, even after things have progressed, I keep thinking about how to explain it more accurately and how to get my judgment accepted. This tendency has practical meaning, of course: work needs communication, collaboration needs trust, and results need to be seen by others. But Rousseau made me wonder whether explaining and proving may also become a habit, so that even when no one asks, we are still preparing the next debate in our heads."],
      ["卢梭的痛苦在于，他似乎始终无法接受自己在别人眼中可能是另一个人。他拥有对自身动机的完整解释，却无法控制别人如何理解他的行为。《第四次散步》中，他反复讨论诚实、谎言与自己的过错，试图在道德上为自己作出精确的区分。这些文字展现出非凡的自省能力，却也暴露了他的局限：他能够非常细致地解释自己为什么如此行动，却不总是愿意让他人的感受拥有同样充分的地位。一个人对自己的理解越复杂，有时便越容易相信别人对他的误解只是因为理解得不够深入。",
       "Rousseau’s pain is that he seems never able to accept that in others’ eyes he may be a different person. He has a complete explanation of his own motives, but cannot control how others understand his actions. In the *Fourth Walk* he discusses honesty, lies and his own faults again and again, trying to draw precise moral distinctions in his own favor. These pages show an extraordinary capacity for self-examination, and also expose its limit: he can explain in great detail why he acted as he did, yet is not always willing to give other people’s feelings an equally full place. The more complex a person’s understanding of himself, the more easily he comes to believe that others misunderstand him only because they have not understood deeply enough."],
      ["我不愿意完全认同这种自我辩护。我们当然有权解释自己的动机，但不能因为自己知道动机，就认为自己对行为后果拥有最终解释权。尤其在人与人的关系中，善意并不能自动消除伤害，正确的判断也不保证恰当的表达。卢梭让我看到，强烈的自我意识既可能带来诚实，也可能使一个人越来越难以承认，别人不必按照他理解自己的方式来理解他。",
       "I am unwilling to fully endorse this self-defense. We certainly have the right to explain our motives, but knowing our motives does not give us the final word on the consequences of our actions. Especially in human relationships, good intentions do not automatically undo harm, and a correct judgment does not guarantee proper expression. Rousseau showed me that strong self-awareness can bring honesty, but can also make it harder and harder to admit that others need not understand him the way he understands himself."],
      ["或许正因为如此，我反而更加喜欢他写植物的段落。晚年的卢梭热衷植物学，采集、辨认、整理标本。他不急于研究植物的经济用途，也不必通过这些观察建立什么宏大的理论。一株路边的草、一朵不起眼的花，能够使他暂时离开那些关于名誉、正义与迫害的争论。与植物相处时，他不需要证明自己是一个怎样的人；植物也不会要求他为过去的行为作出解释。",
       "Perhaps for this very reason I like his passages on plants all the more. In his last years Rousseau was keen on botany, collecting, identifying and arranging specimens. He was in no rush to study the economic uses of plants, nor did he need these observations to build some grand theory. A blade of grass by the road, an unremarkable flower, could take him away for a while from the quarrels over reputation, justice and persecution. Among plants he did not need to prove what kind of person he was, and the plants did not ask him to account for his past conduct."],
      ["这让我想到自己对知识的另一种矛盾态度。我喜欢学习，也习惯于把知识与某种实际目的联系起来：它可以帮助工作、改善判断、理解社会，或者为未来提供更多选择。但阅读文学、研究语言与思想时，我又常常感受到另一种快乐。某个词语的来源、一段小说中出人意料的描写、一个早已去世的思想家的奇怪念头，本身就足以使一个下午变得有意思。它们不必改善我的职业能力，也不必为任何长期计划服务。卢梭的植物学使我更加珍惜这种不需要产出的求知欲。",
       "This reminds me of another contradiction in my attitude to knowledge. I like learning, and am used to tying knowledge to some practical purpose: it can help my work, improve my judgment, help me understand society, or give me more choices in the future. But when I read literature and study language and ideas, I often feel a different kind of pleasure. The origin of a word, an unexpected description in a novel, a strange notion of a long-dead thinker can by themselves make an afternoon interesting. They need not improve my professional ability or serve any long-term plan. Rousseau’s botany makes me value all the more this curiosity that needs no output."],
      ["不过，我并不认为孤独能够解决所有问题。卢梭越是远离社会，越容易将自己受到的伤害理解为一个完整而封闭的故事。他可以在独处中获得宁静，却也失去了许多被他人纠正的机会。我尤其警惕这种将自我保护误认为精神独立的倾向。真正的独立或许并不是不再需要任何人，而是既能够独处，也能够承受他人的不同意见；既不必时时寻求认可，也不把所有批评都理解为对自己的否定。",
       "Still, I do not think solitude solves every problem. The farther Rousseau withdrew from society, the more easily he understood the harm done to him as a complete and closed story. He could find peace in solitude, but also lost many chances to be corrected by others. I am especially wary of this tendency to mistake self-protection for spiritual independence. True independence is perhaps not no longer needing anyone, but being able both to be alone and to bear others’ disagreement; not having to seek approval all the time, and not taking every criticism as a denial of oneself."],
      ["从文学上看，这部作品最动人的地方，在于它始终没有完成一次彻底的自我和解。十篇“散步”在回忆、自然观察与自我辩护之间不断游移。卢梭可以在一页中沉浸于湖水的宁静，下一页又重新陷入过去的争执。这样的结构并不整齐，却比一部井然有序的精神自传更加可信。人的内心原本就不会按照哲学论证的顺序前进。我们可能在某个下午真诚地感到平静，第二天却又被早已决定放下的事情所困扰。",
       "As literature, what moves me most in this work is that it never completes a thorough reconciliation with the self. The ten “walks” keep wandering among memory, observation of nature and self-defense. Rousseau can be absorbed in the calm of the lake on one page and fall back into old quarrels on the next. The structure is not tidy, but it is more believable than a well-ordered spiritual autobiography. The inner life never advances in the order of a philosophical argument. We may sincerely feel calm one afternoon and the next day be troubled again by things we had already decided to let go."],
      ["第十次散步在卢梭去世时仍未完成。他重新回忆年轻时与华伦夫人相识的经历，文字却在尚未展开时戛然而止。一个一生试图解释自己的人，最终没有留下最后的解释。这种偶然形成的结尾，比任何关于幸福与孤独的总结都更有力量。",
       "The *Tenth Walk* was still unfinished when Rousseau died. He had begun to recall meeting Madame de Warens in his youth, but the text stops short before it unfolds. A man who tried all his life to explain himself left no final explanation. This accidental ending has more force than any summing-up about happiness and solitude."],
      ["我并不希望像卢梭一样退出社会，也不打算放弃自己对事业、家庭与未来的安排。我仍然相信，积极参与世界比单纯远离世界更加符合我想要的生活。但我开始觉得，真正值得追求的自由，也许不只是拥有足够的财富、能力与地位，使自己不必接受不愿接受的生活；它还包括一种更加细微的能力：**即使仍有事情没有完成，仍有人没有理解自己，仍有未来尚未确定，也能够允许某个下午只属于自己。**",
       "I do not wish to withdraw from society as Rousseau did, nor do I plan to give up my arrangements for career, family and future. I still believe that taking an active part in the world suits the life I want better than simply keeping away from it. But I have begun to feel that the freedom truly worth pursuing may be not only having enough wealth, ability and standing that I need not accept a life I do not want; it also includes a subtler ability: **to allow an afternoon to belong only to myself, even when things remain unfinished, some people still do not understand me, and the future is still undecided.**"],
      ["卢梭在湖面上没有获得任何可以带走的成就。他只是随着水波漂流，暂时忘记了那个需要不断解释自己的卢梭。而我想学习的，或许正是这种能力：不必等到所有目标都实现、所有争论都结束、所有人都认可自己的时候，才终于开始享受已经拥有的生活。",
       "On the lake Rousseau gained no achievement he could take away. He only drifted with the waves, for a while forgetting the Rousseau who had to keep explaining himself. And perhaps this is the ability I want to learn: not to wait until all goals are met, all arguments are over and everyone approves of me before I finally begin to enjoy the life I already have."]
    ]
  },
  {
    "date": "2021-11-01",
    "title": "I Am a Beneficiary of Globalization",
    "slug": "i-am-a-beneficiary-of-globalization",
    "category": "Economics",
    "book": {
      "cover": "globalization_discontents.jpg",
      "title": "Globalization and Its Discontents Revisited",
      "author": "Joseph E. Stiglitz",
      "language": "English",
      "country": "United States",
      "original": "English",
      "lines": [
        "Economics · English original, W. W. Norton, 2017 (first published 2002)",
        "A Nobel laureate and former World Bank chief economist on how the IMF and the global financial system failed the countries they were meant to help."
      ]
    },
    "place": "于加州圣克拉拉\nSanta Clara, CA",
    "languages": ["Chinese", "English"],
    "prose": [
      ["如果要我反对全球化，我大概很难找到一个令人信服的理由。我的人生轨迹几乎就是全球化所承诺的那种故事：到美国西雅图的华盛顿大学留学，后来选择留在美国硅谷工作；与此同时，我通过房地产和股票投资，将自己的经济生活与不同地区、不同国家的市场联系起来。教育、职业与资本，这三条原本可能受地域限制的道路，因为一个更加开放的世界而彼此连接。",
       "If I were asked to argue against globalization, I would probably struggle to find a convincing reason. The course of my life is almost the very story globalization promised: I went to study at the University of Washington in Seattle, later chose to stay and work in Silicon Valley, and meanwhile, through real estate and stock investments, tied my economic life to markets in different regions and countries. Education, career and capital, three paths that might otherwise have been bound by geography, are joined to one another by a more open world."],
      ["但读约瑟夫·斯蒂格利茨的《全球化及其不满》，我始终有一种不太舒服的感觉：**我所熟悉的全球化，恰恰是这本书提醒我们不能当作普遍经验的那一种。**",
       "But reading Joseph Stiglitz’s *Globalization and Its Discontents*, I felt a persistent unease: **the globalization I know is exactly the kind this book warns us not to take as universal experience.**"],
      ["回想在华盛顿大学留学的经历，最重要的或许不只是获得了什么知识，而是进入了一个原本不属于自己生活范围的社会。留学意味着接触另一套教育制度、职业市场与社会关系，也意味着一个人的未来不再完全由出生地决定。后来能够留在美国工作，使这种跨国流动从一段教育经历逐渐变成了长期的生活选择。",
       "Looking back on my years at the University of Washington, what mattered most may not be the knowledge I gained but entering a society that had not belonged to my life. Studying abroad meant meeting another educational system, job market and set of social relations, and meant that a person’s future is no longer entirely decided by where they were born. Being able to stay and work in the United States later turned this crossing of borders from an educational experience into a long-term life choice."],
      ["我很珍惜这种选择权。但跨国教育需要经济支持、语言能力与制度许可；毕业后能否留下，又取决于就业机会与移民制度。我们喜欢将留学和职业发展写成个人努力的故事，这当然有其真实性。但同样努力的人，可能因为国籍、家庭条件或制度限制，根本没有进入同一条道路的机会。",
       "I treasure this freedom of choice. But education abroad requires financial support, language ability and institutional permission; whether one can stay after graduating depends in turn on job opportunities and the immigration system. We like to write studying abroad and career growth as stories of personal effort, and they do contain truth. But equally hardworking people may, because of nationality, family circumstances or institutional limits, never get the chance to enter the same road at all."],
      ["在苹果的语音相关工作，使我对全球化的理解又多了一层。语音技术看似是一种可以跨越地域的通用技术，但真正面对全球使用者时，语言、口音、文化与使用习惯之间的差异便无法回避。一个在英语环境中表现良好的模型，不会因为被部署到另一个市场，就自动理解当地人的表达方式。要使技术真正服务不同地区的用户，需要数据、参与者、工程能力，以及跨团队、跨地区的长期协作。",
       "My speech-related work at Apple has added another layer to my understanding of globalization. Speech technology looks like a general technology that can cross regions, but when it faces users worldwide, the differences among languages, accents, cultures and habits of use cannot be avoided. A model that performs well in an English-language setting does not automatically understand how local people express themselves just because it has been deployed in another market. To make the technology truly serve users in different regions takes data, participants, engineering capability, and long-term collaboration across teams and regions."],
      ["我的工作正试图让不同地区的真实使用者参与语音数据贡献与模型评估，而不是仅仅依赖少数技术团队预先设计的测试场景。这项工作让我切身感受到，所谓全球化的技术产品，并不是把同一套模型复制到更多国家那么简单。一个模型可以拥有全球部署的能力，却仍然对某些语言、口音或表达方式理解不足。",
       "My work tries to bring real users in different regions into contributing speech data and evaluating models, rather than relying only on test scenarios designed in advance by a few technical teams. It has made me feel firsthand that a so-called global technology product is not as simple as copying the same model to more countries. A model can be deployable worldwide and still understand some languages, accents or ways of speaking poorly."],
      ["这一点与斯蒂格利茨批判国际金融机构的方式形成了有趣的呼应。国际货币基金组织曾试图以相对统一的经济政策处理制度条件截然不同的国家。斯蒂格利茨认为，这种做法忽略了当地金融结构、社会保障与政治制度的差异。语音模型与宏观经济政策当然不是一回事，但它们都提醒我：**一种在特定环境中有效的方法，并不会因为能够被大规模推广，就自动具有普遍适用性。**",
       "This echoes in an interesting way how Stiglitz criticizes international financial institutions. The International Monetary Fund tried to treat countries with sharply different institutional conditions using relatively uniform economic policies. Stiglitz argues that this ignored differences in local financial structures, social protection and political systems. A speech model and macroeconomic policy are of course not the same thing, but both remind me: **a method that works in a particular setting does not automatically become universally applicable just because it can be rolled out at scale.**"],
      ["而我在技术工作中也越来越清楚，决定什么是成功，本身就是一种权力。我们可以用平均性能衡量模型，却可能掩盖某些口音或语言群体的较差体验；可以用整体数据规模衡量进展，却仍然需要追问数据究竟来自哪些人。斯蒂格利茨讨论经济增长率、资本流动与财政赤字时，面对的也是类似的问题。指标可以准确，却不一定完整。一个国家的金融市场恢复稳定，并不意味着那些在危机中失去工作和住房的人，也恢复了原来的生活。",
       "In my technical work I also see more and more clearly that deciding what counts as success is itself a form of power. We can measure a model by average performance and so conceal the poorer experience of certain accent or language groups; we can measure progress by overall data volume and still need to ask whom the data actually comes from. When Stiglitz discusses growth rates, capital flows and fiscal deficits, he faces a similar problem. An indicator can be accurate without being complete. A country’s financial markets returning to stability does not mean that those who lost jobs and homes in the crisis have recovered their former lives."],
      ["不过，如果说教育和技术让我体验到全球化带来的机会，那么投资则让我更直接地理解全球化如何分配财富。",
       "Yet if education and technology let me experience the opportunities globalization brings, investing has let me understand more directly how it distributes wealth."],
      ["我持有美国法国和日本的房地产，也通过股票投资参与美国及国际市场。房地产租金、企业利润、股票价格与不同国家的经济增长，都能够以某种方式影响我的资产。即使我没有亲自参与某家企业的经营，也可以通过持有它的股票分享其经营成果；即使我不在出租房产所在地工作，房产仍然可能持续产生收入。资本能够跨越时间与地域积累，而个人不必始终出现在资本创造收益的地方。",
       "I hold real estate in the United States, France and Japan, and through stocks take part in American and international markets. Rental income, corporate profits, share prices and the economic growth of different countries can all affect my assets in some way. Even if I do not take part in running a company, I can share its results by holding its stock; even if I do not work where a rental property is, it can still keep producing income. Capital can accumulate across time and place, and the individual need not always be present where capital creates its returns."],
      ["这正是全球资本市场吸引我的地方。它使财富不必完全依赖一个人的劳动时间，也允许投资者分散地域与行业风险。我并不认为这种机制有什么天然的不正当。资本承担风险，支持企业融资与经济活动，长期投资也是个人获得财务安全的重要途径。",
       "This is exactly what attracts me to global capital markets. They allow wealth not to depend entirely on one’s labor time, and let investors spread geographic and sector risk. I do not think there is anything inherently improper in this mechanism. Capital bears risk and supports corporate financing and economic activity, and long-term investing is an important way for individuals to gain financial security."],
      ["但斯蒂格利茨让我更加注意到，同样的国际资本流动，对于不同的人意味着完全不同的事情。",
       "But Stiglitz made me notice more that the same international capital flows mean entirely different things to different people."],
      ["当我投资海外股票时，可以根据市场变化调整配置；如果某个经济体的前景恶化，我可以选择减少相关资产的敞口。但生活在当地的人未必拥有同样的退出能力。他们的工作、住房、家庭与社会关系都在那里。对于投资者，资本撤离可能只是一次风险管理；对于依赖当地经济生活的人，大规模资本撤离却可能意味着失业、货币贬值与企业倒闭。",
       "When I invest in foreign stocks I can adjust my allocation as markets change; if an economy’s prospects worsen, I can choose to reduce my exposure. But the people who live there may not have the same ability to exit. Their jobs, homes, families and social ties are all there. For the investor, capital flight may be just an act of risk management; for those who depend on the local economy, a large-scale withdrawal of capital can mean unemployment, currency depreciation and business failures."],
      ["1997年亚洲金融危机正是这种不对称的集中体现。国际货币基金组织试图通过提高利率、财政紧缩等措施恢复投资者信心，但斯蒂格利茨认为，这些政策在某些情况下反而加剧了经济衰退。我并不完全接受他对危机的所有解释。部分亚洲经济体原本就存在短期外债、企业高杠杆与金融监管不足的问题，危机不可能全部归咎于国际机构。但我赞同他提出的根本质疑：为什么恢复资本市场信心可以成为政策的首要目标，而普通人承担的社会代价却容易被视为必要的调整成本？",
       "The 1997 Asian financial crisis is a concentrated expression of this asymmetry. The IMF tried to restore investor confidence through higher interest rates, fiscal austerity and similar measures, but Stiglitz argues that in some cases these policies made the recession worse. I do not fully accept all his explanations of the crisis. Some Asian economies already had short-term foreign debt, highly leveraged firms and weak financial supervision, and the crisis cannot be blamed entirely on international institutions. But I agree with the fundamental question he raises: why can restoring capital-market confidence be the first goal of policy, while the social costs borne by ordinary people are so easily treated as the necessary price of adjustment?"],
      ["我尤其不愿意将这一问题简化为富人与穷人、发达国家与发展中国家之间的道德对立。全球资本流动确实支持了许多国家的工业化与经济增长。没有国际贸易、技术交流与跨境投资，许多发展机会也不会存在。我的职业与投资生活本身就证明，开放能够创造真实的价值。",
       "I am especially unwilling to reduce this question to a moral opposition between rich and poor, developed and developing countries. Global capital flows have indeed supported industrialization and growth in many countries. Without international trade, technological exchange and cross-border investment, many opportunities for development would not exist. My own working and investing life proves that openness can create real value."],
      ["然而，全球化带来的机会并不是平均分配的。我能够留在美国发展，是因为拥有教育、专业能力与相应的制度条件；我能够参与跨国投资，是因为已经积累了一定的资本；我能够从技术全球化中受益，是因为自己恰好拥有这种产业所需要的技能。这些条件包含个人努力，也包含许多并非完全由个人决定的机会。",
       "However, the opportunities globalization brings are not evenly distributed. I could build a life in the United States because I had education, professional skills and the corresponding institutional conditions; I can invest across borders because I had already accumulated some capital; I can benefit from the globalization of technology because I happen to have the skills this industry needs. These conditions include personal effort, and also many opportunities not wholly decided by the individual."],
      ["因此，我越来越不喜欢一种简单的成功叙事：既然我能够通过教育、工作与投资改善生活，别人理应也能如此。这样的推论忽略了一个事实：**全球化给予不同人的，并不是相同的起点，而是一个允许某些优势不断转化为新优势的世界。**",
       "So I increasingly dislike a simple narrative of success: since I could improve my life through education, work and investment, others should be able to do the same. This inference ignores a fact: **what globalization gives different people is not the same starting point, but a world that lets certain advantages keep turning into new advantages.**"],
      ["我也不会因为读了斯蒂格利茨，就放弃自己的投资，或者否认跨国教育与技术产业的价值。我仍然希望通过长期积累获得财务自由，也仍然相信全球合作能够创造比封闭市场更多的机会。但我不再愿意仅仅以自己是否从中获益，来判断一种经济制度是否公平。",
       "Reading Stiglitz will not make me give up my investments or deny the value of international education and the technology industry. I still hope to reach financial freedom through long-term accumulation, and still believe global cooperation can create more opportunity than closed markets. But I am no longer willing to judge whether an economic system is fair merely by whether I benefit from it."],
      ["这本书最让我不安的，反而是我能够如此自然地理解国际资本的立场。当市场波动时，我会关注流动性、利率与资产价格；当企业扩大国际业务时，我会关注增长、效率与竞争优势。这些都是合理的问题。但斯蒂格利茨提醒我，在这些问题之外，还有一些人无法轻易改变自己的工作地点，无法分散家庭收入来源，也无法通过持有全球资产来对冲当地经济的风险。",
       "What disturbs me most about the book is that I can understand the position of international capital so naturally. When markets swing, I look at liquidity, interest rates and asset prices; when a company expands abroad, I look at growth, efficiency and competitive advantage. These are reasonable questions. But Stiglitz reminds me that beyond them are people who cannot easily change where they work, cannot diversify their family’s sources of income, and cannot hedge the risks of the local economy by holding global assets."],
      ["《全球化及其不满》在文学上并不是一本特别优雅的书。它充满政策争论、机构批评与经济案例，作者的愤怒有时甚至压过了论证的耐心。但我逐渐欣赏这种带有个人立场的写法。斯蒂格利茨没有把自己伪装成置身事外的观察者，而是以一个曾经身处制度内部、又对制度深感失望的人的身份写作。书中最有力量的部分，往往不是某项经济政策的技术性分析，而是他不断将那些被称为“必要调整”的决定，还原为具体的人所经历的失业、贫困与失去尊严。",
       "*Globalization and Its Discontents* is not an especially elegant book as literature. It is full of policy disputes, criticism of institutions and economic cases, and the author’s anger sometimes outruns the patience of his argument. But I have come to appreciate this writing with a personal stance. Stiglitz does not disguise himself as a detached observer, but writes as someone who was once inside the institutions and is deeply disappointed in them. The most powerful parts of the book are often not the technical analysis of a policy but the way he keeps turning decisions called “necessary adjustment” back into the unemployment, poverty and loss of dignity that actual people went through."],
      ["我想，这也改变了我理解全球化的方式。它不再只是一个关于市场开放与经济增长的宏大叙事，而是一部由许多不同命运共同写成、却并不拥有同一个叙述者的历史。我在其中读到的是教育、职业与财富带来的可能；另一些人读到的，却是产业衰落、生活失序与无法选择的离别。",
       "I think this has also changed how I understand globalization. It is no longer only a grand narrative about open markets and economic growth, but a history written jointly by many different fates, without a single narrator. What I read in it is the possibility that education, career and wealth bring; others read in it industrial decline, disrupted lives and partings they could not choose."],
      ["**我依然喜欢全球化。但斯蒂格利茨使我意识到，我所熟悉的那个开放而慷慨的世界，只是这部历史中恰好由我讲述的一章。**",
       "**I still like globalization. But Stiglitz made me realize that the open and generous world I know is only the one chapter of this history that happens to be told by me.**"]
    ]
  },
  {
    "date": "2024-07-01",
    "title": "Home Is Not an Easy Place to Go Back To",
    "slug": "home-is-not-an-easy-place-to-go-back-to",
    "category": "Sociology",
    "book": {
      "cover": "xiangzheng.jpg",
      "title": "乡争 (Competition in Chinese Villages)",
      "author": "杨华 Yang Hua",
      "language": "Chinese",
      "country": "China",
      "original": "Chinese",
      "lines": [
        "Sociology · Chinese original, Peking University Press",
        "How competition over land, resources and local power shapes everyday life in rural China, and what it means that some people can leave and others have to stay and contend."
      ]
    },
    "place": "于中国湖州\nHuzhou, China",
    "languages": ["Chinese", "English"],
    "prose": [
      ["我离开中国到美国学习、工作、生活，逐渐建立起自己的职业与经济基础。回头看，这段经历很容易被理解为一个关于教育、努力与个人选择的故事。但读杨华的《乡争》，我开始意识到，自己的生活还有一个过去不太注意的特点：当某种竞争变得难以承受时，我往往拥有寻找其他机会的可能。",
       "I left China to study, work and live in the United States, and gradually built my own professional and economic footing. Looking back, this experience is easily understood as a story of education, effort and personal choice. But reading Yang Hua’s *Xiang Zheng* (*Competition in Chinese Villages*), I began to realize that my life has one more feature I had not paid much attention to: when a certain kind of competition becomes unbearable, I usually have the possibility of looking for other opportunities."],
      ["我并没有亲身经历杨华所研究的那些乡村纠纷，也不愿意把自己的成长经历与中国农民的处境轻易等同。恰恰是这种距离，使我对《乡争》产生了兴趣。书中的人们需要围绕土地、资源、基层权力与社会关系不断协调甚至争夺利益，而我所熟悉的现代职业生活，则允许一个人通过教育、就业和迁移，在不同的制度与市场之间寻找机会。",
       "I have not personally experienced the rural disputes Yang Hua studies, and I am unwilling to equate my own upbringing with the situation of Chinese farmers. It is precisely this distance that made me interested in *Xiang Zheng*. The people in the book must keep negotiating, or even fighting, over interests around land, resources, grassroots power and social relationships, while the modern professional life I know allows a person, through education, employment and migration, to look for opportunities among different institutions and markets."],
      ["这两种生活最重要的差别，未必是谁更加勤奋或聪明，而是谁拥有离开的条件。",
       "The most important difference between these two lives is not necessarily who is more diligent or clever, but who has the means to leave."],
      ["杨华笔下的乡村不是一个充满田园诗意的地方。村庄内部的利益冲突、人情关系与权力结构，使许多看似简单的事务变得复杂。土地与资源的分配并不只是经济问题，也牵涉家族关系、地方声望与长期积累的矛盾。一个人即使在某次争执中占了上风，也仍然必须与对方继续生活在同一个村庄。竞争并不会因为一场争论结束而真正结束。",
       "The countryside in Yang Hua’s writing is not a place of pastoral poetry. Conflicts of interest, personal obligations and power structures inside the village complicate many seemingly simple matters. The distribution of land and resources is not only an economic question; it also involves family ties, local standing and long-accumulated grievances. Even someone who gets the upper hand in a dispute must keep living in the same village as the other party. Competition does not truly end just because one argument is over."],
      ["我尤其在意这种无法轻易退出的处境。在现代经济学中，我们习惯于将个人视为能够根据成本与收益作出选择的行动者。但现实中的选择从来不是无限的。一个人的住房、家庭、社会关系与经济来源如果全部集中在同一个地方，那么离开便意味着付出极高的代价。对于拥有更多流动机会的人，某种不公平可能只是需要避开的环境；对于无法离开的人，它却可能成为必须长期面对的生活条件。",
       "I am especially struck by this situation of not being able to exit easily. In modern economics we are used to treating individuals as actors who choose according to costs and benefits. But real choices are never unlimited. If a person’s housing, family, social relations and income are all concentrated in one place, leaving means paying a very high price. For someone with more mobility, a certain unfairness may be just an environment to avoid; for someone who cannot leave, it may be a condition of life that must be faced for the long term."],
      ["这使我重新审视自己对个人奋斗的理解。我一直相信教育、专业能力与长期规划能够改善一个人的处境。自己的留学与职业经历，也使我有理由相信这种社会流动的真实性。但我同样清楚，这条道路依赖许多前提：接受跨国教育的机会、能够进入的就业市场、合法居留与工作的制度条件，以及足以承担转变成本的资源。个人努力确实重要，却不能单独解释为什么某些人能够改变生活环境，而另一些人只能在既有环境中竞争。",
       "This made me re-examine my understanding of individual striving. I have always believed that education, professional ability and long-term planning can improve a person’s situation, and my own experience of study and career gives me reason to believe in the reality of such mobility. But I am equally aware that this path rests on many preconditions: the chance of an international education, a job market one can enter, the institutional conditions for legal residence and work, and resources enough to bear the cost of change. Personal effort does matter, but it cannot alone explain why some people can change their surroundings while others can only compete within the ones they have."],
      ["如今我通过工作与投资逐渐积累资产，更能感受到这种差别。经济安全不仅意味着消费能力，也意味着面对不利条件时拥有拒绝或等待的余地。一个人有储蓄，可以承受暂时失业；有专业技能，可以考虑更换工作；有跨地区的投资与收入来源，便不必将全部未来押在一个地方的经济变化上。相比之下，土地与地方社会关系可能是乡村居民最重要的资源，却也使他们的生活更难与当地的利益冲突分离。",
       "Now that I am gradually accumulating assets through work and investment, I feel this difference more keenly. Economic security means not only the ability to consume but also room to refuse or wait when conditions are unfavorable. With savings, a person can bear a spell of unemployment; with professional skills, can consider changing jobs; with investments and income from several regions, need not stake the whole future on the economy of one place. By contrast, land and local social ties may be the most important resources of villagers, yet they also make it harder for their lives to be separated from local conflicts of interest."],
      ["不过，我并不认为“离开”天然比“留下”更加优越。离开可能意味着更多自由，也可能意味着与原有社会关系的疏离；留下则可能包含责任、归属感与无法通过市场交换衡量的价值。乡村居民也不是被动困在原地的人，他们同样拥有自己的判断、策略与行动能力。杨华笔下的争夺，有时恰恰体现了人们试图在有限条件下维护自身利益的努力。",
       "Still, I do not think “leaving” is inherently superior to “staying.” Leaving may mean more freedom, and may also mean estrangement from one’s original social ties; staying may involve responsibility, belonging and values that cannot be measured by market exchange. Villagers are not passively stuck in place either; they too have their own judgment, strategies and capacity to act. The contests in Yang Hua’s writing sometimes show precisely people’s effort to protect their own interests under limited conditions."],
      ["因此，我不愿意简单地把《乡争》读成一部关于乡村落后与现代化不足的作品。村庄内部的竞争并不必然来自某种特殊的乡村性格。资源有限、制度执行不均、权力缺乏约束时，城市、企业乃至国际社会同样会出现类似的争夺。乡村只是使这些关系更加集中，也更加难以回避。",
       "So I am unwilling to read *Xiang Zheng* simply as a work about rural backwardness and insufficient modernization. Competition inside villages does not necessarily come from some peculiar rural character. When resources are limited, enforcement of institutions is uneven and power lacks restraint, similar contests arise in cities, companies and even the international community. The countryside only makes these relationships more concentrated and harder to avoid."],
      ["从写作方法来看，《乡争》的价值，在于它把我们习惯于用宏观概念讨论的社会问题，重新放回具体的人际关系之中。基层治理、资源分配与社会秩序，在理论中是相对清晰的概念；进入村庄之后，却变成了谁与谁熟悉、谁有能力动员关系、谁能够承担冲突成本等复杂问题。杨华的研究使我意识到，制度的实际效果不能仅仅从规则本身推断，还必须观察人们如何在日常生活中使用、解释甚至改变这些规则。",
       "As for method, the value of *Xiang Zheng* lies in putting social problems we usually discuss in macro concepts back into concrete human relationships. Grassroots governance, resource allocation and social order are relatively clear concepts in theory; once inside a village they become complicated questions of who knows whom, who can mobilize connections, and who can bear the cost of conflict. Yang Hua’s research made me realize that the actual effect of an institution cannot be inferred from the rules alone; one must also watch how people use, interpret and even change those rules in daily life."],
      ["当然，聚焦利益竞争也有可能使乡村生活显得过于紧张。合作、互助、亲情与地方认同，同样是乡村社会的重要组成部分。中国不同地区的经济结构、人口流动与治理方式也存在巨大差异，不能把某些地方的冲突当作所有乡村的共同命运。我更愿意把杨华的分析理解为观察中国基层社会的一种视角，而不是对乡村生活的最终定义。",
       "Of course, focusing on competition over interests may also make village life seem too tense. Cooperation, mutual help, kinship and local identity are equally important parts of rural society. Economic structures, population movement and modes of governance also differ enormously across regions of China, and conflicts in some places cannot be taken as the common fate of all villages. I would rather understand Yang Hua’s analysis as one perspective for observing China’s grassroots society than as a final definition of rural life."],
      ["读完这本书，我想到的不是自己离开了一个怎样的故乡，而是离开本身究竟意味着什么。过去，我更习惯于把跨国教育、职业发展与财富积累理解为个人选择的结果；如今我也开始把它们看作一种逐渐扩大的行动空间。它使我能够在不同的地方寻找机会，也使我不必将自己的生活完全交给某一套地方关系决定。",
       "After finishing the book, what I thought about was not what kind of hometown I left but what leaving itself really means. In the past I was more used to understanding international education, career development and the accumulation of wealth as results of personal choice; now I also begin to see them as an ever-widening space for action. It lets me look for opportunities in different places, and means I need not hand my life over entirely to one set of local relationships."],
      ["**《乡争》让我看到，社会不平等有时并不首先表现为谁拥有更多财富，而是当人们面对同一种不利处境时，有些人可以离开，有些人却只能留下来争。**",
       "***Xiang Zheng* showed me that social inequality sometimes does not appear first as who has more wealth, but as this: when people face the same unfavorable situation, some can leave and others can only stay and contend.**"]
    ]
  },
  {
    "date": "2016-11-05",
    "title": "Who Has the Right to Tell a Family’s Past?",
    "slug": "who-has-the-right-to-tell-a-familys-past",
    "category": "Novel",
    "book": {
      "cover": "sound_and_the_fury.jpg",
      "title": "The Sound and the Fury",
      "author": "William Faulkner",
      "language": "English",
      "country": "United States",
      "original": "English",
      "lines": [
        "Novel · English original, first published 1929",
        "The decline of the Compson family in Mississippi, told in four parts, by Benjy, Quentin and Jason and then in a final section centred on Dilsey, around the absent Caddy."
      ]
    },
    "place": "于华盛顿州贝尔维尤\nBellevue, WA",
    "languages": ["Chinese", "English"],
    "prose": [
      ["第一次读《喧哗与骚动》，我始终想弄清楚一件事：康普生家族究竟发生了什么？", "Reading *The Sound and the Fury* for the first time, I kept trying to work out one thing: what exactly happened to the Compson family?"],
      ["一个女儿离开了家庭，一个儿子自杀了，另一个儿子终日抱怨，最小的儿子甚至无法清楚地表达自己。我以为只要把这些事情按照时间顺序排列，就能找到这个家庭衰败的原因。", "One daughter leaves the family, one son kills himself, another complains all day, and the youngest cannot even express himself clearly. I thought that if I simply put these events in chronological order, I would find the reason for the family’s decline."],
      ["于是我真的开始整理时间表。", "So I really did start making a timeline."],
      ["但读到后来，我发现最奇怪的事情不是福克纳把故事讲乱了，而是**整个家庭似乎都在围绕凯蒂讲述过去，凯蒂本人却始终没有机会说话。**", "But as I read on, I found the strangest thing was not that Faulkner told the story out of order, but that **the whole family seems to tell the past around Caddy, while Caddy herself never gets to speak.**"],
      ["这让我想起自己来到美国以后，对家庭和过去产生的一些变化。", "This reminds me of some changes in how I saw family and the past after coming to America."],
      ["刚到西雅图读书时，我第一次长时间离开父母，也第一次发现，原来一个人可以同时生活在两套完全不同的叙述之中。", "When I first arrived in Seattle to study, it was the first time I was away from my parents for a long while, and the first time I found that a person can live in two entirely different narratives at once."],
      ["在美国，我的生活是课程、考试、朋友，以及对未来的种种打算。每天都有新的事情发生，我也越来越习惯独立作决定。但与父母通电话时，谈话又常常回到过去：家里的事情、以前认识的人、我小时候的习惯，以及他们对我未来的期待。", "In America my life was courses, exams, friends and plans for the future. Something new happened every day, and I grew used to deciding things on my own. But on the phone with my parents, the conversation often went back to the past: family matters, people I used to know, my childhood habits, and their expectations for my future."],
      ["有时候，我觉得自己已经改变了很多，但在父母的叙述里，我似乎仍然是那个离开家以前的人。", "Sometimes I felt I had changed a great deal, but in my parents’ telling I still seemed to be the person from before I left home."],
      ["这当然不是说我的家庭与康普生家族有什么相似之处。我只是逐渐意识到，**一个人离开家庭，并不意味着他也离开了家人对他的记忆。**", "This is of course not to say my family resembles the Compsons. I only gradually realized that **leaving a family does not mean leaving the family’s memory of you.**"],
      ["班吉尤其让我想到这一点。", "Benjy makes me think of this especially."],
      ["他的意识无法按照时间顺序组织世界。一种气味、一个声音，就能让过去突然重新出现。凯蒂已经离开多年，但对班吉而言，她仍然存在于那些无法消失的感官经验中。", "His mind cannot organize the world in chronological order. A smell or a sound can make the past suddenly reappear. Caddy has been gone for years, but for Benjy she still exists in sensory experiences that will not go away."],
      ["我起初觉得这种叙述非常困难，后来却觉得，它可能比正常的回忆更接近某些真实的情感。", "At first I found this narration very difficult; later I felt it may be closer to certain real emotions than ordinary recollection is."],
      ["在西雅图，有时听到一句熟悉的中文，或者闻到某种食物的味道，我也会突然想起远在另一边的生活。那一瞬间，过去并不像已经结束的事情，反而比眼前的环境更加清晰。", "In Seattle, hearing a familiar line of Chinese or smelling a certain food, I too would suddenly think of the life far on the other side. In that instant the past did not feel finished; it was clearer than my surroundings."],
      ["当然，我可以区分过去与现在，班吉却不能。但福克纳让我意识到，时间在人的记忆里，从来不像日历上那样整齐。", "Of course I can tell past from present and Benjy cannot. But Faulkner made me realize that time in human memory is never as orderly as on a calendar."],
      ["昆丁则让我想到另一种我在美国逐渐感受到的矛盾。", "Quentin makes me think of another contradiction I gradually felt in America."],
      ["他离开密西西比，到哈佛读书，地理上已经进入一个完全不同的世界，精神上却始终无法离开南方家族的荣誉观念。他对妹妹凯蒂贞洁的执念，几乎成为他理解整个世界的方式。", "He leaves Mississippi for Harvard, geographically entering an entirely different world, yet spiritually never leaves the Southern family’s notion of honor. His obsession with his sister Caddy’s chastity becomes almost the way he understands the whole world."],
      ["我同样是一个离开故乡、到美国接受教育的人，所以对这种身体已经离开、观念却仍然留在过去的状态格外敏感。", "I too left my hometown to be educated in America, so I am especially sensitive to this state of having left in body while remaining in the past in mind."],
      ["刚来美国时，我也经常发现，一些自己从小习以为常的家庭观念，在这里并不被认为理所当然。比如个人应该在多大程度上服从家庭期待，父母是否有权决定孩子的人生，以及一个人的选择究竟首先属于自己，还是属于整个家庭。", "When I first came, I often found that family ideas I had taken for granted since childhood were not taken for granted here: how far an individual should comply with family expectations, whether parents have the right to decide a child’s life, and whether a person’s choices belong first to himself or to the whole family."],
      ["我未必总是赞同美国式的个人独立，但我开始理解，为什么昆丁无法接受凯蒂拥有自己的生活。", "I do not always agree with American-style individual independence, but I began to understand why Quentin cannot accept that Caddy has a life of her own."],
      ["他所维护的其实不只是妹妹的贞洁，而是一个男人相信自己有权解释、甚至决定女性命运的旧世界。", "What he defends is not just his sister’s chastity but an old world in which a man believes he has the right to interpret, even decide, a woman’s fate."],
      ["最令我不安的是，凯蒂几乎是小说的中心，却没有自己的叙述章节。我们只能从兄弟们的记忆里认识她：班吉需要她的温柔，昆丁需要她的纯洁，杰生则把自己的失败归咎于她。", "What disturbs me most is that Caddy is almost the center of the novel yet has no narrating section of her own. We know her only through her brothers’ memories: Benjy needs her tenderness, Quentin her purity, and Jason blames her for his own failure."],
      ["但凯蒂自己究竟如何理解这一切？", "But how does Caddy herself understand all this?"],
      ["这让我想到，离开家以后，我也开始发现，父母对某件往事的记忆，与我自己的记忆有时并不完全相同。同一件事情，在他们看来可能是关心，在我看来却可能是干涉；他们记得的是为我付出了什么，我记得的却可能是自己当时多么想离开。", "This reminds me that after leaving home I also began to find that my parents’ memory of some past event does not always match mine. The same thing may be care to them and interference to me; they remember what they gave up for me, while I may remember how badly I wanted to leave."],
      ["我并不认为其中必然有人说谎。也许家庭生活本来就没有一个所有人都同意的版本。", "I do not think anyone must be lying. Perhaps family life simply has no version everyone agrees on."],
      ["杰生的章节则让我看到另一种更熟悉的美国。", "Jason’s section showed me another, more familiar America."],
      ["他不再像昆丁那样执着于荣誉，而是不断计算金钱、机会和自己遭受的不公平。来到美国以后，我逐渐习惯了这里强调个人奋斗与经济成功的语言，也因此对杰生的抱怨感到格外讽刺。", "He no longer clings to honor as Quentin does, but keeps counting money, opportunities and the unfairness done to him. Since coming to America I have grown used to its language of personal striving and economic success, and so find Jason’s complaints especially ironic."],
      ["他似乎总认为，自己原本应该拥有更好的生活，只是被别人夺走了。", "He seems always to think he should have had a better life, and that it was taken from him by others."],
      ["但他从不认真怀疑，自己对世界的理解是否也有问题。", "But he never seriously doubts whether his own understanding of the world might be at fault."],
      ["昆丁把过去变成荣誉，杰生把过去变成债务。两个人看似属于不同的时代，却都需要凯蒂为他们无法实现的人生承担责任。", "Quentin turns the past into honor, Jason turns it into debt. The two seem to belong to different eras, yet both need Caddy to bear responsibility for the lives they could not achieve."],
      ["直到最后一部分，叙述离开康普生兄弟，转向迪尔西，我才意识到自己此前几乎完全接受了这个白人家庭对世界的定义。", "Only in the last section, when the narration leaves the Compson brothers for Dilsey, did I realize that until then I had almost entirely accepted this white family’s definition of the world."],
      ["迪尔西照顾着这个家庭，见证它的衰败，却并不把康普生家族的命运当作整个世界的命运。她的存在让我重新想起美国南方历史中那些长期被排除在家族荣誉与地方传统之外的人。", "Dilsey cares for this family and witnesses its decline, yet does not treat the Compsons’ fate as the fate of the whole world. Her presence reminded me of those in Southern history long excluded from family honor and local tradition."],
      ["我在美国课堂上读到的南方历史，常常被整理成奴隶制、内战、重建与现代化的连续过程。但在福克纳这里，历史并不是一条能够被完整复原的时间线。它散落在不同人的记忆中，而有些人甚至从未得到讲述自己经历的机会。", "The Southern history I read about in American classrooms was often arranged as a continuous process of slavery, Civil War, Reconstruction and modernization. But in Faulkner, history is not a timeline that can be fully restored. It is scattered across different people’s memories, and some people never got the chance to tell their experience at all."],
      ["这也是为什么，我最终放弃了最初那张时间表。", "This is why I finally abandoned my original timeline."],
      ["刚到美国时，我总觉得，离开故乡意味着可以重新开始，过去的生活会逐渐成为一段已经完成的历史。但读完《喧哗与骚动》，我开始怀疑，所谓重新开始，也许只是我们为自己选择的一种叙述方式。", "When I first came to America, I felt that leaving home meant a fresh start, and that my past life would gradually become a finished history. After *The Sound and the Fury*, I began to suspect that a “fresh start” may be only a way of narrating that we choose for ourselves."],
      ["在父母的记忆里，在自己的回忆里，在别人对我们的期待里，同一个人可能始终过着几种不同的人生。", "In our parents’ memories, in our own recollections, in what others expect of us, the same person may keep living several different lives."],
      ["福克纳最让我着迷的，正是他没有试图调和这些矛盾。他让班吉停留在感觉里，让昆丁困在时间里，让杰生囚禁于怨恨，又让凯蒂始终缺席。", "What fascinates me most about Faulkner is that he does not try to reconcile these contradictions. He leaves Benjy in sensation, traps Quentin in time, imprisons Jason in resentment, and keeps Caddy forever absent."],
      ["小说的四个部分看似逐渐接近真相，实际上却不断提醒我们：叙述的增加，并不必然意味着理解的完整。", "The novel’s four parts seem to approach the truth, but really keep reminding us that more narration does not necessarily mean fuller understanding."],
      ["我原本想知道康普生家族为什么衰败。", "I originally wanted to know why the Compson family declined."],
      ["但读到最后，我反而更想知道，如果凯蒂能够讲述自己的故事，如果迪尔西从一开始就是叙述者，我们今天所说的那个康普生家族，是否还会是同一个家庭？", "But by the end I wanted more to know: if Caddy could tell her own story, if Dilsey had been the narrator from the start, would the Compson family we speak of today still be the same family?"],
      ["也许《喧哗与骚动》最深刻的地方，并不是它把一个完整的故事打碎了，而是它让我怀疑：**那个所谓完整的故事，是否从来就不曾存在。**", "Perhaps what is deepest about *The Sound and the Fury* is not that it shatters a complete story, but that it makes me doubt: **whether that so-called complete story ever existed at all.**"]
    ]
  },
  {
    "date": "2014-06-11",
    "title": "A War Already Lost?",
    "slug": "a-war-already-lost",
    "category": "History",
    "book": {
      "cover": "history_of_sino_japanese_war.jpg",
      "title": "甲午战争史 (History of the First Sino-Japanese War)",
      "author": "戚其章 Qi Qizhang",
      "language": "Chinese",
      "country": "China",
      "original": "Chinese",
      "lines": [
        "History · Chinese original, Shanghai People’s Publishing House",
        "A history of the 1894–95 war between Qing China and Meiji Japan, from the Beiyang Fleet’s ironclads to the Treaty of Shimonoseki."
      ]
    },
    "place": "于华盛顿州西雅图\nSeattle, WA",
    "languages": ["Chinese", "English"],
    "prose": [
      ["1894年夏天，如果一个人站在天津的大沽口，望着北洋舰队的定远、镇远两艘铁甲舰，他有什么理由相信清朝即将遭遇一场惨败？",
       "In the summer of 1894, if a person stood at Dagu Kou in Tianjin and looked at the Beiyang Fleet’s two ironclads, the *Dingyuan* and the *Zhenyuan*, what reason would he have to believe the Qing was about to suffer a crushing defeat?"],
      ["这些军舰并不是腐朽帝国的古老遗物，而是当时颇具威慑力的现代化战舰。清朝已经进行了三十余年的洋务运动，建立兵工厂、铺设电报、修筑铁路、派遣留学生，也拥有一支曾经令东亚各国重视的海军。日本的明治维新虽然成效显著，却同样面临财政约束与军事风险。战争尚未开始，胜负远没有后来历史教科书里显得那样清楚。",
       "These warships were not ancient relics of a decaying empire but modern, formidable battleships for their time. The Qing had already pursued the Self-Strengthening Movement for more than thirty years, building arsenals, laying telegraph lines, constructing railways and sending students abroad, and it had a navy that East Asian countries once took seriously. Japan’s Meiji Restoration, though remarkably effective, also faced fiscal constraints and military risks. Before the war began, the outcome was far from as clear as it later appeared in history textbooks."],
      ["但仅仅一年之后，北洋舰队覆灭，清朝签订《马关条约》，割让台湾及澎湖列岛，支付巨额赔款。一个投入数十年、寄托着富国强兵希望的现代化工程，竟然在第一次重大的国家战争考验中暴露出如此严重的缺陷。",
       "But only a year later, the Beiyang Fleet was destroyed, and the Qing signed the Treaty of Shimonoseki, ceding Taiwan and the Penghu Islands and paying a huge indemnity. A modernization project that had absorbed decades and carried hopes of a rich and strong country exposed such serious defects in its first great test of national war."],
      ["**那么，甲午战争究竟是一场因为清朝落后而必然失败的战争，还是一场本来可能打得不同、却最终被错误决策与制度缺陷共同葬送的战争？**",
       "**So was the First Sino-Japanese War one the Qing was bound to lose because it was backward, or one that might have been fought differently and was finally buried by wrong decisions and institutional defects together?**"],
      ["读《甲午战争史》，我最想弄清楚的不是清朝为什么失败，而是它为什么曾经有理由相信自己不会失败。",
       "Reading *History of the First Sino-Japanese War*, what I most wanted to understand was not why the Qing lost, but why it once had reason to believe it would not."],
      ["我们习惯于从1895年的结局回望1894年的开端。北洋舰队的腐败、清廷的犹疑、李鸿章的保守、慈禧的奢靡，似乎每一项都可以成为战败的理由。历史于是变成了一份早已写好的判决书，所有人物只是在按照既定结局犯下错误。但这种解释虽然令人满意，却也剥夺了历史真正值得研究的部分：当时的人究竟知道什么，不知道什么，又为什么在有限的信息中作出了那些决定？",
       "We are used to looking back from the ending of 1895 at the beginning of 1894. The corruption of the Beiyang Fleet, the Qing court’s hesitation, Li Hongzhang’s conservatism and Empress Dowager Cixi’s extravagance each seem able to serve as a reason for defeat. History then becomes a verdict already written, in which every figure merely commits errors according to a set conclusion. But this explanation, satisfying as it is, deprives us of what is truly worth studying in history: what did people at the time know and not know, and why did they make those decisions on limited information?"],
      ["黄海海战尤其值得如此理解。北洋舰队拥有定远、镇远这样的重型铁甲舰，在部分装备上具有优势，却在舰艇航速、速射火力、训练与战术协同方面存在不足。海战并非简单的先进武器击败落后武器，而是两套不同的作战体系在真实战场上的碰撞。中国舰队并不缺少勇敢作战的官兵，许多舰艇也坚持战斗至最后。但勇敢不能代替训练，单舰的装甲优势也不能弥补整体战术的局限。",
       "The Battle of the Yellow Sea especially deserves to be understood this way. The Beiyang Fleet had heavy ironclads like the *Dingyuan* and *Zhenyuan* and held an advantage in some equipment, but was deficient in ship speed, quick-firing guns, training and tactical coordination. The naval battle was not simply advanced weapons beating backward ones but a collision of two different systems of warfare on a real battlefield. The Chinese fleet did not lack brave officers and men, and many ships fought to the end. But courage cannot replace training, and the armor advantage of a single ship cannot make up for the limits of overall tactics."],
      ["更令人深思的是威海卫之战。北洋舰队最终的覆灭，并不完全发生在两支舰队的海上决战中，而是与陆上防御失守、港口被围和指挥体系崩溃密切相关。一支海军即使拥有先进战舰，也必须依赖陆军、港口防御、后勤补给与国家财政的共同支持。军舰可以从欧洲购买，能够使这些军舰有效作战的国家制度，却无法通过采购获得。",
       "More thought-provoking still is the Battle of Weihaiwei. The final destruction of the Beiyang Fleet did not occur entirely in a decisive sea battle between two fleets, but was closely tied to the loss of land defenses, the siege of the harbor and the collapse of the command system. Even a navy with advanced warships must rely on the joint support of the army, harbor defenses, logistics and national finance. Warships can be bought from Europe; the national institutions that make them fight effectively cannot be obtained by purchase."],
      ["这使我想到自己在大型技术组织中的工作经验。一个复杂系统的成功，往往不取决于某个组件是否足够先进，而取决于不同团队能否围绕共同目标协调资源、明确责任并及时作出决策。一个项目可以拥有优秀的工程师、先进的模型与充足的设备，却仍然因为组织之间的目标不一致而无法发挥应有的能力。",
       "This reminds me of my work experience in large technology organizations. The success of a complex system often depends not on whether one component is advanced enough but on whether different teams can coordinate resources around a common goal, define responsibilities and make decisions in time. A project can have excellent engineers, advanced models and ample equipment and still fail to realize its potential because the goals of different organizations do not align."],
      ["当然，现代企业与十九世纪的国家战争不可同日而语。但甲午战争使我格外注意到一种相似的组织困境：当局部能力不断提高，而整体制度没有随之改变时，先进技术反而容易制造一种虚假的安全感。北洋舰队的铁甲舰不仅是军事装备，也是清廷相信自己已经实现富强的象征。真正危险的或许不是不知道自己落后，而是误以为某些可见的现代化成果，已经足以证明整个制度完成了转型。",
       "Of course, a modern company and a nineteenth-century national war are not to be spoken of in the same breath. But the First Sino-Japanese War made me notice a similar organizational predicament: when local capabilities keep improving while the overall system does not change with them, advanced technology can easily create a false sense of security. The Beiyang Fleet’s ironclads were not only military equipment but also a symbol of the Qing court’s belief that it had achieved wealth and strength. What is truly dangerous may not be not knowing one is behind, but mistaking some visible results of modernization for proof that the whole system has been transformed."],
      ["李鸿章在这场战争中的位置，也因此比传统叙事复杂得多。他知道北洋舰队的实力与局限，也明白清朝财政和军事动员的困难。他试图通过外交延缓战争，既可能包含保守与误判，也确实反映了对实力差距的认识。但他所主导的洋务体系，最终未能建立足以支撑现代战争的国家能力。将他简单描写为卖国者，固然容易；真正困难的是解释，为什么一个在清朝最积极推动军事现代化的大臣，仍然无法使这些现代化成果形成有效的整体力量。",
       "Li Hongzhang’s position in this war is therefore far more complicated than in the traditional narrative. He knew the strength and limits of the Beiyang Fleet, and understood the difficulties of Qing finance and military mobilization. His attempt to delay the war through diplomacy may have involved conservatism and misjudgment, but it also did reflect an awareness of the gap in strength. Yet the Self-Strengthening system he led ultimately failed to build national capacity sufficient to support modern war. It is easy to portray him simply as a traitor; what is truly hard is to explain why a minister who pushed military modernization most actively in the Qing still could not make its results into an effective whole."],
      ["日本的明治维新则呈现了另一种道路。它同样存在政治矛盾、财政压力与军事局限，却在中央集权、征兵制度、教育改革与国家动员方面取得了更系统的进展。甲午战争的胜负，不能简单解释为日本民族性格优于中国，更不能将其归结为所谓文明程度的高低。真正产生差异的，是两国在特定历史条件下建立起来的制度能力，以及这些制度能否将资源转化为持续的军事行动。",
       "Japan’s Meiji Restoration presents another path. It too had political contradictions, fiscal pressure and military limits, but made more systematic progress in centralization, conscription, educational reform and national mobilization. The outcome of the war cannot be explained simply by the Japanese national character being superior to the Chinese, much less reduced to a so-called higher or lower level of civilization. What made the difference was the institutional capacity each country had built under particular historical conditions, and whether those institutions could turn resources into sustained military action."],
      ["不过，我也警惕一种将日本胜利完全归功于现代化的叙事。日本的军事改革确实值得研究，但它发动战争、扩大对朝鲜与中国的控制，同样体现了近代帝国主义的扩张逻辑。制度效率并不自动意味着政治正当性。一个国家能够更加有效地组织军队，并不能因此证明它拥有发动侵略战争的权利。甲午战争最值得深思的地方之一，正是现代化可以同时服务于国家建设与对外侵略。",
       "Still, I am wary of a narrative that credits Japan’s victory entirely to modernization. Japan’s military reforms are indeed worth studying, but its launching of the war and expansion of control over Korea and China equally embodied the expansionist logic of modern imperialism. Institutional efficiency does not automatically mean political legitimacy. That a country can organize its army more effectively does not prove it has the right to wage a war of aggression. One of the most thought-provoking points of the war is precisely that modernization can serve both nation-building and aggression abroad."],
      ["1895年的《马关条约》使清朝割让台湾及澎湖列岛、承认朝鲜独立，并承担巨额赔款。战争的后果远远超出一次军事失败。它动摇了清朝长期以来的东亚秩序观念，也刺激了此后的维新运动与政治改革。但我不愿意将这些变化简单写成一场失败终于唤醒民族的故事。历史中的灾难并不因为后来产生了改革，就获得了某种必要性。那些在战争中死亡的人，也不应被事后解释为现代化进程不可避免的代价。",
       "The 1895 Treaty of Shimonoseki forced the Qing to cede Taiwan and the Penghu Islands, recognize Korean independence and pay a huge indemnity. The consequences of the war went far beyond one military defeat. It shook the Qing’s long-held conception of the East Asian order and spurred the reform movement and political reforms that followed. But I am unwilling to write these changes simply as a story of defeat finally awakening a nation. A disaster in history does not acquire some necessity because reforms came afterward. Nor should those who died in the war be explained after the fact as the unavoidable price of modernization."],
      ["从历史写作的角度来看，甲午战争最容易陷入两种叙事。一种是民族屈辱的道德审判，将失败归结为腐败、怯懦与卖国；另一种是制度现代化的目的论，把日本的胜利理解为先进制度战胜落后制度的必然结果。前者过于依赖人物善恶，后者则容易忽略战争中的偶然性、决策失误与具体军事过程。我更欣赏能够在两者之间保留复杂性的历史研究：既解释清朝制度上的长期弱点，也认真对待战争过程中每一次本来可能不同的选择。",
       "From the standpoint of historical writing, the war most easily falls into two narratives. One is a moral judgment of national humiliation, ascribing defeat to corruption, cowardice and treason; the other is a teleology of institutional modernization, which sees Japan’s victory as the inevitable triumph of an advanced system over a backward one. The former relies too much on the good and evil of individuals, while the latter easily ignores contingency, errors of decision and the concrete military process. I prefer historical work that keeps complexity between the two: one that explains the Qing’s long-standing institutional weaknesses and also takes seriously every choice in the course of the war that might have gone differently."],
      ["我读这段历史时，并不希望从中提炼出某种简单的民族教训。今天的中国、日本与十九世纪的东亚已经截然不同，但甲午战争仍然提醒我，国家实力从来不是几件先进装备、几项经济指标或一套宏大口号能够完整衡量的。真正的能力存在于那些不容易被展示的地方：财政如何运作，组织如何协调，信息如何传递，错误如何被纠正，以及决策者是否愿意承认现实与自己期待之间的差距。",
       "In reading this history, I did not hope to extract some simple national lesson. China and Japan today are utterly unlike nineteenth-century East Asia, but the war still reminds me that national strength has never been fully measurable by a few advanced weapons, a few economic indicators or a set of grand slogans. Real capacity lies in places not easily displayed: how finances operate, how organizations coordinate, how information travels, how errors are corrected, and whether decision-makers are willing to admit the gap between reality and their expectations."],
      ["合上书后，我又想起1894年夏天停泊在港口里的定远与镇远。它们的钢铁装甲、巨炮与庞大舰身，都是真实的现代化成果，并非毫无意义的虚饰。正因如此，它们后来的命运才格外令人难过。",
       "After closing the book, I thought again of the *Dingyuan* and *Zhenyuan* moored in the harbor in the summer of 1894. Their steel armor, great guns and huge hulls were real fruits of modernization, not meaningless decoration. That is exactly why their later fate is so sad."],
      ["**甲午战争最深刻的悲剧，不是一个完全没有准备的国家遭遇失败，而是一个已经认真学习了数十年现代化的帝国，直到战争结束，才发现自己学习的远远不够。**",
       "**The deepest tragedy of the First Sino-Japanese War is not that a wholly unprepared country met defeat, but that an empire that had studied modernization earnestly for decades discovered only when the war was over that it had learned far too little.**"]
    ]
  },
  {
    "date": "2017-12-03",
    "title": "An Age That Needed No Usurpation",
    "slug": "an-age-that-needed-no-usurpation",
    "category": "History",
    "book": {
      "cover": "dongjin_menfa_zhengzhi.jpg",
      "title": "東晉門閥政治 (Aristocratic Politics of the Eastern Jin)",
      "author": "田餘慶 Tian Yuqing",
      "language": "Chinese",
      "country": "China",
      "original": "Chinese",
      "lines": [
        "History · Traditional Chinese edition, Open Page",
        "How the Eastern Jin throne and a handful of great clans, the Wang, Yu, Huan and Xie, kept one another in balance for a century."
      ]
    },
    "place": "於加州洛杉磯\nLos Angeles, CA",
    "languages": ["Chinese", "English"],
    "prose": [
      ["公元322年，王敦從武昌起兵，沿江東下，攻入建康。晉元帝司馬睿雖然貴為天子，卻無力阻止這位琅琊王氏的軍事強人。王敦取得勝利後，並沒有立即廢除司馬氏的皇位，而是繼續以晉臣的身份控制朝政。",
       "In 322, Wang Dun raised troops at Wuchang, marched east down the Yangtze and entered Jiankang. Emperor Yuan of Jin, Sima Rui, was Son of Heaven in name but powerless to stop this military strongman of the Langya Wang clan. After his victory, Wang Dun did not at once abolish the Sima throne, but went on controlling the court as a minister of Jin."],
      ["這件事讓我覺得十分有趣。一個人已經能夠憑藉武力壓倒皇帝，為什麼還需要保留皇帝？如果王氏擁有如此強大的實力，為什麼不乾脆取而代之？",
       "I find this very interesting. If a man can already overpower the emperor by force, why must he keep the emperor? If the Wang clan was so strong, why did it not simply replace him?"],
      ["田餘慶的《東晉門閥政治》幾乎就是圍繞這類疑問展開的。我們習慣於將中國古代政治理解為皇帝與權臣爭奪最高權力的故事，但東晉初年的政治結構顯然更加複雜。司馬氏需要高門士族的支持才能維持統治，而士族也需要皇室提供名義上的合法性。王敦可以擊敗皇帝，卻未必能夠使其他士族接受一個王氏王朝。",
       "Tian Yuqing’s *Dongjin Menfa Zhengzhi* (*Aristocratic Politics of the Eastern Jin*) unfolds almost entirely around questions of this kind. We are used to understanding ancient Chinese politics as a story of emperors and powerful ministers contending for supreme power, but the political structure of the early Eastern Jin was clearly more complicated. The Simas needed the support of the high-ranking gentry clans to keep ruling, and the clans in turn needed the imperial house to supply nominal legitimacy. Wang Dun could defeat the emperor, but could not necessarily make the other clans accept a Wang dynasty."],
      ["「王與馬，共天下」因此不只是一句形容王氏顯赫的俗語。它揭示了一個特殊的政治事實：東晉的皇權並不完整，而門閥的權力也受到彼此制約。這個政權能夠維持，並不是因為不存在爭奪，而是因為沒有任何一方能夠輕易將爭奪轉化為獨占。",
       "“The Wangs and the Simas share the realm” is therefore more than a saying about the Wang clan’s eminence. It reveals a peculiar political fact: Eastern Jin imperial power was incomplete, and the power of the great clans was constrained by one another. The regime lasted not because there was no contention, but because no side could easily turn contention into monopoly."],
      ["王導與王敦同出琅琊王氏，卻代表了兩種截然不同的政治實踐。王敦依靠軍事力量控制長江中游，王導則在建康協助司馬睿建立朝廷，協調南渡北方士族與江東地方勢力之間的關係。西晉末年，北方戰亂使大量士族南遷，但他們來到江南之後，並不會自然獲得當地社會的承認。司馬睿既缺少足夠的獨立軍事力量，也缺乏深厚的江東根基，必須借助王導的人脈與政治聲望。",
       "Wang Dao and Wang Dun came from the same Langya Wang clan yet represented two sharply different political practices. Wang Dun relied on military force to control the middle Yangtze, while Wang Dao helped Sima Rui build a court in Jiankang and coordinated relations between the northern gentry who had moved south and the local powers of Jiangdong. At the end of Western Jin, war in the north sent many clans south, but on reaching Jiangnan they did not naturally win recognition from local society. Sima Rui had neither enough independent military force nor deep roots in Jiangdong, and had to draw on Wang Dao’s connections and political prestige."],
      ["王導的才能，正在於他知道新政權不能僅僅依靠南渡士族維持。他努力爭取江東士族的合作，使原本具有地域隔閡的政治群體逐漸接受同一個朝廷。這種工作缺少戰場上的戲劇性，卻是東晉能夠立足江南的重要條件。",
       "Wang Dao’s talent lay in knowing that the new regime could not be sustained by the southward-migrating clans alone. He worked to win the cooperation of the Jiangdong clans, so that political groups once divided by region gradually accepted one court. This work lacks the drama of the battlefield, yet it was an important condition for the Eastern Jin to gain a foothold in Jiangnan."],
      ["我過去更容易欣賞桓溫這樣的強人，而不是王導這樣的協調者。如今參與大型技術項目，反而逐漸理解了王導的難處。一個項目可以擁有明確的負責人，卻不意味著負責人真正控制所有資源。模型研發、應用工程、基礎設施與數據團隊各有自己的目標和優先級。即使每個團隊都足夠優秀，如果無法建立共同的行動安排，整體工作仍然可能停滯。",
       "I used to find it easier to admire strongmen like Huan Wen than coordinators like Wang Dao. Now, taking part in large technology projects, I have gradually come to understand Wang Dao’s difficulty. A project can have a clear owner without the owner truly controlling all the resources. Model research, application engineering, infrastructure and data teams each have their own goals and priorities. Even if every team is excellent enough, without a common plan of action the whole effort may still stall."],
      ["這種經驗當然不能直接解釋古代政治，但它改變了我閱讀王導的方式。我不再把妥協簡單視為缺乏決斷。有時，真正困難的不是讓某一方服從，而是讓彼此不願服從的各方相信，繼續合作比立即爭奪更加有利。",
       "This experience of course cannot directly explain ancient politics, but it changed how I read Wang Dao. I no longer see compromise simply as a lack of resolve. Sometimes the real difficulty is not making one side obey, but making parties unwilling to obey one another believe that continuing to cooperate is more advantageous than contending at once."],
      ["然而，王導的政治並不意味著門閥之間存在穩定的團結。王敦之亂結束後，東晉的權力格局不斷變化。蘇峻之亂發生於327至329年，建康再次遭受嚴重破壞。庾亮試圖加強朝廷控制，卻在處理蘇峻問題上出現嚴重失誤，最終引發叛亂。庾氏的政治影響力並未因此徹底消失，但這場危機暴露了東晉朝廷對地方軍事力量的依賴，也顯示了中央權威的脆弱。",
       "Yet Wang Dao’s politics did not mean that the great clans enjoyed stable unity. After Wang Dun’s rebellion, the Eastern Jin balance of power kept shifting. Su Jun’s rebellion took place in 327–329, and Jiankang was again badly damaged. Yu Liang tried to tighten the court’s control but made a serious mistake in handling Su Jun, and so provoked the revolt. The Yu clan’s political influence did not vanish entirely as a result, but the crisis exposed the Eastern Jin court’s dependence on regional military forces and showed the fragility of central authority."],
      ["田餘慶最令我佩服的地方，是他並不把這些事件孤立地解釋為某個人的野心或失誤。王敦之亂、蘇峻之亂、庾氏勢力的興起與衰落，實際上都與東晉政權內部的權力分配有關。所謂門閥政治，並不是幾個著名家族輪流擔任宰相，而是一套由皇室、士族、地域勢力與軍事資源共同維持的政治結構。",
       "What I most admire in Tian Yuqing is that he does not explain these events in isolation as one person’s ambition or error. Wang Dun’s rebellion, Su Jun’s rebellion, and the rise and decline of the Yu clan’s power all in fact relate to the distribution of power within the Eastern Jin regime. So-called aristocratic politics is not a few famous families taking turns as chancellor, but a political structure sustained jointly by the imperial house, the gentry clans, regional powers and military resources."],
      ["桓溫的經歷尤其能夠說明這種結構的限制。347年，他率軍攻滅成漢，控制益州；此後又多次北伐，在軍事上積累了極高的聲望。到了371年，他廢黜晉廢帝司馬奕，改立司馬昱為簡文帝，幾乎已經能夠決定皇位的歸屬。",
       "Huan Wen’s career especially illustrates the limits of this structure. In 347 he led an army to destroy Cheng-Han and took control of Yizhou; afterward he launched several northern expeditions and built up very high military prestige. By 371 he had deposed the Emperor Fei of Jin, Sima Yi, and installed Sima Yu as Emperor Jianwen, almost able to decide who held the throne."],
      ["但能夠廢立皇帝，並不意味著能夠順利成為皇帝。",
       "But being able to depose and install emperors did not mean being able to become emperor."],
      ["桓溫既需要維持軍事優勢，也必須面對其他士族的態度以及司馬氏皇統所代表的合法性。他晚年謀求進一步提高政治地位，卻始終沒有完成改朝換代。373年桓溫去世，桓氏雖仍保有相當影響力，東晉的權力格局卻開始發生新的變化。",
       "Huan Wen had both to maintain his military advantage and to face the attitudes of the other clans and the legitimacy represented by the Sima imperial line. In his later years he sought to raise his political standing further, but never completed a change of dynasty. When Huan Wen died in 373, the Huan clan still held considerable influence, but the Eastern Jin balance of power began to change anew."],
      ["我覺得這比單純講述桓溫的野心更有意思。我們常常以為權力可以不斷累積，直到某個人終於取得最高位置。但桓溫已經擁有軍事優勢和廢立皇帝的能力，卻仍然受到政治合法性與其他士族力量的約束。軍事權力能夠迫使皇帝讓步，卻無法自動創造一個被普遍接受的新王朝。",
       "I find this more interesting than simply narrating Huan Wen’s ambition. We often assume power can accumulate without limit until someone finally takes the highest place. But Huan Wen already had military superiority and the ability to depose and install emperors, and was still bound by political legitimacy and the power of other clans. Military power can force an emperor to yield, but cannot automatically create a new dynasty that is generally accepted."],
      ["謝安則是另一個值得重新認識的人物。383年淝水之戰，前秦苻堅率軍南下，東晉依靠謝玄等人統率的北府兵取得決定性勝利。後世喜歡講謝安在捷報傳來時依然從容下棋的故事，彷彿整個東晉的命運都濃縮在一位名士的鎮定之中。",
       "Xie An is another figure worth reconsidering. At the Battle of Fei River in 383, Fu Jian of Former Qin led his army south, and the Eastern Jin won a decisive victory thanks to the Beifu army commanded by Xie Xuan and others. Later generations like to tell how Xie An went on calmly playing chess when news of the victory arrived, as if the whole fate of the Eastern Jin were condensed into the composure of one famous scholar."],
      ["我也喜歡這個故事，但田餘慶讓我更加關心棋盤之外發生了什麼。北府兵的形成，與京口一帶的北方流民、軍事組織及謝氏對相關軍權的掌握密切相關。謝玄能夠率領這支軍隊，不只是因為個人軍事才能，也因為東晉長期的政治與人口變化，逐漸創造了這樣的軍事基礎。",
       "I like the story too, but Tian Yuqing made me care more about what happened beyond the chessboard. The formation of the Beifu army was closely tied to the northern refugees around Jingkou, to military organization, and to the Xie clan’s hold on the relevant military command. Xie Xuan could lead this army not only through personal military talent but because the Eastern Jin’s long political and demographic changes had gradually created such a military base."],
      ["淝水之戰因此不僅是一場以少勝多的著名戰役，也改變了東晉內部的力量關係。謝氏的政治聲望達到高峰，北府兵則成為此後東晉軍事政治中不可忽視的力量。到了東晉末年，劉裕正是憑藉北府兵系統崛起，最終在420年取代司馬氏建立劉宋。",
       "The Battle of Fei River was therefore not only a famous victory of the few over the many but also changed the balance of forces inside the Eastern Jin. The Xie clan’s political prestige reached its peak, and the Beifu army became a force that could not be ignored in Eastern Jin military politics. By the end of the dynasty, Liu Yu rose precisely on the strength of the Beifu system and finally, in 420, replaced the Simas and founded the Liu Song."],
      ["這使我尤其欣賞田餘慶對歷史連續性的處理。一場戰爭的意義，並不隨著戰役結束而終止。它可能改變軍隊的組織、將領的政治地位，以及此後幾十年的權力分配。我們習慣於用淝水之戰的勝利來證明謝安的卓越，卻容易忽略，這場勝利所依賴的軍事力量，最終也參與了東晉門閥政治的終結。",
       "This makes me especially appreciate how Tian Yuqing handles historical continuity. The meaning of a war does not end when the battle does. It may change the organization of armies, the political standing of generals, and the distribution of power for decades afterward. We are used to citing the victory at Fei River as proof of Xie An’s brilliance, but easily overlook that the military force on which this victory depended eventually took part in ending Eastern Jin aristocratic politics."],
      ["不過，我對田餘慶的研究方法也有一點保留。他善於從人物任職、家族關係與政治事件中辨認出門閥之間的利益結構，但當歷史被解釋得過於完整時，我偶爾會懷疑，我們是否高估了當事人對自身政治處境的認識。王導、桓溫與謝安當然關心家族利益，卻未必在每一次行動中都清楚地計算著整個門閥體系的平衡。歷史學家能夠在數百年之後看見某種結構，當時的人卻只能在有限的信息中作出選擇。",
       "Still, I have a slight reservation about Tian Yuqing’s method. He is good at identifying the structure of interests among the great clans from officeholding, family ties and political events, but when history is explained too completely, I occasionally wonder whether we overestimate the participants’ awareness of their own political situation. Wang Dao, Huan Wen and Xie An certainly cared about family interests, but did not necessarily calculate the balance of the whole clan system clearly in every action. A historian can see a structure centuries later; people at the time could only make choices on limited information."],
      ["更重要的是，我不願意因為東晉門閥政治具有某種精巧的權力平衡，就忽略它的社會排他性。「王與馬，共天下」中的「共」，從來不是天下人共同參與政治，而是少數高門家族與皇室分享統治權。琅琊王氏、潁川庾氏、譙國桓氏、陳郡謝氏之間的競爭固然複雜，但普通人並沒有平等進入這場競爭的資格。",
       "More important, I do not want the intricate balance of power in Eastern Jin aristocratic politics to make me overlook its social exclusivity. The “share” in “the Wangs and the Simas share the realm” was never all the people taking part in politics together, but a few great families and the imperial house sharing ruling power. The competition among the Langya Wang, Yingchuan Yu, Qiao-state Huan and Chen-commandery Xie clans was indeed complex, but ordinary people had no equal right to enter it."],
      ["這也使我重新理解魏晉風度。我喜歡王羲之的書法、謝安的從容，以及士人對於玄學、山水與個人性情的重視。但這種文化上的自由，與門第制度所提供的教育和社會地位密不可分。一個人能夠從容地談論精神獨立，部分原因可能正是他不必像普通人一樣，為獲得社會承認而從頭證明自己的資格。",
       "This also made me understand the Wei-Jin spirit anew. I like Wang Xizhi’s calligraphy, Xie An’s composure, and the scholars’ regard for metaphysical discourse, landscape and individual temperament. But this cultural freedom is inseparable from the education and social standing that the clan system provided. That a person can speak calmly of spiritual independence may be partly because he need not, like ordinary people, prove his qualifications from scratch to gain social recognition."],
      ["從史學寫作來看，《東晉門閥政治》最值得欣賞的，是田餘慶幾乎拒絕了傳統歷史敘事中最容易令人滿足的部分。他不願意僅僅講述王敦如何跋扈、桓溫如何雄心勃勃、謝安如何臨危不亂，而是不斷追問這些人物為什麼能夠處於各自的位置，他們的權力從何而來，又受到什麼限制。讀他的書，有時像在拆解一座古老建築：那些最華麗的裝飾被暫時移開，隱藏在背後的梁柱與支撐結構才逐漸顯露出來。",
       "As historical writing, what is most admirable about *Aristocratic Politics of the Eastern Jin* is that Tian Yuqing nearly refuses the most easily satisfying parts of traditional historical narrative. He is unwilling merely to tell how overbearing Wang Dun was, how ambitious Huan Wen was, how unruffled Xie An was in danger, and instead keeps asking why these figures could hold their positions, where their power came from, and what limited it. Reading him is sometimes like dismantling an old building: the most gorgeous decorations are set aside for a while, and the beams and supporting structure hidden behind them gradually come into view."],
      ["我合上書時，想到的仍然是322年王敦攻入建康的場景。一個已經能夠擊敗皇帝的人，卻仍然需要以皇帝的臣子自居。半個世紀後，桓溫甚至能夠廢立皇帝，卻同樣沒有完成篡位。直到東晉末年，隨著門閥結構衰落與軍事力量重新組合，劉裕才真正結束了司馬氏的統治。",
       "When I closed the book, what I still thought of was the scene of Wang Dun entering Jiankang in 322. A man who could already defeat the emperor still had to present himself as the emperor’s subject. Half a century later, Huan Wen could even depose and install emperors and likewise did not complete a usurpation. Only at the end of the Eastern Jin, as the clan structure declined and military forces recombined, did Liu Yu truly end Sima rule."],
      ["**東晉最有意思的歷史悖論，不是皇帝軟弱而士族強大，而是皇帝與士族都擁有對方無法輕易取代的東西。這個時代的政治，正是在彼此依賴、彼此防範，又始終無法徹底擺脫對方的關係中展開的。**",
       "**The most interesting historical paradox of the Eastern Jin is not that the emperor was weak and the clans strong, but that emperor and clans each possessed something the other could not easily replace. The politics of this age unfolded precisely in a relationship of mutual dependence and mutual wariness, from which neither could ever fully break free.**"]
    ]
  },
  {
    "date": "2025-07-22",
    "title": "We All Came to California, but Reached Two Americas",
    "slug": "two-americas",
    "category": "Novel",
    "book": {
      "cover": "grapes_of_wrath.jpg",
      "title": "The Grapes of Wrath",
      "author": "John Steinbeck",
      "language": "English",
      "country": "United States",
      "original": "English",
      "lines": [
        "Novel · English original, first published 1939",
        "Dispossessed Oklahoma farmers, the Joad family, travel Route 66 to California in search of work and find hunger and exploitation."
      ]
    },
    "place": "于加州蒙特雷\nMonterey, CA",
    "languages": ["Chinese", "English"],
    "prose": [
      ["2025年7月，我在蒙特雷读《愤怒的葡萄》。不远处就是萨利纳斯谷，斯坦贝克成长的地方。沿着公路向北，可以回到我工作的硅谷；向东，则是加州大片的农田。", "In July 2025 I read *The Grapes of Wrath* in Monterey. Not far away is the Salinas Valley, where Steinbeck grew up. Driving north along the highway leads back to Silicon Valley, where I work; east lie California’s vast farmlands."],
      ["我忽然想到一个有些不舒服的事实：**1930年代，乔德一家为了活下去而来到加州；将近九十年后，我为了过上更好的生活，也来到了这里。**", "I suddenly thought of an uncomfortable fact: **in the 1930s the Joads came to California to stay alive; nearly ninety years later, I came here too, to live a better life.**"],
      ["我们都相信加州意味着机会，但我们所拥有的选择，从一开始就完全不同。", "We both believed California meant opportunity, but the choices we had were entirely different from the start."],
      ["乔德一家离开俄克拉荷马，是因为土地已经无法让他们生存。银行收回土地，拖拉机推倒房屋，他们不是决定去寻找更好的生活，而是失去了留下来的可能。", "The Joads left Oklahoma because the land could no longer sustain them. The bank took the land and the tractors knocked down the houses; they did not decide to seek a better life, but lost the possibility of staying."],
      ["我却是主动离开的。", "I left of my own accord."],
      ["十多年前，我从中国来到西雅图留学。离开熟悉的国家，并不是因为那里已经容不下我，而是因为我相信美国的大学、职业市场与社会环境能够给我更多机会。我可以申请学校、选择专业、规划未来。即使充满不确定性，我仍然拥有一种乔德一家所缺少的自由：选择自己想去的地方。", "More than ten years ago I came from China to study in Seattle. I left a familiar country not because it no longer had room for me, but because I believed American universities, the job market and the social environment could give me more opportunity. I could apply to schools, choose a major and plan a future. Even amid uncertainty, I had a freedom the Joads lacked: choosing where I wanted to go."],
      ["他们带着一家人挤在破旧的卡车上，沿66号公路穿越荒漠。我带着行李，乘飞机跨越太平洋。", "They crowded their family onto a battered truck and crossed the desert on Route 66. I carried my luggage and flew across the Pacific."],
      ["他们担心汽车会不会在途中抛锚，担心老人能不能撑到加州，担心抵达后有没有工作。我担心的是英语能否适应课堂、成绩是否足够好、毕业后能不能获得理想的工作。", "They worried whether the car would break down on the way, whether the old could last to California, whether there would be work on arrival. I worried whether my English would suit the classroom, whether my grades were good enough, whether I could get the job I wanted after graduating."],
      ["这些担忧都是真实的，但它们并不处于同一种生存境地。", "These worries were all real, but they did not belong to the same condition of survival."],
      ["后来，我从西雅图来到加州，进入硅谷的科技产业。2025年的今天，我已经有了稳定的职业，也逐渐建立起自己的生活。", "Later I moved from Seattle to California and entered Silicon Valley’s tech industry. Today, in 2025, I have a stable career and have gradually built a life of my own."],
      ["如果把我的经历写成一篇美国梦的故事，似乎很容易找到一个令人满意的结局。", "If my experience were written as an American dream story, it would seem easy to find a satisfying ending."],
      ["但乔德一家的故事让我意识到，**美国梦最不公平的地方，也许不是每个人都无法实现它，而是有些人从一开始就比别人拥有更多实现它的条件。**", "But the Joads’ story made me realize that **the most unfair thing about the American dream may not be that not everyone can achieve it, but that some people start with far more of the conditions for achieving it than others.**"],
      ["我尤其在意小说中乔德一家抵达加州以后的失望。", "I care especially about the Joads’ disappointment after reaching California."],
      ["他们原以为这里遍地是工作，果园里有摘不完的水果，只要愿意劳动，就不会挨饿。但当成千上万的流民同时涌入，农场主便有了压低工资的能力。劳动者越是迫切需要工作，他们的劳动反而越不值钱。", "They thought work would be everywhere, orchards full of fruit that could never be picked all, and that anyone willing to labor would not go hungry. But when tens of thousands of migrants poured in at once, the growers gained the power to push wages down. The more desperately laborers needed work, the less their labor was worth."],
      ["这让我想到自己在硅谷的经历。", "This made me think of my own experience in Silicon Valley."],
      ["我进入的是一个争夺技术人才的市场。工程能力、教育背景与专业经验，可以转化成较高的薪酬和职业选择权。企业需要人才，劳动者便拥有一定的议价能力。", "I entered a market that competes for technical talent. Engineering ability, education and professional experience translate into higher pay and career options. Companies need talent, so workers have some bargaining power."],
      ["乔德一家却恰恰相反。他们同样愿意劳动，却因为随时有人可以替代，连维持生存的工资都难以争取。", "The Joads were the opposite. They were just as willing to work, but because anyone could replace them at any time, they could not even fight for a subsistence wage."],
      ["我过去很容易把这种差异理解为教育与技能的回报。但斯坦贝克让我开始追问：如果一个人的劳动对于社会同样不可缺少，为什么他所获得的尊严，却如此依赖自己在市场上是否稀缺？", "I used to read this difference easily as the return on education and skill. But Steinbeck made me ask: if a person’s labor is equally indispensable to society, why does the dignity he receives depend so much on whether he is scarce in the market?"],
      ["加州需要科技工程师，也需要采摘水果的人。但我们生活在同一片土地上，却可能从未真正进入彼此的世界。", "California needs software engineers, and it needs people who pick fruit. We live on the same land yet may never truly enter each other’s worlds."],
      ["在硅谷，我每天接触人工智能、工程技术和未来的种种可能。我们讨论效率、创新与生产力，仿佛技术进步本身就意味着社会正在改善。", "In Silicon Valley I deal every day with artificial intelligence, engineering and the many possibilities of the future. We discuss efficiency, innovation and productivity, as if technological progress itself meant society is improving."],
      ["可从蒙特雷向内陆走，经过萨利纳斯谷的农田，我又会想到斯坦贝克笔下那些为了几美分工资争夺工作的人。", "But heading inland from Monterey, past the farmland of the Salinas Valley, I think of Steinbeck’s people fighting for work at a few cents’ wage."],
      ["今天的农业生产当然早已不同于1930年代，但这个地理上的对照仍然让我不安：一个地方可以同时拥有世界上最先进的技术产业，以及依赖低工资劳动维持的农业体系。", "Agriculture today is of course very different from the 1930s, but this geographical contrast still troubles me: one place can have both the world’s most advanced technology industry and a farming system sustained by low-wage labor."],
      ["小说中最令我难忘的，是农产品在饥饿的人面前被毁掉的场景。", "What I remember most in the novel is the scene of produce being destroyed in front of hungry people."],
      ["土地并不贫瘠，人们也并非不愿劳动。问题恰恰在于，食物的存在并不意味着饥饿的人有权得到它。", "The land is not barren, and people are not unwilling to work. The problem is precisely that the existence of food does not mean the hungry have a right to it."],
      ["斯坦贝克在这里写出的不是自然灾害，而是一种由经济制度制造的荒诞：丰收可以与饥饿同时发生。", "What Steinbeck writes here is not a natural disaster but an absurdity produced by an economic system: abundance can coexist with hunger."],
      ["我也开始重新理解小说中那些银行与土地所有者。", "I also began to understand anew the banks and landowners in the novel."],
      ["过去作为留学生，我主要从劳动者的角度理解美国：通过教育获得技能，再通过工作改善生活。如今我也拥有房产与股票，开始从资产所有者的角度考虑收益、风险和长期规划。", "As a student I understood America mainly as a laborer: gaining skills through education, then improving my life through work. Now I also own property and stocks, and have begun to think about returns, risk and long-term planning as an owner of assets."],
      ["这使我无法轻易把小说中的经济关系划分成善良的穷人与邪恶的富人。许多看似合理的个人决策，汇集起来却可能产生极不合理的社会后果。", "This keeps me from easily dividing the novel’s economic relations into good poor and evil rich. Many individually reasonable decisions, added together, can produce deeply unreasonable social results."],
      ["但我觉得，斯坦贝克真正关心的并不是如何让每个人都成为成功的投资者，而是当市场不再需要某个人时，他是否还应该拥有生存的尊严。", "But what Steinbeck really cares about, I think, is not how to make everyone a successful investor, but whether a person still deserves the dignity of survival when the market no longer needs him."],
      ["小说后半部分，乔德一家的变化尤其令我感动。", "The Joads’ transformation in the second half of the novel moves me especially."],
      ["他们最初只想保住自己的家庭。但随着土地、住所与亲人相继失去，马·乔德开始把陌生人的苦难也视为自己的事情，汤姆则逐渐意识到，个人的困境无法仅靠个人奋斗解决。", "At first they only want to keep their own family together. But as land, shelter and relatives are lost one after another, Ma Joad begins to treat strangers’ suffering as her own concern, and Tom gradually realizes that individual hardship cannot be solved by individual effort alone."],
      ["这与我的美国经历形成了另一种对照。", "This forms another contrast with my American experience."],
      ["我来到美国，是为了获得更多个人选择；乔德一家来到加州，却逐渐发现，只有与别人联合，才可能重新获得选择。", "I came to America to gain more personal choices; the Joads came to California and gradually found that only by joining with others could they regain any choice."],
      ["我追求的是独立，他们最终发现的是相互依赖。", "I sought independence; what they finally found was interdependence."],
      ["而斯坦贝克似乎在提醒我，一个社会不能只依靠那些有能力独立生活的人来定义自由。", "And Steinbeck seems to remind me that a society cannot define freedom only by those able to live independently."],
      ["小说结尾，罗莎莎用乳汁喂养一个濒临饿死的陌生男人。这个场景令人不安，却也让整部小说突然超越了关于贫困、迁徙和经济制度的讨论。", "At the end of the novel, Rose of Sharon feeds a starving stranger with her own milk. The scene is unsettling, yet it suddenly lifts the whole novel beyond a discussion of poverty, migration and economic systems."],
      ["乔德一家失去了几乎所有财产，但仍然能够给予一个陌生人某种维持生命的东西。", "The Joads have lost nearly all their possessions, yet can still give a stranger something that keeps him alive."],
      ["在一个不断用价格衡量土地、劳动和人的价值的世界里，斯坦贝克最终选择了一次无法被市场定价的给予。", "In a world that keeps measuring land, labor and people by price, Steinbeck finally chooses a gift that no market can price."],
      ["我想，这也是为什么小说没有以乔德一家找到工作、买下土地、重新获得成功作为结局。", "I think this is also why the novel does not end with the Joads finding work, buying land and succeeding again."],
      ["因为那样的结局，只会让它成为另一篇美国梦的故事。", "Because such an ending would only make it another American dream story."],
      ["而斯坦贝克真正要追问的，是那些没有获得成功的人，是否仍然值得被这个社会接纳。", "What Steinbeck really asks is whether those who have not succeeded still deserve to be accepted by this society."],
      ["2025年夏天，我坐在蒙特雷的海边，想到自己从一个跨越太平洋的留学生，逐渐成为加州科技经济的受益者。", "In the summer of 2025, sitting by the sea in Monterey, I thought of how I went from an international student crossing the Pacific to a beneficiary of California’s tech economy."],
      ["我确实抵达了当年想象中的美国。", "I did reach the America I once imagined."],
      ["乔德一家也抵达了他们想象中的加州。", "The Joads, too, reached the California they imagined."],
      ["**但我的旅程，是从拥有选择走向拥有更多选择；他们的旅程，却是从失去选择开始，最终不得不重新寻找作为人的尊严。**", "**But my journey went from having choices to having more choices; theirs began with losing choice and ended in having to search anew for human dignity.**"],
      ["我们走向同一片土地，却经历了两个截然不同的美国。", "We walked toward the same land and lived through two entirely different Americas."],
      ["而我越来越觉得，斯坦贝克最了不起的地方，是他没有让那些抵达成功的人，替那些仍然流离失所的人讲述美国梦。", "And I increasingly feel that what is most remarkable about Steinbeck is that he does not let those who have arrived at success tell the American dream on behalf of those still displaced."]
    ]
  },
  {
    "date": "2024-10-09",
    "title": "Ten Visits, Never the Same Kyoto",
    "slug": "ten-visits-never-the-same-kyoto",
    "category": "History",
    "book": {
      "cover": "kyoto_hayashiya.jpg",
      "title": "京都 (Kyoto)",
      "author": "林屋辰三郎 Hayashiya Tatsusaburō",
      "language": "Japanese",
      "country": "Japan",
      "original": "Japanese",
      "lines": [
        "History · Japanese original, Heibonsha, Rekishi to Bunka vol. 1: Politics and Commerce",
        "Kyoto’s history from the founding of Heian-kyō in 794 through war, townspeople and trade, as the stage of changing politics, religion and city life."
      ]
    },
    "place": "于日本京都\nKyoto, Japan",
    "languages": ["Chinese", "English"],
    "prose": [
      ["我前前后后去过京都不下十次。",
       "I have been to Kyoto no fewer than ten times, on and off."],
      ["第一次是学生时代。那时的京都对我而言，主要是一座值得参观的古都。寺院、庭园、街道，以及那些在书本和照片里见过的日本传统文化，都带着一种陌生而迷人的距离感。",
       "The first time was in my student days. Then Kyoto was to me mainly an ancient capital worth visiting. The temples, gardens, streets, and the Japanese tradition I had seen in books and photographs all carried a strange and enchanting sense of distance."],
      ["第二次去京都，我已经开始工作。城市似乎没有发生太大的变化，但我看待它的方式已经不同。后来，我又分别带父母和妻子来到京都。再后来，我甚至在京都购买了一套投资房产。此后又陆陆续续去了好几次。",
       "By the second visit I had begun working. The city did not seem to have changed much, but the way I looked at it was different. Later I brought my parents, and then my wife, to Kyoto. Later still, I even bought an investment property there. Since then I have gone several more times, here and there."],
      ["如果仅仅翻看这些旅行留下的照片，或许很难看出其中有什么根本区别。但我知道，每一次到京都，我所关心的事情都在改变。学生时代的我更在意一座城市有什么值得观看；工作之后，我开始关心自己能够在这里获得怎样的生活体验；带着家人重访时，京都又成为我与他们共同经历的一段时间。等到在那里拥有房产，这座城市便不再只是旅行结束后可以轻易离开的地方。",
       "Looking only through the photographs these trips left, it might be hard to see any fundamental difference. But I know that each time I came to Kyoto, what I cared about was changing. As a student I cared more about what a city had worth looking at; after I started work, I began to care about what kind of life experience I could have here; when I returned with family, Kyoto became a stretch of time shared with them. Once I owned property there, the city was no longer a place one can simply leave when the trip ends."],
      ["读林屋辰三郎的《京都》，我突然觉得，这种变化或许正是理解一座历史城市的最好起点。",
       "Reading Hayashiya Tatsusaburō’s *Kyoto*, I suddenly felt that this very change may be the best starting point for understanding a historical city."],
      ["公元794年，桓武天皇迁都平安京。城市借鉴中国都城的规划理念，以朱雀大路为中轴，宫城位于北部，试图通过整齐的空间秩序体现律令国家的政治理想。然而，规划中的平安京很快便开始偏离最初的设计。右京逐渐衰落，城市活动向左京集中，寺院、贵族宅邸与市场也按照现实需要不断改变分布。",
       "In 794, Emperor Kanmu moved the capital to Heian-kyō. The city drew on the planning ideas of Chinese capitals, with Suzaku Avenue as its central axis and the palace in the north, trying to embody the political ideals of the *ritsuryō* state through an orderly spatial arrangement. Yet the planned Heian-kyō soon began to depart from its original design. The Right Capital gradually declined, urban activity concentrated in the Left Capital, and temples, aristocratic mansions and markets kept changing their distribution according to practical needs."],
      ["京都从来没有真正停留在它最初被设计出来的样子。",
       "Kyoto has never truly stayed as it was first designed."],
      ["这一点尤其吸引我。我们今天习惯于将京都视为日本传统的象征，却容易忘记，它最初本身就是一次大规模的制度创新。它借鉴中国大陆的城市规划与政治文化，后来却在这些外来形式中逐渐发展出独特的日本审美、文学与社会生活。",
       "This especially attracts me. Today we are used to seeing Kyoto as a symbol of Japanese tradition, and easily forget that at the outset it was itself a large-scale institutional innovation. It drew on the urban planning and political culture of the Chinese mainland, and later, within these foreign forms, gradually developed a distinctive Japanese aesthetic, literature and social life."],
      ["作为一个从中国到美国留学、工作，长期生活在不同文化之间的人，我对这种变化格外有感触。我越来越不相信文化身份是一件必须始终保持原样的东西。京都能够从外来制度中创造自己的传统，一个人也可以在不同社会之间不断吸收新的经验，而不必因此失去与过去的联系。",
       "As someone who went from China to study and work in the United States and has long lived between cultures, I feel this change especially keenly. I increasingly doubt that cultural identity is something that must always stay as it was. Kyoto could create its own tradition out of foreign institutions; a person too can keep absorbing new experience among different societies without thereby losing connection to the past."],
      ["但京都的历史远没有今天的旅游形象那么宁静。",
       "But Kyoto’s history is far less tranquil than its tourist image today."],
      ["平安时代的贵族文化创造了《源氏物语》、和歌与精致的宫廷审美，却也建立在藤原氏摄关政治和严格的社会等级之上。十二世纪末，镰仓幕府建立，京都不再独占全国政治权力。到了1467年，应仁之乱爆发，战争持续十余年，京都大片城区遭到破坏。那些今天看似象征永恒的寺院、街道与建筑，许多都经历过毁坏、重建与重新解释。",
       "The aristocratic culture of the Heian period produced *The Tale of Genji*, *waka* poetry and a refined court aesthetic, but it also rested on the regency politics of the Fujiwara and a rigid social hierarchy. At the end of the twelfth century the Kamakura shogunate was founded, and Kyoto no longer monopolized national political power. In 1467 the Ōnin War broke out and lasted more than ten years, destroying large parts of the city. Many of the temples, streets and buildings that today seem to symbolize permanence went through destruction, rebuilding and reinterpretation."],
      ["这让我想起自己多次重访京都时的一种感受。城市的某些景象似乎始终熟悉，但我与它之间的关系已经悄悄改变。学生时代的我、刚开始工作的我、带着父母旅行的我，以及后来在京都拥有房产的我，实际上是在不同的人生处境中面对同一个地方。",
       "This recalls a feeling I had on my repeated visits to Kyoto. Certain sights of the city seem always familiar, yet my relationship to it has quietly changed. The student me, the me who had just started work, the me traveling with my parents, and the me who later owned property in Kyoto were in fact facing the same place from different situations in life."],
      ["我尤其珍惜带父母与妻子去京都的经历。过去，旅行更多是我个人对于陌生世界的探索；当我开始带着家人重访一座自己熟悉的城市时，旅行便多了一层意义。我希望他们也能看见那些曾经吸引我的地方，却又逐渐发现，每个人都会形成自己的京都。",
       "I especially treasure taking my parents and my wife to Kyoto. In the past, travel was more my own exploration of an unfamiliar world; when I began bringing family back to a city I knew, travel gained another layer of meaning. I hoped they would see the places that once drew me, and gradually found that everyone forms their own Kyoto."],
      ["这使我重新理解文化传承。我们常常把传承想象成某种东西从上一代完整地交给下一代，但实际生活中，它更像是一种不断发生的重新认识。父母、伴侣与自己站在同一处历史景观前，看到的可能是完全不同的东西。城市并没有要求所有人接受同一种解释，它只是提供了一个能够容纳这些不同经验的空间。",
       "This made me understand cultural transmission anew. We often imagine transmission as something handed whole from one generation to the next, but in real life it is more like a recognition that keeps happening again. Parents, a partner and I may stand before the same historical landscape and see entirely different things. The city does not demand that everyone accept one interpretation; it simply offers a space that can hold these different experiences."],
      ["林屋辰三郎笔下的京都也是如此。它曾经是天皇与贵族的都城，后来成为武家政治、寺社势力与城市居民共同活动的舞台。随着中世社会的发展，商人、手工业者与町众逐渐参与文化创造。祇园祭不仅是一场宗教活动，也与城市居民的组织、财富和地方认同密切相关。",
       "The Kyoto in Hayashiya Tatsusaburō’s writing is likewise so. It was once the capital of emperor and aristocrats and later became the stage on which warrior government, temple and shrine powers, and city dwellers acted together. As medieval society developed, merchants, artisans and the *machishū* townspeople gradually took part in creating culture. The Gion Festival was not only a religious event but also closely tied to the organization, wealth and local identity of the townspeople."],
      ["京都的文化因此并不是由某个时代一次性创造完成的。不同阶层的人不断进入这座城市，也不断改变它的意义。",
       "Kyoto’s culture was therefore not created once and for all in some single age. People of different classes kept entering the city, and kept changing its meaning."],
      ["而我在京都购买投资房产的经历，则让我对这座城市产生了另一种更现实的认识。",
       "And my experience of buying an investment property in Kyoto gave me another, more practical understanding of the city."],
      ["过去，我主要从旅行者的角度欣赏京都。古老的街道、传统建筑与缓慢的生活节奏，都是值得享受的风景。但当我开始以投资者的身份看待这座城市时，便不得不考虑完全不同的问题：房产的长期价值、租赁需求、维护成本、当地经济，以及人口与旅游活动可能带来的变化。",
       "In the past I appreciated Kyoto mainly as a traveler. The old streets, traditional buildings and slow rhythm of life were scenery to enjoy. But when I began to look at the city as an investor, I had to consider entirely different questions: the property’s long-term value, rental demand, maintenance costs, the local economy, and the changes that population and tourism might bring."],
      ["这是一种很有意思的身份转变。我仍然喜欢京都的历史文化，却开始意识到，一座城市不能只靠游客的欣赏而存在。寺院需要维护，町屋需要修缮，居民需要工作和住房，传统工艺也必须面对现实的经济条件。",
       "This is an interesting change of identity. I still love Kyoto’s history and culture, but I began to realize that a city cannot exist on visitors’ admiration alone. Temples need upkeep, *machiya* townhouses need repair, residents need work and housing, and traditional crafts must face real economic conditions."],
      ["我曾经觉得，京都与硅谷代表着两种截然不同的价值观。硅谷不断追求创新、增长与效率，京都则似乎更加珍惜历史、传统与延续。但拥有京都房产之后，我反而不愿意再如此简单地区分它们。",
       "I once felt that Kyoto and Silicon Valley stood for two sharply different sets of values. Silicon Valley relentlessly pursues innovation, growth and efficiency, while Kyoto seems to prize history, tradition and continuity. But after owning property in Kyoto, I no longer want to divide them so simply."],
      ["京都的传统同样需要经济活动支撑。历史建筑的保护可能与现代开发发生冲突，旅游业创造收入，也可能改变居民的日常生活。所谓文化遗产并不是可以脱离市场与社会关系独立存在的东西。它需要持续投入，也必然面对利益分配的问题。",
       "Kyoto’s traditions likewise need economic activity to sustain them. The preservation of historic buildings may conflict with modern development, and tourism creates income but may also change residents’ daily lives. So-called cultural heritage cannot exist apart from markets and social relations. It requires continuous investment, and inevitably faces the question of how interests are distributed."],
      ["我在美国的职业与投资经历，使我习惯于从效率、风险和长期回报的角度作出判断。但京都让我意识到，经济价值与文化价值虽然经常相互影响，却不能完全等同。",
       "My professional and investing experience in the United States has made me used to judging in terms of efficiency, risk and long-term return. But Kyoto made me realize that economic value and cultural value, though they often affect each other, cannot be fully equated."],
      ["一套房产可以计算租金收益，一座寺院可以估算维护费用，一条传统商业街也可以衡量游客带来的收入。但这些数字并不能完整说明，为什么人们愿意反复来到这里，为什么某些建筑值得一代又一代人修复，或者为什么一场延续数百年的祭典能够成为城市身份的一部分。",
       "A property’s rental yield can be calculated, a temple’s maintenance cost estimated, and the income visitors bring to a traditional shopping street measured. But these numbers cannot fully explain why people are willing to come here again and again, why certain buildings are worth restoring generation after generation, or why a festival that has lasted for centuries can become part of a city’s identity."],
      ["不过，我也警惕自己对京都的浪漫化。拥有投资房产，并不意味着我真正理解了京都居民的日常生活。我的工作与主要生活仍然在美国，我能够从外部欣赏京都的历史，并在经济条件允许时选择前往；而长期生活在京都的人，需要面对当地的就业、住房、人口变化与旅游压力。",
       "Still, I am wary of romanticizing Kyoto. Owning an investment property does not mean I truly understand the daily life of Kyoto’s residents. My work and main life are still in the United States; I can appreciate Kyoto’s history from outside and choose to go when means allow, while those who live in Kyoto long-term must face local employment, housing, demographic change and the pressure of tourism."],
      ["这种差别提醒我，旅行者眼中的文化价值，未必总与居民的现实利益一致。甚至作为投资者，我自己也已经成为这座城市经济关系的一部分，不再只是一个没有利益牵连的旁观者。",
       "This difference reminds me that the cultural value in a traveler’s eyes does not always match residents’ real interests. As an investor, I have myself become part of the city’s economic relations, no longer merely an onlooker with no stake."],
      ["这也是我欣赏林屋辰三郎历史视角的原因。他没有将京都仅仅写成由名胜古迹组成的文化景观，而是把城市放回政治权力、宗教组织、社会阶层与经济活动的变化之中。平安贵族、室町武士、町众与近现代市民，分别创造了不同的京都。今天被称为传统的东西，往往正是这些历史变化不断沉积的结果。",
       "This is also why I appreciate Hayashiya Tatsusaburō’s historical perspective. He does not write Kyoto merely as a cultural landscape of famous sites and monuments, but puts the city back into the changes of political power, religious organization, social classes and economic activity. The Heian aristocrats, Muromachi warriors, townspeople and modern citizens each created a different Kyoto. What is called tradition today is often the result of the continual sedimentation of these historical changes."],
      ["当然，以京都为中心理解日本历史，也可能产生某种文化上的偏见。京都长期被视为日本古典文化的代表，但日本的历史并不只有贵族文学、佛教寺院与传统工艺。江户的商业社会、地方农村以及其他区域的历史，同样构成了日本文化。京都的重要性不应使它成为衡量所有日本文化的唯一尺度。",
       "Of course, understanding Japanese history with Kyoto at its center may also produce a certain cultural bias. Kyoto has long been seen as representing Japanese classical culture, but Japanese history is not only aristocratic literature, Buddhist temples and traditional crafts. The commercial society of Edo, rural villages and the histories of other regions equally make up Japanese culture. Kyoto’s importance should not make it the sole yardstick for all Japanese culture."],
      ["读完这本书，我开始觉得，自己反复前往京都的经历，与这座城市的历史之间存在一种有趣的呼应。",
       "After finishing the book, I began to feel an interesting echo between my repeated trips to Kyoto and the city’s history."],
      ["平安京、贵族之都、战乱中的京都、町众的京都，以及今天的文化与旅游城市，并不是彼此完全不同的地方。它们在同一片土地上不断叠加，后来者总是在前人留下的空间中重新安排自己的生活。",
       "Heian-kyō, the aristocrats’ capital, Kyoto in the wars, the townspeople’s Kyoto, and today’s city of culture and tourism are not entirely different places. They keep piling up on the same land, and those who come later always rearrange their lives within the space the earlier ones left."],
      ["我的京都也是这样。",
       "My Kyoto is like that too."],
      ["学生时代的京都并没有因为我开始工作而消失；与父母、妻子共同旅行的记忆，也没有取代最初独自认识这座城市时的好奇。后来购买的房产，使我与京都建立了新的经济联系，却并没有消除它作为文化与情感空间的意义。每一次重访，都使过去的某一段经历重新浮现，又为这座城市增加了新的记忆。",
       "The Kyoto of my student days did not vanish because I started work; the memories of traveling with my parents and my wife did not replace the curiosity of first getting to know the city on my own. The property I bought later gave me a new economic tie to Kyoto but did not erase its meaning as a cultural and emotional space. Each return brings back a stretch of past experience and adds new memories to the city."],
      ["我不知道未来还会去京都多少次，也不知道自己与这座城市的关系还会发生怎样的变化。但我已经不再期待找到一个最真实、最原初的京都。",
       "I do not know how many more times I will go to Kyoto, or how my relationship with the city will change. But I no longer expect to find the most authentic, most original Kyoto."],
      ["**林屋辰三郎让我意识到，京都之所以值得反复造访，并不是因为它始终保持着同一种面貌，而是因为它容许不同时代的人，把各自的生活留在同一座城市里。对我而言，那些反复走过的街道，已经不只是日本历史的一部分，也逐渐成为我自己人生的年轮。**",
       "**Hayashiya Tatsusaburō made me realize that Kyoto is worth visiting again and again not because it always keeps one face, but because it lets people of different ages leave their lives in the same city. For me, the streets I have walked again and again are no longer only part of Japanese history; they have gradually become the growth rings of my own life.**"]
    ]
  }
];
