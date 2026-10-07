import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:himbazaar_mobile/theme/app_colors.dart';

class ProductDetailScreen extends StatelessWidget {
  const ProductDetailScreen({super.key, required this.slug});
  final String slug;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Product')),
      body: ListView(
        padding: const EdgeInsets.all(20),
        children: [
          Container(
            height: 280,
            decoration: BoxDecoration(
              color: AppColors.cream,
              borderRadius: BorderRadius.circular(12),
            ),
            alignment: Alignment.center,
            child: Text(slug, style: const TextStyle(color: AppColors.muted)),
          ),
          const SizedBox(height: 16),
          Text(
            slug.replaceAll('-', ' '),
            style: const TextStyle(
              fontSize: 24,
              fontWeight: FontWeight.w600,
              color: AppColors.deep,
            ),
          ),
          const SizedBox(height: 8),
          const Text(
            'From the Mountains — origin, seller and reviews will load from API.',
            style: TextStyle(color: AppColors.muted, height: 1.5),
          ),
          const SizedBox(height: 24),
          ElevatedButton(
            onPressed: () => context.push('/cart'),
            child: const Text('Add to cart'),
          ),
        ],
      ),
    );
  }
}
