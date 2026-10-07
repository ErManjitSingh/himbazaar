import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:himbazaar_mobile/theme/app_colors.dart';

class OnboardingScreen extends StatelessWidget {
  const OnboardingScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.cream,
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.all(24),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              const Spacer(),
              const Text(
                'Discover authentic\nHimachali products',
                style: TextStyle(
                  color: AppColors.deep,
                  fontSize: 32,
                  fontWeight: FontWeight.w600,
                  height: 1.15,
                ),
              ),
              const SizedBox(height: 12),
              const Text(
                'Honey, ghee, shawls, spices and crafts — straight from the mountains.',
                style: TextStyle(color: AppColors.muted, fontSize: 15, height: 1.5),
              ),
              const Spacer(),
              SizedBox(
                width: double.infinity,
                child: ElevatedButton(
                  onPressed: () => context.go('/home'),
                  child: const Text('Start exploring'),
                ),
              ),
              TextButton(
                onPressed: () => context.go('/login'),
                child: const Text('Sign in'),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
