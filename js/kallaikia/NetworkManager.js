Kallaikia.NetworkManager = function (game) {

if( !Config.socket.connected ) throw new Error("socket is not connected!")

console.log("NetworkManager: Request user login ...");

/*
Event.on('before_send', function(){
	console.log("before send", arguments)
})
*/

Kallaikia.LoginPrompt({ gmcp: 1 });


// window.user = { guest: 1};


console.log("NetworkManager: Spawning network entities ...");

var networkEntities = [];
var controlling;

/*
	game.getSocket().send("LoginPrompt", (function(username, password, position) {
		var playerIndex = players.length;
		players[playerIndex] = { index: playerIndex, name: username, position: new THREE.Vector3(0, 36, 0) };

		s.index = playerIndex;
		players[playerIndex].ready = true;
		s.emit('spawn_myself', players[playerIndex]);
	}));

	game.getSocket().send('walk', function (target) {
		var player = players[s.index];
		if (player && player.ready) {
			player.walkTo = new THREE.Vector3(target.x, target.y, target.z);
		}
	});


	game.getSocket().send('disconnect', function () {
		delete players[s.index];
	});


	function spawn(player, control) {
		console.log('Spawning player character ...');

		var character = new Kallaikia.Character(game);
		character.loadContent(function () {
			if (control)
			game.getCamera().follow(character);
		});

		networkEntities[player.index] = game.entities.push(character) - 1;
	}

	game.getSocket().send('spawn_myself', function (player) {
		spawn(player, true);
		controlling = player.index;
	});

	game.getSocket().send('world state', function (worldState) {
		for (var x = 0; x < networkEntities.length; x++) {
			var networkEntity = networkEntities[x];
			if (networkEntity) {
				var exists = false;
				for (var y = 0; y < worldState.players.length; y++) {
					if (x === worldState.players[y].index) {
						exists = true;
						break;
					}
				}

				if (!exists) {
					game.getScene().remove(game.entities[networkEntity].root);

					delete game.entities[networkEntity];
					networkEntities[x] = null;
				}
			}
		}

		for (var i = 0; i < worldState.players.length; i++) {
			var player = worldState.players[i];

			if (!networkEntities[player.index] && controlling !== player.index) {
				spawn(player, false);
			}

			if (!networkEntities[player.index])
			continue;

			var entity = game.entities[networkEntities[player.index]];

			if (entity && entity.root) {
				var position = new THREE.Vector3(player.position.x, player.position.y, player.position.z);

				if (Math.abs(position.distanceTo(entity.root.position)) > 10) {
					entity.root.position = position;
				}

				if (player.walkTo) {
					var walkTo = new THREE.Vector3(player.walkTo.x, player.walkTo.y, player.walkTo.z);
					console.log('received walk message');
					if (!entity.walkTo || (entity.walkTo.x !== walkTo.x || entity.walkTo.z !== walkTo.z)) {
						console.log('walk!');
						entity.walk(walkTo);
						entity.setAnimation(entity.animations.move);
						entity.root.lookAt(walkTo);
					}
				}
			}
		}
	});

	document.addEventListener('click', function (event) {
		var camera = game.getCamera().camera;

		var vector = new THREE.Vector3((event.clientX / window.innerWidth) * 2 - 1, - (event.clientY / window.innerHeight) * 2 + 1, 0.5);
		game.getProjector().unprojectVector(vector, camera);

		var raycaster = new THREE.Raycaster(camera.position, vector.sub(camera.position).normalize());
		var intersects = raycaster.intersectObject(game.getGround().ground);

		if (intersects.length > 0) {
			var entity = game.entities[networkEntities[controlling]];
			var target = intersects[0].point;
			target.y = entity.root.position.y;

			this.socket.forward('walk', target);

			entity.walk(target);
			entity.setAnimation(entity.animations.move);
			entity.root.lookAt(target);
		}
	}, false);


		*/

}
