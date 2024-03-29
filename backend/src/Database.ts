// Source code generated by AppGPT (www.appgpt.tech)

 //Class to create tables and seed new database
import { DataSource } from "typeorm";
import { DBConfiguration } from "./Configuration";
import { SettingsEntity } from "./db/Settings.entity";
//autogenerate imports based on resources
import { UsersEntity } from "./db/Users.entity";
import { VendorsEntity } from "./db/Vendors.entity";
import { CustomersEntity } from "./db/Customers.entity";
import { InventoryEntity } from "./db/Inventory.entity";
import { ProductsEntity } from "./db/Products.entity";
import { ProductCategoriesEntity } from "./db/ProductCategories.entity";
import { DiscountsEntity } from "./db/Discounts.entity";
import { ShoppingCartEntity } from "./db/ShoppingCart.entity";
import { OrdersEntity } from "./db/Orders.entity";
import { OrderDetailsEntity } from "./db/OrderDetails.entity";
import { PaymentsEntity } from "./db/Payments.entity";
import { ReviewsEntity } from "./db/Reviews.entity";
import { SupportTicketsEntity } from "./db/SupportTickets.entity";

export class Database {
  static dbConfiguration: DBConfiguration;
  public static ds: DataSource;

  static async Initialize(dbConfiguration: DBConfiguration) {
    Database.dbConfiguration = dbConfiguration;
    let dbConfig: any = dbConfiguration as any;
    //Autogenerate entities array from resource names

    dbConfig.entities = [SettingsEntity, UsersEntity, VendorsEntity, CustomersEntity, InventoryEntity, ProductsEntity, ProductCategoriesEntity, DiscountsEntity, ShoppingCartEntity, OrdersEntity, OrderDetailsEntity, PaymentsEntity, ReviewsEntity, SupportTicketsEntity];
    Database.ds = new DataSource(dbConfig);
    await Database.ds.initialize();

    //TODO: Drop all tables


    await Database.Seed();
  }
  static async Seed() {
    let data: any = {"Users":[{"username":"username 1","email":"email 1","password":"password 1","role":"role 1","id":9},{"username":"username 2","email":"email 2","password":"password 2","role":"role 2","id":57},{"username":"username 3","email":"email 3","password":"password 3","role":"role 3","id":33},{"username":"username 4","email":"email 4","password":"password 4","role":"role 4","id":27},{"username":"username 5","email":"email 5","password":"password 5","role":"role 5","id":44}],"Vendors":[{"companyName":"companyName 1","contactName":"contactName 1","email":"email 1","password":"password 1","id":62},{"companyName":"companyName 2","contactName":"contactName 2","email":"email 2","password":"password 2","id":77},{"companyName":"companyName 3","contactName":"contactName 3","email":"email 3","password":"password 3","id":85},{"companyName":"companyName 4","contactName":"contactName 4","email":"email 4","password":"password 4","id":50},{"companyName":"companyName 5","contactName":"contactName 5","email":"email 5","password":"password 5","id":36}],"Customers":[{"customerName":"customerName 1","email":"email 1","password":"password 1","billingAddress":"billingAddress 1","shippingAddress":"shippingAddress 1","country":"country 1","phone":"phone 1","id":24},{"customerName":"customerName 2","email":"email 2","password":"password 2","billingAddress":"billingAddress 2","shippingAddress":"shippingAddress 2","country":"country 2","phone":"phone 2","id":76},{"customerName":"customerName 3","email":"email 3","password":"password 3","billingAddress":"billingAddress 3","shippingAddress":"shippingAddress 3","country":"country 3","phone":"phone 3","id":79},{"customerName":"customerName 4","email":"email 4","password":"password 4","billingAddress":"billingAddress 4","shippingAddress":"shippingAddress 4","country":"country 4","phone":"phone 4","id":36},{"customerName":"customerName 5","email":"email 5","password":"password 5","billingAddress":"billingAddress 5","shippingAddress":"shippingAddress 5","country":"country 5","phone":"phone 5","id":49}],"Inventory":[{"product":1,"quantity":1,"lowStockThreshold":1,"id":51},{"product":2,"quantity":2,"lowStockThreshold":2,"id":89},{"product":3,"quantity":3,"lowStockThreshold":3,"id":38},{"product":4,"quantity":4,"lowStockThreshold":4,"id":35},{"product":5,"quantity":5,"lowStockThreshold":5,"id":57}],"Products":[{"productName":"productName 1","vendor":1,"price":0.6,"weight":0.69,"description":"description 1","thumbnail":"thumbnail 1","image":"image 1","category":1,"creationDate":"2024-07-28T07:12:08.281Z","stock":1,"id":11},{"productName":"productName 2","vendor":2,"price":0.44,"weight":0.21,"description":"description 2","thumbnail":"thumbnail 2","image":"image 2","category":2,"creationDate":"2023-04-22T01:24:10.066Z","stock":2,"id":15},{"productName":"productName 3","vendor":3,"price":0.45,"weight":0.38,"description":"description 3","thumbnail":"thumbnail 3","image":"image 3","category":3,"creationDate":"2023-03-26T15:25:48.534Z","stock":3,"id":7},{"productName":"productName 4","vendor":4,"price":0.54,"weight":0.3,"description":"description 4","thumbnail":"thumbnail 4","image":"image 4","category":4,"creationDate":"2024-03-27T17:39:31.035Z","stock":4,"id":82},{"productName":"productName 5","vendor":5,"price":0.81,"weight":0.7,"description":"description 5","thumbnail":"thumbnail 5","image":"image 5","category":5,"creationDate":"2024-02-09T06:02:08.115Z","stock":5,"id":49}],"ProductCategories":[{"category":"category 1","id":39},{"category":"category 2","id":35},{"category":"category 3","id":26},{"category":"category 4","id":55},{"category":"category 5","id":87}],"Discounts":[{"product":1,"discountType":"discountType 1","description":"description 1","discountAmount":0.46,"discountPercent":0.06,"id":13},{"product":2,"discountType":"discountType 2","description":"description 2","discountAmount":0.66,"discountPercent":0.76,"id":57},{"product":3,"discountType":"discountType 3","description":"description 3","discountAmount":0.98,"discountPercent":0.47,"id":17},{"product":4,"discountType":"discountType 4","description":"description 4","discountAmount":0.95,"discountPercent":0.64,"id":82},{"product":5,"discountType":"discountType 5","description":"description 5","discountAmount":0.06,"discountPercent":0.56,"id":62}],"ShoppingCart":[{"customer":1,"product":1,"priceAtPurchase":0.34,"quantity":1,"id":32},{"customer":2,"product":2,"priceAtPurchase":0.35,"quantity":2,"id":38},{"customer":3,"product":3,"priceAtPurchase":0.98,"quantity":3,"id":81},{"customer":4,"product":4,"priceAtPurchase":0.95,"quantity":4,"id":68},{"customer":5,"product":5,"priceAtPurchase":0.5,"quantity":5,"id":22}],"Orders":[{"orderNumber":"orderNumber 1","customer":1,"totalAmount":0.08,"vat":0.67,"totalAmountWithVat":0.76,"shippingCost":0.29,"shippingAddress":"shippingAddress 1","orderAddress":"orderAddress 1","orderEmail":"orderEmail 1","orderDate":"2024-09-29T21:14:51.702Z","orderStatus":"orderStatus 1","trackingNo":"trackingNo 1","id":17},{"orderNumber":"orderNumber 2","customer":2,"totalAmount":0.27,"vat":0.66,"totalAmountWithVat":0.51,"shippingCost":0.78,"shippingAddress":"shippingAddress 2","orderAddress":"orderAddress 2","orderEmail":"orderEmail 2","orderDate":"2023-10-16T14:59:39.239Z","orderStatus":"orderStatus 2","trackingNo":"trackingNo 2","id":50},{"orderNumber":"orderNumber 3","customer":3,"totalAmount":0.97,"vat":0.67,"totalAmountWithVat":0.99,"shippingCost":0.67,"shippingAddress":"shippingAddress 3","orderAddress":"orderAddress 3","orderEmail":"orderEmail 3","orderDate":"2024-05-25T09:39:40.323Z","orderStatus":"orderStatus 3","trackingNo":"trackingNo 3","id":73},{"orderNumber":"orderNumber 4","customer":4,"totalAmount":0.07,"vat":0.89,"totalAmountWithVat":0.28,"shippingCost":0.08,"shippingAddress":"shippingAddress 4","orderAddress":"orderAddress 4","orderEmail":"orderEmail 4","orderDate":"2023-12-18T10:45:30.308Z","orderStatus":"orderStatus 4","trackingNo":"trackingNo 4","id":58},{"orderNumber":"orderNumber 5","customer":5,"totalAmount":0.57,"vat":0.42,"totalAmountWithVat":0.2,"shippingCost":0.69,"shippingAddress":"shippingAddress 5","orderAddress":"orderAddress 5","orderEmail":"orderEmail 5","orderDate":"2023-10-19T16:30:07.899Z","orderStatus":"orderStatus 5","trackingNo":"trackingNo 5","id":0}],"OrderDetails":[{"orderNumber":1,"line":1,"product":1,"price":0.72,"quantity":1,"id":93},{"orderNumber":2,"line":2,"product":2,"price":0.68,"quantity":2,"id":91},{"orderNumber":3,"line":3,"product":3,"price":0.64,"quantity":3,"id":58},{"orderNumber":4,"line":4,"product":4,"price":0.71,"quantity":4,"id":91},{"orderNumber":5,"line":5,"product":5,"price":0.45,"quantity":5,"id":67}],"Payments":[{"orderNumber":1,"amount":0.01,"paymentMethod":"paymentMethod 1","paymentDate":"2023-12-29T02:20:23.075Z","paymentStatus":"paymentStatus 1","id":88},{"orderNumber":2,"amount":0.81,"paymentMethod":"paymentMethod 2","paymentDate":"2023-06-26T22:19:54.090Z","paymentStatus":"paymentStatus 2","id":80},{"orderNumber":3,"amount":0.85,"paymentMethod":"paymentMethod 3","paymentDate":"2024-02-11T12:22:33.134Z","paymentStatus":"paymentStatus 3","id":20},{"orderNumber":4,"amount":0.39,"paymentMethod":"paymentMethod 4","paymentDate":"2025-01-27T11:31:57.854Z","paymentStatus":"paymentStatus 4","id":59},{"orderNumber":5,"amount":0.56,"paymentMethod":"paymentMethod 5","paymentDate":"2024-07-20T16:31:40.812Z","paymentStatus":"paymentStatus 5","id":53}],"Reviews":[{"product":1,"customer":1,"vendor":1,"rating":0.78,"reviewDetails":"reviewDetails 1","date":"2024-06-26T09:48:12.467Z","id":14},{"product":2,"customer":2,"vendor":2,"rating":0.83,"reviewDetails":"reviewDetails 2","date":"2024-03-14T23:17:30.108Z","id":34},{"product":3,"customer":3,"vendor":3,"rating":0.09,"reviewDetails":"reviewDetails 3","date":"2024-08-16T09:47:09.335Z","id":86},{"product":4,"customer":4,"vendor":4,"rating":0.1,"reviewDetails":"reviewDetails 4","date":"2024-04-27T11:36:07.648Z","id":51},{"product":5,"customer":5,"vendor":5,"rating":0.09,"reviewDetails":"reviewDetails 5","date":"2023-05-29T02:19:53.140Z","id":17}],"SupportTickets":[{"user":1,"customer":1,"description":"description 1","status":"status 1","creationDate":"2024-07-23T02:43:53.862Z","resolutionDate":"2024-11-08T01:13:21.535Z","id":62},{"user":2,"customer":2,"description":"description 2","status":"status 2","creationDate":"2024-09-25T07:01:23.668Z","resolutionDate":"2023-04-10T18:29:56.019Z","id":11},{"user":3,"customer":3,"description":"description 3","status":"status 3","creationDate":"2023-08-14T07:13:04.180Z","resolutionDate":"2024-01-07T06:35:59.062Z","id":93},{"user":4,"customer":4,"description":"description 4","status":"status 4","creationDate":"2023-12-03T12:01:19.746Z","resolutionDate":"2024-05-12T07:02:06.310Z","id":12},{"user":5,"customer":5,"description":"description 5","status":"status 5","creationDate":"2023-06-25T11:38:43.105Z","resolutionDate":"2024-12-01T11:27:00.365Z","id":77}]};
    //Autogenerate multiple such calls ie for each resource and its data object
    let isSeeded = await this.IsSeeded();
    //if (!isSeeded) {
    //forcing app recreation
    if (true){
      console.log('   Seeding database...');
      await this.SeedResource("UsersEntity", data.Users);
await this.SeedResource("VendorsEntity", data.Vendors);
await this.SeedResource("CustomersEntity", data.Customers);
await this.SeedResource("InventoryEntity", data.Inventory);
await this.SeedResource("ProductsEntity", data.Products);
await this.SeedResource("ProductCategoriesEntity", data.ProductCategories);
await this.SeedResource("DiscountsEntity", data.Discounts);
await this.SeedResource("ShoppingCartEntity", data.ShoppingCart);
await this.SeedResource("OrdersEntity", data.Orders);
await this.SeedResource("OrderDetailsEntity", data.OrderDetails);
await this.SeedResource("PaymentsEntity", data.Payments);
await this.SeedResource("ReviewsEntity", data.Reviews);
await this.SeedResource("SupportTicketsEntity", data.SupportTickets); 
      await this.SeedResource("SettingsEntity", {
        settingname: "isSeeded",
        settingvalue: "true",
      });
    }else{
      console.log('   Database seeded already!');
    }
  }
  static async IsSeeded() {
    const repo = Database.ds.getRepository("SettingsEntity");
    let rec: any = await repo.findOne({
      select: {
        settingname: true,
        settingvalue: true,
      },
      where: {
        settingname: "isSeeded",
      },
    });
    if (rec && rec.settingvalue) return true;
    return false;
  }
  static async SeedResource(resourceName: any, resourceData: any) {
    const repo = Database.ds.getRepository(resourceName);
    //await repo.clear();
    console.log('   Seeding table '+resourceName);
    await repo.upsert(resourceData, ["id"]);
  }
}

