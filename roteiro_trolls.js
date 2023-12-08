async function sendScript(scriptText){
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
Poppy: Once upon a time... In a happy forest, in the happiest tree... Lived the happiest creatures the world has ever known. The Trolls. They loved nothing more than to sing, and dance, and hug. Dance, and hug, and sing, and dance, and sing, and hug, and dance... And hug, and dance, and sing, and hug, and dance, and hug... But then one day, the Trolls were discovered by... A Bergen! The Bergens didn't know how to sing... Or dance... or even hug. They were the most miserable creatures in all the land. And once they saw how happy the Trolls were... They wanted some of that happiness for themselves. Eating a Troll made them feel so happy... They started a tradition. Once a year, every year... The Bergens would gather around the Troll tree... To taste happiness... On a holiday they called... Trollstice.

Good morning, Daddy!

Daddy, wake up! Daddy, wake up! Wake up! Wake up, Daddy!

Wake up, Daddy.

Daddy! Daddy! Daddy! Daddy!

Daddy, wake up!

Gristle! What time is it?

It's Trollstice!

Trollstice! Our one day to be happy.

Yeah!

Trolls! Trolls! Trolls!

Trolls! Trolls! Trolls!

Chef: Please give it up for your keeper of the Trolls... Your minister of happiness... Your Royal Chef... Me. This is a very special Trollstice... As there is one amongst us who has never tasted a Troll.

Gristle: Me! She is talking about me!

Chef: Prince Gristle... The time has come.

King: It's okay, son. I remember being nervous my first time.

Gristle: Okay.

King: That's my boy.

Chef: It is my sacred duty... To initiate you in the ways of true happiness. I have chosen an extra-Special Troll, just for you. The happiest, the most positive... Sweetest Troll of all. And because every prince deserves a princess... I give you the one they call Princess Poppy.

Gristle: Please make me happy, Princess Poppy.

Chef: What are you feeling?

Gristle: That one's rotten!

Chef: It's fake?

Bergens: Fake?

King: Fake?

Gristle: They're gone?

King: Where are they?

Chef: Don't worry, sire. We'll find them.

Gristle: I think I hear something!

Go! Go!

We got Poppy!

Pass her to me! Here comes Poppy!

Here she is!

There's my princess.

Da-da.

King Peppy, some of the others can't keep up.

No Troll left behind!

Thank you, King Peppy!

Thank you, King Peppy! Thank you!

Thank you, King Peppy.

No Troll left behind!

Gristle: Daddy, where are they?

King: Don't just stand there! Make my son happy!

Chef: He will be happy!

Where is he?

I don't think King Peppy made it.

When I say no Troll left behind...

I mean, no Troll left behind!

King Peppy, where's Princess Poppy?

Don't worry. She's safe.

No Troll left behind!

But we'll be a lot safer the further we get from Bergen Town.

Go, go! Hurry!

King: That's right! Take her away! Get her out of my sight! She is hereby banished from Bergen Town forever.

Chef: We can all be happy again. I'll find the Trolls! And shove them down your ungrateful throats.

Gristle: But, Daddy... I never got to eat a Troll. What's gonna make me happy now?

King: Come here, son. Nothing. Absolutely nothing. You will never, ever, ever, ever be happy.

Gristle: Never?

King: Ever.

Here! Right here!

This is where we will rebuild our civilization.

It has everything we need.

Fresh air, clean water...

And sweet acoustics.

Ba de ya say do you remember Ba de ya dancing in September Ba de ya never was a cloudy day

Twenty years ago today, King Peppy made us safe... And now every Troll is free to be happy and live in perfect...

Harmony Harmony Harmony And that's why we hug every hour.

Yep.

I wish it was every half hour.

So do I.

But that wouldn't leave much time for singing and dancing, now would it?

Princess Poppy, do the Bergens still want to eat us?

You bet!

But just because it's the only way they'll ever be happy.

Oh, no. I do taste delicious.

Isn't there anything else to make them happy?

What about having birthday parties?

Or slumber parties?

Or staring at your parents while they sleep.

But I don't want to be food.

Don't worry. No Troll ever will be.

And that's why we're celebrating with the biggest party ever.

Everybody's gonna be there.

Everybody?

Everybody.

Everybody, move your hair and feel united

Everybody, shake your hair and feel united

Yeah, everybody's coming to the celebration I'ma hook you up with the invitation let your hair swing and party with me No bad vibes just love, you'll see Do the D-A-N-C-E, one-two-three-four fight Stick to the B-E-A-T, get ready to Ignite You are such a P-Y-T catching all the lights Just easy as A-B-C that's how you make it right It ain't hard out here when you're doing it right Put a smile on blast that's the Troll life And I'm here to help you through it come on, Smidge, I know you can do it Your confidence gives me strength.

Okay, Mr. Dinkles.

Say, leaves!

Something's missing.

That's it!

Don't stop, don't stop don't stop the beat I can't stop, can't stop can't stop the beat I won't stop, won't stop won't stop the beat Go!

Everybody, shake your hair and feel united

Sunshine day, everybody's singing Sunshine day Everybody, move your hair and feel united

Yeah!

Unbelievable, guys.

Really, really great. Good job.

I could hear you from a mile away!

Good. I was worried we weren't projecting enough.

Poppy, if I can hear you, so can the Bergens.

Oh, boy.

Here we go again. Oh, Branch...

You always ruin everything.

Warning us about the Bergens.

No, I don't.

The Bergens are coming!

The Bergens are coming!

The Bergens are coming!

Come on! We haven't seen a Bergen in 20 years.

They're not gonna find us.

No, they're not going to find me, because I'll be in my highly camouflaged...

Heavily fortified, Bergen-proof survival bunker.

You mean you're not coming to the party tonight?

But it's going to be the biggest...

The loudest...

The craziest party ever!

Big? Loud?

Crazy?

You're just gonna lead the Bergens right to us!

Are you sure you wanna invite this party pooper to poop on your party?

Yes. I think everyone deserves to be happy.

I don't do happy.

Branch, I know you have happiness inside you.

You just need our help to find it.

Celebrate freedom from the Bergens

What do you say, Branch?

Oh, my God.

I wouldn't be caught dead at your party, but you will be.

Caught and dead.

Whoa, whoa.

Easy, Branch. Easy.

Thank you for providing safe passage, brother.

Namaste.

Okay, first of all, mate, thanks for sharing your unique perspective on things.

Again.

But, just for now, why don't you try on some positivity, eh?

A little positivity might go with that vest.

Okay, fine.

I'm positive you all are going to get eaten.

Hug time! It is hug time.

Hug time!

That feels good. Our hearts are synchronizing!

I can squeeze you forever

Someday, when the Bergens find us...

And the survival of every Troll is in your hands...

I sure hope the answer is singing, dancing, and hugging...

Because that's all you know how to do.

That is not true! Poppy can also scrapbook.

I can't believe you're gonna be queen one day.

Tune out his negative vibrations, Poppy. They're toxic.

Some folks just don't want to be happy.

I guess.

You guessed right.

Boop.

Yeah!

I love you so much!

Yeah!

Whoo! Glitter!

Yolo!

More glitter!

Turn it up!

I can't hear you!

Trolls.

Okay, everyone.

I just want to take a moment...

And get a little real.

Poppy!

She's my friend! I know her!

I'd like to take a second to celebrate our king...

My father...

Who, 20 years ago this night...

Saved all of us from those dreaded...

Bergens.

Gotcha.

Cupcake?

Run!

Run! Run!

Poppy, help!

Mr. Dinkles?

Has anybody seen Mr. Dinkles?

Biggie!

Blend in! Blend in! Blend in!

Poppy!

Run!

Run, Smidge!

Oh, my God!

Poppy, help!

Hurry!

Go! Go! Go!

Cooper! Everyone, minimize your auras!

Creek! No! Poppy!

Hold on. Poppy!

No! Creek!

Bad Bergen! Bad, bad Bergen.

Bad, bad Bergen!

Dad!

Thanks for throwing the biggest...

The loudest...

The craziest party ever.

Is it coming back?

What are we gonna do now?

We have to find a new home. Everyone, hurry.

We have to leave before the Bergens come back.

We have to rescue them.

No, Poppy, we have to run. Now, let's go, everyone. Come on!

What about "no Troll left behind"?

I'm sorry, Poppy.

That was a long time ago. And I'm not the king I once was.

Then I'll go.

I'll go and save them.

No, Poppy. It's too dangerous.

I have to at least try.

No. You can't go to Bergen Town by yourself.

It's impossible.

Celebrate freedom from the Bergens Celebrate freedom from the Bergens

Branch, you're invited!

No! No! No!

Branch! Branch! Branch!

Branch, are you in there?

I'm not going to your party.

The party's over. We just got attacked by a Bergen.

I knew it.

Branch!

I have to tell you something.

I was just gonna...

What?

What could be so important that it's worth leading the Bergen right to us?

The Bergen's gone!

You don't know that. It could still be out there.

Watching.

Waiting.

Listening.

No. It left!

It took Cooper, and Smidge, and Fuzzbert...

And Satin, and Chenille, and Biggie, and Guy Diamond, and Creek!

Which is why I have to ask you.

Will you go to Bergen Town with me and save everyone?

What? No.

Branch, you can't say no. They're your friends.

They're your friends.

I'm staying right here in my bunker where it's safe.

That's great.

You're the one guy who knows more about Bergens than anyone...

But when we finally need you, you just want to hide here forever?

Forever? No.

Yeah...

I really only have enough supplies down here to last me 10 years...

11 if I'm willing to store and drink my own sweat.

Which I am.

You all said I was crazy, huh?

Well, who's crazy now?

Me. Crazy prepared.

I'm sorry. I should have listened to you.

You told me not to throw the party, and I threw it anyway.

And it's my fault they were taken.

And now I don't know what to do.

Why don't you try scrapbooking them to freedom?

Solid burn, Branch.

Well, thanks anyway.

Hey, anytime, Poppy. See you in 10 years.

Oh, hey, Branch?

Just wondering if I could borrow something.

What?

Your bunker. What?

Okay, everybody. Come on in!

Hi, Branch!

No! No! No!

Whoa, wait! Poppy, what are you doing?

You said you have enough provisions to last 10 years, right?

Yes, to last me 10 years. Me!

It'll last them two weeks!

Then I guess I better hurry.

Wait, wait, wait!

You won't last a day out there.

And you won't last a day in here.

Chug, chug, chug!

Solid burn, returned.

Sorry, Branch!

Poppy, wait.

Please be careful.

Don't worry, Dad. I can do this.

I love you, Poppy.

I love you too, Dad.

They grow up so fast.

Bye, everybody! See you soon!

Good luck, Princess Poppy!

And three, two, one.

Hug time!

No.

Hug time! Hug time! Hug time!

No! No!

With her friends safely hidden...

Princess Poppy set off to rescue her other friends...

Confident she'd make it to Bergen Town on her own.

Convinced she'd make it to Bergen Town.

Totally sure she'd make it to Bergen Town.

I really hope I can do it

'Cause they're all depending on me I know that I must leave the only home I've ever known And brave the dangers of the forest saving them before they're eaten I mean, how hard can that be?

Looking up at a sunny sky so shiny and blue and there's a butterfly Well, isn't that a super fantastic sign?

It's gonna be a fantastic day Such marvelousness it's gonna bring Got a pocket full of songs that I'm gonna sing And I'm ready to take on anything Hooray!

Some super fun surprise around each corner Just riding on a rainbow I'm gonna be okay Hey! I'm not giving up today There's nothing getting in my way And if you knock, knock me over I will get back up again Oh! If something goes a little wrong Well, you can go ahead and bring it on

'Cause if you knock, knock me over I will get back up again

Get back up again

I'm marching along I've got confidence I'm cooler than a pack of peppermints And I haven't been this excited Since I can't remember when I'm off on this remarkable adventure Just riding on a rainbow But what if it's all a big mistake?

What if it's more than I can take?

No, I can't think that way

'Cause I know that I'm really, really, really gonna be okay Hey! I'm not giving up today There's nothing getting in my way And if you knock, knock me over I will get back up again If something goes a little wrong well, you can go ahead and bring it on

'Cause if you knock, knock me over I will get back up again

Get back up again

I'm okay!

And if you knock, knock me over you knock, knock me over I will get back up again

Branch: Get back! Oh, no! Poppy? Hang on!

Poppy: Get back up again Branch, my man! You are right on time.

Branch: Oh, right. Like you knew I was coming.

Poppy: Yes! I figured after the third hug time... Getting eaten by a Bergen wouldn't seem so bad.

Branch: And I figured there was no way you could do this by yourself. Guess we were both right.

Poppy: All right. Let's do this! Sooner we get to Bergen Town, sooner we can rescue everybody... And make it home safely.

Branch: Wait, wait, wait. What's your plan?

Poppy: I just told you. To rescue everyone and make it home safely.

Branch: Okay. That's not a plan. That's a wish list.

Poppy: Oh! I suppose you have a plan.

Branch: First... We get to the edge of Bergen Town without being spotted. Then, we get inside by sneaking through the old escape tunnels... Which will then lead us to the Troll tree... Right before we get caught, and suffer a miserable death... At the hands of a horrible, bloodthirsty Bergen! Hold on a second, are you scrapbooking my plan?

Poppy: Yeah. Almost... Done!

We did it!

Branch: There will be no more... scrapbooking.

Branch: Do you have to sing?

Poppy: I always sing when I'm in a good mood.

Branch: Do you have to be in a good mood?

Poppy: Why wouldn't I be? By this time tomorrow, I'll be with all my friends! I wonder what they're doing right now.

Branch: Probably being digested.

Poppy: They're alive, Branch. I know it!

Branch: You don't know anything, Poppy. And I can't wait to see the look on your face... When you realize the world isn't all cupcakes and rainbows. 'Cause it isn't. Bad things happen... And there's nothing you can do about it.

Poppy: Hey, I know it's not all cupcakes and rainbows.

But I'd rather go through life thinking that it mostly is... Instead of being like you. You don't sing, you don't dance. So grey all the time! What happened to you? A Bergen?

Branch: Maybe.

Poppy: There's no Bergen, is there? You just said that so I'd stop talking.

Branch: Maybe.

[Later that night]

Poppy: So special. Goodnight, Cooper. Good night, Smidge. Good night, Fuzzbert. Good night, Satin. Good night, Chenille. Good night, Biggie. Good night, DJ. Good night, Guy Diamond. Good night, Creek. Boop.

Branch: And good night, Poppy. Don't even think about it.

Poppy: Stars shining bright above you

Branch: Really? Seriously? More singing?

Poppy: Yes, seriously! Singing helps me relax. Maybe you ought to try it.

Branch: I don't sing, and I don't relax. This is the way I am, and I like it. I also like a little silence.

Poppy: Hello, darkness, my old friend I've come to talk with you again Hello.

Because a vision softly creeping Left its seeds while I was sleeping And the vision that was planted in my brain Still remains Within the sound...

Of silence

Branch: May I?

Poppy: So one of these tunnels leads to the Troll tree.

Branch: That's right.

Poppy: There's so many of them. I wonder which one.

Branch: I don't know.

Choose a hole wisely! For one will lead to Bergen Town... And the others, to certain death.

Branch: Who said that?

It was... Me. Hey, guys, how's it going? Welcome to the root tunnels.

I just wanted to warn you.

One of these tunnels leads to the Troll tree...

And the others to certain death, death, death, death...

Do you think you can tell us which is the right one?

You bet!

Great! No, that's okay. We're fine, thanks!

Branch.

He's trying to help us.

I don't like the looks of him.

I mean, who wears socks with no shoes?

He seems to know what he's talking about.

Okay, fine.

Which way do we go?

First, you have to give me a high five. Then I'll tell you.

What? I love high fives. I'll do it.

Oh, I know you'll do it.

But will he?

All right, dumpy diapers, up high!

Nope, I don't do high fives.

Slap it, boss. Not gonna happen.

Party on the top floor. Nope.

Little slappy. Make Daddy happy.

That's weird.

Come on, just one little high five.

No, thanks. I'm good.

Here, just do this...

But with your hand.

Thank you for that demonstration.

Really cleared up exactly what I will not be doing.

Branch, it's a high five.

The others lead to certain death. Get perspective.

One high five and then you'll tell us which tunnel to take, right?

So easy.

Okay, fine!

Too slow.

Too slow?

Classic.

No, no. All right.

I'm gonna let you slide with a fist bump.

Shark attack! Nom-nom-nom-nom. Jellyfish!

Hand sandwich. Turkey. Snowman. Dolphin. Helicopter. Last supper. Monkey in a zoo.

What? Gear shift.

Okay, okay, okay. Now I'm thinking we hug.

Branch: That's right. You better run, cloud! I'm gonna tear your little cloud arms... Off your cloud body, and high five your face with them!

Poppy: He's just a cloud! Get back here! Branch! He can help us!

Branch: Come back!

Poppy: Run, Cloud Guy!

Branch: I'm gonna kill you!

Cloud Guy: Ta-da! We're here! You guys are a lot of fun. You know, I gotta go. Got some cloud stuff to take care of. Catch you on the way back? Unless... You die.

Poppy: The Troll tree.

Branch: Bergen Town.

I ain't happy, I'm feeling glad I got sunshine in a bag I'm useless But not for long the future is coming on I ain't happy, I'm feeling glad I got sunshine in a bag I'm useless But not for long the future is coming on Is coming on is coming on Coming on is coming on Is coming on is coming on

Poppy: Wow. They're as miserable as you. Which means they haven't eaten a Troll yet. Now, come on. Let's go save our friends.

Branch: Your friends.

Poppy: Our friends. Don't fight it.

Gristle: Oh, Barnabus. You're my only friend in this whole miserable world. Dad was right. I'll never ever, never ever, never be happy. Never.

Chef: Never say never. Chad. Todd.

Gristle: Chef, where did you come from? My father banished you 20 years ago. Have you been standing behind that plant this whole time?

Chef: If only, sire. No. I've been out in the wilderness... Thinking of nothing but how I let you down. If only there was some way I could make you feel better.

Gristle: Well, fat chance! The only way I'll ever be happy is by eating a Troll... And that ain't gonna happen, thanks to you.

Chef: But it just might. Thanks to me.

Gristle: You found the Trolls. So this means I might actually get to be happy!

Chef: That's right. Of course, everyone else in Bergen Town will still be miserable... But that's not your concern.

Gristle: I am their king, so maybe it kinda is.

Chef: What exactly are you proposing? Bringing back Trollstice? For everyone?

Gristle: Yes! That's exactly what I'm proposing.

Chef: Great idea, sire. Absolutely brilliant. Aren't you smart?

Gristle: I guess I am.

Chef: And I, your loyal Chef, will be right behind you. Holding a knife.

Gristle: What's that?

Chef: Holding a knife, a spoon, a ladle. I'm your chef, after all!

Gristle: Yeah, you sure are.

Chef: I'm back! You, scullery maid, what's your name?

Bridget: Bridget.

Chef: Congratulations, Idget. You work for me now. So you take those dishes downstairs and you start scrubbing.

Bridget: Yes, Chef. Thank you, Chef.

Biggie: Don't cry, Mr. Dinkles. Guys, Mr. Dinkles is really freaking out!

Creek: Whoa, whoa! Everyone, we must all remain calm. Comb

Chef: That's right. A calm Troll is a tasty Troll. And you are a key ingredient in my recipe for success. You see... He who controls the Trolls controls the kingdom. And I am that "he!"

Cooper: You're a dude?

Chef: By this time tomorrow, I'll be queen... And all of Bergen Town will get exactly what they deserve. True happiness!

Poppy: So where do you think our friends are?

Branch: If I had to guess, I'd say in a Bergen's stomach.

Poppy: Could you try to be positive? Just once. You might like it.

Branch: Okay. I'm sure they're not only alive... But about to be delivered to us on a silver platter.

Poppy: Thank you. That wasn't so hard, was it? Branch!

Branch: Hug time? Seriously?

Poppy: Listen.

Gristle: This is gonna be the best Trollstice ever! Such a great idea I had.

Chef: Yes. Tomorrow is Trollstice, everyone. And it must be perfect!

Cooks: Yes, Chef!

Chef: Feels great to be ordering everyone around again.

Poppy: Branch, look!

Branch: They're alive?

Poppy: And on a silver platter, too. We were both right.

Chef: And to mark the occasion, Your Highness, look. I found your old Troll bib.

Gristle: Wow! I bet you still fit. Like a glove! [to the trolls] You think that's funny? We'll see who's laughing when I bite your yummy head off. When I bite all y'alls yummy heads off. Wait a minute. Chef, this isn't enough yummy heads to feed all of Bergen Town. How are we supposed to have Trollstice if there's not enough Trolls?

Chef: There's plenty more where that came from, sire.

Gristle: Are you sure? Because I promised everyone a Troll.

Chef: No, no, no, sire! Everything will be fine. If I were truly worried... Would I be willing to do this?

Poppy: Creek!

Gristle: My first Troll!

Chef: Go on, eat, King Gristle. Enjoy a taste of true happiness.

Gristle: Shouldn't we wait for Trollstice?

Chef: Sire, every day is Trollstice when you have Trolls.

Gristle: Yeah, I guess. But my dad said the first time should be special.

Chef: Well, you're the king now.

Gristle: Yeah, I am the king. But I think I should share this moment with all the kingdom.

Chef: Eat it!

Smidge: Oh, my God!

Poppy: NO!

Chef: Yes! Idget, lock these Trolls in your room and guard them with your life.

Bridget: Yes, Chef.

Poppy: Branch, we have to save him!

Branch: Save him from what? His stomach?

Poppy: We didn't see him chew. We didn't see him swallow!

Branch: Face it, Poppy. Sometimes people go into other people's mouths... And they don't come out. If we go after Creek now, we're going to get eaten. I'm sorry... But it's too late for him.

Branch: Poppy!

Chef: Scullery maid! Wash these pots and pans for Trollstice. The king's inviting everyone. Except you.

[Bridget sobbing. Poppy watches her in concern.]

Bridget: I've been alone with you inside my mind

And in my dreams I've kissed your lips A thousand times I sometimes see you pass outside my door

Hello

Is it me you're looking for?

I can see it in your eyes I can see it in your smile You're all I've ever wanted And my arms are open wide

'Cause you know just what to say You're all the idiots! I have to do everything myself.

And you know just what to do I have to get out of bed, I'm supposed to put my own clothes on, tie my own shoes.

And I want to tell you so much I love you

Poppy: She's in love with the king.

Bridget: What are you talking about? Bergens don't have feelings.

Poppy: Well, maybe you don't know everything about the Bergens. Now let's go. Guys!

Trolls: Poppy!

Celebrate good times, come on

It's a celebration

Branch: Shh!

There's a party going on right here

Branch: No! There is not a party going on right here. The sooner we get you guys out of here...

Poppy: The sooner we can save Creek!

Branch: What?

Bridget: Hello? Is it me you're looking for?

Branch: I know you're looking for the cupcakes and rainbows here... But let's face it, Creek's been eaten.

Biggie: They put him in a taco!

Cooper: It was horrible.

Guy Diamond: Sorry, Poppy. Creek's gone.

Branch: Poppy, how could you possibly think Creek's still alive?

Poppy: I don't think he's alive. I hope he's alive, and that's enough.

Branch: How do you always look on the bright side? There is no bright side here. None!

Poppy: There's always a bright side.

Bridget: Hey! Where do you think you're going?

[Trolls scream and run away.]

Bridget: No! Get back in your cage! Chef's gonna be so mad! No!

Poppy: Bridget, stop! You're in love with King Gristle.

Bridget: I don't know what you're talking about. Excuse me! That's not mine. What does it matter? It's not like he even knows I'm alive.

Poppy: Bridget, I can help you! What if there was a way we could both get what we want?

Bridget: You love Gristle, too? You'd better back off, girlfriend!

Poppy: No. Bridget, no. That Troll King Gristle put in his mouth, that's Creek. And I would do anything to save him. The only problem is... We can't get anywhere near the king without him eating us. But... You can. You can walk right up to him and tell him how you feel.

Brodget: As if. I can't just walk right up to the king. His royal awesomeness would never talk to a scullery maid like me.

Poppy: What if he didn't know you were a scullery maid? What if he thought you were this total babe?

Bridget: What kind of total babe would be dressed like a scullery maid? I smell like gravy.

Satin: What if we made you a new outfit?

Chenillie: I'm thinking...

Both: Jumpsuit!

Bridget: What's the point of a jumping suit if I still have this hair?

Poppy: We can fix that.

Bridget: What's the point of a new outfit and new hair... If I don't even know what a total babe would ever say?

Poppy: We can help with that too!

Bridget: Really?

Poppy: What do you say, Bridget? You get us Creek, and we'll get you a date with the king.

Bridget: Let's do it?

Poppy: A 5, 6, 7, 8...

When you look in the mirror let it disappear All your insecurities

Bridget: Wait! Why isn't this one singing?

Cooper: Come on, Branch. Sing with us!

All: Yeah, Branch, sing with us!

Branch: No. That's okay.

Bridget: You don't think this will work?

Branch: No, no. It's not that. I just don't sing.

Poppy: Branch!

Bridget: No. He's right. This idea is stupid. King Gristle will never love me.

Cooper: Come on. Hey, hey. What's all this?

That's right, Bridget. Just let it all out.

Biggie: Bridget, let it go. Just have a good cry. Go, girl! Okay, now bring it back in. Reel it in.

Poppy: Branch, what are you doing? You have to sing!

Branch: I told you, I don't sing.

Poppy: You have to!

Branch: I'm sorry. I can't.

Poppy: No, you can. You just won't.

Branch: Fine. I just won't.

Poppy: You have to!

Branch: No!

Poppy: Yes!

Branch: No!

Poppy: Why not? Why won't you sing?

Branch: Because singing killed my grandma, okay? Now, leave me alone.

Cooper: My uncle broke his neck tap dancing once.

Poppy: How did singing kill your grandma? What song was she singing?

Branch: I was the one singing.

And I need you now tonight And I need you more than ever

Branch: That day, I was so lost in song... I didn't hear my grandma trying to warn me.

Branch! Watch out!

Grandma!

Once upon a time there was light in his life But now there's only love in the dark Nothing he can say

A total eclipse of the heart

Branch: I haven't sung a note since.

Poppy: I'm so sorry, Branch. I had no idea. I just assumed you had a terrible voice.

Branch: No, no, it was like an angel's. At least, that's what grandma used to say. Whoa, whoa. What are you doing? It's not hug time.

Poppy" I just thought you could use one.

Branch: Okay. Okay, I'll help. But I'm still not singing.

Poppy: Okay, people. Hair we go!

You You gotta let it show

I'm comin'

I'm comin'

All right Out

I'm comin'

I'm comin'

Out I'm comin'

Yo! I'm coming out like the sun after rain Ready to shine no time to be playin' feelin' good Gonna get get what I, what I want gonna show every-Everybody How I, how I flaunt Look at me now, my confidence is soaring Dudes be impressed with the points I'm scoring like That ain't boring And it just don't quit watch the king drop his jaw When I'm shaking my hips I'm saying She's coming out She's comin'

It's time to take a stand

- And show the world that I'm comin' out She's comin' out

Gristle: No, no, no! It's all wrong! I'm the king who's bringing back Trollstice. I need a bib to match.

Yes, sire.

Gristle: I look like a child in this one.

Oh, sire!

Gristle: I need something elegant, sophisticated. You know, a man's bib.

Bridget: Oh, he's so beautiful.

Poppy: And so are you.

Bridget: He'll know that I'm just a scullery maid. I got to get out of here.

Poppy:I'll be right here for you, Bridget. We all will.

Bridget: You'll tell me what to say, right?

Poppy: Of course, I will.

Bridget: Of course, I will.

Poppy: Just wait until we get inside.

Sire! I believe I have the perfect bib!

Gristle: It better be! Trollstice is tomorrow night. I mean, I look good. But I have to look great.

Right.

Gristle: It's got a wing-dingle on it!

Your majesty! Look at you! Such a big, big boy.

Grissle: I love it!

Bridget: I think you look fat.

Gristle: What?

Poppy: P-H, phat. Then strike that pose.

Bridget: P-H, phat!

Gristle: Hot lunch! Total honesty from a total babe. And who might you be?

Poppy: Your name is...

Biggle: Lady!

Guy Diamond: Glitter?

Smidge: Sparkles!

Branch: Seriously?

Bridget: My name is Lady Glittersparkles, seriously.

Gristle: Well, my Lady Gittersparkles. Would you care to join me for an evening... At Captain Starfunkle's Roller Rink and Arcade?

Bridget: Would I! Would I?

Poppy: Yes! You'd be delighted.

Bridget: Yes! You'd be delighted.

Gristle: Indeed, I would.

Branch: When are you gonna ask him about Creek?

Poppy: We have to warm him up first. Don't you know anything about romance?

Branch: Of course! I'm passionate about it.

Poppy: Really?

Branch: Don't you know anything about sarcasm?

Cooper: I think I had a sarcasm once.

Gristle: And I'll take one of everything, Bibbly. Things are gonna get messy.

Enjoy your pizza. Here's your tokens.

Bridget: So fancy. Good thing I brought my appetite.

Gristle: You are fantastic!

Poppy: Bridget! Compliment him back!

Bridget: I like your back.

Poppy: No! I meant say something nice about him.

Bridget: But I do like his back.

Branch: Poppy, help her.

Poppy: Your eyes... They're... Ooh! Your ears...

Bridget: Your eyes... Ears...

Biggie: Nose!

Both: Skin!

Cooper: Neck!

Bridget: Skin, neck, ears... Nose, face, back of your head.

Gristle: Are you okay?

Guy Diamond: Your teeth

Bridget: Teeth.

Gristle: What's going on? Are you making fun of me?

Bridget: Your eyes! They're like... Two pools, so deep... I fear if I dive in...

Branch: I might never come up for air.

Bridget: I might never come up for air.

Branch: And your smile... The sun itself turns jealous... And refuses to come out from behind the clouds...

Bridget: Knowing it cannot shine half as bright.

Grsitle: I kinda do have a nice smile, don't I?

Branch: Yes, you do.

Bridget: : I can't believe I'm about to say this...

Biggie: Guys, she's going rogue!

Bridget: But being here with you today... Makes me realize that true happiness is possible.

Grsitle: It is! True happiness is a lot closer than you think. It's right here.

Bridget: That's pretty, I guess.

Gristle: What do you think now?

Branch: Creek?

Poppy: I knew he was alive!

Biggie: Mr. Dinkles, he's alive!

Mr. Dinkles: Oh, snap!

Biggie: You just talked!

Gristle: I've been savoring this little guy.

Creek: Help! Mercy!

Gristle: Tell me, my lady, will I be seeing you at the Trollstice feast?

Bridget: Well, duh. I'll be working.

Poppy: It!

Bridget: It. Working it. You know... Workin' it.

Gristle: Yeah! You're not kidding, you will. Because you're gonna be there as my plus one.

Bridget: Really?

Gristle: Assuming you'll say yes?

Yes!

Gristle: Meantimes, maybe we should find some other way to... Work up an appetite.

Bridget: Oh, yeah? What did you have in mind?

Chef: Your majesty. You seem to be having... Fun.

Gristle: I am! Meet the lovely Lady Glittersparkles.

Chef: You remind me of someone.

Gristle: She's gonna be my plus one.

Chef: Oh, I see. For a moment there ,I was concerned you were changing the plan. Well, this won't be a problem at all, Your Highness. I'll just get my worthless scullery maid to get... Another place setting ready for the lovely... Lady Glittersparkles.

Gristle: Put her place setting next to mine. I want her right by my side... Hey! Lady Glittersparkles? Lady Glittersparkles! I'll see you at Trollstice, yeah? I miss you already.

Cooper: I think the king really likes us.

Biggie: I know, right?

Bridget: That was the greatest day of my life! Thanks, Poppy. Thanks to all of you! Even you, I guess. I just never thought something like that could happen to me. And it just did! I'm so excited I could just scream.

Poppy: I could scream too! Creek is alive! Branch, what's wrong?

Branch: Nothing. I thought we were celebrating.

Cooper: That's your happy shout?

Branch: It's been a while.

Poppy: Well, you're gonna have plenty of practice, because we're gonna save Creek.. And life will be all cupcakes and rainbows again.

Branch: Up top! Too slow.

Satin: Yes! I knew it!

Poppy: Okay, everybody... Let's go save Creek.

Bridget: No! No! You can't leave. Lady Glittersparkles is gonna be the king's plus one at dinner.

Branch: The dinner where they're serving Troll? Yeah, I think we're gonna have to skip that one.

Bridget: No! No, you have to help me be Lady Glittersparkles. I need you.

Poppy: You don't wanna pretend to be someone you're not forever!

Bridget: Then how about just for tomorrow?

Poppy: Bridget, you don't need us anymore. You and the king can make each other happy!

Bridget: That's impossible! Only eating a Troll can make you happy. Everyone knows that! I wish I'd never gone on this stupid date!

Poppy: Bridget...

Bridget: Just go! Get out of my room. Leave me alone.

Poppy: Please, listen.

Chef: Bridget!

Branch: We've gotta go.

Chef: What's going on down there? Bridget, scrub that dish! The king's bringing a plus one.

Bridget: Yes, Chef.

Gristle: We can do this, Barnabus. I just have to lose 30 pounds in the next eight hours.

Poppy: There it is!

I feel good, I feel good I feel good, I feel good I feel good

Poppy: Creek, we'll have you out of there in a second.

Hurry!

Branch: It's stuck!

Poppy: Run!

I feel love

Hey, guys! Over here!

Cooper: Everyone, get in! Let's go.

Branch, give him to me. Go!

Just go!

Branch: Everybody hold on!

Bigggie: Hold it steady, guys.

Poppy: Satin, Chenille, sharp right!

Let's do it!

Poppy: Guy Diamond, glitter him!

Guy Diamond: Eat glitter!

Poppy: Hold on! Creek!

Branch!

We got you!

Gotcha!

No!

Poppy: He can't be gone.

Branch: I'm sorry, Poppy. We're too late.

Chef: Actually... Your timing is perfect. Sorry, but I can't have you leaving before tomorrow's dinner. A dinner to which you are all invited. And when I say all... I mean every Troll in Troll Village.

Poppy: You'll never find them. Not where they're hiding.

Chef: You're right. I couldn't find them. But I could with someone they know. Someone they trust. Someone... Like this guy.

Poppy: Creek! You're alive!

Branch: He's selling us out!

Branch! Wait!

I'm sure there's a reasonable explanation. At least give him a chance.

Thank you, Poppy.

I'm selling you out.

No, stop! No, wait!

Poppy: You better explain yourself, Creek!

Creek: As I was about to accept my fate... I had, what I can only describe as... A spiritual awakening.

Creek: I don't wanna die! Don't eat me. Eat someone else. Anyone else. Everyone else. But not me!

Chef: But the king wants to be happy now.

Creek: Wait! Wait! There must be some other way. I'll do anything.

Poppy: No.... Creek, please don't do this.

Creek: Believe me... I wish there was some other me-not-getting-eaten way.

Chef: But there isn't.

Creek: And now I have to live with this for the rest of my life. At least you get to die with a clear conscience. So, in a way... You could say... I 'm doing this for you. Boop!

Peppy: Listen. It's Poppy's cowbell! My baby did it! Poppy did it! Creek

Trollstice! Trollstice! Trollstice!

Chef: Now let's prepare the main course. The Trolls!

Poppy?

Poppy! Thank goodness you're all right.

I'm doing great.

I got everybody I love thrown in a pot. Thanks for asking.

Poppy? Are you being...

Sarcastic?

Yes!

Oh, my God!

I'm sorry.

I don't know why I thought I could save you.

All I wanted to do was keep everyone safe, like you did, Dad.

But I couldn't.

Poppy.

I let everyone down.

But, Poppy...

You were right, Branch.

The world isn't all cupcakes and rainbows.

Poppy.

You with the sad eyes

Don't be discouraged

Oh, I realize It's hard to take courage In a world full of people You can lose sight of it all The darkness inside you Can make you feel so small

Chef: What are you doing? The king is waiting. Get those Trolls out there!

Bridget: Sorry, Chef.

Chef: Oh, you are sorry.

Show me a smile then Don't be unhappy, can't remember when I last saw you laughing This world makes you crazy And you've taken all you can bear Just call me up

'Cause I will always be there And I see your true colors Shining through I see your true colors And that's why I love you

So don't be afraid To let them show Your true colors True colors are beautiful

I see your true colors

- Shining through True colors I see your true colors That's why I love you So don't be afraid To let them show Your true colors True colors Are beautiful Like a rainbow

Like a rainbow

Thank you!

No. Thank you.

For what?

For showing me how to be happy.

Really? You're finally happy?

Now?

I think so.

Happiness is inside of all of us, right?

Sometimes, you just need someone to help you find it.

What's gonna happen now, Princess Poppy?

I don't know.

But I know we're not giving up.

No.

This is it, Mr. Dinkles. This is it.

Poppy!

Bridget?

Trolls! Trolls! Trolls!

What are you doing?

I can't let them eat you.

But... Come on!

You gotta go!

Hurry! Go, go, go! Get out of here!

No! Bridget, if you go in there without us, you know what they'll do.

I know.

But, Bridget...

It's okay.

It's okay, Poppy.

You showed me what it feels like to be happy.

I never would have known if it wasn't for you.

And I love you for that.

I love you too, Bridget.

Bridget!

Go on, now. You have to hurry!

Come with us.

And make it easier for them to find you?

No way! You have to go. Now!

Bridget!

Bye, Poppy.

Trolls! Trolls! Trolls!

Wait!

Chef, shouldn't we wait for Lady Glittersparkles?

You are absolutely right.

Now, everyone, there will be no Trolls until...

The king's plus one has arrived.

Boo!

We've waited long enough!

Unless...

Unless, what?

Well, unless she doesn't come at all.

But that's crazy talk. Who wouldn't wanna be with you?

Yeah.

Maybe we should start.

Trolls! Trolls! Trolls!

Yeah.

Maybe we should start.

Trolls! Trolls! Trolls!

Trolls! Trolls! Trolls!

Trolls! Trolls! Trolls! Yeah!

Go! Come on. Hurry!

Come on. Everybody, let's go.

No Troll left behind!

Watch your step.

Poppy?

Bridget just ruined her life to save ours. It's not right!

She deserves to be happy as much as we do.

They all do!

All right, everybody. Who's ready to eat Trolls?

King Gristle...

There is only one thing that will ever make you happy...

And only one Bergen who can provide it.

Bon appetit!

They're gone!

Gone?

They're gone?

Idget...

What did you do?

You ate them!

You greedy, greedy pig.

No! I...

She ruined Trollstice!

Guards, lock her up!

Let's get her!

Gristle: Lady Glittersparkles?

Chef: What?

Gristle: But how? Why? Why did you do this?

Poppy: Because she didn't think you would want someone like her.

Bridget: I mean, hello? Is it me you're looking for? I don't think so.

Chef: Guards, finish her!

Poppy: Wait! King Gristle, when you were with Bridget, you were feeling something, weren't you?

Gristle: Yeah, I was. I just thought it was too much pizza.

Bridget: Me, too.

Poppy: That feeling? That was happiness.

All: What?

But you have to eat a Troll to be happy. Everyone knows that! Don't you?

Poppy: But King Gristle's never eaten a Troll in his life, right?

Gristle: No, I haven't. Yet, here I am. My belly empty... And my heart full.

Chef: Don't listen to her! There's only one way to be happy. My way!

Bridget: No!

Chef: With me in charge... I'll serve you Troll every day of the year. With me as queen... All of life will be a never-ending feast of happiness! Come on, eat! Eat!

Poppy: No! Happiness isn't something you put inside. It's already there. Sometimes you just need someone to help you find it.

Can I really be happy?

I want to be happy! And me!

And what about me?

Do you really think I can be happy?

Poppy: Of course! It's inside you! It's inside of all of us! And I don't think it. I feel it!

I got this feeling inside my bones It goes electric wavy when I turn it on

And if you want it inside your soul

Just open up your heart let music take control

I've got that sunshine in my pocket Got that good soul in my feet I feel that hot blood in my body when it drops I can't take my eyes up off it moving so phenomenally The room on lock the way we rock it So don't stop Under the lights, when everything goes Nowhere to hide when I'm getting you close Can't stop, won't stop When we move well you already know Let's go, let's work So just imagine, just imagine, just imagine Nothing I can see but you when you dance, dance, dance Feel the good-good creeping up on you so just dance, dance, dance, come on All those things I shouldn't do but you dance, dance, dance And ain't nobody leaving soon so keep dancing I can't stop the feeling So just dance, dance, dance I can't stop the feeling So just dance, dance, dance I can't stop the feeling So just dance, dance, dance I can't stop the feeling So keep dancing, come on

Yeah, I can't stop the...

Chef: My eyes!

Let's do it!

I can't stop the...

I can't stop the...

I can't stop the...

I can't stop the... I can't stop the...

I can't stop the feeling Nothing I can see but you when you dance, dance, dance I can't stop the feeling Feel the good creeping up on you so just dance, dance, dance I can't stop the feeling All those things I shouldn't do but you dance, dance, dance I can't stop the feeling And ain't nobody leaving soon so keep dancing I can't stop the feeling Got this feeling in my body I can't stop the feeling Got this feeling in my body I can't stop the feeling Wanna see you move your body I can't stop the feeling Got this feeling in my body, come on

Peppy: Our new queen!

Go, Queen Poppy! Way to go, Poppy!

You did it!

Alright, Queen Poppy!

She's my friend! I know her!

So just dance, dance, dance I can't stop the feeling So just dance, dance, dance I can't stop the feeling So keep dancing, come on

Branch: I know it's not officially hug time yet, but...

Poppy: Now that I am queen, I decree that hug time is all the time.

I can't stop the...

I can't stop the...

Cloud Guy: Up high!
`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)
