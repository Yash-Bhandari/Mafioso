# Mafioso
A lightweight React web app that helps narrate games of Mafia, optimized for mobile use. Backend built with Java Spring.

Both hosting and participating in games is unified in one web application. The narrator creates a game with roles they choose give players a 3 character invite code to join. Upon joining, players input their name and are then allowed to discreetly view the role they have been assigned. They can also view a list of the roles in the game, as well as the names of players that have joined. Only the narrator can see what role each player has.

Note: At the moment the frontend and backend are hosted on servers that sleep from inactivity. If you are the first person to access the site in a while, you may have to wait 15 seconds for the hosts to wake up.

If clicking on links isn't for you, here are some screenshots that outline how Mafioso works.

From the main menu, users can host a new game or join an existing one.
<img src="https://user-images.githubusercontent.com/33205775/71785136-4fa6ad00-2fb9-11ea-87ab-b1b5d656744a.png" width="400">

The host can then add any roles they want before starting the game.

<img src="https://user-images.githubusercontent.com/33205775/71785169-c04dc980-2fb9-11ea-926a-20996eb3f40a.png" width="400">

Once the game is started, the host can give players the invite code and see which role each player has. They can also click on the noose beside a player to mark them as dead.

<img src="https://user-images.githubusercontent.com/33205775/71785330-867dc280-2fbb-11ea-83a2-6b7b19075b2c.png" width="400">

Players can join by going to http://mafioso.red and entering the 3 character invite code.

<img src="https://user-images.githubusercontent.com/33205775/71785360-dfe5f180-2fbb-11ea-8211-3fd643813dc1.png" width="400">

After entering their name, players are randomly assigned one of the remaining available roles. By default, this is hidden to prevent other players from peeking.

<img src="https://user-images.githubusercontent.com/33205775/71785587-96e36c80-2fbe-11ea-9f6e-b84628180fef.png" width="400">
