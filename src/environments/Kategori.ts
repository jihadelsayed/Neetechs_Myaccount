


interface CategoriesNode {
   name: string;
   children?: CategoriesNode[];
 }
 const CategoriesList= [
   {
     name: 'Fruit',
     children: [
       {name: 'Apple'},
       {name: 'Banana'},
       {name: 'Fruit loops'},
     ]
   }, {
     name: 'Vegetables',
     children: [
       {
         name: 'Green',
         children: [
           {name: 'Broccoli'},
           {name: 'Brussels sprouts'},
         ]
       }, {
         name: 'Orange',
         children: [
           {name: 'Pumpkins'},
           {name: 'Carrots'},
         ]
       },
     ]
   },
 ];