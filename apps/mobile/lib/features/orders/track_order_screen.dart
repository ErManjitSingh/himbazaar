import 'package:flutter/material.dart';
import 'package:himbazaar_mobile/theme/app_colors.dart';

class TrackOrderScreen extends StatelessWidget {
  const TrackOrderScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Track Order')),
      body: const Padding(
        padding: EdgeInsets.all(20),
        child: Text(
          'Track Order — mock UI ready for API connection.',
          style: TextStyle(color: AppColors.muted, height: 1.5),
        ),
      ),
    );
  }
}
