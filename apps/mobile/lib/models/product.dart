class Product {
  const Product({
    required this.id,
    required this.name,
    required this.slug,
    required this.price,
    required this.mrp,
    required this.imageUrl,
    required this.sellerId,
    required this.rating,
  });

  final String id;
  final String name;
  final String slug;
  final double price;
  final double mrp;
  final String imageUrl;
  final String sellerId;
  final double rating;

  factory Product.fromJson(Map<String, dynamic> json) => Product(
        id: json['_id'] as String,
        name: json['name'] as String,
        slug: json['slug'] as String,
        price: (json['price'] as num).toDouble(),
        mrp: (json['mrp'] as num).toDouble(),
        imageUrl: (json['images'] as List).isNotEmpty
            ? (json['images'][0]['url'] as String)
            : '',
        sellerId: json['sellerId'] as String,
        rating: (json['rating'] as num).toDouble(),
      );
}
