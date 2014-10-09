# Who Is Where

A fast and smart tool for big offices!

![Full view](https://raw.githubusercontent.com/mateuszgachowski/WhoIsWhere/master/media/images/sample1.png "Full view office")
![User popup](https://raw.githubusercontent.com/mateuszgachowski/WhoIsWhere/master/media/images/sample2.png "Profile popup")
![Desk Numbers](https://raw.githubusercontent.com/mateuszgachowski/WhoIsWhere/master/media/images/sample3.png "Desk numbers")

## Installation
```
bower install
```

## External API

WhoIsWhere is using an external API
that you will find on my GitHub account. You can use your own  if you want of course!

Database schema:

```sql

CREATE TABLE `desks` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `x` int(11) DEFAULT NULL,
  `y` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `desks` (`id`, `x`, `y`)
VALUES
	(1,65,14),
	(2,65,67);

CREATE TABLE `people` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL DEFAULT '',
  `position` varchar(255) DEFAULT NULL,
  `birthday` date DEFAULT NULL,
  `deskId` int(11) unsigned DEFAULT NULL,
  `projectId` int(11) unsigned DEFAULT NULL,
  `teamId` int(11) unsigned DEFAULT NULL,
  `image` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `PERSON_NAME` (`name`),
  KEY `deskId` (`deskId`),
  KEY `projectId` (`projectId`),
  KEY `teamId` (`teamId`),
  CONSTRAINT `people_ibfk_1` FOREIGN KEY (`deskId`) REFERENCES `desks` (`id`),
  CONSTRAINT `people_ibfk_2` FOREIGN KEY (`projectId`) REFERENCES `projects` (`id`),
  CONSTRAINT `people_ibfk_3` FOREIGN KEY (`teamId`) REFERENCES `teams` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `people` (`id`, `name`, `position`, `birthday`, `deskId`, `projectId`, `teamId`, `image`)
VALUES
	(1,'John Doh','Senior Team Manager',NULL,1,NULL,NULL,NULL),
	(2,'Kevin Mitnick','Hacker','1963-08-06',2,NULL,NULL,NULL);

CREATE TABLE `projects` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `productName` varchar(255) DEFAULT NULL,
  `projectName` varchar(255) DEFAULT NULL,
  `logo` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE `teams` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `logo` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

```

API routings are following and should return data in exact format:

`http://yourdomain/api/getDesks` - as desk position on the office image

```json
{"data":
  [
    {"id":1, "x":65, "y":14},
    {"id":2, "x":65, "y":67}
  ]
}
```

`http://yourdomain/api/getPeople` - as people with connected desks

```json
{"data":
  [
    {
      "id": 1,
      "name": "John Doh",
      "position": "Senior Team Manager",
      "birthday": null,
      "deskId": 1,
      "projectId": null,
      "teamId": null,
      "image": null,
      "teamName": null,
      "teamLogo": null,
      "productName": null,
      "projectName": null,
      "projectLogo": null
    },
    {
      "id": 2,
      "name": "Kevin Mitnick",
      "position": "Hacker",
      "birthday": "1963-08-06",
      "deskId": 2,
      "projectId": null,
      "teamId": null,
      "image": null,
      "teamName": null,
      "teamLogo": null,
      "productName": null,
      "projectName": null,
      "projectLogo": null

    }
  ]
}
```
