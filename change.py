import re;

string = '''
	self.C3_ExpressionFuncs = [
		() => "P1",
		() => "head",
		() => -10,
		() => 10,
		() => 0,
		() => 1,
		p => {
			const n0 = p._GetNode(0);
			const f1 = p._GetNode(1).GetBoundMethod();
			return () => ((n0.ExpBehavior() * 2) * f1());
		},
		p => {
			const n0 = p._GetNode(0);
			return () => n0.ExpObject(1);
		},
		p => {
			const f0 = p._GetNode(0).GetBoundMethod();
			const v1 = p._GetNode(1).GetVar();
			const v2 = p._GetNode(2).GetVar();
			return () => f0(v1.GetValue(), v2.GetValue());
		},
		p => {
			const f0 = p._GetNode(0).GetBoundMethod();
			const v1 = p._GetNode(1).GetVar();
			const v2 = p._GetNode(2).GetVar();
			return () => (f0(v1.GetValue(), v2.GetValue()) * (-1));
		},
		p => {
			const v0 = p._GetNode(0).GetVar();
			return () => v0.GetValue();
		},
		p => {
			const v0 = p._GetNode(0).GetVar();
			return () => (v0.GetValue() * (-1));
		},
		p => {
			const n0 = p._GetNode(0);
			const f1 = p._GetNode(1).GetBoundMethod();
			const v2 = p._GetNode(2).GetVar();
			return () => ((n0.ExpInstVar() * f1()) * v2.GetValue());
		},
		p => {
			const n0 = p._GetNode(0);
			const f1 = p._GetNode(1).GetBoundMethod();
			const v2 = p._GetNode(2).GetVar();
			return () => C3.lerp(n0.ExpInstVar(), 0, (f1() / v2.GetValue()));
		},
		() => -8,
		() => 8,
		p => {
			const n0 = p._GetNode(0);
			const f1 = p._GetNode(1).GetBoundMethod();
			const v2 = p._GetNode(2).GetVar();
			return () => C3.lerp(n0.ExpInstVar(), 0, ((f1() / v2.GetValue()) / 2));
		},
		p => {
			const v0 = p._GetNode(0).GetVar();
			const f1 = p._GetNode(1).GetBoundMethod();
			const v2 = p._GetNode(2).GetVar();
			return () => ((v0.GetValue() * f1()) * v2.GetValue());
		},
		() => "Control P1",
		() => 2,
		p => {
			const v0 = p._GetNode(0).GetVar();
			const f1 = p._GetNode(1).GetBoundMethod();
			return () => (v0.GetValue() * f1());
		},
		p => {
			const n0 = p._GetNode(0);
			return () => n0.ExpObject();
		},
		() => 180,
		p => {
			const n0 = p._GetNode(0);
			const v1 = p._GetNode(1).GetVar();
			return () => (n0.ExpObject() + v1.GetValue());
		},
		p => {
			const n0 = p._GetNode(0);
			const v1 = p._GetNode(1).GetVar();
			return () => (n0.ExpObject() - v1.GetValue());
		},
		() => -1,
		() => 0.1,
		() => "enablePota",
		p => {
			const n0 = p._GetNode(0);
			const n1 = p._GetNode(1);
			const f2 = p._GetNode(2).GetBoundMethod();
			const f3 = p._GetNode(3).GetBoundMethod();
			const v4 = p._GetNode(4).GetVar();
			return () => (((((60 - n0.ExpObject()) * (n1.ExpObject() / 160)) * f2(0.9, 1.1)) * f3()) * v4.GetValue());
		},
		p => {
			const n0 = p._GetNode(0);
			const n1 = p._GetNode(1);
			const f2 = p._GetNode(2).GetBoundMethod();
			const f3 = p._GetNode(3).GetBoundMethod();
			const v4 = p._GetNode(4).GetVar();
			return () => ((((((-n0.ExpObject()) - 50) * (n1.ExpObject() / 160)) * f2(0.9, 1.1)) * f3()) * v4.GetValue());
		},
		() => "wait",
		() => 0.3,
		() => 100,
		p => {
			const n0 = p._GetNode(0);
			const n1 = p._GetNode(1);
			return () => ((-5) * (n0.ExpObject() - n1.ExpObject(1)));
		},
		() => "Skin P1",
		p => {
			const n0 = p._GetNode(0);
			return () => n0.ExpObject(6);
		},
		p => {
			const f0 = p._GetNode(0).GetBoundMethod();
			const f1 = p._GetNode(1).GetBoundMethod();
			const n2 = p._GetNode(2);
			const n3 = p._GetNode(3);
			return () => f0(f1(0.2, (1 - ((n2.ExpObject() - n3.ExpObject()) / 150))), 1);
		},
		() => "Arm P1",
		p => {
			const n0 = p._GetNode(0);
			return () => n0.ExpObject("arm1");
		},
		() => 125,
		p => {
			const n0 = p._GetNode(0);
			const n1 = p._GetNode(1);
			const f2 = p._GetNode(2).GetBoundMethod();
			return () => C3.lerp(n0.ExpObject(), n1.ExpObject(1), (f2() * 10));
		},
		() => "P2",
		() => "Control P2",
		() => "Skin P2",
		() => "Arm P2",
		() => "P3",
		() => 3,
		p => {
			const f0 = p._GetNode(0).GetBoundMethod();
			const v1 = p._GetNode(1).GetVar();
			const v2 = p._GetNode(2).GetVar();
			const n3 = p._GetNode(3);
			return () => (f0(v1.GetValue(), v2.GetValue()) * n3.ExpInstVar());
		},
		p => {
			const f0 = p._GetNode(0).GetBoundMethod();
			const v1 = p._GetNode(1).GetVar();
			const v2 = p._GetNode(2).GetVar();
			const n3 = p._GetNode(3);
			return () => ((f0(v1.GetValue(), v2.GetValue()) * (-1)) * n3.ExpInstVar());
		},
		() => "Control P3",
		() => 4,
		p => {
			const f0 = p._GetNode(0).GetBoundMethod();
			const n1 = p._GetNode(1);
			return () => f0(n1.ExpObject(), 180);
		},
		p => {
			const n0 = p._GetNode(0);
			const v1 = p._GetNode(1).GetVar();
			return () => (n0.ExpObject() + (-v1.GetValue()));
		},
		p => {
			const n0 = p._GetNode(0);
			const v1 = p._GetNode(1).GetVar();
			return () => (n0.ExpObject() - (-v1.GetValue()));
		},
		p => {
			const n0 = p._GetNode(0);
			const f1 = p._GetNode(1).GetBoundMethod();
			const n2 = p._GetNode(2);
			const f3 = p._GetNode(3).GetBoundMethod();
			const f4 = p._GetNode(4).GetBoundMethod();
			const v5 = p._GetNode(5).GetVar();
			return () => (((((225 - n0.ExpObject()) * (f1(n2.ExpObject(), 0) / 160)) * f3(0.9, 1.1)) * f4()) * v5.GetValue());
		},
		p => {
			const n0 = p._GetNode(0);
			const f1 = p._GetNode(1).GetBoundMethod();
			const n2 = p._GetNode(2);
			const f3 = p._GetNode(3).GetBoundMethod();
			const f4 = p._GetNode(4).GetBoundMethod();
			const v5 = p._GetNode(5).GetVar();
			return () => ((((((-n0.ExpObject()) - 50) * (f1(n2.ExpObject(), 0) / 160)) * f3(0.9, 1.1)) * f4()) * v5.GetValue());
		},
		() => "Skin P3",
		() => "Arm P3",
		() => "P4",
		() => "Control P4",
		() => "Skin P4",
		() => "Arm P4",
		() => "Ball",
		() => 60,
		p => {
			const n0 = p._GetNode(0);
			return () => (n0.ExpBehavior() * 5);
		},
		p => {
			const n0 = p._GetNode(0);
			const v1 = p._GetNode(1).GetVar();
			const v2 = p._GetNode(2).GetVar();
			return () => C3.clamp(n0.ExpBehavior(), (-v1.GetValue()), v2.GetValue());
		},
		p => {
			const f0 = p._GetNode(0).GetBoundMethod();
			const n1 = p._GetNode(1);
			const n2 = p._GetNode(2);
			const n3 = p._GetNode(3);
			return () => f0(0.2, (n1.ExpInstVar_Family() - ((n2.ExpObject() - n3.ExpObject()) / 150)));
		},
		p => {
			const f0 = p._GetNode(0).GetBoundMethod();
			const n1 = p._GetNode(1);
			const n2 = p._GetNode(2);
			return () => (f0(Math.abs(n1.ExpBehavior()), 20) * (n2.ExpObject() / 8));
		},
		() => 15,
		() => 275,
		() => "",
		p => {
			const n0 = p._GetNode(0);
			return () => (n0.ExpObject() + 5);
		},
		() => 144,
		() => 146,
		() => -5,
		p => {
			const n0 = p._GetNode(0);
			const n1 = p._GetNode(1);
			return () => (n0.ExpInstVar() * n1.ExpBehavior());
		},
		() => "Players",
		p => {
			const n0 = p._GetNode(0);
			const v1 = p._GetNode(1).GetVar();
			const v2 = p._GetNode(2).GetVar();
			return () => C3.clamp(n0.ExpBehavior(), ((-1) * v1.GetValue()), v2.GetValue());
		},
		p => {
			const n0 = p._GetNode(0);
			return () => C3.clamp(n0.ExpBehavior(), (-100), 100);
		},
		p => {
			const n0 = p._GetNode(0);
			return () => n0.ExpBehavior();
		},
		p => {
			const n0 = p._GetNode(0);
			const n1 = p._GetNode(1);
			return () => ((n0.ExpBehavior() * 3) + n1.ExpBehavior());
		},
		p => {
			const n0 = p._GetNode(0);
			const v1 = p._GetNode(1).GetVar();
			return () => ((n0.ExpBehavior() * 3) + v1.GetValue());
		},
		p => {
			const n0 = p._GetNode(0);
			return () => (n0.ExpBehavior() / 2);
		},
		() => "General",
		p => {
			const f0 = p._GetNode(0).GetBoundMethod();
			return () => f0("BG");
		},
		p => {
			const f0 = p._GetNode(0).GetBoundMethod();
			const f1 = p._GetNode(1).GetBoundMethod();
			return () => ((f0("BG") - f1("BG")) + 100);
		},
		p => {
			const f0 = p._GetNode(0).GetBoundMethod();
			const n1 = p._GetNode(1);
			return () => ((f0("BG") - n1.ExpObject()) + 100);
		},
		p => {
			const f0 = p._GetNode(0).GetBoundMethod();
			return () => (f0("BG") - 50);
		},
		p => {
			const f0 = p._GetNode(0).GetBoundMethod();
			const f1 = p._GetNode(1).GetBoundMethod();
			return () => f0(f1(8));
		},
		p => {
			const f0 = p._GetNode(0).GetBoundMethod();
			return () => f0(0, 1, 2);
		},
		p => {
			const f0 = p._GetNode(0).GetBoundMethod();
			return () => f0(149, 237, 244);
		},
		p => {
			const f0 = p._GetNode(0).GetBoundMethod();
			return () => f0(255, 214, 159);
		},
		p => {
			const f0 = p._GetNode(0).GetBoundMethod();
			return () => f0(254, 240, 220);
		},
		p => {
			const f0 = p._GetNode(0).GetBoundMethod();
			return () => f0(89, 89, 198);
		},
		p => {
			const f0 = p._GetNode(0).GetBoundMethod();
			return () => f0(119, 120, 210);
		},
		() => "back",
		p => {
			const f0 = p._GetNode(0).GetBoundMethod();
			return () => f0(82, 82, 186);
		},
		() => "middle",
		p => {
			const f0 = p._GetNode(0).GetBoundMethod();
			return () => f0(72, 68, 159);
		},
		() => "front",
		p => {
			const f0 = p._GetNode(0).GetBoundMethod();
			return () => f0(63, 52, 145);
		},
		() => 5,
		() => 6,
		() => 7,
		p => {
			const f0 = p._GetNode(0).GetBoundMethod();
			const f1 = p._GetNode(1).GetBoundMethod();
			const n2 = p._GetNode(2);
			return () => f0(f1(n2.ExpObject()));
		},
		p => {
			const f0 = p._GetNode(0).GetBoundMethod();
			const f1 = p._GetNode(1).GetBoundMethod();
			const f2 = p._GetNode(2).GetBoundMethod();
			const f3 = p._GetNode(3).GetBoundMethod();
			return () => f0(f1(138, 72, 54), f2(255, 216, 60), f3(39, 39, 39));
		},
		p => {
			const f0 = p._GetNode(0).GetBoundMethod();
			const f1 = p._GetNode(1).GetBoundMethod();
			const f2 = p._GetNode(2).GetBoundMethod();
			const f3 = p._GetNode(3).GetBoundMethod();
			const f4 = p._GetNode(4).GetBoundMethod();
			return () => f0(f1(255, 225, 188), f2(143, 98, 87), f3(246, 202, 159), f4(214, 169, 124));
		},
		() => "Control",
		p => {
			const n0 = p._GetNode(0);
			const f1 = p._GetNode(1).GetBoundMethod();
			return () => (n0.ExpObject() - f1("UI"));
		},
		p => {
			const f0 = p._GetNode(0).GetBoundMethod();
			const f1 = p._GetNode(1).GetBoundMethod();
			return () => (f0("UI") - f1("UI"));
		},
		() => "jump1",
		() => "jump2",
		() => "Goal",
		p => {
			const v0 = p._GetNode(0).GetVar();
			const v1 = p._GetNode(1).GetVar();
			return () => (v0.GetValue() + v1.GetValue());
		},
		p => {
			const n0 = p._GetNode(0);
			return () => n0.ExpInstVar();
		},
		p => {
			const n0 = p._GetNode(0);
			return () => (n0.ExpObject() * 1.2);
		},
		p => {
			const n0 = p._GetNode(0);
			return () => (n0.ExpObject() / 1.2);
		},
		() => 0.05,
		p => {
			const n0 = p._GetNode(0);
			return () => ((((n0.ExpObject()) === ("rainBow") ? 1 : 0)) ? (2) : (1));
		},
		() => "blink1",
		() => 0.2,
		() => 0.01,
		() => "black",
		() => "red",
		p => {
			const f0 = p._GetNode(0).GetBoundMethod();
			const n1 = p._GetNode(1);
			const f2 = p._GetNode(2).GetBoundMethod();
			return () => C3.lerp(f0(), n1.ExpObject(), f2());
		},
		p => {
			const f0 = p._GetNode(0).GetBoundMethod();
			return () => f0();
		},
		p => {
			const f0 = p._GetNode(0).GetBoundMethod();
			const f1 = p._GetNode(1).GetBoundMethod();
			return () => C3.lerp(f0(), 1.5, f1());
		},
		() => 1.2,
		p => {
			const f0 = p._GetNode(0).GetBoundMethod();
			return () => f0(255, 200, 37);
		},
		() => "blink2",
		p => {
			const f0 = p._GetNode(0).GetBoundMethod();
			return () => f0(255, 255, 255);
		},
		() => "End",
		() => "OPOutOver",
		() => "OP",
		p => {
			const n0 = p._GetNode(0);
			return () => n0.ExpBehavior("OPOutOver");
		},
		() => "menu",
		() => "music",
		() => "sound",
		() => "Op",
		() => "Top",
		() => 26,
		() => 290,
		() => 27,
		() => 21,
		() => 55,
		() => -160,
		() => 39,
		() => "appear",
		() => 145,
		() => 110,
		() => 113,
		() => "CPU",
		() => "jump",
		() => "attack",
		() => 0.5,
		() => 90,
		p => {
			const f0 = p._GetNode(0).GetBoundMethod();
			return () => (0.5 + (f0((-2), 2) / 10));
		},
		() => 360,
		() => 0.7,
		p => {
			const n0 = p._GetNode(0);
			return () => (n0.ExpObject() + 2);
		},
		() => 355,
		() => "Trail",
		p => {
			const n0 = p._GetNode(0);
			return () => (n0.ExpObject() + 85);
		},
		p => {
			const n0 = p._GetNode(0);
			return () => (n0.ExpObject() - 1);
		},
		p => {
			const f0 = p._GetNode(0).GetBoundMethod();
			return () => f0(0, 0, 0, 0);
		},
		p => {
			const n0 = p._GetNode(0);
			return () => (n0.ExpObject() - 3);
		},
		p => {
			const f0 = p._GetNode(0).GetBoundMethod();
			return () => (f0() + 1);
		},
		p => {
			const n0 = p._GetNode(0);
			const v1 = p._GetNode(1).GetVar();
			return () => n0.ExpObject(v1.GetValue(), 0);
		},
		p => {
			const n0 = p._GetNode(0);
			const v1 = p._GetNode(1).GetVar();
			return () => n0.ExpObject(v1.GetValue(), 1);
		},
		p => {
			const n0 = p._GetNode(0);
			const v1 = p._GetNode(1).GetVar();
			const n2 = p._GetNode(2);
			const v3 = p._GetNode(3).GetVar();
			const n4 = p._GetNode(4);
			const v5 = p._GetNode(5).GetVar();
			const n6 = p._GetNode(6);
			const v7 = p._GetNode(7).GetVar();
			return () => (C3.toDegrees(C3.angleTo(n0.ExpObject((v1.GetValue() - 1), 0), n2.ExpObject((v3.GetValue() - 1), 1), n4.ExpObject(v5.GetValue(), 0), n6.ExpObject(v7.GetValue(), 1))) + 90);
		},
		p => {
			const n0 = p._GetNode(0);
			const v1 = p._GetNode(1).GetVar();
			return () => n0.ExpObject((v1.GetValue() + 1), 0);
		},
		p => {
			const n0 = p._GetNode(0);
			const v1 = p._GetNode(1).GetVar();
			return () => n0.ExpObject((v1.GetValue() + 1), 1);
		},
		p => {
			const n0 = p._GetNode(0);
			const v1 = p._GetNode(1).GetVar();
			const n2 = p._GetNode(2);
			const v3 = p._GetNode(3).GetVar();
			const n4 = p._GetNode(4);
			const v5 = p._GetNode(5).GetVar();
			const n6 = p._GetNode(6);
			const v7 = p._GetNode(7).GetVar();
			return () => (C3.toDegrees(C3.angleTo(n0.ExpObject(v1.GetValue(), 0), n2.ExpObject(v3.GetValue(), 1), n4.ExpObject((v5.GetValue() + 1), 0), n6.ExpObject((v7.GetValue() + 1), 1))) + 90);
		},
		p => {
			const v0 = p._GetNode(0).GetVar();
			const n1 = p._GetNode(1);
			const v2 = p._GetNode(2).GetVar();
			const v3 = p._GetNode(3).GetVar();
			return () => (v0.GetValue() - ((n1.ExpInstVar_Family() * Math.cos(C3.toRadians(v2.GetValue()))) * v3.GetValue()));
		},
		p => {
			const v0 = p._GetNode(0).GetVar();
			const n1 = p._GetNode(1);
			const v2 = p._GetNode(2).GetVar();
			const v3 = p._GetNode(3).GetVar();
			return () => (v0.GetValue() - ((n1.ExpInstVar_Family() * Math.sin(C3.toRadians(v2.GetValue()))) * v3.GetValue()));
		},
		p => {
			const v0 = p._GetNode(0).GetVar();
			const n1 = p._GetNode(1);
			const v2 = p._GetNode(2).GetVar();
			const v3 = p._GetNode(3).GetVar();
			return () => (v0.GetValue() + ((n1.ExpInstVar_Family() * Math.cos(C3.toRadians(v2.GetValue()))) * v3.GetValue()));
		},
		p => {
			const v0 = p._GetNode(0).GetVar();
			const n1 = p._GetNode(1);
			const v2 = p._GetNode(2).GetVar();
			const v3 = p._GetNode(3).GetVar();
			return () => (v0.GetValue() + ((n1.ExpInstVar_Family() * Math.sin(C3.toRadians(v2.GetValue()))) * v3.GetValue()));
		},
		p => {
			const f0 = p._GetNode(0).GetBoundMethod();
			const n1 = p._GetNode(1);
			const v2 = p._GetNode(2).GetVar();
			const v3 = p._GetNode(3).GetVar();
			return () => f0(100, 100, 100, ((n1.ExpInstVar_Family() * v2.GetValue()) * v3.GetValue()));
		},
		() => "rainBow",
		() => "7",
		() => "1",
		p => {
			const f0 = p._GetNode(0).GetBoundMethod();
			return () => f0(247, 237, 0);
		},
		() => "2",
		p => {
			const f0 = p._GetNode(0).GetBoundMethod();
			return () => f0(237, 174, 1);
		},
		() => "3",
		p => {
			const f0 = p._GetNode(0).GetBoundMethod();
			return () => f0(230, 0, 0);
		},
		() => "4",
		p => {
			const f0 = p._GetNode(0).GetBoundMethod();
			return () => f0(133, 31, 228);
		},
		() => "5",
		p => {
			const f0 = p._GetNode(0).GetBoundMethod();
			return () => f0(34, 207, 250);
		},
		() => "6",
		p => {
			const f0 = p._GetNode(0).GetBoundMethod();
			return () => f0(17, 138, 217);
		},
		p => {
			const f0 = p._GetNode(0).GetBoundMethod();
			return () => f0(126, 224, 1);
		},
		() => "Bonus",
		() => 95,
		p => {
			const f0 = p._GetNode(0).GetBoundMethod();
			const f1 = p._GetNode(1).GetBoundMethod();
			return () => ((f0("Top") - f1("Top")) * 2);
		},
		p => {
			const f0 = p._GetNode(0).GetBoundMethod();
			const f1 = p._GetNode(1).GetBoundMethod();
			const f2 = p._GetNode(2).GetBoundMethod();
			return () => f0((-1), (-1), (-1), f1(f2(2, 2, 1, 0)));
		},
		p => {
			const f0 = p._GetNode(0).GetBoundMethod();
			const f1 = p._GetNode(1).GetBoundMethod();
			const f2 = p._GetNode(2).GetBoundMethod();
			return () => f0((-1), f1(f2(3)));
		},
		p => {
			const v0 = p._GetNode(0).GetVar();
			const f1 = p._GetNode(1).GetBoundMethod();
			const f2 = p._GetNode(2).GetBoundMethod();
			const f3 = p._GetNode(3).GetBoundMethod();
			const f4 = p._GetNode(4).GetBoundMethod();
			const f5 = p._GetNode(5).GetBoundMethod();
			return () => ((((v0.GetValue()) === (0) ? 1 : 0)) ? (f1((-1), (-1), f2(1, 2))) : (f3((-1), (-1), f4(f5(3)))));
		},
		p => {
			const f0 = p._GetNode(0).GetBoundMethod();
			const f1 = p._GetNode(1).GetBoundMethod();
			const f2 = p._GetNode(2).GetBoundMethod();
			return () => f0(0, f1(f2(3)));
		},
		p => {
			const f0 = p._GetNode(0).GetBoundMethod();
			return () => f0(0, 0, 1, 2, 3);
		},
		p => {
			const n0 = p._GetNode(0);
			const n1 = p._GetNode(1);
			return () => (n0.ExpObject() + (((n1.ExpInstVar() + 0)) ? ((-3)) : (3)));
		},
		p => {
			const v0 = p._GetNode(0).GetVar();
			const f1 = p._GetNode(1).GetBoundMethod();
			const v2 = p._GetNode(2).GetVar();
			return () => ((v0.GetValue() + ((((f1(v2.GetValue())) > (0) ? 1 : 0)) ? (" + ") : (""))) + "SHORT ARM");
		},
		p => {
			const v0 = p._GetNode(0).GetVar();
			const f1 = p._GetNode(1).GetBoundMethod();
			const v2 = p._GetNode(2).GetVar();
			return () => ((v0.GetValue() + ((((f1(v2.GetValue())) > (0) ? 1 : 0)) ? (" + ") : (""))) + "LONG ARM");
		},
		() => 200,
		() => 150,
		p => {
			const v0 = p._GetNode(0).GetVar();
			const f1 = p._GetNode(1).GetBoundMethod();
			const v2 = p._GetNode(2).GetVar();
			return () => ((v0.GetValue() + ((((f1(v2.GetValue())) > (0) ? 1 : 0)) ? (" + ") : (""))) + "SNOW");
		},
		p => {
			const f0 = p._GetNode(0).GetBoundMethod();
			return () => f0(230, 230, 230);
		},
		() => -281492157629439,
		p => {
			const f0 = p._GetNode(0).GetBoundMethod();
			return () => f0(255, 228, 228);
		},
		() => 400,
		() => 250,
		p => {
			const f0 = p._GetNode(0).GetBoundMethod();
			return () => f0(229, 229, 229);
		},
		p => {
			const f0 = p._GetNode(0).GetBoundMethod();
			return () => f0(162, 226, 253);
		},
		p => {
			const f0 = p._GetNode(0).GetBoundMethod();
			return () => f0(246, 252, 254);
		},
		p => {
			const f0 = p._GetNode(0).GetBoundMethod();
			return () => f0(195, 148, 89);
		},
		p => {
			const f0 = p._GetNode(0).GetBoundMethod();
			return () => f0(255, 229, 196);
		},
		p => {
			const f0 = p._GetNode(0).GetBoundMethod();
			return () => f0(100, 100, 100);
		},
		p => {
			;
			const v0 = p._GetNode(0).GetVar();
			const f1 = p._GetNode(1).GetBoundMethod();
			const v2 = p._GetNode(2).GetVar();
			return () => ((v0.GetValue() + ((((f1(v2.GetValue())) > (0) ? 1 : 0)) ? (" + ") : (""))) + "BIG HEAD");
		},
		() => 1.5,
		p => {
			const n0 = p._GetNode(0);
			return () => (n0.ExpObject() - 0.001);
		},
		p => {
			;
			const v0 = p._GetNode(0).GetVar();
			const f1 = p._GetNode(1).GetBoundMethod();
			const v2 = p._GetNode(2).GetVar();
			return () => ((v0.GetValue() + ((((f1(v2.GetValue())) > (0) ? 1 : 0)) ? (" + ") : (""))) + "SMALL HEAD");
		},
		() => 0.6,
		p => {
			;
			const v0 = p._GetNode(0).GetVar();
			const f1 = p._GetNode(1).GetBoundMethod();
			const v2 = p._GetNode(2).GetVar();
			return () => ((v0.GetValue() + ((((f1(v2.GetValue())) > (0) ? 1 : 0)) ? (" + ") : (""))) + "BUSINESS");
		},
		() => "Animation 2",
		p => {
			;
			const v0 = p._GetNode(0).GetVar();
			const f1 = p._GetNode(1).GetBoundMethod();
			const v2 = p._GetNode(2).GetVar();
			return () => ((v0.GetValue() + ((((f1(v2.GetValue())) > (0) ? 1 : 0)) ? (" + ") : (""))) + "HEAVY BALL");
		},
		() => "Game",
		() => "heavy",
		() => 50,
		() => 61,
		() => 11,
		() => 74,
		() => 86,
		() => 12,
		() => 105,
		() => 14,
		() => 130,
		() => 24,
		() => 19,
		() => 166,
		() => 20,
		() => 210,
		() => 242,
		() => 17,
		() => 270,
		() => 285,
		p => {
			;
			const v0 = p._GetNode(0).GetVar();
			const f1 = p._GetNode(1).GetBoundMethod();
			const v2 = p._GetNode(2).GetVar();
			return () => ((v0.GetValue() + ((((f1(v2.GetValue())) > (0) ? 1 : 0)) ? (" + ") : (""))) + "LIGHT BALL");
		},
		() => "kames",
		p => {
			;
			const v0 = p._GetNode(0).GetVar();
			const f1 = p._GetNode(1).GetBoundMethod();
			const v2 = p._GetNode(2).GetVar();
			return () => ((v0.GetValue() + ((((f1(v2.GetValue())) > (0) ? 1 : 0)) ? (" + ") : (""))) + "DOUBLE POINT");
		},
		p => {
			;
			const v0 = p._GetNode(0).GetVar();
			const f1 = p._GetNode(1).GetBoundMethod();
			const v2 = p._GetNode(2).GetVar();
			return () => ((v0.GetValue() + ((((f1(v2.GetValue())) > (0) ? 1 : 0)) ? (" + ") : (""))) + "LONG HOOP");
		},
		p => {
			const n0 = p._GetNode(0);
			return () => (n0.ExpObject() - 15);
		},
		p => {
			const n0 = p._GetNode(0);
			return () => (n0.ExpObject() + 15);
		},
		() => 141,
		p => {
			;
			const v0 = p._GetNode(0).GetVar();
			const f1 = p._GetNode(1).GetBoundMethod();
			const v2 = p._GetNode(2).GetVar();
			return () => ((v0.GetValue() + ((((f1(v2.GetValue())) > (0) ? 1 : 0)) ? (" + ") : (""))) + "SHORT HOOP");
		},
		p => {
			;
			const v0 = p._GetNode(0).GetVar();
			const f1 = p._GetNode(1).GetBoundMethod();
			const v2 = p._GetNode(2).GetVar();
			return () => ((v0.GetValue() + ((((f1(v2.GetValue())) > (0) ? 1 : 0)) ? (" + ") : (""))) + "LARGE HOOP");
		},
		p => {
			const n0 = p._GetNode(0);
			return () => (n0.ExpObject() + 6);
		},
		p => {
			const n0 = p._GetNode(0);
			const n1 = p._GetNode(1);
			return () => (n0.ExpObject() + ((((n1.ExpInstVar()) === (0) ? 1 : 0)) ? (3) : ((-3))));
		},
		p => {
			const n0 = p._GetNode(0);
			return () => (n0.ExpObject() - 6);
		},
		() => "UI",
		p => {
			const v0 = p._GetNode(0).GetVar();
			return () => (0.5 + (v0.GetValue() * 0.3));
		},
		() => -15,
		() => "refsoc",
		() => "show",
		() => -200,
		() => "Effect",
		() => "goal",
		() => 158,
		() => 30,
		() => "move",
		() => "move2",
		() => 450,
		() => "shrink",
		() => "bup",
		() => -6,
		() => "stopSine",
		p => {
			const f0 = p._GetNode(0).GetBoundMethod();
			const n1 = p._GetNode(1);
			const f2 = p._GetNode(2).GetBoundMethod();
			return () => f0(n1.ExpObject(), 0, (f2() * 10));
		},
		() => -3,
		() => "http://www.twoplayergames.org/?utm_source=Html5Game&utm_medium=BasketRandom",
		() => "NewWindow",
		() => 70,
		() => "Menu",
		p => {
			const n0 = p._GetNode(0);
			const n1 = p._GetNode(1);
			return () => (n0.ExpObject() - n1.ExpObject());
		},
		() => "size",
		() => -25,
		p => {
			const f0 = p._GetNode(0).GetBoundMethod();
			return () => f0(60);
		},
		() => "disappear",
		() => "OPOutMenu",
		p => {
			const n0 = p._GetNode(0);
			return () => n0.ExpInstVar_Family();
		},
		p => {
			const n0 = p._GetNode(0);
			return () => n0.ExpBehavior("OPOutMenu");
		},
		() => 1.15,
		p => {
			const n0 = p._GetNode(0);
			const n1 = p._GetNode(1);
			return () => (n0.ExpObject() + n1.ExpInstVar());
		},
		p => {
			const f0 = p._GetNode(0).GetBoundMethod();
			const f1 = p._GetNode(1).GetBoundMethod();
			return () => (f0("Top") - f1("Top"));
		},
		p => {
			const f0 = p._GetNode(0).GetBoundMethod();
			return () => f0(0, 10);
		},
		p => {
			const n0 = p._GetNode(0);
			return () => (n0.ExpObject() + 4);
		},
		() => 0.4,
		() => "Functions",
		() => "MoreGamesButtons",
		() => "xScale",
		() => 0.13,
		() => "MoreGamesFunctions",
		p => {
			const v0 = p._GetNode(0).GetVar();
			const v1 = p._GetNode(1).GetVar();
			const v2 = p._GetNode(2).GetVar();
			return () => ((("https://www.twoplayergames.org/action" + v0.GetValue()) + v1.GetValue()) + v2.GetValue());
		},
		p => {
			const v0 = p._GetNode(0).GetVar();
			const v1 = p._GetNode(1).GetVar();
			const v2 = p._GetNode(2).GetVar();
			return () => ((("https://www.twoplayergames.org/" + v0.GetValue()) + v1.GetValue()) + v2.GetValue());
		},
		() => "Game_1",
		p => {
			const v0 = p._GetNode(0).GetVar();
			const v1 = p._GetNode(1).GetVar();
			const v2 = p._GetNode(2).GetVar();
			return () => ((("https://www.twoplayergames.org/game/boxing-random" + v0.GetValue()) + v1.GetValue()) + v2.GetValue());
		},
		() => "Game_2",
		p => {
			const v0 = p._GetNode(0).GetVar();
			const v1 = p._GetNode(1).GetVar();
			const v2 = p._GetNode(2).GetVar();
			return () => ((("https://www.twoplayergames.org/game/soccer-random" + v0.GetValue()) + v1.GetValue()) + v2.GetValue());
		},
		() => "Game_3",
		p => {
			const v0 = p._GetNode(0).GetVar();
			const v1 = p._GetNode(1).GetVar();
			const v2 = p._GetNode(2).GetVar();
			return () => ((("https://www.twoplayergames.org/game/volley-random" + v0.GetValue()) + v1.GetValue()) + v2.GetValue());
		},
		() => "Google Play",
		() => "https://google.com",
		() => "Apple Store",
		() => "https://github.com",
		() => 35,
		() => 40,
		() => 170,
		() => 4800,
		() => 0.001,
		() => 0.65,
		() => 45,
		() => 165,
		() => 4700,
		() => 48,
		() => 160,
		() => 4500,
		() => 58,
		() => 0.8,
		() => 4000,
		() => 0.9,
		() => 2500,
		() => 80,
		() => 3500,
		() => 85,
		() => 9,
		() => 0.0001,
		() => 1.1,
		() => 7.5,
		() => 115,
		() => 175,
		() => 1.25,
		() => 1.45,
		() => 120,
		() => 75,
		() => 4100,
		() => 171,
		() => 1.4,
		() => 137,
		() => 5500,
		() => 238,
		() => 179,
		() => 6000,
		() => 272,
		() => "AD STARTED - BROWSER LOG ",
		() => "AD FINISHED - BROWSER LOG ",
		() => "AD ERROR - BROWSER LOG "
	];'''

split = string.split('\n')

current = 0;

for i in range(len(split)):
    orig = split[i]
    split[i] = re.sub(r'},', '}, // ' + str(current), split[i])
    split[i] = re.sub(r'(		\(\) \=\> (.*?))\,', '\g<0> // ' + str(current), split[i])

    if orig != split[i]:
        current += 1

with open('./out.txt', 'w') as f:
    f.write('\n'.join(split))