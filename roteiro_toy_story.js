async function enviarScript(scriptText){
	const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);
	main = document.querySelector("#main"),
	textarea = main.querySelector(`div[contenteditable="true"]`)
	
	if(!textarea) throw new Error("Não há uma conversa aberta")
	
	for(const line of lines){
		console.log(line)
	
		textarea.focus();
		document.execCommand('insertText', false, line);
		textarea.dispatchEvent(new Event('change', {bubbles: true}));
	
		setTimeout(() => {
			(main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click();
		}, 100);
		
		if(lines.indexOf(line) !== lines.length - 1) await new Promise(resolve => setTimeout(resolve, 250));
	}
	
	return lines.length;
}

Enviarscript(`
01 Sheriff Woody
[The Walt Disney Pictures logo plays, except the castle is in CGI, while the camera zooms out from its gate. When the logo completes, it zooms out until it fades into a kid's bedroom, with boxes made to look like buildings which are placed in different areas. A kid, Andy Davis, holds a Mr. Potato Head toy in front of one of them]
Andy (as One-Eyed Bart): Alright, everyone! This is a stick-up! Don't anybody move! Now empty that safe!
[Andy shakes a piggy bank (Hamm) and a few coins fall out]
Andy (as One-Eyed Bart): [chuckles] Money, money, money!
[Andy makes Potato Head (One-Eyed Bart] "kiss" the coins]
Andy (as Bo Peep): Stop it! Stop it, you mean old potato!
Andy (as One-Eyed Bart): Quiet, Bo Peep! Or your sheep get run over! [The sheep are on a toy car track Andy has set up in his room]
Andy (as Sheep): Help! Baa! Help us!
Andy (as Bo Peep): Oh, no! Not my sheep! Somebody do something!
[Then Andy picks up a cowboy doll named Woody and pulls a pull string in its back]
Woody Voice box: Reach for the sky.
Andy (as One-Eyed Bart): Oh, no! Sheriff Woody!
Andy: [as Woody] I'm here to stop you, One-Eyed Bart!
Andy (as One-Eyed Bart): [Andy pulls out his right eye] D'oh! How’d you know it was me?
Andy: [as Woody] Are you gonna come quietly?
Andy (as One-Eyed Bart): You can't touch me, sheriff! I've brought my attack dog, [puts Slinky Dog in front of Potato Head (One-Eyed Bart)] with a built in forcefield!
Andy: [as Woody] Well, I brought my dinosaur who eats forcefield dogs!
[He puts Rex down, making sound effects first as Rex then as Slinky whom he drags away]
Andy: Arr rawr rawr! Yipe, yipe-yipe-yipe!
Andy: [as Woody] You're goin’ to jail, Bart. Say goodbye to the wife and tater tots.
[Andy places Mr. Potato Head in his sister, Molly’s crib; she laughs and picks up Mr. Potato Head, and drools on him. His ear and arm fall near Woody]
ADVERTISEMENT

02 Opening Credits ("You've Got a Friend in Me")
[The title "Walt Disney Pictures Presents" appears on screen as Woody and Mr. Potato Head's arm and ear were on the ground]
Andy: You saved the day again, Woody.
[He pulls Woody's pull string]
Woody Voice box: You're my favorite deputy.
[The title "Toy Story" appears as "You've Got a Friend in Me" starts playing and singing by Randy Newman]
You've got a friend in me
You've got a friend in me
Andy: Come on, let's round up the cattle.
[Andy turns two boxes with cows drawn on them and uses a skipping rope as a lasso]
When the road looks rough ahead
And you're miles and miles, From your nice warm bed
[The title "A Pixar Production" appears as he then kicks a box out of his way]
Andy: Round ’em up, Cowboy.
[He puts Woody on RC and steers them into a box]
You just remember what your old pal said
Boy, you've got a friend in me
[The title "Executive Producers Edwin Catmull and Steve Jobs" appears on screen]
Andy: Yee-haw!
Yeah, you've got a friend in me
Andy: Hey, cowboy.
[The title "Supervising Technical Director William Reeves" appears when Woody is later seen riding on Andy's back]
Some other folks might be a little bit smarter than I am
Bigger and stronger, too
Andy: Come on, Woody!
[places him on the banister and he slides down it into his arms]
Maybe
But none of them will ever love you
The way I do
It's me and you, boy
And as the years go by...
[The title "Music by Randy Newman" appears on screen]
[Andy and Woody spin in a chair]
[The title "Songs Written & Performed by Randy Newman" appears on screen]
Andy: Whoa!
Our friendship will never die
You're gonna see it's our destiny
You've got a friend in me
[He sets Woody on a recliner and pulls the handle to launch him]
Andy: Alright!
Yeah, you've got a friend in me
Andy: Score!
You've got a friend in me
[He walks over to his mom]
Andy: Wow! Cool!
[The title "Original Story by John Lasseter, Andrew Stanton, Pete Docter, and Joe Ranft" appears as Woody is laying on the chair]
Mrs. Davis: [Hanging up a birthday banner] What do you think?
Andy: Oh, this looks great, Mom!
Mrs. Davis: [laughs] Okay, birthday boy.
Andy: We saw it at the store, I asked you for it!
[Andy is very excited about his special gift]
Mrs. Davis: One, two- Four. Yeah, I think that's gonna be enough.
Andy: Can we leave this up until we move?
Mrs. Davis: Well, sure. We can leave it up.
Andy: Yeah!
Mrs. Davis: Now go get Molly. Your friends are gonna be here any minute.
Andy: Okay. It's party time, Woody.
[The title "Screenplay by Joss Whedon, Andrew Stanton, Joel Cohen, and Alec Sokolow" appears on screen]
Andy: Yee-haw!
[He sets off upstairs]
Molly: [Squealing]
[The title "Produced by Ralph Guggenheim and Bonnie Arnold" appears on screen]
Andy: Howdy, little lady.
Molly: [Squealing]
Woody Voice box: Somebody's poisoned the waterhole.
Andy: [picks her up out of her crib] Come on, Molly. Oh, you're gettin’ heavy.
03 The Coast Is Clear
[The title "Directed by John Lasseter" appears]
Andy: See you later, Woody.
[He shuts the door behind him. Woody comes to life and sits up]
Woody: Pull my string, the birthday party's today? Okay, everybody. Coast is clear.
[Woody watches as various other toys in the room come to life, including Mr. Potato Head]
Mr. Potato Head: [puts his ear and arm back in their respective places] Ages 3 and up. It's on my box. Ages 3 and up. I'm not supposed to be babysitting Princess Drool.
[The toys bustle about whilst they walk and talk. Hamm the Piggy bank is putting his coins back into his slot. Mr Potato Head comes with his parts all mixed up]
Mr. Potato Head: Hey, Hamm. Look, I'm Picasso!
Hamm: I don't get it.
[he walks off]
Mr. Potato Head: You uncultured swine! What're you lookin' at, ya hockey puck?
[He walks off, leaving the hockey puck with arms and legs confused]
Woody: Hey, Sarge, have you seen Slinky?
Sarge: Sir! No, sir!
Woody: OK. Hey, thank you. At ease.
[He jumps down from the bed and looks around]
Woody: Hey, uh, Slinky?
[Slinky, a dog with a slink between his head and back appears, pushing a checker board from under the bed]
Slinky: Right here, Woody. I'm red this time.
Woody: No. Slink.....
Slinky: Oh, well, all right. You can be red if you want.
Woody: N-Not now, Slink. I got some bad news.
Slinky: Bad news?!
Woody: [holds Slinky's mouth shut] Shhh!
[The toys stop and look at Woody, and Slinky]
Woody: Just gather everyone up for a staff meeting and be happy.
Slinky: Got it.
Woody: Be happy.
Slinky: Ha, ha, ha, ha, ha.
Woody: Staff meeting, everybody! Snake, Robot, podium duty.
[Snake hides under the bed]
Robot: Hey!
[He reaches under the bed and brings Snake out]
[An Etch-a-Sketch walks past Woody who stops in a Western battle way]
Woody: Hey, Etch. Draw!
[They draw with Etch sketching a picture of a gun]
Woody: Oh! Got me again.
Woody: Etch, you've been workin’ on that draw. Fastest knobs in the West.
Slinky: Got a staff meeting you guys. Come on. Let's go.
[The toys follow Slinky while Woody looks around]
Woody: Now, where is that... Oh. Hey, who moved my doodle pad way over here?
[Then Rex jumps up and roars at Woody]
Rex: Roaaaaar!
Woody: [unimpressed] How're you doin', Rex?
Rex: [stops roaring, calmly] Were ya scared? Tell me honestly.
Woody: I was close to being scared that time.
Rex: I'm going for fearsome here, but I just don't feel it. I think I'm just coming across off as annoying.
[Woody is grabbed by a crook and pulled towards Bo Peep]
Woody: [coughs] Ow! Oh, hi, Bo. Hi.
Bo Peep: I wanted to thank you, Woody, for saving my flock.
Woody: Oh, hey, it was, uh, nothin'.
Bo Peep: What do you say I get someone else to watch the sheep tonight?
Woody: [giggling sheepishly] Oh, yeah! [mutters]
Bo Peep: Remember, I'm just a couple of blocks away.
[She walks off, leaving Woody baffled]
Slinky: Come on, come on. Smaller toys up front.
[A bull dog egg toy lets four other egg toys out]
Slinky: Hey, Woody, come on.
ADVERTISEMENT

04 The Staff Meeting
[Woody walks over to the podium (a Playskool Tinkertoy container) and stands. Mike, a speaker with a microphone attached, clears his throat to get Woody's attention and held out his microphone]
Woody: Oh, thanks, Mike.
[He picks up the microphone. Feedback is heard]
Woody: OK..... Whoa, whoa. Step back.
Hamm: [Off-screen] For cryin’ out loud.
[Mike steps back until the feedback fades away]
Woody: Thank you.
[blows into the microphone]
Woody: Hello? Check. That better? Great. Everybody hear me? Up on the shelf, can you hear me? Great. OK. First item today: Uh... oh, yeah. Has everyone picked a moving buddy?
[The toys are surprised]
Rex: What?
Hamm: Moving buddy? You can't be serious.
Rex: I didn't know we were supposed to have one already.
Mr. Potato Head: [holding one of his arms] Do we have to hold hands?
[The toys laugh]
Woody: You guys think this is a big joke. We've only got one week left before the move. I don't want any toys left behind. A moving buddy. If you don't have one, get one!
Woody: All right, next. Uh, oh, yes. Tuesday night's plastic corrosion awareness meeting was, I think, a big success. And we wanna thank Mr. Spell for putting that on for us. Thank you, Mr. Spell.
Mr. Spell: You're…welcome.
Woody: OK. Uh, oh, yes. One, uh, minor note here.
[reads quietly]
Woody: Andy's birthday party has been moved to today.
[The toys are shocked]
Rex: What do you mean the party's today? His birthday's not until next week!
Hamm: What's goin' on down there? Is his mom losin' her marbles?
Woody: Well, obviously she wanted to have the party before the move.
[to the other toys]
Woody: I'm not worried. You shouldn't be worried.
Mr. Potato Head: Of course Woody ain't worried. He's been Andy's favorite since kindergarten.
Slinky: Hey, hey. Come on, Potato Head.
[Mr. Potato Head looks at Mr. Spell, pointing at Slinky's butt then pulls out his mouth and tap his butt with it whilst Mr. Spell laughs]
Slinky: If Woody says it's all right then, well, darn it, it's good enough for me. Woody has never steered us wrong before.
Woody: Come on, guys. Every Christmas and birthday, we go through this.
Rex: But what if Andy gets another dinosaur, a mean one? I just don't think I could take that kind of rejection.
Woody: Hey, listen, no one's getting replaced. This is Andy we're talking about. It doesn't matter how much we're played with.
[Woody gestures Mike to move to him since the microphone's wire is stretched too far]
Woody: What matters is that we're here for Andy when he needs us. That's what we're made for, right?
Hamm: Pardon me. I hate to break up the staff meeting but.... they're here! Birthday guests at three o'clock!
[Rex screams]
Woody: Stay calm, everyone!
[The toys run to the window passing Woody in a panic]
Woody: Hey!
[Mike even joins in the panic, taking the microphone out of Woody's hand]
Woody: Uh…meeting adjourned.
[The Toys gets to the window to see what's going on]
Hamm: Ho, boy! Will you take a look at all those presents?
Mr. Potato Head: I can't see a thing.
[He pick out his two eyes and lifts them above the toys to see Andy's friends bringing in presents]
Hamm: Yes, sir, we're next month's garage sale fodder for sure!
Rex: Any dinosaur shaped ones?!
Hamm: Oh, for crying out loud. They're all in boxes, you idiot.
Rex: They're getting bigger.
Slinky: Wait, there's a nice little one over there.
Child: Hi!
[The boy holding the present turns to the other kid, revealing his present to be really long and making the toys panic, All toys scream in the process]
Mr. Spell: Spell: trash can.
Rex: We're doomed!
Woody: All right! All right! If I send out the troops, will you all calm down?
Rex: Yes! Yes! We promise!
Woody: OK! Save your batteries.
Hamm: Very good, Woody. That's usin’ the old noodle.
ADVERTISEMENT

05 Recon Plan Charlie
[Woody jumps onto the bed and looks at Sarge]
Woody: Sergeant, establish a recon post downstairs. Code Red! You know what to do.
Sarge: Yes, sir!
[Sarge jumps down from the table and onto one of the drawers]
Sarge: All right, men. You heard him. Code Red! Repeat, we are at Code Red. Recon plan Charlie. Execute! Let's move! Move, move, move, move!
[The Green Army Men jump from the bucket and head out the door, carrying some rope and a baby monitor with them. Sarge looks over the landing with his binoculars to see Andy and his friends heading for the living room to begin opening presents and his mom heading to the kitchen]
Mrs. Davis: OK, come on, kids. Everyone in the living room. It's almost time for the presents.
[Sarge motions two parachuters to jump and open the parachutes to glide down to the floor. They look around the hall to make sure no one is around and signals for the rope to be lowered down and the rest of the Army Men slide down the rope to the floor. The toys move over to the lamp table where Woody is setting up the monitor]
Hamm: All right, gangway, gangway.
Woody: And this is how we find out what is in those presents.
[The Army Men walk across the hall when they heard Andy's mom coming]
Mrs. Davis: OK, who's hungry?
[Sarge and his men all froze]
Mrs. Davis: Here come the chips. I've got Cool Ranch and barbecue!
[She comes out of the kitchen and steps on one of the Green Army Men crushing him with her foot]
Mrs. Davis: Ow! What in the world..... Oh! I thought I told him to pick these up.
[She kicks them away with her foot and moves on.]
[cut back to Andy’s room]
Rex: Shouldn't they be there by now? What's taking them so long?
Woody: Hey, these guys are professionals. They're the best. Come on! They're not lyin’ down on the job.
[The Army Men are lying on the floor. Sarge stands up and motion his soldiers to move to the plant pot for safety. Sarge heard some moaning and turn to see one of his soldiers is crushed from being stepped on and was moving limply across the floor]
Soldier: G-G-Go on without me! J-Just go!
Sarge: A good soldier never leaves a man behind.
[He motions to his soldiers on the landing and they lower the baby monitor to the ground and they carry it to the flower pot. A ball rolls towards them so they move fast and climbs into the pot just as the ball rolled by, followed by the boys and Andy's Mom]
Mrs. Davis: OK, everybody, come on.
[The soldiers set the baby monitor up while a medic tends to the wounded solider and gives a thumb's up to Sarge who peers under the leaves and look through his binoculars to see the presents]
Mrs. Davis: Everybody settle down. Now, kids. Everybody..... You sit in a circle. No, Andy. Andy, you sit in the middle there. Good. And..... Which present are you gonna open first?
Boy: Mine!
[Sarge looks at the presents with his binoculars]
Sarge: There they are.
[Upstairs in Andy's room, the toys hear Sarge's voice on the Baby Monitor]
Sarge: Come in, Mother Bird. This is Alpha Bravo.
Woody: This is it! This is it! Quiet, quiet!
Sarge: Come in, Mother Bird. All right, Andy's opening the first present now.
Mr. Potato Head: Mrs. Potato Head! Mrs. Potato Head! Mrs. Potato Head!
[Rex and Hamm look at him, confused]
Mr. Potato Head: Hey, I can dream, can't I?
Sarge: The bow's coming off. He's ripping the wrapping paper. It's a.... It's..... It's a...... a lunch box. We've got a lunch box here.
Woody: A lunch box?
Mr. Potato Head: Lunch box?
Slinky: For lunch. [laughs]
Sarge: OK, second present. It appears to be..... OK, it's bed sheets.
Mr. Potato Head: Who invited that kid?
[Sarge watches as Mrs. Davis picks up the presents one by one until there's only one left]
Mrs. Davis: Oh! Only one left.
Sarge: OK, we're on the last present now.
Woody: Last present!
Sarge: It's a big one. It's a.... It's a board game! Repeat, Battleship!
Woody: Whew!
[The toys cheer]
Hamm: Hallelujah! Yeah! All right!
[Hamm accidentally bumps Mr. Potato Head, knocking some of his parts out]
Mr. Potato Head: Hey, watch it!
Hamm: Sorry, old spud head.
Sarge: Mission accomplished. Well done, men. Pack it up. We're goin' home.
[The men start to turn off the baby monitor]
Woody: So did I tell ya? Huh? Nothin’ to worry about.
Slinky: I knew you were right all along, Woody. Never doubted ya for a second.
[Just then Sarge sees Mrs. Davis pull out a surprise present from the closet]
Mrs. Davis: Wait a minute. Oh! What do we have here?
Sarge: Wait! Turn that thing back on!
[The baby monitor turns back and Sarge's voice is heard on it]
Sarge: Come in, Mother Bird! Come in, Mother Bird! Mom has pulled a surprise present from the closet. Andy's opening it. He's really excited about this one.
Andy: Mom, what is it?
Sarge: It's a huge package.
[A boy gets in the way of Sarge's view]
Sarge: Oh, get outta the.... One of the kids is in the way. I can't see.
[Mr. Potato Head puts his hand to his head and to his sides while Woody looks, anxiously]
Sarge: It's a......
Kids: Wow!
[Andy hold up his present over the plant. Upstairs, Rex is anxious to know what the present was]
Rex: It's a what? What is it?
[He shakes the lamp table and the baby monitor falls to the floor as the batteries pop out]
Rex: Oh, no!
Mr. Potato Head: Oh, ya big lizard! Now we'll never know what it is!
Hamm: Way to go, Rex! [Potato Head is putting the batteries in backwards]
Woody: No, Turn ‘em around! Turn ‘em around!
Hamm: He's puttin' 'em in backwa..... Here, you're puttin' 'em in backwards!
[He tries to move the batteries forward]
Woody: Plus is positive, minus is negative! Oh, let me!
[He jumps down and shove Hamm aside to put the batteries back in.]
[Downstairs, Andy and his friends rush down the hallway towards the stairs]
Andy: Let's go to my room, guys!
Sarge: Red alert! Red alert! Andy is coming upstairs!
[Woody puts the batteries back into the baby monitor]
Woody: [grunts] There!
Sarge: Juvenile intrusion! Repeat, resume your positions now!
Woody: Andy's comin', everybody! Back to your places! Hurry!
[The toys hurry into position]
Hamm: Get to your places! Get to your places!
Rex: [screaming]
Mr. Potato Head: Where's my ear? Who's seen my ear? Did you see my ear?
Rex: Out of my way! Here I come! Here I come!
[He bumps into Andy’s garbage pail with a teepee on it and falls over. As the boys run up the stairs, Lenny the binoculars walks to the shelves and Woody flops down on the bed just as Andy and his friends burst in]
Friend #1: Hey, look, its lasers light up.
Andy: Take that, Zurg!
Friend #2: Quick, make a space. This is where the spaceship lands.
[He pushes Woody from his spot and put the spaceship on it. Woody falls off the bed]
Andy: And he does it like that. And he does a karate chop action!
Mrs. Davis: Come on down, guys! It's time for games!
Kids: We've got prizes!
[They hurry out of the room and shut the door.]
ADVERTISEMENT

06 Buzz Lightyear, Space Ranger
[Rocky Gibraltar who has been slammed by the door, falls over. The closet door opens and the toys move towards the bed]
Mr. Potato Head: What is it?
Bo Peep: Can you see it?
Slinky: What the heck is up there?
Rex: Woody, who's up there with ya?
[Woody coughs as he crawls out from under the bed]
Slinky: Woody? What are you doin’ under the bed?
Woody: Uh, nothin'. Uh, nothin'. I'm sure Andy was just a little excited, that's all. Too much cake and ice cream, I suppose. It's just a mistake.
Mr. Potato Head: Well, that mistake is sitting in your spot, Woody. [chuckles]
Rex: [gasps] Have you been replaced?!
Woody: Hey, what did I tell you earlier? No one is getting replaced. Now, let's all be polite and give whatever it is up there a nice, big Andy's-room welcome.
[He climbs up to the top of the bed and there he sees a green, purple and white spaceman toy (Buzz Lightyear) standing and looking tall. He surveys the room, Woody ducks and gulps trying not to be spotted. Buzz looks around, breathing the air in and out]
Buzz Lightyear: Buzz Lightyear to Star Command. Come in, Star Command.
[There is no answer. He tries again]
Buzz Lightyear: Star Command, come in! Do you read me?
[Still no answer]
Buzz Lightyear: Why don't they answer?[gasps when he sees his torn up cardboard spaceship]
Buzz Lightyear: My ship!
[He runs over to his cardboard spaceship and looks at one of its wings]
Buzz Lightyear: Blast! This'll take weeks to repair.
[He opens up the compartment containing his wrist "communicator"]
Buzz Lightyear: Buzz Lightyear mission log, stardate 4-0-7-2. My ship has run off course en route to sector 12. I've crash-landed on a strange planet. The impact must've awoken me from hypersleep.
[He jumps up and down on the bed]
Buzz Lightyear: Terrain seems a bit unstable.
[He taps his "communicator"]
Buzz Lightyear: No readout yet if the air is breathable. And there seems to be no sign of intelligent life anywhere.
[Woody pops up in front of him]
Woody: Hello!
Buzz Lightyear: [karate yells]
Woody: [screams] Whoa! H-hey! Whoa, whoa, whoa, whoa, whoa! Did I frighten you? Didn't mean to.
[Buzz aim his "laser" at him]
Woody: Sorry. Howdy. My name is Woody. And this is Andy's room. That's all I wanted to say. And also, there has been a bit of a mix up. This is my spot, see, the bed here.
[Buzz spots Woody's badge on his coat that said Sheriff and turns off his laser]
Buzz Lightyear: Local law enforcement. It's about time you got here. I'm Buzz Lightyear, Space Ranger, Universe Protection Unit. My ship has crash-landed here by mistake.
Woody: Yes, it is a mistake because, you see, the bed here is my spot.
Buzz Lightyear: [not listening] I need to repair my turbo boosters. Do you people still use fossil fuel or have you discovered crystallic fusion?
Woody: Well, let's see. We've got double-A's.
Buzz Lightyear: [seeing something and gasps] Watch yourself!
[He pins Woody down and aims his "laser"]
Buzz Lightyear: Halt! Who goes there?!
Rex: Don't shoot! It's okay. Friends.
Buzz Lightyear: Do you know these lifeforms?
Woody: Yes! [spits] They're Andy's toys.
Buzz Lightyear: All right, everyone, you're clear to come up.
[The toys climb onto the bed]
Buzz Lightyear: I am Buzz Lightyear. I come in peace.
Rex: [shaking Buzz's hand] Oh, I'm so glad you're not a dinosaur.
Buzz Lightyear: Wh-why, thank you! Now, thank you all for your kind welcome.
Rex: Say, what's that button do?
Buzz Lightyear: I'II show you.
[He presses the button]
Buzz Voice box: Buzz Lightyear to the rescue!
Toys: Oh!
Slinky: Hey, Woody's got somethin’ like that. His is a pull string. Only it's....
Mr. Potato Head: Only it sounds like a car rain over it.
[Woody holds his pull string]
Hamm: Oh, yeah, but not like this one. This is a quality sound system. Probably all copper wiring, huh? So, uh, where you from? Singapore? Hong Kong?
Buzz Lightyear: Well, no. Actually, I-I'm stationed up in the Gamma Quadrant of Sector 4.
[As Buzz talks, Woody rolls his eyes and looks at the back of the box and reads the description in the speech bubble]
Buzz Lightyear: As a member of the elite Universe Protection Unit of the Space Ranger Corps, I protect the galaxy from the threat of invasion from the evil Emperor Zurg, sworn enemy of the Galactic Alliance.
Mr. Potato Head: Oh, really? I'm from Playskool.
Rex: And I'm from Mattel. Well, I'm not really from Mattel. I'm actually from a smaller company that was purchased in a leverage buyout.
Woody: You'd think they'd never seen a new toy before.
Bo Peep: Well, sure. Look at him! He's got more gadgets on him than a Swiss Army knife.
[Slinky presses Buzz's "laser"]
Buzz Lightyear: Ah, ah, ah, ah! Please be careful. You don't wanna be in the way when my laser goes off.
Mr. Potato Head: Hey, a laser! How come you don't have a laser, Woody?
Woody: It's not a laser! It's a.... It's a little light bulb that blinks.
Hamm: What's with him?
Mr. Potato Head: Laser envy.
Woody: All right, that's enough! Look, we're all very impressed with Andy's new toy.
Buzz Lightyear: Toy?
Woody: T-O-Y. Toy.
Buzz Lightyear: Excuse me, but I-I think the word you're searching for is Space…Ranger.
Woody: The word I'm searching for I can't say because there's preschool toys present.
[gestures to the other toys]
Mr. Potato Head: Gettin' kinda tense, aren't ya?
Rex: Uh, Mr. Lightyear, uh, now, I'm curious. What does a space ranger actually do?
Woody: He's not a space ranger! He doesn't fight evil or, or shoot lasers or fly.
Buzz Lightyear: Excuse me!
[He presses a red button on his chest and wings pop out]
Toys: Ooh!
Hamm: Oh, impressive wingspan! Very good!
Woody: Oh, what? What? These are plastic. He can't fly!
Buzz Lightyear: They are a tellurium-carbonic alloy, and I CAN fly.
Woody: No, you can't.
Buzz Lightyear: [sighs] Yes, I can.
Woody: You can't.
Buzz Lightyear: [sternly] Can!
Woody: [pokes Buzz] Can't! Can't! Can't!
Buzz Lightyear: I tell you, I could fly around this room with my eyes closed!
Woody: OK, then, Mr. Light Beer, prove it.
Buzz Lightyear: All right, then, I will! Stand back, everyone!
[The toys step back. Woody shakes his head in disbelief as Buzz steps onto one of the bed posts. RC, Mr. Spell and the other toys look up at him as he closes his eyes.]
Buzz Lightyear: To infinity and beyond!
[He jumps off the post and bounces off a ball and lands on a car which rolls down the track we saw at the beginning of the movie, around the loop-de-loop and zooms off a jump. Buzz flies up into the air and gets caught on a mobile airplane hanging from the ceiling which activates and spins wildly around and around until he breaks free and lands on the bed in front of Woody]
Buzz Lightyear: Can!
Rex: Whoa! Oh, wow, you flew magnificently!
[Mr. Potato Head whistles]
Bo Peep: I found my moving buddy.
Buzz Lightyear: Thank you! Th-Thank you all! Thank you!
Woody: That wasn't flying! That was... falling with style.
Mr. Potato Head: Man, the dolls must really go for you. Can you teach me that?
Slinky: [laughing] Golly Bob-Howdy!
Woody: Oh, shut up!
Woody: You know, in a couple days, everything will be just the way it was. They'll see.
[He looks jealously at Buzz getting praise from the other toys]
Woody: They'll see.
ADVERTISEMENT

07 "Strange Things"
Woody: I'm still Andy's favorite toy.
[The song Strange Things plays and is sung by Randy Newman as Andy plays with Woody while bouncing up and down on his bed]
I was on top of the world, livin’ high
It was right in my pocket
I was livin’ the life
Things were just the way they should be
When from out of the sky like a bomb
Comes some little punk in a rocket
Now all of a sudden
Some strange things are happenin’ to me
[Andy jumps off, plays with Woody in the air then puts him down in front of a box with BANK written on it. He brings Buzz in and press the laser button and pretends to shoot Woody with it and pushes him over with his hand. He runs to his closet and changes into his space pajamas and wears a cardboard box helmet and space wings like Buzz and runs out of his room]
Andy: Buzz Lightyear to the rescue!
[Woody wakes up and is devastated by Andy pushing him over and he watches in shock as the posters change from cowboys to space man. The bedsheets on Andy's bed even change to space man with Buzz Lightyear on it]
Strange things are happenin’ to me
Strange things
Strange things are happenin’ to me
Ain't no doubt about it
[Rex is trying to roar but he can only make "ah" noises. Buzz lifts his head up and urges him and Rex lets out a big loud roar which blows Mr. Potato Head's parts off. Buzz shake Rex's hand in congratulations. Later, Woody meets up with Etch who has a picture of Buzz written on his screen. Woody looks over at Buzz who is combing a troll doll's hair with a comb. Angered, Woody lifts Etch up and shakes him up and down to get the picture off]
I had friends
I had lots of friends
Now all my friends are gone
And I'm doin’ the best I can to carry on
[All the toys are lifting up "weights" though some of them are struggling to lift them like Snake and Rex. Buzz is using Robot's treads as a treadmill]
I had power (power)
I was respected (respected)
But not anymore
And I've lost the love to the one whom I adored
[Mr. Potato Head tries to lift the weights but his arms come off and he falls over. Woody looks for Slinky to play checkers when he sees Slinky helping with moving Buzz's cardboard spaceship with Robot onto some cubes so that Buzz can fix it from underneath. Woody angrily kicks the checkerboard and one red piece bounces off the drawer and ends up in his mouth]
Let me tell you about the strange things are happenin’ to me
Strange things
Strange things are happenin’ to me
Ain't no doubt about it
[On Andy's bed, Buzz was scratching Slinky's chin, making his tail wag and hit Woody many times. Annoyed, Woody pushes Slinky's back off the bed, carrying Slinky with it. Andy then put his toys away in the toy chest, then he came to Woody and Buzz and look at them to decide which to take to bed. That night, Andy sleeps with Buzz whilst Woody watches sadly from the toy chest, thinking Andy doesn't love him anymore]
Strange things~
Strange things~
08 Woody Vs. Buzz
[Next morning, Woody opens the lid and looks from side to side then opens it]
Woody: [grunts] Finally!
[sighs while feeling his head to find his hat missing]
Woody: Hey, who's got my hat?
Mr. Shark: [pops up with Woody's hat on his head] Look, I'm Woody. Howdy, howdy, howdy.
Woody: [laughing sarcastically] Gimme that!
Buzz Lightyear: Say there, Lizard and Stretchy Dog, let me show you something. It looks as though I've been accepted into your culture. Your chief, Andy inscribed his name on me.
[He lifts his boot to show Andy's name written on it]
Rex and Slinky: Wow!
Rex: With permanent ink too!
[Woody shakes in anger]
Buzz Lightyear: Well, I must get back to repairing my ship.
[Woody watches this and lifts his boot up to look at Andy's name on it when Bo comes up beside him]
Bo Peep: Don't let it get to you, Woody.
Woody: Uh... let what? I don't, uh...... What do you mean? Who?
Bo Peep: I know Andy's excited about Buzz. But you know he'll always have a special place for you.
Mr. Potato Head: Yeah, like the attic.
[chuckling]
Woody: All right, that's it!
[With Buzz]
Buzz Lightyear: Hmm. Unidirectional bonding strip.
Robot: Mr. Lightyear wants more tape.
[Snake uses his mouth to get the end of the tape and pulls it. Buzz hums as he works underneath his ship on a skateboard when Woody pulls him out]
Woody: Listen, Light Snack, you stay away from Andy. He's mine, and no one is taking him away from me.
Buzz Lightyear: What are you talking about? [to Robot] Where's that bonding strip?
[He rolls underneath his ship but Woody pulls him back again]
Woody: And another thing: Stop with this spaceman thing! It's getting on my nerves!
Buzz Lightyear: Are you saying you wanna lodge a complaint with Star Command?
Woody: Oh-ho, okay! Ooh, well, so you wanna do it the hard way, huh?
Buzz Lightyear: Don't even think about it, cowboy.
Woody: Oh, yeah, tough guy?
[He opens his helmet and Buzz starts gasping and choking as he crotches down and holds Woody's leg to support himself. When he stops, he sniffs the air and realizes something]
Buzz Lightyear: The air isn't.... toxic. [To Woody] How dare you open a spaceman's helmet on an uncharted planet! My eyeballs could've been sucked from their sockets!
[he puts his helmet back on]
Woody: You actually think you're the Buzz Lightyear? [laughs] Oh, all this time I thought it was an act! Hey, guys, look! It's the real Buzz Lightyear!
Buzz Lightyear: You're mocking me, aren't you?
Woody: Oh, no, no. No, no, no, no, no. Buzz, look, an alien!
Buzz Lightyear: Where?!
[Woody laughs and falls over, with Buzz not amused until they hear a dog barking and Andy's next-door neighbor, Sid Phillips, shouting]
ADVERTISEMENT

09 Sid
Sid Phillips: Yes!
[cackles]
Slinky: Whoa!
[He ducks under the bed]
Woody: Uh-oh.
Slinky: It's Sid!
Sid: Don't move!
[The egg toys jump into each other in fright]
Rex: I thought he was at summer camp.
Hamm: They must've kicked him out early this year.
Rex: Oh, no, not Sid!
[They climb up to the window]
Sid: Incoming!
(throw stuff while the dog barks)
Mr. Potato Head: Who is it this time?
Woody: I... I can't..... I can't tell. Hey, where's Lenny?
Lenny: Right here, Woody.
Rex: Oh, no, I can't bear to watch one of these again.
[Woody uses Lenny to see what toy Sid is trying to take out]
Woody: Oh, no, it's a Combat Carl.
[Buzz joins them]
Buzz Lightyear: What's going on?
Woody: Nothing that concerns you spacemen, just us toys.
Buzz Lightyear: I'd better take a look anyway.
[He uses Lenny to look at Combat Carl]
Buzz Lightyear: Why is that soldier strapped to an explosive device?
Woody: That's why: Sid.
[Woody actually points Lenny at the dog]
Buzz Lightyear: Hmm, sure is a hairy fella.
Woody: (realizing his mistake of identifying Scud as Sid to Buzz) No, no, that's Scud, you idiot!
(moves Lenny up to Sid so that Buzz can see him properly)
Woody: That is Sid.
Sid: (cackles evilly)
Buzz Lightyear: You mean that happy child?
Mr. Potato Head: That ain't no happy child.
Rex: He tortures toys, just for fun!
[Sid throws a block at the soldier]
Buzz Lightyear: Well, then, we've got to do something.
[He climbs onto the windowsill]
Bo Peep: (gasps, putting her cane hook on Buzz's arm) What are you doing? Get down from there!
Buzz Lightyear: I'm gonna teach that boy a lesson.
Woody: Yeah, sure. You go ahead. Melt him with your scary laser.
[He presses Buzz's laser button and it starts beeping]
Buzz Lightyear: Be careful with that, it's extremely dangerous.
[Lenny saw Sid lighting a match and lighting the little dynamite strapped to Combat Carl]
Lenny: He's lighting it! He's lighting it! HIT THE DIRT!!
Bo Peep: (shrieks)
Buzz Lightyear: Look out!
[They all take cover as the dynamite explodes destroying the soldier. They soon are back on the windowsill]
Scud: (barks)
Sid: Yes! He's gone! He's history!
(laughs with triumph)
Buzz Lightyear: I could've stopped him.
Woody: Buzz, I would love to see you try.
(gesturing to Sid's yard)
Woody: Of course I'd love to see you as a crater.
ADVERTISEMENT

10 Who Will Andy Pick?
Bo Peep: The sooner we move, the better.
[The scene changes to evening. A FOR SALE sign and a SOLD sign stands outside Andy's house. In his room, Andy is playing with Woody and Buzz]
Andy: To infinity and beyond! (making flying and exploding noises)
[Mrs. Davis comes in]
Mrs. Davis: Oh, all this packing makes me hungry. What would you say to dinner at, uh, oh, Pizza Planet?
Andy: Pizza Planet?! Oh, cool!
[He drops Woody and Buzz and follows her out of the room. When they're gone, Woody and Buzz unfreeze with Woody pushing Buzz off him and brush himself when he heard them talking]
Mrs. Davis: Go wash your hands and I'll get Molly ready.
Andy: Can I bring some toys?
Mrs. Davis: You can bring one toy.
Andy: Just one?
Woody: One toy?
[He looks at Buzz and picked up a Magic 8 Ball]
Woody: Will Andy pick me?
[He shakes the Magic 8 Ball and a message appears, saying "Don't count on it."]
Woody: Don't count on it?!
(groans in anger)
[Mr. Potato Head and Hamm who are playing a game of cards down below, hear Woody groaning in frustration]
Woody: (yells)
[He throws the ball down and it rolls over the desk and falls behind it. The thud caught Woody's attention and he looks down to see the ball wedged at the bottom. He turns his attention to Buzz who is looking for some "tools" to fix his ship. Woody then sees RC asleep on top of some boxes and a funny grin comes to his face as he got an idea on how to get Andy's attention to him]
Woody: Buzz!! Oh, Buzz, Buzz Lightyear!! Buzz Lightyear, thank goodness! We've got trouble!
Buzz Lightyear: Trouble? Where?
Woody: (pointing to the place where the ball fell) Down there. Just down there. A helpless toy...it's...it's trapped, Buzz!
Buzz Lightyear: Then we have no time to lose!
[As Buzz runs to the spot, Woody tiptoed over to RC and grabs his remote whilst starting him up, opening his eyes in the progress]
Buzz Lightyear: I don't see anything.
Woody: Oh, he's there. Just, just keep looking!
[He sends RC towards Buzz at full throttle]
Buzz Lightyear: What kind of a toy...?
[Buzz sees RC coming, gasps and jumps out of the way just as RC hits the bulletin board. Mr. Potato Head gasps as the pushpins fall down and land around Buzz leaving him unharmed. Then the board falls on the globe and it rolls towards Buzz who runs from it. Woody watches in horror as Buzz runs from the globe but trips on some colored pencils and falls. He rolled over to the windowsill out of its way and the globe rolls past him and hit a table lamp which swung around. Woody ducked his head to avoid getting hit by the lamp but Buzz wasn't so lucky as it knocks him out the window. Buzz wilhelm screams like a man in pain sound effect as he flies out.]
Hamm, Mr. Potato Head, And Slinky: BUZZ!
[Rex screams]
Woody: Buzz!
[Buzz plummets down into some bushes beside the house]
Slinky: I don't see him in the driveway! I think he bounced into Sid's yard.
[Woody step back unnoticed]
Rex: Oh, Buzz!
[RC revs his engine to talk to the toys]
Rex: Hey everyone! RC's trying to say something! What is it, boy?
[RC revs his engine]
Mr. Potato Head: He's sayin' that this was no accident.
Toys: Huh?
Bo Peep: What do you mean?
Mr. Potato Head: I mean Humpty Dumpty was pushed...
Slinky: No!
Mr. Potato Head: By Woody!
[points in Woody's direction]
Toys: What?!
Woody: Wait a minute. You, you don't think I meant to knock Buzz out the window, do you Potato Head?
Mr. Potato Head: That's Mr. Potato Head to you, you back-stabbing murderer!
[Bo Peep Gasps]
Woody: Now, it was an accident! Guys, c'mon now, you...you gotta believe me.
Slinky: We believe you, Woody. (looking at Rex for support) Right, Rex?
Rex: Well, ye-- n-- I don't like confrontations.
[Sarge pops out of the bucket]
Sarge: Where's your honor, dirtbag? You're an absolute disgrace! YOU DON'T DESERVE TO -- HEY!!!!
[Woody puts the lid on the bucket, muting Sarge's voice]
Mr. Potato Head: You couldn't handle Buzz cuttin' in on your playtime, could ya Woody? Didn't want to face the fact that Buzz just might be Andy's new favorite toy, so you got rid of him! [Woody almost loses his balance at edge of the desk] Well, what if Andy starts playin' with me more, Woody, huh? You gonna knock me outta the window, too!? [Woody looks nervous]
Hamm: I don't think we should give him the chance.
[Then the lid opened and Sarge and his men jump out and jump onto Woody]
Sarge: There he is, men! Frag him! [Soldiers yelling]
Mr. Potato Head: Let's string him up by his pull string!
Hamm: I got dibs on his hat!
Bo Peep: Would you boys stop it?!
Hamm: Tackle him!
Woody: No, no, no, no! Wait! Wait! I can explain everything!
[Then as the toys were advancing on Woody, they heard Andy and his mom's voices from outside and quickly went back to their places while the toys ran to hide]
Mrs. Davis: Andy, come on!
Andy: Okay, Mom, be right down. I've got to get Buzz.
Sarge: Retreat!
[The Toys hid just as Andy enters his room and looks for Buzz]
Andy: Mom, do you know where Buzz is?
Mrs. Davis: No, I haven't seen him.
Mr. Potato Head: Psssst!
[Woody looks as Etch drew a hangman's noose while Mr. Potato Head pointed an accusing finger at him. Woody looks worried]
Mrs. Davis: Andy, I'm heading out the door.
Andy: But, Mom, I can't find him!
Mrs. Davis: Well, honey, just grab some other toy. Now come on!
Andy: (sighs) Okay.
[He grabs Woody and walks off to the car following him unnoticed]
ADVERTISEMENT

11 Buzz Hitches a Ride
Andy: I couldn't find my Buzz. I know I left him right there.
Mrs. Davis: Honey, I'm sure he's around. You'll find him.
[Buzz peaks out of the bushes and saw Andy holding Woody in his hand as he went to the car. Angered by being knocked out the window, Buzz runs to the car and jumps on the back bumper just as it moves out of the driveway.]
[A chain of red monkeys is being lowered down to find Buzz by Bo Peep's cane but it's short from the bushes]
Slinky: It's too short! We need more monkeys!
Rex: There aren't any more! That's the whole barrel.
[He drops the barrel and walks to the edge of the window to look out]
Rex: Buzz! The monkeys aren't working! We're formulating another plan! Stay calm! Oh, where could he be?
12 Lost at the Gas Station
[The scene changes to Dinoco gas station where Andy's car drives up to it and parks to a gas tank]
Andy: Can I pump the gas?
Andy's Mom: Sure! I'll even let you drive.
Andy: Yeah?
Andy's Mom: Yeah, when you're 16.
Andy: (sarcastic) Yuk, yuk, yuk. Funny, mom.
[Woody unfreezes]
Woody: (hearing the conversation but worried about what will happen if he returns without Buzz) Oh, great. How am I gonna convince those guys it was an accident?
[Then, Buzz appears on the sunroof above Woody and he spot him]
Woody: Buzz?
[Buzz drops in the car landing on a seat next to Woody as Woody gets up]
Woody: Buzz! You're alive! This is great! Oh, I'm saved! I'm saved! Andy'll find you here, he'll take us back to the room, and then you can tell everyone that this was all just a big mistake.
[He removes the fly from Buzz's helmet and wipes it while Buzz just glares at him]
Woody: Huh, right?
[Woody pants]
Woody: (weakly) Buddy?
Buzz Lightyear: I just want you to know that even though you tried to terminate me, revenge is not an idea we promote on my planet.
Woody: Oh, that's good.
Buzz Lightyear: (getting to Woody's face) But we're not on my planet, are we?
Woody: No.
[Buzz lunges at Woody and they fall off the car to the ground. They rolled underneath the car, fighting. Buzz kicks Woody to the tire]
Woody: Okay. Come on! You want a piece of me?
[Buzz punches Woody, making his face spin until he stops it. Woody lunges at Buzz, pinning him down, open his helmet and punches his face, making a squeaky noise with each punch. Buzz then closes his helmet on Woody's hand, making him cry out in pain]
Woody: Ow!
[He then punches Buzz's button many times, making it repeat the "Buzz Lightyear to the Rescue!" phrase until Buzz flips him over, put his foot on Woody's back while pulling his arms back which makes Woody yell in pain. Then they heard Andy and his mom coming to the car]
Mrs. Davis: Next stop...
Andy: Pizza Planet! Yeah!!!
[He gets in the car and it drives off, leaving Woody and Buzz behind]
Woody: (gasps) Andy!
[He watches as the car drives off into the distance. Woody runs after the car but is unable to keep up and stops]
Woody: Doesn't he realize that I'm not there?
(Woody gasps, realizing what this means)
Woody: I'm lost! Oh, I'm a lost toy!
[He sobs as he stands at the same spot for a while]
Buzz Lightyear: (opening his wrist communicator) Buzz Lightyear Mission Log. The local sheriff and I seem to be at a huge refueling station of some sort.
[Woody turns around angrily]
Woody: YOU!
[He runs towards Buzz but then they heard a tanker truck coming towards them. Buzz quickly runs out of the way but Woody flops down on the ground as the tanker rolls over and stops, a tire just above Woody nearly flattening him.]
[Woody unfreezes and crawls away from the tire before standing up and backing into Buzz]
Buzz Lightyear: (into wrist communicator) According to my navi-computer, the--
Woody: Shut up! Just shut up, you idiot!
Buzz Lightyear: Sheriff, this is no time to panic.
Woody: This is the perfect time to panic! I'm lost, Andy is gone! They're gonna move from their house in two days and it's all your fault!
Buzz Lightyear: My... My fault?! If you hadn't pushed me out of the window in the first place...!
Woody: Oh, yeah? Well, if you hadn't shown up in your stupid little cardboard spaceship and taken away everything that was important to me...!
Buzz Lightyear: Don't talk to me about importance! Because of you the security of this entire universe is in jeopardy!
Woody: WHAT?! What are you talking about?
Buzz Lightyear: Right now, poised at the edge of the galaxy, Emperor Zurg has been secretly building a weapon with the destructive capacity to annihilate an entire planet! I alone have information that reveals his weapon's only weakness. And you, my friend, are responsible for delaying my rendezvous with Star Command!
Woody: (furiously explodes) YOU... ARE.... A... TOY!!! You aren't the real Buzz Lightyear! You're an.... you're an action figure! You are a child's plaything!
Buzz Lightyear: You are a sad, strange little man, and you have my pity.
[turning around and walking away from Woody]
Buzz Lightyear: Farewell!
Woody: Oh, yeah? Well, good riddance, you loony! (walking off, muttering) Rendezvous with Star Command.
[A Pizza Planet truck pulls into the station. Woody sees it]
Pizza Deliverer: Hey, Gas Dude!
Attendant: You talking to me?
[Woody looks at the Pizza Planet logo on the side of the truck]
Woody: Pizza Planet?
[realizing it's a way to reunite with Andy]
Woody: Andy!
Pizza Deliverer: Yeah, man, can you help me? Do you know where Cutting Boulevard is?
Attendant: Just a moment...
[Woody is about to go to the truck but then realizes something]
Woody: Oh, no. I can't show my face in that room without Buzz. Buzz! Buzz, come back!
Buzz Lightyear: Go away!
Woody: No, Buzz, you've gotta come back! I...
[He saw that the truck has a rocket on the roof which gives him an idea]
Woody: I found a spaceship!
[Buzz stops and turns around]
Woody: It's a spaceship, Buzz!
[Buzz looks curious for a second]
Pizza Deliverer: Come on, man, hurry up! Um, like, the pizzas are getting cold here!
[The camera goes down to Buzz, Woody looking at the truck]
Buzz Lightyear: Now, you're sure this space freighter will return to its port of origin once it jettisons its food supply?
Woody: Uh-huh. And when we get there, we'll be able to find a way to transport you home.
Buzz Lightyear: Well then, let's climb aboard.
[runs towards the truck]
Woody: No, no, no, wait, Buzz, Buzz, let's get in the back. No one will see us there.
Buzz Lightyear: Negative. There are no restraining harnesses in the cargo area. We'll be much safer in the cockpit.
Woody: Yeah, but... Buzz! Buzz!
Pizza Deliverer: So that's two lefts, and then a right, huh?
Attendant: Yeah.
Pizza Deliverer: Okay, thanks for the directions.
[Buzz climbs up to the door window and jumps behind the pizza boxes so the driver won't see him]
Woody: Buzz!
[The truck starts up so Woody runs to the back of the truck. Woody saw Buzz strap his seat belt on]
Woody: It's much safer in the cockpit than the cargo bay. What an idiot!
[The driver hits the accelerator and the truck speeds forward, throwing Woody off guard and he hits the back of the cargo hold. The truck swerves to the left and Woody hit the side of it. As the truck rolls up a hill, a big box rolls toward him. Woody yells as the box smacks into him.]
13 Pizza Planet
[The truck soon arrives at Pizza Planet and stops. Buzz looks up to see a giant model of a rocket near the building and heard the P.A. speaking]
P.A.: Next shuttle lift-off scheduled for T-minus 30 minutes and counting.
[Buzz looks at the entrance to see two robotic guards near it]
Robot Guards: You are clear to enter. Welcome to Pizza Planet.
[They move their spears aside and the doors open to let some customers inside]
Female PA: The white zone is for eating pizza only. The white zone is for...
[Buzz goes to the back to check on Woody]
Buzz Lightyear: Sheriff. Sheriff?
[The trash falls down to reveal Woody all flattened]
Buzz Lightyear: There you are.
[Woody falls over on the trash]
Buzz Lightyear: Now the entrance is heavily guarded. We need a way to get inside.
[Woody gets up with a cup over his head, coughing]
Buzz Lightyear: Great idea, Woody. I like your thinking.
[Woody, a bit dazed, looks confused at what Buzz had said. Later, the robot guards let some customers in]
Robot Guards: You are clear to enter. Welcome to Pizza Planet.
[A cup and a burger box start to move towards the entrance]
Buzz Lightyear: Now! Quickly, Sheriff, the airlock is closing!
[They make it through just as the door closes.]
Female Worker: (P.A.) Jones, party of five: Your shuttle is now boarding at counter 12.
Boy: [running with his sister sibling; as Buzz & Woody drops down] Hey, Mom! Can we have some tokens?
[Buzz bumps into Woody]
Woody: Ow! Watch where you're going!
Buzz Lightyear: Sorry.
[Woody and Buzz run between video games and took off their disguises. They look in awe at the arcade games around them with kids playing on them]
Buzz Lightyear: What a spaceport! Good work, Woody!
[Woody looks around at the kids playing on arcade games until they heard Andy's voice from a game nearby]
Andy: Mom, can I play Black Hole? Please, please, please?
Woody: Andy!
Mrs. Davis: What's Black Hole?
Andy: Oh, it's so cool...
Buzz Lightyear: Now we need to find a ship that's headed for Sector 12.
Woody: Wait a minute! No, no, no! Buzz! This way! There's a special ship. I just saw it!
Buzz Lightyear: You mean it has hyperdrive?
Woody: Hyperactive hyperdrive, and astro... uh, turf.
[Woody watches Andy and his family as they move closer to them]
Woody: (tracking Andy and family) C'mon, c'mon, that's it...
Buzz Lightyear: Where is it? I don't see the --
[He then saw a claw game that looks like a rocket]
Buzz Lightyear: Spaceship!
Woody: Alright Buzz, get ready, and...
[Buzz runs off, unnoticed by Woody who has his eyes on Andy]
Woody: Okay, Buzz, when I say "go," we're gonna jump in the basket.
[He notices that Buzz is not beside him and saw him running towards the claw game]
Woody: Buzz!
[Buzz jumps through the prize door]
Woody: Dooh! No!
[Andy rounds the bend]
Andy: Hey, Mom, if I eat all of my pizza, can I have some alien slime?
Woody: This cannot be happening to me!
[He starts to walk but forced back to hide when a man walks by. Buzz climbs up the prize chute and jumps into the middle and found himself face to face with squeaky toy aliens.]
Aliens: A stranger! From the outside! Oooooooh...
Buzz Lightyear: Greetings! I am Buzz Lightyear. I come in peace.
Aliens: Tell us! What is it like outside?
[The aliens gathered around Buzz excitedly. Outside, Woody waited for some kids to run past then they run over to the claw game and went into the prize door and peeps over the partition wall]
P.A.: Before your space journey, re-energize yourself with a slice of pepperoni, now boarding at counter three.
Buzz Lightyear: This is an intergalactic emergency! I need to commandeer your vessel to Sector 12! Who's in charge here?
Aliens: The claaaaaaaaaw!
[They point to the claw above them]
Aliens: The claw is our master. The claw chooses who will go and who will stay.
Woody: This is ludicrous.
[Then he heard someone yelling behind them. He turns to see Sid bashing some games]
Sid: Hey, bozo, you got a brain in there? Ha-ha, take that!
[The machine beeps, indicating that it's over, making Sid angry and hits it with a mallet then walks over to the claw game]
Woody: Oh, no! Sid!
[He jumps on Buzz]
Woody: Get down!
[Sid brings out his coins and put them in the machine]
Buzz Lightyear: What's gotten into you, Sheriff? I was--
Woody: YOU are the one that decided to climb into this--
Aliens: Shhhhhh! The claw. It moves.
[The claw lowers down and grabs an alien which is on top of Buzz]
Aliens: I have been chosen! Farewell, my friends! I go on to a better place.
[He was moved towards Sid]
Sid: Gotcha!
[As he watched the alien drop, he saw Buzz amongst the other aliens]
Sid: A Buzz Lightyear?! No way!
[Woody spots a repair door and moves towards it and strains to open it. By the time he manages to open it, Sid lowers the claw towards Buzz and grabs him]
Sid: Yes!
Woody: (gasps) Buzz! No!
[He grabs Buzz's feet and drags him to the repair door]
Sid: (banging his fist on the glass) Hey!
[Woody tries to get Buzz to the door but the aliens push him back into the claw machine]
Aliens: He has been chosen! He must go!
Woody: Hey! What are you doing? Stop it! Stop it, you zealots!
Aliens: He must go! Do not fight the claw! Do not anger the claw! He has been chosen!
[Woody and Buzz get lifted up by the claw and it takes them to the prize door and drop them]
Sid: Alright! Double prizes!
[He takes them out of the prize section and look at his new prizes with evil delight]
Sid: Let's go home and...play. (laughs)
ADVERTISEMENT

14 Sid's House
[The scene changes to Sid approaching his house on his skateboard, humming to some rock music. Buzz peep out to see Andy's house next-door]
Buzz Lightyear: Sheriff, I can see your dwelling from here! You're almost home.
Alien: Nirvana is coming! The mystic portal awaits!
Woody: Will you be quiet? You guys don't get it, do you? Once we go into Sid's house, we won't be coming out.
[Sid opens the door and Scud snaps and barks at his bag]
Sid: Whoa, Scud! Hey, boy. Sit! Good boy!
[Scud sits down and growls]
Sid: Hey, I got something for you, boy.
Woody: (gasps) Freeze!
[Woody, Buzz and the alien freeze as Sid grabs the alien and put him on Scud's head]
Sid: Ready, set, now!
[Scud grabs the alien and starts to shake it back and forth in a blur. While growling at the same time Woody, and Buzz watch this with utter distraught and horror]
Sid: Hannah! Hey, Hannah!
[Hannah arrives with a doll in her hands]
Hannah: What?
Sid: Did I get my package in the mail?
Hannah: I don't know.
Sid: What do you mean you don't know?
Hannah: [Annoyed] I don't know.
Sid: Oh, no, Hannah!
Hannah: What?
Sid: Look! Janie! She's sick!
[He takes the doll from Hannah]
Hannah: No she's not!
[Sid runs upstairs]
Sid: I'll have to perform one of my... operations!
Hannah: No! Don't touch her! NO!
Woody: Not Sid's room! Not there...
Hannah: Sid! Give her back! Sid!
[as Sid slams the door on her]
Hannah: Sid!
[Sid toss his bag onto his bed]
Sid: Oh, no! We have a sick patient here, nurse! Prepare the OR, stat!
Hannah: Sid, give her back! Give her back now! I'm telling!
[Sid puts Janie in a vise]
Sid: Patient is prepped. No one's ever attempted a double bypass brain transplant before.
[He puts on a mask and pulls out a toy pterodactyl from a crate]
Sid: Now for the tricky part. Pliers!
Buzz Lightyear: I don't believe that man's ever been to medical school.
[Sid finishes doing his "medical" stuff]
Sid: (doing a nurse's voice) Doctor, you've done it! Hannah?
[He opens the door where Hannah is standing]
Sid: Janie's all better now.
[He shows her Janie doll which now has a pterodactyl head on it, making Hannah scream in terror]
Hannah: (screams) Mom! Mom!
Sid: She's lying! Whatever she says, it's not true!
[He goes out of the room shutting the door behind him]
[Woody and Buzz look around the room which is filled with heavy metal posters, discarded toy remains and power tools which made them shudder]
Woody: We are gonna die. I'm outta here!
[He jumps outta the bag and runs to the door. He tries to open the knob but it won't budge]
Woody: Locked.
(he jump down to the floor and look around)
Woody: There's gotta be another way out of here.
[He heard a rolling noise and turns to see a small yo-yo rolling and flop over. Woody pick up a pencil and look around for whoever's there. A shadow zoom past him and he freezes]
Woody: Uh, Buzz? W-W-Was that you?
[He heard a noise coming from Sid's bed. Woody picks up a torch and switch it on to shine it on a baby doll's head under the bed]
Woody: Hey! Hi, there, little fellah! Come out here. Do you know a way out of here?
[The baby doll head moves out of the bed, revealing to have a spider-like body made from pieces of an erector set]
Woody: (gasps)
[The baby head rises up taller, making Woody look horrified. He saw a fishing rod with legs, a jack-in-a-box with a monster paw glove inside, skateboard with a combat soldier's torso screwed to the front end (and others). A Jingle Joe uses his hand to turn off the torch, promoting Woody to jump onto Buzz and cling onto him in fear]
Woody: B-B-B-BUUUZZZZZZZ!!!!!!!!
[He watches as the mutant toys grab the Janie doll and the pterodactyl toy and moves them away]
Buzz Lightyear: They're cannibals.
[Woody and Buzz dive back into the bag and Buzz presses a button on his chest]
Buzz Lightyear: Mayday! Mayday! Come in, Star Command! Send reinforcements! Star Command, do you copy?
[He adjusts his laser and points it out of the bag]
Buzz Lightyear: I've set my laser from stun to kill.
Woody: (sarcastically) Oh, great, great! Yeah, and if anyone attacks us, we can blink 'em to death.
15 Back at Andy's
[At Andy's house, the other toys are looking for Buzz with a torch when they heard a rustle in the bushes and shine the light on it]
Rex: Hey, you guys! I think I've found him. Buzz! Is that you?!
[A cat yowls loudly and runs away from the house]
Rex: Whiskers! Will you get out of here?! You're interfering with the search and rescue.
[Then they heard the Davis's car pull up to the house, and Rex turns off the torch to prevent them seeing the light]
Slinky: (whispering) Look! They're home!
[The car pulls up and stops. Andy and his mom get out]
Andy: Mom, have you seen Woody?
Andy's Mom: Where was the last place you left him?
Andy: Right here in the van.
[The toys listened to their conversation]
Andy's Mom: Oh, I'm sure he's there. You're just not looking hard enough.
Andy: He's not here, Mom. Woody's gone.
Bo Peep: (gasps) Woody's gone?
Hamm: Well, what do you know? The weasel ran away.
Mr. Potato Head: Huh?! Huh?! I told you he was guilty!
[He and Hamm move away from the window]
Rex: Who would've thought he was capable of such atrocities?!
[As Rex follows Mr. Potato Head and Hamm, Slinky and Bo look at each other crestfallen at Woody's disappearance]
16 Playtime with Sid
Bo Peep: Oh, Slink, I hope he's okay.
[As the camera shifts to Sid's house, the scene changes to morning]
Sid: (as Interrogator) Oh, a survivor. Where's the rebel base? Talk!
[He slaps Woody to the ground and walks over to the window]
Sid: (as Interrogator) I can see your will is strong.
[He opens the blinds blocking the sun]
Sid: Well, we have ways of making you talk.
[He took out a magnifying glass and uses it to aim the sunlight on Woody's forehead, making it smolder]
Sid: (as Interrogator) Where are your rebel friends NOW? [sinister chuckle]
Sid's Mom: Sid, your Pop Tarts are ready.
Sid: Alright!
[He runs out of the room and drops the magnifying glass in the process. Woody unfreezes and feels the burning on his forehead]
Woody: (screaming)
[He runs to a bowl of half-eaten cereal (with milk) on the floor, and dunks his head in. Buzz runs over to Woody, pausing to remove two suction cup darts from his person before pulling Woody out of the bowl. Two colorful Froot-Loops stick to each of Woody's eyes like glasses]
Buzz Lightyear: Are you all right? I'm proud of you, Sheriff. A lesser man would've talked under such torture.
[Woody picks up a spoon and looks at the smolder in his reflection]
Woody: I sure hope this isn't permanent.
Buzz Lightyear: (checking his wrist communicator) Still no word from Star Command. We're not that far from the spaceport.
[Woody sees the door in the reflection of the spoon. It was open]
Woody: The door! It's open! We're free!!
Buzz Lightyear: Woody, we don't know what's out there!
Woody: I'll tell you wha... [screams]
[The mutant toys block the way and Woody ducks behind Buzz]
Woody: They're gonna eat us, Buzz!! Do something! Quick!
Buzz Lightyear: Shield your eyes!
[Buzz fires his laser at Babyface but it just flickers on his forehead which surprises and shocks Buzz, when the mutant toys are blocking the way]
Buzz Lightyear: It's not working! I recharged it before I left. It should be good for hours--
Woody: Oh, you idiot! You're a toy! Use your karate chop action!
[He presses a button on Buzz's back which makes his right arm move up and down as they advance around the mutant toys toward the door]
Woody: (to mutants) Get away! Hoo-cha! Hoo-cha!
Buzz Lightyear: Hey! Hey!! How are you doing that? Stop that!
Woody: Back! Back, you savages! Back!
Buzz Lightyear: Woody, stop it!
Woody: Sorry guys, but dinner's canceled!
[He drops Buzz and ran out into the hallway upstairs]
Woody: There's no place like home. There's no place like home. There's no place like home...
[He ran down the stairs but then stopped when he saw Scud sleeping on them. He crept back up the stairs slowly as he could. Buzz's hand grabs him over his mouth and pulls him back behind the wall]
Woody: (muffled gasp)
Buzz Lightyear: Another stunt like that, cowboy -- you're going to get us killed.
Woody: Don't tell me what to do!
Buzz Lightyear: Shhh!
[Buzz checks that Scud is still asleep then darts across the stairwell opening to the other end of the hallway. He motions for Woody to follow. Woody cowardly crawls across the open area behind him to Buzz. As Woody stands up, his pull string gets caught on the curls of the iron railing. The toys start to creep down the hallway, unaware that Woody's pull string has caught on the railing. Then Woody's pull string comes loose and his voice box starts up]
Woody's Voice Box: Yeeeehaaaw!! Giddy-up partner!... We got to get this wagon train a movin'!
[The noise from the voice box wakes Scud up and he follows it up the steps. Woody and Buzz look worried]
Buzz Lightyear: Split up!
[Buzz dives into a room while Woody jumps into a closet just as Scud reaches the top of the stairs. He heard the door slam and went over to sniff anything suspicious. Buzz skid to hide behind the door. Sensing his movement, Scud walks towards the door as Buzz stood back. Then as Scud moves curiously closer to Buzz, they heard snoring and look up to see Sid's father fast asleep on a La-Z-Boy recliner in front of the TV. Scud then backs out and head down the stairs.]
ADVERTISEMENT

17 The Buzz Lightyear Commercial
[Buzz was about to exit the room when he heard a sudden voice]
VO: Calling Buzz Lightyear. Come in Buzz Lightyear. This is Star Command. Buzz Lightyear! Do you read me?
[Buzz turn to see a commercial on TV to which his logo appears]
Buzz Lightyear: Star Command!
[He opens his wrist communicator and is about to reply when a child's voice interrupts him]
Child: Buzz Lightyear responding! Read you loud and clear!
[Buzz looks towards the TV and saw it shows two boys holding a Buzz Lightyear toy in a cardboard spaceship like his own]
VO: Buzz Lightyear, Planet Earth needs your help!
Boy 2: On the way!
Male Chorus: Buzz Lightyear!
[Buzz stares in disbelief as he watches the commercial]
VO 2 The world's greatest superhero! Now the world's greatest toy! Buzz has it all! Locking wrist communicator!
Boy: Calling Buzz Lightyear!
VO 2: Karate chop action!
KID #2: Wow!
[With every feature demonstrated on the TV, Buzz compares the same feature on himself]
VO 2: Pulsating laserlight!
KID #2: Total annihilation!
VO 2: Multi-phrase voice simulator!
TV Buzz's voice box: There's a secret mission in uncharted space.
[Buzz presses the same button on his chest and it makes the same phrase the TV Buzz made]
Buzz's Voice Box: There's a secret mission in uncharted space.
VO 2: And best of all...
(big "monster truck" voice)
VO 2: HIGH-PRESSURE-SPACE-WINGS!!
TV Buzz: To Infinity and Beyond!
[The words NOT A FLYING TOY appear at the bottom of the screen]
VO 3: (non-excited lawyer voice) Not a flying toy.
[Buzz slowly shakes his head in wide-eyed disbelief]
VO 2: Get your Buzz Lightyear action figure and save a galaxy near you!
Male Chorus: Buzz Lightyear!
[The image on the screen changes to a shot of hundreds of Buzzes in their boxes lining either side of a store aisle]
VO: Available at all Al's Toy Barn outlets in the tri-county area.
18 "I Will Go Sailing No More"
Sportscaster: And welcome back to the Point Richmond Bowling Championship.
[As the commercial ends, Buzz look stricken then opens his wrist communicator. On the underside, he saw three words that said MADE IN TAIWAN. He looks stunned at the truth that Woody was trying to tell him all along. The song I Will Go Sailing No More plays as Buzz walks sadly out of the room and down the hallway. As he passes the stairwell, he stops to look at an open window as a bird flies by it. Woody's voice echoes in his head]
Out among the stars I sail
Way beyond the moon
In my silver ship I sailed
To a dream that ended too soon
Now I know exactly who I am and what I'm here for
Woody's Voice: You are a toy! You can't fly!
[Buzz lowers his head in sadness for a moment before raising it with determination in his eyes. He slams his wrist communicator shut as if he's defying what the words say. He climbs up the railing and stands on top of it before opening his wings. He looks toward the window, determination in proving that he is able to fly and that he's really a space ranger]
And I will go sailing no more
But no, it can't be true
I could fly if I wanted to
Like a bird in the sky
If I believed I could fly
Why, I'd fly!
Buzz Lightyear: To infinity and beyond!
[He jumps off the railing and halfway towards the window and he began to fall down towards the stairs and bounce off them and landed on the floor. He sees that his arm has been come off from the impact and was lying next to him. He drops his head back in defeat, finally accepting that he's a toy. As the song ends, Hannah came along, looking for something]
Clearly, I will go sailing, no more...
19 Hannah's Tea Party
Hannah: Mom. Mom, have you seen my Sally doll?
[She steps on Buzz's wing and looks down to see him]
Sid's Mom: What, dear? What was that?
Hannah: Never mind!
[She looks at Buzz with a smile on her face.]
[Back upstairs, the doorknob to the closet jiggles. The door opens and Woody fell off the shelves and onto the floor. A bowling ball hit Woody on the head and rolls away]
Woody: (a bit woozy from the ball hit him) Buzz, the coast is clear.
(shakes his head to get the wooziness off and look around for Buzz) Buzz, where are you?
[Then they heard Buzz's voice box playing from Hannah's bedroom]
Buzz's Voice Box: There's a secret mission in uncharted space. Let's go.
[Woody creep up to the room with the Christmas lights around them]
Hannah: Really? That is so interesting.
[Woody peep into the room and see Hannah playing a tea party with Buzz and her dolls who are headless]
Hannah: Would you like some tea, Mrs. Nesbit?
Woody: (Gasps) (under his breath) Buzz.
Hannah: It's so nice you could join us on such late notice.
[Hannah has placed a tiny teapot in Buzz's severed arm and pours imaginary tea with it to which Woody noticed]
Woody: Oh, no.
Hannah: What a lovely hat, Mrs. Nesbit. It goes quite well with your head.
[Woody got an idea and clears his throat]
Woody: (in Sid's mother's voice) Hannah! Oh, Hannah!
[Hannah looks up, hearing Woody's voice, thinking it's her mom]
Hannah: Mom? (to her dolls) Please excuse me, ladies. I'II be right back.
[She walks out of her room]
Hannah: What is it, Mom? Mom, where are you?
[Woody bolt into her room and go to Buzz]
Woody: Buzz! Hey, Buzz! Are you okay?
[Buzz unfreezes and wails in a drunken despair]
Buzz Lightyear: (imitating Jean Shepherd from A Christmas Story) GONE! It's all go-o-one! All of it's gone. Bye-bye! Whoo-hoo! See ya!
[Woody look at his broken arm with curious looks]
Woody: What happened to you?
Buzz Lightyear: One minute you're defending the whole galaxy...
(pointing at other dolls)
Buzz Lightyear: ...and SUDDENLY you find yourself suckin' down Darjeeling with Marie Antoinette and her little sister.
[The headless dolls turn and wave at Woody]
Woody: I think you've had enough tea for today.
(helping Buzz up)
Woody: Let's get you out of here, Buzz.
Buzz Lightyear: Don't you get it?! You see the hat? I am Mrs. Nesbit!!
(hysterical laughter)
Woody: [Imitating Cher from Moonstruck] Snap out of it, Buzz!
[Woody open his helmet and uses his arm to slap Buzz in the face then politely closes it]
Buzz Lightyear: (sober) I'm sorry. You're right. I'm just a little depressed that's all. I can get through this.
[They walk out to the hallway. Then Buzz drops to his knees in despair]
Buzz Lightyear: Oh, I'm a sham!!
Woody: Shhhh! Quiet, Buzz!
Buzz Lightyear: Look at me! I can't even fly out of a window! But -- the hat looked good. Tell me the hat looked good! The apron is a bit much, it's not my color...
[Woody look at the window then to Sid's room. They can see Andy's house outside the window]
Woody: Out the window! Buzz, you're a genius.
[Woody pick up the Christmas lights and drag Buzz down the hallway to Sid's room]
Woody: Come on, this way!
Buzz Lightyear: Years of academy training wasted!
ADVERTISEMENT

20 Sid's Window to Andy's Window
[The scene changes to Andy's room where Mr. Potato Head and Hamm are playing with the Battleship game that Andy got for his birthday]
Mr. Potato Head: (chuckles) B3.
Hamm: (wearing his hat) Miss. G6.
Mr. Potato Head: Ohhh! You sunk it!
Hamm: Heh-heh.
Mr. Potato Head: Are you peeking?
Hamm: Oh, quit your whining and pay up.
[Mr. Potato Head reaches for his ear]
Hamm: No, no, not the ear. Gimme the nose. C'mon!
Mr. Potato Head: (pulling out his nose; nasally) How 'bout three out of five?
[Woody opens the window and calls out to Mr. Potato Head and Hamm]
Woody: Hey guys! Guys! Hey!
[They turn to see Woody waving to them from Sid's window across from them]
Mr. Potato Head: Son of a building block! It's Woody.
Hamm: They're in the psycho's bedroom!
Woody: Hi!
Hamm: (into Andy's bedroom) Everyone, it's Woody!
Bo Peep: Woody?
Rex: You're kidding?
Slinky: Woody!
Woody: We're gonna get outta here, Buzz. Buzz?
[He saw Buzz playing with his arm of divebombing a plane with crashing and exploding]
Rex: Hey, look!
Bo Peep: Woody!
Woody: Boy, am I glad to see you guys!
Slinky: I knew you'd come back, Woody!
Bo Peep: What are you doing over there?
Woody: It's a long story, Bo. I'll explain later. Here, catch this!
[He tosses one end of the Christmas lights towards Andy's window and Slinky catches it with his two front paws]
Slinky: I got it, Woody!
Rex: (overly excited) He got it, Woody!
Woody: Good going, Slink! Now, just, just tie it on to something.
Mr. Potato Head: Wait! Wait! I got a better idea! How about we DON'T?!
[He snatches the lights from Slinky]
Slinky: Hey!
Bo Peep: Potato Head.
Mr. Potato Head: Did you all take stupid pills this morning?! Have you forgotten what he did to Buzz? And now you want to let him back over here?
Woody: No, no, no! You got it all wrong, Potato Head. Yeah. Besides, Buzz is fine. Buzz is right here. He's with me.
Mr. Potato Head: You are a liar!
Woody: No, I'm not (to Buzz) Buzz, come over here and you just tell the nice toys that you're not dead.
[Buzz isn't listening. He's too busy peeling off the sticker off his wrist communicator, crumples it up and growls]
Woody: Just a sec. Buzz, Will you get up here and give us a hand?
[Buzz throws his broken arm up to them]
Woody: (insincerely) Ha ha. That's very funny, Buzz. (exploding) This is serious!!
Rex: Hey, Woody. Where'd ya go?
Mr. Potato Head: He's lying! Buzz ain't there.
[Woody who punches him playfully in the elbow as if to say "Good idea"]
Woody: (forced casualness) Oh, hi Buzz! Why don't you say "hello" to the guys over there?
[He make Buzz's arm move while hiding the end of it from the toys' sight]
Woody: (imitating Buzz's voice) Hi ya, fellas. To infinity and beyond!
Rex: Hey look! It's Buzz!
Woody: (shaking the arm's hand) Yeah, hey Buzz. Let's show the guys our new secret best-friends hand shake. Gimme five, man!
Hamm: (irritated) Something's screwy here.
Woody: So, you see? We're friends now, guys. Aren't we, Buzz? (as Buzz) You bet. Gimme a hug.
[Woody makes Buzz's arm grasp him for a hug]
Woody: Ha, ha, oh, I love you, too.
Slinky: See? It is Buzz. Now give back the lights, Potato Head.
Mr. Potato Head: Wait just a minute. What are you trying to pull?
Woody: Nothing.
[He shrugs, accidentally revealing Buzz's broken arm to the toys which makes them recoil in horror and Bo Peep shriek in fright. Woody realizes his mistake and tries to hide it, but it's too late. Rex put his hands to his mouth and turns away to barf]
Hamm: Oh, that is disgusting!
Mr. Potato Head: (raging furious) Murderer!!!
Woody: No! No, no, no, no!
Mr. Potato Head: You murdering dog!
Woody: No, it's not what you think, I swear!
Mr. Potato Head: Save it for the jury. I hope Sid pulls your voice-box out, ya creep!
[He let go of the lights, making them fall down]
Woody: No! No! Don't leave! Don't leave! You've gotta help us, please! You don't know what it's like over here!
Mr. Potato Head: Come on. Let's get out of here.
Hamm: Go back to your lives, citizens. Show's over.
[They, Bo and Rex leave the window except Slinky]
Woody: Come back! Slink! Slink, please! Please! Listen to me!
[Slinky just looks sad and pulls the blinds down to shut the blinds]
Woody: No! No! Come back! Slinky!
21 The Big One
[Thunder rumbles as dark clouds appear over head]
[As Woody slumps on the windowsill in defeat,]
[he heard some noises behind them. They turn to see the mutant toys converging around Buzz]
Woody: Buzz!
[They hurry off the table and over to the mutant toys]
Woody: Go away, you disgusting freaks!
[Babyface turns over and grabs Buzz's arm with his erector-set pinchers to which Woody is shielding himself and have a tug-o-war over it]
Woody: Alright back! Back, you cannibals!
[Woody loses his grip and falls back, hitting the wall. Buzz is swarmed by the mutant toys. Woody run over to them with anger]
Woody: He is still alive, and you're not gonna get him, you monsters!
[He furiously throws the mutant toys aside. Then as Buzz is revealed, he have his arm reattached to him]
Woody: Hey?! Hey, they fixed you!
[Woody move Buzz's arm to see if what he saw is true]
Woody: But -- but they're cannibals. We saw them eat those other toys.
[The mutant toys step back to reveal Janie and the Pterodactyl who have been repaired as well with tape around their repaired necks and heads. The mutant toys look innocently at Woody]
Woody: Uh...sorry. I...I thought that you were gonna... (laughs nervously) ...you know, eat my friend.
[The mutant toys immediately retreat to the dark shadows of Sid's room]
Woody: Hey! No, no, wait! Hey! What's wrong?
Sid's Mom: Sid?
[Woody look to the door where they heard Sid's voice]
Sid: Not now, Mom, I'm BUSY!
Woody: Sid!!!
[Woody tries to pick up the still depressed Buzz, but he just went limp]
Sid's mom: You left the door open!
Woody: Buzz! C'mon, get up! Use your legs!
Sid: Hannah left it open!
[He tried dragging Buzz to the table but the progress is very slow]
Woody: Fine. Let Sid trash you. But don't blame me.
[He leave Buzz sitting alone in the middle of the floor and hides under a milk crate just as Sid bursts in carrying a box]
Sid: It came! It finally came!
[He went over to his workbench and rip open the package]
Sid: (reverently) The big one.
[He pulls out a big rocket which has THE BIG ONE written on the side of it]
Sid: (reading the rocket label) "Extremely dangerous. Keep out of reach of children." COOL... (looks around) What am I gonna blow? Man...hey, where's that wimpy cowboy doll?
[He spots the milk crate on the floor and picks it up but Woody has hid himself on the underside of it. Sid steps on Buzz's laser, beeping it. He look down a Buzz]
Sid: Yes! I've always wanted to put a spaceman into orbit. Ha-ha.
[He straps Buzz to the rocket and put a toolbox on the milk crate, making Woody shock]
Sid: Oh, no...
[He goes to the window. Sullenly, he smacks his head against the window]
Sid: Aw, man!
[Woody breathes out with relief at this, Sid's face brightens up as he look at Bad Weather]
Sid: (as Newscaster) Sid Phillips reporting. Launch of the shuttle has been delayed due to adverse weather conditions at the launch site. Tomorrow's forecast...
[He smacks Buzz down on the desk and winds his alarm clock up]
Sid: Sunny. Ha-ha-ha. Sweet dreams.
22 Andy Misses Woody
[Back in his room, Andy is awake in bed]
Andy's Mom: I looked everywhere, honey, but all I could find was your hat.
Andy: (groggy) But what if we leave them behind?
Andy's Mom: Oh, don't worry, honey, I'm sure we'll find Woody and Buzz before we leave tomorrow.
[She kisses Andy and turns off the light. A box starts bouncing around]
Rex: (muffled) Aaaah! I need air!
[He pops out and spits out packing styrofoam peanuts]
Rex: (relieved) Aa-a-a-a-ah! (coughs)
Mr. Potato Head: Will you quit moving around?!
Rex: I'm sorry. It's just that I get so nervous before I travel.
Mr. Potato Head: (irritated) How did I get stuck with YOU as a moving buddy?
[He went back inside]
Rex: (following Potato Head) Everyone else was picked.
[Bo watches as Andy sleeps, clutching his cowboy hat]
Bo Peep: Oh, Woody, if only you could see how much Andy misses you.
23 "Buzz, I Can't Do This Without You"
[Thunder RUMBLES as rain pours down outside Sid's house. Sid is asleep and Woody is struggling to get out from under the crate]
Woody: Ps-s-s-s-t! Psst! Hey, Buzz!
[Buzz just sits there. Woody grab a stray washer and fling it at Buzz. It hits his helmet. Buzz looks up]
Woody: Hey! Get over here and see if you can get this tool box off me.
[Buzz looks away again]
Woody: Oh, come on, Buzz. I...Buzz, we can't do this without you. We need your help.
Buzz Lightyear: I can't help. I can't help anyone.
Woody: Why, sure you can, Buzz. You can get us out of here and then I'll get that rocket off you, and we'll make a break for Andy's house.
Buzz Lightyear: Andy's house. Sid's house. What's the difference?
Woody: Oh, Buzz, you've had a big fall. You must not be thinking clearly.
Buzz Lightyear: No, Woody, for the first time I am thinking clearly. (looking at himself) You were right all along. I'm not a Space Ranger. I'm just a toy. (opens up wrist communicator) A stupid little insignificant toy.
Woody: Woah hey. Being a toy is a lot better than being a, a Space Ranger.
Buzz Lightyear: Yeah, right.
Woody: No, it is. Look, over in that house is a kid who thinks you are the greatest, and it's not because you're a Space Ranger, pal, it's because you're a toy. You are his toy.
Buzz Lightyear: But why would Andy want me?
Woody: Why would Andy want you?! Look at you! You're a Buzz Lightyear. Any other toy would give up his moving parts just to be you. You've got wings, you glow in the dark, you talk, your helmet does that -- that whoosh thing -- you are a COOL toy. (depressed) As a matter of fact you're too cool. I mean -- I mean what chance does a toy like me have against a Buzz Lightyear action figure? All I can do is...
[He pull his pull-string]
Woody's Voice Box: There's a snake in my boots.
Woody: Why would Andy ever want to play with me, when he's got you?
[Buzz look up at Woody in surprise]
Woody: I'm the one that should be strapped to that rocket.
[He slumps dejectedly against the crate, turning his back to Buzz. Buzz thinks about what Woody just said, his eyes shifting in wonder. Raising an eye brow, he lifts his foot and look at Andy's name written on it, still visible through the scuff marks and dirt. As he runs his fingers through the sole, he understands what being a toy is all about; to being joy and happiness to a kid. He looks at Woody with determination in his eyes.]
[She gestures to Woody who is still looking depressed about not be able to compete with Buzz any more]
Woody: Listen, Buzz, forget about me. You should get outta here while you can.
[There's silence. Woody turn to see that Buzz is gone, Woody sadly sighs in defeat and bows his head, accepting his fate. Suddenly, there's a cluttering noise up above. He looks up to see Buzz on top of the milk crate, trying to push the toolbox off]
Woody: Buzz!! What are you doing? We thought you were --
Buzz Lightyear: Come on, Sheriff. There's a kid over in that house who needs us. Now let's get you out of this thing. (strains)
Woody: Yes, sir!
[They, Woody and Buzz began to push the toolbox and the milk crate but it's slow prove]
Woody: (strained) Come on, Buzz! We can do it!
[Then as they strain, Woody, and Buzz heard a rumble noise. They look out the window to see the moving van arriving outside Andy's house]
Buzz Lightyear: Woody! It's the moving van.
Woody: We've got to get out of here... NOW.
[Buzz braces himself between the toolbox and the wall. Using his legs, Buzz pushes the toolbox and it starts to move. Woody saw that with every shove Buzz gives to the tool chest, the milkcrate begins to edge out on the lip of the desk]
Woody: C'mon, Buzz.
[Finally there's a gap wide enough for Woody to jump through]
Woody: Alright!
[He drops down to the floor below]
Woody: Buzz! Hey! I'm out!
[Buzz didn't hear him and continues to push the toolbox (and milk crate) farther out]
Buzz Lightyear: (grunts) Almost there!
[Woody look up just in time to see the toolbox and the milk crate topple towards them]
Woody: (nervous laugh)
[The toolbox falls on Woody. Buzz look towards Sid who stirs]
Sid: (in his sleep) I wanna ride the pony...
[He remains asleep. Buzz sighs with relief and went over to the edge of the workbench and peers over to look down to see if woody are okay]
Buzz Lightyear: Woody? Are you alright?!
[Woody lifts the toolbox off him]
Woody: (punch-drunk) No, I'm fine. I'm OK.
[Then Sid's alarm clock rang, making Woody duck under the toolbox and Buzz freezes. The alarm clock fell off the desk and onto the floor with a crash. Sid sits up groggily for a second then his eyes widen, remembering his bad plan to blow Buzz up with the rocket]
Sid: Oh, yeah! Time for lift-off!
[He jumps out of bed, grabs Buzz and bolts out of his room]
Sid: To infinity and beyond! Whoo-hoo!
[Woody run towards the door and catches it just in time before it closes.]
[But as they open the door, Scud appears and runs towards them. Quickly, they shut the door on Scud]
Woody: Aaah! Back! Back! Down! Down!
Woody: (out of breath; to himself) Okay, what do I do? Come on Woody, think!
[He looks around and saw the mutant toys]
Woody: Guys!
ADVERTISEMENT

24 Woody Asks for Help
[The mutant toys retreat to hide from him]
Woody: No, no, no! Wait! Wait! Listen! Please! There's a good toy down there and he's -- he's going to be blown to bits in a few minutes all because of me. I've gotta save him! (pause) -- But I need your help.
[For a while, the mutants look at Woody and consider his proposal, but to Woody it seems like they're not responding. Woody dejectedly bows his head, until he sees Babyface timidly creeps out from under the bed]
Woody: Please. He's my friend. (Lets it sink in. He loses hope) He's the only one I've got.
[For a response, it would seem that no help will come, that is until Babyface crawls out and taps a code on the bedpost. The other mutant toys come out of hiding and come over to a relieved Woody]
Woody: (to Babyface) Thank you. (to the others) Okay. I think I know what to do. We're going to have to break a few rules, but if it works, it'll help everybody.
[The scene changes to Andy's now fully empty and former bedroom where the movers are moving the boxes of Andy's toys out of it. A forlorn Andy holds his cowboy hat and Buzz's cardboard spaceship in his hands and with a sad sigh, he walks out of the room, unaware that next door, Sid is carrying materials under his arm from his shed]
Sid: (as Astronaut) Houston to Mission Control. Come in, Control. Launch pad is being constructed! Heh-heh.
[He puts the stuff down next to Buzz who is still inanimate.]
25 "Wind the Frog"
[Outside Sid's door, Scud is planted, poised to strike anything that comes out. In the room, and the mutant toys are planning to rescue Buzz]
Woody: All right, listen up. I need Pump Boy here -- Ducky here. Legs?
[Legs, a fishing rod with doll's legs, step forward]
Woody: You're with Ducky. (to the others) RollerBob and I don't move till we get the signal. Clear?
[The mutant toys nodded in agreement]
Woody: OK. Let's move!
[The mutant toys split up. Scud barks, hearing the commotion. Legs and Ducky, Mark and Bucky open the face plate off a heating grate and run inside the duct. They went down the duct and found a intersection. Ducky saw the right tunnel and quacks to Legs, Mark and Bucky to follow him and they went down the right tunnel. Woody hops onto RollerBob, a skateboard with a soldier's upper torso tied to the front]
Woody: Wind the frog.
[A toy car with hands and feet winds up a frog with wheels instead of legs. Ducky, Legs, Mark and Bucky move towards a junction box in front of them. Hand-in-the-Box, a jack-in-the-box with a monster hand glove grabs the doorknob. Back in the rafters, Ducky and Legs lift the loose junction box which is attached to the porch light up into the rafters. Ducky stick his head out of the hole to see if the coast is clear. In the room, the other mutant toys are waiting for Ducky to give them the signal]
Woody: Wait for the signal.
[Ducky put Legs' hook onto his neck and Legs lower him down to the door. Ducky began swinging back and forth to reach the doorbell til with a big swing, he reaches the doorbell and rings it, thus signaling the other mutant toys and Woody]
Woody: Go!
[Hand-in-the-Box opens the door and the car with hands let go of the frog with wheels. It speeds out of the room and past Scud who began to chase it]
Woody: Alright, let's go. Now!
[RollerBob uses his arms to move his skateboard, Woody and the other mutant toys out of the room. Downstairs, Hannah approaches the door]
Hannah: I'm coming. I'm coming.
[She touches the doorknob. Bucky sees it and freezes just as Hannah opens the door. There's no one there. She didn't even see Ducky on the porch in front of her. Scud chases the frog downstairs. The frog races in between Hannah's legs and into Ducky's hands. Legs lifts Ducky and the frog out of the way just as Scud bursts through the door onto the porch, knocking Hannah over in the process]
Hannah: Scud!
Ducky: (quacks with laughter)
[He and Legs put the porch light back in place as Scud barks up at them, realizing that he's been duped. Hannah gets back up]
Hannah: Stupid dog!
[She slams the door in Scud's face and went down the hall. Woody, and the mutant toys flew down the stairs and through the kitchen towards a dog door in front of them]
Woody: Lean back!
[The mutants push back, causing RollerBob to do a wheelie and they fly through the dog door and catapult into the bushes.
26 "Play Nice!"
[Woody, and the mutant toys peeks out of the bushes to see Buzz still standing inanimate strapped to the launchpad. Sid is still in his toolshed, doing voices of Houston and an astronaut]
Sid: (AS ASTRONAUT) Uh, Mission Control...is the launchpad construction complete? (simulated static) Uh, Roger, rocket is now secured to guide wire. We are currently obtaining the...ignition sticks. Countdown will commence momentarily. Stand by --(simulated static)
[Legs, Ducky, Frog, Mark and Bucky slide into the yard from a drain pipe. They exchange a thumbs-up with Woody before hurrying to their positions]
Woody: Let's go.
[the mutant toys spread out to their positions]
Sid: Hey, Mom?! Where are the matches? Oh, oh, wait, here they are. Nevermind...
[Woody ran towards Buzz, who saw him]
Buzz Lightyear: (whispers) Woody?! Great! Help me out of this thing!
Woody: Shhh!
Buzz Lightyear: (Confused) What?
Woody: (whispers) It's OK. Everything's under control.
[He goes limp and falls to the ground, confusing Buzz]
Buzz Lightyear: Woody?! What are you doing?!
[Sid came out of his toolshed and Buzz freezes]
Sid: (AS ASTRONAUT) Houston, all systems are go. Requesting permission to launch --
(spotting Woody)
Sid: Hey! How'd you get out here?
[He picks Woody up and look at him for a moment]
Sid: Oh, well, you and I can have a cookout later. Ha-ha-ha...
[He puts Woody on a barbecue grill and put a match in his holster then turn back to Buzz to proceed with his plan to blow him up]
Sid: Houston, do we have permission to launch? -- (simulated static) Uh, Roger, permission granted. You are confirmed at T minus 10 seconds...
[The mutant toys scrambled to their hiding places as Sid light a match]
Sid: ...and counting. Ten! Nine! Eight! Seven! Six! Five! Four! Three! Two!... One!...
[He grins menacingly as he moves the match to the fuse, ready to light it when...]
Woody's Voice Box: Reach for the sky.
Sid: Huh?
[He turns to see Woody still on on the barbecue grill, lifeless except for the sound coming from his voice box]
Woody's Voice Box: This town ain't big enough for the two of us!
Sid: What?
[He walks over to Woody and picks him up]
Woody's Voice Box: Somebody's poisoned the water hole...
Sid: It's busted.
[He raise Woody up, about to throw him away...]
Woody's Voice Box: Who are you callin' busted, Buster?!
[Sid stops short and looks at Woody confused]
Woody's Voice Box: That's right. [As Woody's voice box continues to talk, Sid look at his pull string. It isn't moving.] I'm talking to YOU, Sid Phillips! [Sid gets increasingly frightened and confused]
Sid: Wha-
Woody's Voice Box: We don't like being blown up, Sid, or smashed, or ripped apart...
Sid: W-w-w-we?
Woody's Voice Box: That's right. Your toys.
[A red doll rise from a sandbox calling Mama. A pick-up truck toy emerges from the sandbox too. Mud-covered soldiers rises from some puddles and began to move towards Sid who back up in fright. The alien who Scud chewed up earlier, appears from a dog bowl and join in the fray. Legs lower Babyface down onto Sid's head, making him scream in terror. Hand-in-the-Box grabs him by the leg and RollerBob and Janie approach him. Sid found himself getting surrounded by his toys.]
Woody's Voice Box: From now on, you must take good care of your toys! Because if you don't, we'll find out, Sid. We toys can see everything.
[Woody's inanimate head rotates around 360 degrees then came to life much to Sid's horror]
Woody: (regular voice) So play nice.
[Sid screams in horror and runs away, dropping Woody]
Sid: AAAAAAAGGGGGGHHHHHH!!!!!
[Woody, and the mutant toys cheer]
Woody: (delighted) Ha-ha! We did it! We did it! YES!!!
[Inside, Hannah is coming downstairs with a doll when Sid rushes in]
Sid: The toys! The toys are alive!
[He sees Hannah's doll and recoils a bit]
Sid: N-N-Nice toy...
[Hannah, sensing Sid's fear and found a opportunity to get back at him for what he did to Janie and her toys, suddenly thrusts the doll into Sid's face. He continues shrieking and runs upstairs with Hannah chasing him, taunting him with the doll]
Hannah: What's wrong, Sid?! Don't you want to play with Sally?!
[Outside, the mutant toys continue celebrating and congratulating each.]
Woody: Nice work, fellas. Good job. Comin' out of the ground -- what a touch! That was a stroke of genius.
Buzz Lightyear: Woody.
[Woody turns around and sees Buzz who's still affixed to Sid's launchpad. Buzz extends his hand to Woody]
Buzz Lightyear: Thanks.
[They share a smile as they shake hands, beginning their friendship]
[when they heard a car horn and they turn to see Andy and his family getting into the car]
Andy's Mom: Everybody say, "Bye, house."
Buzz Lightyear: Woody! The van!
Andy: (depressed) Bye, house.
[Woody quickly hoist Buzz off the pole he was tied to]
Woody: (to mutant toys) We gotta run! Thanks, guys.
27 The Chase
[With the rocket still taped to Buzz, the two toys sprint to the fence. Woody peeks out to see Andy's van's engine roaring, starting up]
Woody: Quick!
[Woody easily slips through the slats in the fence, but Buzz's rocket got him stuck. Woody climb to the rear bumper of the van then realizes Buzz's movement is silent. He looks back to discover that Buzz is stuck to the fence]
Buzz Lightyear: Just go! I'll catch up!
[Woody looks between Buzz and the van then made a decision. He jumped down and ran back to Buzz. The van begins pulling out of the driveway. Woody tugs on a loosened slat and breaks Buzz free of the fence. The two toys ran out to the street but the van is already driving away down the street]
[Then they heard a rumble and they look back to see the moving truck rolling towards them]
Sheriff Woody, and Buzz Lightyear: Aaaah!
[They duck down to avoid been hit by the truck as it rolls over them. After it passes, they start to chase it]
Buzz Lightyear: Come on!
[Scud is lying on the front porch when he perks up, seeing Woody, and Buzz running down the street after the moving truck. He growls, wanting to get back at them for duping him. Buzz runs faster than Woody and leap for a strap which is dangling from the back of the truck and grabs it to climb up to the bumper. Woody struggles to reach the strap but it keeps being out of reach]
Buzz Lightyear: You can do it, Woody!
[Woody jumps and grabs the strap]
Woody: Whew, I made it! (laughs)
Buzz Lightyear: (gasps)
[Woody look back to see Scud running towards them]
Woody: Aaaaaah!
[Scud bite on Woody's foot]
Woody: (kicking Scud with his other foot) Get away, you stupid dog! Down! Down!
[Scud began to drag Woody down to the end of the strap]
Buzz Lightyear: Hold on, Woody!
Woody: I can't do it! Take care of Andy for me!
Buzz Lightyear: No!
[Buzz jumps off of the truck and onto Scud's snout. He pull Scud's eyelids and snap them hard. Scud yelps in pain, letting go of Woody. He bucks wildly with Buzz still on him]
Woody: Buzz!
[Still hanging onto the strap, Woody scrambles up onto the bumper. He unlocks the back door of the truck and strains to get it open. Just then, the moving truck and the family van stop at the traffic lights. Woody slams into the door, making it slide up, carrying him with it. Hanging from the door, Woody scans the inside of the truck until he saw a box marked ANDY'S TOYS. Scud flings Buzz off his face. Buzz tumbles under a parked car. Scud runs to the car but can't get to Buzz due to the car too big for him to fit under. Woody open the box and inside is Slinky, Rex, Mr. Potato Head and Hamm]
Toys: What?
Rex: Are we there already? Woody!
Slinky: Woody?! How'd you --
Hamm: How did you --
[Woody push the box to the side and begin rummaging through the next box. Slinky, Potato Head, Rex and the other toys poke their heads out]
Hamm: What's going on? What's he taking?
Woody: Ah-hah! There you are!!
[The toys watch in confusion as Woody took out RC and his remote control out of the box]
Mr. Potato Head: Hey! What's he doing?
[Woody runs to the back of the truck and kicks RC out onto the street, making the toys scream in horror]
Rex: He's at it again!
[Woody turn on the remote and send RC to the parked car, pasting Scud on the way. RC's motor whirrs happily at Buzz being OK and Buzz smiles at him]
Woody: (laughs)
[The traffic light turned green, allowing the moving truck and Andy's family van to drive on]
Mr. Potato Head: Get him!
[The toys pour out of their boxes and charge towards Woody]
[Woody look back, gasps and quickly turn the wheel on the remote, making RC zoom with Buzz on board him towards the truck with Scud in hot pursuit. Woody steers the remote while trying to fend off the angry toys]
Woody: Ah-h!! Ah-h! No, no!
[Scud continues chasing Buzz and RC down the street, nearly close to chomp on him. In the truck, Rocky lifts Woody and spin him around in circles]
Woody: No, no, no! Wait!
(as Rocky spins him)
Woody: Whoa-Whoa-Whoa...!
[RC suddenly starts going around in circles because of the remote going around in Woody's hand]
Buzz Lightyear: (spinning) Whoa-Whoa-Whoa...!
[Rocky throws Woody to the floor, making RC going straight again with Scud still chasing him and Buzz clinging to him. Hamm leaps off a pile of boxes and onto Woody]
Hamm: Pig pile!!
[The impact makes RC jumps into the air and back onto the road. Buzz lands on RC, facing backwards. The traffic lights turn red and the wall of cross traffic move from both directions. Buzz looks back to see the lines of traffic in front of him]
Buzz Lightyear: Aaaah!
[He and RC drives straight into the lines of traffic with Scud blindly following them. Scud saw a car slamming on it's brakes on his side and went wide-eyed, realizing his mistake and skids to stop. The car swerves to avoid Scud and crashes into another car. Buzz and RC zipped through before the other cars collide with each other. Soon there is a multi-car pile up that encircles Scud, trapping him. He runs back and forth, trying to find a way out while people in their cars honk their horns at each other and shouting at each other]
Woman: Get out of that car!
Man: Move it!
[Buzz look up to see the crash and let out a sigh of relief, both for getting away from Scud and avoid getting hit by the cars. Back on the truck, Rocky holding Woody (still holding the remote) above his head and walk towards the open door]
Woody: No! Wait! You Don’t Understand! Buzz is out there! We've gotta help him!!
[He swung his arm and the remote around, accidentally knocks Mr. Potato Head's hat, eyes, mouth and nose off his body and onto the floor]
Mr. Potato Head: Toss him overboard!
Woody: No, no, no, wait! Ah!
[The toys throw Woody out into the road. The toys cheered as the truck rolled away]
Rex: Hooray!
Mr. Potato Head: So long Woody!
[Woody sighs in relief as he looks back and sees a blue car coming towards him. He ducks down to avoid getting hit as the car passes over him. Shaken, Woody gets up when Buzz and RC come racing up behind them]
Buzz Lightyear: Who-o-o-oa! Woody!
[RC sweeps up Woody and keep driving. Woody found themselves sitting in front of Buzz while still holding the remote]
Woody: Well, thanks for the ride.
Buzz Lightyear: (pointing ahead) Look out!!
[They see that they're about to slam into the rear tire of the car in front of them. Woody screams and quickly turns the wheel on the remote to make a hard left, missing the tire. RC swerves under the car]
Woody: Now let's catch up to that truck!
[He flick the switch from ON to TURBO and RC speeds up towards the moving truck.
[The toys are busy congratulating one another when Lenny glances out of the back and spots Woody, and Buzz]
Lenny: Guys! Guys! Woody riding RC! And Buzz is with them!
Toys: What?!!!
[The toys rush to the edge of the open truck. Bo lifts Lenny up to look through him]
Bo Peep: It is Buzz! Woody was telling the truth!
[The toys including Mr. Potato Head gasp in shock and horrified at what they have done]
Slinky: What have we done?!
Rex: Great. Now I have guilt.
Woody: We're almost there.
[RC is gaining on the moving truck]
Bo Peep: Rocky, the ramp!
[Rocky rush over to a lever on the side of the back. The sign above it reads "RAMP: UP/DOWN."  Rocky push down the lever and the ramp starts to lower down. Woody, and Buzz look up to see the ramp about to come down on top of them]
Buzz Lightyear: Look out!!
[RC sped back just before the ramp slams down into the road. Sparks flew from the metal, scraping the road]
Slinky: (to other toys) Quick! Hold on to my tail!
[Mr. Potato Head and Rex grab on to Slinky's tail, allowing Slinky's front end to jump off the truck and onto the ramp. Slinky lean forward with his paw stretch out to Woody. Woody hands the remote to Buzz and leans forward to grab Slinky's paw. They grab hold of each other]
Mr. Potato Head: That a boy, Slink!!
[Then all of a sudden, RC starts to slow down, pulling Slinky's front end off the ramp]
Slinky: Woody!!
[His slinky middle began to stretch and the other toys look worried]
Slinky: Woody! Speed up!
Woody: (to Buzz) Speed up!
Buzz Lightyear: The batteries! They're running out!
[RC's headlight eyes sag as he slows down even more. As Slinky continues to stretching, RC began to weave side-to-side like a water skier]
Slinky: Whoa! Whoa! Whoa!
[Inside the family van as the song Hakuna Matata from The Lion King plays, Molly look at the sideview mirror and saw RC with Woody, Buzz in it before they back out of view. Molly squeals with delight by the sight of what she saw. With Slinky's mid-section stretched to the limit, he began to lose his grip on Woody]
Slinky: I can't hold on much longer!
Woody: Slink! Hang on!
[Slinky's paws slips out of Woody's hands, sending his front shooting back into the truck and knocking over the toys]
Slinky: Aaaaaaah!
Toys: Ouch!
[RC slows down and sputters to a stop. Woody and Buzz watch in vain as the family van and moving truck disappear down the street. A cuckoo bird's chirps]
28 Rocket Power
Woody: (disappointed) Great!
[Buzz drops the remote in disappointment as he looks back at the rocket, which is still attached to his back which gives him an idea!]
Buzz Lightyear: Woody! The rocket!
Woody: The match!
[He pull out the match from his holster that Sid had put there earlier]
Woody: Yes! Thank you, Sid!
[Woody runs around behind Buzz, strikes the match against RC's back tire and is about to light the fuse when a car whizzes over them, blowing out the match. Woody looks stunned at this, clenched the match in his hands and falls prostrate to the ground]
Woody: No-o-o! No-no-no-no! No-o-o!
[Unable to watch a cowboy cry, Buzz bows his head, causing his helmet to block the sun from Woody. As Buzz's shadow moves over him, Woody stop sobbing and suddenly saw a white dot on his hand which is the same dot generated from Sid's magnifying glass. Seeing that Buzz's helmet aims the sunlight on his hand, Woody got an idea. He leaps up, grab Buzz's helmet and aligns it so the sunlight touches the fuse]
Buzz Lightyear: Woody?! What are you doing?
Woody: Hold still, Buzz!
[The fuse lights]
Woody: Ha-ha!!
Buzz Lightyear: You did it! Next stop: Andy!
[Then Woody stops smiling, remembering something]
Woody: Wait a minute...I just lit a rocket. Rockets explode --
[The rocket fires, making RC go super fast, passing car after car. Woody's face starts wagging by the speed as the moving truck appears ahead of them. The toys gather around Slinky who has his spring splayed out in his middle]
Slinky: I shoulda held on longer.
[Lenny look out of the back and saw Woody, Buzz, and RC zooming up to them]
Lenny: Look! Look! It's Woody and Buzz! Comin' up fast!
Rex: Woody!
[The rocket is so strong that it began to lift Woody and Buzz into the air. Woody manages to hold on to RC but not for long as he forces to lose his grip, sending RC towards the moving van]
Rex: Take cover!!
[The toys ran out of the way. Only Mr. Potato Head remains standing as RC smash into him, sending his parts flying. The rocket carries Woody, and Buzz higher and higher]
Woody: Ahhh!! This is the part where we blow up!
Buzz Lightyear: Not today!
[He presses the red button which open his wings which breaks through the tape that holds him to the rocket. The toys separate from the rocket just before it explodes. The toys plummet towards the ground]
Woody: (covering his eyes) Ah-h-h-h-h!
[Just then Buzz banks under some power lines. Woody takes a peek saw that they're really flying]
Woody: Hey, Buzz!! You're flying!!
Buzz Lightyear: This isn't flying. This is falling -- with style!
Woody: Ha ha!! To infinity, and beyond!!
[They soar towards the moving truck but then they flew over it, much to Woody's confusion]
Woody: Uh, Buzz?! We missed the truck!
Buzz Lightyear: We're not aiming for the truck!
[Woody look to see that they're gaining on the family van. They fly over to the sun roof and then drop into the car. Before anyone notices, Woody and Buzz land in a open box in the back seat, next to Andy hide behind the seat. Andy look over to see a limp Woody and Buzz inside the box]
Andy: Hey! Wow!
Andy's Mom: What? What is it?
Andy: (picking up the toys) Woody! Buzz!
Andy's Mom: Oh, great, you found them. Where were they?
Andy: Here! In the car!
Andy's Mom: See? Now, what did I tell you? Right where you left them.
[Andy hug his favorite toys happily. Woody and Buzz give each other a knowing wink before they resume freezement.]
29 Christmas in Andy's New House
[Months later, it's Christmas in Andy's new house. In the living room, Andy, his mom and Molly are around the Christmas tree, opening presents]
Andy: Which one can I open first?
Andy's Mom: Let's let Molly open one.
[In the Christmas tree, Sarge is using his binoculars to spy on them. His soldiers turn on the baby monitor to which they're holding in the branches. The other monitor plays on Andy's night stand]
Sarge: (over the monitor) Frankincense, this is Myrrh. Come in, Frankincense.
[Buzz now with his helmet permanently opened, is sitting on the edge of Andy's bed while Hamm rests on the nightstand. They listen to the monitor]
Hamm: (to the room) Hey, heads up everybody! It's showtime.
[The toys, and Woody are mingling together like a typical office Christmas party]
Rex: Oh! It's time!
[The toys stop dancing and hurried over to the monitor. Woody is about to follow when Bo grabs him with her crook]
Woody: Whoooooah! Oh! Bo! (rubbing his neck) There's gotta be a less painful way to get my attention.
Bo Peep: Merry Christmas, Sheriff.
[Bo points her crook upwards to her sheep with mistletoe in their mouths]
Woody: Say, isn't that mistletoe?
Bo Peep: Mm-hmmmmm.
[Bo drops her crook, dips Woody and kisses him]
[The toys are congregated below the monitor this time with excitement instead of fear this time]
Rex: (to Slinky) Maybe Andy'll get another dinosaur, like a leaf-eater. That way, I could play the, uh, dominant predator. Ha ha ha!
[Slinky laughs with him]
Buzz Lightyear: Quiet everyone, quiet!
Sarge: (over monitor) Molly's first present is... Mrs. Potato Head. Repeat. A Mrs. Potato Head.
[Mr. Potato Head looks overjoyed]
Hamm: Way to go, Idaho!
Mr. Potato Head: Gee, I better shave.
[He takes off his moustache piece and flick it away. Woody climbs onto the bed and join Buzz, his face covered in lipstick from Bo kissing him]
Sarge: (over monitor) Come in, Frankincense. Andy is now opening his first present -- (Static)
[Buzz bangs the side of the monitor]
Woody: Buzz. Buzz Lightyear. You are not worried, are you?
Sarge: (over monitor) I can't quite make out -- (Static)
Buzz Lightyear: (defensively) Me? No, no, no, no... Mm-mmm. Are you?
Woody: (laughing) Now Buzz, what could Andy possibly get that is worse than you?
Andy: Oh, what is it? What is it?
[Buster is heard barking]
Andy: Wow!!!! A puppy!!!!!!
[Woody and Buzz look at each other in surprise for a sec then share a worried smile.]
[The end.]
`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)
