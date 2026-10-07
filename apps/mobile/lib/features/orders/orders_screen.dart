import 'package:flutter/material.dart';
import 'package:himbazaar_mobile/theme/app_colors.dart';

class OrdersScreen extends StatelessWidget {
  const OrdersScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Orders')),
      body: const Padding(
        padding: EdgeInsets.all(20),
        child: Text(
          'Orders — mock UI ready for API connection.',
          style: TextStyle(color: AppColors.muted, height: 1.5),
        ),
      ),
    );
  }
}
