import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:himbazaar_mobile/theme/app_colors.dart';

class SplashScreen extends StatefulWidget {
  const SplashScreen({super.key});

  @override
  State<SplashScreen> createState() => _SplashScreenState();
}

class _SplashScreenState extends State<SplashScreen> {
  @override
  void initState() {
    super.initState();
    Future.delayed(const Duration(milliseconds: 1400), () {
      if (mounted) context.go('/onboarding');
    });
  }

  @override
  Widget build(BuildContext context) {
    return const Scaffold(
      backgroundColor: AppColors.deep,
      body: Center(
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            Text(
              'HimBazaar',
              style: TextStyle(
                color: AppColors.white,
                fontSize: 36,
                fontWeight: FontWeight.w600,
                letterSpacing: -0.5,
              ),
            ),
            SizedBox(height: 8),
            Text(
              'From the Himalayas to Your Home',
              style: TextStyle(color: AppColors.gold, fontSize: 13),
            ),
          ],
        ),
      ),
    );
  }
}
