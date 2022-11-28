import tkinter as tk
from tkinter import Scrollbar, Listbox, RIGHT, END, BOTH, Y, LEFT, TOP
from matplotlib.backends.backend_tkagg import FigureCanvasTkAgg, NavigationToolbar2Tk

# WORK IN PROGRESS

def gui_plot(figures: list, max_columns = 4):
    root = tk.Tk()
    scrollbar = Scrollbar(root)
    scrollbar.pack(side=RIGHT, fill=Y)

    frame = tk.Frame()
    mylist = Listbox(frame, yscrollcommand=scrollbar.set)

    for i, fig in enumerate(figures):
        canvas = FigureCanvasTkAgg(fig, master=frame)  # Initializing the FigureCanvasTkAgg Class Object.
        canvas.draw()
        tk_canvas = canvas.get_tk_widget()  # Getting the Figure canvas as a tkinter widget
        tk_canvas.pack()  # Packing it into it's master window.
        mylist.insert(END, tk_canvas)

    mylist.pack(side=LEFT)
    scrollbar.config(command=mylist.yview)
    root.mainloop()