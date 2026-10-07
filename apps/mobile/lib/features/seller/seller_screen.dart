import 'package:flutter/material.dart';
import 'package:himbazaar_mobile/theme/app_colors.dart';

class SellerScreen extends StatelessWidget {
  const SellerScreen({super.key, required this.slug});
  final String slug;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text(slug)),
      body: Padding(
        padding: const EdgeInsets.all(20),
        child: Text(
          'Seller store for $slug — API-ready placeholder.',
          style: const TextStyle(color: AppColors.muted),
        ),
      ),
    );
  }
}
