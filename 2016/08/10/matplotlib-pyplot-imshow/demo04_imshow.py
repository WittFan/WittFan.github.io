"""
    demo04_imshow.py 绘制等高线图
"""
import numpy as np
import matplotlib.pyplot as plt

# 整理数据
n = 500
x, y = np.meshgrid(np.linspace(-3, 3, n),
                   np.linspace(-3, 3, n))
# print(x, y)
# 计算每个坐标点的高度
z = (1 - x/2 + x**5 + y**3) * np.exp(-x**2 - y**2)
# 绘制等高线
plt.figure('Imshow', facecolor='lightgray')
plt.title('Imshow', fontsize=18)
plt.grid(linestyle=':')
plt.imshow(z, cmap='jet', origin='lower')
plt.colorbar()
plt.savefig('Imshow.png')
plt.show()