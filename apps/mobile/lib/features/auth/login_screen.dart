import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:himbazaar_mobile/theme/app_colors.dart';

class LoginScreen extends StatelessWidget {
  const LoginScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Sign in')),
      body: Padding(
        padding: const EdgeInsets.all(24),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const Text(
              'Welcome back',
              style: TextStyle(fontSize: 28, fontWeight: FontWeight.w600, color: AppColors.deep),
            ),
            const SizedBox(height: 8),
            const Text('OTP login UI — wire to API later.', style: TextStyle(color: AppColors.muted)),
            const SizedBox(height: 24),
            const TextField(
              keyboardType: TextInputType.phone,
              decoration: InputDecoration(labelText: 'Mobile number', hintText: '10-digit number'),
            ),
            const SizedBox(height: 16),
            SizedBox(
              width: double.infinity,
              child: ElevatedButton(
                onPressed: () => context.go('/home'),
                child: const Text('Continue'),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
