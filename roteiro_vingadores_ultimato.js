async function EnviarScript(scriptText){
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

sendscript(`
CLINT BARTON: How about now?

[Both Lila and Clint giggle, as the camera panels into a long shot showing a target nailed on a tree, and the rest of Barton family having a picnic in the field.]

CLINT BARTON: Alright. Ready your fingers.

COOPER BARTON: Nice.

LAURA BARTON: Nice throw, kiddo.

COOPER BARTON: You go.

LAURA BARTON: Hey, you guys want mayo or mustard, or both? [Camera switches to Lila who then proceeds to look at Clint.]

LILA BARTON: Who wants mayo on a hotdog?

CLINT BARTON: Probably your brothers.

[Clint looks at his wife, Laura]

CLINT BARTON: Uh, two mustard, please! Thanks, mama. [Camera switches to Laura facing Nathaniel]

LAURA BARTON: Mayo or mustard?

NATHANIEL BARTON: How about ketchup?

LAURA BARTON: Ketchup? [Camera switches back to Clint and his daughter] I can do ketchup.

CLINT BARTON: Mind your elbow. [Lila releases the arrow and it hits the target directly in the bullseye.] Hahaha! Good job, Hawkeye. Go get your arrow.

LAURA BARTON: Hey guys! Enough practice, soup's on!

CLINT BARTON: Alright, we're coming; we're hungry. [Clint looks behind him, but there's no one there, but dust being blown away by the wind.] Lila, let's go. [Clint starts to look around] Lila? [Clint starts to move and look around, and pick up the bow she had.] Honey? [Clint looks around to see Laura and the boys, only they are gone now. He looks seriously panicked and confused as he hurriedly drops the arrows and jogs over to where they were.] Hey, babe! Babe? Babe? Boys? Boys? Laura?

[Lightning crackles]

[SOMEWHERE IN SPACE]

[Marvel Studios Opening sequence begins with Dear Mr. Fantasy playing. Only the heroes who survived the snap are shown.]

[Scene switches to Nebula and Tony on the ship playing paper football]

NEBULA: Wrra! [Nebula, frustrated, puts her hands in a fighting stance while looking at Tony.]

TONY STARK: You don't need to do that. Because uh... you're just holding position. [Nebula flicks a paper football towards Tony] Oh yeah, that was close. [Nebula once again flicks a paper football towards Tony] That's a goal. We're now one apiece.

NEBULA: I would like to try again. [Nebula flicks a paper football towards Tony]

TONY STARK: We're tied up. Feel the tension? It's fun.

[Tony poorly flicks a paper football towards Nebula]

TONY STARK: That was terrible. Now you have a chance to win. [Nebula flicks the paper football towards Tony]

TONY STARK: And... you've won. Congratulations. [Tony reaches his hand out to shake Nebula's hand]

TONY STARK: Fair game. Good sport. [Nebula shakes Tony's hand] Have fun?

NEBULA: It was fun.

[Camera switches to see Iron Man's busted helmet. Tony Stark's hand reaches forward to turn on the helmet. We pan out to see that he's sitting on the floor of a gloomy Benatar. The weight of the recent events of INFINITY WAR evident in Tony's posture. He taps the helmet with a sigh.]

TONY STARK: This thing on? [The helmet scans Tony. Tony leans against the wall while taking deep breaths. He looks skinnier and weak with malnutrition.] Hey, Miss Potts... Pep. If you find this recording, don't post it on social media. It's gonna be a real tear-jerker. I don't know if you're ever going to see these. I don't even know if you're... if you're still... Oh god, I hope so. Today is day 21, uh 22. [Cut to Tony standing at a window to stare out in space, waiting for his impending doom to arrive.] You know, if it wasn't for the existential terror of staring into a void of space, I'd say I'm feeling better today. The infection's run its course, Thanks to the blue meanie back there. [Cut to a shot of Nebula sitting in the back of the Benatar.] You'd love her. Very practical. Only a tiny bit sadistic. Some fuel cells were cracked during battle, but we figured out a way to reverse the ion charge to buy ourselves about 48 hours of time. [A shot of Tony and Nebula working on the fuel cells of the Benatar.] But it's now dead in the water. We're 1000 light years from the nearest 7-11. Oxygen will run out tomorrow. And that'll be it. And Pep, I ... I know I said no more surprises, but I was really hoping to pull off one last one. But it looks like... well you know what it looks like. Don't feel bad about this. I mean, if you grovel for a couple of weeks, and then move on with enormous guilt. I should probably lie down. Please know that... when I drift off, I will think about you. Because it's always you.

[With that, Tony turns the helmet off. He rubs his thumb over the left eye, and then leans down, to what would be his last sleep. Nebula walks over to him, and carries him to Drax's seat, and lies him there. She walks away dejected.]

[A vast bluish nebula illuminates the space surrounding them. Cut to a shot of Tony's face, which for the first time shows age and weakness. There is a light on his face, which grows brighter and brighter until he's forced to open his eyes. The camera pans around to the light source, which is slowly revealed to be CAROL DANVERS.]

[A bathroom in the Avengers compound. We see Steve Rogers holding a blade, having just shaved off his beard. He sighs and looks into a side mirror. The mirror suddenly starts shaking, slowly at first, and then severely. Cut to the yard in the Avengers Compound, we see Steve Rogers, Natasha Romanoff, Bruce Banner, and James Rhodes walking out looking at something, the Benatar carried by Carol Danvers as she lands the spacecraft. The landing gears deploy as they touch down. The entry hatch opens, and Tony and Nebula walk out, Tony being supported by Nebula. Steve runs to Tony to help him stand up. Tony grips Steve's arm as he joins him.]

TONY STARK: Couldn't stop him.

STEVE ROGERS: Neither could I.

TONY STARK: I lost the kid.

STEVE ROGERS: Tony, we lost.

TONY STARK: Is, uh...? [Tony struggles to ask about Pepper.]

PEPPER POTTS: Oh, my God! Oh, my God! [She and Tony embrace.]

TONY STARK: It's okay.

[Rocket Raccoon sits down with Nebula and takes her hand, both silently mourning their losses. In the Avengers Compound. The heroes are sitting in a living room area. Tony is sitting at a table, getting blood for healing. A holographic casualty report lists the names and faces of those lost to the Decimation.]

JAMES RHODES: It's been 23 days since Thanos came to Earth.

NATASHA ROMANOFF: World governments are in pieces. The parts that are still working are trying to take a census. And it looks like he did... he did exactly what he said he was gonna do. Thanos wiped out fifty percent, of all living creatures.

TONY STARK: Where is he now? Where?

STEVE ROGERS: We don't know. He just opened a portal and walked through.

[Cut to a shot of a sullen-looking Thor, sitting on a bench, seemingly deep in thought.]

TONY STARK: What's wrong with him?

ROCKET: Oh, he's pissed. He thinks he failed. Which of course he did, but you know there's a lot of that's going around, ain't there?

TONY STARK: Honestly, until this exact second, I literaly thought you were a Build-A-Bear.

ROCKET: Maybe I am.

STEVE ROGERS: We've been hunting Thanos for three weeks now. Deep Space scans, and satellites, and we got nothing. Tony, you fought him.

TONY STARK: Who told you that? [Surprised] I didn't fight him. No, he wiped my face with a planet while the Bleecker Street Magician gave away the store. That's what happened. There was no fight.

STEVE ROGERS: Okay.

TONY STARK: He's unbeatable.

STEVE ROGERS: Did he give you any clues, any coordinates, anything?

TONY STARK: Pfft! I saw this coming a few years back. I had a vision. I didn't wanna believe it. Thought I was dreaming.

STEVE ROGERS: Tony, I'm gonna need you to focus.

TONY STARK: [starting to seethe] And I needed you. As in past tense. That trumps what you need. It's too late buddy. Sorry. You know what I need? [Tony stands, pushing things off the table with a clatter. Everyone winces at the noise.] I need to shave. And I believe I remember telling all youse -

[Tony goes for Steve. Rhodey quickly comes in front of him, trying to stop him.]

RHODEY: Tony, Tony, Tony!

TONY STARK: Alive and otherwise what we needed was a suit of armor around the world! Remember that? Whether it impacted our precious freedoms or not- that's what we needed!

STEVE ROGERS: Well, that didn't work out, did it?

TONY STARK: I said, "we'd lose". You said, "We'll do that together too." And guess what, Cap? We lost. And you weren't there. But that's what we do, right? Our best work after the fact? We're the Avengers, we're the Avengers. Not the Prevengers.

RHODEY: Okay.

TONY STARK: Right?

RHODEY: You made your point. Just sit down.

TONY STARK: Okay...

RHODEY: Okay?

TONY STARK: Nah, nah. Here's my point. You know what?

RHODEY: Tony, you're sick.

TONY STARK: [Referring to Carol] She's great, by the way.

RHODEY: Sit down. Sit.

TONY STARK: We need you. You're new blood. Bunch of tired old mules! [Tony walks right up to Steve's face, his voice hushing down to a venomous whisper] I got nothing for you, Cap! I got no coordinates, no clues, no strategies, no options. Zero. Zip. Nada. No trust. Liar.

[Steve looks affected by Tony's words. The old friends just gaze at each other. After a moment, Tony rips his Arc Reactor from his chest and shoves it into Steve's hand.]

TONY STARK: Here, take this. You find him, and you put that on. You hide.

[Tony falls to the ground. Steve is by his side and everyone is starting to gather.]

STEVE ROGERS: Tony!

TONY STARK: I'm fine. I...

[Tony falls into a heap, unconscious.]

[Cut to a shot of Tony on a bed, with Pepper at his side.]

RHODEY: Bruce gave him a sedative. He's gonna probably be out for the rest of the day.

CAROL DANVERS: You guys take care of him. And I'll bring him a Xorrian Elixir when I come back.

[Carol walks away.]

NATASHA ROMANOFF: Where are you going?

CAROL DANVERS: To kill Thanos.

[Steve and Natasha share a look before walking after her.]

NATASHA ROMANOFF: Hey, you know, we usually work as a team here, and between you and I, morale's a little fragile.

STEVE ROGERS: We realize up there is more your territory, but this is our fight too.

RHODEY: You even know where he is?

CAROL DANVERS: I know people who might.

NEBULA: [Standing behind Carol] Don't bother. I can tell you where Thanos is. Thanos spent a long time trying to perfect me. And when he worked, he talked about his great plan. Even disassembled, I wanted to please him. I'd ask "where would we go once his plan was complete?". His answer was always the same: "To the Garden."

RHODEY: That's cute, Thanos has a retirement plan.

STEVE ROGERS: So where is he?

ROCKET: When Thanos snapped his fingers, Earth became ground zero for a power surge of ridiculously cosmic proportions. No one's ever seen anything like it... Until two days ago. [A hologram of a planet pops up, with a shockwave visibly traversing the surface.] On this planet.

NEBULA: Thanos is there.

NATASHA ROMANOFF: He used the stones again.

BRUCE BANNER: Hey, hey, hey. We'd be going in short-handed, you know.

RHODEY: Look, he's still got the stones, so...

CAROL DANVERS: So let's get him... Use them to bring everyone back.

RHODEY: Just like that?

STEVE ROGERS: Yeah, just like that.

[Steve and Carol share a knowing look.]

NATASHA ROMANOFF: Even if there's a small chance that we can undo this... I mean we owe it to everyone who's not in this room to try.

BRUCE BANNER: If we do this, how do we know it's gonna end any differently than it did before?

CAROL DANVERS: Because before, you didn't have me.

RHODEY: Hey, new girl, everyone here is about that superhero life. And if you don't mind my asking, where the hell have you been all this time?

CAROL DANVERS: There are a lot of other planets in the universe. And unfortunately, they didn't have you guys.

[Thor, who has been eating a snack behind all this time, stands up and walks over to Carol. She looks behind at him. He holds his hand up, and catches Stormbreaker as it flies over to him, missing Carol by inches. But Carol doesn't even flinch, instead smiling at the God of Thunder.]

Thor: I like this one. [smiles]

STEVE ROGERS: Let's go get this son of a bitch.

[Title Screen: Avengers: Endgame]

[Cut to a shot of everyone except for Tony aboard the Benatar.]

ROCKET: Okay, who here hasn't been to space?

[Nat, Cap, and Rhodey raise their hands.]

RHODEY: Why?

ROCKET: You better not throw up on my ship.

NEBULA: Approaching jump in 3... 2... 1!

[The ship jumps forward into a wormhole, and we see Steve holding onto his seat for dear life. A close up of his eyes show them widening slightly at the exhilaration of this new experience. The ship slows down, and the ship hovers in orbit of the planet seen in the hologram previously. Carol Danvers hovers in front of the Benatar.]

CAROL DANVERS: I'll head down for recon.

[A shot of the passengers inside the Benatar preparing for the impending confrontation.]

NATASHA ROMANOFF: This is gonna work, Steve.

STEVE ROGERS: I know it will.

[We see Steve holding a compass with an image of Peggy Carter.]

STEVE ROGERS: Cause I don't know what I'm going to do if it doesn't.

[Carol Danvers approaches the Benatar.]

CAROL DANVERS: No satellites, no ships, no armies, no ground defenses of any kind. It's just him.

NEBULA: And that's enough.

[Cut to a shot of a scenic lush tropical fauna. It surrounds a shed on a farm. A scarecrow made of Thanos' armour is seen before we cut to a shot focusing on the burnt Infinity Gauntlet on Thanos' arm. He's walking among his crops, harvesting fruit, and putting them in a sack. He walks over to the shed, with a dragging quality to his legs, like it pains him to walk, presumably his living quarters, and tries to sit down, and we see his full face. His whole left side is burnt black with blisters; He looks ridiculously pathetic compared to when we saw him last.]

[Suddenly, Carol Danvers flies through the roof, knocking Thanos down, and grabbing his neck. Bruce in the Hulkbuster armor bursts from the ground, and grabs Thanos' Infinity Gauntlet arm. Thor flies in and slices off the Infinity Gauntlet. Rhodey flies down with Rocket and aims guns on Thanos' head.]

[Captain America walks in his Winter Soldier Outfit, with Natasha right behind him, staring murderously at Thanos. Rocket goes over to the sliced off Infinity Gauntlet, and kicks it over, as everyone realizes that there are no stones in it.]

ROCKET: Oh no.

STEVE ROGERS: Where are they?

CAROL DANVERS: Answer the question!

THANOS: The universe required correction. After that, the stones served no purpose, beyond temptation.

BRUCE BANNER: You murdered trillions! [Bruce pushes him to the ground wearing Hulk Buster armor]

THANOS: You should be grateful. [Punched by Hulk Buster]

NATASHA ROMANONFF: Where are the Stones?

THANOS: Gone. Reduced to atoms.

BRUCE BANNER: You used them two days ago!

THANOS: I used the stones to destroy the stones. It nearly killed me. But the work is done. It always will be. [sits himself a little straighter.] I am... inevitable.

RHODEY: We have to tear this place apart, he-he-he has to be lying.

NEBULA: My father is many things. A liar is not one of them.

THANOS: Ah, thank you, daughter. [Nebula looks down, a little uncomfortable.] Perhaps I treated you too harshly.

[We see Thor's face filled with rage as he raises to summon Stormbreaker, and before anyone can stop him, SLICES Thanos' head off. Thanos' limp body falls to the floor. Nebula wipes off some of the blood spatter.]

ROCKET: What... What did you do?

[Thor looks broken, realizing what he has done.]

THOR: I went for the head.

[Thor slowly walks out of the shed, no real purpose in his steps as the screen blurs to nothingness.]

FIVE

[A pause]

YEARS

[pause]

LATER

[We see shots of New York City, seemingly abandoned. There are a lot of boats gathered around a dock, all abandoned. A baseball stadium comes into view, with no life present at all. The aftermath of the Decimation is evident, and Earth has not coped well.]

[Cut to an abandoned cafe, with a poster on the wall labeled "WHERE DO WE GO, NOW THAT THEY'RE GONE?". A therapy session is taking place with Steve Rogers and seven other people.]

JOE RUSSO: So I, uh... Went on a date the other day. It's the first time in five years, you know? I'm sitting there at dinner... I didn't even know what to talk about.

STEVE ROGERS: What did you talk about?

JOE RUSSO: Same old crap, you know? How things have changed, and... my job, his job... How much we miss the Mets. And then things get quiet... He cried as they were serving the salads.

JIM STARLIN: What about you?

JOE RUSSO: I cried... just before dessert. But I'm seeing him again tomorrow, so...

STEVE ROGERS: That's great. You did the hardest part. You took the jump, you didn't know where you were gonna come down. And that's it. That's those little brave baby steps we gotta take. To try and become whole again, try and find purpose. I went in the ice in '45 right after I met the love of my life. Woke up 70 years later. You gotta move on. Gotta to move on. The world is in our hands. It's left to us guys, and we got to do something with it. Otherwise... Thanos should have killed all of us.

[Screen Title: SAN FRANCISCO]

(The camera pans to San Francisco Bridge, all the way to a self-storage facility with a sign saying "U-STORE It, SELF STORAGE", with its interior filled with stored stuff and junk until it spots Luis' van from "Ant-Man and the Wasp", behind a metallic fence with a label named "LANG". A rat crawls over the van's rear windshield and accidentally activates the controls for opening the Quantum Realm, haphazardly activating the Quantum Tunnel. The rear door busts open, flinging Lang outside the van.)

Scott Lang: (grunts as he pushes away a cushion out of his body, and deactivates the helmet, but still grunting in pain, as he sweeps away sparks from an electrical failure out of his suit, then try to stand up.) What the hell?

(He manages to stand up, as another electrical failure sparks out of his gauntlets, and now looks around in a confused look.)

Scott Lang: Hope?

(Inside a security office, a security guard (Ken Jeong) reading a book as he looks upon his security screen, seeing something going on in one of the storage facilities. In the cameras, it shows Lang in his casual clothing, shouting, waving a sign with the word "HELP" written on it.)

(Outside the facility, he pulls out a pushcart and looks back seeing the guard giving a stern look from far. He walks around until reaching his hometown, finding a post filled with MISSING posters, abandoned houses, a wrecked car, nothing but desolation. He then sees a kid in a bike pass by.)

Scott Lang: [yells] Kid! Hey kid!

[The kid stops his bike as he stares back in a serious look.]

Scott Lang: What the hell happened here?

[The kid still stares at him and is almost about to tear up, but immediately turns away from him and move on. Lang still gives the same confused look, as he arrives in somewhat a memorial called "THE VANISHED", with all the names of the people who became victims of the Decimation. As Lang arrives on one of the engraved stones, he immediately drops the handle in shock.]

Scott Lang: No. Please. Please, please. [moves on to check the other side of the engraved stone] No, no, no. No. [Lang excuses aside a young couple as he keeps on checking another engraved stone if his daughter's name is on one.] Excuse me, sorry. No, Cassie, no.

[The camera keeps panning and switching as Lang checks the rest of engraved stones if her daughter's name was in one.]

Scott Lang: [in a mantra-like] Please, please, please, please... No, Cassie. [Lang looks at the engraved stone in shock, revealing his name in it.]

Scott Lang: What?

[Scott is now seen running across the memorial, then to his hometown, only to ring a doorbell at his house, bang on the door, and try opening the door, but is found locked. Then, he sees a feminine figure appear out of a hallway inside. The figure gets closer, revealing a woman in a purple sweater, with her hand pushing towards the glass door's window, and her face filled with amazement, as she unlocked the door. It was Lang's daughter, Cassie, now a grown-up teen since the last five years.]

[Cassie, who hasn't seen him for five years, holds up his face in an emotional sight and starts to smile tearfully. Lang does the same.]

SCOTT LANG: Cassie?

CASSIE LANG: Dad? [Both of them emotionally hug each other as both dad and daughter had reunited. Then Lang shoves her back, realizing that her daughter is now a full-grown teenager.]

SCOTT LANG: You're so big!

[Both dad and daughter share a hug once more.]

[The camera cuts to a sunset in San Francisco, showing a metal face with a sign saying in its headings, "RESTRICTED AREA, DO NOT ENTER" with the subtext, "AUTHORIZED PERSONNEL ONLY BEYOND THIS POINT, SECURITY ID OR ESCORT REQUIRED", then cuts to a scene inside the New Avengers facility, someone cutting the two bread with peanut butter filling into a couple of triangles, as someone else was speaking. The camera pans up to Romanoff, now having red, long hair, over-colouring her blonde streaks, hearing Rocket Raccoon out about his status so far.]

ROCKET: Yeah, we boarded that highly suspect warship Danvers pinged.

[The camera cuts showing a few of the Avengers in holographic calls from the left to right, respectively: Nebula and Rocket Raccoon, Okoye, Danvers with a tomboyish haircut, and Rhodes.]

NEBULA: It was an infectious garbage scowl.

ROCKET: So, thanks for the hot tip. [turns to Danvers and replies back with a smirk]

CAROL DANVERS: Well, you were closer.

ROCKET: Yeah. And now we smell like garbage.

NATASHA ROMANOFF: [turns to Okoye] You get a reading on those tremors?

OKOYE: It was a mild subduction under the African plate.

NATASHA ROMANOFF: Do we have a visual? How are we handling it?

OKOYE: Nat, it's an earthquake under the ocean. We handle it by not handling it.

NATASHA ROMANOFF: [turns to Danvers] Carol, are we seeing you here next month?

CAROL DANVERS: Not likely.

ROCKET: What, you gonna get another haircut?

CAROL DANVERS: [irritated] Listen fur-face, I'm covering a lot of territory. The things that are happening on Earth, are happening everywhere, on thousands of planets.

ROCKET: [murmurs to himself] All right, all right, that's a good point. That's a good point.

CAROL DANVERS: So you might not see me for a long time.

NATASHA ROMANOFF: Alright. Uh, well. This channel is always active. So, if anything goes sideways... anyone's making trouble where they shouldn't... comes through me.

[Okoye agrees in her language.]

ROCKET: Okay.

NATASHA ROMANOFF: Alright.

[The Avengers cut off their calls one by one...]

CAROL DANVERS: [To Rhodey] Good luck. [cuts off call]

[Except for Rhodes. Nat sighs exhausted, and sits down, as she notices Rhodes still online in the call.]

NATASHA ROMANOFF: Where are you?

RHODEY: Mexico. The Federales found a room full of bodies. Looks like a bunch of cartel guys. Never even had the chance to get their guns off.

NATASHA ROMANOFF: It's probably a rival gang.

RHODEY: Except it isn't. (Nat realizes something.) It's definitely Barton. What he's done here, what he's been doing for the last few years... I mean, the scene that he left... (Nat starts to show signs of sadness as she gradually tears up.) I gotta tell you, there's a part of me that doesn't even want to find him.

(In an abrupt moment of silence, she tries to chew her tears and emotional feelings as she eats a sandwich.)

NATASHA ROMANOFF: Will you find out where he's going next?

RHODEY: Nat...

NATASHA ROMANOFF: Please.

RHODEY: [reluctantly] Okay. [then Rhodes cuts off his]

[Nat starts to cry as she tries to hold back her tears miserably.]

STEVE ROGERS: You know I'd offer to cook you dinner but you seem pretty miserable already.

[Out of nowhere, Roger slumps over a bookshelf, in the same mood as he is in the therapy session, as Nat wipes off the tears off her face.]

NATASHA ROMANOFF: You here to do your laundry?

STEVE ROGERS: And to see a friend.

NATASHA ROMANOFF: Clearly, your friend is fine.

STEVE ROGERS: You know I saw a pod of whales when I was coming up the bridge.

NATASHA ROMANOFF: In the Hudson?

STEVE ROGERS: There's fewer ships, cleaner water.

NATASHA ROMANOFF: You know, if you're about to tell me to look on the bright side. Um... I'm about you to hit you in the head with a peanut butter sandwich. [jokingly smiles, as Rogers does the same]

STEVE ROGERS: Sorry. Force of habit. [Throws his jacket, then sits down on another chair, opposite Natasha.]

STEVE ROGERS: You know, I keep telling everybody they should move on and... grow. Some do. But not us.

NATASHA ROMANOFF: If I move on, who does this?

STEVE ROGERS: Maybe it doesn't need to be done.

NATASHA ROMANOFF: [Deep in her thoughts] I used to have nothing. And then I got this. This job... this family. And I was... I was better because of it. And even though... they're gone... I'm still trying to be better.

STEVE ROGERS: I think we both need to get a life.

NATASHA ROMANOFF: [Smiling] You first.

[A camera footage pops up in front of them, showing Scott Lang with his Quantum Realm Van behind him.]

Scott Lang: Oh! Hi. Hi! Is anyone home? This is Scott Lang. We met a few years ago, at the airport? In Germany? I got really big, and I had my mask on. You wouldn't recognize me.

STEVE ROGERS: [Standing up] Is this an old message?

NATASHA ROMANOFF: [Also standing up] It's the front gate.

SCOTT LANG: Ant-Man? Ant-Man, I know you know that. I need to talk to you guys.

[Cut to Scott inside the Avengers Compound, pacing worriedly in front of Steve and Natasha.]

STEVE ROGERS: Scott. Are you okay?

SCOTT LANG: Yeah. I'm fine.

[He struggles to ask about something. He finally blurts it out.]

SCOTT LANG: Have you ever studied Quantum Physics?

NATASHA ROMANOFF: Only to make conversation.

SCOTT LANG: Alright. So... five years ago, right before Thanos, I was in a place called the Quantum Realm. The Quantum Realm is like its own microscopic universe. To get in there, you have to be incredibly small. Hope, she's my... She was my... [struggling to not tell the entire truth about their relationship] She was supposed to pull me out. And then Thanos happened, and I got stuck in there.

NATASHA ROMANOFF: I'm sorry. That must've been a very long five years.

SCOTT LANG: Yeah, but that's just it. It wasn't. For me, it was five hours.

[Steve and Nat share a quick bewildered glance.]

SCOTT LANG: See, the rules of the Quantum Realm aren't like they are up here. Everything is unpredictable. Is that anybody's sandwich? I'm starving.

[He strides over to pick up Nat's sandwich, and bites into it.]

STEVE ROGERS: Scott, what are you talking about?

SCOTT LANG: What I'm saying is, time works differently in the Quantum Realm. The only problem is right now, we don't have a way to navigate it. But what if we did? I can't stop thinking about it. What if, we could somehow control the chaos, and we could navigate it? What if there was a way to enter the Quantum Realm at a certain point in time but then exit at another point in time? Like... Like before Thanos.

STEVE ROGERS: Wait, are you talking about a time machine?

SCOTT LANG: No. No, of course not. No, not a time machine. It's more like a... Yeah, a time machine. I know it's crazy. But I can't stop thinking about it. There's gotta be some way... There's gotta be...some w... it's crazy.

NATASHA ROMANOFF: Scott, I get e-mails from a raccoon, so nothing sounds crazy anymore.

SCOTT LANG: So who do we talk to about this?

[We cut to a cabin in the woods, at the bank of a lake. We see Tony Stark sitting outside what looks like a tiny shed.] TONY STARK: [Clapping his hand in a famous beat. Clap! Clap! Clap-Clap-Clap! Clap-Clap-Clap- Clap!] Chow time! [He seems to be speaking to someone unknown by the audience.] Maguna? Morgan H. Stark. You want some lunch?

MORGAN STARK: Define lunch or be disintegrated. [She puts on a silver and blue helmet similar to Iron Man's]

(A girl with long dark hair walks out in front of Tony. This is Morgan Stark, Tony and Pepper's daughter. She looks to be about 3 & 4 years of age.)

TONY STARK: Okay, You should not be wearing that, okay? That is part of a special anniversary gift I'm making for Mom. (Takes the helmet off Morgan's head. She emerges out smiling mischievously.)

MORGAN STARK: Okay.

TONY STARK: There you go. Are you thinking about lunch? I can give you a handful of crickets on a bed of lettuce.

MORGAN STARK: No.

TONY STARK: That's what you want. How did you find this?

MORGAN STARK: Garage.

TONY STARK: Really? Were you looking for it?

MORGAN STARK: No. I found it, though.

TONY STARK: You like going to the garage, huh? So does daddy. It's fine, actually. Your mom never wears anything I buy her.

(They start walking towards the house, but Tony notices a black Audi pulling coming to a stop a few meters away. Steve, Nat, and Scott get out of the car. Tony sighs. He is not looking forward to the discussion about to take place.)

SCOTT LANG: (Cut to after Scott's plan has been explained to Tony) Now, we know what it sounds like...

STEVE ROGERS: Tony, after everything you've seen, is anything really impossible?

TONY STARK: Quantum fluctuation messes with the Planck Scale, which then triggers the Deutsch Proposition. Can we agree on that?

(Scott, Steve and Nat all look puzzled. Science is barely any of their fields.)

STEVE ROGERS: (Tony giving a drink to him.) Thank you.

TONY STARK: In Layman's terms, it means you're not coming home.

SCOTT LANG: I did.

TONY STARK: No, you accidentally survived. It's a billion to one cosmic fluke. And now you wanna pull off a... What do you call it?

SCOTT LANG: (Trying to hide his pride) A time heist?

TONY STARK: Yeah, a time heist. Of course, why didn't we think of this before? Oh, because it's laughable? Because it's a pipedream?

SCOTT LANG: The Stones are in the past. We can go back and get them.

NATASHA ROMANOFF: We can snap our own fingers. We can bring everyone back.

TONY STARK: Or screw it up worse than he already has, right?

STEVE ROGERS: I don't believe we would.

TONY STARK: Gotta say, sometimes I miss that giddy optimism. However, high hopes won't help if there's no logical, tangible way for me to safely execute said time heist. I believe the most likely outcome would be our collective demise.

SCOTT LANG: Not if we strictly follow the rules of time travel. That means no talking to our past selves, no betting on sporting events -

TONY STARK: I'm gonna stop you right there, Scott. Are you seriously telling me that your plan to save the universe is based on Back To The Future?

SCOTT LANG: [embarrassed] No.

TONY STARK: Good. You had me worried there. 'Cause that'd be horse shit. That's not how quantum physics works.

NATASHA ROMANOFF: Tony... We have to take a stand.

TONY STARK: We did stand. And yet, here we are.

SCOTT LANG: I know you got a lot on the line. You got a wife, a daughter. But I lost someone very important to me. A lot of people did. [His voice gets louder as he tries to sell his desperation to Tony.] And now, now we have a chance to bring her back. To bring everyone back. And you're telling me that won't even...

TONY STARK: That's right, Scott, I won't even. I got a kid.

[Morgan runs to her dad, who picks her up.]

MORGAN STARK: Mommy told me to come and save you.

TONY STARK: Good job. I'm saved. [Turning to face Cap, Nat and Scott.] I wish you'd come here to ask me something else. Anything else. Honestly, I... I missed you guys, it was... Oh, and table's set for six.

STEVE ROGERS: Tony, I get it. And I'm happy for you, I really am. But this is a second chance. TONY STARK: I got my second chance right here, Cap. I can't roll the dice again. If you don't talk shop, you can stay for lunch.

[We see Cap, Nat and Scott walking back to their car outside Tony's house.]

NATASHA ROMANOFF: He's scared.

STEVE ROGERS: He's not wrong.

SCOTT LANG: Yeah, but I mean, what are we gonna do? We need him. What, are we gonna stop?

STEVE ROGERS: No, I wanna do it right. We're gonna need a really big brain.

SCOTT LANG: (Incredulous, pointing to Tony's house) Bigger than his?

[Cut to a cafe somewhere, we see Bruce Banner, but not the same one that we remember. He looks more... Professor Smart Hulk.]

BRUCE BANNER: Come on, I feel like I'm the only one eating. [Pushing a plate forward] Try some of that. Have some eggs.

SCOTT LANG: I'm so confused.

BRUCE BANNER: [seriously] These are confusing times.

SCOTT LANG: Right. No, no, that's not what I meant.

BRUCE BANNER: [dropping the act] No, I get it. I'm kidding! I know. It's crazy. I'm wearing shirts now.

SCOTT LANG: Yeah! Wh...How? Why?

BRUCE BANNER: Five years ago, we got our asses beaten. Except it was worse for me. Because I lost twice. First, Hulk lost, then Banner lost. Then, we all lost.

NATASHA ROMANOFF: No one blamed you, Bruce.

BRUCE BANNER: I did. For years, I've been treating the Hulk like he's some kind of disease, something to get rid of. But then I started looking at him as the cure. Eighteen months in a gamma lab. I put the brains and the brawn together. And now look at me. Best of both worlds...

[Three children behind Bruce walk up to him tentatively]

GIRL: Excuse me, Mr. Hulk?

BRUCE BANNER: Yes?

GIRL: Can we get a photo?

BRUCE BANNER: 100%, little person. Come on, step up. [Holding out the phone to Scott] You mind?

SCOTT LANG: Oh, yeah.

BRUCE BANNER: Thanks, [To the Children] Say "green"! [The children and Bruce say Green as Scott snaps the photo.]

BRUCE BANNER: Did you get that?

SCOTT LANG: [leaning forward to hand back the phone] Don't you wanna grab one with me? I'm Ant-Man.

SCOTT LANG: They're Hulk fans, they don't know Ant-Man. Nobody does.

BRUCE BANNER: Wait, no, no, he feels bad. No, he wants you to...he wants to...[to one of the boys] You want to take a picture with him, right? [The boy shakes his head vigorously.]

BOY: Stranger Danger.

SCOTT LANG: He's even saying no he doesn't. I get it. I don't want it either.

BRUCE BANNER: But, come on, the kid! But he...but you...

SCOTT LANG: I don't want a picture with them.

BRUCE BANNER: [To the children] He's gonna feel bad. [To Scott] Sorry. They said they'd do it.

SCOTT LANG: I don't want it anymore.

BRUCE BANNER: No, no...you feel bad.

SCOTT LANG: Just take the goddamn phone. [Maybe next time, Scott.]

GIRL: Thank you, Mr. Hulk.

BRUCE BANNER: No, it's great kids. Thank you very much. [Same time with kids] Hulk out!

STEVE ROGERS: Bruce.

BRUCE BANNER: [Awkwardly] Dab!

STEVE ROGERS: Bruce.

BRUCE BANNER: Listen to your Mom. She knows better.

STEVE ROGERS: About we were saying...

BRUCE BANNER: Right. The whole time travel do-over? Guys, it's outside my area of expertise.

NATASHA ROMANOFF: Well, you pulled this off. I remember a time when that seemed pretty impossible time, too.

[The scene cuts to Tony Stark in the kitchen washing dishes after dinner. As he finishes the last of them, stumbles upon a photo of both Stark and Parker, with Parker holding his Stark Internship certificate. Tony finally knows what he's fighting for.]

[Cut to Tony talking to his computer, generating a holographic model of something he's working on.]

TONY STARK: Look at a mod inspiration, let me see what check out. So, recommend one last sim before we pack it in for the night. This time, in the shape of a mobius strip, inverted, please.

F.R.I.D.A.Y: Processing...

TONY STARK: Give me that eigenvalue. That, particle factoring, and a spectral decomp. That will take a second.

F.R.I.D.A.Y: Just a moment.

TONY STARK: And don't worry if it doesn't pan out. I'm just kinda -

F.R.I.D.A.Y: Model rendered.

[In a complete shock of amazement, the render comes back as 99.987% successful. Tony falls back, bewildered by this discovery.]

TONY STARK: Shit!

MORGAN STARK: Shit.

[Morgan, who has been hiding behind him all this time, giggles as she repeats the word Tony just uttered.]

TONY STARK: [Whispering] What are you doing up, little mess?

MORGAN STARK: Shit.

TONY STARK: No, we don't say that. Only Mommy says that word. She coined it, it belongs to her.

MORGAN STARK: Why you up?

TONY STARK: 'Cause I got some important shit going on here. [Morgan gives Tony a taste of the incredulous] What do you think? No, I got something on my mind. I got something on my mind.

MORGAN STARK: Was it Juice Pops?

TONY STARK: Sure was. That's extortion. Great minds think alike. Juice Pops, exactly was on... [Looks back to the model, Then turns back] my mind.

[In Morgan's room]

TONY STARK: You done? Yeah, now you are. [Tony wipes Morgan's lips and pushes her head onto her pillow] That face goes there.

MORGAN STARK: Tell me a story.

TONY STARK: A story... Once upon a time, Maguna went to bed. The end.

MORGAN STARK: [Giggling] That's a horrible story.

TONY STARK: Come on, that's your favorite story. I love you tons. [Kisses Morgan on the forehead.]

MORGAN STARK: I love you 3000.

TONY STARK: [Silently] Wow. [Turns off the lamp] 3000. That's crazy. [Closed the door] Go to bed. Or I'll sell all your toys. Night, night.

[Cut to the living room where Pepper is reading a book sitting on the couch. Tony paces in front of the fireplace.]

TONY STARK: Not that it's a competition, but she loves me 3000. You were somewhere on the low 6 to 900 range. [Pepper scoffs]

TONY STARK: [Absentmindedly] What are you reading?

PEPPER POTTS: Oh, it's just a book on composting.

TONY STARK: [Still absentmindedly] What's new with composting?

PEPPER POTTS: Just -

TONY STARK: I figured it out, by the way.

PEPPER POTTS: You know, just so we're talking about the same thing -

TONY STARK: Time travel.

PEPPER POTTS: [Amazed] What? Wow... That's amazing, and... terrifying.

TONY STARK: That's right.

PEPPER POTTS: We got really lucky.

TONY STARK: Yeah, I know.

PEPPER POTTS: A lot of people didn't.

TONY STARK: No, I can't help everybody.

PEPPER POTTS: It sort a seems like you can.

TONY STARK: Not if I stop. I can put a pin in it right now, and stop.

PEPPER POTTS: Tony, trying to get you to stop has been one of the few failures of my life. [Tony smiles]

TONY STARK: I sometimes feel I should put it in a locked box and drop it at the bottom of a lake... go to bed.

PEPPER POTTS: But would you be able to rest?

[Cut to a lab in the Avengers Compound, we see Bruce fiddling with buttons on a panel. Scott is in his Ant-Man costume in front of his van, with the back open to show the Quantum Tunnel. Nat and Steve are beside Bruce]

BRUCE BANNER: Okay, here we go. Time travel test number one. Scott, fire up the uhhh... the van thing.

[Scott opens the portal]

STEVE ROGERS: Breakers are set, emergency generators are on standby.

BRUCE BANNER: Good. 'Cause if we blow the grid, I don't wanna lose Tiny here in the 1950's. [Scott, Nat and Cap give Bruce a panicked look]

SCOTT LANG: Excuse me?

NATASHA ROMANOFF: He's kidding. [In a hushed tone to Bruce] You can't say things like that!

BRUCE BANNER: Just... It was a bad joke.

NATASHA ROMANOFF: You were kidding, right?

BRUCE BANNER: [Whispering to Nat] I have no idea. We're talking about time travel here. Either it's all a joke, or none of it is. [Loudly and gives Scott a thumbs up] We're good! Get your helmet on, Scott. I'm gonna send you back a week, let you walk around for an hour, then bring you back in 10 seconds. Makes sense?

SCOTT LANG: Perfectly not confusing.

STEVE ROGERS: Good luck, Scott. You got this.

SCOTT LANG: You're right. I do, Captain America.

[Bruce presses a button, and Scott disappears into the Quantum Tunnel.]

BRUCE BANNER: On the count of three. 3... 2... 1!

[Bruce presses a button, and someone in the Ant-Man suit comes back. A teenager in appears out of it.]

TEEN SCOTT LANG: Uh, guys? This...this doesn't feel right.

STEVE ROGERS: What is this?

BRUCE BANNER: What's going on?

NATASHA ROMANOFF: That...who is that?

[He pushes another couple of buttons, trying to fix the problem.]

BRUCE BANNER: Hold on. [Panicking]

NATASHA ROMANOFF: Is that Scott?

TEEN SCOTT LANG: Yes, it's Scott!

[Teen Scott gets sucked in back into the quantum tunnel, and it appears to be an old man in the Ant-Man suit.]

OLD SCOTT LANG: Ow! My back!

STEVE ROGERS: What is this?

BRUCE BANNER: Can I get a little space here.

STEVE ROGERS: Yeah yeah. Can you bring him back?

BRUCE BANNER: I'm working on it! [Tapping the side of the button pad, trying to pull back Scott]

[After a moment, another person appears in front of them. This time, it's a baby in the Ant-Man suit.]

STEVE ROGERS: It's a baby. [seriously?]

BRUCE BANNER: It's Scott.

STEVE ROGERS: As a baby!

BRUCE BANNER: He'll grow.

STEVE ROGERS: Bring Scott back!

BRUCE BANNER: [motioning to Nat] When I say kill the power, kill the power.

NATASHA ROMANOFF: Oh my god. [rapidly walk near to the generator]

BRUCE BANNER: And... Kill it!

[Nat pulls down a lever, and everything shuts down. Scott, the normal Scott, gets spewed back out again.]

SCOTT LANG: Somebody peed my pants.

NATASHA ROMANOFF: Oh thank god.

SCOTT LANG: But I don't know if it was "baby" me or "old" me...Or just "me" me.

BRUCE BANNER: [holds up his his hands in a dramatic way] Time travel!

[Steve says nothing. He simply shakes his head and walks away]

BRUCE BANNER: What? I..I see this as an absolute win!

[We cut to see Steve sitting outside the Avengers Compound, staring at the floor, deep in thought. He looks beat, the only possibility of victory now not an opportunity. He looks up as a deafening noise breaks the silence in the distance. As he looks, we see an Audi R8 speeding towards the entrance. The car pulls over to Cap, but goes a bit too far, then reverses to Cap. We see Tony Stark roll down the window and look at Cap.]

TONY STARK: Why the long face? Let me guess: He turned into a baby.

STEVE ROGERS: Among other things, yeah. What are you doing here?

[He gets out of the car, and walks around to the back.]

TONY STARK: [Ignoring Steve's question] That's the EPR Paradox. Instead of pushing Lang through time, you might've wound up pushing time through Lang. It's tricky. Dangerous. Somebody should've cautioned you against it.

STEVE ROGERS: You did.

TONY STARK: Oh, did I? [acting like he did not; there's the Tony we know] Thank God I'm here. Regardless, I fixed it. [He holds up his right hand, with a device on it] A fully functioning Time-Space GPS. I just want peace. [Makes peace sign with his fingers] Turns out, resentment is corrosive, and I hate it.

STEVE ROGERS: Me too.

TONY STARK: We got a shot at getting these stones, but I gotta tell you my priorities: Bring back what we lost? I hope, yes. Keep what I got? I have to, at all costs. And... maybe not die trying will be nice.

STEVE ROGERS: Sounds like a deal. [Steve reaches out his hand to shake in the deal, in which Tony replies in the same way.]

[Tony reaches back into his trunk to pull something else out, Captain America's Shield. He makes to give it to Steve, who hesitates.]

STEVE ROGERS: Tony...

TONY STARK: Why? He made it for you. [referring to Howard Stark] Plus, honestly I have to get it out of the garage before Morgan takes it sledding.

[Steve fits his arm into the shield.]

STEVE ROGERS: Thank you, Tony.

TONY STARK: Will you keep that a little quiet? Didn't bring one for the whole team. [Hesitates] ...We are getting the whole team, yeah?

STEVE ROGERS: We're working on that right now.

[Cut to the Benatar landing in the yard of the Avenger's Compound. Scott is sitting having a Taco and some Nachos at a bench, and everything falls out of the taco as the Benatar lands. Nebula and Rocket walk out of the ship, and past Scott.]

ROCKET: Hey, humie! Where's Big Green?

SCOTT LANG: Uh, Kitchen, I think. [To himself as he sees Nebula] That's awesome.

NEBULA: [into an earpiece] Rhodey, careful on re-entry. There's an idiot on the landing zone.

[She walks away. Moments later, just as Scott is getting back to his senses, Rhodey lands right in front of him without warning. This time Scott is so surprised, he drops the whole taco.]

SCOTT LANG: Oh, God!

RHODEY: What's up, regular sized man?

[As Rhodey walks away, Bruce walks out of the Compound. Seeing that Scott dropped his lunch, he hands two tacos from his own lunch to Scott. Scott takes it while giving Bruce a puzzling look at this act of kindness.]

[Song "My Supersonic Ship" plays in the background. Cut to Bruce sitting at the back of a Utility car as they traverse the green countryside of Norway. They pass a sign labelled "WELCOME TO NEW ASGARD, PLEASE DRIVE SLOWLY.". They stop at a small town on a port. Bruce and Rocket get out of the car, and look around at the remaining Asgardians, living like normal humans at a port.]

ROCKET: Kind of a step down from a golden palace and magic hammers and whatnot.

BRUCE BANNER: Hey, have a little compassion, pal. First they've lost Asgard, then half the people. They're probably just happy to have a home. [Bruce spots Valkyrie looking over at him, and heads over to her.]

VALKYRIE: You shouldn't have come!

BRUCE BANNER: Ah, Valkyrie! Great to see you, Angry Girl.

VALKYRIE: [Noticing Bruce's change of appearance] I think I liked you better either of the other ways.

BRUCE BANNER: [motioning to Rocket] This is Rocket.

ROCKET: How you doin'?

VALKYRIE: [Eyeing Rocket] He won't see you.

BRUCE BANNER: That bad, huh?

VALKYRIE: We only see him once a month, when he comes for... [looking over to a pile of kegs of stout and other beer on the side] ... supplies.

BRUCE BANNER: It's that bad.

VALKYRIE: Yeah.

[Cut to Rocket opening a door, and him and Bruce walking through it.]

ROCKET: [Grimacing at the smell] What the... Woo! Something died in here.

BRUCE BANNER: Hello? Thor?

THOR: [From another room.] Are you here about the cable?

[He walks into view, and the audience's jaw drops. Thor, who is shirtless, has definitely put on more than a couple of pounds since we saw him last.]

THOR: The Cinemax ran out about two weeks ago, and the sports were all kind of fuzzy. [He grabs a beer]

BRUCE BANNER: Thor?

THOR: [He notices Bruce and Rocket standing there. He cracks into joy.] BOYS! Oh my God! Its so to see you! [To Rocket, trying to hug him] Come here, you little rascal! [growling]

ROCKET: No, I'm good. I'm good. That's not necessary.

THOR: Hulk, you know my friends, Miek, Korg, right?

[We see Miek and Korg sitting on a couch, PlayStation controller in hand, playing Fortnite and eating chips.]

KORG: Hey boys!

BRUCE BANNER: Hey guys, long time no see.

KORG: Beer's on the bucket. Feel free to log on to the Wi-Fi. No password, obviously. [He goes back to his game.] Thor, he's back. The kid on the TV that called me a dickhead again.

THOR: NoobMaster.

KORG: Yeah, NoobMaster69 called me a dickhead.

[Thor walks over to Korg, takes his headphones, and speaks into the mic.]

THOR: NoobMaster. Hey, it's Thor again. You know, the God of Thunder? Listen, buddy. If you don't log off this game immediately, I'm gonna fly over to your house, come down to that basement you're hiding in, rip off your arms and SHOVE THEM UP YOUR BUTT! Oh, that's right, go cry to your father, you little weasel!

KORG: [Thor brings his headphones back] Thank you, Thor.

THOR: Let me know if he bothers you again, okay?

KORG: Thank you very much. I will.

THOR: So you guys want a drink? What are you drinking? We have beer, tequila, all sorts of things.

[Thor uses Stormbreaker to open a bottle of beer and starts drinking. Bruce walks to him and places a hand on his shoulder]

BRUCE BANNER: Buddy, you all right?

THOR: Yes, I'm fine! Why, don't I look all right?

ROCKET: [Concerned] You look like melted ice cream.

THOR: [Laughs] So, what's up?

BRUCE BANNER: We need your help. There might be a chance we could fix everything.

THOR: What, like the cable? [burps] Cause that's been driving me bananas for weeks.

BRUCE BANNER: Like Thanos.

[Thor's smile slowly disappears. He puts a shaky hand on Bruce's shoulder and points at him.]

THOR: Don't say that name.

[Korg stands up and takes off his headphones]

KORG: Um, yeah. We don't actually say that name in here.

BRUCE BANNER: [quietly] Please take your hand off me. [He brushes away Thor's hand] Now, I know that... guy might scare you.

THOR: Why would I be? Why would, why would I be scared of that guy? I'm the one who killed that guy, remember? Anyone else here killed that guy? Nope. Didn't think so. Korg, why don't you, tell everybody who chopped Thanos' big head off.

[Thor walks off screen]

KORG: Umm... Stormbreaker?

THOR: Now, who's swingin' Stormbreaker?

BRUCE BANNER: I get it. You're in a rough spot, okay? I've been there myself. You wanna know who helped me out of it?

THOR: I don't know. Is it... Natasha?

BRUCE BANNER: It was you. You helped me.

THOR: [walks over and looks out the window and points, still holding his beer] Why don't you ask the, Asgardians down there, how much my help was worth. [he drops onto the sofa] The ones that are left, anyway.

BRUCE BANNER: I think we can bring them back.

THOR: Stop. stop, okay? [opens a packet on M&Ms] I know you think I'm down here wallowing in my own self-pity, waiting to be rescued and and saved. But I'm fine, okay? We're fine, aren't we? [The camera cuts to Korg and Miek eating pizza and playing once more]

KORG: Nah, all good here, mate.

[Cuts back to Thor]

THOR: So, whatever it is that you're offering, we're not into it, don't care, couldn't care less. Goodbye.

BRUCE BANNER: [from offscreen] We need you, pal.

[Thor shakes his head and ignores Bruce.]

ROCKET: [Crossing his arms] There's beer on the ship.

THOR: [pauses, but doesn't look up then puts the bottle down] What kind?

[SCREEN TITLE: TOKYO]

[After seeing a Quinjet flown to the capital, the scene cuts to a nightclub in the city of Tokyo, as the entertainment still intact, loads of dead bodies of yakuza members are seen as a hooded figure throws a shuriken at another yakuza member firing at him. They are shouting something in Japanese, as two more men come out of nowhere and draw out their UZIs.]

THUG #1: あいつだ! アキヒコさんを！(Romanized: Aitsu da! Akihiko-san wo!) (Translated: It's him! He's after Akihiko!)

[Both thugs fire their SMGs as both got slain by a shuriken. A yakuza member wielding a katana charges at him in the stairs, but is immediately overthrown and slain by the Ronin. Ronin then fights another sword-wielding thug, which is thrown outside the glass, killing him. The camera passes through two more buildings as the fighting ensues with different screams, shouts, more havoc inside, and gunfire. A man in a dark raincoat jumps through the glass window, with the Ronin doing the same, as both of them lands in a dark alleyway. The man in the raincoat turns to the Ronin, who just landed after him. It was Akihiko, the leader of a yakuza gang, whose head being hunted by the Ronin himself.]

AKIHIKO: てめえ なぜこんなことをする? 俺たちてめえになにもしてねぇだろ！(Romanized: Temē naze konna koto wo suru? Oretachi temē ni nani mo shitenē daro!) (English: Why are you doing this? We never did anything to you!)

RONIN: [As he draws out his katana and reversibly wields it.]地球の半分 サノスにやられた... お前はなぜ無事なの…(Romanized: Chikyū no hanbun sanosu ni yarareta... Omae wa naze buji nano...) (English: You survived... Half of the planet didn't. They got Thanos... you get me.)

[Both sides engaged in combat as Ronin pierces his stomach, but doing only minor damage to him.]

RONIN: [Also in Japanese] お前はもう十分殺しただろ(Romanized:Omae mo jūbun korshita daro) You're done hurting people.

AKIHIKO: [Japanese]俺らがだと? 気でも狂ったか! (Orera ga dato? Ki demo kurutta ka!) [he gestures to all the scattered bodies of his henchmen and chuckles] (English: WE hurt people? You're crazy!)

[Akihiko charges, which Ronin immediately blocks. Both clang swords for two seconds, seeming that the yakuza leader has the upper hand, but Ronin punches him in the face, and sword-points him to his throat, in which Akihiko is temporarily petrified.]

[He lowers down his sword as if he is about to surrender, but charges again at Ronin. Both swords clashed as Ronin slices his stomach, losing stamina, but gaining more strength from his rage.]

AKIHIKO: [in a Gatotsu-like sword stance] 死ね! (Romanized: Shine!) (English: DIE!)

[They both draw their katanas and the sword-fight continues. Ronin is clearly a better fighter, but Akihiko is also quite experienced. They clang swords, and for a second, it looks like Akihiko has the upper hand swinging at Ronin's neck. Ronin, however, ducks and slides under the katana, and slices Akihiko in the stomach as he slides past. Akihiko, now fatally injured, drops his katana.]

AKIHIKO: 待て! 助けてくれ! お前に何でもやる! 何が欲しい? (Romanized: Mate! Tasukete kure! Omae ni nan demo yaru! Nani ga hosī? (English: Wait! Help me! I'll give you anything! What do you want?)

RONIN: [Raising his katana, in English] What I want... You can't give me.

[He thrusts the blade downwards into Akihiko's stomach. The body of the Japanese falls to the ground. Ronin grabs the sword, and wipes it on his gauntlet, ridding it of the blood of Akihiko. He notices someone behind him, and grabs his mask, and slides it off his head, revealing himself as Clint Barton, who has gone on a rampage since the decimation. He turns around and looks at Nat, who is standing behind him, holding an umbrella, and in casual clothes.]

CLINT BARTON: You shouldn't be here.

NATASHA ROMANOFF: Neither should you.

CLINT BARTON: I've got a job to do.

NATASHA ROMANOFF: Is that what you're calling this? Killing all these people isn't gonna bring your family back.

[Clint starts to look emotional, on the verge of crying.]

NATASHA ROMANOFF: We found something. A chance, maybe...

CLINT BARTON: [Now openly crying] Don't...

NATASHA ROMANOFF: Don't what?

CLINT BARTON: ...don't give me hope.

NATASHA: I'm sorry I couldn't give it to you sooner.

[We cut to the Avenger's Compound, where we see Thor in a hoodie, drinking a beer and walking through the compound's Testing Chamber. Tony is also there, walking in from behind Thor.]

TONY STARK: [To Thor] Drifting left. On the side there, Lebowski. [To Rocket, who's working on something underneath a glass platform] Ratchet, How's it going?

ROCKET: It's Rocket. Take it easy. You're only a genius on Earth, pal.

[Cut to a side room, where we see Scott, Bruce, Steve and Rhodey talking. Scott is in a white and red suit, similar to the Ant-Man suit.]

RHODEY: Time travel suit? Not bad.

SCOTT LANG: [Response to Hulk touching the suit and something red in a glass tube] Hey, hey, hey! Easy, easy!

BRUCE BANNER: I'm being very careful.

SCOTT LANG: No, you're being very Hulky.

BRUCE BANNER: I'm being careful.

SCOTT LANG: [Holding up the red glass bottle] These are Pym Particles, alright? And ever since Hank Pym got snapped out of existence, this is it. This is what we have. We're not making any more.

RHODEY: Scott, calm down.

SCOTT LANG: Sorry. We've got enough for one round trip each. That's it. No do-overs. Plus two test runs. [He accidentally presses a button, and shrinks, and then grows back to his normal size.] One test run.

[Cut to the testing chamber, where we see Steve, Nat, Tony, Scott, Bruce, Rhodey and Nebula standing at a control panel, presumably controlling the glass platform.]

SCOTT LANG: All right. I'm not ready for this.

CLINT BARTON: I'm game. I'll do it.

[Clint walks in wearing the suit Scott was moments before, the Quantum Suit.]

BRUCE BANNER: Clint, now you're gonna feel a little discombobulated from the chronoshift. Don't worry about it.

[Clint taking position on the platform]

RHODEY: Wai-Wait a second, let me ask you something. If we can do this, you know, go back in time, why don't we just find baby Thanos, you know, and... [he makes a hand gesture suggesting that they strangle baby Thanos with a rope.]

BRUCE BANNER: [Disgusted] First of all, that's horrible...

RHODEY: [In a tone that says it's what we're all thinking.] It's Thanos.

BRUCE BANNER: ...And secondly, time doesn't work that way. Changing the past doesn't change the future.

SCOTT LANG: Look, we go back, we get the stones before Thanos gets them... Thanos doesn't have the stones. Problem solved.

CLINT BARTON: Bingo.

NEBULA: That's not how it works.

CLINT BARTON: Well, that's what I heard.

BRUCE BANNER: What? By who? Who told you that?

RHODEY: [counting with his fingers] Star Trek, Terminator, TimeCop, Time After Time -

SCOTT LANG: Quantum Leap -

RHODEY: A Wrinkle in Time, Somewhere in Time -

SCOTT LANG: Hot Tub Time Machine -

RHODEY: Hot Tub Time Machine. Bill and Ted's Excellent Adventure. Basically, any movie that deals with time travel.

SCOTT LANG: Die Hard? No, it's not one...

RHODEY: This is known.

BRUCE BANNER: I don't know why everyone believes that, but that isn't true. Think about it: If you travel to the past, that past becomes your future. And your former present becomes the past. Which can't now be changed by your new future...

NEBULA: Exactly.

SCOTT LANG: So... Back To The Future's a bunch of bullshit?

BRUCE BANNER: [Turning to Clint] Alright, Clint. We're going in 3... 2... 1!

[A helmet similar to Ant-Man's but white and more visible face pops on Clint's head, and he goes quantum. Clint flies through the quantum realm and into an opening. He grows back to normal size, but he's at a different place, and seemingly, time.]

[Clint look around his family home, which unlike at the start of the movie, looks a lot more alive. The helmet pops off of Clint's head, and he looks around bewildered. He sees a baseball glove on the ground, presumably belonging to one of his sons, and picks it up. We hear a noise from inside the house, someone who Clint hasn't seen for five years.]

LILA BARTON: [offscreen] Cooper? Where are my headphones?

CLINT BARTON: [murmuring] Lila? [The device on his hand starts beeping, signalling the end of this visit] Lila! [He dives for the door, but only manages to open it before he shrinks back to go back to the future.]

[We hear footsteps coming towards where Clint has just disappeared, and we see Lila coming down the stairs in Avril Lavigne-like clothing, looking around, puzzled]

LILA BARTON: Yeah, Dad? [She looks around] Dad?

[Lila goes back upstairs, deciding that it was just nothing]

[Cut to the Avengers Compound, we see Clint rematerialise on the glass platform, breathing heavily and sitting on the platform.]

NATASHA ROMANOFF: Hey, hey. Look at me. You okay?

CLINT BARTON: [Holding up the baseball glove and throw it to Stark] Yeah, it worked. It worked.

[Scene cuts to the Avengers in a room with some hologram displays, showcasing each of the six Infinity Stones, sitting around a table. Tony, Steve and Bruce are pacing at the front, clearly leading the planning of the mission.]

STEVE ROGERS: Okay, so the "how" works. Now we gotta figure out the when and the where. Almost all of us has had an encounter with at least one of the six Infinity Stones.

TONY STARK: Well I'd substitute the word encounter for damn well near been killed by one of the six Infinity Stones.

SCOTT LANG: I haven't, I don't even know what the hell you're all talking about.

BRUCE BANNER: Regardless, we only have enough Pym Particles for one round trip each, and these stones have been in a lot of different places throughout history.

TONY STARK: Our history. So, not a lot of convenient spots to just drop in.

CLINT BARTON: Which means we have to pick our targets.

TONY STARK: Correct.

STEVE ROGERS: Let's start with the Aether. Thor, what do you know?

[We see Thor sitting on a chair with his sunglasses on. It is impossible to tell whether he is awake or asleep.]

NATASHA ROMANOFF: Is he asleep?

RHODEY: No, I'm pretty sure he's dead.

[Thor wakes up]

THOR: Where to start? Umm... The Aether, first, is not a stone, someone called it a stone before. It's more of a... an angry sludge thing, so... someones gonna need to amend that. Here's an interesting story though, many years ago... My grandfather had to hide the stones from the Dark Elves... [He wiggles his fingers to imitate a spooky ghost] Wooooh, scary beings. So Jane, [An image of Jane Foster pops up on the screen] Oh, there she is. That's Jane... She's... an old flame of mine... She... she stuck her hand inside a rock this one time... and then the Aether stuck itself inside her... And, she became very, very sick. So I had to take her to Asgard, which is where I'm from. And we had to try and fix her. We were dating at the time, you see. I got to introduce her to my Mother... who's dead, [Thor starts to look broken, and seems on the verge of tears] and oh you know, Jane and I aren't even dating anymore, these things happen though you know, nothing last forever, [Tony starts to push him back to his chair] I'm not done yet, the only thing permanent in life is impermanence.

TONY STARK: Awesome. Eggs? Breakfast?

THOR: I'd like a Bloody Mary, thank you.

[Cut to the Avengers sitting around a table, eating a meal, and Rocket is pacing on the table in front of everyone.]

ROCKET: Quill said he stole the Power Stone from Morag.

SCOTT LANG: Is that a person?

ROCKET: Morag's a planet. Quill was a person.

SCOTT LANG: A planet? Like in outer space?

ROCKET: Oh, look. It's like a little puppy, all happy and everything. [Imitating talking to a puppy] Do you wanna go to space? You wanna go to space, puppy? I'll get you to space.

[Cut to everyone facing Nebula in the planning room, and Nat writing notes for their plan.]

NEBULA: Thanos found the Soul Stone on Vormir.

NATASHA ROMANOFF: [In a business-like tone] What is Vormir?

NEBULA: A dominion of death, at the very center of Celestial existence. It's where... Thanos murdered my sister.

[Nat looks up, and an awkward silence falls upon the room. She writes what Nebula has just said, and Scott makes to break the awkward moment.]

SCOTT LANG: Not it.

[We see Tony and Nat lying on a table surrounded by papers, and Bruce lying down on the floor. The Time Stone pops up on the display.]

NATASHA ROMANOFF: That Time Stone guy...

BRUCE BANNER: Doctor Strange.

NATASHA ROMANOFF: Yeah, what kind of doctor was he?

TONY STARK: Ear-nose-throat meets rabbit from a hat.

BRUCE BANNER: Nice place in the village, though.

TONY STARK: Yeah. Sullivan Street.

BRUCE BANNER: Hmm... Bleecker.

NATASHA ROMANOFF: Wait, he lived in New York?

TONY STARK: No. He lived in Toronto. Were you even paying attention?

NATASHA ROMANOFF: Guys, if you pick the right year, there are three stones in New York.

BRUCE BANNER: [Sitting up in surprise] Shut the front door.

[Shot cuts to the holograms displaying the different location, the Soul and Power Stones in space in 2014. the Reality Stone in Asgard, 2013; and the Space, Mind, and Time Stones in New York City, 2012]

STEVE ROGERS: All right. We have a plan. Six Stones, three teams. One shot.

[He and the other Avengers walk up and look at the screens determinedly. The shot cuts to the Avengers walking in a file to the Quantum Time machine, wearing the Quantum Suits, albeit with some minor differences for different people. Rhodey has a bulkier repaint of the War machine armour.]

STEVE ROGERS: Five years ago, we lost. All of us. We lost friends... We lost family... We lost a part of ourselves. Today, we have a chance to take it all back. You know your teams, you know your missions. Get the stones, get them back. One round trip each. No mistakes. No do-overs. Most of us are going somewhere we know. But it doesn't mean we should know what to expect. Be careful. Look out for each other. This is the fight of our lives. And we're gonna win. [Tony gives Steve a look] Whatever it takes. Good luck.

ROCKET:[Refers to Steve's speaking] He's pretty good at that.

SCOTT LANG: Right? [Looks very excited]

TONY STARK: All right. You heard the man. Stroke those keys, jolly green.

BRUCE BANNER: Tractors engaged.

ROCKET: [Addressing the shrunk Benatar in Clint's hand] You promise to bring that back in one piece, right?

CLINT BARTON: Yeah, yeah, yeah, yeah. Okay. I'll do my best.

ROCKET: As promises go, that was pretty lame.

NATASHA ROMANOFF: [Smiling excitedly] See you in a minute.

[They all shrink and enter the Quantum Realm, and they all split at different intervals, going to a different place at a different time in history.]

[The First Group which has Tony, Steve, Bruce, & Scott; travels to New York in 2012. A previous stock shot of the Chitauri snarling and the iconic circle take around our six Original Avengers assembling before panning over to a side street where Scott, Steve, Banner and Tony materialise.]

STEVE ROGERS: All right, we all have our assignments. Two Stones uptown, one Stone, down. Stay low. Keep an eye on the clock.

[2012 Hulk passes by them, smashing everything in his way. Bruce puts his hand on his face, embarrassed.] STEVE ROGERS: Feel free to smash a few things along the way.

BRUCE BANNER: I think it's gratuitous, but whatever.

[Present Bruce pretends to smash things in a sarcastic way. He tears his shirt off, and walks over to a car. He lightly punches the car, making a small dent, all the while making growling noises. He picks up a motorbike and throws it at a wall, wincing as it hits the wall.]

[Shot cuts to the Roof of the Sanctum Sanctorum where 2012 The Ancient One protects it. Bruce tries to enter through the roof before noticing her.]

THE ANCIENT ONE (2012): I'd be careful going that way. We just had the floors waxed.

BRUCE BANNER: I'm looking for Doctor Strange.

THE ANCIENT ONE (2012): You're about... five years too early. Stephen Strange is currently performing surgery about twenty blocks that way. What do you want from him?

BRUCE BANNER: That, actually.

[He points towards the Eye of Agamotto where the Time Stone is kept. The Ancient One (2012) looks at it]

THE ANCIENT ONE (2012): Ah! I'm afraid not.

BRUCE BANNER: Sorry, but I wasn't asking.

THE ANCIENT ONE (2012): You don't wanna do this.

BRUCE BANNER: Ah, you're right, I don't. [He makes a grab at the Eye of Agamotto] But I need that stone, and I don't have time to beat it-

[The Ancient One (2012) pushes Bruce's astral form out of his body. Bruce who's is now in astral form looks at The Ancient One horrified.]

THE ANCIENT ONE (2012): Let's start over, shall we?

[Cut to an aerial shot of Asgard in 2013.Then to the prison in Asgard, where we see the Loki from The Dark World, sitting in his cell. Without him noticing, Rocket and Thor creep by, past the cell. They stop at a pillar a few metres away room of where Jane Foster is]

THOR: That's Jane.

ROCKET: All right. Here's the deal, Tubby: You're gonna charm her and I'm gonna poke her with this thing, [He holds up a device.] and extract the Reality Stone and get gone, lickety-split.

THOR: I'll be right back, okay? There's a wine cellar, that's just down there. My father used to have this huge barrel of Aakonian ale. I'll see if the scullery has a couple of to-go cups...

ROCKET: Hey! Hey! Aren't you drunk enough already?

[A door opens, Thor and Rocket both try to hide. We then see ladies along with Frigga (2013) walking. Thor sees his mother.]

ROCKET: Who's the fancy broad?

THOR: It's my Mother. She dies today.

ROCKET: Oh. That's today?

THOR: I can't do this. I can't do this. I shouldn't be here. I shouldn't have come.This was a bad idea.

ROCKET: Come here. [Standing in front of him]

THOR: No, no, no. I think I'm having...I'm having a panic attack. I shouldn't be here...this is...this is a bad-

ROCKET: Come here. Right here.

[Rocket slaps Thor in the face.]

ROCKET: You think you're the only one who lost people? What do you think we're doing here? I lost the only family I ever had. Quill, Groot, Drax, the chick with the antenna, all gone. Now, I get you miss your Mom. But she's gone. Really gone. And there are plenty of people who are only kinda gone. But you can help them. So is it too much to ask that you brush the crumbs outta your beard, make schmoopy talk to Pretty Pants, and when she's not looking, suck out the Infinity Stone and help me get my family back?

THOR: Okay.

ROCKET: Are you crying?

THOR: No...Yes!

ROCKET: Get it together! You can do this. You can do this. All right?

THOR: Yes, I can.

ROCKET: Good.

THOR: I can do this. I can do it, I can't do this.

[Thor runs away.]

ROCKET: Alright, Heartbreaker. She's alone. This is our shot. [He turns back to where Thor was moments ago] Thor? Thor! Aaagh!!!

[Cut to Morag in 2014, where we see Rhodey getting off the Benatar as it lands.]

RHODEY: Alright. Bring it down low. Right on that line. That's it. Down, down.

CLINT BARTON: Hey, can we hurry it up?

NATASHA ROMANOFF: Guys, chop-chop. Come on. We're on a clock.

[Nebula walks out of the ship, apparently having directed it to its next destination.

RHODEY: All that, is really helpful. [Hugging Natasha] Take care, okay?

NATASHA ROMANOFF: Yeah.

RHODEY: Take that stone and come back. No messing around.

CLINT BARTON: [To Rhodey] Hey. You got this.

RHODEY: Let's get it done. Yes, sir.

NATASHA ROMANOFF: [Walking with Clint back into the ship] See you back.

RHODEY: You guys watch each other's six.

[Clint and Nat look back and just smile.]

CLINT BARTON: Yeah.

[They walk back into the ship, and the hatch closes. The ship takes off and speeds out of the atmosphere of Morag.]

NEBULA: The coordinates for Vormir are laid in. All they have to do is not fall out.

[In the Benatar, Clint and Nat are sitting at the front of the ship. The ship takes a jump through space and speeds up tremendously. Nat and Clint look at each other.]

CLINT BARTON: It's a long way from Budapest.

[Natasha just laughs. Back to Morag, where Rhodey and Nebula are standing where we left them.]

RHODEY: Okay, so, uhh... We just wait around for this Quill guy to show up and then he leads us to the Power Stone, is that it?

NEBULA: [Looking around] Let's take cover. We're not the only ones in 2014 looking for the stones.

RHODEY: Wait a minute, what are you talking about right now? Who else is looking for these stones?

NEBULA: My father, my sister... and me.

RHODEY: And you? Where are you right now?

[Cuts to a scene of Gamora (2014) and Nebula (2014) fighting some Korbinite soldiers.]

GAMORA (2014): [Helping Nebula up] You're welcome.

NEBULA (2014): I didn't ask for your help.

GAMORA (2014): And yet, you always need it. [Nebula (2014) laughs and Gamora's hand.] Get up. Father wants us back on the ship.

NEBULA (2014): Why?

GAMORA (2014): He's found an Infinity Stone.

NEBULA (2014): Where?

GAMORA (2014): On a planet called Morag.

NEBULA (2014): Father's plan is finally in motion.

GAMORA (2014): One stone isn't six, Nebula.

NEBULA (2014): It’s a start.

GAMORA (2014): If he gets all of them...

[Thanos (2014) arrives, honking badass double-bladed sword in tow and healthy coating blood of his armour.]

THANOS (2014): Ronan's located the Power Stone. I'm dispatching you to his ship.

GAMORA (2014): He won't like that.

THANOS (2014): His alternative is death, then. [Thanos wipes his double-bladed sword] Ronan's obsession clouds his judgement.

NEBULA (2014): We will not fail you, Father.

[Gamora (2014) rolls her eyes]

THANOS (2014): No, you won't.

NEBULA (2014): I swear...I will make you proud.

[Nebula (2014) is suddenly in pain and opens up future Nebula's memories.]

RHODEY (Memory): We just, wait around for this Quill guy to show up, and then he leads us to the Power Stone, is that it?

NEBULA (Memory): Let's take cover. We're not the only ones in 2014 looking for the stones.

[Nebula (2014) shuts off the memory]

GAMORA (2014): Who was that?

NEBULA (2014): I don't know...My head is splitting...I don't know...

GAMORA (2014): Her synaptic drive was probably damaged in battle.

[Thanos walks towards Nebula and brings his blade to her throat.]

THANOS (2014): Shhh... (pointing to Nebula) Bring her to my ship.

[Cut to present Tony Stark flying around Stark Tower in the Mark 85. He scans the interior of the tower, and sees the original Avengers apprehending Loki, the backside of the iconic shot of Hawkeye pointing the bow at Loki's face while the Avengers surround him.]

TONY STARK: Got to hustle, Cap. Things look like they're just about wrapped up here. [Cut to Steve in Stark Tower, walking towards the elevator.]

STEVE ROGERS: Got it. I'm approaching the elevator now.

LOKI (2012): If it's all the same to you... I'll have that drink now.

TONY STARK (2012): All right, get him on his feet. We can all stand around posing up a storm later. By the way, feel free to clean up.

TONY STARK: Uh, Mr. Rogers. I almost forgot that that suit [A shot of Cap walking around in his 2012 suit] did nothing for your ass.

STEVE ROGERS: No one asked you to look, Tony.

TONY STARK: [whispers] It's ridiculous.

SCOTT LANG: I think you look great, Cap. As far as I'm concerned, that's America's ass. [Does a patriotic salute.]

NATASHA ROMANOFF (2012): Who gets the, uh, magic wand?

TONY STARK (2012): STRIKE team's coming to secure it.

[A Hydra team including Rumlow and Sitwell enter, known at this time as a part of SHIELD.]

SITWELL (2012): We can take that [Taking Loki's Scepter from 2012 Natasha] off your hands.

NATASHA ROMANOFF (2012): By all means. Careful with that thing.

CLINT BARTON (2012): Unless you want your mind erased. And not in a fun way.

SITWELL (2012): We promise to be careful.

SCOTT LANG: Who are these guys?

TONY STARK: They are SHIELD...Well, actually Hydra. But, we didn't know that yet.

SCOTT LANG: Seriously, you didn't? I mean...they look like bad guys.

TONY STARK: You're small, but you're talking loud.

STEVE ROGERS (2012): On my way down to coordinate search and rescue.

LOKI (2012): [Transforming into Steve for a second in imitation] On my way down to coordinate search and rescue! [Transforming back] I mean, honestly! How do you think you'll be...

THOR (2012): [Slapping on a device on Loki's mouth to make him quiet] Shut up.

TONY STARK: All right, you're up, little buddy. [Looking at the briefcase with the Tesseract] There's our stone.

SCOTT LANG: [Lying down on Tony's shoulder] Alright. Flick me.

[Tony flicks Scott onto his 2012 self, right into his beard. 2012 Tony then scratches his beard, dropping present Scott onto 2012 Tony's reactor.]

[All of the 2012 Avengers get in an elevator. Hulk makes to follow, but finds the elevator full.]

HULK (2012): Move.

THOR (2012): Whoa!

TONY STARK (2012): Whoa, whoa. Hey! Buddy. What do you think? Maximum occupancy has been reached.

THOR (2012): Take the stairs.

TONY STARK (2012): Yeah. [Hulk draws his fist back right as the elevator door closes] Stop. Stop!

[He follows through with the punch, making a dent in the wall right where the door was.]

HULK (2012): [Pissed] Take the stairs! Hate the stairs!

TONY STARK: All right, Cap. I got our scepter in the elevator just passing the 80th floor.

STEVE ROGERS: On it. Head to the lobby.

TONY STARK: Alright. I'll see you there.

[scene cuts to HYDRA agents in the elevator]

SITWELL (2012): Evidence secure. We're en route to Dr. List. No. No hitches at all, Mr. Secretary.

[Elevator opens and HYDRA agents sees Steve. Steve walks in and hits the button to continue down.]

SITWELL (2012): Captain. I thought you were coordinating search and rescue?

STEVE ROGERS: Change of plans.

RUMLOW (2012): Hey, Cap.

STEVE ROGERS: Rumlow. [everyone starts getting suspicious and has their guard up] I just got a call from the Secretary. I'm gonna be running point on the scepter.

SITWELL (2012): Sir? I don't understand.

STEVE ROGERS: We got word there may be an attempt to steal it.

RUMLOW (2012): Sorry, Cap. I can't give you the scepter.

SITWELL (2012): I'm gonna have to call the Director.

STEVE ROGERS: That's okay. Trust me. [Steve leans over to Sitwell's ear.] Hail Hydra.

[Everyone is surprised, Steve walks out of the elevator with the scepter and a smile. Cut to the building's stairwell. The Hulk looks down at the many stairs below him.]

HULK (2012): [Angrily] So many stairs!

[Cut to the lobby. The 2012 Avengers start to make their way out of the building. Tony and Scott eye them undercover.]

TONY STARK: Thumbelina, do you copy? I've got eyes on the prize. It's go-time.

SCOTT LANG: Bombs away. [Sliding down to Tony's Arc Reactor] Is... is that Axe body spray?

TONY STARK: Yeah, I had a can just for emergencies. Relax. Can we focus, please?

SCOTT LANG: I'm going inside you. Now.

ALEXANDER PIERCE (2012): May I ask you where you're going?

THOR (2012): To lunch and then Asgard. I'm sorry, you are?

TONY STARK (2012): Alexander Pierce. He's the man, one of the folks behind Nick Fury.

ALEXANDER PIERCE (2012): My friends call me Mr. Secretary. I'm gonna have to ask you to turn that prisoner over to me.

THOR (2012): Loki will be answering to Odin himself.

ALEXANDER PIERCE (2012): Oh, he's gonna answer to us. Odin can have what's left. And I'm gonna need that case, that's been SHIELD property for over 70 years.

HYDRA AGENT: Hand over the case, Stark.

TONY STARK: [To present Scott through radio as he inhales sharply] All right, move it, Stuart Little. Things are getting dicey up here. Let's go.

TONY STARK(2012): I'm not gonna argue who's got the higher authority here, all right?

SCOTT LANG: You promise me you won't die?

TONY STARK: You're only giving me a mild cardiac dysrhythmia.

SCOTT LANG: That doesn't sound mild.

ALEXANDER PIERCE (2012): I need the case.

TONY STARK (2012): I know you got a lotta pull. I'm just saying...

ALEXANDER PIERCE (2012): Okay. Then give me the case.

TONY STARK: Do it, Lang!

TONY STARK (2012): Get your hands off!

TONY STARK: Window's closing. Pull my pin!

SCOTT LANG: Here goes!

[Ant-Man pulls off Stark 2012's reactor, and Tony (2012) drops the case]

ALEXANDER PIERCE (2012): Stark?

THOR (2012): Stark!

[Stark 2012 falls down to the ground]

ALEXANDER PIERCE (2012): Look, he's convulsing. Give him air! Medic!

TONY STARK: MEDIC! You guys, some help!

ALEXANDER PIERCE (2012): Stark, you--- your chest machine?

[Ant-Man pushes the case, Loki looks at case, Tony Stark grabs the case.]

TONY STARK: Good job. Meet me in the alley. I'm gonna grab a quick slice.

[Suddenly, Hulk 2012 pushes Tony to the ground and the Tesseract slides to Loki]

HULK (2012): NO STAIRS!!!!

[Everyone runs from Hulk's rampage, Loki 2012 grabs the Tesseract and teleports it away.]

THOR (2012): You'll be fine, Stark. Stay with us! I'll try something, okay? I have no idea if it's gonna work.

[Thor 2012 uses the Mjolnir as the defibrillator on Tony Stark 2012]

THOR (2012): YES!

TONY STARK (2012): That worked a treat. That was so crazy!

THOR (2012): I had no idea if that was gonna work.

TONY STARK (2012): The case?

THOR (2012): The case. It's, uhh... Where's the case? Where's Loki? Loki!

SCOTT LANG: That wasn't supposed to happen, was it?

TONY STARK: Oh, we blew it.

THOR (2012): Loki!?

[Cut to a walkway several floors up. Steve is having trouble on his communicator.]

STEVE ROGERS: Tony, what's going on? Tell me you found that cube. [He looks up and groans.] Oh, you gotta be shitting me.

[In front of him, Steve sees his 2012 self looking back]

STEVE ROGERS (2012): I have eyes on Loki. 14th floor.

STEVE ROGERS: [Puts the case down] I'm not Loki. And I don't wanna hurt you.

[2012 Steve engages and the two Captain Americas begin to duel.]

STEVE ROGERS (2012): I can do this all day.

STEVE ROGERS: [Standing up] Yeah, I know. I know.

[Both Rogers' frisbee their shield's at one another which clang away as they brawl, inadvertently kicking away the case containing the scepter which falls down a few levels. 2012 Steve gets the upper hand on Future Steve's as they both fall down to the same level as the scepter. Future Steve's locket of Peggy falls out, Steve (2012) notices it.]

STEVE ROGERS (2012): Where did you get this?

[Steve (2012) has future Steve in a chokehold]

STEVE ROGERS: Bucky... is... alive!

STEVE ROGERS (2012): What?

[Future Steve takes the chance to sucker punch his counterpart, grab the scepter and knock Steve (2012) out, gets up and stares at him]

STEVE ROGERS: That is America's ass.

[Scene cuts back to Bruce and The Ancient One (2012). As Hulk is lying down on a beach chair who looks like he's sleeping with a hat on, Bruce Banner tries reasoning with the Ancient One to let him have the Time Stone.]

BRUCE BANNER: Please, please!

THE ANCIENT ONE (2012): I'm sorry, I can't help you, Bruce. If I give up the Time Stone to help your Reality, I'm dooming my own.

BRUCE BANNER: With all due respect, I'm not sure the science really supports that.

[The Ancient One creates a projection with a long ray that simulates the flow of time.]

THE ANCIENT ONE (2012): The Infinity Stones create what you experience as the flow of time. Remove one stone and that flow splits. [She flicks the Time Stone projection away and Shows black stream indicating a point of divergence] Now, this may benefit your reality, but my new one…not so much. In this new branched Reality, without our chief weapon against the forces of darkness, our world will be overrun. Millions will suffer. So, tell me, Doctor, can your science prevent all that?

BRUCE BANNER: No, but we can erase it. Because once we are done with the stones, we can return each one to its own timeline at the moment it was taken. So, chronologically, [Holds the Time Stone projection] in that reality, [puts it back to its spot] it never left.

[Bruce's astral form takes the projection of the removed Time Stone, replaces it back amongst the other five, and the doomed alternate dimension fades away, illustrating his point.]

THE ANCIENT ONE (2012): [still not convinced.] But you are leaving out the most important part. In order to return the stones, you have to survive.

BRUCE BANNER: We will. I will. I promise.

THE ANCIENT ONE (2012): I can't risk this Reality on a promise. It is the duty of the Sorcerer Supreme to protect the Time Stone.

BRUCE BANNER: Then, why the hell did Strange give it away?

THE ANCIENT ONE (2012): [Surprised] What did you say?

BRUCE BANNER: Strange, he gave it away. He gave it to Thanos.

THE ANCIENT ONE (2012): Willingly?

BRUCE BANNER: Yes!

THE ANCIENT ONE (2012): ...Why?

BRUCE BANNER: I have no idea. Maybe he made a mistake.

THE ANCIENT ONE (2012): Or I did. [She returns to Banner control of his Hulk body and opens the Eye of Agamotto, revealing the Time Stone] Strange is meant to be the best of us.

BRUCE BANNER: So he must have done it for a reason.

THE ANCIENT ONE (2012): I fear you might be right. [gives him the Time Stone]

BRUCE BANNER: Thank you.

THE ANCIENT ONE (2012): I'm counting on you, Bruce. We all are.

[Cut to Thanos (2014), Nebula (2014), Gamora (2014) and Ebony Maw (2014) on the Sanctuary II.]

THANOS (2014): [To Ebony Maw] Run diagnostics. Show me her memory file.

EBONY MAW (2014): Sire, the file appears entangled. It was a memory, but not hers. There's another consciousness sharing her network...another Nebula.

THANOS (2014): Impossible.

EBONY MAW (2014): This duplicate carries a time stamp... from nine years in the future.

THANOS (2014): Where is this other Nebula?

EBONY MAW (2014): In our solar system. On Morag.

THANOS (2014): Can you access her?

EBONY MAW (2014): Yes. The two are linked.

THANOS (2014): Search the duplicate's memories for Infinity Stones.

[Memory of the meeting with all the Avengers starts playing]

BRUCE BANNER (2023): And these stones have been in a lot of different places throughout history.

TONY STARK (2023): Our history. So, not a lot of convenient spots to just drop in.

CLINT BARTON (2023): Which means we have to pick our targets.

TONY STARK (2023): Correct.

[End memory.]

THANOS (2014): [To Ebony Maw] Freeze image.

GAMORA (2014): Terrans.

THANOS (2014): Avengers. Unruly wretches. What's that reflection? Amplify this, Maw.

GAMORA (2014): [Looking at a reflection of Nebula (2023)] I don't understand. Two Nebulas.

THANOS (2014): No. The same Nebula. From two different times. Set course for Morag. Scan the duplicate's memories. I want to see everything.

[Cut back to Thor and Rocket in Asgard, 2013]

FRIGGA (2013): My ladies, I'll see you after. Go on.

[Thor tries not to get caught behind a large post, but gets shocked when he sees his mother behind him]

FRIGGA (2013): [To Thor] What are you doing?

THOR: Aah!!!

FRIGGA (2013): Aah!!!

THOR: OH, God!

FRIGGA (2013): You're better off leaving the sneaking to your brother.

THOR: Yeah, I was simply just going for a walk, and uh... [Trying to hide his belly]

FRIGGA (2013): What are you wearing?

THOR: I always wear this. This is one of my favorites.

[Frigga puts her hand on Thor's face and takes a good look at him}

FRIGGA (2013): What's wrong with your eye?

THOR: Oh, my eye. That's... you remember the Battle of Haroquin? When I got hit in the face with a broadsword?

FRIGGA (2013): You're not the Thor I know at all, are you?

THOR: [Pretending] Yes, I am.

FRIGGA (2013): The future hasn't been kind to you, has it?

THOR: I didn't say I'm from the future.

FRIGGA (2013): I was raised by witches, boy. I see with more than eyes, and you know that.

[Thor attempts to hold back his tears and fails miserably.]

THOR: [voice breaking up] I am totally, totally from the future.

FRIGGA (2013): Yes, you are.

THOR: I really need to talk to you.

FRIGGA (2013): We can talk.

[They both hug each other. Scene cuts to Jane Foster waking up while Rocket sneaks behind her to extract the Aether. Scene cuts back to Thor and Frigga's conversation.]

THOR: His head was over there... His body over there... What was the point? I was too late. I was just standing there. Some idiot with an axe.

FRIGGA (2013): You're no idiot. You're here aren't you? Seeking counsel from the wisest person in Asgard.

THOR: I guess, yeah.

FRIGGA (2013): Idiot? No. A failure? Absolutely.

THOR: That's a little bit harsh.

FRIGGA (2013): You do know what that makes you? Just like everyone else.

THOR: I'm not supposed to be like everyone else, am I?

FRIGGA (2013): Everyone fails at who they are supposed to be, Thor. The measure of a person, of a hero, is how well they succeed at being who they are.

THOR: I really missed you, Mum.

[scene cuts to Rocket running away from the Asgardian soldiers]

ROCKET: Thor! I got it!

ASGARDIAN SOLDIER (2013): Get that rabbit!

THOR: Ma, I have to tell you something.

FRIGGA (2013): No, son. You don't. You're here to repair your future, not mine.

THOR: But this is about your future.

FRIGGA (2013): It's none of my business. [does she know?]

ROCKET: Hey. You must be Mom. I got the thing. Come on, we got to move.

THOR: I wish we had more time.

FRIGGA (2013): No, this was a gift. And you're going to be the man you're meant to be.

THOR: I love you, Mom.

FRIGGA (2013): I love you. And eat a salad.

ROCKET: Come on. We gotta go.

FRIGGA (2013): [whispers] Goodbye.

ROCKET: Three... two...

THOR: No, wait!

[Thor holds out his hand]

ROCKET: [To Frigga] Wh- what am I looking at?

FRIGGA (2013): Oh, sometimes it takes a second.

[Thor summons Mjolnir.]

THOR: [Happy and a little bit surprised] I'm still worthy.

["Come And Get Your Love" starts playing in the background.]

ROCKET: Oh, boy.

THOR: Goodbye, Mom.

FRIGGA (2013): [whispers] Goodbye.

[Scene cuts to Quill on Morag dancing to "Come And Get Your Love", we then pan over to Rhodey and Nebula hiding in the background watching Quill dance and sing to their perspective without music.]

RHODEY: So he's an idiot?

NEBULA: Yeah.

[Rhodey knocks out Quill and Nebula rummages around to take Quill's tool.]

RHODEY: What's that?

NEBULA: The tool of a thief.

[Nebula uses the tool to open the door that leads to The Orb A.K.A The Power Stone. Nebula tries to walk in but is stopped by Rhodey.]

RHODEY: Whoa, whoa, whoa, whoa...This is the part where spikes come out with skeletons on the end and everything...

NEBULA: What are you talking about?

RHODEY: When you break into a place called the temple of the Power Stone, There's gonna be a bunch of booby traps–

[Nebula just shakes her head and walks in.]

RHODEY: Okay. All right. Go ahead.

[Nebula forces her hand inside the force field protecting The Orb while it melts away the exterior plating on her arm. She successfully retrieves The Orb and hands it to Rhodey all the while Rhodey watched the whole thing happened.]

NEBULA: I wasn't always like this.

RHODEY: Me either. But we work with what we got, right?

[They just both look at each other solemnly.]

RHODEY: Sync up. [They both suit up.] Three.. two.. one...

[Rhodey is the only one who disappears while Nebula is left behind unable to move, then she riddled with pain on her head. She falls to the ground.]

[Sanctuary II. 2014 Nebula is being scanned in synch with her future self. A memory is played, coming from future Nebula's head.]

BRUCE (Memory): You murdered trillions!

THANOS (Memory): You should be grateful.

NATASHA (Memory): Where are the stones?

THANOS (Memory): Gone. Reduced to atoms.

BRUCE (Memory): You used them two days ago.

THANOS (Memory): I used the stones to destroy the stones. It nearly killed me. But the work is done. It always will be. I am inevitable.

[Memory pauses.]

GAMORA (2014): What did you do to them?

THANOS (2014): Nothing. Yet. They're not trying to stop something I'm going to do in our time. They're trying to undo something I've already done in theirs.

GAMORA (2014): The stones...

THANOS (2014): I found them all. I won. Tipped the cosmic scales to balance.

[Thanos (2014) caress Gamora (2014) and she kneels down]

EBONY MAW (2014): This is your future.

THANOS (2014): It's my destiny.

[Maw resumes playing the memory]

NEBULA (Memory): My father is many things. A liar is not one of them.

THANOS (Memory): Ah...Thank you, Daughter. Perhaps I treated you too harshly...

[Thanos gets beheaded in the memory, Gamora (2014) is shocked and stands up]

THANOS (2014): And that, is destiny fulfilled.

EBONY MAW (2014): [Dangerous voice.] Sire, your Daughter...

[Maw (2014) telekinetically wraps a chain around Nebula (2014).]

NEBULA (2014): No!

EBONY MAW (2014): ...is a traitor.

NEBULA (2014): That's not me. It's not. I could never... I would never betray you. Never.

[Thanos (2014) releases the chain around Nebula (2014) neck and holds her head in his palm]

THANOS (2014): I know. And you'll have the chance to prove it.

[Thanos (2014) makes sure Nebula cannot travel back to 2023. Nebula is stuck in 2014.]

NEBULA: No! He knows! [Runs back to the ship and gets on the comms.] Barton? Barton, come in. Romanoff? Come in, we have a problem. Come on! Come in, we have a prob....Thanos knows. Thanos… He knows.

[Nebula looks up in horror just to be abducted by the Sanctuary II. The scene cuts to Steve, who has just defeated himself, jumping down from a building with the scepter]

TONY STARK: Cap–

[He turns around to see Tony and Scott sitting in a broken car.]

TONY STARK: Sorry, buddy. We got a– problem.

SCOTT LANG: Huh. Yeah, we do.

STEVE ROGERS: Well, what are we gonna do now?

TONY STARK: You know what? Give me a break, Steve. I just got hit in the head with the Hulk.

SCOTT LANG: You said that we had one shot. This– this was our shot. We shot it. It's shot. Six stones or nothing. Six stones or nothing–

TONY STARK: You're repeating yourself, you know that? You're repeating yourself.

SCOTT LANG: You're repeating yourself. You're repeating yourself. You know– No.

TONY STARK: Dude, come on.

SCOTT LANG: You never wanted a time heist, you went on board with the time heist–

TONY STARK: I dropped the ball.

SCOTT LANG: You ruined the time heist.

TONY STARK: Is that what I did?

SCOTT LANG: Yeah!

STEVE ROGERS: Are there any other options with the Tesseract?

SCOTT LANG: No, no, no. There's no other options. There's no do-overs. We're not going anywhere else. We have one particle left. Each. That's it, alright? We use that– Bye, bye. You're not going home.

STEVE ROGERS: Yeah, well if we don't try, then no one else is going home, either.

TONY STARK: I got it. There's another way. To retake the Tesseract and acquire new particles. We'll stroll down memory lane. Military installation, Garden State.

STEVE ROGERS: When were they both there?

TONY STARK: They were there at a– I've a vaguely exact idea.

STEVE ROGERS: How vague?

SCOTT LANG: What are you talking about? Where are we going?

TONY STARK: I know for a fact they were there–

SCOTT LANG: Who's they? What are we doing?

TONY STARK: And I know how I know.

SCOTT LANG: Guys, what's up? What is it?

TONY STARK: Well, it looks like we're improvising.

SCOTT LANG: Right. What are we improvising?

TONY STARK: Scott, get this back to the compound.

TONY STARK: Suit up.

SCOTT LANG: What's in New Jersey?

TONY STARK: 0-4,

STEVE ROGERS: 0-4– -

TONY STARK: Uhh, 0-7.

STEVE ROGERS: 0-7. -

SCOTT LANG: Excuse me...

TONY STARK: 1-9-7-0.

STEVE ROGERS: Are you sure?

SCOTT LANG: Cap. Captain. Steve, sorry, America. Rogers. Look, if you do this, and this doesn't work, you're not coming back.

TONY STARK: Thanks for the pep talk, pissant. [To Steve] Do you trust me?

STEVE ROGERS: I do.

TONY STARK: Your call.

STEVE ROGERS: Here we go.

[Cut to Steve and Tony in New Jersey, 1970]

OUR WATCHER INFORMANT, STAN LEE (1922-2018 R.I.P): [Driving past Steve and Tony] Hey, man! Make love, not war!

TONY STARK: Clearly, you weren't actually born here, right?

STEVE ROGERS: The idea of me was.

TONY STARK: Right. Well, imagine you're SHIELD, running a quasi-fascistic intelligence organization. Where do you hide it?

STEVE ROGERS: In plain sight.

[Tony and Steve are in an elevator with a lady]

TONY STARK: [Leaving the elevator] Good luck on your mission, Captain.

STEVE ROGERS: [Waiting for another floor] Good luck on your project, doctor.

ELEVATOR LADY: You're new here?

STEVE ROGERS: Not exactly.

[Cut to Tony in what seems to be a lab area and he is looking for the tesseract]

TONY STARK: [Grabbing Tesseract] Gotcha. Back in the game.

HOWARD STARK: Arnim, you in there? Arnim? Hey! Door's this way, pal.

TONY STARK: Oh, yeah.

HOWARD STARK: I'm looking for Dr. Zola. Have you seen him?

TONY STARK: Yeah, no, Dr. Zol– No, I haven't seen a soul. [awkwardly bumps into a chair] Pardon me.

HOWARD STARK: Do I know you?

TONY STARK: No, sir. I'm a– a visitor from MIT.

HOWARD STARK: Huh. MIT. Got a name?

TONY STARK: Uh– Howard.

HOWARD STARK: Well, that'll be easy to remember.

TONY STARK: Howard– Potts.

HOWARD STARK: Well, I'm Howard Stark. [Holds out hand to shake.]

TONY STARK: Hi. [Holds Howard's finger]

HOWARD STARK: Shake it, don't pull it.

TONY STARK: Yeah–

HOWARD STARK: You look a little green around the gills there, Potts.

TONY STARK: I'm fine. Just, long hours.

HOWARD STARK: Wanna get some air? Hello, Potts.

TONY STARK: Yeah. That would be swell.

HOWARD STARK: That way.

TONY STARK: Okay.

HOWARD STARK: Need your briefcase?

[Tony grabs the case]

HOWARD STARK: You're not one of those beatniks, are ya, Potts?

[Cut to a younger Hank Pym in his laboratory.]

CAPTAIN STEVENS (STEVE ROGERS): Hello. Dr. Pym?

HANK PYM: That would be the number that you called. Yes.

CAPTAIN STEVENS (STEVE ROGERS): This is Captain Stevens from shipping. We have a package for you.

HANK PYM: Bring it up.

CAPTAIN STEVENS (STEVE ROGERS): Well, that's the thing, sir. We can't.

HANK PYM: I'm confused. I thought that was your job.

CAPTAIN STEVENS (STEVE ROGERS): Well, it's just– Sir, the box is glowing and, to be honest, some of our mail guys aren't feeling that great.

HANK PYM: They didn't open it, did they?

CAPTAIN STEVENS (STEVE ROGERS): Yeah, they did. You better get down here.

[We then see Pym running down a hallway]

HANK PYM: Excuse me! Out of the way!

[cut back to Howard and Tony]

TONY STARK: So, flowers and sauerkraut. You got a big date tonight?

HOWARD STARK: My wife's expecting. And, uh– Too much time in the office.

TONY STARK: Congratulations.

HOWARD STARK: Thanks. Hold this, will you?

TONY STARK: Yeah, sure. How far along is she?

HOWARD STARK: I don't know– Uh– She's at the point where she can't stand the sound of my chewing. I guess I'll be eating dinner in the pantry again.

TONY STARK: I have a little girl.

HOWARD STARK: A girl would be nice. Less of a chance she'd turn out exactly like me.

TONY STARK: What'd be so awful about that?

HOWARD STARK: Let's just say that the greater good has rarely outweighed my own self-interests.

[cut to elevator lady talking to security guards about Tony and Captain America looking fishy]

SECURITY OFFICER: And you've never seen these two men before?

ELEVATOR LADY: No, I've got an eye for this. The two of them looked fishy.

SECURITY OFFICER: Can you describe them?

ELEVATOR LADY: Well, one of them had a hippie beard.

SECURITY OFFICER: Hippie? Like Bee Gees or Mungo Jerry?

ELEVATOR LADY: Definitely Mungo Jerry.

SECURITY OFFICER: Yeah, this is Chesler. I need every available MPs on sub-level 6. We have a potential breach.

[Steve walks into a room. Feeling safe, he suddenly see's a picture of himself. Then he's surprised to see his love Margret Carter. Cut to Tony and Howard still talking to each other.]

TONY STARK: So, where are you at with names?

HOWARD STARK: Well, if it's a boy, my wife likes Elmonzo.

TONY STARK: Huh, Might wanna let that stew awwhile. You got time.

HOWARD STARK: Let me ask you a question. When your kid was born– were you nervous?

TONY STARK: Wildly. Yeah.

HOWARD STARK: Did you feel qualified? Like you had any idea how to successfully operate that thing?

TONY STARK: I literally pieced it together as I went along, I thought about what my Dad did, and–

HOWARD STARK: My old man, he never met a problem he couldn't solve with a belt.

TONY STARK: I thought my dad was tough on me. And now, looking back, I just remember the good stuff, you know. He did drop the odd pearl.

HOWARD STARK: Yeah? Like what?

TONY STARK: "No amount of money ever bought a second of time."

HOWARD STARK: Smart guy.

TONY STARK: He did his best.

HOWARD STARK: Let me tell you. That kid's not even here yet, and there's nothing I wouldn't do for him. Good to meet you, Potts.

TONY STARK: Yeah, Howard– Everything's gonna be all right. Thank you– for everything– you've done for this country.

HOWARD STARK: Jarvis, have we ever met that guy?

EDWIN JARVIS: You meet a lot of people, sir.

HOWARD STARK: Seems very familiar. Weird beard.

[2014 Nebula has captured 2023 Nebula and 2014 Nebula is fighting her future self.]

NEBULA (2014): You're weak.

NEBULA: I'm you.

[Nebula (2014) throws a punch straight at Present Nebula. Gamora (2014) walks into the room.]

NEBULA: You can stop this. You know you want to. Did you see what happens in the future? Thanos finds the Soul Stone. You wanna know how he does that? You wanna know what he does to you?

NEBULA (2014): That's enough. [kicks Present Nebula to the wall and pulls out her Electric Knife.] You disgust me. But that doesn't mean you're useless.

[Nebula (2014) steals the golden plate on the side of Present Nebula´s face and wears it herself. Then she walks up to Thanos, gives him a Pym Particle and shows him her new look.]

NEBULA (2014): How do I look?

[Scene cuts to Vormir 2014 where Natasha and Clint arrives.]

CLINT BARTON: Wow– Under different circumstances, this would be totally awesome.

[Natasha and Clint starts walking towards the mountain and climb it.]

NATASHA ROMANOFF: I bet the raccoon didn't have to climb a mountain. CLINT BARTON: Technically, he's not a raccoon, you know.

NATASHA ROMANOFF: Whatever. He eats garbage.

RED SKULL (2014): Welcome.

[Natasha and Clint draws their weapons.]

RED SKULL (2014): Natasha, daughter of Ivan. Clint, son of Edith.

NATASHA ROMANOFF: Who are you?

RED SKULL (2014): Consider me a guide. To you, and to all who seek the Soul Stone.

NATASHA ROMANOFF: Oh, good. You tell us where it is. Then we'll be on our way.

RED SKULL (2014): Ah, liebchen– If only it were that easy.

[Red Skull leads Clint and Natasha to the cliff]

RED SKULL (2014): What you seek lies in front of you... as does what you fear.

NATASHA ROMANOFF: The stone is down there.

RED SKULL (2014): For one of you. For the other... In order to take the stone, you must lose that which you love. An everlasting exchange. A soul, for a soul.

[scene cuts to Natasha sitting on a log while Clint watches the Stonekeeper.]

CLINT BARTON: How's it going? Jesus...Maybe he's making this shit up.

NATASHA ROMANOFF: No. I don't think so.

CLINT BARTON: Why, 'cause he knows your Daddy's name?

NATASHA ROMANOFF: I didn't. Thanos left here with the stone without his daughter. It's not a coincidence.

CLINT BARTON: Yeah.

NATASHA ROMANOFF: Whatever it takes.

CLINT BARTON: Whatever it takes.

[Natasha stands up.]

NATASHA ROMANOFF: If we don't get that stone, billions of people stay dead.

CLINT BARTON: Then I guess we both know who it's gotta be.

NATASHA ROMANOFF: I guess we do.

[Clint holds Natasha's hand and she reciprocates and they look at each other]

CLINT BARTON: I'm starting to think– we mean different people here, Natasha.

NATASHA ROMANOFF: For the last five years I've been trying to do one thing: Get to right here. That's all it's been about. Bringing everybody back.

CLINT BARTON: Oh, don't you get all decent on me now.

NATASHA ROMANOFF: What, you think I wanna do it? I'm trying to save your life, you idiot.

CLINT BARTON: Yeah, well, I don't want you to, because I– Natasha, you know what I've done. You know what I've become.

NATASHA ROMANOFF: I don't judge people on their worst mistakes.

CLINT BARTON: Maybe you should.

NATASHA ROMANOFF: You didn't.

CLINT BARTON: You're a pain in my ass, you know that?

[Both Clint and Natasha lean their heads against each other]

CLINT BARTON: Okay. You win.

[Clint smiles and knocks Natasha to the ground]

CLINT BARTON: Tell my family I love them.

[Natasha returns the favor by tackling Clint to the ground]

NATASHA ROMANOFF: You tell them yourself.

[Natasha electrocutes Clint and she runs towards the cliff. Clint gets up and shoots an explosive arrow knocking her down. Clint then runs towards the cliff and jumps. Natasha jumps after him and hooks him up to a grappling hook]

CLINT BARTON: Damn you!

NATASHA ROMANOFF: Let me go.

CLINT BARTON: No. Please, no.

NATASHA ROMANOFF: It's okay.

CLINT BARTON: Please– [Natasha kicks the wall, falls off the rope, and plummets to the ground.] NO!!!

[The shot shows her body on the ground, dead. A boom in the sky sends Clint in a pool of water with the Soul Stone in his hand. He hits the ground out of sadness. His Quantum Suit activates and he shrinks back to the present day, soon joined by the others returning from their journeys. Cut to the Avengers HQ and the Quantum platform everyone looks around to see all the recovered stones.]

BRUCE BANNER: Did we get them all?

RHODEY: You telling me this'll actually work?

[There's a pause as everyone starts to realise someone is missing.]

BRUCE BANNER: Clint, where's Nat?

[The silence from Clint tells them all they need to know. The mission was completed but at a dire cost. Sadness overtakes everyone. Bruce falls to his knees and pounds the floor in grief.]

[Cut to outside HQ. Lakeside, Tony, Steve, Thor, Clint, and Bruce are mourning their fallen teammate and friend.]

TONY STARK: Do we know if she had family?

STEVE ROGERS: Yeah. Us.

THOR: (confused) What?

TONY STARK: I just asked him a question–

THOR: Yeah, you're acting like she's dead. Why are we acting like she's dead? We have the stones, right? As long as we have the stones, Cap, we can bring her back, isn't that right? [GROWLING.] So stop this shit. We're the Avengers, get it together.

CLINT BARTON: We can't get her back.

THOR: Wha– what?

CLINT BARTON: It can't be undone. It can't.

[Thor dryly laughs.]

THOR: I'm sorry. No offense, but you're a very earthly being. Okay? We're talking about space magic. And "can't" seems very definitive don't you think?

CLINT BARTON: (to Thor) Yeah, look, I know that I'm way outside my paygrade here. But she still isn't here, is she?

THOR: No, that's my point–

CLINT BARTON: It can't– be undone. Or that's at least what the red floating guy had to say. (shouts) Maybe you wanna go talk to him, okay? GO GRAB YOUR HAMMER, AND YOU GO FLY AND TALK TO HIM!

[Clint's anger is quickly replaced with grief]

CLINT BARTON: It was supposed to be me. She sacrificed her life for that goddamn stone. She bet her life on it.

[In a burst of anger, Bruce grabs a bench and hurls it clear across the lake. His anger spent, he turns to the others with a resigned look on his face]

BRUCE BANNER: She's not coming back. We have to make it worth it. We have to.

STEVE ROGERS: We will.

[Cut to inside the Avenger's Lab. Tony carefully places the stones in the gauntlet he made while Bruce and Rocket watches. With nervous precision, Tony manipulates the machine and carefully places all six stones into the gauntlet]

ROCKET: Boom!

[Tony and Bruce jump a bit, and quickly groan at Rocket's joke. Scene cuts to another room with the new finished gauntlet. Everyone is gathered around it.]

ROCKET: All right. The glove's ready. Question is, who's gonna snap their freaking fingers?

THOR: I'll do it.

TONY Stark: Excuse me?

THOR: It's okay.

EVERYONE: (holding up Thor) No, no, no, whoa. Stop. Stop. Wait a sec. Hey, hey–

STEVE ROGERS: Wait, wait. Thor, just wait. We haven't decided who's gonna put that on yet. THOR: I'm sorry. What, we're just sitting around waiting for the right opportunity?

SCOTT LANG: We should at least discuss it.

THOR: No, no, sitting here staring at that thing is not gonna bring everybody back. I'm the strongest Avenger, okay? So this responsibility falls upon me. It's my duty.

TONY STARK: It's not about that–

THOR: (hushes everyone up) It's not that– Stop it! Just let me! (he tears up) Just let me do it. Just let me do something good. Something right.

TONY STARK : Look– It's not just the fact that that glove is channeling enough energy to light up a continent, I'm telling you, you're in no condition.

THOR: What do you– What do you think is coursing through my veins right now?

RHODEY: Cheez Whiz?

THOR: Lightning.

TONY STARK: Yeah.

BRUCE: Lightning won't help you, pal. It's gotta be me.

[Thor lets go of Tony. Sorry, Thor. Maybe next time.]

BRUCE BANNER: You saw what those stones did to Thanos. It almost killed him. None of you could survive.

STEVE ROGERS: How do we know you will?

BRUCE BANNER: We don't. But the radiation's mostly gamma. [He takes a good look at the gauntlet] It's like...I was made for this.

[Nebula (2014) sneaks off to the Quantum portal and activates it]

TONY STARK: Good to go, yeah?

BRUCE BANNER: Let's do it.

TONY STARK: You remember– everyone Thanos snapped away five years ago and just bringing them back to now, today. Don't change anything from the last five years.

BRUCE BANNER: Got it.

[Everyone gets ready and suits up]

TONY STARK: F.R.I.D.A.Y., do me a favor and activate Barn Door Protocol. Will you?

F.R.I.D.A.Y.: Yes, boss.

[Avengers facility goes on lockdown]

BRUCE BANNER: Everybody comes home.

[Bruce puts on the gauntlet, which nanobotically expands to fit his hand, and the power surge overwhelms him. He grunts in pain.]

THOR: Take it off! Take it off!

STEVE ROGERS: No, wait. Bruce, are you okay?

TONY STARK: Talk to me, Banner.

BRUCE BANNER: I'm okay. I'm okay.

[Thor gives a double thumbs up, scene cuts to Nebula (2014) opening the Quantum Tunnel and brings the Sanctuary II to the present. Bruce screams, fighting through the intense pain coursing through his body courtesy of the gauntlet, and manages to snap his fingers. He faints and the gauntlet slides off his arm, Clint kicks it away.]

STEVE ROGERS: Bruce!

TONY STARK: Don't move him.

BRUCE ROGERS: [Bruce holds onto Steve's arm] Did it work?

THOR: Worth a shot. It's over. It's okay.

[Scott walks towards the outside windows and sees plants and birds. Clint hears his phone ringing and sees it's his wife calling]

CLINT BARTON: (struggling to speak from sheer happiness) Honey. Honey.

SCOTT LANG: Guys– I think it worked!

[Bruce opens his eyes and sees the Sanctuary II up in the sky and a single missile heading towards the base blowing away Scott away. Then a continuous array of missiles destroys the base completely and everyone sinks below to the underground.]

[The camera pans over to see Bruce holding up tons of debris from collapsing on top of the other Avengers with his one good arm. Some debris is stuck on top of Rocket.]

ROCKET: I can't breathe. I can't breathe! I can't breathe.

RHODEY: Canopy. Canopy. Canopy. [Rhodey gets out of his damaged suit]

BRUCE BANNER: Rhodey, Rocket, get outta here!

[Rhodey crawls over to help Rocket while taking a rebar as leverage to lift the debris off Rocket]

ROCKET: Hurry up! Hurry up! Come on!

[Rhodey gets Rocket out and they both sigh in relief]

BRUCE BANNER: Rhodey!

[A flood engulfs both Rhodey and Rocket]

[Scene cuts to Scott who survives the blast by shrinking.]

RHODEY: Mayday, mayday! Does anybody copy? We're in the lower level, it's flooding!

SCOTT LANG: What?

RHODEY: We're drowning! Does anybody copy? Mayday!

SCOTT LANG: Wait! I'm here! I'm here, can you hear me?

[Scene cuts to Clint in the sewer system and trying to get his bearings. He flashes a light upwards to see what happened.]

CLINT BARTON: Cap?

[Clint finds the gauntlet is with him but senses he's not alone down there. He shoots an arrow with light towards the dark tunnel and finds hordes of Outriders.]

CLINT BARTON: [under his breath] Damn.

[Clint takes the gauntlet and runs towards the opposite direction while the Outriders chase after him.]

[Scene cuts to the Sanctuary II and it beams Thanos (2014) fully armoured to the ground. Nebula walks towards him.]

THANOS (2014): Daughter.

NEBULA (2014): Yes, Father.

THANOS (2014): So, this is the future. Well done.

[Nebula (2014) takes off the orange plate on her head and throws it away]

NEBULA (2014): Thank you, Father. They suspected nothing.

[Thanos (2014) plants his double-bladed sword on the ground, takes off his helmet and places on top of the sword's edge.]

THANOS (2014): The arrogant never do.

[Thanos then sits down]

THANOS (2014): Go. Find the stones. Bring them to me.

NEBULA (2014): What will you do?

THANOS (2014): Wait.

[Nebula (2014) proceeds to go find the stones and the camera pans over the Sanctuary II and we see Gamora (2014) watching. Gamora (2014) heads over to where Nebula is being held prisoner.]

GAMORA (2014): Tell me something. In the future, what happens to you and me?

NEBULA: I tried to kill you. Several times.

[Gamora (2014) rolls her eyes]

NEBULA: But eventually, we become friends. We become sisters.

[Gamora (2014) holds out her hand.]

GAMORA (2014): Come on. We can stop him.

[Nebula takes it]

[Scene cuts to Tony walking towards Steve who's unconscious on the ground.]

TONY STARK: Come on, buddy. Wake up. That's my man. [He has Cap's shield.] You lose this again, I'm keeping it.

STEVE ROGERS: What happened?

TONY STARK: You messed with time. It tends to mess back. You'll see.

[Tony helps Steve on his feet. They walk up to join Thor, who has been observing Thanos (2014) from a distance.]

TONY STARK: What's he been doing?

THOR: Absolutely nothing.

STEVE ROGERS: Where are the stones?

TONY STARK: Somewhere under all this. All I know is he doesn't have them.

STEVE ROGERS: So we keep it that way.

THOR: You know it's a trap, right?

TONY STARK: Yeah. And I don't much care.

THOR: Good. Just as long we are all in agreement. [Thunder cracks as Thor stretches out both hands to summon both Stormbreaker and Mjolnir (2013). His casual clothes transform into his armour and cape, with his beard getting some braid treatment.] Let's kill him properly this time.

[The Big Three walk over to confront Thanos face to face]

THANOS (2014): You could not live with your own failure. And where did that bring you? Back to me. I thought by eliminating half of life, the other half would thrive. But you’ve shown me that’s impossible. And as long as there are those that remember what was, there will always be those that are unable to accept what can be. They will resist.

TONY STARK: Yep. We're all kinds of stubborn.

THANOS (2014): I'm thankful. Because now, I know what I must do. [stands up] I will shred this universe down to its last atom. [Thanos (2014) puts on his helmet] And then– With the stones you've collected for me, create a new one. Teeming with life, but knows not what it has lost but only what it has been given. [Thor lights himself up.] A grateful universe.

STEVE ROGERS: Born out of blood.

THANOS (2014): They'll never know it. Because you won't be alive to tell them.

[The fighting starts, and Thor and Tony go straight at Thanos (2014). Meanwhile, Hulk is under all of the mess trying to hold up the structure. Rhodey and Rocket are breathing for their lives.]

RHODEY: See you on the other side, man.

SCOTT LANG: Hang on! I'm coming!

[Hawkeye is running with the infinity gauntlet. He blows the place, and escapes before the Outriders overwhelm him. He sees Nebula.]

CLINT BARTON: Oh, hey– I know you.

[Clint gives her the gauntlet. then she puts her hand on her earpiece]

NEBULA: Father.

[Clint gasped and finds out that she's from 2014]

NEBULA (2014): I have the stones.

CLINT BARTON: What?!

[Clint tries to get up but Nebula (2014) steps her foot down on him an points her gun at him]

GAMORA (2014): Stop.

[Gamora (2014) come around the corner]

NEBULA (2014): You're betraying us?

[With her hands up, Nebula joins Gamora (2014). Nebula (2014) points her gun at her future self]

NEBULA: You don't have to do this.

NEBULA (2014): I am this.

GAMORA (2014): No, you're not.

NEBULA: You've seen what we become.

GAMORA (2014): Nebula, listen to her.

NEBULA: You can change.

NEBULA (2014): He won't let me.

[Nebula (2014) points a gun at Gamora (2014)]

GAMORA (2014): NO!

[Present Nebula shoots Nebula (2014) and she dies. Hawkeye picks up the Infinity Gauntlet]

[Cut to the 3 heroes battling Thanos]

TONY STARK: Okay, Thor. Hit me.

[Thor bangs his 2 hammers together combined with his lightning. Tony's suit sucks up the energy and he shoots it out using his hands and his body. Thanos twirls his blade really fast to divert the energy. Thor grabs Stormbreaker and uses it to bat Mjölnir to hit Thanos. Thanos uses Tony as a shield resulting in damage to his system.]

F.R.I.D.A.Y: Boss, wake up!

[Steve tries to attack Thanos but is easily shielded away by the Mad Titan. Thor's attack on Thanos is blocked by his sword. Thor is beaten and choked by Thanos, as he punches him. Mjolnir is flicked away as Thanos relentlessly beats up Thor, throwing him into a tree and socking him before throwing him over rubble and socking him again. Thor tries to grab Stormbreaker but Thanos grabs it and uses it against Thor as he tries to defend himself. Mjölnir (2013) starts to float off the ground while Thanos is digging it into Thor, when suddenly Mjolnir flies into Thanos, zooms past, stops, and flies back, both look on in amazement as Steve picks up the hammer.]

THOR: I knew it!

[Thanos' (2014) kicks Thor to the ground and proceed to battle Steve dual wielding both his shield and Mjolnir (2013)]

[Steve proceeds to charge at Thanos swinging Mjolnir (2013) and hitting Thanos in the face knocking him down. Steve throws his shield and Thanos (2014) deflects, Steve throws Mjolnir (2013) to his shield creating a shockwave and knocking Thanos (2014) off his feet. Steve goes on the offensive on Thanos, throwing his shield first at Thanos and quickly hitting it back at him again with Mjolnir. He lines his arm back up and underarms a channel of lightning on Thanos who eventually gets the upper hand as he removes his helmet, stabs Steve on the leg and knocks Mjolnir (2013) out of his hand. Thanos proceed to destroy Steve's shield with his double-bladed sword and throws him across the battlefield.]

[Steve staggeredly tries to get up.]

THANOS (2014): In all my years of conquest– violence– slaughter– It was never personal. But I'll tell you now– what I'm about to do to your stubborn, annoying little planet– I'm gonna enjoy it. Very, very much.

[Thanos' (2014) entire army is summons to the ground which include the Children of Thanos, Chitauri, Sakaarans, Outriders and Chitauri Gorillas. Upon seeing the army descending on Earth, Steve slowly gets back to his feet. With a fierce determination, he tightens his broken shield to his arm and stands against Thanos' giant army alone. Suddenly, a crackling comes in on his communicator.]

SAM WILSON: Hey, Cap, you read me?

[Steve stops and looks around]

SAM WILSON: Cap, it's Sam. Can you hear me?

[A yellow portal begins to form behind him.]

SAM WILSON: On your left.

[Steve looks behind to see the portal on his left side. Three figures step through; Okoye, Shuri, and Black Panther, fully restored and ready to fight. Steve and the revived Wakandans share a look when Sam zooms in from above in his Falcon armor. As he does, we see dozens more portals opening up all around the battlefield. Through one of these, we see Doctor Strange descend in. He is joined by Drax, Mantis, Star Lord, and Spider-Man. Everyone watches in confusion and awe as more and more heroes arrive from all corners of the universe, all backed up with forces of their own including Black Panther and his Wakandan army, Valkyrie and the Asgardians, Wong and the Masters of the Mystic Arts and several Ravager ships. Amongst the throngs of heroes we see Bucky, Groot, the Scarlet Witch, the Wasp, and Pepper Potts (clad in her own iron suit) arrive. Nearly every hero has magically been transported to the battlefield to face Thanos' hordes.]

DOCTOR STRANGE: Is that everyone?

WONG: What, you wanted more?

[Giant-Man emerges from the rubble of the Avengers facility with Professor Hulk, War Machine, and Rocket. The Avengers, Guardians, Wakandans, Asgardians, and Ravagers take up battle positions. The heroes standing across Thanos' forces.]

STEVE ROGERS: AVENGERS! [he summons Mjolnir] –assemble.

[Thor makes a battle cry, as does Black Panther and the heroes charge, the Avengers theme swelling with their stride. Thanos raises his sword towards them, commanding his army to charge as well. Then both sides collide. The camera switches between the meet-line, Drax and Korg, Pepper and Tony, all which are battling against Thanos' army.]

[Cuts to Steve and Thor fighting. Steve takes Stormbreaker but Thor flies to him and passes Mjolnir]

THOR: No, no, give me that. You have the little one. [best meme ever]

[Later, Tony is seen fighting some of Thanos' army. Cull Obsidian backhands him, sending him to the ground, but Spider-Man uses his webs to pull him to the ground, allowing Giant-Man to stomp him flat. Peter runs to Tony and helps him up.]

PETER PARKER: Hey! Holy cow! You will not believe what's been going on. Do you remember when we were in space? And I got all dusty? I must've passed out, Because I woke up, and you were gone. But Doctor Strange was there, right? He was like, "It's been five years. Come on, they need us." And then he started doing the yellow sparkly thing that he does all the time–

TONY STARK: He did? Oh, God.

PETER PARKER: What are you doing?

[Tony hugs Peter, who hugs him back.]

PETER PARKER: Oh, this is nice.

[Cut to Star-Lord Fighting a bunch of Sakaarans, killing all of them except one, which makes him fall over, but a off-screen shot kills him and he drops on Peter. Peter gets up and sees Gamora (2014). Thinking its present Gamora, he is shocked.]

PETER QUILL: Gamora? [Peter slowly approaches Gamora (2014)] I thought I lost you.

[Peter touches Gamora's hair, not knowing she isn't present Gamora. In response, Gamora (2014) grabs Peter's hand firmly off her hair.]

PETER QUILL: Ow.

GAMORA (2014): [Kicks Peter in the nuts, slightly hurting Peter] Don't– touch– [Kicks him again, this time harder] me!

[Peter falls from the pain, while Gamora (2014) wipes her face.]

PETER QUILL: You missed the first time– Then you got them both the second time.

GAMORA (2014): [to Nebula] This is the one? Seriously?

NEBULA: The choices were him, or a tree.

[Peter pointing to Gamora (2014) in confusion, then to Nebula in question, and then back to Gamora (2014).]

[Later, Clint is seen running with the gauntlet]

CLINT BARTON: Cap, what do you want me to do with this damn thing?

STEVE ROGERS: Get those stones as far away as possible!

BRUCE BANNER: No! We need to get them back where they came from.

TONY STARK: No way to get them back. Thanos destroyed the quantum tunnel.


SCOTT LANG: Hold on! [Scott shrinks to normal size and pulls out a remote.] That wasn't our only time machine.

[Scott presses the button, which activates Luis's van's Horn with the song La Cucaracha, which is heard from afar. Hearing so, Cap goes to higher ground.]

STEVE ROGERS: Anyone see an ugly, brown van up there?

VALKYRIE: Yes! But you're not gonna like where it's parked!

TONY STARK: Scott, how long you need to get that thing working?

SCOTT LANG: Maybe ten minutes.

STEVE ROGERS: Get it started. We'll get the stones to you.

HOPE VAN DYNE: We're on it, Cap.

[Scott and Hope share a look and they shrink. Scott grabs Hope, and they fly to the van. Doctor Strange traps a group of Chitauri in his magic and sends them through portals as Tony joins him.]

TONY STARK: Hey. You said one out of 14 million, we win, yeah? Tell me this is it.

DOCTOR STRANGE: If I tell you what happens, it won't happen.

TONY STARK: You better be right.

[Cut to Scott and Hope entering a small hole in the van's window, getting to the drive seat, regrowing and trying to activate the Quantum Tunnel.]

THE WASP: It's a mess back here.

SCOTT LANG: It's– it's dead.

THE WASP: What?

SCOTT LANG: It's dead. I have to hotwire it.

THANOS (2014): Where's Nebula?

CORVUS GLAIVE: She's not responding.

EBONY MAW (2014): [pointing.] Sire!

[Thanos sees the gauntlet. Clint rushes through Outriders, before finding himself surrounded. He is saved by Black Panther.]

T'CHALLA: Clint! Give it to me.

[Clint gives the Gauntlet to T'Challa, and he runs towards the van while fighting Thanos' army. Eventually he is stopped by the double edged sword, boomeranged by Thanos. When it gets back to him, he charges T'Challa, but is stopped by Wanda, who is filled with anger for the loss of Vision.]

WANDA MAXIMOFF: You took everything from me.

THANOS (2014): I don't even know who you are.

WANDA MAXIMOFF: You will.

[With her powers, Wanda picks up some debris on the ground and tries to crush Thanos with it.] [Ebony May grabs the Gauntlet with his telekinesis of bricks. He does the same for T'Challa, trying to stop him from getting the glove.]

PETER PARKER: I got it!

[Peter grabs the Gauntlet with his webshooters and is surrounded by Chitauri.]

PETER PARKER: Activate Instant Kill!

[The Robotic Spider Legs come out of his back, stabbing the Chitauri.]

[Thanos tries to kill Wanda with his double-bladed sword, but Wanda pushes it away. She then uses her powers to try and crush Thanos.]

THANOS (2014): Rain fire!

CORVUS GLAIVE: But sire, our troops!

THANOS (2014): Just do it!

[The spaceship cannons appear and start to fire at the heroes. It flings Maximoff away. Wong makes a shield and holds it up. The others do the same. Suddenly one of the cannons hit a dam. Water starts to flood into the battlefield. Pepper is the first to notice.]

PEPPER POTTS: Uh, is anyone else seeing this?

[Doctor Strange looks at the broken dam and uses his magic to stop the water from flooding the battlefield. Meanwhile, Peter is still battling the Chitauri.]

PETER PARKER: I got this. I got this! Okay, I don't got this. Help! Somebody, help!

STEVE: Hey, Queens, heads up.

[Steve throws Mjolnir, and Peter shoots a web and glides along, then Pepper Potts catches him]

PEPPER POTTS: Hang on. I got you, kid. [She drops him on Valkyrie's Pegasus]

PETER PARKER: Hey! Nice to meet you– OH, MY GOD!

[The cannons knock Peter Parker off the Pegasus, then they turn to face something in the sky as all the cannons start shooting at something.]

SAM: What the hell is this?

TONY STARK: F.R.I.D.A.Y., what are they firing at?

F.R.I.D.A.Y.: Something just entered the upper atmosphere.

[A bright light of thundering energy comes surging down as Carol Danvers flies through the ship, and it results in an explosion and the ship crash-landing in the lake]

ROCKET: Oh, yeah!

STEVE ROGERS: Danvers, we need an assist here.

[Cut to Scott finally activating the Quantum Tunnel. Then cut to Carol Danvers landing near Peter, who is on the ground, weirdly hugging the gauntlet with his body.]

PETER PARKER: Hi. I'm– Peter Parker.

CAROL DANVERS: Hey, Peter Parker. You got something for me?

PETER PARKER: [Gets up and passes her the gauntlet] I don't know how you're gonna get it through all that.

[Wanda arrives, Valkyrie flying on her Pegasus as she arrives.]

WANDA MAXIMOFF: Don't worry.

OKOYE: She's got help.

[Pepper lands next to Okoye, followed by Mantis, Shuri, the Wasp, 2014 Gamora and Nebula. Thanos' army charges while the women help Carol Danvers go through the Outriders, Sakaarans and Chitauri. 2014 Gamora takes out a gorilla, while Okoye takes out Corvus Glaive. Wanda and Valkyrie destroy two leviathans. Carol Danvers then starts flying towards the van with the Gauntlet, flying past enemies and going through enemy blockades that are in her way with ease. Thanos, seeing this, starts running to Carol Danvers, but is stopped by Pepper, Shuri and The Wasp, who blast him backwards. Thanos, after seeing Carol Danvers fly past him, throws his double sword at the van, destroying it and the quantum realm tunnel, throwing Carol Danvers backwards and losing her grip on the Gauntlet, which falls to the ground. Doctor Strange steadies the water after the explosion. In the final brawl for the Stark Gauntlet, Stark moves one of Thanos' enemies aside and sees the Gauntlet. He runs to get it, but sees Thanos, who Stark tackles. Thanos smacks Stark away, knocking him out. Then Thor arrives with Stormbreaker and 2013 Mjolnir in an attempt to pin Thanos' arm down, with assistance from Captain America. However, Thanos overpowers them and knocks them both out. After picking up the Gauntlet, Carol Danvers arrives, punching away at Thanos while he is holding the Gauntlet. She keeps punching him, but Thanos grabs her by the arm and flings her away. Thanos puts on the gauntlet, gamma radiation from the stones eating at him as he tries to snap, but Carol Danvers arises again, and stops his fingers from snapping, opening up his hand similar to what Captain America did in Avengers: Infinity War. Thanos headbutts her, but it does nothing. Just as Carol Danvers is gaining the upper hand by rising up and forcing Thanos onto his knees, Thanos pulls the Power Stone out of the Gauntlet and uses it in his free hand to hit Carol Danvers away. Stark looks in question at Strange, who simply raises one finger, reminding him that the one win over Thanos he foresaw is now at risk. Or is it? Stark nods. Thanos puts the Power Stone back into the Gauntlet, yelling from the gamma radiation coursing through him, until Stark makes one last attack on Thanos, pulling on the Gauntlet before Thanos punches him away.]

THANOS (2014): I am– inevitable.

[Thanos snaps his fingers, but nothing happens except a metallic "clink." He sees the Infinity Stones are missing. Tony has the stones on his own gauntlet, the gamma radiation coursing through him, to Thanos' shock.]

TONY STARK: And I– am– Iron Man.

[Tony snaps his fingers with a loud "CLANG" and a blinding flash of white. Rocket fires at a Leviathan and before it devours him, it crumbles into ash. The Black Order starts crumbling to ash. T'Challa and Quill look around in surprise; Steve looks on in exhaustion, knowing that they have won. Thanos, in horror, looks around and sees his entire army disintegrate. He looks at Steve, who just stares at him. Thanos sits down and mourns before slowly being erased from existence himself.]

[Cut back to Tony. The power of the gauntlet raw energy has left his entire right side fatally injured. He stumbles for a bit before his body collapses besides a pile of debris. Rhodey soon flies in and goes up to Tony to see his long time colleague and friend fading away. He bows his head, knowing the damage was done. Peter Parker soon flies in and sees Tony collapsed on the ground.]

PETER PARKER: Mr. Stark? [He runs up to his fallen mentor. Tears start to form in his eyes] Hey– Mr. Stark? Can you hear me? It's Peter. Hey. We won, Mr. Stark– We won, Mr. Stark. We won. You did it, sir. You did it. [He kneels]

[Tony is unresponsive. Peter breaks down and hugs him.]

PETER PARKER: I'm sorry– Tony–

[Peter is gently led aside to grieve. Pepper Potts sits in front of the fading Iron Man.]

PEPPER POTTS: Hey.

[Tony is barely able to move his head, but manages to look Pepper in the eyes]

TONY STARK: [quietly] Hey, Pep..

[Pepper places her hand on Tony's Arc Reactor and Tony rests his hand on hers. Pepper takes a good look at Tony's fatal injuries.]

[pepper kneels]

PEPPER POTTS: F.R.I.D.A.Y.?

F.R.I.D.A.Y.: Life functions critical.

[Tony smiles with tears in his eyes.]

PEPPER POTTS: Tony. Look at me. [She makes sure Tony gets a long look at her smiling face] We're gonna be okay. You can rest now.

[With that acknowledgement, Tony's arc reactor flickers off for good. Pepper can no longer contain her grief and starts crying on his shoulder. Tony Stark, Iron Man, Earth's Best Defender, died. All the heroes gather, and kneel in honor of Tony.]

[We cut to a montage showing reunions and celebrations. At Clint Barton's farm, he joyfully reunites with his family. At Peter Parker's school, Peter and Ned meet in the hallways. They share a handshake before giving each other a heartfelt hug. In San Francisco, Scott Lang watches fireworks with Cassie Lang and Hope Van Dyne. In Wakanda, T'Cahlla, Shuri, and Ramonda oversee the celebrations from their balcony. Over all this, we hear Tony's voice narrating.]

TONY STARK (voiceover): Everybody wants a happy ending, right? But it doesn't always roll that way. Maybe this time. I'm hoping if you play this back, it's in celebration. I hope families are reunited, I hope we get it back, and something like a normal version of the planet has been restored. If there ever was such a thing. God, what a world. Universe, now. If you told me ten years ago that we weren't alone, let alone, you know, to this extent, I mean, I wouldn't have been surprised. But come on, you know? The epic forces of darkness and light that have come into play. And, for better or worse, that's the reality Morgan's gonna have to find a way to grow up in.

[Cut to the Stark household. Pepper, Morgan, Happy Hogan, and Rhodey all watch Tony's holographic message being projected from his Iron Man helmet. Tony is sitting down recording the message.]

TONY STARK (hologram): So I thought I'd probably better record a little greeting... In the case of an untimely death on my part. I mean, not that, death at any time isn't untimely. This time travel thing that we're gonna try and pull off tomorrow, it's– it's got me scratching my head about the survivability of it all. That's the thing. Then again, that's the hero gig. Part of the journey is the end. [Tony suddenly gets up walking towards his camera] What am I even trippin' for? Everything's gonna work out exactly the way it's supposed to. [He leans down and smiles. He is looking straight at Morgan] I love you 3,000.

[The message ends and the hologram cuts out.]

[Cut to outside the cottage. Pepper carries a wreath out of the house to an audience waiting outside for the intimate funeral. She lays the wreath on the lake. On top of the wreath is Tony's first arc reactor which Pepper had framed with the words "Proof That Tony Stark Has a Heart" back in 2008. The camera slowly pans to see Pepper, Morgan, Happy Hogan, & Rhodey, all being joined by Steve Rogers, Peter Parker, May Parker, Thor, Bruce Banner, Doctor Strange, Wong, Scott Lang, Hope Van Dyne, Janet Van Dyne, Hank Pym, Peter Quill, Nebula, Rocket, Teenage Groot, Drax, Mantis, T'Challa, Okoye, Shuri, Clint Barton & his family, Wanda Maximoff, Bucky Barnes, Sam Wilson, Harley Keener, Secretary Ross, Maria Hill, Carol Danvers, and Nick Fury, silently watching the wreath float away.]

[Cut to Clint and Wanda, standing by the riverside shortly afterwards.]

CLINT: You know, I wish there was a way– that I could let her know. That we won. [Looks over to Wanda.] We did it.

WANDA MAXIMOFF: She knows– They both do.

[Clint gives her a side hug and Wanda reciprocates.]

[scene cuts to Happy and Morgan.]

HAPPY: How you doing, Squirt?

MORGAN STARK: Good.

HAPPY: You good? Okay. You hungry?

MORGAN STARK: Mm. Hm.

HAPPY: What do you want?

MORGAN STARK: Cheeseburgers.

HAPPY: You know your dad liked cheeseburgers? I'm gonna get you all the cheeseburgers you want.

MORGAN STARK: Okay.

[Following the funeral for Tony, we cut to Thor and Valkyrie in New Asgard.]

VALKYRIE: So, when can we expect you back?

THOR: Um– about that–

VALKYRIE: Thor. Your people need a king.

THOR: No, they already have one.

VALKYRIE: That's funny. You're being serious?

[Thor nods his head]

THOR: It's time for me to be who I am rather than who I'm supposed to be. But you, you're a leader. That's who you are.

VALKYRIE: You know I'd make a lot of changes around here.

THOR: I'm counting on it. Your Majesty.

[Thor offers Valkyrie a farewell handshake]

VALKYRIE: What will you do?

THOR: I'm not sure. For the first time in a thousand years, I– I have no path. I do have a ride, though.

[Camera pans to the Benatar parked on the cliff]

ROCKET: Move it or lose it, hairbag.

[scene cuts to Quill searching for Gamora on the screen as Thor walks in he closes it]

THOR: Well, here we are. Tree! Good to see you. Well– [Thor removes his shades and taps Quill on the shoulder] The Asgardians of the Galaxy, back together again. Where to first? [Thor touches the screens map to pick their destination]

QUILL: Hey, just so you know, this is my ship still. I'm in charge.

THOR: I know. I know. Of course, you are. Of course.

QUILL: See, you say of course, but then you touch the map. It makes you think that maybe you didn't realize I was in charge.

THOR: Quail– you– that– that's your own–

QUILL: Quail?

THOR: –insecurities in there. Okay? I'm merely trying to be of service and assisting.

QUILL: It's Quill.

THOR: That's what I said.

DRAX: You should fight one another for the honor of leadership.

NEBULA: Sounds fair.

[Quill looks around]

QUILL: It's not necessary.

THOR: It's not.

QUILL: Okay?

ROCKET: I got some blasters, unless you guys wanna use knives.

MANTIS: [enthusiastically] Oooh, yes. Please, use knives.

DRAX: Yeah, knives.

GROOT: I am Groot.

[Both Thor and Quill laugh but Quill tries to laugh harder]

QUILL: Not necessary...

THOR: There shall be no knifing one another. Everybody knows who's in charge.

QUILL: [glances at Thor] Me, right?

THOR: Yes, you. Of course. Of course. Of course.

[Scene cuts to Bruce, Steve, Sam and Bucky at the funeral]

BRUCE BANNER: Now, remember– You have to return the stones to the exact moment you got them. Or you're gonna open up a bunch of nasty alternative realities.

STEVE ROGERS: Don't worry, Bruce. Clip all the branches.

BRUCE BANNER: You know, I tried. When I had the gauntlet, the stones, I really tried to bring her back. [Looks at Steve] I miss her, man.

STEVE ROGERS: Me, too.

Sam Wilson: You know, if you want, I can come with you.

STEVE ROGERS: You're a good man, Sam. This one's on me, though.

[Steve goes over to Bucky]

STEVE ROGERS: Don't do anything stupid 'till I get back.

BUCKY BARNES: How can I? You're taking all the stupid with you.

[They both hug each other]

BUCKY BARNES: Gonna miss you, Buddy.

STEVE ROGERS: It's gonna be okay, Buck.

[Steve goes over to the Quantum portal and dons the Quantum suit]

Sam Wilson: How long is this gonna take?

BRUCE BANNER: For him? As long as he needs. For us? Five seconds.

[Steve picks up Mjolnir (2013)]

BRUCE BANNER: Ready, Cap? Alright. We'll meet you back here, okay?

STEVE ROGERS: You bet.

BRUCE BANNER: Going quantum. Three, two, one–

[Steve disappears into the Quantum portal]

BRUCE BANNER: And returning in, five, four, three, two, one–

[Steve doesn't appear on the pad. Bruce looks around the equipment]

Sam Wilson: Where is he?

BRUCE BANNER: I don't know. He blew right by his time stamp. He should be here.

[Bucky turns around from the pad]

Sam Wilson: Well, get him back.

BRUCE BANNER: I'm trying.

Sam Wilson: Get him the hell back!

BRUCE BANNER: Hey, I said, I'm trying!

BUCKY BARNES: Sam...

[Sam walks toward Bucky. Sam, Bucky, and Bruce see old looking Steve sitting on a log. Sam and Bucky go near him.]

BUCKY BARNES: Go ahead.

[Bucky has a smile forming and looks over to Sam. He walks towards the old man and instantly recognizes the now-elderly Steve Rogers]

Sam Wilson: Cap?

(OLD) STEVE ROGERS: Hi, Sam.

[Old Steve looks over to Sam]

Sam Wilson: So did something go wrong, or did something go right?

(OLD) STEVE ROGERS: Well, after I put the stones back, I thought, maybe I'll try some of that life Tony was telling me to get.

Sam Wilson: How'd that work out for you?

(OLD) STEVE ROGERS: It was beautiful.

Sam Wilson: I'm happy for you. Truly.

(OLD) STEVE ROGERS: Thank you.

Sam Wilson: Only thing bumming me out is the fact I have to live in a world without Captain America.

(OLD) STEVE ROGERS: Oh, That reminds me. [brings out his shield.] Try it on.

[Sam look over to Bucky, who nods, and Sam holds Steve's shield.]

(OLD) STEVE ROGERS: How does it feel?

Sam Wilson: Like it's someone else's.

(OLD) STEVE ROGERS: It isn't.

[Sam tries to hold back tears]

Sam Wilson: Thank you. I'll do my best.

(OLD) STEVE ROGERS: That's why it's yours. [shakes Sam's hand]

Sam Wilson: [seeing elderly Steve's wedding ring] You wanna tell me about her?

(OLD) STEVE ROGERS: [smiling] No. No, I don't think I will. [Last lines]

[In the final scenes, Steve has time traveled back to the 1940s to be with Peggy Carter. They are seen dancing to "It's Been a Long, Long Time" in their home, and they end with a kiss.]

[In the very end of the film, the sound of hammering metal is heard in the background. A dedication to Tony Stark and a callback to the first Iron Man]

[Closing Title: Marvel Studios]

[Screen Title: Distributed by Walt Disney Studios Motion Pictures]

The End.
`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)
