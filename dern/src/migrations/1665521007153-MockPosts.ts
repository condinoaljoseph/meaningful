import { MigrationInterface, QueryRunner } from "typeorm";

export class MockPosts1665521007156 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`insert into post (title, content, "creatorId", "createdAt") values ('Murderer Lives at Number 21, The (L''assassin habite... au 21)', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', 1, '2022-05-24T19:58:57Z');
    insert into post (title, content, "creatorId", "createdAt") values ('Firewall', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
    
    Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 7, '2022-06-17T03:04:42Z');
    insert into post (title, content, "creatorId", "createdAt") values ('Low Down, The', 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', 3, '2021-11-04T14:36:00Z');
    insert into post (title, content, "creatorId", "createdAt") values ('I.Q.', 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', 4, '2022-03-14T14:19:12Z');
    insert into post (title, content, "creatorId", "createdAt") values ('Prata Palomares', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.
    
    Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.
    
    Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', 3, '2022-04-15T10:37:37Z');
    insert into post (title, content, "creatorId", "createdAt") values ('West (Occident)', 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.
    
    Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.
    
    Sed ante. Vivamus tortor. Duis mattis egestas metus.', 1, '2022-04-02T23:17:51Z');
    insert into post (title, content, "creatorId", "createdAt") values ('Longshots, The', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.
    
    Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.
    
    Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', 4, '2022-01-13T10:46:37Z');
    insert into post (title, content, "creatorId", "createdAt") values ('United Red Army (Jitsuroku Rengo Sekigun: Asama sanso e no michi)', 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.
    
    Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', 3, '2022-05-09T16:20:17Z');
    insert into post (title, content, "creatorId", "createdAt") values ('Underworld', 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.
    
    In congue. Etiam justo. Etiam pretium iaculis justo.
    
    In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', 7, '2022-02-07T13:51:23Z');
    insert into post (title, content, "creatorId", "createdAt") values ('Loving', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', 4, '2022-03-09T13:55:02Z');
    insert into post (title, content, "creatorId", "createdAt") values ('Live Flesh (Carne trémula)', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.', 7, '2022-10-10T02:34:50Z');
    insert into post (title, content, "creatorId", "createdAt") values ('Love Ghost (Shibito no koiwazura)', 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.
    
    Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', 4, '2022-02-21T17:03:06Z');
    insert into post (title, content, "creatorId", "createdAt") values ('Out of Towners, The', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.
    
    Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', 4, '2022-04-10T16:25:20Z');
    insert into post (title, content, "creatorId", "createdAt") values ('Catastroika', 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.
    
    Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.
    
    Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', 1, '2022-08-21T02:37:00Z');
    insert into post (title, content, "creatorId", "createdAt") values ('Get Over It', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.
    
    Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.
    
    Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 1, '2022-02-10T01:44:44Z');
    insert into post (title, content, "creatorId", "createdAt") values ('Autobiography of Nicolae Ceausescu, The (Autobiografia lui Nicolae Ceausescu)', 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.
    
    Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', 7, '2021-11-16T14:47:52Z');
    insert into post (title, content, "creatorId", "createdAt") values ('Preaching to the Perverted', 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.
    
    Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', 3, '2022-07-26T01:11:00Z');
    insert into post (title, content, "creatorId", "createdAt") values ('Little Thief, The (La petite voleuse)', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', 4, '2022-02-18T00:04:35Z');
    insert into post (title, content, "creatorId", "createdAt") values ('You''re Telling Me!', 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.
    
    In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', 7, '2021-11-23T14:57:13Z');
    insert into post (title, content, "creatorId", "createdAt") values ('Without Warning', 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', 4, '2022-07-21T00:27:18Z');
    insert into post (title, content, "creatorId", "createdAt") values ('Going Berserk', 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', 7, '2022-05-06T12:55:02Z');
    insert into post (title, content, "creatorId", "createdAt") values ('Kit Kittredge: An American Girl', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.
    
    Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.
    
    Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', 5, '2022-09-04T14:33:00Z');
    insert into post (title, content, "creatorId", "createdAt") values ('Uncovered', 'Phasellus in felis. Donec semper sapien a libero. Nam dui.
    
    Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', 4, '2021-12-22T05:02:30Z');
    insert into post (title, content, "creatorId", "createdAt") values ('Facts of Life, The', 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.
    
    In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.
    
    Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', 1, '2022-08-10T01:43:05Z');
    insert into post (title, content, "creatorId", "createdAt") values ('Trick ''r Treat', 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.
    
    Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.
    
    Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', 3, '2022-05-11T07:24:10Z');
    insert into post (title, content, "creatorId", "createdAt") values ('Hanky Panky', 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', 1, '2022-03-18T07:25:23Z');
    insert into post (title, content, "creatorId", "createdAt") values ('Losin'' It', 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', 7, '2022-05-17T16:54:07Z');
    insert into post (title, content, "creatorId", "createdAt") values ('3 Holiday Tails (Golden Christmas 2: The Second Tail, A)', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.
    
    Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 7, '2022-01-11T01:09:29Z');
    insert into post (title, content, "creatorId", "createdAt") values ('Wake of the Red Witch', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 4, '2022-07-30T16:46:15Z');
    insert into post (title, content, "creatorId", "createdAt") values ('There''s Something About Mary', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', 7, '2022-05-27T02:59:05Z');
    insert into post (title, content, "creatorId", "createdAt") values ('Children of the Secret State', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 4, '2022-10-01T12:23:26Z');
    insert into post (title, content, "creatorId", "createdAt") values ('Nothing Personal', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 7, '2022-01-11T10:37:09Z');
    insert into post (title, content, "creatorId", "createdAt") values ('Two Times Lotte', 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.
    
    Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', 7, '2022-03-13T11:23:08Z');
    insert into post (title, content, "creatorId", "createdAt") values ('Mad City', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.
    
    Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', 5, '2022-08-05T16:54:18Z');
    insert into post (title, content, "creatorId", "createdAt") values ('Wrong Turn 3: Left for Dead', 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', 3, '2022-10-17T01:20:17Z');
    insert into post (title, content, "creatorId", "createdAt") values ('Unmade Beds', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.
    
    Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', 7, '2022-07-16T13:00:12Z');
    insert into post (title, content, "creatorId", "createdAt") values ('Dr. Dolittle: Tail to the Chief', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', 5, '2022-04-13T08:37:56Z');
    insert into post (title, content, "creatorId", "createdAt") values ('White Water Summer', 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.
    
    Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.
    
    Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', 7, '2022-10-08T04:51:13Z');
    insert into post (title, content, "creatorId", "createdAt") values ('Meteor', 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', 1, '2021-11-25T11:32:32Z');
    insert into post (title, content, "creatorId", "createdAt") values ('American Pop', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', 1, '2022-07-25T22:42:29Z');
    insert into post (title, content, "creatorId", "createdAt") values ('Nine', 'Fusce consequat. Nulla nisl. Nunc nisl.
    
    Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.
    
    In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', 5, '2021-12-03T00:45:32Z');
    insert into post (title, content, "creatorId", "createdAt") values ('Victor and the Secret of Crocodile Mansion', 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.
    
    In congue. Etiam justo. Etiam pretium iaculis justo.', 5, '2022-08-02T08:25:42Z');
    insert into post (title, content, "creatorId", "createdAt") values ('Switching Channels', 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.
    
    Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', 1, '2022-04-29T22:55:26Z');
    insert into post (title, content, "creatorId", "createdAt") values ('Children of the Corn II: The Final Sacrifice', 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', 1, '2022-05-26T12:02:36Z');
    insert into post (title, content, "creatorId", "createdAt") values ('Dawn Rider, The', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.
    
    Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.
    
    Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', 5, '2022-08-01T08:26:33Z');
    insert into post (title, content, "creatorId", "createdAt") values ('Front Line, The', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.
    
    Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.
    
    Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', 4, '2022-10-03T15:38:12Z');
    insert into post (title, content, "creatorId", "createdAt") values ('Eight Crazy Nights (Adam Sandler''s Eight Crazy Nights)', 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.
    
    Phasellus in felis. Donec semper sapien a libero. Nam dui.', 1, '2022-09-14T07:35:10Z');
    insert into post (title, content, "creatorId", "createdAt") values ('41-Year-Old Virgin Who Knocked Up Sarah Marshall and Felt Superbad About It, The', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.
    
    In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', 5, '2022-08-01T23:28:27Z');
    insert into post (title, content, "creatorId", "createdAt") values ('Uninvited, The', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', 1, '2022-06-05T06:23:11Z');
    insert into post (title, content, "creatorId", "createdAt") values ('Lara Croft: Tomb Raider', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', 1, '2021-12-28T21:30:35Z');`);
  }

  public async down(_: QueryRunner): Promise<void> {}
}
