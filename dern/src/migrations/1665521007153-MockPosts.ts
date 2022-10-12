import { MigrationInterface, QueryRunner } from "typeorm";

export class MockPosts1665521007154 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`insert into post (title, content, "creatorId") values ('Little Traitor, The', 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', 4);
    insert into post (title, content, "creatorId") values ('Cult of the Cobra', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.
    
    Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', 5);
    insert into post (title, content, "creatorId") values ('Garden Party', 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.
    
    Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', 3);
    insert into post (title, content, "creatorId") values ('Cold Weather', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.
    
    Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', 5);
    insert into post (title, content, "creatorId") values ('Part of the Weekend Never Dies', 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.
    
    Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', 4);
    insert into post (title, content, "creatorId") values ('After School Midnighters (Hôkago middonaitâzu)', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 5);
    insert into post (title, content, "creatorId") values ('Jolly Boys'' Last Stand, The', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.
    
    Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.
    
    Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', 5);
    insert into post (title, content, "creatorId") values ('American Winter', 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', 5);
    insert into post (title, content, "creatorId") values ('Dominick and Eugene', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', 5);
    insert into post (title, content, "creatorId") values ('Elusive Summer of ''68, The (Varljivo leto ''68)', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.
    
    In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', 4);
    insert into post (title, content, "creatorId") values ('Trainspotting', 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', 4);
    insert into post (title, content, "creatorId") values ('Sabrina', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 4);
    insert into post (title, content, "creatorId") values ('Breathless', 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', 4);
    insert into post (title, content, "creatorId") values ('Visiteurs du soir, Les (Devil''s Envoys, The)', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.
    
    Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.
    
    Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', 1);
    insert into post (title, content, "creatorId") values ('Ole dole doff', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.
    
    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
    
    Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 5);
    insert into post (title, content, "creatorId") values ('Funhouse, The', 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', 4);`);
  }

  public async down(_: QueryRunner): Promise<void> {}
}
